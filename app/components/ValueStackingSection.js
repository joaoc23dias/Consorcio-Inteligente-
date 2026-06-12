const stackItems = [
  { icon: '💰', titulo: 'ECONOMIA EM JUROS', descricao: 'Você não paga juros com consórcio', valor: 'R$ 680.000', nota: 'Projeção ilustrativa vs. financiamento bancário médio' },
  { icon: '📈', titulo: 'RENDA PASSIVA', descricao: 'Imóvel #2+ gerando aluguel', valor: 'R$ 192.000', nota: 'Estimativa de 16 anos de aluguel' },
  { icon: '🏘️', titulo: 'PATRIMÔNIO', descricao: '2-3 imóveis vs 1 tradicional', valor: '+R$ 500.000+', nota: 'Potencial de valorização adicional' },
  { icon: '🔓', titulo: 'FLEXIBILIDADE', descricao: 'Fluxo liberado para investimentos', valor: 'ILIMITADA', nota: 'Sem hipoteca, sem restrições' },
];

export default function ValueStackingSection() {
  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)' }} className="section_padding">
      <div className="layout_container" style={{ maxWidth: '860px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="accent_tag" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Projeção de Cenário</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '1rem' }}>
            Projeção de Cenário com o Método SPA
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '600px', margin: '0.75rem auto 0', fontStyle: 'italic' }}>
            Veja uma projeção de cenário comparando o Método SPA com continuar no financiamento.
            Valores ilustrativos — podem variar conforme perfil e condições de mercado.
          </p>
        </div>
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '0.75rem', overflow: 'hidden', marginBottom: '2.5rem' }}>
          {stackItems.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', padding: '1.5rem', borderBottom: index < stackItems.length - 1 ? '1px solid var(--border-color)' : 'none', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: '1', minWidth: '200px' }}>
                <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', letterSpacing: '0.04em' }}>{item.titulo}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{item.descricao}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-orange)', lineHeight: 1 }}>{item.valor}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem', maxWidth: '200px' }}>*{item.nota}</div>
              </div>
            </div>
          ))}
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Potencial Total Projetado</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-orange)' }}>+R$ 1.3M+</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '0.75rem', padding: '1.5rem' }}>
            <h4 style={{ fontWeight: 700, fontSize: '1rem', color: '#FCA5A5', marginBottom: '1rem' }}>❌ COM BANCO</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['📦 1 imóvel apenas', '💸 R$ 680k perdido em juros', '🚫 Sem renda passiva', '🔒 Fluxo preso'].map((i, idx) => (
                <li key={idx} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{i}</li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '0.75rem', padding: '1.5rem' }}>
            <h4 style={{ fontWeight: 700, fontSize: '1rem', color: '#86EFAC', marginBottom: '1rem' }}>✅ COM MÉTODO SPA</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['🏠 2-3 imóveis', '💰 R$ 680k economizado', '💚 +R$ 2-5k/mês renda', '🚀 100% fluxo liberado'].map((i, idx) => (
                <li key={idx} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.5 }}>
          *Projeção de cenário ilustrativo para fins comparativos. Valores estimados com base em médias de mercado.
          Resultados reais podem variar. O consórcio não é um investimento.
        </p>
      </div>
    </section>
  );
}
