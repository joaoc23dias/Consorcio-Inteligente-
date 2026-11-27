'use client';
import { useSearchParams } from 'next/navigation';
import { calcula, perfil, jogadas, brl, decodifica, FAIXA } from '../raiox';
import { WHATSAPP } from '../content';

// O Raio-X Patrimonial em 3 páginas A4. É o mesmo conteúdo do PDF que vai por e-mail;
// aqui aparece na tela e pode ser salvo em PDF pela impressão do navegador.
export default function RaioX() {
  const sp = useSearchParams();
  let d = null;
  try { d = decodifica(sp.get('d') || ''); } catch { d = null; }
  if (!d || !d.r || !d.nome) return <main className="rx-vazio"><p>Este Raio-X não foi encontrado. Responda as perguntas em <a href="/#estrategia">Qual é a sua estratégia?</a></p></main>;

  const { r, nome, serie } = d;
  const k = calcula(r);
  const [pNome, pTxt] = perfil(r);
  const { c, fin, cons, meia, bem } = k;
  const hoje = new Date().toLocaleDateString('pt-BR');
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá, João! Sou ${nome}, recebi o meu Raio-X Patrimonial (peça nº ${serie}) e quero conversar sobre a última página.`)}`;
  const selo = [0, 1, 2, 3, 4].map((i) => <circle key={i} cx="60" cy="60" r={14 + i * 10} fill="none" stroke="#C9A86A" strokeWidth="1" strokeDasharray="1.5 3.2" opacity={0.55 + i * 0.09} />);

  return (
    <main className="rx">
      <div className="rx-barra"><span>Raio-X Patrimonial de {nome}</span><button type="button" onClick={() => window.print()}>Salvar em PDF</button></div>

      <section className="rx-pag rx-capa">
        <div className="rx-cab"><span>Peça nº {serie}</span><span>Preparado em {hoje}</span></div>
        <svg className="rx-selo" viewBox="0 0 120 120" aria-hidden="true">{selo}<circle cx="60" cy="60" r="4" fill="#C9A86A" /></svg>
        <div className="rx-topo">
          <p className="rx-k">Raio-X Patrimonial</p>
          <h1>{nome}, este documento foi montado com as suas cinco respostas.</h1>
          <p className="rx-sub">Perfil patrimonial: <b>{pNome}</b>. {pTxt}</p>
        </div>
        <div className="rx-valor">
          <p className="rx-k">O valor que cabe no seu mês, e que ninguém te mostrou</p>
          <p className="rx-numero">{brl(c[0])}</p>
          <p className="rx-expl">é o crédito para {bem} que o seu fluxo de {FAIXA[r.mes]} já sustenta hoje, com folga, pela tabela da HS Consórcios.</p>
          <div className="rx-trio">
            <div><span>Aporte mensal</span><b>{brl(c[1], true)}</b></div>
            <div><span>Prazo</span><b>{c[3]} meses</b></div>
            <div><span>Renda mínima para liberar*</span><b>{brl(c[1] * 3)}</b></div>
          </div>
          <p className="rx-segredo"><b>* O detalhe que quase ninguém conta antes da assinatura:</b> a administradora só libera o crédito para quem tem renda líquida de pelo menos 3 vezes o aporte, podendo somar a do cônjuge.{meia && meia[0] > c[0] && <> E existe um jeito de chegar a uma carta de <b>{brl(meia[0])}</b> com o mesmo fluxo. Ele está na página 3.</>}</p>
        </div>
        <div className="rx-linha"><div><b>João Dias</b>Especialista em planejamento patrimonial</div><div><b>Gaia Group</b>Investimentos e Consórcios</div><div><b>HS Consórcios</b>Grupo Herval, autorizada pelo Banco Central</div></div>
        <div className="rx-rod"><span>Documento pessoal e informativo</span><span>1 de 3</span></div>
      </section>

      <section className="rx-pag">
        <div className="rx-cab"><span>Raio-X Patrimonial de {nome}</span><span>Peça nº {serie}</span></div>
        <p className="rx-cap">O caminho que a maioria escolhe sem fazer a conta</p>
        <h2>Para os mesmos {brl(c[0])}, o financiamento custa {brl(fin.total - cons.total)} a mais.</h2>
        <div className="rx-faixa">
          <div><h4>Financiamento bancário</h4><p><span>Entrada</span><b>{brl(fin.entrada)}</b></p><p><span>Por mês, {fin.meses} meses</span><b>{brl(fin.pmt, true)}</b></p><p><span>Total desembolsado</span><b>{brl(fin.total)}</b></p></div>
          <div className="nos"><h4>Consórcio estratégico</h4><p><span>Entrada</span><b>Nenhuma</b></p><p><span>Por mês, {c[3]} meses</span><b>{brl(c[1], true)}</b></p><p><span>Total desembolsado</span><b>{brl(cons.total)}</b></p></div>
        </div>
        <p className="rx-honesto">A conta honesta tem dois lados: o financiamento entrega o {bem} agora, e no consórcio o crédito chega na contemplação, sem data garantida. Por isso a pergunta certa é como chegar antes.</p>
        <p className="rx-cap" style={{ marginTop: '9mm' }}>A jogada para chegar antes</p>
        <div className="rx-jog">{jogadas(r, k).map(([t, x]) => <div key={t} className="rx-bloco"><h4>{t}</h4><p>{x}</p></div>)}</div>
        <p className="rx-fonte">Financiamento: {fin.fonte} Tabela Price, sem seguros e tarifas. Consórcio: estrutura do grupo de {Math.round(cons.pct * 100)}% sobre o crédito, sem o seguro cobrado após a contemplação{k.tipo === 'imovel' ? '; crédito e aporte reajustados juntos a cada 12 meses' : ''}. Prazos diferentes; valores nominais. A HS contempla todo mês pela Loteria Federal e abre de 3 a 4 oportunidades de lance por mês. Lances aumentam as chances, sem garantia de data.</p>
        <div className="rx-rod"><span>João Dias · Gaia Group</span><span>2 de 3</span></div>
      </section>

      <section className="rx-pag rx-conversa">
        <div className="rx-cab"><span>Raio-X Patrimonial de {nome}</span><span>Peça nº {serie}</span></div>
        <p className="rx-cap">A página mais importante</p>
        <h2>O que só se resolve numa conversa.</h2>
        <p className="rx-lead">Até aqui, os números saíram de uma tabela. Daqui em diante, eles dependem de coisas que um formulário não pergunta.</p>
        <div className="rx-qs">
          <div><b>O aporte depois da contemplação</b><span>Com 1/2 aporte, a diferença não paga pode ser diluída nos aportes restantes ou abatida do crédito. Qual das duas protege mais o seu fluxo depende da sua renda e do seu plano.</span></div>
          <div><b>O histórico de lances do seu grupo</b><span>Cada grupo tem um comportamento. Mostro os lances recentes e onde a sua estratégia se encaixa.</span></div>
          <div><b>O momento de dar o lance</b><span>Lance fixo ou Fidelidade, e em qual assembleia. A ordem certa muda o resultado.</span></div>
        </div>
        <p className="rx-convite">Esse é o diagnóstico patrimonial: uma conversa presencial em Ribeirão Preto, São José do Rio Pardo ou Mococa, ou por vídeo. Você sai com o plano desenhado, decidindo seguir ou não.</p>
        <a className="rx-cta" href={wa} target="_blank" rel="noopener noreferrer">Agendar o meu diagnóstico</a>
        <div className="rx-assina"><b>João Dias</b>Especialista em planejamento patrimonial · Gaia Group · Método SPA®</div>
        <p className="rx-legal">Documento informativo, gerado a partir das respostas no site e da tabela de referência da HS Consórcios, sem caráter de proposta ou oferta. Consórcio não é investimento e não tem data de contemplação garantida. A liberação do crédito depende da análise cadastral e de renda da administradora (Regulamento HS, item 60.1). Valores sujeitos a reajuste e confirmados no atendimento. Você recebeu este documento porque o solicitou; para não receber mais contatos, basta responder ao e-mail.</p>
        <div className="rx-rod"><span>Peça nº {serie}</span><span>3 de 3</span></div>
      </section>
    </main>
  );
}
