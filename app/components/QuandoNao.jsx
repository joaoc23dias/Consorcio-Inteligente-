import { QUANDO_NAO } from '../content';

export default function QuandoNao() {
  return (
    <section className="sec alt" aria-labelledby="nao-titulo">
      <div className="wrap row" style={{ gap: 72 }}>
        <div className="col" style={{ flex: '1 1 380px' }}>
          <h2 id="nao-titulo" className="h2">Aqui ninguém sai com um consórcio que não faz sentido.</h2>
          <p className="lead">
            O Método SPA® começa pela segurança. Se o consórcio estratégico não for o caminho certo para o seu objetivo, você ouve isso de mim na primeira conversa.
          </p>
          <p style={{ fontWeight: 600, fontSize: 22, letterSpacing: '-.02em', color: 'var(--ink)', margin: '40px 0 0', paddingLeft: 18, borderLeft: '2px solid var(--gold-light)' }}>
            O certo antes do rápido.
          </p>
        </div>
        <ul className="col" style={{ flex: '1 1 480px', listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--rule)' }}>
          {QUANDO_NAO.map((x) => (
            <li key={x.t} style={{ padding: '24px 0', borderBottom: '1px solid var(--rule)' }}>
              <div style={{ fontWeight: 600, fontSize: 20, letterSpacing: '-.015em', marginBottom: 6 }}>{x.t}</div>
              <p className="cp">{x.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
