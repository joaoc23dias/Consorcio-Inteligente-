const sixItems = [
  { icon: '💰', title: 'Economize R$ 680 Mil em Juros', description: 'Enquanto financiamento custa 7-9% ao ano, consórcio custa apenas 2-3%. Para R$ 500k em 30 anos: você economiza R$ 680 mil.' },
  { icon: '🏠', title: 'Gere Renda Passiva de R$ 8.500/mês', description: 'Imóvel #1 = moradia (parcela zero). Imóvel #2 = R$ 4.000 por mês = R$ 8.500 em renda passiva antes mesmo de pagar todas as parcelas.' },
  { icon: '⚡', title: 'Contemple 3 Imóveis em 36 Meses', description: 'Média do mercado: 60+ meses. Nossos clientes: 14-36 meses. Você fica 24 meses à frente da concorrência.' },
  { icon: '🏦', title: 'Desbloqueie Fluxo de Caixa', description: 'Após contemplação: reimvesta mesma parcela para acelerar. Capital liberado para oportunidades futuras.' },
  { icon: '🔐', title: 'Diversifique Sem Comprometer Capital', description: 'Moradia + Aluguel + Negócio (portfólio real). Não prende 100% do fluxo em 1 único imóvel. Flexibilidade financeira completa.' },
  { icon: '🚀', title: 'Multiplique Patrimônio 3X Mais Rápido', description: 'Banco: Linear (1 imóvel a cada 5 anos). Consórcio: Exponencial (3 em 3 anos). Aceleração 300% vs método tradicional.' },
];

export default function SixBenefitsSection() {
  return (
    <section style={{ backgroundColor: 'var(--bg-primary)' }} className="section_padding">
      <div className="layout_container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="accent_tag" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Estratégias Comprovadas</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '1rem' }}>
            6 Maneiras de Explodir Seu Patrimônio em 36 Meses
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.75rem', maxWidth: '560px', margin: '0.75rem auto 0' }}>
            Cada estratégia é desenhada para encontrar e capturar oportunidades patrimoniais que você está perdendo.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {sixItems.map((item, index) => (
            <div key={index} className="card_base">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent-orange-muted)', border: '1px solid rgba(255,90,31,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-orange)', flexShrink: 0 }}>
                  {index + 1}
                </span>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
