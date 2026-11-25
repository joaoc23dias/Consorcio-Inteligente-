import { ESCRITORIOS } from '../content';

export default function HS() {
  return (
    <section id="hs" className="sec" aria-labelledby="hs-titulo">
      <div className="wrap">
        <div className="row" style={{ gap: 72, alignItems: 'center' }}>
          <div className="col" style={{ flex: '1 1 520px' }}>
            <h2 id="hs-titulo" className="h2">
              Planejamento João Dias. Administração <span translate="no">HS Consórcios</span>.
            </h2>
            <p className="lead">
              Todo plano estruturado aqui é administrado pela HS Consórcios, do Grupo Herval, administradora exclusiva da Gaia Group e autorizada pelo Banco Central. Você tem o planejamento e o acompanhamento do especialista e a solidez de uma administradora com grupos, assembleias e contemplações reguladas.
            </p>
          </div>
        </div>
        <ul style={{ listStyle: 'none', margin: '48px 0 0', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', borderTop: '1px solid var(--rule-strong)' }}>
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
