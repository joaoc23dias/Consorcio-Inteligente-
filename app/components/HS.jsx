import { ESCRITORIOS, NUMEROS_HS } from '../content';

export default function HS() {
  return (
    <section id="hs" className="sec alt" aria-labelledby="hs-titulo">
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
          <div className="col pad-box" style={{ flex: '1 1 360px', background: 'var(--surface)', padding: 36 }}>
            <div className="ph" style={{ height: 80 }}>LOGO HS CONSÓRCIOS · GRUPO HERVAL</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, marginTop: 20 }}>
              {NUMEROS_HS.map((n) => (
                <div key={n} className="ph num" style={{ padding: '14px 8px' }}>{n}</div>
              ))}
            </div>
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
          Diagnóstico presencial em qualquer escritório ou por videochamada, se você estiver em outra cidade.
        </p>
      </div>
    </section>
  );
}
