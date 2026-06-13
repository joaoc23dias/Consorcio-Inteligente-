'use client';
import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const c200 = useCountUp(200, 1800, visible);
  const c680 = useCountUp(680, 2200, visible);
  const c1200 = useCountUp(1200, 2500, visible);

  return (
    <section
      ref={sectionRef}
      className="bg-hero-glow bg-dots"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow center */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(255,90,31,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Floating particles */}
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
      <div className="particle particle-5" />
      <div className="particle particle-6" />

      {/* Ambient corner glow */}
      <div style={{
        position: 'absolute', top: '-200px', right: '-200px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(255,90,31,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <div className={`animate-fade-up`} style={{ marginBottom: '2rem' }}>
          <span className="badge animate-glow-pulse">
            ✦ MÉTODO SPA® — PATENTEADO GAIA GROUP
          </span>
        </div>

        {/* HEADLINE — Hormozi: Claim direto, mecanismo, resultado */}
        <div className="animate-fade-up delay-1" style={{ marginBottom: '1.5rem' }}>
          <h1 className="text-hero">
            <span style={{ display: 'block', color: 'var(--text-primary)' }}>O Consórcio que</span>
            <span className="gradient-text" style={{ display: 'block' }}>Constrói Patrimônio</span>
            <span style={{ display: 'block', color: 'var(--text-primary)', fontSize: '0.72em', fontWeight: 800, marginTop: '0.25rem' }}>
              Sem Banco. Sem Juros. Sem Esperar 60 Meses.
            </span>
          </h1>
        </div>

        {/* Sub-headline — Hormozi ritmo: problema → mecanismo → prova */}
        <div className="animate-fade-up delay-2" style={{ marginBottom: '0.75rem' }}>
          <p className="text-lead container-sm" style={{ margin: '0 auto' }}>
            A maioria entra num consórcio e <strong style={{ color: 'var(--text-primary)' }}>espera 5 anos</strong>.
            Nossos clientes usam o <strong style={{ color: 'var(--accent-orange)' }}>Método SPA®</strong> para
            identificar os TOP 5-7% dos grupos, estruturar lances e contemplar em{' '}
            <strong style={{ color: 'var(--text-primary)' }}>14-36 meses</strong> — acumulando
            2-3 imóveis enquanto outros ainda pagam banco.
          </p>
        </div>

        {/* Proof line */}
        <div className="animate-fade-up delay-2" style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Economia comprovada de até{' '}
            <strong style={{ color: 'var(--text-primary)' }}>R$ 680 Mil em Juros</strong>{' '}
            vs. financiamento bancário tradicional
          </p>
        </div>

        {/* Strategy tag */}
        <div className="animate-fade-up delay-3" style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,90,31,0.06)', border: '1px solid rgba(255,90,31,0.2)',
            borderRadius: '8px', padding: '0.6rem 1.2rem',
          }}>
            <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em' }}>
              ⊙ ESTRATÉGIA FOCADA EM ANTECIPAR A CONTEMPLAÇÃO VIA LANCE ESTRATÉGICO
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-up delay-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <a href="#form" className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>
            Agendar Consultoria Gratuita →
          </a>
          <a href="#como-funciona" className="btn-outline">
            Ver Como Funciona
          </a>
        </div>

        {/* Stats bar — counter animado */}
        <div className="animate-fade-up delay-4">
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '2.5rem',
          }}>
            {[
              { value: '+' + c200, label: 'Empresários Atendidos', suffix: '' },
              { value: 'R$' + c680 + 'M', label: 'em Juros Economizados', suffix: '' },
              { value: '+' + c1200, label: 'Imóveis Adquiridos', suffix: '' },
            ].map((s, i) => (
              <div key={i} style={{
                flex: '1', minWidth: '160px',
                textAlign: 'center',
                padding: '1rem 2rem',
                borderRight: i < 2 ? '1px solid var(--border-color)' : 'none',
              }}>
                <div className="stat-number" style={{ color: i === 0 ? 'var(--text-primary)' : i === 1 ? 'var(--accent-orange)' : 'var(--text-primary)' }}>
                  {s.value}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
