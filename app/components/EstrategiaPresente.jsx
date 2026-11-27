'use client';
import { useEffect, useRef, useState } from 'react';
import { track } from '@vercel/analytics';
import { enviaLead } from './lead';
import { PERGUNTAS, codifica } from '../raiox';

// "Qual é a sua estratégia?": o presente lacrado.
// Cada resposta grava uma camada da peça, a pessoa lacra, grava o nome e recebe o Raio-X por e-mail.
// Nada do conteúdo aparece na tela: valor, perfil e estratégia só existem dentro do PDF.

// Enquanto o envio por e-mail não estiver ligado, a prévia mostra o Raio-X numa página.
const PREVIA = true;

const SIM = '0123456789ABCDEF#%&▒░';
const HEX = '0123456789ABCDEF';
const OBJ = { imovel: 'o imóvel para morar', renda: 'o imóvel para gerar renda', terreno: 'o terreno', veiculo: 'o veículo', empresa: 'o que você quer para a empresa', decidir: 'o que você ainda está decidindo' };
const TEMPO = { ja: 'a sua vontade de ter o crédito logo', '12m': 'o prazo de 12 meses que você quer', '3a': 'o seu horizonte de 1 a 3 anos', plano: 'a sua disposição de planejar sem pressa' };
const analise = (r) => `Analisei as suas cinco respostas. Para ${OBJ[r.obj]}, o que mais chamou atenção foi ${TEMPO[r.tempo]} combinado com o que cabe no seu mês. Essa combinação muda a ordem certa das decisões, e é exatamente aqui que a maioria erra quando`;
const cifra = () => ' ' + Array.from({ length: 22 }, (_, i) => (i % 6 === 5 ? ' ' : SIM[(Math.random() * SIM.length) | 0])).join('');

// no celular o topo da peça usa a versão curta do estado
const curto = (e) => (e.startsWith('aguardando') ? 'aguardando' : e.endsWith('camadas') ? e.replace(' de ', '/').replace(' camadas', '') : e.startsWith('a caminho') ? 'enviando' : e);

const Cadeado = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.3" /></svg>
);

/* ---------- a peça: partículas em 3D num canvas 2D ---------- */
function criaPeca(cv, palco, calmo) {
  const ctx = cv.getContext('2d');
  let DPR = 1, W = 0, H = 0;
  const medir = () => { DPR = Math.min(window.devicePixelRatio || 1, 2); const r = cv.getBoundingClientRect(); W = cv.width = r.width * DPR; H = cv.height = r.height * DPR; };
  medir();
  const ro = new ResizeObserver(medir); ro.observe(cv);

  const P = [];
  const add = (t, camada, cor = 'ice') => {
    const a = Math.random() * 6.283, b = Math.acos(2 * Math.random() - 1), r = 1.6 + Math.random() * 1.1;
    P.push({ t, c: [r * Math.sin(b) * Math.cos(a), r * Math.cos(b) * 0.8, r * Math.sin(b) * Math.sin(a)], camada, cor, t0: Infinity });
  };
  const aresta = (a, b, n, camada, cor) => { for (let i = 0; i <= n; i++) { const k = i / n; add([a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k], camada, cor); } };
  const X = 0.66, Y = 0.92, Z = 0.07, FZ = Z + 0.004, SELO = [0, -0.4];
  const v = [[-X, -Y, -Z], [X, -Y, -Z], [X, Y, -Z], [-X, Y, -Z], [-X, -Y, Z], [X, -Y, Z], [X, Y, Z], [-X, Y, Z]];
  [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]].forEach(([a, b]) => {
    const len = Math.hypot(v[a][0] - v[b][0], v[a][1] - v[b][1], v[a][2] - v[b][2]); aresta(v[a], v[b], Math.max(3, Math.round(len * 44)), 0);
  });
  aresta([-X + 0.08, Y - 0.08, FZ], [X - 0.08, Y - 0.08, FZ], 40, 0); aresta([-X + 0.08, -Y + 0.08, FZ], [X - 0.08, -Y + 0.08, FZ], 40, 0);
  for (let i = 0; i < 5; i++) { const r = 0.09 + i * 0.075, n = Math.round(34 + i * 12); for (let k = 0; k < n; k++) { const a = (k / n) * 6.283; add([SELO[0] + Math.cos(a) * r, SELO[1] + Math.sin(a) * r, FZ], i + 1, 'ouro'); } }
  [0.42, 0.34, 0.26, 0.18, 0.1].forEach((y, i) => { const L = [0.95, 0.7, 0.85, 0.55, 0.75][i]; aresta([-X + 0.14, y, FZ], [-X + 0.14 + L, y, FZ], Math.round(L * 40), i + 1); });
  const nomeIni = P.length;

  const st = { ang: -0.55, angAlvo: null, incl: 0.12, arrasto: false, ux: 0, brilho: 0, envio: 0, lacrado: false, pairar: 0, fantasma: 1 };
  const onDown = (e) => { st.arrasto = true; st.ux = e.clientX; palco.setPointerCapture(e.pointerId); };
  const onMove = (e) => {
    const r = palco.getBoundingClientRect(); st.incl = 0.12 + ((e.clientY - r.top) / r.height - 0.5) * 0.35; st.pairar = 1;
    if (st.arrasto) { st.ang += (e.clientX - st.ux) * 0.01; st.ux = e.clientX; } else st.angAlvo = -0.55 + ((e.clientX - r.left) / r.width - 0.5) * 1.2;
  };
  const onUp = () => { st.arrasto = false; };
  const onLeave = () => { st.angAlvo = null; st.pairar = 0; };
  palco.addEventListener('pointerdown', onDown); palco.addEventListener('pointermove', onMove);
  palco.addEventListener('pointerup', onUp); palco.addEventListener('pointerleave', onLeave);

  const eas = (k) => 1 - Math.pow(1 - k, 3);
  const COR = { ice: [221, 232, 244], ouro: [214, 175, 97], branco: [250, 246, 236] };
  let raf = 0, visivel = true;
  const io = new IntersectionObserver(([en]) => { visivel = en.isIntersecting; if (visivel && !raf) raf = requestAnimationFrame(quadro); });
  io.observe(cv);

  function quadro(t) {
    raf = 0; if (!visivel) return;
    ctx.clearRect(0, 0, W, H);
    if (!st.arrasto) { const alvo = st.angAlvo !== null ? st.angAlvo : calmo ? -0.35 : -0.3 + Math.sin(t / 4200) * 0.55; st.ang += (alvo - st.ang) * 0.04; }
    const cs = Math.cos(st.ang), sn = Math.sin(st.ang), ci = Math.cos(st.incl), si = Math.sin(st.incl);
    const esc = Math.min(W * 0.34, H * 0.33), cx = W / 2, cy = H / 2 + H * 0.02, tt = t / 1000;
    st.brilho *= 0.965;
    const proj = (x, y, z) => { const rx = x * cs + z * sn, rz0 = -x * sn + z * cs, ry = y * ci - rz0 * si, rz = y * si + rz0 * ci, pz = 3 - rz; return [cx + (rx * esc * 3) / pz, cy - (ry * esc * 3) / pz, rz]; };
    const [sx0, sy0] = proj(SELO[0], SELO[1], FZ);
    if (st.lacrado || st.brilho > 0.02) {
      const g = ctx.createRadialGradient(sx0, sy0, 0, sx0, sy0, esc * (0.55 + st.brilho * 0.5));
      g.addColorStop(0, `rgba(214,175,97,${0.16 + st.brilho * 0.35})`); g.addColorStop(1, 'rgba(214,175,97,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    }
    ctx.globalCompositeOperation = 'lighter';
    // antes de começar: o contorno do documento lacrado aparece em partículas, respirando devagar
    if (st.fantasma > 0.01) {
      const resp = calmo ? 1 : 0.75 + 0.25 * Math.sin(tt * 1.3);
      for (let i = 0; i < nomeIni; i++) {
        const p = P[i];
        if (p.t0 < Infinity) continue;
        const [px, py, rz] = proj(p.t[0], p.t[1] + (calmo ? 0 : Math.sin(tt * 0.9 + p.t[0] * 2) * 0.012), p.t[2]);
        const ouro = p.cor === 'ouro';
        const [r, g, b] = ouro ? COR.ouro : COR.ice;
        let a = (ouro ? 0.85 : p.camada === 0 ? 0.7 : 0.38) * resp * st.fantasma;
        if (ouro && !calmo) a *= 0.8 + 0.35 * Math.sin(tt * 2 - p.t[1] * 6);
        a *= Math.max(0.4, Math.min(1, 1.1 + rz * 0.45));
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        const sz = (ouro ? 1.9 : 1.6) * DPR; ctx.fillRect(px - sz / 2, py - sz / 2, sz, sz);
      }
      if (st.fantasma === 1) {
        const g2 = ctx.createRadialGradient(sx0, sy0, 0, sx0, sy0, esc * 0.6);
        g2.addColorStop(0, `rgba(214,175,97,${0.1 * resp})`); g2.addColorStop(1, 'rgba(214,175,97,0)');
        ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);
      }
    }
    if (st.fantasma < 1) st.fantasma *= 0.985;
    for (const p of P) {
      const k = calmo ? (p.t0 < Infinity ? 1 : 0) : Math.max(0, Math.min(1, (t - p.t0) / 1100)), e = eas(k);
      const ca = tt * 0.12 + p.c[1];
      const nx = p.c[0] * Math.cos(ca) - p.c[2] * Math.sin(ca), nz = p.c[0] * Math.sin(ca) + p.c[2] * Math.cos(ca), ny = p.c[1] + Math.sin(tt * 0.8 + p.c[0] * 3) * 0.05;
      const x = nx + (p.t[0] - nx) * e, z = nz + (p.t[2] - nz) * e;
      let y = ny + (p.t[1] - ny) * e;
      if (st.envio > 0) { const s = st.envio * (0.6 + (((p.c[0] * 997) % 1) + 1) % 1 * 1.4); y += s * s * 1.6; }
      const [px, py, rz] = proj(x, y, z);
      const [r, g, b] = e > 0.5 ? COR[p.cor] : COR.ice;
      let a = e > 0 ? 0.25 + 0.75 * e : (0.16 + st.pairar * 0.06) * (st.fantasma === 1 ? 0.45 : 1);
      if (p.cor === 'ouro' && e > 0.5) a = Math.min(1, a * (0.85 + st.brilho * 0.6 + (st.lacrado ? 0.15 * Math.sin(tt * 2.2 + p.t[0] * 9) : 0)));
      if (st.envio > 0) a *= Math.max(0, 1 - st.envio * 1.1);
      a *= Math.max(0.35, Math.min(1, 1.1 + rz * 0.45));
      ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
      const s = (e > 0.5 ? 1.7 : 1.25) * DPR; ctx.fillRect(px - s / 2, py - s / 2, s, s);
    }
    ctx.globalCompositeOperation = 'source-over';
    raf = requestAnimationFrame(quadro);
  }
  raf = requestAnimationFrame(quadro);

  return {
    camada(c) { if (st.fantasma === 1) st.fantasma = 0.98; const agora = performance.now(); P.forEach((p) => { if (p.camada === c && p.t0 === Infinity) p.t0 = agora + Math.random() * (calmo ? 0 : 700); }); st.brilho = Math.max(st.brilho, 0.6); },
    brilho(v) { st.brilho = Math.max(st.brilho, v); },
    lacra() { st.lacrado = true; st.brilho = 1; },
    nome(nome) {
      P.length = nomeIni;
      const oc = document.createElement('canvas'); oc.width = 700; oc.height = 140; const o = oc.getContext('2d');
      o.fillStyle = '#fff'; o.textAlign = 'center'; o.textBaseline = 'middle';
      let fs = 120; const fonte = (n) => `650 ${n}px "Schibsted Grotesk Variable", Arial, sans-serif`; o.font = fonte(fs);
      while (o.measureText(nome).width > 640 && fs > 40) { fs -= 6; o.font = fonte(fs); }
      o.fillText(nome, 350, 72);
      const d = o.getImageData(0, 0, 700, 140).data, agora = performance.now();
      for (let y = 0; y < 140; y += 3) for (let x = 0; x < 700; x += 3) if (d[(y * 700 + x) * 4 + 3] > 128) { add([((x - 350) / 700) * 1.16, 0.66 - ((y - 72) / 700) * 1.16, FZ], 6, 'branco'); P[P.length - 1].t0 = agora + Math.random() * 900; }
      st.brilho = 0.8;
    },
    envia() {
      if (calmo) return;
      const t0 = performance.now();
      const sobe = (t) => { st.envio = Math.min(1, (t - t0) / 1500); if (st.envio < 1) requestAnimationFrame(sobe); else setTimeout(() => { st.envio = 0; st.brilho = 1; const a = performance.now(); P.forEach((p) => { p.t0 = a + Math.random() * 900; }); }, 400); };
      requestAnimationFrame(sobe);
    },
    destroi() { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); palco.removeEventListener('pointerdown', onDown); palco.removeEventListener('pointermove', onMove); palco.removeEventListener('pointerup', onUp); palco.removeEventListener('pointerleave', onLeave); },
  };
}

export default function EstrategiaPresente() {
  const cvRef = useRef(null), palcoRef = useRef(null), peca = useRef(null), secRef = useRef(null);
  const [fase, setFase] = useState('abertura');
  const [passo, setPasso] = useState(0);
  const [resp, setResp] = useState({});
  const [serie, setSerie] = useState('0000');
  const [estado, setEstado] = useState('aguardando as suas respostas');
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');
  const [texto, setTexto] = useState('');
  const [cifrado, setCifrado] = useState('');
  const [link, setLink] = useState('');
  const numero = useRef(String(1000 + Math.floor(Math.random() * 8999)));

  useEffect(() => {
    const calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    peca.current = criaPeca(cvRef.current, palcoRef.current, calmo);
    return () => peca.current?.destroi();
  }, []);

  // número de série embaralhado até o lacre
  useEffect(() => {
    if (fase !== 'abertura' && fase !== 'pergunta' && fase !== 'segurar') return;
    const it = setInterval(() => setSerie(Array.from({ length: 4 }, () => HEX[(Math.random() * HEX.length) | 0]).join('')), 120);
    return () => clearInterval(it);
  }, [fase]);

  // atalho de teclado 1 a 6 nas perguntas
  useEffect(() => {
    if (fase !== 'pergunta') return;
    const tecla = (e) => { if (e.repeat || e.target.tagName === 'INPUT') return; const n = +e.key; const op = PERGUNTAS[passo].op[n - 1]; if (op && secRef.current?.contains(document.activeElement)) escolhe(op[0]); };
    window.addEventListener('keydown', tecla);
    return () => window.removeEventListener('keydown', tecla);
  });

  // análise escrita ao vivo, interrompida no meio
  useEffect(() => {
    if (fase !== 'lacrado') return;
    const alvo = analise(resp), w = alvo.split(' ');
    const calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (calmo) { setTexto(alvo); setCifrado(cifra()); return; }
    let i = 0; let it2;
    const it = setInterval(() => { i++; setTexto(w.slice(0, i).join(' ')); if (i >= w.length) { clearInterval(it); it2 = setInterval(() => setCifrado(cifra()), 110); } }, 55);
    return () => { clearInterval(it); clearInterval(it2); };
  }, [fase, resp]);

  const comecar = () => { peca.current.camada(0); setEstado('0 de 5 camadas'); setFase('pergunta'); track('raiox_inicio'); };
  const escolhe = (v) => {
    const q = PERGUNTAS[passo];
    const novo = { ...resp, [q.id]: v };
    setResp(novo);
    peca.current.camada(passo + 1);
    setEstado(`${passo + 1} de 5 camadas`);
    if (navigator.vibrate) navigator.vibrate(12);
    if (passo + 1 < PERGUNTAS.length) setPasso(passo + 1); else setFase('segurar');
  };
  const lacra = () => {
    peca.current.lacra(); setSerie(numero.current); setEstado('lacrada'); setFase('lacrado');
    if (navigator.vibrate) navigator.vibrate([20, 60, 30]);
    track('raiox_lacrado');
  };
  const gravaNome = (e) => {
    e.preventDefault();
    const v = e.target.nome.value.trim().split(' ')[0];
    if (v.length < 2) return setErro('Escreva o seu primeiro nome.');
    const n = v.charAt(0).toUpperCase() + v.slice(1);
    setErro(''); setNome(n); peca.current.nome(n);
    setTimeout(() => setFase('capa'), 900);
  };
  const envia = (e) => {
    e.preventDefault();
    const f = e.target;
    if (!/^\S+@\S+\.\S+$/.test(f.email.value)) return setErro('Confira o e-mail.');
    if (!f.ok.checked) return setErro('Marque a autorização para receber o seu Raio-X.');
    setErro('');
    const rotulos = Object.fromEntries(PERGUNTAS.map((q) => [q.t, q.op.find((o) => o[0] === resp[q.id])?.[1] || '']));
    enviaLead({ origem: 'raio-x', nome, email: f.email.value.trim(), respostas: { ...rotulos, 'Peça nº': numero.current }, consentimento: true, site: f.site.value });
    track('raiox_enviado');
    setLink(`/raio-x?d=${codifica({ r: resp, nome, serie: numero.current })}`);
    peca.current.envia(); setEstado('a caminho do seu e-mail'); setFase('enviado');
  };
  const segurar = useSegurar(lacra, (k) => peca.current?.brilho(k * 0.5));
  const hoje = new Date().toLocaleDateString('pt-BR');
  const q = PERGUNTAS[passo];

  return (
    <section id="estrategia" className={`pres${fase !== 'abertura' ? ' pres-iniciado' : ''}`} aria-labelledby="pres-titulo" ref={secRef}>
      <div className="wrap">
        <div className="pres-caixa">
          <div className="pres-esq" aria-live="polite">
            {fase === 'abertura' && (
              <div key="a" className="pres-q">
                <p className="pres-rot">Qual é a sua estratégia?</p>
                <h2 id="pres-titulo" className="pres-h">Responda 5 perguntas. No final, existe algo preparado só para você.</h2>
                <p className="pres-lead">Não é simulação nem folheto. É pessoal, montado a partir das suas respostas, e chega no seu e-mail.</p>
                <button type="button" className="btn btn-pri pres-btn" onClick={comecar}>Começar</button>
                <p className="pres-meta"><span>5 respostas</span><span>menos de 1 minuto</span><span>sem custo</span></p>
              </div>
            )}
            {fase === 'pergunta' && (
              <fieldset key={`p${passo}`} className="pres-q">
                <legend><span className="pres-rot">Resposta {passo + 1} de {PERGUNTAS.length}</span><span className="pres-h3">{q.t}</span></legend>
                <div className="pres-ops">
                  {q.op.map((o, i) => (
                    <button key={o[0]} type="button" className="pres-op" onClick={() => escolhe(o[0])}><span className="k" aria-hidden="true">{i + 1}</span>{o[1]}</button>
                  ))}
                </div>
                {passo > 0 && PERGUNTAS[passo - 1].prov && <p className="pres-provoca">{PERGUNTAS[passo - 1].prov}</p>}
              </fieldset>
            )}
            {fase === 'segurar' && (
              <div key="s" className="pres-q">
                <p className="pres-rot">As cinco camadas estão gravadas</p>
                <h3 className="pres-h3">Segure para lacrar.</h3>
                <div className="pres-segurar">
                  <button type="button" className="pres-seg" {...segurar.props} aria-label="Segure para lacrar. No teclado, mantenha Espaço pressionado.">
                    <svg viewBox="0 0 128 128" aria-hidden="true"><circle className="tr" cx="64" cy="64" r="60" /><circle className="pr" cx="64" cy="64" r="60" style={{ strokeDashoffset: 377 * (1 - segurar.k) }} /></svg>
                    <span>{segurar.k > 0 ? 'Lacrando' : 'Segure'}</span>
                  </button>
                  <p>Depois de lacrado, o conteúdo só abre no seu e-mail.</p>
                </div>
              </div>
            )}
            {fase === 'lacrado' && (
              <div key="l" className="pres-q">
                <p className="pres-rot">Lacrado</p>
                <h3 className="pres-h3">Está pronto. Ninguém mais tem um igual.</h3>
                <div className="pres-ia"><p className="tag"><i />Escrito agora, a partir das suas respostas</p><p>{texto}<span className="cf">{cifrado}</span></p>{cifrado && <small>O restante está dentro da peça.</small>}</div>
                <p className="pres-sub">Falta gravar para quem é.</p>
                <form className="pres-campo" onSubmit={gravaNome} noValidate>
                  <input type="text" name="nome" placeholder="Seu primeiro nome" autoComplete="given-name" maxLength={18} aria-label="Seu primeiro nome" />
                  <button type="submit" className="btn btn-pri">Gravar o meu nome</button>
                </form>
                {erro && <p className="pres-erro">{erro}</p>}
              </div>
            )}
            {fase === 'capa' && (
              <div key="c" className="pres-q">
                <p className="pres-rot">Para {nome}</p>
                <h3 className="pres-h3">Para onde enviamos o seu?</h3>
                <div className="pres-capa" aria-label="Prévia da capa, com o conteúdo lacrado">
                  <div className="top"><span>Peça nº {numero.current}</span><span>Preparado em {hoje}</span></div>
                  <h4>Raio-X Patrimonial de {nome}</h4>
                  <p><Cadeado /><span>O valor que cabe no seu mês, e que ninguém te mostrou</span></p>
                  <p><Cadeado /><span>O caminho que a maioria escolhe sem fazer a conta</span></p>
                  <p><Cadeado /><span>A jogada para chegar antes</span></p>
                  <div className="borra" aria-hidden="true"><i style={{ width: '92%' }} /><i style={{ width: '78%' }} /><i style={{ width: '86%' }} /></div>
                  <span className="selo">Lacrado</span>
                </div>
                <form onSubmit={envia} noValidate>
                  <div className="pres-campo">
                    <input type="email" name="email" placeholder="Seu melhor e-mail" autoComplete="email" aria-label="Seu melhor e-mail" />
                    <button type="submit" className="btn btn-pri">Receber o meu</button>
                  </div>
                  <input type="text" name="site" tabIndex={-1} autoComplete="off" className="pres-isca" aria-hidden="true" />
                  <label className="pres-ok"><input type="checkbox" name="ok" /><span>Quero receber o meu Raio-X e autorizo o contato sobre ele.</span></label>
                  {erro && <p className="pres-erro">{erro}</p>}
                  <p className="pres-lgpd">Enviado por João Dias, especialista em planejamento patrimonial da Gaia Group. Seus dados não são compartilhados, e você pode sair da lista quando quiser.</p>
                </form>
              </div>
            )}
            {fase === 'enviado' && (
              <div key="e" className="pres-q">
                <p className="pres-rot pres-okk">Enviado</p>
                <h3 className="pres-h3">Abra o seu e-mail, {nome}.</h3>
                <p className="pres-lead">O assunto é <b>&quot;{nome}, o seu está pronto&quot;</b>. Há uma página lá dentro que só faz sentido numa conversa comigo.</p>
                <a className="btn btn-pri pres-btn" href="#diagnostico">Agendar essa conversa</a>
                {PREVIA && <p className="pres-previa">Prévia: o envio por e-mail ainda não está ligado. <a href={link} target="_blank" rel="noopener">Ver o Raio-X que chegaria no e-mail</a></p>}
              </div>
            )}
          </div>
          <aside className="pres-peca" aria-label="A peça sendo montada com as suas respostas">
            <header><b><span className="pres-prep">Preparado para você</span> <span className="n">nº {serie}</span></b><span className="est-l">{estado}</span><span className="est-c" aria-hidden="true">{curto(estado)}</span></header>
            <div className="pres-palco" ref={palcoRef}><canvas ref={cvRef} role="img" aria-label="Uma peça lacrada que ganha uma camada a cada resposta. Arraste para girar." /></div>
            <div className={`pres-camadas${fase !== 'abertura' && fase !== 'pergunta' && fase !== 'segurar' ? ' lacrada' : ''}`} aria-hidden="true" style={{ '--feito': Object.keys(resp).length / 5 }}>
              <span className="pres-friso"><span key={Object.keys(resp).length} className="pres-friso-luz" /></span>
              {[1, 2, 3, 4, 5].map((n) => <i key={n} className={Object.keys(resp).length >= n ? 'on' : ''} />)}
            </div>
            <p className="pe">O conteúdo só existe depois das suas respostas e só abre no seu e-mail.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function useSegurar(fim, progresso) {
  const [k, setK] = useState(0);
  const t0 = useRef(null), raf = useRef(0), feito = useRef(false);
  const DUR = 1600;
  const ini = (e) => {
    if (e) e.preventDefault();
    if (t0.current || feito.current) return;
    const calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    t0.current = performance.now();
    const loop = (t) => { const v = Math.min(1, (t - t0.current) / (calmo ? 300 : DUR)); setK(v); progresso(v); if (v >= 1) { feito.current = true; return fim(); } raf.current = requestAnimationFrame(loop); };
    raf.current = requestAnimationFrame(loop);
  };
  const solta = () => { if (!t0.current || feito.current) return; cancelAnimationFrame(raf.current); t0.current = null; setK(0); };
  useEffect(() => () => cancelAnimationFrame(raf.current), []);
  return {
    k,
    props: {
      onPointerDown: ini, onPointerUp: solta, onPointerLeave: solta, onPointerCancel: solta,
      onKeyDown: (e) => { if (e.key === ' ' || e.key === 'Enter') ini(e); },
      onKeyUp: (e) => { if (e.key === ' ' || e.key === 'Enter') solta(); },
    },
  };
}
