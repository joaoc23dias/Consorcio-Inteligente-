'use client';

import { useState, useEffect } from 'react';

const bonuses = [
  { title: 'Planilha de Analise de Imoveis', objection: 'Resolve: "E se eu escolher o imovel errado?"', value: 'R$ 497' },
  { title: 'Cronograma Estrategico de 36 Meses', objection: 'Resolve: "E se eu nao souber a ordem certa?"', value: 'R$ 297' },
  { title: 'Guia Completo de Contemplacao', objection: 'Resolve: "E se eu travar no meio do caminho?"', value: 'R$ 197' },
  { title: 'Consultoria 1x1 com Especialista', objection: 'Resolve: "E se eu precisar de ajuda personalizada?"', value: 'R$ 1.997' }
];

const totalValue = 2988;

export default function UrgencySection() {
  const DEADLINE = new Date('2026-06-30T23:59:00-03:00');
  const getRemaining = () => Math.max(0, Math.floor((DEADLINE.getTime() - Date.now()) / 1000));
  const [timeLeft, setTimeLeft] = useState(0);
  const expired = timeLeft <= 0;

  useEffect(() => {
    setTimeLeft(getRemaining());
    const timer = setInterval(() => {
      setTimeLeft(getRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section style={{ padding: '6rem 1rem', backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '60rem', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'rgba(255,90,31,0.12)', color: 'var(--accent-orange)', border: '1px solid rgba(255,90,31,0.3)', borderRadius: '999px', padding: '0.35rem 1rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '1rem' }}>OFERTA ESPECIAL</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>Esta Oferta Encerra em Breve</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '36rem', margin: '0 auto' }}>Aproveite as condicoes especiais antes do encerramento da oferta</p>
        </div>

        {/* Countdown */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '0.75rem', padding: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem' }}>{expired ? 'As inscricoes desta turma estao encerradas' : 'Tempo Restante da Oferta'}</p>
          {!expired && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', maxWidth: '28rem', margin: '0 auto' }}>
              {[{ val: pad(days), label: 'Dias' }, { val: pad(hours), label: 'Horas' }, { val: pad(minutes), label: 'Minutos' }, { val: pad(seconds), label: 'Segundos' }].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--accent-orange)', borderRadius: '0.5rem', padding: '1rem 0.5rem' }}>
                    <p style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-orange)', lineHeight: 1 }}>{item.val}</p>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                </div>
              ))}
            </div>
          )}
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1.5rem' }}>Oferta valida ate 30 de junho de 2026.</p>
        </div>

        {/* Bonus Cards */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', textAlign: 'center', marginBottom: '0.75rem' }}>Tudo o Que Voce Recebe Hoje</h3>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2.5rem' }}>Cada bonus existe para eliminar um motivo de voce nao conseguir</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {bonuses.map((bonus, index) => (
              <div key={index} style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '0.75rem', padding: '1.5rem', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-orange)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '50%', backgroundColor: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem' }}>+</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.35rem', fontSize: '0.95rem' }}>{bonus.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>{bonus.objection}</p>
                    <p style={{ color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.9rem' }}>Valor: {bonus.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Value Card */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '2px solid rgba(255,90,31,0.4)', borderRadius: '1rem', padding: '2.5rem', maxWidth: '32rem', margin: '0 auto 3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>VALOR TOTAL DOS BONUS</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.75rem', fontWeight: 700, textDecoration: 'line-through', marginBottom: '0.75rem' }}>R$ {totalValue.toLocaleString('pt-BR')}</p>
          <p style={{ color: '#4ade80', fontSize: '1rem', marginBottom: '0.35rem' }}>Hoje, ao entrar no programa</p>
          <p style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-orange)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>GRATIS</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Todos os bonus inclusos sem custo adicional ao entrar no programa</p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="https://wa.me/19998187567" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--accent-orange)', color: '#fff', fontWeight: 800, fontSize: '1.1rem', borderRadius: '0.5rem', textDecoration: 'none', transition: 'background-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--accent-orange-hover)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--accent-orange)'}
          >Quero Aproveitar a Oferta</a>
        </div>

      </div>
    </section>
  );
}
