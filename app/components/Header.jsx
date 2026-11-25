import Image from 'next/image';

export default function Header() {
  return (
    <header className="topo">
      <div className="wrap row header-row" style={{ alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 14, paddingBottom: 14 }}>
        <a href="/#conteudo" className="marca" aria-label="João Dias, Consórcio Inteligente, Gaia Group">
          <Image src="/logo-gaia-branco.png" alt="" width={49} height={39} className="marca-gaia" priority />
          <span className="marca-divisor" aria-hidden="true" />
          <span className="marca-texto">
            <span className="marca-nome">João Dias</span>
            <span className="marca-tag">Consórcio Inteligente</span>
          </span>
        </a>
        <nav aria-label="Principal" className="nav">
          <a href="/#metodo">Método SPA®</a>
          <a href="/#cred">Gaia e HS</a>
          <a href="/#conta">Faça a conta</a>
          <a href="/#cartas">Cartas</a>
          <a href="/#duvidas">Dúvidas</a>
        </nav>
        <div className="row" style={{ alignItems: 'center', gap: 20 }}>
          <a href="/#diagnostico" className="btn btn-pri btn-sm" style={{ whiteSpace: 'nowrap', padding: '0 16px' }}><span>Agendar</span><span className="so-desk"> diagnóstico</span></a>
        </div>
      </div>
    </header>
  );
}
