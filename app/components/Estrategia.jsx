'use client';
import { useState } from 'react';
import { track } from '@vercel/analytics';
import { WHATSAPP } from '../content';

// "Qual é a sua estratégia?": três respostas e o site indica o caminho.
// Filtra o lead antes da conversa e já abre o WhatsApp com o resumo.
const PERGUNTAS = [
  {
    id: 'objetivo',
    titulo: 'O que você quer conquistar?',
    opcoes: [
      { v: 'imovel', t: 'Imóvel' },
      { v: 'veiculo', t: 'Veículo' },
      { v: 'investimento', t: 'Fazer o patrimônio crescer' },
      { v: 'indefinido', t: 'Ainda estou decidindo' },
    ],
  },
  {
    id: 'entrada',
    titulo: 'Você tem um valor guardado para dar de entrada?',
    opcoes: [
      { v: 'sim', t: 'Sim, tenho' },
      { v: 'parte', t: 'Tenho uma parte' },
      { v: 'nao', t: 'Ainda não' },
    ],
  },
  {
    id: 'prazo',
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

function caminho({ objetivo, entrada, prazo }) {
  if (objetivo === 'indefinido') {
    return {
      chave: 'conversa',
      titulo: 'O seu primeiro passo é desenhar o objetivo.',
      texto: 'Antes de escolher crédito ou prazo, estruturamos o que você quer conquistar e quanto cabe no seu mês. É assim que o Método SPA® começa.',
      itens: ['Objetivo definido com números', 'Aporte que cabe com folga', 'Comparativo entre os caminhos possíveis'],
      link: { href: '#metodo', t: 'Conhecer o Método SPA®' },
    };
  }
  if (prazo === 'agora' && entrada !== 'nao') {
    return {
      chave: 'carta',
      titulo: 'Para você, o caminho é a carta contemplada.',
      texto: 'Com entrada e pressa, você compra uma carta com o crédito já liberado e negocia como comprador à vista. O restante segue em aportes mensais no grupo.',
      itens: ['Crédito já liberado, sem esperar contemplação', 'Saldo devedor e custo total analisados antes', 'Transferência formal, aprovada pela HS'],
      link: { href: '#cartas', t: 'Ver como funciona a carta contemplada' },
    };
  }
  if (prazo === 'agora' && entrada === 'nao') {
    return {
      chave: 'honesto',
      titulo: 'Para usar o crédito agora, sem entrada, o consórcio não é o caminho mais rápido.',
      texto: 'Prefiro dizer isso agora. Na conversa vemos se faz sentido começar um plano hoje, com estratégia de contemplação, ou se existe uma alternativa melhor para o seu momento.',
      itens: ['Sem promessa de data de contemplação', 'Plano só se o aporte couber com folga', 'Comparativo honesto com o financiamento'],
      link: { href: '#conta', t: 'Fazer a conta do consórcio estratégico' },
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
    link: { href: '#conta', t: 'Fazer a conta agora' },
  };
}

export default function Estrategia() {
  const [passo, setPasso] = useState(0);
  const [resp, setResp] = useState({});
  const fim = passo >= PERGUNTAS.length;
  const r = fim ? caminho(resp) : null;

  const escolher = (id, v) => {
    const novo = { ...resp, [id]: v };
    setResp(novo);
    setPasso((p) => p + 1);
    track('estrategia_resposta', { pergunta: id, resposta: v });
    if (passo + 1 >= PERGUNTAS.length) track('estrategia_resultado', { caminho: caminho(novo).chave });
  };
  const refazer = () => { setResp({}); setPasso(0); };

  const msg = r ? `Olá, João! Fiz o diagnóstico rápido no site.\n\nObjetivo: ${ROTULO[resp.objetivo]}\nEntrada: ${ROTULO[resp.entrada]}\nPrazo: ${ROTULO[resp.prazo]}\n\nResultado: ${r.titulo}\nQuero conversar sobre a minha estratégia.` : '';

  return (
    <section id="estrategia" className="estr" aria-labelledby="estr-titulo">
      <div className="wrap">
        <div className="estr-caixa">
          <div className="estr-intro">
            <h2 id="estr-titulo" className="h2">Qual é a sua estratégia?</h2>
            <p className="cp">Responda três perguntas e veja o caminho que faz sentido para o seu momento. Leva menos de um minuto.</p>
            <div className="estr-progresso" aria-hidden="true">
              {PERGUNTAS.map((p, i) => <span key={p.id} className={i < passo ? 'feito' : i === passo ? 'atual' : ''} />)}
            </div>
          </div>

          <div className="estr-palco" aria-live="polite">
            {!fim && (
              <fieldset key={passo} className="estr-pergunta">
                <legend>
                  <span className="estr-contagem">Pergunta {passo + 1} de {PERGUNTAS.length}</span>
                  {PERGUNTAS[passo].titulo}
                </legend>
                <div className="estr-opcoes">
                  {PERGUNTAS[passo].opcoes.map((o) => (
                    <button key={o.v} type="button" className="estr-opcao" onClick={() => escolher(PERGUNTAS[passo].id, o.v)}>
                      {o.t}
                    </button>
                  ))}
                </div>
                {passo > 0 && <button type="button" className="estr-voltar" onClick={() => setPasso((p) => p - 1)}>Voltar</button>}
              </fieldset>
            )}

            {fim && (
              <div key="resultado" className={`estr-resultado estr-${r.chave}`}>
                <p className="estr-contagem">O seu caminho</p>
                <h3>{r.titulo}</h3>
                <p className="cp">{r.texto}</p>
                <ul>
                  {r.itens.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <div className="estr-acoes">
                  <a className="btn btn-pri" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`} target="_blank" rel="noopener noreferrer"
                    onClick={() => track('estrategia_whatsapp', { caminho: r.chave })}>
                    Conversar sobre a minha estratégia
                  </a>
                  <a className="estr-link" href={r.link.href}>{r.link.t}</a>
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
