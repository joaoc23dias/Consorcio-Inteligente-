'use client';
import { useState, useEffect, useRef } from 'react';

const bonuses = [
  { icon: '📊', title: 'Planilha de Análise de Imóveis', objection: 'Resolve: "E se eu escolher o imóvel errado no consórcio?"', value: 'R$ 497', color: '#FF5A1F' },
  { icon: '🗓️', title: 'Cronograma Estratégico de 36 Meses', objection: 'Resolve: "E se eu não souber a ordem certa dos lances?"', value: 'R$ 297', color: '#F59E0B' },
  { icon: '📖', title: 'Guia Completo de Contemplação', objection: 'Resolve: "E se eu travar no meio do caminho?"', value: 'R$ 197', color: '#10B981' },
  { icon: '🤝', title: 'Consultoria 1×1 com Especialista', objection: 'Resolve: "E se eu precisar de ajuda personalizada?"', value: 'R$ 1.997', color: '#6366F1' },
];

const totalValue = 2988;

export default function UrgencySection() {
  const DEADLINE = new Date('2026-06-30T23:59:00-03:00');
  const getRemaining = () => Math.max(0, Math.floor((DEADLINE.getTime() - Date.now()) / 1000));
  const [timeLeft, setTimeLeft] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const expired = timeLeft <= 0;

  useEffect(() => {
    setTimeLeft(getRemaining());
    const timer = setInterval(() => setTimeLeft(getRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section ref={ref} className="section" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>

      {/* Glow */}
      <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(255,90,31,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">

        {/* Header */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>🔥 OFERTA ESPECIAL</span>
          <h2 className="text-h2" style={{ marginBottom: '1rem' }}>
            Esta Oferta Encerra{' '}
            <span className="gradient-text">em Breve</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: '36rem', margin: '0 auto' }}>
            Aproveite os bônus exclusivos antes do encerramento — para quem entrar no consórcio agora
          </p>
        </div>

        {/* Countdown */}
        <div className={`card-glass reveal ${visible ? 'visible' : ''} delay-1`} style={{ marginBottom: '3rem', textAlign: 'center', padding: '2.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {expired ? 'As inscrições desta turma estão encerradas' : '⏱️ Tempo Restante da Oferta'}
          </p>
          {!expired && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', maxWidth: '26rem', margin: '0 auto' }}>
              {[{ val: pad(days), label: 'Dias' }, { val: pad(hours), label: 'Horas' }, { val: pad(minutes), label: 'Min' }, { val: pad(seconds), label: 'Seg' }].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ background: 'rgba(255,90,31,0.1)', border: '1px solid rgba(255,90,31,0.3)', borderRadius: '0.625rem', padding: '1rem 0.5rem' }}>
                    <p style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--accent-orange)', lineHeight: 1 }}>{item.val}</p>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</p>
                </div>
              ))}
            </div>
          )}
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '1.25rem' }}>Oferta válida até 30 de junho de 2026.</p>
        </div>

        {/* Bonus Stack Header */}
        <div className={`reveal ${visible ? 'visible' : ''} delay-2`} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 className="text-h3">Tudo o Que Você Recebe Hoje</h3>
          <p className="text-lead" style={{ marginTop: '0.5rem' }}>Cada bônus existe para eliminar um motivo de você não conseguir avançar no consórcio</p>
        </div>

        {/* Bonus grid 2x2 — sem card solto */}
        <div
          className={`reveal ${visible ? 'visible' : ''} delay-3`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                borderLeft: `3px solid ${bonus.color}`,
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = bonus.color; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.borderLeftColor = bonus.color; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.625rem', background: bonus.color + '18', border: '1px solid ' + bonus.color + '35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.35rem', flexShrink: 0 }}>
                {bonus.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.3rem', fontSize: '0.95rem', lineHeight: 1.3 }}>{bonus.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem', fontStyle: 'italic', lineHeight: 1.5 }}>{bonus.objection}</p>
                <p style={{ color: bonus.color, fontWeight: 800, fontSize: '0.9rem' }}>Valor: {bonus.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Card */}
        <div className={`reveal ${visible ? 'visible' : ''} delay-4`}>
          <div style={{ background: 'linear-gradient(135deg, rgba(255,90,31,0.1) 0%, rgba(255,90,31,0.05) 100%)', border: '1.5px solid rgba(255,90,31,0.35)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', maxWidth: '34rem', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>VALOR TOTAL DOS BÔNUS</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.5rem', fontWeight: 700, textDecoration: 'line-through', marginBottom: '0.75rem' }}>R$ {totalValue.toLocaleString('pt-BR')}</p>
            <p style={{ color: '#4ade80', fontSize: '0.9rem', marginBottom: '0.35rem' }}>Hoje, ao entrar no consórcio com o Método SPA®</p>
            <p className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>GRÁTIS</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Todos os bônus incluísos sem custo adicional</p>
          </div>
        </div>

        {/* CTA */}
        <div className={`reveal ${visible ? 'visible' : ''} delay-5`} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="https://wa.me/19998187567" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            💬 Quero Aproveitar a Oferta
          </a>
        </div>

      </div>
    </section>
  );
}
