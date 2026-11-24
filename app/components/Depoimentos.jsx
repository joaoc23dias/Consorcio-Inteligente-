import { DEPOIMENTOS } from '../content';

export default function Depoimentos() {
  return (
    <section className="sec" aria-labelledby="dep-titulo">
      <div className="wrap">
        <p className="eyebrow">Depoimentos</p>
        <h2 id="dep-titulo" className="h2">Quem já conquistou conta como foi.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginTop: 48 }}>
          {DEPOIMENTOS.map((d, i) => (
            <figure key={i} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Trocar por <video controls preload="none" poster="..."> com legenda (track) */}
              <div className="ph" style={{ aspectRatio: '4 / 5', background: 'var(--bg-alt)' }}>[vídeo do cliente, com legenda]</div>
              <figcaption>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{d.nome}</div>
                <p className="cp small" style={{ marginTop: 4 }}>{d.detalhe}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
