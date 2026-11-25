import Image from 'next/image';
import { NUMEROS_JOAO } from '../content';
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
            style={{ width: '100%', maxWidth: 460, height: 'auto', aspectRatio: '23 / 28', objectFit: 'cover', marginLeft: 'auto' }}
          />
          <figcaption style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 14, textAlign: 'right' }}>
            João Dias · Especialista em planejamento patrimonial
          </figcaption>
        </figure>
        </div>
      </div>

      <div className="wrap" style={{ marginTop: 64 }}>
        <div className="quem-e" aria-label="Quem faz o quê">
          <div className="quem-bloco">
            <Image src="/logo-gaia-vermelho.png" alt="Gaia Group Investimentos & Consórcios" width={70} height={55} />
            <div>
              <p className="quem-papel">Onde você é atendido</p>
              <p className="quem-nome">Gaia Group</p>
              <p className="cp" style={{ fontSize: 14 }}>Consultoria em consórcio estratégico e planejamento patrimonial. É aqui que o seu plano é desenhado e acompanhado.</p>
              {NUMEROS_JOAO.every((n) => !n.valor.startsWith('[')) && (
                <dl className="quem-numeros">
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
          <div className="quem-bloco">
            <Image src="/logo-hs.png" alt="HS Consórcios, uma empresa do Grupo Herval" width={150} height={40} />
            <div>
              <p className="quem-papel">Quem administra o seu consórcio</p>
              <p className="quem-nome">HS Consórcios</p>
              <p className="cp" style={{ fontSize: 14 }}>Administradora do Grupo Herval, autorizada pelo Banco Central. Cuida dos grupos, das assembleias e das contemplações.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
