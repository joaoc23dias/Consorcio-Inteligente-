import Image from 'next/image';
import { GAIA, BC_URL } from '../content';

export default function Footer() {
  return (
    <footer style={{ padding: '56px 0 40px', background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}>
      <div className="wrap row" style={{ gap: 28, alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div className="row" style={{ alignItems: 'center', gap: 22 }}>
          <Image src="/logo-gaia-vermelho.png" alt="Gaia Group Investimentos & Consórcios" width={78} height={62} />
          <Image src="/logo-hs.png" alt="HS Consórcios, uma empresa do Grupo Herval" width={135} height={36} />
        </div>
        <div style={{ maxWidth: 640, fontSize: 12, color: 'var(--ink-muted)', lineHeight: 1.7 }}>
          <p style={{ margin: 0 }}>
            João Dias atua pela Gaia Group, que tem a HS Consórcios (Grupo Herval) como administradora exclusiva, autorizada pelo Banco Central. Consórcio não é investimento financeiro; a contemplação depende de sorteio ou lance.
          </p>
          {!GAIA.cnpj.startsWith('[') && (
            <p style={{ margin: '10px 0 0' }}>{GAIA.razaoSocial} · CNPJ {GAIA.cnpj}</p>
          )}
          <p style={{ margin: '10px 0 0' }}>
            <a href={`mailto:${GAIA.email}`}>{GAIA.email}</a> · {GAIA.horario}
          </p>
          <p style={{ margin: '10px 0 0' }}>
            <a href={BC_URL} target="_blank" rel="noopener noreferrer">Consulte a HS Consórcios no Banco Central</a>
            {' · '}
            <a href="/privacidade">Política de Privacidade</a>
          </p>
          <p style={{ margin: '10px 0 0' }}>
            Documentos oficiais da HS:{' '}
            <a href="https://hsconsorcios.com.br/entenda-mais#regulamento" target="_blank" rel="noopener noreferrer">Regulamento Geral</a>
            {' · '}
            <a href="https://hsconsorcios.com.br/wp-content/uploads/2025/01/Regulamento-Geral.-Requisitos-para-liberacao-do-credito.pdf" target="_blank" rel="noopener noreferrer">Requisitos para liberação do crédito</a>
          </p>
          <p className="nota" style={{ margin: '18px 0 0', padding: '2px 0 2px 14px', color: 'var(--ink-soft)' }}>
            <strong style={{ fontWeight: 600 }}>Segurança:</strong> o único WhatsApp oficial do João Dias é (19) 99818-7567. Nenhum pagamento é feito fora do contrato com a HS Consórcios. Desconfie de pedidos de depósito ou Pix em nome de terceiros.
          </p>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--rule)', textAlign: 'center' }}>
        <p className="marca-rodape" style={{ margin: 0 }}>
          <span className="marca-nome">João Dias</span>
          <span className="marca-tag">Consórcio Inteligente</span>
        </p>
        <p style={{ fontSize: 12, color: 'var(--ink-muted)', margin: '6px 0 0' }}>© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
