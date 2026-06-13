'use client';

export default function HeroSection() {
  return (
    <section style={{ backgroundColor: 'var(--bg-primary)', padding: '6rem 1rem 4rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '52rem', margin: '0 auto' }}>

        {/* Badge */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'rgba(255,90,31,0.12)', color: 'var(--accent-orange)', border: '1px solid rgba(255,90,31,0.3)', borderRadius: '999px', padding: '0.4rem 1.1rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
            ✦ MÉTODO SPA® — PATENTEADO GAIA GROUP
          </span>
        </div>

        {/* Headline principal — consórcio explícito */}
        <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.75rem)', fontWeight: 900, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
          O Consórcio que{' '}
          <span style={{ color: 'var(--accent-orange)' }}>Constrói Patrimônio</span>{' '}
          — Sem Banco, Sem Juros, Sem Esperar 60 Meses
        </h1>

        {/* Sub-headline Hormozi: problema → mecanismo → resultado */}
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '42rem', margin: '0 auto 1rem', lineHeight: 1.6 }}>
          A maioria das pessoas entra num consórcio e espera. Os nossos clientes usam o{' '}
          <strong style={{ color: 'var(--text-primary)' }}>Método SPA®</strong> para identificar os TOP 5-7% dos grupos,
          estruturar lances estratégicos e contemplar em 14-36 meses — acumulando 2-3 imóveis
          enquanto outros ainda pagam banco.
        </p>

        {/* Prova social imediata */}
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Economizando até <strong style={{ color: 'var(--text-primary)' }}>R$ 680 Mil em Juros</strong> vs. financiamento bancário
        </p>

        {/* Strategy badge */}
        <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,90,31,0.08)', border: '1px solid rgba(255,90,31,0.2)', borderRadius: '0.5rem', padding: '0.6rem 1.2rem', marginBottom: '2.5rem' }}>
          <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em' }}>
            ⊙ ESTRATÉGIA FOCADA EM ANTECIPAR A CONTEMPLAÇÃO VIA LANCE
          </span>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
          <a href="#form" style={{ display: 'inline-block', backgroundColor: 'var(--accent-orange)', color: '#fff', fontWeight: 800, fontSize: '1rem', padding: '0.9rem 2.2rem', borderRadius: '0.5rem', textDecoration: 'none', letterSpacing: '0.02em' }}>
            Agendar Consultoria Gratuita
          </a>
          <a href="#como-funciona" style={{ display: 'inline-block', backgroundColor: 'transparent', color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.2rem', borderRadius: '0.5rem', textDecoration: 'none', border: '1px solid var(--border-color)' }}>
            Como Funciona
          </a>
        </div>

        {/* Social proof strip */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
          {[
            { num: '+200', label: 'Empresários Atendidos' },
            { num: 'R$ 680M', label: 'em Juros Economizados' },
            { num: 'TOP 5-7%', label: 'dos Grupos Selecionados' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)', fontWeight: 900, color: 'var(--text-primary)' }}>{s.num}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
