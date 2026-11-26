// Registro de leads do site. Recebe o contato antes de o WhatsApp abrir e repassa
// aos destinos configurados nas variáveis de ambiente da Vercel:
//   CALLMEBOT_PHONE e CALLMEBOT_APIKEY  -> aviso no WhatsApp do João (CallMeBot)
//   LEAD_WEBHOOK_URL (e LEAD_WEBHOOK_TOKEN, opcional) -> CRM, ex.: ConsórcioGo
// Todo lead também fica registrado nos logs da Vercel, para reenvio manual.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const LIMITE = 5;              // envios por endereço
const JANELA = 10 * 60 * 1000; // a cada 10 minutos
const envios = new Map();

const limpa = (v, max = 200) => String(v ?? '').replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, max);

function excedeu(ip) {
  const agora = Date.now();
  const lista = (envios.get(ip) || []).filter((t) => agora - t < JANELA);
  lista.push(agora);
  envios.set(ip, lista);
  if (envios.size > 5000) envios.clear();
  return lista.length > LIMITE;
}

function textoAviso(l) {
  const linhas = [
    `Novo lead do site (${l.origem})`,
    `Nome: ${l.nome}`,
    `WhatsApp: ${l.whatsapp}`,
    l.cidade && `Cidade: ${l.cidade}`,
    ...Object.entries(l.respostas).map(([k, v]) => `${k}: ${v}`),
    l.pagina && `Página: ${l.pagina}`,
    Object.keys(l.utm).length ? `Campanha: ${Object.entries(l.utm).map(([k, v]) => `${k}=${v}`).join(', ')}` : null,
    `Abrir conversa: https://wa.me/${l.whatsapp}`,
  ];
  return linhas.filter(Boolean).join('\n');
}

async function avisaWhatsApp(l) {
  const { CALLMEBOT_PHONE: phone, CALLMEBOT_APIKEY: apikey } = process.env;
  if (!phone || !apikey) return null;
  const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&apikey=${encodeURIComponent(apikey)}&text=${encodeURIComponent(textoAviso(l))}`;
  const r = await fetch(url, { signal: AbortSignal.timeout(8000) });
  const corpo = await r.text();
  if (!r.ok || !/queued|sent/i.test(corpo)) throw new Error(`CallMeBot ${r.status}: ${corpo.slice(0, 200)}`);
  return 'whatsapp';
}

async function enviaWebhook(l) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return null;
  const headers = { 'Content-Type': 'application/json' };
  if (process.env.LEAD_WEBHOOK_TOKEN) headers.Authorization = `Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`;
  const r = await fetch(url, { method: 'POST', headers, body: JSON.stringify(l), signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error(`Webhook ${r.status}: ${(await r.text()).slice(0, 200)}`);
  return 'webhook';
}

export async function POST(req) {
  let d;
  try { d = await req.json(); } catch { return Response.json({ ok: false, erro: 'formato' }, { status: 400 }); }

  // Robôs preenchem o campo invisível: respondemos como sucesso e descartamos.
  if (limpa(d.site)) return Response.json({ ok: true });

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'desconhecido';
  if (excedeu(ip)) return Response.json({ ok: false, erro: 'limite' }, { status: 429 });

  const whatsapp = limpa(d.whatsapp, 20).replace(/\D/g, '');
  const lead = {
    nome: limpa(d.nome, 80),
    whatsapp: whatsapp.length >= 10 && whatsapp.length <= 11 ? `55${whatsapp}` : whatsapp,
    cidade: limpa(d.cidade, 80),
    origem: limpa(d.origem, 40) || 'site',
    respostas: Object.fromEntries(Object.entries(d.respostas || {}).slice(0, 10).map(([k, v]) => [limpa(k, 40), limpa(v, 200)])),
    pagina: limpa(d.pagina, 200),
    utm: Object.fromEntries(Object.entries(d.utm || {}).filter(([k]) => /^utm_(source|medium|campaign|term|content)$/.test(k)).map(([k, v]) => [k, limpa(v, 100)])),
    consentimento: d.consentimento === true,
    recebidoEm: new Date().toISOString(),
  };

  if (!lead.nome || lead.whatsapp.length < 12 || lead.whatsapp.length > 13 || !lead.consentimento) {
    return Response.json({ ok: false, erro: 'dados' }, { status: 422 });
  }

  console.log('LEAD', JSON.stringify(lead));

  const resultados = await Promise.allSettled([avisaWhatsApp(lead), enviaWebhook(lead)]);
  const entregues = resultados.filter((r) => r.status === 'fulfilled' && r.value).map((r) => r.value);
  resultados.filter((r) => r.status === 'rejected').forEach((r) => console.error('LEAD_FALHA', r.reason?.message, JSON.stringify(lead)));

  const configurado = resultados.some((r) => r.status === 'rejected' || r.value);
  if (configurado && !entregues.length) return Response.json({ ok: false, erro: 'destino' }, { status: 502 });
  return Response.json({ ok: true, entregues });
}
