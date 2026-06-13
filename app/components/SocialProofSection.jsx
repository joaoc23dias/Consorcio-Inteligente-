'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '500+', label: 'Clientes que Transformaram Vidas', subtext: 'Metodologia comprovada de sucesso' },
  { number: '1.200+', label: 'Imóveis Adquiridos', subtext: 'Em todo o Brasil' },
  { number: 'R$ 2.1B', label: 'Economizados em Juros', subtext: 'Versus financiamento tradicional' },
];

const testimonials = [
  { initials: 'CS', name: 'Carlos Silva', title: 'Empresário | São Paulo', result: '3 imóveis em 28 meses', income: 'R$ 12.500/mês de renda passiva', color: '#FF5A1F' },
  { initials: 'MC', name: 'Marina Costa', title: 'Consultora | Rio de Janeiro', result: '2 imóveis em 20 meses', income: 'R$ 8.000/mês de renda passiva', color: '#F59E0B' },
  { initials: 'JP', name: 'Dr. João Pereira', title: 'Médico | Minas Gerais', result: '4 imóveis em 40 meses', income: 'R$ 18.500/mês de renda passiva', color: '#10B981' },
];

export default function SocialProofSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>

      {/* Background glow */}
      <div style={{ position: 'absolute', top: '-60px', right: '-100px', width: '500px', height: '400px', background: 'radial-gradient(ellipse, rgba(255,90,31,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">

        {/* Header */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>⭐ RESULTADOS REAIS</span>
          <h2 className="text-h2" style={{ marginBottom: '1rem' }}>
            Resultados Comprovados{' '}
            <span className="gradient-text">que Falam por Si</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: '40rem', margin: '0 auto' }}>
            Centenas de pessoas já estruturaram a compra dos seus imóveis com o Método SPA.
          </p>
        </div>

        {/* Stats bar */}
        <div className={`reveal ${visible ? 'visible' : ''} delay-1`} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 0,
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          marginBottom: '3.5rem',
          backgroundColor: 'var(--bg-card)',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              padding: '1.75rem 1.5rem',
              borderRight: i < stats.length - 1 ? '1px solid var(--border-color)' : 'none',
              textAlign: 'center',
              position: 'relative',
            }}>
              <div style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, color: i === 0 ? 'var(--text-primary)' : i === 1 ? 'var(--accent-orange)' : 'var(--text-primary)', lineHeight: 1 }}>{stat.number}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginTop: '0.4rem' }}>{stat.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`card-glass reveal ${visible ? 'visible' : ''} delay-${index + 2}`}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: `2px solid ${t.color}` }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.2rem' }}>
                {[1,2,3,4,5].map(s => (
                  <span key={s} style={{ color: 'var(--accent-orange)', fontSize: '0.9rem' }}>★</span>
                ))}
              </div>

              {/* Result badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.3rem 0.75rem',
                backgroundColor: t.color + '18',
                border: `1px solid ${t.color}35`,
                borderRadius: '9999px',
                alignSelf: 'flex-start',
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: t.color }}>{t.result}</span>
              </div>

              {/* Income */}
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>{t.income}</div>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-color)',
                marginTop: 'auto',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: t.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.85rem', color: '#fff', flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className={`reveal ${visible ? 'visible' : ''} delay-5`} style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic', maxWidth: '680px', margin: '0 auto', lineHeight: 1.5 }}>
          *Depoimentos são relatos reais de clientes. Resultados individuais podem variar conforme perfil, grupo de consórcio e estratégia aplicada. Não representam promessa ou garantia de contemplação.
        </p>

      </div>
    </section>
  );
}
