import Image from 'next/image';

export default function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(250,247,241,.95)', backdropFilter: 'saturate(1.2) blur(6px)', borderBottom: '1px solid var(--rule)' }}>
      <div className="wrap row header-row" style={{ alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 14, paddingBottom: 14 }}>
        <a href="#conteudo" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <span className="brand-name" style={{ fontFamily: 'var(--sans)', fontSize: 19, fontWeight: 600, letterSpacing: '.01em', color: 'var(--ink)', lineHeight: 1.1 }}>João Dias</span>
          <span className="brand-tag" style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: 5 }}>Consórcio Inteligente</span>
        </a>
        <nav aria-label="Principal" className="nav">
          <a href="#metodo">Método SPA®</a>
          <a href="#hs" translate="no">HS Consórcios</a>
          <a href="#conta">Faça a conta</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <div className="row" style={{ alignItems: 'center', gap: 20 }}>
          <Image src="/logo-gaia-vermelho.png" alt="Gaia Group" width={56} height={44} className="hide-mobile" priority />
          <a href="#diagnostico" className="btn btn-pri btn-sm" style={{ whiteSpace: 'nowrap', padding: '0 16px' }}>Agendar diagnóstico</a>
        </div>
      </div>
    </header>
  );
}
