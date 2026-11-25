import Image from 'next/image';
import { ESCRITORIOS, NUMEROS_HS, NUMEROS_HS_FONTE } from '../content';

export default function HS() {
  return (
    <section id="hs" className="sec" aria-labelledby="hs-titulo">
      <div className="wrap">
        <div className="row" style={{ gap: 72, alignItems: 'center' }}>
          <div className="col" style={{ flex: '1 1 520px' }}>
            <p className="eyebrow">Quem administra o seu consórcio</p>
            <h2 id="hs-titulo" className="h2">
              Planejamento João Dias. Administração <span translate="no">HS Consórcios</span>.
            </h2>
            <p className="lead">
              Todo plano estruturado aqui é administrado pela HS Consórcios, do Grupo Herval, administradora exclusiva da Gaia Group e autorizada pelo Banco Central. Você tem o planejamento e o acompanhamento do especialista e a solidez de uma administradora com grupos, assembleias e contemplações reguladas.
            </p>
          </div>
          <div className="col pad-box" style={{ flex: '1 1 360px', background: 'var(--surface)', border: '1px solid var(--rule)', padding: 36 }}>
            <Image src="/logo-hs.png" alt="HS Consórcios, uma empresa do Grupo Herval" width={240} height={64} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, marginTop: 20 }}>
              {NUMEROS_HS.map((n) => (
                <div key={n.rotulo} style={{ borderTop: '1px solid var(--rule-strong)', paddingTop: 14 }}>
                  <span className="num" style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 2.2vw, 30px)', lineHeight: 1.1, color: 'var(--green)', whiteSpace: 'nowrap' }}>{n.valor}</span>
                  <span style={{ display: 'block', marginTop: 6, fontSize: 12, lineHeight: 1.4, color: 'var(--ink-soft)' }}>{n.rotulo}</span>
                </div>
              ))}
            </div>
            <p className="cp" style={{ fontSize: 11, margin: '16px 0 0' }}>{NUMEROS_HS_FONTE}</p>
          </div>
        </div>
        <ul style={{ listStyle: 'none', margin: '72px 0 0', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', borderTop: '1px solid var(--rule-strong)' }}>
          {ESCRITORIOS.map((e) => (
            <li key={e.cidade} style={{ padding: '28px 28px 0 0' }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Escritório</div>
              <div className="h3">{e.cidade}</div>
              <address className="cp" style={{ fontStyle: 'normal' }}>{e.endereco}</address>
            </li>
          ))}
        </ul>
        <p className="cp small" style={{ marginTop: 28 }}>
          Atendimento presencial em Ribeirão Preto, São José do Rio Pardo e Mococa, e em toda a região: Guaxupé, Monte Santo de Minas, Tambaú e Casa Branca. Em outras cidades, o diagnóstico é feito por videochamada.
        </p>
      </div>
    </section>
  );
}
