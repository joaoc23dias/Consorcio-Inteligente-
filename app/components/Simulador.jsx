'use client';
import { useState } from 'react';
import { TABELA_HS, TABELA_REF } from '../content';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const brl2 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });

const TIPOS = [
  { id: 'imovel', label: 'Imóvel', inicial: 6 },
  { id: 'veiculo', label: 'Veículo', inicial: 4 },
];

export default function Simulador() {
  const [tipo, setTipo] = useState('imovel');
  const [idx, setIdx] = useState(6);
  const tabela = TABELA_HS[tipo];
  const [credito, integral, meio, prazo] = tabela[Math.min(idx, tabela.length - 1)];

  const escolherTipo = (t) => {
    setTipo(t.id);
    setIdx(t.inicial);
  };

  return (
    <section id="conta" className="sec alt" aria-labelledby="conta-titulo">
      <div className="wrap row" style={{ gap: 64 }}>
        <div className="col" style={{ flex: '1 1 420px' }}>
          <p className="eyebrow">Faça a conta</p>
          <h2 id="conta-titulo" className="h2">A conta da sua próxima conquista.</h2>

          <div role="group" aria-label="Tipo de bem" className="row" style={{ gap: 8, margin: '28px 0 36px' }}>
            {TIPOS.map((t) => (
              <button key={t.id} type="button" className="chip" aria-pressed={tipo === t.id} onClick={() => escolherTipo(t)}>
                {t.label}
              </button>
            ))}
          </div>

          <label htmlFor="credito" className="label" style={{ display: 'block', marginBottom: 6 }}>Valor do crédito</label>
          <output htmlFor="credito" className="num" style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 40, color: 'var(--ink)', marginBottom: 6 }}>
            {brl.format(credito)}
          </output>
          <input
            id="credito"
            type="range"
            className="range"
            min={0}
            max={tabela.length - 1}
            step={1}
            value={Math.min(idx, tabela.length - 1)}
            onChange={(e) => setIdx(Number(e.target.value))}
            aria-valuetext={brl.format(credito)}
          />
          <div className="row num small" style={{ justifyContent: 'space-between', color: 'var(--ink-muted)' }}>
            <span>{brl.format(tabela[0][0])}</span>
            <span>{brl.format(tabela[tabela.length - 1][0])}</span>
          </div>
          <p className="cp small" style={{ marginTop: 24 }}>{TABELA_REF}. Valores sujeitos ao reajuste anual do grupo.</p>
        </div>

        <div className="col pad-box" style={{ flex: '1 1 380px', background: 'var(--surface)', padding: 40 }} aria-live="polite">
          <div className="label">Aporte reduzido até a contemplação</div>
          <div className="num" style={{ fontFamily: 'var(--serif)', fontSize: 60, color: 'var(--green)', margin: '8px 0 28px', lineHeight: 1.1 }}>
            {brl2.format(meio)}
          </div>
          <dl className="num" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 20, fontSize: 14, margin: 0, paddingTop: 24, borderTop: '1px solid var(--rule)' }}>
            <div><dt style={{ color: 'var(--ink-muted)' }}>Crédito</dt><dd style={{ margin: '4px 0 0', fontWeight: 600 }}>{brl.format(credito)}</dd></div>
            <div><dt style={{ color: 'var(--ink-muted)' }}>Prazo</dt><dd style={{ margin: '4px 0 0', fontWeight: 600 }}>{prazo} meses</dd></div>
            <div><dt style={{ color: 'var(--ink-muted)' }}>Aporte integral de referência</dt><dd style={{ margin: '4px 0 0', fontWeight: 600 }}>{brl2.format(integral)}</dd></div>
            {tipo === 'imovel' && (
              <div><dt style={{ color: 'var(--ink-muted)' }}>Estrutura operacional</dt><dd style={{ margin: '4px 0 0', fontWeight: 600 }}>22% no prazo</dd></div>
            )}
          </dl>
          <p className="cp" style={{ fontSize: 12, margin: '24px 0' }}>
            Estimativa para você se situar. O valor final, o aporte após a contemplação e a estratégia de contemplação vêm no diagnóstico patrimonial.
          </p>
          <a href="#diagnostico" className="btn btn-pri btn-block">Levar esta conta para o meu diagnóstico</a>
        </div>
      </div>
    </section>
  );
}
