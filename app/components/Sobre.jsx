'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { track } from '@vercel/analytics';
import { BC_URL, ESCRITORIOS, PILARES, PASSOS, WHATSAPP } from '../content';
import SeloRA from './SeloRA';

const wa = (t) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;

// acende uma vez quando a seção entra na tela
function useAceso(limiar = 0.35) {
  const ref = useRef(null);
  const [aceso, setAceso] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAceso(true); io.disconnect(); } }, { threshold: limiar });
    io.observe(el);
    return () => io.disconnect();
  }, [limiar]);
  return [ref, aceso];
}

// número que conta do zero até o valor publicado, mantendo prefixo e sufixo (+R$ 250 mi, +2.000, 9 anos)
function Conta({ valor, ligado }) {
  const m = valor.match(/^([^\d]*)([\d.]+)(.*)$/);
  const alvo = m ? Number(m[2].replace(/\./g, '')) : 0;
  const [n, setN] = useState(alvo);
  useEffect(() => {
    if (!m || !ligado) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(alvo); return undefined; }
    let raf; const t0 = performance.now(); const DUR = 1400;
    const passo = (t) => {
      const k = Math.min(1, (t - t0) / DUR);
      setN(Math.round(alvo * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(passo);
    };
    setN(0); raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
  }, [ligado]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!m) return valor;
  return <>{m[1]}{n.toLocaleString('pt-BR')}{m[3]}</>;
}

const Numeros = ({ itens, ligado }) => (
  <dl className="sb-numeros">
    {itens.map(([v, r]) => (
      <div key={r}>
        <dd className="num" aria-label={v}><span aria-hidden="true"><Conta valor={v} ligado={ligado} /></span></dd>
        <dt>{r}</dt>
      </div>
    ))}
  </dl>
);

export function SobreTopo() {
  return (
    <section className="sb-topo" aria-labelledby="sobre-titulo">
      <div className="wrap sb-topo-grade">
        <div className="sb-topo-texto">
          <nav aria-label="Você está em" className="trilha trilha-clara">
            <a href="/">Início</a> <span aria-hidden="true">/</span> <span aria-current="page">Sobre</span>
          </nav>
          <h1 id="sobre-titulo" className="mesa-h1 sb-h1">Sou João Dias. Cuido do patrimônio de quem confia em mim como cuido do meu.</h1>
          <p className="mesa-lead">
            Sou de São José do Rio Pardo e há uma década trabalho nos mercados financeiro e imobiliário. Hoje sou especialista em planejamento patrimonial pela Gaia Group, que tem a HS Consórcios como administradora exclusiva, e atendo com o Método SPA® da Gaia Group.
          </p>
          <div className="mesa-ctas">
            <a href="/#diagnostico" className="btn btn-pri" onClick={() => track('sobre_cta', { onde: 'topo' })}>Agendar meu diagnóstico</a>
            <a href={wa('Olá, João! Vi a sua página no site e quero conversar sobre o meu planejamento.')} target="_blank" rel="noopener noreferrer" className="mesa-link" onClick={() => track('sobre_whatsapp', { onde: 'topo' })}>Falar no WhatsApp</a>
          </div>
        </div>
        <figure className="sb-retrato">
          <Image src="/joao-sobre.webp" alt="João Dias sentado à mesa de estratégia, no escritório" width={960} height={1200} priority sizes="(max-width: 960px) 92vw, 520px" />
        </figure>
      </div>
    </section>
  );
}

export function SobreEmpresas() {
  const [ref, aceso] = useAceso(0.3);
  return (
    <section className="sec sb-empresas" aria-labelledby="sb-emp-titulo">
      <div className="wrap">
        <h2 id="sb-emp-titulo" className="cartas-h2 sb-centro">Quem está com você em cada etapa.</h2>
        <div ref={ref} className={`sb-emp-grade${aceso ? ' aceso' : ''}`}>
          <span className="sb-emp-friso" aria-hidden="true" />
          <article className="sb-emp" style={{ '--n': 0 }}>
            <Image src="/logo-gaia-vermelho.png" alt="Gaia Group Investimentos & Consórcios" width={92} height={73} className="sb-logo" />
            <p className="sb-papel">É onde você é atendido</p>
            <p className="sb-texto">É aqui que o seu plano é desenhado e acompanhado, nos escritórios de Ribeirão Preto, São José do Rio Pardo e Mococa ou por videochamada.</p>
            <Numeros ligado={aceso} itens={[['+R$ 250 mi', 'em créditos comercializados'], ['+2.000', 'famílias atendidas'], ['9 anos', 'de entregas reais'], ['3', 'escritórios na região']]} />
          </article>
          <article className="sb-emp" style={{ '--n': 1 }}>
            <Image src="/logo-hs.png" alt="HS Consórcios, uma empresa do Grupo Herval" width={200} height={53} className="sb-logo" />
            <p className="sb-papel">É quem administra o seu consórcio</p>
            <p className="sb-texto">Maior administradora do Brasil no setor imobiliário. Empresa do Grupo Herval, autorizada pelo Banco Central.</p>
            <Numeros ligado={aceso} itens={[['+R$ 3 bi', 'em bens entregues em 2025'], ['+2.600', 'contemplações por mês'], ['+1.400', 'corretores'], ['+410 mil', 'cotas ativas']]} />
            <p className="sb-links">
              <SeloRA />
              <a href={BC_URL} target="_blank" rel="noopener noreferrer">Consultar no Banco Central</a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

// Mapa estilizado da região: posição real das cidades (latitude e longitude), sem mapa de terceiros.
const CIDADES = [
  { n: 'Ribeirão Preto', lat: -21.177, lon: -47.810, esc: true, rot: 'dir' },
  { n: 'Mococa', lat: -21.467, lon: -47.004, esc: true, rot: 'esq' },
  { n: 'São José do Rio Pardo', lat: -21.596, lon: -46.889, esc: true, rot: 'dir' },
  { n: 'Guaxupé', lat: -21.305, lon: -46.712, rot: 'dir' },
  { n: 'Monte Santo de Minas', lat: -21.190, lon: -46.980, rot: 'dir' },
  { n: 'Tambaú', lat: -21.705, lon: -47.274, rot: 'esq' },
  { n: 'Casa Branca', lat: -21.774, lon: -47.086, rot: 'esq' },
];
const MW = 640, MH = 400;
const px = (c) => [60 + ((c.lon + 47.9) / 1.3) * (MW - 140), 50 + ((-21.1 - c.lat) / 0.75) * (MH - 100)];
const mapsUrl = (e) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.endereco}, ${e.cidade}, SP`)}`;

export function SobreRegiao() {
  const [ref, aceso] = useAceso(0.3);
  const esc = CIDADES.filter((c) => c.esc).map(px);
  const rota = `M${esc[0][0]} ${esc[0][1]} L${esc[1][0]} ${esc[1][1]} L${esc[2][0]} ${esc[2][1]}`;
  return (
    <section className="sb-regiao" aria-labelledby="sb-reg-titulo" id="escritorios">
      <div className="wrap sb-regiao-grade">
        <div>
          <h2 id="sb-reg-titulo" className="cartas-fim-h sb-reg-h">Atendimento presencial em três cidades.</h2>
          <ul className="sb-escritorios">
            {ESCRITORIOS.map((e) => (
              <li key={e.cidade}>
                <span className="sb-cidade">{e.cidade}</span>
                <address>{e.endereco}</address>
                <a href={mapsUrl(e)} target="_blank" rel="noopener noreferrer" onClick={() => track('sobre_mapa', { cidade: e.cidade })}>Como chegar</a>
              </li>
            ))}
          </ul>
          <p className="sb-reg-nota">E em toda a região: Guaxupé, Monte Santo de Minas, Tambaú e Casa Branca. Em outras cidades, o diagnóstico é feito por videochamada.</p>
        </div>
        <div ref={ref} className={`sb-mapa${aceso ? ' aceso' : ''}`}>
          <svg viewBox={`0 0 ${MW} ${MH}`} role="img" aria-label="Mapa da região atendida: escritórios em Ribeirão Preto, Mococa e São José do Rio Pardo">
            <defs>
              <pattern id="sb-grade" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="rgba(244,241,234,.05)" strokeWidth="1" /></pattern>
            </defs>
            <rect width={MW} height={MH} fill="url(#sb-grade)" />
            <path d={rota} className="sb-rota" pathLength="1" />
            <path d={rota} className="sb-rota-luz" pathLength="1" />
            {CIDADES.map((c) => {
              const [x, y] = px(c);
              const dx = c.rot === 'esq' ? -14 : 14;
              return (
                <g key={c.n} className={c.esc ? 'sb-ponto-esc' : 'sb-ponto'}>
                  {c.esc && <circle cx={x} cy={y} r="16" className="sb-halo" />}
                  <circle cx={x} cy={y} r={c.esc ? 6 : 3.5} />
                  <text x={x + dx} y={y + 5} textAnchor={c.rot === 'esq' ? 'end' : 'start'}>{c.n}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

export function SobreMetodo() {
  const [ref, aceso] = useAceso(0.35);
  return (
    <section id="metodo" className="sec sb-metodo" aria-labelledby="sb-met-titulo">
      <div className="wrap">
        <div className="sb-met-topo">
          <h2 id="sb-met-titulo" className="cartas-h2">Método SPA® da Gaia Group: segurança, patrimônio e alavancagem.</h2>
          <dl className="sb-pilares">
            {PILARES.map((p) => (
              <div key={p.t}><dt>{p.t}</dt><dd>{p.d}</dd></div>
            ))}
          </dl>
        </div>
        <ol ref={ref} className={`sb-passos${aceso ? ' aceso' : ''}`} aria-label="Como o plano é feito">
          <span className="sb-passos-friso" aria-hidden="true" />
          {PASSOS.map((p, i) => (
            <li key={p.n} style={{ '--n': i }}>
              <span className="sb-passo-n">{p.n}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const DOCUMENTOS = [
  { href: 'https://hsconsorcios.com.br/entenda-mais#regulamento', t: 'Regulamento Geral da HS Consórcios', d: 'As regras do grupo, de ponta a ponta.' },
  { href: 'https://hsconsorcios.com.br/wp-content/uploads/2025/01/Regulamento-Geral.-Requisitos-para-liberacao-do-credito.pdf', t: 'Requisitos para liberação do crédito', d: 'O que a administradora pede após a contemplação.' },
  { href: BC_URL, t: 'HS Consórcios no Banco Central', d: 'A autorização de funcionamento, na fonte oficial.' },
];

export function SobreDocs() {
  return (
    <section className="sec sb-docs" aria-labelledby="docs-titulo" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2 id="docs-titulo" className="cartas-h2" style={{ fontSize: 'clamp(26px, 2.6vw, 34px)' }}>Documentos oficiais</h2>
        <ul className="sb-docs-grade">
          {DOCUMENTOS.map((d) => (
            <li key={d.href}>
              <a href={d.href} target="_blank" rel="noopener noreferrer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3h7l5 5v13H7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><path d="M14 3v5h5M10 13h6M10 16.5h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
                <span className="sb-doc-t">{d.t}</span>
                <span className="sb-doc-d">{d.d}</span>
                <span className="sb-doc-seta" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SobreFim() {
  return (
    <section className="cartas-fim" aria-labelledby="sb-fim-titulo">
      <div className="wrap cartas-fim-grade">
        <h2 id="sb-fim-titulo" className="cartas-fim-h">Agora que você sabe quem está do seu lado, vamos colocar o seu plano na mesa.</h2>
        <div>
          <p className="cartas-fim-texto">No diagnóstico patrimonial, olhamos juntos o que você quer conquistar, quanto cabe no seu fluxo e qual estratégia faz sentido para você.</p>
          <div className="mesa-ctas">
            <a href="/#diagnostico" className="btn btn-pri" onClick={() => track('sobre_cta', { onde: 'fim' })}>Agendar meu diagnóstico</a>
            <a href={wa('Olá, João! Vi a sua página no site e quero conversar sobre o meu planejamento.')} target="_blank" rel="noopener noreferrer" className="mesa-link">Falar no WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
