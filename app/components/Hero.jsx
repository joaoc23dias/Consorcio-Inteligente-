import Image from 'next/image';

// Topo: a mesa de estratégia. Imóvel, torre, carro e terreno ligados por um
// caminho dourado até a chave, a imagem do consórcio usado com inteligência.
// João entra recortado, em primeiro plano, como quem conduz o plano.
const FUNDO = 'https://d8j0ntlcm91z4.cloudfront.net/user_3MbR0sUBpodDPQLh4ssVdL8A42p/hf_20261125_202538_fd81f68f-1de6-4b7b-851b-fc107ac7b0d8.png';

export default function Hero() {
  return (
    <section className="mesa" aria-labelledby="hero-titulo">
      <div className="mesa-fundo" aria-hidden="true">
        <Image src={FUNDO} alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: '70% 60%' }} />
      </div>
      <div className="wrap mesa-grade">
        <div className="mesa-texto">
          <h1 id="hero-titulo" className="mesa-h1">Consórcio inteligente é patrimônio com estratégia.</h1>
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
