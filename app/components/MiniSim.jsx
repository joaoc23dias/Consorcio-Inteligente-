'use client';
import { useState } from 'react';
import { track } from '@vercel/analytics';
import { TABELA_HS } from '../content';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const brl2 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
const TIPOS = [
  { id: 'imovel', label: 'Imóvel', inicial: 6 },
  { id: 'veiculo', label: 'Veículo', inicial: 4 },
];

export default function MiniSim() {
  const [tipo, setTipo] = useState('imovel');
  const [idx, setIdx] = useState(6);
  const tabela = TABELA_HS[tipo];
  const i = Math.min(idx, tabela.length - 1);
  const [credito, , meio, prazo] = tabela[i];

  const verPlano = () => {
    track('minisim_ver_plano', { tipo, credito });
    window.dispatchEvent(new CustomEvent('sim:set', { detail: { tipo, idx: i } }));
  };

  return (
    <div className="minisim" role="group" aria-labelledby="minisim-titulo">
      <p id="minisim-titulo" className="eyebrow" style={{ marginBottom: 12 }}>Qual é o seu próximo ativo?</p>
      <div className="row" style={{ gap: 8, marginBottom: 18 }}>
        {TIPOS.map((t) => (
          <button key={t.id} type="button" className="chip" aria-pressed={tipo === t.id} onClick={() => { setTipo(t.id); setIdx(t.inicial); }}>
            {t.label}
          </button>
        ))}
      </div>
      <label htmlFor="minisim-credito" className="label" style={{ display: 'block', marginBottom: 6 }}>Crédito</label>
      <output htmlFor="minisim-credito" className="num" style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 34, lineHeight: 1.1, color: 'var(--green)' }}>{brl.format(credito)}</output>
      <input id="minisim-credito" type="range" min={0} max={tabela.length - 1} step={1} value={i}
        onChange={(e) => setIdx(Number(e.target.value))}
        aria-valuetext={brl.format(credito)} style={{ width: '100%', margin: '14px 0 16px' }} />
      <p style={{ margin: '0 0 18px', fontSize: 14, color: 'var(--ink-soft)' }}>
        Meio aporte de <strong className="num" style={{ color: 'var(--ink)' }}>{brl2.format(meio)}</strong>/mês até a contemplação, em {prazo} meses.
      </p>
      <a href="#conta" className="btn btn-pri btn-ico" style={{ width: '100%', justifyContent: 'space-between' }} onClick={verPlano}>
        Ver meu plano completo
        <span className="ico" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 10L10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </a>
    </div>
  );
}
