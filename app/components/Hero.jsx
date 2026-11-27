import Image from 'next/image';
import CenaViva from './CenaViva';

const TITULO = 'Consórcio inteligente é patrimônio com estratégia.';


// Topo: a mesa de estratégia. Imóvel, torre, carro e terreno ligados por um
// caminho dourado até a chave. João em primeiro plano, como quem conduz o plano.
const FUNDO = '/mesa-estrategia.webp';

// Coordenadas na imagem original (1376 x 676): as linhas douradas da mesa.
const CAMINHOS = [
  { id: 'chave', d: 'M955 600 L1060 558 L1148 578 L1023 628 Z', dur: 5 },
  { id: 'base', d: 'M1046 588 L1060 558 L862 493 L952 472' },
  { id: 'casa', d: 'M908 450 L850 436' , dur: 2.6 },
  { id: 'terreno', d: 'M1046 588 L1080 555 L1168 525', dur: 3.2 },
  { id: 'torre', d: 'M1080 404 L1122 415 L1182 379 L1045 367', dur: 3.6 },
];
const PONTOS = [
  { x: 760, y: 380, rotulo: 'Imóvel', sub: 'Casa ou apartamento', caminhos: ['chave', 'base', 'casa'], halo: { y: 400, rx: 170, ry: 90 }, lado: 'esq' },
  { x: 985, y: 250, rotulo: 'Investimento imobiliário', sub: 'Comercial ou para locação', caminhos: ['chave', 'torre'], halo: { y: 300, rx: 120, ry: 150 } },
  { x: 1035, y: 425, rotulo: 'Veículo', sub: 'Carro, moto ou frota', caminhos: ['chave', 'base'], halo: { y: 435, rx: 130, ry: 60 }, lado: 'dir' },
  { x: 1200, y: 450, rotulo: 'Terreno', sub: 'Construção ou reserva', caminhos: ['chave', 'terreno'], halo: { y: 450, rx: 160, ry: 80 } },
];
const BRILHOS = [{ x: 1047, y: 586 }];
// O vídeo é a mesma cena em 16:9 (1920 x 1080): a imagem ocupa 943 px de altura,
// começando 72 px abaixo do topo. Assim ele encaixa exatamente sobre a imagem.
const VIDEO = { src: '/mesa-estrategia.mp4', leve: '/mesa-estrategia-1280.mp4', topo: -72 / 943 * 100, altura: 1080 / 943 * 100 };

export default function Hero() {
  return (
    <section className="mesa" aria-labelledby="hero-titulo">
      <div className="mesa-fundo" aria-hidden="true">
        <CenaViva src={FUNDO} alt="" w={1376} h={676} origem={[0.7, 0.6]} alvo=".mesa" caminhos={CAMINHOS} pontos={PONTOS} brilhos={BRILHOS} video={VIDEO} prioridade />
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
        </figure>
      </div>
    </section>
  );
}
