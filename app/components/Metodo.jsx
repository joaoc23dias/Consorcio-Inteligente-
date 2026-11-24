import { PILARES } from '../content';

export default function Metodo() {
  return (
    <section id="metodo" className="sec" aria-labelledby="metodo-titulo">
      <div className="wrap row" style={{ gap: 72, alignItems: 'center' }}>
        <div className="col" style={{ flex: '1 1 380px' }}>
          {/* Trocar pela foto do ensaio: João no escritório, luz natural */}
          <div className="ph" style={{ width: '100%', maxWidth: 440, aspectRatio: '4 / 5', background: 'var(--bg-alt)' }}>
            [Foto do João no escritório ou atendendo um cliente, luz natural]
          </div>
        </div>
        <div className="col" style={{ flex: '1 1 500px' }}>
          <p className="eyebrow">Quem é João Dias</p>
          <h2 id="metodo-titulo" className="h2">Segurança, Patrimônio e Alavancagem.</h2>
          <p className="lead">
            Sou de São José do Rio Pardo e criei o Método SPA® para transformar o consórcio em ferramenta de crescimento patrimonial. Atendo pela <span translate="no">Gaia Group</span>, que tem a <span translate="no">HS Consórcios</span> como administradora exclusiva, e todo consultor que trabalha comigo é certificado no método.
          </p>
          <dl style={{ margin: '44px 0 0', borderTop: '1px solid var(--rule)' }}>
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
