'use client';
import { track } from '@vercel/analytics';
import { WHATSAPP } from '../content';

const MSG = 'Olá, João! Ainda estou pesquisando e quero receber o guia "5 perguntas antes de assinar um consórcio".';

export default function Guia() {
  return (
    <section className="sec" aria-labelledby="guia-titulo" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="guia">
          <div>
            <h2 id="guia-titulo" className="h3" style={{ fontSize: 32, margin: '0 0 12px' }}>5 perguntas para fazer antes de assinar qualquer consórcio.</h2>
            <p className="cp">Ainda pesquisando? Um guia curto, direto e sem propaganda, para você comparar propostas com segurança, inclusive as de outras administradoras.</p>
          </div>
          <div>
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`} target="_blank" rel="noopener noreferrer"
              className="btn btn-sec" style={{ width: '100%' }} onClick={() => track('guia_whatsapp')}>
              Receber o guia no WhatsApp
            </a>
            <p className="cp" style={{ fontSize: 13, marginTop: 10 }}>Sem custo. Você recebe o PDF na conversa, sem compromisso.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
