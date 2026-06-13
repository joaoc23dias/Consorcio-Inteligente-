'use client';
import { useEffect, useRef, useState } from 'react';

const pains = [
  { icon: '⏳', title: 'Esperam 5+ anos sem estratégia', desc: 'A média nacional é 60 meses para contemplação. Sem saber escolher grupo e estruturar lance, você vira refém do sorteio.' },
  { icon: '💸', title: 'Pagam R$ 680 Mil a mais em juros', desc: 'Quem usa financiamento bancário paga 7-9% ao ano por 30 anos. É literalmente dar um imóvel de graça para o banco.' },
  { icon: '📦', title: 'Ficam presos em 1 único imóvel', desc: 'O banco engessa seu patrimônio. Hipoteca bloqueia 30 anos do seu fluxo. Enquanto isso, quem usa consórcio certo acumula 3.' },
  { icon: '🎲', title: 'Apostam no sorteio como estratégia', desc: 'Entrar num consórcio qualquer e rezar para ser sorteado não é estratégia. É jogo. E a casa sempre ganha.' },
  { icon: '📉', title: 'Escolhem os grupos errados', desc: 'Existem milhares de grupos ativos no Brasil. Apenas 5-7% têm perfil ideal para lance estratégico. Os outros 93% desperdiçam seu dinheiro.' },
  { icon: '🚫', title: 'Não sabem quanto ofertar de lance', desc: 'Lance errado = recurso desperdiçado + contemplação perdida. Sem modelo de análise, você chuta. Com o Método SPA®, você calcula.' },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="section bg-grid" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>

      {/* Background glow */}
      <div style={{ position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(239,68,68,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">

        {/* Header */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge" style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)', marginBottom: '1rem' }}>
            🚨 O PROBLEMA QUE NINGUÉM TE CONTA
          </span>
          <h2 className="text-h2" style={{ marginBottom: '1rem' }}>
            Por que <span style={{ color: '#ef4444' }}>97% das Pessoas</span> no Consórcio{' '}
            <span style={{ color: 'var(--accent-orange)' }}>Erram</span> — e Quanto Isso Custa
          </h2>
          <p className="text-lead" style={{ maxWidth: '42rem', margin: '0 auto' }}>
            Consórcio em si é um instrumento excelente. O problema é a falta de estratégia.
            Esses são os 6 erros que transformam uma oportunidade em desperdício.
          </p>
        </div>

        {/* Pain cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {pains.map((p, i) => (
            <div
              key={i}
              className={`pain-card reveal ${visible ? 'visible' : ''} delay-${Math.min(i + 1, 5)}`}
            >
              <span style={{ fontSize: '1.75rem', flexShrink: 0, marginTop: '0.1rem' }}>{p.icon}</span>
              <div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition statement — Hormozi pivot */}
        <div className={`reveal ${visible ? 'visible' : ''} delay-5`}>
          <div style={{ background: 'rgba(255,90,31,0.06)', border: '1px solid rgba(255,90,31,0.25)', borderRadius: 'var(--radius-lg)', padding: '2rem 2.5rem', textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
              O problema não é o consórcio.<br />
              <span style={{ color: 'var(--accent-orange)' }}>O problema é entrar sem o Método SPA®.</span>
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              O Método SPA® foi desenvolvido para eliminar cada um desses 6 erros — com análise de dados, modelo de lance e suporte especializado.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
