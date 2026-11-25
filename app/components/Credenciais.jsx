import Image from 'next/image';
import { BC_URL } from '../content';
import Contador from './Contador';
import SeloRA from './SeloRA';

const Numeros = ({ itens }) => (
  <dl className="cred-numeros">
    {itens.map(([v, r], i) => (
      <div key={r} style={{ '--d': `${i * 140}ms` }}>
        <dd className="num"><Contador texto={v} duracao={1800} /></dd>
        <dt>{r}</dt>
      </div>
    ))}
  </dl>
);

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
              É aqui que o seu plano é desenhado e acompanhado, nos escritórios de Ribeirão Preto, São José do Rio Pardo e Mococa ou por videochamada.
            </p>
            <Numeros itens={[['+R$ 250 mi', 'em créditos comercializados'], ['+2.000', 'famílias atendidas'], ['9 anos', 'de entregas reais'], ['3', 'escritórios na região']]} />
          </article>
          <article className="cred-empresa">
            <Image src="/logo-hs.png" alt="HS Consórcios, uma empresa do Grupo Herval" width={200} height={53} className="cred-logo" />
            <p className="cred-papel">É quem administra o seu consórcio.</p>
            <p className="cred-texto">
              Maior administradora do Brasil no setor imobiliário. Empresa do Grupo Herval, autorizada pelo Banco Central.
            </p>
            <Numeros itens={[['+R$ 3 bi', 'em bens entregues em 2025'], ['+2.600', 'contemplações por mês'], ['+1.400', 'corretores'], ['+410 mil', 'cotas ativas']]} />
            <p className="cred-links">
              <SeloRA />
              <a href={BC_URL} target="_blank" rel="noopener noreferrer">Consultar no Banco Central</a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
