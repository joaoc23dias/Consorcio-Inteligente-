'use client';
import { track } from '@vercel/analytics';
import { WHATSAPP } from '../content';

const wa = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flex: 'none', marginTop: 4 }}>
    <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Seta = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M4 10L10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LADOS = [
  {
    id: 'comprar',
    tag: 'Para quem tem entrada',
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
    tag: 'Para quem já contemplou',
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

const CONFIANCA = ['Administradora HS Consórcios', 'Autorizada pelo Banco Central', 'Cessão formal em contrato', 'Valores apresentados no diagnóstico'];

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
          <div className="col" style={{ flex: '1 1 600px' }}>
            <p className="eyebrow">Cartas contempladas</p>
            <h2 id="cartas-titulo" className="h2" style={{ margin: 0 }}>
              Crédito liberado para quem não quer esperar. Liquidez para quem quer realizar.
            </h2>
          </div>
          <p className="cp col" style={{ flex: '0 1 380px' }}>
            Uma carta contemplada é um ativo com valor de mercado. Pela Gaia Group, você compra uma carta já liberada ou vende a sua com segurança jurídica e a HS Consórcios como administradora.
          </p>
        </div>

        <div className="row" style={{ gap: 20, marginTop: 56 }}>
          {LADOS.map((l) => {
            const escuro = l.id === 'comprar';
            return (
              <div key={l.id} className={`col bezel${escuro ? ' bezel-dark' : ''}`} style={{ flex: '1 1 420px' }}>
                <div className="bezel-core pad-box" style={{ padding: 40 }}>
                  <p className="tag eyebrow" style={{ marginBottom: 14 }}>{l.tag}</p>
                  <h3 className="h3" style={{ margin: '0 0 10px', fontSize: 34, color: escuro ? 'var(--bg)' : 'var(--green)' }}>{l.titulo}</h3>
                  <p className="cp" style={{ marginBottom: 24 }}>{l.para}</p>
                  <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, flex: 1 }}>
                    {l.itens.map((i) => (
                      <li key={i} style={{ display: 'flex', gap: 12, padding: '14px 0', borderTop: '1px solid var(--rule)', fontSize: 15, color: escuro ? undefined : 'var(--ink)' }}>
                        <span style={{ color: escuro ? 'var(--gold-light)' : 'var(--gold)' }}><Check /></span>
                        {i}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={wa(l.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-ico ${escuro ? 'btn-claro' : 'btn-pri'}`}
                    style={{ alignSelf: 'flex-start' }}
                    onClick={() => track('cartas_whatsapp', { lado: l.id })}
                  >
                    {l.cta}
                    <span className="ico"><Seta /></span>
                  </a>
                  <p className="cp" style={{ fontSize: 12, margin: '12px 0 0' }}>Conversa direta comigo no WhatsApp, sem compromisso.</p>
                </div>
              </div>
            );
          })}
        </div>

        <ul className="row" style={{ listStyle: 'none', margin: '28px 0 0', padding: 0, gap: '10px 28px', fontSize: 13, color: 'var(--ink-soft)' }}>
          {CONFIANCA.map((c) => (
            <li key={c} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ color: 'var(--gold)' }}><Check /></span>{c}
            </li>
          ))}
        </ul>

        <h3 className="h3" style={{ margin: '88px 0 28px' }}>Como funciona a transferência</h3>
        <ol className="passos">
          {PASSOS.map((p, i) => (
            <li key={p.t}>
              <span className="n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <strong style={{ display: 'block', marginBottom: 6 }}>{p.t}</strong>
              <span className="cp" style={{ fontSize: 15 }}>{p.d}</span>
            </li>
          ))}
        </ol>

        <div className="row" style={{ gap: 72, marginTop: 88 }}>
          <div className="col" style={{ flex: '1 1 320px' }}>
            <h3 className="h3" style={{ marginTop: 0 }}>O que todo mundo pergunta antes de decidir</h3>
            <p className="cp" style={{ marginBottom: 28 }}>Se a sua dúvida não estiver aqui, ela tem lugar no diagnóstico. É lá que a sua carta, ou a que você procura, é analisada com números reais.</p>
            <a href="#diagnostico" className="btn btn-sec">Agendar diagnóstico</a>
          </div>
          <div className="col" style={{ flex: '1 1 520px', borderTop: '1px solid var(--rule)' }}>
            {OBJECOES.map((o) => (
              <details key={o.q}>
                <summary>{o.q}</summary>
                <p className="cp">{o.a}</p>
              </details>
            ))}
          </div>
        </div>

        <p className="cp" style={{ fontSize: 12, marginTop: 48, maxWidth: 860 }}>
          O valor de negociação de uma carta depende do mercado e das condições da cota. Não há garantia de ágio, prazo de venda ou rentabilidade. Toda transferência está sujeita à análise e aprovação da administradora.
        </p>
      </div>
    </section>
  );
}
