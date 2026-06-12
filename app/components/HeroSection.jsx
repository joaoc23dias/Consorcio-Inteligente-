'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      style={{ backgroundColor: 'var(--bg-primary)' }}
      className="relative overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(255,90,31,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="layout_container section_padding" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>

          {/* Badge */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <span className="accent_tag">
              ✦ MÉTODO SPA® — PATENTEADO GAIA GROUP
            </span>
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Saia do Financiamento Bancário{' '}
            <span style={{ color: 'var(--accent-orange)' }}>
              com Estratégia Para Construir um Patrimônio de Imóveis
            </span>
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            fontWeight: 500,
          }}>
            (Economizando R$ 680 Mil em Juros)
          </p>

          {/* Strategy badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'rgba(255,90,31,0.1)',
            border: '1px solid rgba(255,90,31,0.25)',
            borderRadius: '0.5rem',
            marginBottom: '2.5rem',
            color: 'var(--accent-orange)',
            fontWeight: 600,
            fontSize: '0.9rem',
            letterSpacing: '0.04em',
          }}>
            <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
            ESTRATÉGIA FOCADA EM ANTECIPAR A CONTEMPLAÇÃO VIA LANCE
          </div>

          {/* Body text */}
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '0.75rem',
            maxWidth: '640px',
            margin: '0 auto 0.75rem',
          }}>
            Nosso Método SPA® identifica os TOP 5-7% de grupos de consórcio e organiza um plano
            estratégico de lances para buscar a contemplação no menor tempo possível.
          </p>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '0.5rem',
            maxWidth: '640px',
            margin: '0 auto 0.5rem',
          }}>
            Sem juros, sem impacto no fluxo de caixa.
          </p>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
            maxWidth: '640px',
            margin: '0 auto 2.5rem',
          }}>
            Comprovado com +200 empresários inteligentes.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn_primary"
              style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}
            >
              Agendar Consultoria Gratuita
              <ArrowRight size={20} />
            </a>
            <a
              href="#como-funciona"
              className="btn_secondary"
              style={{ fontSize: '1rem' }}
            >
              Como Funciona
            </a>
          </div>

          {/* Social proof strip */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-color)',
          }}>
            {[
              { value: '+200', label: 'Empresários Atendidos' },
              { value: 'R$ 680M', label: 'em Juros Economizados' },
              { value: 'TOP 5-7%', label: 'dos Grupos Selecionados' },
            ].map((stat) => (
              <div key={stat.value} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
