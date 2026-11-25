import Image from 'next/image';
import MesaFx from './MesaFx';

const TITULO = 'Consórcio inteligente é patrimônio com estratégia.';
const POEIRA = Array.from({ length: 16 }, (_, i) => i);

// Topo: a mesa de estratégia. Imóvel, torre, carro e terreno ligados por um
// caminho dourado até a chave, a imagem do consórcio usado com inteligência.
// João entra recortado, em primeiro plano, como quem conduz o plano.
const FUNDO = '/mesa-estrategia.webp';

export default function Hero() {
  return (
    <section className="mesa" aria-labelledby="hero-titulo">
      <MesaFx />
      <div className="mesa-fundo" aria-hidden="true">
        <Image src={FUNDO} alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: '70% 60%' }} />
      </div>
      <div className="poeira" aria-hidden="true">
        {POEIRA.map((i) => <i key={i} style={{ '--p': i, left: `${44 + ((i * 37) % 54)}%` }} />)}
      </div>
      <div className="wrap mesa-grade">
        <div className="mesa-texto">
          <h1 id="hero-titulo" className="mesa-h1" aria-label={TITULO}>
            {TITULO.split(' ').map((w, i) => (
              <span key={i}><span className="pal" aria-hidden="true"><span style={{ '--i': i }}>{w}</span></span>{' '}</span>
            ))}
          </h1>
          <p className="mesa-lead">
            Sou João Dias, especialista em planejamento patrimonial pela Gaia Group. Imóvel, carro, terreno ou o próximo investimento: cada conquista entra no seu plano com crédito, aporte, prazo e estratégia de contemplação definidos antes da assinatura.
          </p>
          <div className="mesa-ctas">
            <a href="#diagnostico" className="btn btn-pri">Agendar meu diagnóstico patrimonial</a>
            <a href="#metodo" className="mesa-link">Conhecer o Método SPA®</a>
          </div>
        </div>
        <figure className="mesa-joao">
          <Image src="/joao-dias-recorte.webp" alt="João Dias, especialista em planejamento patrimonial" width={912} height={912} priority sizes="(max-width: 960px) 80vw, 460px" />
          <figcaption>
            <strong>João Dias</strong>
            <span>Especialista em planejamento patrimonial</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
