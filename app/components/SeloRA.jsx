'use client';
import { useEffect, useRef, useState } from 'react';
import { RECLAME_AQUI } from '../content';

const Selo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
    <path fill="#3FA535" d="M20 2l3.6 3 4.7-.6 1.8 4.4 4.4 1.8-.6 4.7 3 3.6-3 3.6.6 4.7-4.4 1.8-1.8 4.4-4.7-.6L20 38l-3.6-3-4.7.6-1.8-4.4-4.4-1.8.6-4.7-3-3.6 3-3.6-.6-4.7 4.4-1.8 1.8-4.4 4.7.6z"/>
    <circle cx="20" cy="20" r="11" fill="#fff"/>
    <path d="M14.5 20.5l3.8 3.7 7.4-7.7" fill="none" stroke="#3FA535" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Selo do Reclame Aqui: no computador abre ao passar o mouse; no celular, ao tocar.
export default function SeloRA() {
  const [aberto, setAberto] = useState(false);
  const ref = useRef(null);
  const tipo = useRef('');
  useEffect(() => {
    if (!aberto) return undefined;
    const fora = (e) => { if (ref.current && !ref.current.contains(e.target)) setAberto(false); };
    const esc = (e) => { if (e.key === 'Escape') setAberto(false); };
    document.addEventListener('pointerdown', fora);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('pointerdown', fora); document.removeEventListener('keydown', esc); };
  }, [aberto]);
  return (
    <span className={`ra${aberto ? ' ra-aberto' : ''}`} ref={ref}
      onPointerEnter={(e) => { if (e.pointerType === 'mouse') setAberto(true); }}
      onPointerLeave={(e) => { if (e.pointerType === 'mouse') setAberto(false); }}>
      <button type="button" className="ra-gatilho" aria-expanded={aberto} aria-controls="ra-balao"
        onPointerDown={(e) => { tipo.current = e.pointerType; }}
        onClick={() => { if (tipo.current === 'mouse') setAberto(true); else setAberto((v) => !v); tipo.current = ''; }}>
        <Selo />
        <span>Reputação {RECLAME_AQUI.selo} no Reclame Aqui</span>
      </button>
      <span id="ra-balao" role="dialog" aria-label="Reputação da HS Consórcios no Reclame Aqui" className="ra-balao">
        <span className="ra-topo"><Selo /><span><small>Reputação</small><strong>{RECLAME_AQUI.selo}</strong></span></span>
        <span className="ra-nota">Nota {RECLAME_AQUI.nota}/10 no Reclame Aqui</span>
        <span className="ra-texto">A confiança dos clientes da HS Consórcios reflete o compromisso com transparência e excelência no atendimento.</span>
        <a href={RECLAME_AQUI.url} target="_blank" rel="noopener noreferrer">Ver a página da HS no Reclame Aqui</a>
        <span className="ra-fonte">{RECLAME_AQUI.fonte}.</span>
      </span>
    </span>
  );
}
