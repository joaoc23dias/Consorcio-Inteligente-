import Image from 'next/image';
import { RECLAME_AQUI, BC_URL } from '../content';

// Gaia e HS apresentadas como um texto, não como painel de números:
// cada empresa com a sua logo em tamanho natural e os fatos escritos em frase.
export default function Credenciais() {
  return (
    <section id="cred" className="cred" aria-labelledby="cred-titulo">
      <div className="wrap">
        <h2 id="cred-titulo" className="cred-titulo">Quem está com você em cada etapa.</h2>
        <div className="cred-colunas">
          <article className="cred-empresa">
            <Image src="/logo-gaia-vermelho.png" alt="Gaia Group Investimentos & Consórcios" width={92} height={73} className="cred-logo" />
            <p className="cred-papel">É onde você é atendido.</p>
            <p className="cred-texto">
              A Gaia Group já comercializou mais de R$ 250 milhões em créditos e atendeu mais de 2.000 famílias em 9 anos. É aqui que o seu plano é desenhado e acompanhado, nos escritórios de Ribeirão Preto, São José do Rio Pardo e Mococa ou por videochamada.
            </p>
          </article>
          <article className="cred-empresa">
            <Image src="/logo-hs.png" alt="HS Consórcios, uma empresa do Grupo Herval" width={200} height={53} className="cred-logo" />
            <p className="cred-papel">É quem administra o seu consórcio.</p>
            <p className="cred-texto">
              A HS Consórcios é do Grupo Herval e está no mercado desde 1993, com mais de 410 mil cotas ativas. É autorizada pelo Banco Central e tem reputação {RECLAME_AQUI.reputacao.toLowerCase()} no Reclame Aqui, com nota {RECLAME_AQUI.nota} de 10.
            </p>
            <p className="cred-links">
              <a href={RECLAME_AQUI.url} target="_blank" rel="noopener noreferrer">Ver a reputação no Reclame Aqui</a>
              <a href={BC_URL} target="_blank" rel="noopener noreferrer">Consultar no Banco Central</a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
