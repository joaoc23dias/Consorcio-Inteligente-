const garantias = [
  { icon: '🛡️', titulo: 'Garantia de Satisfação (30 dias)', descricao: 'Se em 30 dias você achar que o método não é para você, devolvemos 100% do valor da consultoria. Sem perguntas, sem burocracia.' },
  { icon: '🎓', titulo: 'Garantia de Suporte Especializado', descricao: 'Acompanhamento do nosso time de especialistas durante todo o seu período de participação no consórcio, sem custo extra.' },
  { icon: '✅', titulo: 'Garantia de Método Comprovado', descricao: 'Você tem acesso ao mesmo Método SPA estruturado que já foi aplicado com sucesso por centenas de clientes em todo o Brasil.' },
  { icon: '🔍', titulo: 'Garantia de Análise Transparente', descricao: 'Todas as oportunidades de grupos são analisadas por especialistas, com critérios claros e informações verificadas antes de qualquer decisão.' },
];

export default function GuaranteeSection() {
  return (
    <section style={{ backgroundColor: 'var(--bg-primary)' }} className="section_padding">
      <div className="layout_container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="accent_tag" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Sua Segurança</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '1rem' }}>
            Sua Decisão com Segurança
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '0.75rem', maxWidth: '520px', margin: '0.75rem auto 0' }}>
            Reduzimos o seu risco com garantias claras
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {garantias.map((g, index) => (
            <div key={index} className="card_base" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '0.5rem', backgroundColor: 'var(--accent-orange-muted)', border: '1px solid rgba(255,90,31,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                {g.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{g.titulo}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{g.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
