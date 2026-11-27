'use client';
import { useEffect, useRef, useState } from 'react';
import { track } from '@vercel/analytics';
import { TABELA_HS, TABELA_REF, WHATSAPP } from '../content';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const brl2 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });

const TIPOS = [
  { id: 'imovel', label: 'Imóvel', inicial: 6 },
  { id: 'veiculo', label: 'Veículo', inicial: 4 },
];

// As mesmas peças da mesa da home: o bem escolhido pousa sobre o tampo de vidro do resultado.
const BENS = {
  imovel: { nome: 'casa', w: 334, h: 289 },
  veiculo: { nome: 'carro', w: 341, h: 214 },
};

// Número que corre até o valor novo, em vez de saltar.
function useValorCorrendo(alvo) {
  const [v, setV] = useState(alvo);
  const atual = useRef(alvo);
  useEffect(() => {
    const calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const de = atual.current;
    if (calmo || de === alvo) { atual.current = alvo; setV(alvo); return; }
    let raf; const t0 = performance.now(); const DUR = 520;
    const passo = (t) => {
      const k = Math.min(1, (t - t0) / DUR);
      const e = 1 - Math.pow(1 - k, 3);
      const n = de + (alvo - de) * e;
      atual.current = n; setV(n);
      if (k < 1) raf = requestAnimationFrame(passo);
    };
    raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
  }, [alvo]);
  return v;
}

export default function Simulador() {
  const [tipo, setTipo] = useState('imovel');
  const [idx, setIdx] = useState(6);
  const [pulso, setPulso] = useState(0);
  useEffect(() => {
    const ouvir = (e) => { setTipo(e.detail.tipo); setIdx(e.detail.idx); };
    window.addEventListener('sim:set', ouvir);
    return () => window.removeEventListener('sim:set', ouvir);
  }, []);
  const tabela = TABELA_HS[tipo];
  const i = Math.min(idx, tabela.length - 1);
  const [credito, integral, meio, prazo] = tabela[i];
  const nomeTipo = tipo === 'imovel' ? 'imóvel' : 'veículo';
  const meioVisivel = useValorCorrendo(meio);
  const bem = BENS[tipo];

  // a luz percorre o friso a cada mudança da conta
  useEffect(() => { setPulso((p) => p + 1); }, [tipo, i]);

  const escolherTipo = (t) => {
    setTipo(t.id);
    setIdx(t.inicial);
  };

  const texto = `Olá, João! Fiz a conta no seu site: carta de ${brl.format(credito)} para ${nomeTipo}, ${prazo} meses, meio aporte de ${brl2.format(meio)} até a contemplação. Quero entender a melhor estratégia para o meu caso.`;
  const linkWhats = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
  const p = (i / (tabela.length - 1)) * 100;

  const etapas = [
    { t: 'Até a contemplação', v: `${brl2.format(meio)}/mês`, d: 'Meio aporte, que respeita o seu fluxo.' },
    { t: 'Contemplação', v: brl.format(credito), d: 'Crédito liberado em assembleia, pela contemplação do grupo ou pela estratégia de lance.' },
    { t: 'Depois', v: 'Você escolhe', d: 'A diferença do meio aporte é diluída nos aportes restantes ou abatida do crédito. Definimos juntos no diagnóstico.' },
  ];

  return (
    <section id="conta" className="sim-topo" aria-labelledby="conta-titulo">
      <div className="wrap sim-grade">
        <div className="sim-ctrl">
          <nav aria-label="Você está em" className="trilha trilha-clara">
            <a href="/">Início</a> <span aria-hidden="true">/</span> <span aria-current="page">Simulador</span>
          </nav>
          <h1 id="conta-titulo" className="mesa-h1 sim-h1">A conta da sua próxima conquista.</h1>
          <p className="sim-lead">Escolha o bem e o valor do crédito. O aporte vem das tabelas da HS Consórcios.</p>

          <div role="group" aria-label="Tipo de bem" className="sim-chips">
            {TIPOS.map((t) => (
              <button key={t.id} type="button" className="chip sim-chip" aria-pressed={tipo === t.id} onClick={() => escolherTipo(t)}>
                {t.label}
              </button>
            ))}
          </div>

          <label htmlFor="credito" className="sim-label">Valor do crédito</label>
          <output htmlFor="credito" className="num sim-credito">{brl.format(credito)}</output>
          <input
            id="credito"
            type="range"
            className="range sim-range"
            style={{ '--p': `${p}%` }}
            min={0}
            max={tabela.length - 1}
            step={1}
            value={i}
            onChange={(e) => setIdx(Number(e.target.value))}
            aria-valuetext={brl.format(credito)}
          />
          <div className="sim-limites num">
            <span>{brl.format(tabela[0][0])}</span>
            <span>{brl.format(tabela[tabela.length - 1][0])}</span>
          </div>
        </div>

        <div className="sim-res" aria-live="polite">
          <div className="sim-palco" aria-hidden="true">
            <div key={tipo} className="sim-bem" style={{ aspectRatio: `${bem.w} / ${bem.h}`, width: tipo === 'imovel' ? '58%' : '62%' }}>
              <img src={`/pouso2/${bem.nome}-reflexo.webp`} alt="" />
              <img src={`/pouso2/${bem.nome}.webp`} alt="" />
            </div>
            <span key={`f${pulso}`} className="sim-friso" />
          </div>
          <div className="sim-res-corpo">
            <div className="sim-label">Aporte reduzido até a contemplação</div>
            <div className="num sim-valor" aria-hidden="true">{brl2.format(meioVisivel)}</div>
            <span className="sr-only">{brl2.format(meio)} por mês até a contemplação</span>
            <dl className="num sim-dados">
              <div><dt>Crédito</dt><dd>{brl.format(credito)}</dd></div>
              <div><dt>Prazo</dt><dd>{prazo} meses</dd></div>
              <div><dt>Aporte integral de referência</dt><dd>{brl2.format(integral)}</dd></div>
              {tipo === 'imovel' && <div><dt>Estrutura operacional</dt><dd>22% no prazo</dd></div>}
            </dl>
            <p className="sim-nota">Estimativa para você se situar. O valor final, o aporte após a contemplação e a estratégia de contemplação vêm no diagnóstico patrimonial.</p>
            <div className="mesa-ctas sim-ctas">
              <a href="/#diagnostico" className="btn btn-pri" onClick={() => track('simulacao_diagnostico', { tipo, credito })}>Levar esta conta para o diagnóstico</a>
              <a href={linkWhats} target="_blank" rel="noopener noreferrer" className="mesa-link" onClick={() => track('simulacao_whatsapp', { tipo, credito })}>Conversar no WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="sim-tl">
          <ol key={`t${pulso}`} className="sim-linha" aria-label="Como o plano anda">
            {etapas.map((e, n) => (
              <li key={e.t} style={{ '--n': n }}>
                <div className="sim-label">{e.t}</div>
                <div className="num sim-etapa-v">{e.v}</div>
                <p className="sim-etapa-d">{e.d}</p>
              </li>
            ))}
          </ol>
          <p className="sim-ref">{TABELA_REF}. Valores sujeitos ao reajuste anual do grupo.</p>
        </div>
      </div>
    </section>
  );
}

// Fechamento: a conta rápida vira plano no diagnóstico.
export function SimFim() {
  return (
    <section className="cartas-fim" aria-labelledby="sim-fim-titulo">
      <div className="wrap cartas-fim-grade">
        <h2 id="sim-fim-titulo" className="cartas-fim-h">Essa foi a conta rápida. No diagnóstico, ela vira o seu plano.</h2>
        <div>
          <p className="cartas-fim-texto">Aporte que cabe no seu fluxo, prazo, estratégia de contemplação e o comparativo com o financiamento, com os seus números.</p>
          <div className="mesa-ctas">
            <a href="/#diagnostico" className="btn btn-pri" onClick={() => track('simulacao_fim', {})}>Agendar meu diagnóstico</a>
            <a href="/#metodo" className="mesa-link">Conhecer o Método SPA®</a>
          </div>
        </div>
      </div>
    </section>
  );
}
