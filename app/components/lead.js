// Envia o lead para /api/lead de um jeito que sobrevive à troca de aba:
// sendBeacon quando existe, senão fetch com keepalive. Não espera resposta,
// para o WhatsApp abrir no mesmo clique.
const CHAVE_UTM = 'ci_utm';

export function guardaUtm() {
  try {
    const p = new URLSearchParams(window.location.search);
    const utm = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((k) => { if (p.get(k)) utm[k] = p.get(k); });
    if (Object.keys(utm).length) sessionStorage.setItem(CHAVE_UTM, JSON.stringify(utm));
  } catch { /* navegação privada ou armazenamento bloqueado */ }
}

function utmSalva() {
  try { return JSON.parse(sessionStorage.getItem(CHAVE_UTM) || '{}'); } catch { return {}; }
}

export function enviaLead(dados) {
  const corpo = JSON.stringify({ ...dados, pagina: window.location.pathname, utm: utmSalva() });
  try {
    if (navigator.sendBeacon && navigator.sendBeacon('/api/lead', new Blob([corpo], { type: 'application/json' }))) return;
  } catch { /* segue para o fetch */ }
  fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: corpo, keepalive: true }).catch(() => {});
}

export const soDigitos = (v) => String(v || '').replace(/\D/g, '');
export const whatsValido = (v) => { const n = soDigitos(v).replace(/^55(?=\d{10,11}$)/, ''); return n.length === 10 || n.length === 11; };
