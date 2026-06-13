'use client';

import { useState } from 'react';

export default function CTASection() {
const [sent, setSent] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
setSent(true);
};

return (
<section id="form" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>

<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '500px', background: 'radial-gradient(ellipse, rgba(255,90,31,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

<div className="container" style={{ position: 'relative', zIndex: 1 }}>
<div style={{ maxWidth: '68rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

<div>
<span style={{ display: 'inline-block', backgroundColor: 'rgba(255,90,31,0.12)', color: 'var(--accent-orange)', border: '1px solid rgba(255,90,31,0.3)', borderRadius: '999px', padding: '0.35rem 1rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
ANÁLISE ESTRATÉGICA — MÉTODO SPA®
</span>

<h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
Empresário, chega de{' '}
<span style={{ color: 'var(--accent-orange)' }}>pagar banco</span>{' '}
— descubra como o consórcio pode acelerar a construção do seu patrimônio
</h2>

<p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
Agende sua Sessão de Diagnóstico Estratégico. Em 30 minutos, nossos especialistas mapeiam
seu perfil, identificam os TOP 3 grupos de consórcio disponíveis e montam seu plano de lances
estratégicos personalizado.
</p>

<ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
{[
'Mapeamento do seu perfil financeiro e objetivo patrimonial',
'Seleção dos TOP 3 grupos de consórcio para o seu caso',
'Plano de lances estratégicos personalizado para o seu perfil',
'Suporte via WhatsApp por 30 dias após a sessão',
].map((item, i) => (
<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
<span style={{ color: 'var(--accent-orange)', fontWeight: 800, marginTop: '0.1rem', flexShrink: 0 }}>⊙</span>
{item}
</li>
))}
</ul>

<div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
{['+200 empresários atendidos', 'Estratégia de lance personalizada', 'R$ 680M economizados'].map((s, i) => (
<span key={i} style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '999px', padding: '0.3rem 0.85rem' }}>{s}</span>
))}
</div>
</div>

<div className="card-glass" style={{ padding: '2.5rem' }}>
{sent ? (
<div style={{ textAlign: 'center', padding: '2rem 0' }}>
<p style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</p>
<h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Recebemos sua solicitação!</h3>
<p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Um especialista entrará em contato em até 24h via WhatsApp.</p>
</div>
) : (
<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

<div style={{ textAlign: 'center', marginBottom: '0.25rem' }}>
<h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
Agende Sua Sessão de Diagnóstico
</h3>
<p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
30 minutos. Plano estratégico personalizado. Resultado real.
</p>
</div>

{[
{ label: 'Nome completo *', placeholder: 'Seu nome completo', type: 'text', required: true },
{ label: 'E-mail *', placeholder: 'seu@email.com', type: 'email', required: true },
{ label: 'Telefone (WhatsApp)', placeholder: '(11) 99999-9999', type: 'tel', required: false },
].map((field, i) => (
<div key={i}>
<label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>{field.label}</label>
<input
type={field.type}
placeholder={field.placeholder}
required={field.required}
style={{ width: '100%', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
onFocus={e => e.target.style.borderColor = 'var(--accent-orange)'}
onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
/>
</div>
))}

<div>
<label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Objetivo com o consórcio (opcional)</label>
<textarea
placeholder="Ex: Quero estruturar minha estratégia de consórcio para acelerar meu patrimônio..."
rows={3}
style={{ width: '100%', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
onFocus={e => e.target.style.borderColor = 'var(--accent-orange)'}
onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
/>
</div>

<button
type="submit"
className="btn-primary"
style={{ width: '100%', fontSize: '1rem', padding: '0.9rem' }}
>
Quero Meu Plano Estratégico →
</button>

<p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '-0.25rem' }}>
🔒 Seus dados são tratados com total privacidade.
</p>
</form>
)}
</div>

</div>
</div>
</section>
);
}
