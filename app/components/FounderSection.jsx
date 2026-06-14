'use client';
import { useEffect, useRef, useState } from 'react';

const badges = [
  '7 Anos de Mercado',
  'Especialista em Consórcio',
  'Método SPA® Proprietário',
  '+200 Empresários Atendidos',
];

export default function FounderSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="section bg-noise" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>

      {/* background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(ellipse, rgba(255,90,31,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="container">
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>👤 QUEM ESTÁ POR TRÁS DO MÉTODO</span>
        </div>

        <div
          className={`reveal ${visible ? 'visible' : ''} delay-1`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '4rem',
            alignItems: 'center',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {/* Photo col */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--accent-orange)',
              boxShadow: '0 0 40px rgba(255,90,31,0.25)',
              flexShrink: 0,
            }}>
              <img
                src="/joao-dias.jpg"
                alt="João Dias — Especialista em Consórcio"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>
            {/* Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
              {badges.map((b, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'rgba(255,90,31,0.06)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap',
                }}>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Text col */}
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.25rem', lineHeight: 1.1 }}>
              João Dias
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--accent-orange)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '0.04em' }}>
              Especialista em Consórcio | Gaia Group
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Passei <strong style={{ color: 'var(--text-primary)' }}>7 anos estudando cada movimento dos grupos de consórcio</strong> no Brasil — analisando padrões, calculando probabilidades e mapeando os grupos onde a contemplação antecipada via lance é matematicamente mais viável.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Criei o <strong style={{ color: 'var(--accent-orange)' }}>Método SPA®</strong> depois de perceber que a maioria das pessoas entra num consórcio como quem aposta numa loteria — sem dados, sem estratégia, sem direção. Vi centenas de pessoas desperdiçando tempo e dinheiro esperando o sorteio enquanto poderiam estar acelerando com lances calculados.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.8, fontWeight: 700, fontStyle: 'italic', borderLeft: '3px solid var(--accent-orange)', paddingLeft: '1rem', marginBottom: '1.75rem' }}>
              "Consórcio não é parcela. Consórcio é estratégia."
            </p>

            <a
              href="#form"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#16a34a',
                color: '#fff',
                fontWeight: 800,
                fontSize: '1rem',
                padding: '0.875rem 2rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                boxShadow: '0 0 20px rgba(22,163,74,0.4)',
                transition: 'transform 0.15s, box-shadow 0.15s',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(22,163,74,0.6)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(22,163,74,0.4)'; }}
            >
              💬 Quero Aplicar para o Método SPA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
