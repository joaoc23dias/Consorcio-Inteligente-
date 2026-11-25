import Image from 'next/image';
import { NUMEROS_JOAO, NUMEROS_HS, RECLAME_AQUI } from '../content';
import Contador from './Contador';

// Conceito: o patrimônio do cliente tratado como um projeto de engenharia.
// O topo é uma prancha técnica: a foto em um vão em arco, cotas que se desenham
// e, logo abaixo, o carimbo da prancha com quem responde por cada parte do projeto.

export default function Hero() {
  return (
    <section className="prancha" aria-labelledby="hero-titulo">
      <div className="prancha-grade" aria-hidden="true" />
      <div className="wrap">
        <div className="prancha-topo" aria-hidden="true">
          <span>Projeto patrimonial</span>
          <span>Folha 01 · Diagnóstico</span>
        </div>

        <div className="prancha-corpo">
          <div className="prancha-texto">
            <h1 id="hero-titulo" className="prancha-h1">
              Todo patrimônio começa como <em>um projeto.</em>
            </h1>
            <p className="prancha-lead">
              Sou João Dias, especialista em planejamento patrimonial pela Gaia Group. Antes de qualquer assinatura, eu projeto o seu próximo ativo: crédito, aporte, prazo e estratégia de contemplação, com o consórcio estratégico HS.
            </p>
            <div className="prancha-ctas">
              <a href="#diagnostico" className="btn btn-pri">Agendar meu diagnóstico patrimonial</a>
              <a href="#metodo" className="prancha-link">Ver como o projeto é feito</a>
            </div>
          </div>

          <figure className="prancha-figura">
            <div className="arco">
              <Image
                src="/joao-dias-hero.jpg"
                alt="João Dias, especialista em planejamento patrimonial"
                fill
                priority
                sizes="(max-width: 860px) 80vw, 420px"
                style={{ objectFit: 'cover', objectPosition: 'center 24%' }}
              />
            </div>
            <svg className="cotas" viewBox="0 0 520 640" aria-hidden="true">
              {/* cota vertical: crédito */}
              <g className="traco t1">
                <line x1="40" y1="70" x2="40" y2="590" />
                <line x1="30" y1="70" x2="50" y2="70" />
                <line x1="30" y1="590" x2="50" y2="590" />
              </g>
              <text className="rot r1" x="28" y="330" transform="rotate(-90 28 330)" textAnchor="middle">CRÉDITO</text>
              {/* cota horizontal: prazo */}
              <g className="traco t2">
                <line x1="90" y1="620" x2="470" y2="620" />
                <line x1="90" y1="610" x2="90" y2="630" />
                <line x1="470" y1="610" x2="470" y2="630" />
              </g>
              <text className="rot r2" x="280" y="612" textAnchor="middle">PRAZO</text>
              {/* chamadas */}
              <g className="traco t3">
                <circle cx="452" cy="150" r="4" />
                <polyline points="452,150 490,112 512,112" />
              </g>
              <text className="rot r3" x="512" y="104" textAnchor="end">CONTEMPLAÇÃO</text>
              <g className="traco t4">
                <circle cx="462" cy="430" r="4" />
                <polyline points="462,430 496,466 512,466" />
              </g>
              <text className="rot r4" x="512" y="486" textAnchor="end">APORTE</text>
            </svg>
            <figcaption className="prancha-assinatura">
              <span className="mono">Responsável técnico</span>
              <strong>João Dias</strong>
            </figcaption>
          </figure>
        </div>

        <dl className="carimbo" aria-label="Quem responde pelo seu projeto">
          <div className="carimbo-celula carimbo-gaia">
            <dt className="mono">Escritório · onde você é atendido</dt>
            <dd>
              <div className="carimbo-marca">
                <Image src="/logo-gaia-vermelho.png" alt="Gaia Group" width={46} height={36} />
                <span>Gaia Group</span>
              </div>
              <ul className="carimbo-numeros">
                {NUMEROS_JOAO.map((n) => (
                  <li key={n.rotulo}><b className="num"><Contador texto={n.valor} /></b> {n.rotulo}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="carimbo-celula carimbo-hs">
            <dt className="mono">Administradora · quem aprova e administra</dt>
            <dd>
              <div className="carimbo-marca">
                <span className="carimbo-logo-hs"><Image src="/logo-hs.png" alt="HS Consórcios" width={112} height={30} /></span>
                <span>HS Consórcios</span>
              </div>
              <ul className="carimbo-numeros">
                <li><b className="num"><Contador texto={NUMEROS_HS[0].valor} /></b> de mercado</li>
                <li><b className="num"><Contador texto={NUMEROS_HS[1].valor} /></b> cotas ativas</li>
                <li><b className="num">{RECLAME_AQUI.nota}</b> no <a href={RECLAME_AQUI.url} target="_blank" rel="noopener noreferrer">Reclame Aqui</a>, reputação {RECLAME_AQUI.reputacao.toLowerCase()}</li>
              </ul>
            </dd>
          </div>
          <div className="carimbo-celula carimbo-selo">
            <dt className="mono">Aprovação</dt>
            <dd>
              <span className="selo-bc">Autorizada pelo<br />Banco Central</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
