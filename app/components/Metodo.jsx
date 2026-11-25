import { PILARES } from '../content';

export default function Metodo() {
  return (
    <section id="metodo" className="sec" aria-labelledby="metodo-titulo">
      <div className="wrap row" style={{ gap: 72, alignItems: 'flex-start' }}>
        <div className="col" style={{ flex: '1 1 460px' }}>
          <h2 id="metodo-titulo" className="h2">Método SPA®: segurança, patrimônio e alavancagem.</h2>
          <p className="lead">
            Sou de São José do Rio Pardo e há uma década trabalho nos mercados financeiro e imobiliário. Atendo pela <span translate="no">Gaia Group</span>, que tem a <span translate="no">HS Consórcios</span> como administradora exclusiva, com o Método SPA® da Gaia Group, que transforma o consórcio em ferramenta de crescimento patrimonial. Todo consultor que atende comigo segue o mesmo método.
          </p>
        </div>
        <div className="col" style={{ flex: '1 1 420px' }}>
          <dl style={{ margin: 0, borderTop: '1px solid var(--rule)' }}>
            {PILARES.map((p) => (
              <div key={p.t} className="row" style={{ gap: '8px 24px', padding: '18px 0', borderBottom: '1px solid var(--rule)' }}>
                <dt className="eyebrow" style={{ width: 150, margin: 0, paddingTop: 3 }}>{p.t}</dt>
                <dd className="cp" style={{ margin: 0, flex: '1 1 240px' }}>{p.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
