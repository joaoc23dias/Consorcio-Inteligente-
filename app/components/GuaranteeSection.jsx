'use client';
import { useEffect, useRef, useState } from 'react';

const garantias = [
{
icon: '🛡',
titulo: 'Satisfação com a Consultoria (30 dias)',
descricao: 'Se em 30 dias você avaliar que a consultoria e a metodologia não atendem às suas expectativas, devolvemos 100% do valor investido na consultoria. O resultado do consórcio depende de variáveis de mercado, mas a qualidade do nosso serviço é nossa responsabilidade.',
color: '#FF5A1F',
},
{
icon: '🎓',
titulo: 'Garantia de Suporte Especializado',
descricao: 'Acompanhamento do nosso time de especialistas durante todo o seu período de participação no consórcio. Incluído integralmente na sua entrada no Método SPA®.',
color: '#F59E0B',
},
{
icon: '✅',
titulo: 'Garantia de Método Comprovado',
descricao: 'Você tem acesso ao mesmo Método SPA® estruturado que já foi aplicado com sucesso por centenas de clientes em todo o Brasil.',
color: '#10B981',
},
{
icon: '🔍',
titulo: 'Garantia de Análise Transparente',
descricao: 'Todas as oportunidades de grupos são analisadas por especialistas, com critérios claros e informações verificadas antes de qualquer decisão.',
color: '#6366F1',
},
];

export default function GuaranteeSection() {
const ref = useRef(null);
const [visible, setVisible] = useState(false);
useEffect(() => {
const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
if (ref.current) obs.observe(ref.current);
return () => obs.disconnect();
}, []);

return (
<section ref={ref} className="section bg-noise" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>

{/* Glow */}
<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(255,90,31,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

<div className="container">

{/* Header */}
<div className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
<span className="badge" style={{ marginBottom: '1rem' }}>🔐 SUA SEGURANÇA</span>
<h2 className="text-h2" style={{ marginBottom: '1rem' }}>
Sua Decisão com{' '}
<span className="gradient-text">Segurança</span>
</h2>
<p className="text-lead" style={{ maxWidth: '38rem', margin: '0 auto' }}>
Eliminamos o seu risco com 4 garantias claras. Você só avança quando estiver seguro.
</p>
</div>

{/* Guarantee cards — grid 2x2 FIXO */}
<div
className={`reveal ${visible ? 'visible' : ''} delay-1`}
style={{
display: 'grid',
gridTemplateColumns: 'repeat(2, 1fr)',
gap: '1.5rem',
marginBottom: '3rem',
}}
>
{garantias.map((g, index) => (
<div
key={index}
style={{
background: 'var(--bg-card)',
border: '1px solid var(--border-color)',
borderRadius: 'var(--radius-lg)',
padding: '1.75rem',
display: 'flex',
gap: '1.25rem',
alignItems: 'flex-start',
borderLeft: `3px solid ${g.color}`,
transition: 'transform 0.2s ease',
}}
onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
>
<div style={{
width: '3.25rem',
height: '3.25rem',
borderRadius: '0.75rem',
background: g.color + '15',
border: `1px solid ${g.color}30`,
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
fontSize: '1.5rem',
flexShrink: 0,
}}>
{g.icon}
</div>

<div>
<h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
{g.titulo}
</h3>
<p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
{g.descricao}
</p>
</div>
</div>
))}
</div>

{/* Risk reversal */}
<div className={`reveal ${visible ? 'visible' : ''} delay-2`} style={{ textAlign: 'center' }}>
<div style={{
display: 'inline-flex',
alignItems: 'center',
gap: '1rem',
padding: '1.25rem 2rem',
background: 'rgba(16,185,129,0.06)',
border: '1px solid rgba(16,185,129,0.2)',
borderRadius: 'var(--radius-lg)',
}}>
<span style={{ fontSize: '1.5rem' }}>🤝</span>
<p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, textAlign: 'left' }}>
Insatisfeito com a consultoria em 30 dias?{' '}
                <strong style={{ color: '#10B981' }}>Devolvemos 100% do valor da consultoria</strong>.{' '}
                O resultado no consórcio envolve variáveis de mercado fora do nosso controle — mas a qualidade da nossa consultoria, essa garantimos.
</p>
</div>
</div>

</div>
</section>
);
}
