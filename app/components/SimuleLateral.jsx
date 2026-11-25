'use client';
import { track } from '@vercel/analytics';
import { WHATSAPP } from '../content';

const Casa = () => (<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 15L16 5l11 10M8 13v13h6v-7h4v7h6V13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/></svg>);
const Carro = () => (<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 18l2.4-6.4A2.5 2.5 0 0 1 10.7 10h10.6a2.5 2.5 0 0 1 2.3 1.6L26 18M5 18h22v6H5zM8 24v2.5M24 24v2.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/><circle cx="10" cy="21" r="1.3" fill="currentColor"/><circle cx="22" cy="21" r="1.3" fill="currentColor"/></svg>);
const Invest = () => (<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="18" cy="9" r="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M18 6.5v5M16.6 7.8h2.2a1 1 0 0 1 0 2h-1.6a1 1 0 0 0 0 2h2.2" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M4 21h4l5 1.5h5a1.5 1.5 0 0 1 0 3h-5M8 27h12l8-5a1.6 1.6 0 0 0-2-2.5L20 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/></svg>);

const simular = (tipo, idx) => (e) => {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent('sim:set', { detail: { tipo, idx } }));
  document.getElementById('conta')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  track('simule_lateral', { tipo });
};
const MSG = 'Olá, João! Quero simular um consórcio como investimento.';

export default function SimuleLateral() {
  return (
    <nav className="simule" aria-label="Simule">
      <span className="simule-titulo">Simule</span>
      <a href="#conta" onClick={simular('imovel', 6)} aria-label="Simular consórcio de imóvel"><Casa /><span className="simule-dica">Imóvel</span></a>
      <a href="#conta" onClick={simular('veiculo', 4)} aria-label="Simular consórcio de veículo"><Carro /><span className="simule-dica">Veículo</span></a>
      <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`} target="_blank" rel="noopener noreferrer" aria-label="Simular consórcio como investimento no WhatsApp" onClick={() => track('simule_lateral', { tipo: 'investimento' })}><Invest /><span className="simule-dica">Investimento</span></a>
    </nav>
  );
}
