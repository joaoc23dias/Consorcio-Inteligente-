import CenaViva from './CenaViva';

const TITULO = 'Consórcio inteligente é patrimônio com estratégia.';


// Topo: João sentado à mesa de estratégia. Casa, prédio, carro e galpão pousam
// um por um sobre a mesa, ligados por frisos dourados até a chave.

// Cena (2400 x 1355). Coordenadas na imagem: as linhas douradas, os pontos de cada bem e as camadas do pouso.
const FINAL = '/mesa-joao.webp';
const W = 2400, H = 1355;
const CAMINHOS = [
  { id: 'chave', d: 'M1622 1186 L1748 1240 L1972 1138 L1830 1100 Z', dur: 5 },
  { id: 'base', d: 'M1820 1100 L1462 976 L1615 930' },
  { id: 'casa', d: 'M1540 892 L1440 862', dur: 2.6 },
  { id: 'galpao', d: 'M1860 1100 L2018 1028', dur: 3 },
];
const PONTOS = [
  { x: 1346, y: 700, rotulo: 'Imóvel', sub: 'Casa ou apartamento', caminhos: ['chave', 'base', 'casa'], halo: { y: 780, rx: 190, ry: 90 }, lado: 'esq' },
  { x: 1368, y: 975, rotulo: 'Investimento imobiliário', sub: 'Comercial ou para locação', caminhos: ['chave', 'base'], halo: { y: 985, rx: 125, ry: 150 }, lado: 'esq' },
  { x: 1743, y: 800, rotulo: 'Veículo', sub: 'Carro, moto ou frota', caminhos: ['chave', 'base'], halo: { y: 880, rx: 170, ry: 65 }, lado: 'dir' },
  { x: 2111, y: 840, rotulo: 'Para a empresa', sub: 'Cresça sem tirar dinheiro do caixa', caminhos: ['chave', 'galpao'], halo: { y: 955, rx: 220, ry: 105 }, lado: 'esq' },
];
const BRILHOS = [{ x: 1850, y: 1125 }];
// ordem do pouso: casa, carro, galpão e prédio (o prédio fica na frente)
const POUSO = [
  { obj: '/pouso2/casa.webp', sombra: '/pouso2/casa-sombra.webp', reflexo: '/pouso2/casa-reflexo.webp', x: 1180, y: 711, w: 334, h: 253, ponto: 0 },
  { obj: '/pouso2/carro.webp', sombra: '/pouso2/carro-sombra.webp', reflexo: '/pouso2/carro-reflexo.webp', x: 1567, y: 814, w: 341, h: 191, ponto: 2 },
  { obj: '/pouso2/galpao.webp', sombra: '/pouso2/galpao-sombra.webp', reflexo: '/pouso2/galpao-reflexo.webp', x: 1891, y: 840, w: 419, h: 278, ponto: 3 },
  { obj: '/pouso2/predio.webp', sombra: '/pouso2/predio-sombra.webp', reflexo: '/pouso2/predio-reflexo.webp', x: 1383, y: 833, w: 281, h: 342, ponto: 1 },
];

// Antes de a página aparecer: os bens viram peças soltas sobre a mesa (ci-bens) e o pouso roda na primeira visita.
const DECIDE_POUSO = "(function(){try{document.documentElement.classList.add('ci-bens');if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;if(sessionStorage.getItem('ci_pouso')==='1')return;sessionStorage.setItem('ci_pouso','1');document.documentElement.classList.add('ci-pouso')}catch(e){}})();";

export default function Hero() {
  return (
    <section className="mesa" aria-labelledby="hero-titulo">
      <script dangerouslySetInnerHTML={{ __html: DECIDE_POUSO }} />
      <div className="mesa-fundo" aria-hidden="true">
        <CenaViva src="/mesa-joao-vazia.webp" final={FINAL} pouso={POUSO} alt="" w={W} h={H} origem={[0.66, 0.36]} alvo=".mesa" caminhos={CAMINHOS} pontos={PONTOS} brilhos={BRILHOS} prioridade />
      </div>
      <div className="wrap mesa-grade">
        <div className="mesa-texto">
          <h1 id="hero-titulo" className="mesa-h1" aria-label={TITULO}>
            {TITULO.split(' ').map((w, i) => (
              <span key={i}><span className="pal" aria-hidden="true"><span style={{ '--i': i }}>{w}</span></span>{' '}</span>
            ))}
          </h1>
          <p className="mesa-lead">
            Sou João Dias, especialista em planejamento patrimonial pela Gaia Group. Imóvel, carro, a estrutura da sua empresa ou o próximo investimento: cada conquista entra no seu plano com crédito, aporte, prazo e estratégia de contemplação definidos antes da assinatura.
          </p>
          <div className="mesa-ctas">
            <a href="#diagnostico" className="btn btn-pri">Agendar meu diagnóstico patrimonial</a>
            <a href="#metodo" className="mesa-link">Conhecer o Método SPA®</a>
          </div>
        </div>
      </div>
    </section>
  );
}
