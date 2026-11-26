import { FAQ } from '../content';

export default function Duvidas() {
  return (
    <section id="duvidas" className="sec" aria-labelledby="duvidas-titulo">
      <div className="wrap row" style={{ gap: 72 }}>
        <div className="col" style={{ flex: '1 1 320px' }}>
          <h2 id="duvidas-titulo" className="h2">Pergunte a qualquer hora. Decida com quem entende.</h2>
          <p className="lead" style={{ fontSize: 16 }}>
            Mande sua dúvida pelo WhatsApp. Quando chegar a hora de decidir, eu ou um consultor do meu time conduzimos a conversa com você.
          </p>
          <div className="nota nota-verde" style={{ marginTop: 40 }}>
            <p className="eyebrow" style={{ marginBottom: 8 }}>Parceria</p>
            <p style={{ margin: '0 0 8px', fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--green)' }}>Imobiliária ou construtora?</p>
            <p className="cp" style={{ marginBottom: 18 }}>
              Seu cliente não aprovou o crédito? Ele não precisa ir embora. O Programa Parceiro Estratégico devolve a compra para você.
            </p>
            <a href="/#diagnostico" className="btn btn-pri btn-sm">Quero ser parceiro</a>
          </div>
        </div>
        <div className="col" style={{ flex: '1 1 520px', borderTop: '1px solid var(--rule)' }}>
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              {f.lista ? (
                <ul className="cp" style={{ margin: '0 0 24px', paddingLeft: 20 }}>
                  {f.lista.map((i) => <li key={i} style={{ marginBottom: 8 }}>{i}</li>)}
                </ul>
              ) : <p className="cp">{f.a}</p>}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
