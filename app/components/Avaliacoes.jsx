'use client';
import { useEffect, useRef, useState } from 'react';
import { AVALIACOES_GOOGLE } from '../content';

const CORES = ['#13233B', '#8A6A2F', '#4A5361', '#1D3352', '#8A6B3A'];

function Cartao({ a, i }) {
  const [aberto, setAberto] = useState(false);
  const longo = a.texto.length > 150;
  return (
    <li className="av-card">
      <div className="av-topo">
        <span className="av-avatar" style={{ background: CORES[i % CORES.length] }} aria-hidden="true">{a.nome[0]}</span>
        <span className="av-quem">
          <strong>{a.nome}</strong>
          <span>{a.data}</span>
        </span>
        <span className="av-google">Google</span>
      </div>
      <div className="av-estrelas" aria-label="Avaliação 5 de 5 estrelas">★★★★★</div>
      <p className={`av-texto${aberto || !longo ? ' aberto' : ''}`}>{a.texto}</p>
      {longo && (
        <button type="button" className="av-mais" onClick={() => setAberto(!aberto)} aria-expanded={aberto}>
          {aberto ? 'Mostrar menos' : 'Leia mais'}
        </button>
      )}
    </li>
  );
}

export default function Avaliacoes() {
  const trilho = useRef(null);
  const pausado = useRef(false);
  const [pos, setPos] = useState({ inicio: true, fim: false });

  const passo = (dir) => {
    const el = trilho.current;
    if (!el) return;
    const card = el.querySelector('.av-card');
    const w = card ? card.getBoundingClientRect().width + 20 : 320;
    if (dir > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) el.scrollTo({ left: 0, behavior: 'smooth' });
    else el.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    const atualizar = () => setPos({ inicio: el.scrollLeft < 4, fim: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
    atualizar();
    el.addEventListener('scroll', atualizar, { passive: true });
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = reduz ? null : setInterval(() => { if (!pausado.current && document.visibilityState === 'visible') passo(1); }, 6000);
    return () => { el.removeEventListener('scroll', atualizar); if (t) clearInterval(t); };
  }, []);

  return (
    <div className="avaliacoes"
      onMouseEnter={() => (pausado.current = true)} onMouseLeave={() => (pausado.current = false)}
      onFocus={() => (pausado.current = true)} onBlur={() => (pausado.current = false)}>
      <div className="av-cabecalho">
        <p className="label" style={{ margin: 0 }}>Avaliações públicas da Gaia Group no Google</p>
        <div className="av-setas">
          <button type="button" onClick={() => passo(-1)} disabled={pos.inicio} aria-label="Avaliação anterior">‹</button>
          <button type="button" onClick={() => passo(1)} aria-label="Próxima avaliação">›</button>
        </div>
      </div>
      <ul className="av-trilho" ref={trilho}>
        {AVALIACOES_GOOGLE.map((a, i) => <Cartao key={a.nome} a={a} i={i} />)}
      </ul>
    </div>
  );
}
