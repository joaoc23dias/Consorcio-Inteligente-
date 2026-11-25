import Image from 'next/image';
import GrupoVivo from './GrupoVivo';

// Conceito Consórcio Inteligente: o topo mostra um grupo de consórcio vivo.
// Cada ponto é uma cota; a cada assembleia algumas são contempladas.
// O ponto dourado é o plano do cliente, com estratégia definida no diagnóstico.

export default function Hero() {
  return (
    <section className="prancha" aria-labelledby="hero-titulo">
      <div className="wrap">
        <div className="prancha-corpo">
          <div className="prancha-texto">
            <h1 id="hero-titulo" className="prancha-h1">
              Consórcio com estratégia, do primeiro aporte à conquista.
            </h1>
            <p className="prancha-lead">
              Sou João Dias, especialista em planejamento patrimonial pela Gaia Group. Num grupo de consórcio, a maioria só espera a sua vez. Aqui o seu plano nasce com crédito, aporte, prazo e estratégia de contemplação definidos antes da assinatura, com o consórcio estratégico HS.
            </p>
            <div className="prancha-ctas">
              <a href="#diagnostico" className="btn btn-pri">Agendar meu diagnóstico patrimonial</a>
              <a href="#metodo" className="prancha-link">Conhecer o Método SPA®</a>
            </div>
          </div>

          <figure className="vivo">
            <GrupoVivo />
            <div className="vivo-foto">
              <Image
                src="/joao-dias-hero.jpg"
                alt="João Dias, especialista em planejamento patrimonial"
                fill
                priority
                sizes="(max-width: 960px) 60vw, 300px"
                style={{ objectFit: 'cover', objectPosition: 'center 24%' }}
              />
            </div>
            <figcaption className="vivo-legenda">
              <span><i className="leg leg-on" /> Cotas contempladas a cada assembleia</span>
              <span><i className="leg leg-seu" /> O seu plano: estratégia definida no diagnóstico</span>
              <span className="vivo-nota">Ilustração de um grupo de consórcio</span>
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  );
}
