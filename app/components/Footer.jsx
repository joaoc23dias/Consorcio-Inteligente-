import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ padding: '56px 0', background: 'var(--bg)' }}>
      <div className="wrap row" style={{ gap: 28, alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="row" style={{ alignItems: 'center', gap: 22 }}>
          <Image src="/logo-gaia-vermelho.png" alt="Gaia Group" width={61} height={48} />
          <span className="ph" style={{ padding: '6px 10px' }}>LOGO HS</span>
        </div>
        <p style={{ fontSize: 12, color: 'var(--ink-muted)', margin: 0, maxWidth: 640, lineHeight: 1.7 }}>
          João Dias atua pela Gaia Group, que tem a HS Consórcios (Grupo Herval) como administradora exclusiva, autorizada pelo Banco Central. Consórcio não é investimento financeiro; a contemplação depende de sorteio ou lance. © {new Date().getFullYear()} João Dias · Consórcio Inteligente.
        </p>
      </div>
    </footer>
  );
}
