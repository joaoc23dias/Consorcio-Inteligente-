'use client';
import { useState } from 'react';
import { track } from '@vercel/analytics';
import { WHATSAPP, AVALIACOES_GOOGLE, FAQ } from '../content';
import { enviaLead, whatsValido } from './lead';
import { CampoRobo, Consentimento } from './Contato';

// As 5 perguntas do início (as demais ficam em /duvidas).
const PERGUNTAS_INICIO = [
  'Quando o consórcio não faz sentido?',
  'Em quanto tempo sou contemplado?',
  'Consórcio tem juros?',
  'Qual a relação entre João Dias, a Gaia Group e a HS?',
  'Quanto custa o diagnóstico patrimonial?',
];

const LEVA = [
  'Um plano por escrito com crédito, aporte e prazo',
  'O aporte que cabe no seu mês, com folga',
  'A estratégia de contemplação com os dados reais do grupo',
  'O comparativo com o financiamento para o seu caso',
];

const OBJETIVOS = ['Imóvel', 'Veículo', 'Investimento'];
const HORARIOS = ['Amanhã às 9h', 'Amanhã às 14h'];

export default function Agendar() {
  const [objetivo, setObjetivo] = useState(OBJETIVOS[0]);
  const [horario, setHorario] = useState(HORARIOS[0]);
  const [erros, setErros] = useState({});

  function enviar(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = form.nome.value.trim();
    const whatsapp = form.whatsapp.value.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '');
    const cidade = form.cidade.value.trim();
    const novos = {};
    if (!nome) novos.nome = 'Escreva seu nome para eu saber com quem vou falar.';
    if (!whatsValido(whatsapp)) novos.whatsapp = 'Confira o número com DDD, por exemplo (16) 99999-9999.';
    if (!form.consentimento.checked) novos.consentimento = 'Marque a autorização para eu poder falar com você.';
    setErros(novos);
    if (Object.keys(novos).length) {
      form[Object.keys(novos)[0]].focus();
      return;
    }
    const texto = `Olá, João! Sou ${nome}${cidade ? `, de ${cidade}` : ''}. Quero conquistar: ${objetivo}. Melhor horário para a ligação: ${horario.toLowerCase()}. Meu WhatsApp: ${whatsapp}.`;
    enviaLead({ origem: 'agendamento', nome, whatsapp, cidade, respostas: { Objetivo: objetivo, Horário: horario }, consentimento: true, site: form.site.value });
    track('formulario_enviado', { objetivo });
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  }

  return (
    <section id="diagnostico" className="sec painel" aria-labelledby="agendar-titulo">
      <div className="wrap row" style={{ gap: 72, alignItems: 'center' }}>
        <div className="col" style={{ flex: '1 1 420px' }}>
          <h2 id="agendar-titulo" className="h2">O seu lugar nessa mesa está reservado.</h2>
          <p className="lead">
            No diagnóstico você sai com o seu cenário claro, os números na mesa e o caminho que faz sentido para o seu patrimônio.
          </p>
          <h3 className="h3 agendar-sub">Agende o seu diagnóstico patrimonial.</h3>
          <p className="cp">
            Deixe seu contato e escolha o horário. Eu te ligo por 5 minutos para entender o seu objetivo e marcar o diagnóstico patrimonial.
          </p>
          <p className="quem-papel" style={{ margin: '36px 0 12px' }}>O que você leva do diagnóstico</p>
          <ul className="leva">
            {LEVA.map((x) => <li key={x}>{x}</li>)}
          </ul>
          <figure className="prova-form">
            <blockquote>“{AVALIACOES_GOOGLE[1].texto.split('. ').slice(0, 2).join('. ')}.”</blockquote>
            <figcaption>{AVALIACOES_GOOGLE[1].nome} · avaliação no Google · +2.000 famílias atendidas pela Gaia Group</figcaption>
          </figure>
        </div>
        <form
          noValidate
          onSubmit={enviar}
          className="col pad-box"
          style={{ flex: '1 1 400px', background: 'var(--surface)', border: '1px solid var(--rule)', color: 'var(--ink)', padding: 40, display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <div className="field">
            <label htmlFor="nome">Seu nome</label>
            <input id="nome" name="nome" type="text" autoComplete="name" placeholder="Ex.: Ana Souza…" className="input"
              aria-invalid={!!erros.nome} aria-describedby={erros.nome ? 'erro-nome' : undefined} />
            {erros.nome && <p id="erro-nome" className="error" role="alert">{erros.nome}</p>}
          </div>
          <div className="field">
            <label htmlFor="whatsapp">Seu WhatsApp</label>
            <input id="whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="(16) 99999-9999…" className="input"
              aria-invalid={!!erros.whatsapp} aria-describedby={erros.whatsapp ? 'erro-whatsapp' : undefined} />
            {erros.whatsapp && <p id="erro-whatsapp" className="error" role="alert">{erros.whatsapp}</p>}
          </div>
          <div className="field">
            <label htmlFor="cidade">Sua cidade</label>
            <input id="cidade" name="cidade" type="text" autoComplete="address-level2" placeholder="Ex.: Mococa…" className="input" />
          </div>
          <fieldset className="field">
            <legend style={{ marginBottom: 8 }}>O que você quer conquistar</legend>
            <div className="row" style={{ gap: 8 }}>
              {OBJETIVOS.map((o) => (
                <button key={o} type="button" className="chip" aria-pressed={objetivo === o} onClick={() => setObjetivo(o)}>{o}</button>
              ))}
            </div>
          </fieldset>
          <fieldset className="field">
            <legend style={{ marginBottom: 8 }}>Melhor horário para a ligação</legend>
            <div className="row" style={{ gap: 8 }}>
              {HORARIOS.map((h) => (
                <button key={h} type="button" className="chip" aria-pressed={horario === h} onClick={() => setHorario(h)}>{h}</button>
              ))}
            </div>
          </fieldset>
          <Consentimento id="agendar" erro={erros.consentimento} />
          {erros.consentimento && <p id="agendar-erro-consentimento" className="error" role="alert">{erros.consentimento}</p>}
          <CampoRobo id="agendar" />
          <button type="submit" className="btn btn-pri" style={{ marginTop: 8 }}>Agendar pelo WhatsApp</button>
        </form>
      </div>
      <div className="wrap duvidas-inicio">
        <h3 className="h3">Dúvidas frequentes</h3>
        <div>
          {PERGUNTAS_INICIO.map((q) => FAQ.find((f) => f.q === q)).filter(Boolean).map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              {f.lista ? (
                <ul className="cp" style={{ margin: '0 0 24px', paddingLeft: 20 }}>
                  {f.lista.map((i) => <li key={i} style={{ marginBottom: 8 }}>{i}</li>)}
                </ul>
              ) : <p className="cp">{f.a}</p>}
            </details>
          ))}
          <a href="/duvidas" className="mesa-link duvidas-todas">Ver todas as dúvidas</a>
        </div>
      </div>
    </section>
  );
}
