'use client';
import { track } from '@vercel/analytics';
import Image from 'next/image';
import { WHATSAPP, CARTAS_DEPOIMENTOS, CARTAS_CASOS, LOGO_HS, CARTAS_FAQ, BC_URL } from '../content';

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
    para: 'Para quem já tem a entrada e quer usar o crédito agora, sem esperar a contemplação. A entrada é obrigatória: é o valor pago a quem vende a carta.',
    itens: [
      'Crédito já liberado, pronto para a compra do imóvel ou veículo',
      'Análise do saldo devedor e do custo total antes de qualquer decisão',
      'Comparativo honesto com o financiamento, número contra número',
    ],
    cta: 'Solicitar cotação',
    msg: 'Olá, João! Vi o site e quero uma cotação de carta contemplada para comprar.\n\nTipo de bem (imóvel ou veículo): \nCrédito que procuro: R$ \nEntrada que tenho disponível: R$ ',
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
    cta: 'Cotar minha carta',
    msg: 'Olá, João! Tenho uma carta contemplada e quero uma cotação para vender.\n\nAdministradora: \nValor do crédito: R$ \nAportes já pagos: ',
  },
];

const GARANTIAS = [
  {
    id: 'gaia',
    papel: 'Conduz a negociação',
    nome: 'Gaia Group',
    logo: { src: '/logo-gaia-vermelho.png', w: 61, h: 48, alt: 'Gaia Group Investimentos & Consórcios' },
    itens: [
      'Avalia a carta e encontra a contraparte certa para você',
      'Contratos revisados pelo jurídico da Gaia, conduzido por advogada especialista em direito imobiliário',
      'Acompanha cada etapa até a transferência concluída',
    ],
  },
  {
    id: 'hs',
    papel: 'Aprova a transferência',
    nome: 'HS Consórcios',
    logo: { src: LOGO_HS, w: 150, h: 40, alt: 'HS Consórcios, uma empresa do Grupo Herval' },
    itens: [
      'Administradora do Grupo Herval, autorizada pelo Banco Central',
      'Faz a análise de crédito de quem assume a carta',
      'A cessão só é concluída com a aprovação dela',
    ],
    link: { href: BC_URL, txt: 'Consulte a autorização no Banco Central' },
  },
  {
    id: 'voce',
    papel: 'Decide com os números na mesa',
    nome: 'Você',
    itens: [
      'Cotação individual da sua carta, sem tabela genérica',
      'Saldo devedor, aportes restantes e custo total antes de assinar',
      'Comparativo com o financiamento, número contra número',
    ],
  },
];




export default function Cartas() {
  return (
    <section id="cartas" className="sec alt" aria-labelledby="cartas-titulo">
      <div className="wrap">
        <div className="row" style={{ gap: 48, alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div className="col" style={{ flex: '1 1 600px' }}>
            <h2 id="cartas-titulo" className="h2" style={{ margin: 0 }}>
              Carta contemplada: compre crédito liberado ou venda a sua.
            </h2>
          </div>
          <p className="cp col" style={{ flex: '0 1 380px' }}>
            Uma carta contemplada é um ativo com valor de mercado. Você compra uma carta já liberada ou vende a sua com segurança jurídica: a Gaia Group intermedeia a negociação e a HS Consórcios aprova a transferência.
          </p>
        </div>

        <div className="row" style={{ gap: 20, marginTop: 40 }}>
          {LADOS.map((l) => {
            const escuro = false;
            const principal = l.id === 'comprar';
            return (
              <div key={l.id} className={`col bezel${escuro ? ' bezel-dark' : ''}`} style={{ flex: '1 1 420px' }}>
                <div className="bezel-core pad-box" style={{ padding: 36 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', alignItems: 'center', justifyContent: 'space-between', margin: '0 0 10px' }}>
                    <h3 className="h3" style={{ margin: 0, fontSize: 34, color: escuro ? 'var(--bg)' : 'var(--green)' }}>{l.titulo}</h3>
                    <span className="tag-pill">{l.tag}</span>
                  </div>
                  <p className="cp" style={{ marginBottom: 20 }}>{l.para}</p>
                  <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, flex: 1 }}>
                    {l.itens.map((i) => (
                      <li key={i} style={{ display: 'flex', gap: 12, padding: '11px 0', borderTop: '1px solid var(--rule)', fontSize: 15, color: escuro ? undefined : 'var(--ink)' }}>
                        <span style={{ color: escuro ? 'var(--gold-light)' : 'var(--gold)' }}><Check /></span>
                        {i}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={wa(l.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-ico ${principal ? 'btn-pri' : 'btn-sec'}`}
                    style={{ alignSelf: 'flex-start' }}
                    onClick={() => track('cartas_whatsapp', { lado: l.id })}
                  >
                    {l.cta}
                    <span className="ico"><Seta /></span>
                  </a>
                  <p className="cp" style={{ fontSize: 12, margin: '12px 0 0' }}>Abre direto no meu WhatsApp. Cotação individual, sem compromisso.</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="garantias" aria-labelledby="garantias-titulo">
          <div className="garantias-topo">
            <p className="eyebrow" style={{ margin: 0 }}>Segurança da negociação</p>
            <h3 id="garantias-titulo" className="h3" style={{ margin: 0, fontSize: 'clamp(26px, 3vw, 34px)' }}>Cada etapa tem um responsável, e nada acontece sem contrato.</h3>
          </div>
          <div className="garantias-grade">
            {GARANTIAS.map((g) => (
              <div key={g.id} className={`garantia garantia-${g.id}`}>
                <div className="garantia-marca">
                  {g.logo
                    ? <Image src={g.logo.src} alt={g.logo.alt} width={g.logo.w} height={g.logo.h} style={{ width: 'auto', height: g.logo.h }} />
                    : <span className="garantia-eu" aria-hidden="true">Você</span>}
                </div>
                <p className="quem-papel">{g.papel}</p>
                <p className="quem-nome">{g.nome}</p>
                <ul className="garantia-itens">
                  {g.itens.map((i) => (
                    <li key={i}><span style={{ color: 'var(--gold)' }}><Check /></span>{i}</li>
                  ))}
                </ul>
                {g.numeros && (
                  <dl className="quem-numeros">
                    {g.numeros.map((n) => (
                      <div key={n.r}><dd className="num">{n.v}</dd><dt>{n.r}</dt></div>
                    ))}
                  </dl>
                )}
                {g.link && <a className="garantia-link" href={g.link.href} target="_blank" rel="noopener noreferrer">{g.link.txt}<Seta /></a>}
              </div>
            ))}
          </div>
          <p className="garantias-rodape">
            <strong>Sem acordo de gaveta.</strong> Toda carta é transferida por cessão formal, com contrato e aprovação da administradora. Os valores são informados somente na cotação individual.
          </p>
        </div>

        <div style={{ marginTop: 72 }}>
          <h3 className="h3" style={{ fontSize: 34, maxWidth: 640 }}>Quem usou a carta contemplada como investimento conta como foi.</h3>
          {CARTAS_CASOS.map((c) => (
            <article key={c.video} className="bezel" style={{ marginTop: 32 }}>
              <div className="bezel-core caso-grid">
                <figure style={{ margin: 0 }}>
                <video
                    className="caso-video"
                    src={c.video}
                    poster={c.poster}
                    controls
                    playsInline
                    preload="none"
                    aria-label={`Depoimento em vídeo: ${c.titulo}`}
                    onPlay={() => track('caso_video_play', { caso: c.video })}
                  />
                  {c.cliente && (
                    <figcaption style={{ marginTop: 12, textAlign: 'center' }}>
                      <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--ink)' }}>{c.cliente}</span>
                      {c.profissao && <span className="label">{c.profissao}</span>}
                    </figcaption>
                  )}
                </figure>
                <div className="pad-box" style={{ padding: 40, display: 'flex', flexDirection: 'column' }}>
                  <p className="eyebrow" style={{ marginBottom: 10 }}>{c.perfil} · Cliente Gaia Group</p>
                  <h4 style={{ margin: '0 0 24px', fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 30, lineHeight: 1.2, color: 'var(--green)' }}>{c.titulo}</h4>
                  <ol style={{ listStyle: 'none', margin: 0, padding: 0, flex: 1 }}>
                    {c.etapas.map((e) => (
                      <li key={e.rotulo} style={{ padding: '14px 0', borderTop: '1px solid var(--rule)' }}>
                        <span className="label" style={{ display: 'block', marginBottom: 4 }}>{e.rotulo}</span>
                        <span style={{ fontSize: 15 }}>{e.texto}</span>
                      </li>
                    ))}
                  </ol>
                  <div style={{ height: 24 }} />
                  <a href={wa('Olá, João! Vi o caso real no site e quero entender como usar a carta contemplada na minha estratégia.')} target="_blank" rel="noopener noreferrer" className="btn btn-pri btn-ico" style={{ alignSelf: 'flex-start' }} onClick={() => track('cartas_whatsapp', { lado: 'caso' })}>
                    Quero uma estratégia assim<span className="ico"><Seta /></span>
                  </a>
                </div>
              </div>
            </article>
          ))}
          <p className="cp" style={{ fontSize: 12, marginTop: 16 }}>Depoimentos reais, publicados com autorização. Resultados individuais, que dependem da estratégia, do grupo e do mercado; não representam garantia de contemplação, ágio ou rentabilidade.</p>
          {CARTAS_DEPOIMENTOS.some((d) => !d.texto.startsWith('[')) && (
            <div className="prova">
              {CARTAS_DEPOIMENTOS.filter((d) => !d.texto.startsWith('[')).map((d, i) => (
                <figure key={i} className="bezel" style={{ margin: 0 }}>
                  <div className="bezel-core pad-box" style={{ padding: 32, gap: 20 }}>
                    <p className="eyebrow" style={{ margin: 0 }}>{d.lado}</p>
                    <blockquote style={{ margin: 0, fontFamily: 'var(--serif)', fontSize: 24, lineHeight: 1.3, flex: 1 }}>“{d.texto}”</blockquote>
                    <figcaption style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                      {d.foto && <img src={d.foto} alt="" width={48} height={48} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: '50%' }} />}
                      <span>
                        <strong style={{ display: 'block', fontSize: 15 }}>{d.nome}</strong>
                        <span className="cp" style={{ fontSize: 13 }}>{d.detalhe}</span>
                      </span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          )}
        </div>

        <div id="cartas-faq" className="row" style={{ gap: 72, marginTop: 72 }}>
          <div className="col" style={{ flex: '1 1 320px' }}>
            <h3 className="h3" style={{ marginTop: 0, fontSize: 34 }}>Antes de pedir a cotação, confira se a carta é para você.</h3>
            <p className="cp" style={{ marginBottom: 28 }}>Se a sua dúvida não estiver aqui, me mande no WhatsApp junto com o pedido de cotação. Cada carta é analisada com números reais.</p>
            <a href={wa('Olá, João! Tenho uma dúvida sobre cartas contempladas e quero uma cotação.')} target="_blank" rel="noopener noreferrer" className="btn btn-sec" onClick={() => track('cartas_whatsapp', { lado: 'duvida' })}>Falar no WhatsApp</a>
          </div>
          <div className="col" style={{ flex: '1 1 520px', borderTop: '1px solid var(--rule)' }}>
            {CARTAS_FAQ.map((o) => (
              <details key={o.q} open={o.abrir}>
                <summary>{o.q}</summary>
                {o.a && <p className="cp">{o.a}</p>}
                {o.lista && (
                  <ul className="cp" style={{ margin: '0 0 24px', paddingLeft: 20 }}>
                    {o.lista.map((i) => <li key={i} style={{ marginBottom: 8 }}>{i}</li>)}
                  </ul>
                )}
                {o.passos && (
                  <ol className="cp" style={{ margin: '0 0 24px', paddingLeft: 20 }}>
                    {o.passos.map((p) => <li key={p.t} style={{ marginBottom: 8 }}><strong style={{ color: 'var(--ink)' }}>{p.t}.</strong> {p.d}</li>)}
                  </ol>
                )}
              </details>
            ))}
          </div>
        </div>

        <p className="cp" style={{ fontSize: 12, marginTop: 40, maxWidth: '62ch' }}>
          O valor de negociação de uma carta depende do mercado e das condições da cota. Não há garantia de ágio, prazo de venda ou rentabilidade. Toda transferência está sujeita à análise e aprovação da administradora. A negociação de cartas contempladas é feita entre clientes, com intermediação da Gaia Group; a HS Consórcios não comercializa cotas contempladas e atua na análise e aprovação da transferência.
        </p>
      </div>
    </section>
  );
}
