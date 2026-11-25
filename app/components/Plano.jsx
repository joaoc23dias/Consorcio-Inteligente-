import { PASSOS } from '../content';

export default function Plano() {
  return (
    <section className="sec alt" aria-labelledby="plano-titulo">
      <div className="wrap">
        <div className="row" style={{ gap: 48, alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div className="col" style={{ flex: '1 1 520px' }}>
            <h2 id="plano-titulo" className="h2" style={{ margin: 0 }}>Primeiro o plano. Depois o produto.</h2>
          </div>
          <p className="cp col" style={{ flex: '0 1 380px' }}>
            “Vale a pena dar um lance agora?” No diagnóstico você vê o histórico do grupo, os lances recentes e o que isso significa para o seu prazo, antes de decidir.
          </p>
        </div>
        <ol style={{ listStyle: 'none', margin: '56px 0 0', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', borderTop: '1px solid var(--rule-strong)' }}>
          {PASSOS.map((p) => (
            <li key={p.n} style={{ padding: '32px 28px 8px 0' }}>
              <div className="num" style={{ fontSize: 12, letterSpacing: '.2em', color: 'var(--gold)', marginBottom: 18 }}>{p.n}</div>
              <h3 className="h3">{p.t}</h3>
              <p className="cp">{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
