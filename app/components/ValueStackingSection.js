'use client';
import { useEffect, useRef, useState } from 'react';

const beforeItems = [
  { icon: '❌', text: 'Financiamento bancário 30 anos' },
  { icon: '❌', text: 'R$ 680k desperdiçados em juros' },
  { icon: '❌', text: '1 imóvel no fim da vida' },
  { icon: '❌', text: 'Fluxo de caixa preso por décadas' },
  { icon: '❌', text: 'Nenhuma renda passiva imobiliária' },
  { icon: '❌', text: 'Patrimônio linear e lento' },
];

const afterItems = [
  { icon: '✅', text: 'Consórcio com Método SPA® estruturado' },
  { icon: '✅', text: 'R$ 680k economizados — viram patrimônio' },
  { icon: '✅', text: '2-3 imóveis em 36 meses' },
  { icon: '✅', text: 'Fluxo 100% liberado após contemplação' },
  { icon: '✅', text: 'R$ 8.500+/mês de renda passiva' },
  { icon: '✅', text: 'Patrimônio exponencial e escalável' },
];

const stackItems = [
  { icon: '💰', label: 'Economia em Juros vs. Banco', value: 'R$ 680.000', note: '*Projeção ilustrativa vs. financiamento médio 30 anos' },
  { icon: '📈', label: 'Renda Passiva Estimada (16 anos)', value: 'R$ 192.000', note: '*Estimativa com 2 imóveis gerando aluguel médio' },
  { icon: '🏘️', label: 'Potencial de Valorização', value: '+R$ 500.000+', note: '*Potencial adicional vs. 1 imóvel tradicional' },
  { icon: '🔓', label: 'Fluxo de Caixa Liberado', value: 'ILIMITADO', note: '*Sem hipoteca, sem restrições de uso do capital' },
];

export default function ValueStackingSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="section" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>

      {/* Glow top */}
      <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '350px', background: 'radial-gradient(ellipse, rgba(255,90,31,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="container">

        {/* Header */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>PROJEÇÃO DE CENÁRIO</span>
          <h2 className="text-h2" style={{ marginBottom: '1rem' }}>
            O Que o <span style={{ color: 'var(--accent-orange)' }}>Método SPA®</span> Faz pelo Seu Patrimônio
          </h2>
          <p className="text-lead" style={{ maxWidth: '40rem', margin: '0 auto' }}>
            Comparativo real entre continuar no banco vs. usar consórcio com estratégia.
            Valores ilustrativos baseados em médias de mercado.
          </p>
        </div>

        {/* Before / After */}
        <div className={`reveal ${visible ? 'visible' : ''} delay-1`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>

          <div className="before-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🏦</span>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Com Banco</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {beforeItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <span style={{ flexShrink: 0 }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="after-card" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-1px', left: '0', right: '0', height: '2px', background: 'var(--accent-orange)', borderRadius: '2px 2px 0 0' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🚀</span>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Com Método SPA®</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {afterItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <span style={{ flexShrink: 0 }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stack items */}
        <div className={`reveal ${visible ? 'visible' : ''} delay-2`} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem' }}>
          {stackItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', padding: '1.5rem 2rem', borderBottom: i < stackItems.length - 1 ? '1px solid var(--border-color)' : 'none', flexWrap: 'wrap', transition: 'background var(--t-base)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-elevated)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '200px' }}>
                <span style={{ fontSize: '1.75rem' }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{item.note}</div>
                </div>
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--accent-orange)', letterSpacing: '-0.02em', textAlign: 'right' }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Total projetado */}
        <div className={`reveal ${visible ? 'visible' : ''} delay-3`} style={{ background: 'linear-gradient(135deg, rgba(255,90,31,0.1) 0%, rgba(255,90,31,0.04) 100%)', border: '1px solid rgba(255,90,31,0.3)', borderRadius: 'var(--radius-lg)', padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>POTENCIAL TOTAL PROJETADO</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>*Projeção ilustrativa. Resultados reais variam conforme perfil e mercado.</div>
          </div>
          <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--accent-orange)', letterSpacing: '-0.03em' }}>+R$ 1.3M+</div>
        </div>

      </div>
    </section>
  );
}
