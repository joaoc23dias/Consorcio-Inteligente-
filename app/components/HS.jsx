import { ESCRITORIOS } from '../content';

export default function HS() {
  return (
    <section id="escritorios" className="sec" aria-labelledby="hs-titulo" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2 id="hs-titulo" className="h3" style={{ fontSize: 30, margin: 0 }}>Atendimento presencial em três cidades.</h2>
        <ul style={{ listStyle: 'none', margin: '28px 0 0', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', borderTop: '1px solid var(--rule-strong)' }}>
          {ESCRITORIOS.map((e) => (
            <li key={e.cidade} style={{ padding: '28px 28px 0 0' }}>
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
