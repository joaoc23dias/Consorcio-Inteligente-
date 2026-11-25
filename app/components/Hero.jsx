import Image from 'next/image';
import { NUMEROS_JOAO } from '../content';
import MiniSim from './MiniSim';

export default function Hero() {
  return (
    <section style={{ padding: '96px 0 88px' }}>
      <div className="wrap row" style={{ gap: 72, alignItems: 'center' }}>
        <div className="col" style={{ flex: '1 1 500px' }}>
          <p className="eyebrow">Método SPA® · Segurança, Patrimônio e Alavancagem</p>
          <h1 className="h1">Seu próximo ativo merece uma estratégia, não uma cota qualquer.</h1>
          <p className="lead" style={{ marginBottom: 40 }}>
            Sou João Dias, especialista em planejamento patrimonial pela Gaia Group. Você me diz onde quer chegar, eu monto o plano com o consórcio estratégico HS e o meu time acompanha cada mês até a sua conquista patrimonial.
          </p>
          <div className="row hero-ctas" style={{ gap: 14 }}>
            <a href="#diagnostico" className="btn btn-pri">Agendar meu diagnóstico patrimonial</a>
            <a href="#conta" className="btn btn-sec">Fazer a conta</a>
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
          <figcaption style={{ fontSize: 12, letterSpacing: '.06em', color: 'var(--ink-muted)', marginTop: 14, textAlign: 'right' }}>
            João Dias · Especialista em planejamento patrimonial
          </figcaption>
        </figure>
        <MiniSim />
        </div>
      </div>

      <div className="wrap" style={{ marginTop: 80 }}>
        <hr className="rule" />
        <div className="row" style={{ gap: 32, alignItems: 'center', justifyContent: 'space-between', padding: '28px 0' }}>
          <div className="row" style={{ alignItems: 'center', gap: 22 }}>
            <Image src="/logo-gaia-vermelho.png" alt="Gaia Group Investimentos & Consórcios" width={76} height={60} />
            <span aria-hidden="true" style={{ width: 1, height: 36, background: 'var(--rule)' }} />
            <Image src="/logo-hs.png" alt="HS Consórcios, uma empresa do Grupo Herval" width={150} height={40} />
            <span className="small" style={{ color: 'var(--ink-soft)' }}>
              Administração exclusiva <span translate="no">HS Consórcios</span> · autorizada pelo Banco Central
            </span>
          </div>
          <dl className="row" style={{ gap: 40, margin: 0 }}>
            {NUMEROS_JOAO.map((n) => (
              <div key={n.rotulo} style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                <dt className="label" style={{ marginTop: 8 }}>{n.rotulo}</dt>
                <dd className="ph num" style={{ margin: 0, padding: '6px 10px' }}>{n.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
        <hr className="rule" />
      </div>
    </section>
  );
}
