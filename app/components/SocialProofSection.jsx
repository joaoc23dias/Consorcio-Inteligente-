'use client';

const stats = [
  { number: '500+', label: 'Clientes que Transformaram Vidas', subtext: 'Metodologia comprovada de sucesso' },
  { number: '1.200+', label: 'Imóveis Adquiridos', subtext: 'Em todo o Brasil' },
  { number: 'R$ 2.1B', label: 'Economizados em Juros', subtext: 'Versus financiamento tradicional' },
];

const testimonials = [
  { initials: 'CS', name: 'Carlos Silva', title: 'Empresário | São Paulo', result: '3 imóveis em 28 meses', income: 'R$ 12.500/mês de renda passiva' },
  { initials: 'MC', name: 'Marina Costa', title: 'Consultora | Rio de Janeiro', result: '2 imóveis em 20 meses', income: 'R$ 8.000/mês de renda passiva' },
  { initials: 'JP', name: 'Dr. João Pereira', title: 'Médico | Minas Gerais', result: '4 imóveis em 40 meses', income: 'R$ 18.500/mês de renda passiva' },
];

export default function SocialProofSection() {
  return (
    <section style={{ backgroundColor: 'var(--bg-primary)' }} className="section_padding">
      <div className="layout_container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="accent_tag" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            Resultados Reais
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '1rem' }}>
            Resultados Comprovados que Falam por Si
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '0.75rem', maxWidth: '600px', margin: '0.75rem auto 0' }}>
            Centenas de pessoas já estruturaram a compra dos seus imóveis com o Método SPA.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 0,
          border: '1px solid var(--border-color)',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          marginBottom: '3.5rem',
          backgroundColor: 'var(--bg-card)',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              padding: '1.75rem 1.5rem',
              borderRight: i < stats.length - 1 ? '1px solid var(--border-color)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>{stat.number}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginTop: '0.4rem' }}>{stat.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{stat.subtext}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {testimonials.map((t, index) => (
            <div key={index} className="card_base" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.2rem' }}>
                {[1,2,3,4,5].map(s => (
                  <span key={s} style={{ color: 'var(--accent-orange)', fontSize: '0.9rem' }}>★</span>
                ))}
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.3rem 0.75rem',
                backgroundColor: 'var(--accent-orange-muted)',
                border: '1px solid rgba(255,90,31,0.25)',
                borderRadius: '9999px',
                alignSelf: 'flex-start',
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-orange)' }}>{t.result}</span>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{t.income}</div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-color)',
                marginTop: 'auto',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  backgroundColor: 'var(--accent-orange)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.85rem', color: '#fff', flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic', maxWidth: '680px', margin: '0 auto', lineHeight: 1.5 }}>
          *Depoimentos são relatos reais de clientes. Resultados individuais podem variar conforme perfil, grupo de consórcio e estratégia aplicada. Não representam promessa ou garantia de contemplação.
        </p>
      </div>
    </section>
  );
}
