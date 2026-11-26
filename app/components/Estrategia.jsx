'use client';
import { useEffect, useRef, useState } from 'react';
import { track } from '@vercel/analytics';
import { WHATSAPP } from '../content';
import Contato from './Contato';

const GUIA = 'Olá, João! Ainda estou pesquisando e quero receber o guia "5 perguntas antes de assinar um consórcio".';

// "Qual é a sua estratégia?": três respostas, uma análise e o caminho indicado.
// O perfil vai sendo montado ao lado, a análise roda em etapas e o mapa de
// decisão acende o caminho escolhido. Atalhos de teclado: 1 a 4.
const PERGUNTAS = [
  {
    id: 'objetivo', rotulo: 'Objetivo',
    titulo: 'O que você quer conquistar?',
    opcoes: [
      { v: 'imovel', t: 'Imóvel' },
      { v: 'veiculo', t: 'Veículo' },
      { v: 'investimento', t: 'Fazer o patrimônio crescer' },
      { v: 'indefinido', t: 'Ainda estou decidindo' },
    ],
  },
  {
    id: 'entrada', rotulo: 'Entrada',
    titulo: 'Você tem um valor guardado para dar de entrada?',
    opcoes: [
      { v: 'sim', t: 'Sim, tenho' },
      { v: 'parte', t: 'Tenho uma parte' },
      { v: 'nao', t: 'Ainda não' },
    ],
  },
  {
    id: 'prazo', rotulo: 'Prazo',
    titulo: 'Quando você quer usar o crédito?',
    opcoes: [
      { v: 'agora', t: 'O quanto antes' },
      { v: 'medio', t: 'Nos próximos 2 anos' },
      { v: 'planejar', t: 'Sem pressa, quero planejar' },
    ],
  },
];

const ROTULO = {
  imovel: 'um imóvel', veiculo: 'um veículo', investimento: 'fazer o patrimônio crescer', indefinido: 'ainda estou decidindo',
  sim: 'tenho entrada', parte: 'tenho parte da entrada', nao: 'ainda não tenho entrada',
  agora: 'quero usar o crédito o quanto antes', medio: 'quero usar nos próximos 2 anos', planejar: 'sem pressa, quero planejar',
};
const CURTO = {
  imovel: 'Imóvel', veiculo: 'Veículo', investimento: 'Patrimônio', indefinido: 'A definir',
  sim: 'Disponível', parte: 'Parcial', nao: 'Sem entrada',
  agora: 'Imediato', medio: 'Até 2 anos', planejar: 'Planejado',
};

const CAMINHOS = [
  { k: 'carta', t: 'Carta contemplada' },
  { k: 'estrategico', t: 'Consórcio estratégico' },
  { k: 'conversa', t: 'Planejar antes' },
];
const NO = { carta: 'carta', estrategico: 'estrategico', patrimonio: 'estrategico', conversa: 'conversa', honesto: 'conversa' };

const ANALISE = ['Cruzando objetivo e prazo', 'Avaliando a sua entrada', 'Comparando os caminhos possíveis'];

function caminho({ objetivo, entrada, prazo }) {
  if (objetivo === 'indefinido') {
    return {
      chave: 'conversa',
      titulo: 'O seu primeiro passo é desenhar o objetivo.',
      texto: 'Antes de escolher crédito ou prazo, estruturamos o que você quer conquistar e quanto cabe no seu mês. É assim que o Método SPA® começa.',
      itens: ['Objetivo definido com números', 'Aporte que cabe com folga', 'Comparativo entre os caminhos possíveis'],
      link: { href: '/#metodo', t: 'Conhecer o Método SPA®' },
    };
  }
  if (prazo === 'agora' && entrada !== 'nao') {
    return {
      chave: 'carta',
      titulo: 'Para você, o caminho é a carta contemplada.',
      texto: 'Com entrada e pressa, você compra uma carta com o crédito já liberado e negocia como comprador à vista. O restante segue em aportes mensais no grupo.',
      itens: ['Crédito já liberado, sem esperar contemplação', 'Saldo devedor e custo total analisados antes', 'Transferência formal, aprovada pela HS'],
      link: { href: '/cartas-contempladas', t: 'Ver como funciona a carta contemplada' },
    };
  }
  if (prazo === 'agora' && entrada === 'nao') {
    return {
      chave: 'honesto',
      titulo: 'Para usar o crédito agora, sem entrada, o consórcio não é o caminho mais rápido.',
      texto: 'Prefiro dizer isso agora. Na conversa vemos se faz sentido começar um plano hoje, com estratégia de contemplação, ou se existe uma alternativa melhor para o seu momento.',
      itens: ['Sem promessa de data de contemplação', 'Plano só se o aporte couber com folga', 'Comparativo honesto com o financiamento'],
      link: { href: '/simulador', t: 'Fazer a conta do consórcio estratégico' },
    };
  }
  const invest = objetivo === 'investimento';
  return {
    chave: invest ? 'patrimonio' : 'estrategico',
    titulo: invest ? 'Para você, o caminho é o consórcio como estratégia patrimonial.' : 'Para você, o caminho é o consórcio estratégico.',
    texto: invest
      ? 'Cartas planejadas para formar patrimônio ao longo do tempo, com aporte que cabe no mês e estratégia de contemplação definida antes de assinar.'
      : `Você planeja ${objetivo === 'imovel' ? 'o imóvel' : 'o veículo'} com aporte que cabe no mês, sem juros de financiamento, e define a estratégia de contemplação antes de assinar.`,
    itens: entrada === 'nao'
      ? ['Aporte reduzido até a contemplação', 'Estratégia de contemplação com dados reais do grupo', 'Acompanhamento mês a mês']
      : ['O valor que você tem pode virar lance', 'Estratégia de contemplação com dados reais do grupo', 'Acompanhamento mês a mês'],
    link: { href: '/simulador', t: 'Fazer a conta agora' },
  };
}

// Texto que se escreve letra a letra
function Digita({ texto, vel = 28 }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(texto.length); return undefined; }
    setN(0);
    const t = setInterval(() => setN((v) => { if (v >= texto.length) { clearInterval(t); return v; } return v + 1; }), vel);
    return () => clearInterval(t);
  }, [texto, vel]);
  return <span aria-label={texto}><span aria-hidden="true">{texto.slice(0, n)}</span>{n < texto.length && <i className="cursor" aria-hidden="true" />}</span>;
}

export default function Estrategia() {
  const [passo, setPasso] = useState(0);
  const [resp, setResp] = useState({});
  const [escolhida, setEscolhida] = useState(null);
  const [fase, setFase] = useState('perguntas'); // perguntas | analise | resultado
  const [etapa, setEtapa] = useState(0);
  const secRef = useRef(null);
  const visivel = useRef(false);
  const r = fase === 'resultado' ? caminho(resp) : null;

  const escolher = (id, v) => {
    if (escolhida) return;
    setEscolhida(v);
    const novo = { ...resp, [id]: v };
    track('estrategia_resposta', { pergunta: id, resposta: v });
    setTimeout(() => {
      setResp(novo);
      setEscolhida(null);
      if (passo + 1 >= PERGUNTAS.length) {
        setPasso(PERGUNTAS.length);
        setFase('analise');
        setEtapa(0);
        track('estrategia_resultado', { caminho: caminho(novo).chave });
      } else setPasso(passo + 1);
    }, 420);
  };

  useEffect(() => {
    if (fase !== 'analise') return undefined;
    const rapido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ts = [setTimeout(() => setEtapa(1), rapido ? 0 : 550), setTimeout(() => setEtapa(2), rapido ? 0 : 1100), setTimeout(() => setEtapa(3), rapido ? 0 : 1650), setTimeout(() => setFase('resultado'), rapido ? 50 : 2100)];
    return () => ts.forEach(clearTimeout);
  }, [fase]);

  // no celular, leva a pessoa até a análise e o resultado
  const palcoRef = useRef(null);
  useEffect(() => {
    if (fase === 'perguntas' || window.innerWidth > 900 || !palcoRef.current) return;
    const top = palcoRef.current.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [fase]);

  // atalhos 1 a 4 quando o bloco está na tela
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { visivel.current = e.isIntersecting; }, { threshold: 0.4 });
    if (secRef.current) io.observe(secRef.current);
    const tecla = (e) => {
      if (!visivel.current || fase !== 'perguntas' || e.metaKey || e.ctrlKey || e.altKey) return;
      if (/input|textarea|select/i.test(document.activeElement?.tagName || '')) return;
      const q = PERGUNTAS[passo];
      const n = Number(e.key);
      if (q && n >= 1 && n <= q.opcoes.length) { e.preventDefault(); escolher(q.id, q.opcoes[n - 1].v); }
    };
    window.addEventListener('keydown', tecla);
    return () => { io.disconnect(); window.removeEventListener('keydown', tecla); };
  });

  const refazer = () => { setResp({}); setPasso(0); setFase('perguntas'); setEtapa(0); };
  const msg = (nome) => `Olá, João! Sou ${nome}. Fiz o diagnóstico rápido no site.\n\nObjetivo: ${ROTULO[resp.objetivo]}\nEntrada: ${ROTULO[resp.entrada]}\nPrazo: ${ROTULO[resp.prazo]}\n\nResultado: ${r.titulo}\nQuero conversar sobre a minha estratégia.`;
  const q = PERGUNTAS[passo];

  return (
    <section id="estrategia" className="estr" aria-labelledby="estr-titulo" ref={secRef}>
      <div className="wrap">
        <div className={`estr-caixa estr-fase-${fase}`}>
          <div className="estr-intro">
            <h2 id="estr-titulo" className="h2">Qual é a sua estratégia?</h2>
            <p className="cp">Responda três perguntas e veja o caminho que faz sentido para o seu momento. Leva menos de um minuto.</p>

            <div className="perfil" aria-label="Seu perfil">
              <p className="perfil-titulo"><span className="perfil-ponto" aria-hidden="true" />Seu perfil</p>
              {PERGUNTAS.map((p, i) => (
                <div key={p.id} className={`perfil-linha${resp[p.id] ? ' ok' : ''}${i === passo && fase === 'perguntas' ? ' atual' : ''}`}>
                  <span>{p.rotulo}</span>
                  <strong>{resp[p.id] ? <Digita texto={CURTO[resp[p.id]]} /> : (i === passo && fase === 'perguntas' ? <i className="cursor" aria-hidden="true" /> : '–')}</strong>
                </div>
              ))}
              <div className="perfil-barra" aria-hidden="true"><span style={{ width: `${(Object.keys(resp).length / PERGUNTAS.length) * 100}%` }} /></div>
            </div>
          </div>

          <div className="estr-palco" aria-live="polite" ref={palcoRef}>
            {fase === 'perguntas' && q && (
              <fieldset key={passo} className="estr-pergunta">
                <legend>
                  <span className="estr-contagem">Pergunta {passo + 1} de {PERGUNTAS.length}</span>
                  {q.titulo}
                </legend>
                <div className="estr-opcoes">
                  {q.opcoes.map((o, i) => (
                    <button key={o.v} type="button" style={{ '--i': i }}
                      className={`estr-opcao${escolhida === o.v ? ' escolhida' : ''}${escolhida && escolhida !== o.v ? ' apagada' : ''}`}
                      onClick={() => escolher(q.id, o.v)}>
                      <kbd aria-hidden="true">{i + 1}</kbd>
                      <span>{o.t}</span>
                      <svg className="estr-check" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 10.5l3.2 3L15 6.5" /></svg>
                    </button>
                  ))}
                </div>
                <div className="estr-rodape">
                  {passo > 0 ? <button type="button" className="estr-voltar" onClick={() => setPasso((p) => p - 1)}>Voltar</button> : <span />}
                  <span className="estr-dica" aria-hidden="true">Dica: use as teclas 1 a {q.opcoes.length}</span>
                </div>
              </fieldset>
            )}

            {fase === 'analise' && (
              <div className="estr-analise" role="status">
                <p className="estr-contagem">Analisando o seu perfil</p>
                <div className="scan" aria-hidden="true"><span /></div>
                <ul>
                  {ANALISE.map((a, i) => (
                    <li key={a} className={etapa > i ? 'feito' : etapa === i ? 'rodando' : ''}>
                      <span className="estr-status" aria-hidden="true" />{a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {fase === 'resultado' && r && (
              <div className={`estr-resultado estr-${r.chave}`}>
                <div className="mapa" aria-hidden="true">
                  <span className="mapa-origem">Seu perfil</span>
                  <div className="mapa-ramos">
                    {CAMINHOS.map((c) => (
                      <span key={c.k} className={`mapa-no${NO[r.chave] === c.k ? ' aceso' : ''}`}>{c.t}</span>
                    ))}
                  </div>
                </div>
                <p className="estr-contagem">O seu caminho</p>
                <h3><Digita texto={r.titulo} vel={18} /></h3>
                <p className="cp estr-surge" style={{ '--d': '0.5s' }}>{r.texto}</p>
                <ul>
                  {r.itens.map((i, k) => <li key={i} className="estr-surge" style={{ '--d': `${0.7 + k * 0.12}s` }}>{i}</li>)}
                </ul>
                <div className="estr-surge" style={{ '--d': '1.1s' }}>
                  <Contato id="diag" origem="diagnostico" rotulo="Conversar sobre a minha estratégia"
                    respostas={{ Objetivo: ROTULO[resp.objetivo], Entrada: ROTULO[resp.entrada], Prazo: ROTULO[resp.prazo], Resultado: r.titulo }}
                    link={(nome) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg(nome))}`}
                    aoEnviar={() => track('estrategia_whatsapp', { caminho: r.chave })} />
                  <div className="estr-acoes" style={{ marginTop: 18 }}>
                    <a className="estr-link" href={r.link.href}>{r.link.t}</a>
                    <a className="estr-link" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(GUIA)}`} target="_blank" rel="noopener noreferrer"
                      onClick={() => track('guia_whatsapp', { origem: 'diagnostico' })}>Ainda pesquisando? Receba o guia "5 perguntas antes de assinar"</a>
                  </div>
                </div>
                <button type="button" className="estr-voltar" onClick={refazer}>Refazer as respostas</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
