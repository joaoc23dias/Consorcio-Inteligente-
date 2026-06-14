'use client';
import { useEffect, useRef, useState } from 'react';

const steps = [
{
num: '01',
icon: '🔬',
title: 'Análise de Grupos',
subtitle: 'Filtragem dos TOP 5-7%',
desc: 'Analisamos milhares de grupos ativos no Brasil com nossa metodologia proprietária. Identificamos apenas os que têm perfil ideal para lance estratégico — liquidez, taxa, prazo e histórico de distribuição.',
metric: '+5.000 grupos analisados',
color: '#FF5A1F',
},
{
num: '02',
icon: '🎯',
title: 'Seleção Estratégica',
subtitle: 'Match perfeito com seu perfil',
desc: 'Cruzamos seu objetivo (moradia, renda passiva ou aceleração patrimonial) com os grupos filtrados. Você recebe uma lista curta e qualificada — não desperdicio de recursos com grupos sem perfil estratégico.',
metric: '3-5 grupos recomendados',
color: '#F59E0B',
},
{
num: '03',
icon: '⚡',
title: 'Lance Estratégico',
subtitle: 'Modelo de cálculo proprietário',
desc: 'Com o Modelo SPA® de cálculo de lance, você sabe exatamente quanto ofertar para maximizar a probabilidade de ser contemplado antes da média. Fim dos chutes. Início da estratégia com dados.',
metric: 'Maior prob. de antecipar vs. sorteio',
color: '#10B981',
},
];

export default function MethodSection() {
const ref = useRef(null);
const [visible, setVisible] = useState(false);
useEffect(() => {
const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
if (ref.current) obs.observe(ref.current);
return () => obs.disconnect();
}, []);

return (
<section ref={ref} className="section bg-dots" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
<div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '350px', background: 'radial-gradient(ellipse, rgba(255,90,31,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
<div className="container">
<div className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
<span className="badge" style={{ marginBottom: '1rem' }}>⚙️ O MECANISMO</span>
<h2 className="text-h2" style={{ marginBottom: '1rem' }}>
Como Funciona o{' '}
<span className="gradient-text">Método SPA®</span>
</h2>
<p className="text-lead" style={{ maxWidth: '40rem', margin: '0 auto' }}>
<strong style={{ color: 'var(--accent-orange)' }}>SPA</strong> significa{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Segurança, Patrimônio & Alavancagem</strong>.{' '}
              3 etapas. Dados reais. Zero chute. Esse é o processo que maximiza a probabilidade de antecipar a contemplação via lance estratégico.
</p>
</div>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
{steps.map((step, i) => (
<div
key={i}
className={`card-glass reveal ${visible ? 'visible' : ''} delay-${i + 1}`}
style={{ position: 'relative', overflow: 'hidden', borderTop: `3px solid ${step.color}` }}
>
<div style={{ position: 'absolute', top: '-10px', right: '1rem', fontSize: '5rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
{step.num}
</div>
<div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', background: step.color + '22', border: '1px solid ' + step.color + '44', fontSize: '1.25rem', flexShrink: 0 }}>
{step.icon}
</div>
<span style={{ fontSize: '0.7rem', fontWeight: 800, color: step.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
Passo {step.num}
</span>
</div>
<h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem', lineHeight: 1.2 }}>
{step.title}
</h3>
<p style={{ fontSize: '0.8rem', color: step.color, fontWeight: 600, marginBottom: '1rem' }}>
{step.subtitle}
</p>
<p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
{step.desc}
</p>
<div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.9rem', background: step.color + '15', border: '1px solid ' + step.color + '30', borderRadius: '9999px' }}>
<span style={{ fontSize: '0.75rem', fontWeight: 700, color: step.color }}>✓ {step.metric}</span>
</div>
</div>
))}
</div>
<div className={`reveal ${visible ? 'visible' : ''} delay-4`} style={{ textAlign: 'center' }}>
<div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 2rem', background: 'rgba(255,90,31,0.06)', border: '1px solid rgba(255,90,31,0.2)', borderRadius: 'var(--radius-lg)' }}>
<span style={{ fontSize: '1.5rem' }}>🏆</span>
<div style={{ textAlign: 'left' }}>
<p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
Resultado médio reportado pelos clientes Método SPA®
</p>
<p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
Buscaram antecipação via lance em <strong style={{ color: 'var(--accent-orange)' }}>média de 14-36 meses</strong> — vs. média de mercado de <strong style={{ color: '#ef4444' }}>60+ meses no sorteio</strong>. Resultados individuais variam.
</p>
</div>
</div>
</div>
</div>
</section>
);
}
