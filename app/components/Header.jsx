'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PAGINAS, ANCORAS_ANTIGAS } from './Paginas';

export default function Header() {
  const rota = usePathname();
  const inicio = rota === '/';
  const [aberto, setAberto] = useState(false);
  const diag = inicio ? '#diagnostico' : '/#estrategia';

  // Quem chega por um link antigo (/#conta, /#cartas) vai para a página nova.
  useEffect(() => {
    if (!inicio) return;
    const destino = ANCORAS_ANTIGAS[window.location.hash];
    if (destino) window.location.replace(destino);
  }, [inicio]);

  useEffect(() => { setAberto(false); }, [rota]);

  useEffect(() => {
    if (!aberto) return;
    document.documentElement.classList.add('menu-aberto');
    const esc = (e) => { if (e.key === 'Escape') setAberto(false); };
    window.addEventListener('keydown', esc);
    return () => {
      document.documentElement.classList.remove('menu-aberto');
      window.removeEventListener('keydown', esc);
    };
  }, [aberto]);

  const atual = (href) => (href === rota ? 'page' : undefined);

  return (
    <>
    <header className="topo">
      <div className="wrap row header-row" style={{ alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 14, paddingBottom: 14 }}>
        <a href="/" className="marca" aria-label="João Dias, Consórcio Inteligente, Gaia Group. Página inicial">
          <Image src="/logo-gaia-branco.png" alt="" width={70} height={55} className="marca-gaia" priority />
          <span className="marca-texto">
            <span className="marca-nome">João Dias</span>
            <span className="marca-tag">Consórcio Inteligente</span>
          </span>
        </a>
        <nav aria-label="Principal" className="nav">
          {PAGINAS.map((p) => <a key={p.href} href={p.href} aria-current={atual(p.href)}>{p.t}</a>)}
        </nav>
        <div className="row" style={{ alignItems: 'center', gap: 12 }}>
          <a href={diag} className="btn btn-pri btn-sm" style={{ whiteSpace: 'nowrap', padding: '0 16px' }}><span>Agendar</span><span className="so-desk">diagnóstico</span></a>
          <button type="button" className="menu-botao" aria-expanded={aberto} aria-controls="menu-movel" aria-label={aberto ? 'Fechar menu' : 'Abrir menu'} onClick={() => setAberto((v) => !v)}>
            <span /><span />
          </button>
        </div>
      </div>
    </header>
      <nav id="menu-movel" className={`menu-movel${aberto ? ' on' : ''}`} aria-label="Menu" hidden={!aberto}>
        <ul>
          {PAGINAS.map((p) => (
            <li key={p.href}><a href={p.href} aria-current={atual(p.href)} onClick={() => setAberto(false)}>{p.t}</a></li>
          ))}
          <li><a href="/duvidas" aria-current={atual('/duvidas')} onClick={() => setAberto(false)}>Dúvidas</a></li>
        </ul>
        <a href={diag} className="btn btn-pri" onClick={() => setAberto(false)}>Agendar meu diagnóstico patrimonial</a>
      </nav>
    </>
  );
}
