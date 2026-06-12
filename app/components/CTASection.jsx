'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefitsList = [
  'Análise gratuita do seu perfil financeiro',
  'Seleção dos TOP 3 grupos de consórcio',
  'Plano de lances estruturado',
  'Suporte via WhatsApp por 30 dias',
];

export default function CTASection() {
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = encodeURIComponent('Olá! Meu nome é ' + formData.nome + ', meu email é ' + formData.email + '. ' + (formData.mensagem || 'Quero conhecer o Método SPA.'));
    window.open('https://wa.me/5511999999999?text=' + msg, '_blank');
    setEnviado(true);
  }

  return (
    <section id="como-funciona" style={{ backgroundColor: 'var(--bg-secondary)' }} className="section_padding">
      <div className="layout_container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <span className="accent_tag" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Consultoria Gratuita</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Pronto para Multiplicar Seus Imóveis?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Comece agora e tenha acesso ao Método SPA completo — o mesmo usado por +200 empresários para construir patrimônio imobiliário sem banco e sem juros.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {benefitsList.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-orange)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '0.75rem', padding: '2rem' }}>
            {enviado ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Mensagem Enviada!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Nossa equipe entrará em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Nome completo *</label>
                  <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome" required className="input_field" />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>E-mail *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required className="input_field" />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Telefone (WhatsApp)</label>
                  <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(11) 99999-9999" className="input_field" />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Mensagem (opcional)</label>
                  <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Conte um pouco sobre seu objetivo..." rows={3} className="input_field" style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn_primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', marginTop: '0.25rem' }}>
                  Enviar Consulta
                  <ArrowRight size={20} />
                </button>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
                  🔒 Seus dados são tratados com total privacidade. Sem spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
