'use client';
import { useState } from 'react';
import { enviaLead, whatsValido } from './lead';

// Campo invisível para robôs: pessoas não veem nem preenchem.
export const CampoRobo = ({ id }) => (
  <div className="campo-robo" aria-hidden="true">
    <label htmlFor={`${id}-site`}>Não preencha</label>
    <input id={`${id}-site`} name="site" type="text" tabIndex={-1} autoComplete="off" />
  </div>
);

export const Consentimento = ({ id, erro }) => (
  <div className="consentimento">
    <input id={`${id}-consentimento`} name="consentimento" type="checkbox" aria-invalid={!!erro} aria-describedby={erro ? `${id}-erro-consentimento` : undefined} />
    <label htmlFor={`${id}-consentimento`}>
      Autorizo o contato da Gaia Group sobre o meu diagnóstico. <a href="/privacidade" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
    </label>
  </div>
);

// Valida nome, WhatsApp e consentimento. Devolve os erros ou null quando está tudo certo.
export function validaContato(f) {
  const erros = {};
  if (!f.nome.value.trim()) erros.nome = 'Escreva seu nome para eu saber com quem vou falar.';
  if (!whatsValido(f.whatsapp.value)) erros.whatsapp = 'Confira o número com DDD, por exemplo (16) 99999-9999.';
  if (!f.consentimento.checked) erros.consentimento = 'Marque a autorização para eu poder falar com você.';
  return Object.keys(erros).length ? erros : null;
}

// Formulário curto do resultado do diagnóstico: registra o lead e abre o WhatsApp no mesmo clique.
export default function Contato({ id, origem, respostas, link, rotulo, aoEnviar }) {
  const [erros, setErros] = useState({});

  function enviar(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const novos = validaContato(f);
    setErros(novos || {});
    if (novos) { f[Object.keys(novos)[0]].focus(); return; }
    const nome = f.nome.value.trim();
    enviaLead({ origem, nome, whatsapp: f.whatsapp.value, respostas, consentimento: true, site: f.site.value });
    if (aoEnviar) aoEnviar();
    window.open(link(nome), '_blank', 'noopener');
  }

  const desc = (k) => (erros[k] ? `${id}-erro-${k}` : undefined);
  const err = (k) => erros[k] && <p id={`${id}-erro-${k}`} className="error" role="alert">{erros[k]}</p>;

  return (
    <form noValidate onSubmit={enviar} className="contato">
      <div className="contato-campos">
        <div className="field">
          <label htmlFor={`${id}-nome`}>Seu nome</label>
          <input id={`${id}-nome`} name="nome" type="text" autoComplete="name" className="input" aria-invalid={!!erros.nome} aria-describedby={desc('nome')} />
          {err('nome')}
        </div>
        <div className="field">
          <label htmlFor={`${id}-whatsapp`}>Seu WhatsApp</label>
          <input id={`${id}-whatsapp`} name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="(16) 99999-9999" className="input" aria-invalid={!!erros.whatsapp} aria-describedby={desc('whatsapp')} />
          {err('whatsapp')}
        </div>
      </div>
      <Consentimento id={id} erro={erros.consentimento} />
      {err('consentimento')}
      <CampoRobo id={id} />
      <button type="submit" className="btn btn-pri">{rotulo}</button>
    </form>
  );
}
