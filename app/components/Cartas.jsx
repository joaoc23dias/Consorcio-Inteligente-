'use client';
import { track } from '@vercel/analytics';
import { WHATSAPP } from '../content';

const wa = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

const LADOS = [
  {
    id: 'comprar',
    titulo: 'Quero comprar',
    para: 'Para quem já tem a entrada e quer usar o crédito agora, sem esperar sorteio ou lance.',
    itens: [
      'Crédito já liberado, pronto para a compra do imóvel ou veículo',
      'Análise do saldo devedor e do custo total antes de qualquer decisão',
      'Comparativo honesto com o financiamento, número contra número',
    ],
    cta: 'Ver cartas disponíveis',
    msg: 'Olá, João! Vi o site e quero entender as cartas contempladas disponíveis para compra.',
  },
  {
    id: 'vender',
    titulo: 'Quero vender',
    para: 'Para quem contemplou e prefere transformar a carta em capital para outro projeto.',
    itens: [
      'Avaliação do valor de mercado da sua carta',
      'Busca de comprador e negociação conduzidas pelo nosso time',
      'Transferência formal, com aprovação da administradora',
    ],
    cta: 'Avaliar minha carta',
    msg: 'Olá, João! Tenho uma carta contemplada e quero saber quanto ela vale.',
  },
];

const PASSOS = [
  { t: 'Diagnóstico', d: 'Entendemos seu objetivo: usar o crédito agora ou transformar a carta em capital.' },
  { t: 'Avaliação', d: 'Analisamos crédito, saldo devedor, aportes restantes e o valor de mercado da cota.' },
  { t: 'Contrato e aprovação', d: 'A transferência é formalizada e passa pela análise da administradora.' },
  { t: 'Crédito na mão', d: 'Com a aprovação, o crédito fica disponível para quem comprou e o valor combinado, para quem vendeu.' },
];

const OBJECOES = [
  { q: 'É seguro comprar ou vender uma carta?', a: 'Sim, quando a transferência é feita do jeito certo: com contrato, cessão registrada e aprovação da administradora. Nada de acordo de gaveta. Conduzimos cada etapa.' },
  { q: 'Quem compra a minha carta?', a: 'Pessoas que já têm entrada e querem o crédito agora, e investidores que acompanham esse mercado. Nosso papel é encontrar o comprador certo e conduzir a negociação.' },
  { q: 'Quanto vale a minha carta?', a: 'Depende do crédito, do saldo devedor, dos aportes restantes e do momento do mercado. Por isso os valores são apresentados somente no diagnóstico, com a sua cota analisada.' },
  { q: 'Quanto tempo leva?', a: 'Varia conforme a negociação e a análise da administradora. No diagnóstico você recebe uma estimativa realista para o seu caso.' },
];

export default function Cartas() {
  return (
    <section id="cartas" className="sec alt" aria-labelledby="cartas-titulo">
      <div className="wrap">
        <div className="row" style={{ gap: 48, alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div className="col" style={{ flex: '1 1 560px' }}>
            <p className="eyebrow">Cartas contempladas</p>
            <h2 id="cartas-titulo" className="h2" style={{ margin: 0 }}>
              Crédito liberado para quem não quer esperar. Liquidez para quem quer realizar.
            </h2>
          </div>
          <p className="cp col" style={{ flex: '0 1 380px' }}>
            Uma carta contemplada é um ativo com valor de mercado. Pela Gaia Group, você compra uma carta já liberada ou vende a sua com segurança jurídica e a HS Consórcios como administradora.
          </p>
        </div>

        <div className="row" style={{ gap: 20, marginTop: 48 }}>
          {LADOS.map((l) => (
            <div key={l.id} className="col pad-box" style={{ flex: '1 1 420px', background: 'var(--surface)', border: '1px solid var(--rule)', padding: 36, display: 'flex', flexDirection: 'column' }}>
              <h3 className="h3" style={{ margin: '0 0 8px', color: 'var(--green)' }}>{l.titulo}</h3>
              <p className="cp" style={{ marginBottom: 20 }}>{l.para}</p>
              <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0, flex: 1 }}>
                {l.itens.map((i) => (
                  <li key={i} style={{ padding: '12px 0 12px 22px', borderTop: '1px solid var(--rule)', position: 'relative', fontSize: 15 }}>
                    <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 12, color: 'var(--gold)' }}>✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href={wa(l.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className={l.id === 'comprar' ? 'btn btn-pri' : 'btn btn-sec'}
                style={{ alignSelf: 'flex-start' }}
                onClick={() => track('cartas_whatsapp', { lado: l.id })}
              >
                {l.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="row" style={{ gap: 72, marginTop: 72 }}>
          <div className="col" style={{ flex: '1 1 360px' }}>
            <h3 className="h3" style={{ marginTop: 0 }}>Como funciona a transferência</h3>
            <ol className="timeline">
              {PASSOS.map((p) => (
                <li key={p.t}>
                  <strong style={{ display: 'block', marginBottom: 4 }}>{p.t}</strong>
                  <span className="cp">{p.d}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="col" style={{ flex: '1 1 480px', borderTop: '1px solid var(--rule)' }}>
            {OBJECOES.map((o) => (
              <details key={o.q}>
                <summary>{o.q}</summary>
                <p className="cp">{o.a}</p>
              </details>
            ))}
          </div>
        </div>

        <p className="cp" style={{ fontSize: 12, marginTop: 40, maxWidth: 860 }}>
          O valor de negociação de uma carta depende do mercado e das condições da cota. Não há garantia de ágio, prazo de venda ou rentabilidade. Toda transferência está sujeita à análise e aprovação da administradora.
        </p>
      </div>
    </section>
  );
}
