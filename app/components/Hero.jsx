import Image from 'next/image';
import { NUMEROS_JOAO, NUMEROS_HS, HS_DESTAQUE, RECLAME_AQUI } from '../content';
import Contador from './Contador';

export default function Hero() {
  return (
    <section style={{ padding: '72px 0 64px' }}>
      <div className="wrap row" style={{ gap: 72, alignItems: 'center' }}>
        <div className="col" style={{ flex: '1 1 500px' }}>
          <h1 className="h1">Seu próximo ativo merece uma estratégia.</h1>
          <p className="lead" style={{ marginBottom: 40 }}>
            Sou João Dias, especialista em planejamento patrimonial pela Gaia Group. Você me diz onde quer chegar, eu monto o plano com o consórcio estratégico HS e o meu time acompanha cada mês até a sua conquista patrimonial.
          </p>
          <div className="row hero-ctas" style={{ gap: 14 }}>
            <a href="#diagnostico" className="btn btn-pri">Agendar meu diagnóstico patrimonial</a>
            <a href="#metodo" className="btn btn-sec">Conhecer o método</a>
          </div>
        </div>
        <div className="col hero-figura" style={{ flex: '1 1 380px' }}>
        <figure style={{ margin: 0 }}>
          <Image
            src="/joao-dias-hero.jpg"
            alt="João Dias, especialista em planejamento patrimonial"
            width={460}
            height={560}
            priority
            sizes="(max-width: 760px) 100vw, 460px"
            style={{ width: '100%', maxWidth: 460, height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover', objectPosition: 'center 22%', marginLeft: 'auto' }}
          />
        </figure>
        <aside className="hs-credencial" aria-label="Administradora do seu consórcio">
          <div className="hs-cred-topo">
            <Image src="/logo-hs.png" alt="HS Consórcios, uma empresa do Grupo Herval" width={128} height={34} />
            <p>Administra o seu consórcio. Autorizada pelo Banco Central.</p>
          </div>
          <p className="hs-cred-destaque">{HS_DESTAQUE}.</p>
          <dl className="hs-cred-numeros">
            {NUMEROS_HS.map((n) => (
              <div key={n.rotulo}><dd className="num"><Contador texto={n.valor} /></dd><dt>{n.rotulo}</dt></div>
            ))}
          </dl>
          <a className="hs-cred-ra" href={RECLAME_AQUI.url} target="_blank" rel="noopener noreferrer">
            <span className="hs-cred-selo">Reclame Aqui</span>
            <span>Reputação <strong>{RECLAME_AQUI.reputacao}</strong> · nota <strong>{RECLAME_AQUI.nota}</strong> de 10</span>
          </a>
          <p className="hs-cred-fonte">Fontes: hsconsorcios.com.br (nov. de 2026) e Reclame Aqui ({RECLAME_AQUI.periodo}).</p>
        </aside>
        </div>
      </div>

      <div className="wrap" style={{ marginTop: 64 }}>
        <div className="quem-e quem-e-gaia" aria-label="Onde você é atendido">
          <div className="quem-bloco">
            <Image src="/logo-gaia-vermelho.png" alt="Gaia Group Investimentos & Consórcios" width={70} height={55} />
            <div>
              <p className="quem-papel">Onde você é atendido</p>
              <p className="quem-nome">Gaia Group</p>
              <p className="cp" style={{ fontSize: 14 }}>Consultoria em consórcio estratégico e planejamento patrimonial. É aqui que o seu plano é desenhado e acompanhado.</p>
            </div>
            {NUMEROS_JOAO.every((n) => !n.valor.startsWith('[')) && (
              <dl className="quem-numeros gaia-numeros">
                {NUMEROS_JOAO.map((n) => (
                  <div key={n.rotulo}>
                    <dd className="num"><Contador texto={n.valor} /></dd>
                    <dt>{n.rotulo}</dt>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
