import Image from 'next/image';
import { GAIA, BC_URL } from '../content';

export default function Footer() {
  return (
    <footer style={{ padding: '56px 0 40px', background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}>
      <div className="wrap row" style={{ gap: 28, alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div className="row" style={{ alignItems: 'center', gap: 22 }}>
          <Image src="/logo-gaia-vermelho.png" alt="Gaia Group Investimentos & Consórcios" width={71} height={56} />
          <Image src="/logo-hs.png" alt="HS Consórcios, uma empresa do Grupo Herval" width={135} height={36} />
        </div>
        <div style={{ maxWidth: 640, fontSize: 12, color: 'var(--ink-muted)', lineHeight: 1.7 }}>
          <p style={{ margin: 0 }}>
            João Dias atua pela Gaia Group, que tem a HS Consórcios (Grupo Herval) como administradora exclusiva, autorizada pelo Banco Central. Consórcio não é investimento financeiro; a contemplação depende de sorteio ou lance.
          </p>
          <p style={{ margin: '10px 0 0' }}>
            {GAIA.razaoSocial} · CNPJ {GAIA.cnpj}
          </p>
          <p style={{ margin: '10px 0 0' }}>
            <a href={BC_URL} target="_blank" rel="noopener noreferrer">Consulte a HS Consórcios no Banco Central</a>
            {' · '}
            <a href="/privacidade">Política de Privacidade</a>
          </p>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--rule)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 14, letterSpacing: 'normal', color: '#7A847E', margin: 0 }}>
          João Dias | Consórcio Inteligente
        </p>
        <p style={{ fontSize: 11, color: 'var(--ink-muted)', margin: '6px 0 0' }}>© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
