'use client';
import { useEffect, useRef, useState } from 'react';

const benefits = [
  { num: '01', icon: '💰', title: 'Economize R$ 680 Mil em Juros', desc: 'Enquanto o financiamento bancário cobra 7-9% ao ano, o consórcio cobra apenas 2-3% de taxa de administração. Em R$ 500k ao longo de 30 anos, a diferença vira patrimônio no seu bolso.' },
  { num: '02', icon: '🏠', title: 'Gere Renda Passiva de R$ 8.500/mês', desc: 'Imóvel #1 = moradia (parcela zero). Imóvel #2 = R$ 4.000/mês de aluguel. Imóvel #3 = mais R$ 4.500/mês. Tudo estruturado via consórcio, sem comprometer seu fluxo de caixa.' },
  { num: '03', icon: '⚡', title: 'Contemple 3 Imóveis em 36 Meses', desc: 'A média do mercado é 60+ meses para contemplar. Com o Método SPA®, nossos clientes contemplam em 14-36 meses. Você fica 24 meses à frente — enquanto outros ainda esperam o banco aprovar.' },
  { num: '04', icon: '🏦', title: 'Desbloqueie 100% do Fluxo de Caixa', desc: 'Sem hipoteca. Após a contemplação no consórcio, o fluxo é inteiramente seu. Reinvista a mesma parcela para acelerar a próxima carta de crédito e multiplicar o patrimônio.' },
  { num: '05', icon: '🔐', title: 'Diversifique Sem Comprometer Capital', desc: 'Com consórcio você monta um portfólio real: moradia + aluguel + imóvel comercial. Não prende 100% do seu capital em 1 único ativo. Flexibilidade financeira que financiamento nunca vai dar.' },
  { num: '06', icon: '🚀', title: 'Multiplique Patrimônio 3X Mais Rápido', desc: 'Banco: linear — 1 imóvel a cada 5 anos. Consórcio com estratégia: exponencial — 3 imóveis em 3 anos. Aceleração de 300% vs. o método tradicional. Essa é a diferença do Método SPA®.' },
];

export default function SixBenefitsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="section bg-grid" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>

      {/* Glow bottom */}
      <div style={{ position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(255,90,31,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">

        {/* Header */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>📌 ESTRATÉGIAS COMPROVADAS</span>
          <h2 className="text-h2" style={{ marginBottom: '1rem' }}>
            6 Maneiras de Usar o{' '}
            <span className="gradient-text">Consórcio</span>{' '}
            para Explodir Seu Patrimônio em 36 Meses
          </h2>
          <p className="text-lead" style={{ maxWidth: '40rem', margin: '0 auto' }}>
            Cada estratégia foi testada com +200 clientes reais. Não é teoria — é o que o consórcio faz quando usado com inteligência.
          </p>
        </div>

        {/* Benefits grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`card-solid reveal ${visible ? 'visible' : ''} delay-${Math.min(i + 1, 5)}`}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
            >
              {/* Number + icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'var(--accent-orange)', color: '#fff', fontSize: '0.7rem', fontWeight: 900, flexShrink: 0 }}>{b.num}</span>
                <span style={{ fontSize: '1.5rem' }}>{b.icon}</span>
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>{b.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{b.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
