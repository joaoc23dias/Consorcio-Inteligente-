export default function Header() {
  return (
    <header className="topo">
      <div className="wrap row header-row" style={{ alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 14, paddingBottom: 14 }}>
        <a href="/#conteudo" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <span className="brand-name" style={{ fontFamily: 'var(--brand)', fontSize: 19, fontWeight: 600, letterSpacing: '.01em', color: '#F6F2E9', lineHeight: 1.1 }}>João Dias</span>
          <span className="brand-tag" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold-light)', marginTop: 5 }}>Consórcio Inteligente</span>
        </a>
        <nav aria-label="Principal" className="nav">
          <a href="/#metodo">Método SPA®</a>
          <a href="/#cred">Gaia e HS</a>
          <a href="/#conta">Faça a conta</a>
          <a href="/#cartas">Cartas</a>
          <a href="/#duvidas">Dúvidas</a>
        </nav>
        <div className="row" style={{ alignItems: 'center', gap: 20 }}>
          <a href="/#diagnostico" className="btn btn-pri btn-sm" style={{ whiteSpace: 'nowrap', padding: '0 16px' }}>Agendar diagnóstico</a>
        </div>
      </div>
    </header>
  );
}
