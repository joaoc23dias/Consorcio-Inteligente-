'use client';

const benefits = [
  {
    icon: '💰',
    title: 'ECONOMIZE ATÉ R$ 680 MIL',
    description: 'Sem juros compostos. Apenas taxa de administração 2-3%.',
    details: ['Juros zero cobrados', 'Taxa de admin apenas', 'Diferença é seu patrimônio'],
    metric: 'Economia real vs. banco',
  },
  {
    icon: '🎯',
    title: 'ESTRATÉGIA PARA ANTECIPAR A CONTEMPLAÇÃO',
    description: 'O mercado costuma levar 36-60 meses. Com estratégia de lance, o objetivo é antecipar esse prazo.',
    details: ['Análise dos melhores grupos', 'Plano de lances estruturado', 'Monitoramento contínuo'],
    metric: 'Lance estratégico',
  },
  {
    icon: '🏘️',
    title: 'ESTRUTURE 2-3 IMÓVEIS',
    description: '1 cota = 1 carta de crédito. Com 2-3 cotas, você estrutura a aquisição de múltiplos imóveis ao longo do plano.',
    details: ['Múltiplas cotas simultâneas', 'Cartas de crédito indexadas', 'Patrimônio escalável'],
    metric: 'Patrimônio múltiplo',
  },
  {
    icon: '📈',
    title: 'RENDA PASSIVA MENSAL',
    description: '1º imóvel: moradia. 2º+: gera aluguel todo mês.',
    details: ['Aquisição sequencial planejada', 'Estratégia para gerar renda', 'Cash flow imobiliário'],
    metric: 'Renda recorrente',
  },
  {
    icon: '🔓',
    title: 'FLUXO 100% LIBERADO',
    description: 'Sem hipoteca. Após contemplação, fluxo é seu.',
    details: ['Sem hipoteca', 'Flexibilidade total', 'Capital para reinvestir'],
    metric: 'Fluxo de caixa livre',
  },
  {
    icon: '🛡️',
    title: 'MÉTODO + SUPORTE VIP',
    description: 'Seleção + estruturação + suporte especializado.',
    details: ['Diagnóstico completo', 'TOP 3 grupos recomendados', 'WhatsApp VIP 30 dias'],
    metric: 'Acompanhamento total',
  },
];

export default function BenefitsSection() {
  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)' }} className="section_padding">
      <div className="layout_container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="accent_tag" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            Por Que o Método SPA
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginTop: '1rem',
            lineHeight: 1.2,
          }}>
            6 Razões Por Que 200+ Profissionais{' '}
            <span style={{ color: 'var(--accent-orange)' }}>Escolhem o Método SPA</span>
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} className="card_base" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.75rem', lineHeight: 1, flexShrink: 0 }}>{benefit.icon}</span>
                <h3 style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  lineHeight: 1.3,
                }}>
                  {benefit.title}
                </h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {benefit.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {benefit.details.map((detail, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-orange)', fontSize: '0.85rem', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{detail}</span>
                  </li>
                ))}
              </ul>
              <div style={{
                marginTop: 'auto',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-color)',
              }}>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--accent-orange)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}>
                  ◆ {benefit.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
