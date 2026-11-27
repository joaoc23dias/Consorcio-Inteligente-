import Image from 'next/image';
import CenaViva from './CenaViva';

const TITULO = 'Consórcio inteligente é patrimônio com estratégia.';


// Topo: a mesa de estratégia. Imóvel, torre, carro e terreno ligados por um
// caminho dourado até a chave. João em primeiro plano, como quem conduz o plano.

// Cena do patrimônio (1789 x 879): casa, prédio, carro e galpão sobre a mesa, ligados à chave.
// Coordenadas na imagem: as linhas douradas, os pontos de cada bem e as camadas do pouso.
const FINAL = '/mesa-patrimonio.webp';
const W = 1789, H = 879;
const CAMINHOS = [
  { id: 'chave', d: 'M1216 772 L1380 710 L1473 740 L1316 811 Z', dur: 5 },
  { id: 'base', d: 'M1363 713 L1102 632 L1210 602' },
  { id: 'casa', d: 'M1157 573 L1090 556', dur: 2.6 },
  { id: 'galpao', d: 'M1393 713 L1503 666', dur: 3 },
  { id: 'torre', d: 'M1443 530 L1516 480 L1350 460', dur: 3.6 },
];
const PONTOS = [
  { x: 1010, y: 470, rotulo: 'Imóvel', sub: 'Casa ou apartamento', caminhos: ['chave', 'base', 'casa'], halo: { y: 505, rx: 175, ry: 80 }, lado: 'esq' },
  { x: 1255, y: 330, rotulo: 'Investimento imobiliário', sub: 'Comercial ou para locação', caminhos: ['chave', 'base', 'torre'], halo: { y: 400, rx: 130, ry: 160 } },
  { x: 1305, y: 548, rotulo: 'Veículo', sub: 'Carro, moto ou frota', caminhos: ['chave', 'base'], halo: { y: 560, rx: 150, ry: 55 }, lado: 'dir' },
  { x: 1570, y: 585, rotulo: 'Para a empresa', sub: 'Cresça sem tirar dinheiro do caixa', caminhos: ['chave', 'galpao'], halo: { y: 610, rx: 200, ry: 90 }, lado: 'esq' },
];
const BRILHOS = [{ x: 1396, y: 730 }];
// ordem do pouso: casa, carro, prédio e galpão
const POUSO = [
  { obj: '/pouso/casa.webp', sombra: '/pouso/casa-sombra.webp', x: 855, y: 415, w: 330, h: 180, ponto: 0 },
  { obj: '/pouso/carro.webp', sombra: '/pouso/carro-sombra.webp', x: 1150, y: 500, w: 310, h: 126, ponto: 2 },
  { obj: '/pouso/predio.webp', sombra: '/pouso/predio-sombra.webp', x: 1120, y: 235, w: 280, h: 287, ponto: 1 },
  { obj: '/pouso/galpao.webp', sombra: '/pouso/galpao-sombra.webp', x: 1375, y: 505, w: 390, h: 200, ponto: 3 },
];

// Decide antes de a página aparecer se o pouso roda (primeira visita, sem movimento reduzido).
const DECIDE_POUSO = "(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;if(sessionStorage.getItem('ci_pouso')==='1')return;sessionStorage.setItem('ci_pouso','1');document.documentElement.classList.add('ci-pouso')}catch(e){}})();";

export default function Hero() {
  return (
    <section className="mesa" aria-labelledby="hero-titulo">
      <script dangerouslySetInnerHTML={{ __html: DECIDE_POUSO }} />
      <div className="mesa-fundo" aria-hidden="true">
        <CenaViva src="/mesa-vazia.webp" final={FINAL} pouso={POUSO} alt="" w={W} h={H} origem={[0.7, 0.6]} alvo=".mesa" caminhos={CAMINHOS} pontos={PONTOS} brilhos={BRILHOS} prioridade />
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
          <Image src="/joao-dias-mesa.webp" alt="João Dias, especialista em planejamento patrimonial" width={1024} height={1024} priority sizes="(max-width: 960px) 80vw, 340px" />
        </figure>
      </div>
    </section>
  );
}
