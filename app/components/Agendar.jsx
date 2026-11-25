'use client';
import { useState } from 'react';
import { track } from '@vercel/analytics';
import { WHATSAPP } from '../content';

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
    const whatsapp = form.whatsapp.value.replace(/\D/g, '');
    const cidade = form.cidade.value.trim();
    const novos = {};
    if (!nome) novos.nome = 'Escreva seu nome para eu saber com quem vou falar.';
    if (whatsapp.length < 10) novos.whatsapp = 'Confira o número com DDD, por exemplo (16) 99999-9999.';
    setErros(novos);
    if (Object.keys(novos).length) {
      form[Object.keys(novos)[0]].focus();
      return;
    }
    const texto = `Olá, João! Sou ${nome}${cidade ? `, de ${cidade}` : ''}. Quero conquistar: ${objetivo}. Melhor horário para a ligação: ${horario.toLowerCase()}. Meu WhatsApp: ${whatsapp}.`;
    track('formulario_enviado', { objetivo });
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  }

  return (
    <section id="diagnostico" className="sec alt" aria-labelledby="agendar-titulo">
      <div className="wrap row" style={{ gap: 72, alignItems: 'center' }}>
        <div className="col" style={{ flex: '1 1 420px' }}>
          <h2 id="agendar-titulo" className="h2">O dia mais importante da sua conquista é o dia em que você começa.</h2>
          <p className="lead">
            Deixe seu contato e escolha o horário. Eu te ligo por 5 minutos para entender o seu objetivo e marcar o diagnóstico patrimonial.
          </p>
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
          <button type="submit" className="btn btn-pri" style={{ marginTop: 8 }}>Agendar pelo WhatsApp</button>
          <p style={{ fontSize: 12, color: 'var(--ink-muted)', margin: 0 }}>
            Seus dados ficam com a Gaia Group e são usados só para o seu atendimento (LGPD).
          </p>
        </form>
      </div>
    </section>
  );
}
