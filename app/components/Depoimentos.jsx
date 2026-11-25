import { DEPOIMENTOS } from '../content';

export default function Depoimentos() {
  const reais = DEPOIMENTOS.filter((d) => d.video && !d.nome.startsWith('['));
  if (!reais.length) return null;
  const unico = reais.length === 1;
  return (
    <section className="sec" aria-labelledby="dep-titulo">
      <div className="wrap">
        <h2 id="dep-titulo" className="h2">Quem já conquistou conta como foi.</h2>
        <div className={unico ? 'dep-unico' : 'dep-grade'}>
          {reais.map((d) => (
            <figure key={d.video} className="dep-item">
              <video src={d.video} poster={d.poster} controls playsInline preload="none"
                aria-label={`Depoimento em vídeo: ${d.detalhe}`} className="dep-video" />
              <figcaption className="dep-texto">
                {d.citacao && <blockquote className="dep-citacao">“{d.citacao}”</blockquote>}
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{d.nome}</div>
                <p className="cp" style={{ marginTop: 4, fontSize: 14 }}>{d.detalhe}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
