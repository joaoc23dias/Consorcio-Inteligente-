'use client';
import { useEffect, useState } from 'react';
import { track } from '@vercel/analytics';
import { WHATSAPP } from '../content';

export default function BarraMobile() {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const hero = document.querySelector('.hero-ctas');
    const diag = document.getElementById('diagnostico');
    let passouHero = false, noDiag = false;
    const atualizar = () => setVisivel(passouHero && !noDiag);
    const io1 = new IntersectionObserver(([e]) => { passouHero = !e.isIntersecting && e.boundingClientRect.top < 0; atualizar(); });
    const io2 = new IntersectionObserver(([e]) => { noDiag = e.isIntersecting; atualizar(); });
    if (hero) io1.observe(hero);
    if (diag) io2.observe(diag);
    return () => { io1.disconnect(); io2.disconnect(); };
  }, []);

  const msg = 'Olá, João! Vi o seu site e quero conversar sobre um diagnóstico patrimonial.';
  return (
    <div className={`barra-mobile${visivel ? ' on' : ''}`} aria-hidden={!visivel}>
      <a href="#diagnostico" className="btn btn-pri" tabIndex={visivel ? 0 : -1} onClick={() => track('barra_mobile', { acao: 'diagnostico' })}>Agendar diagnóstico</a>
      <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`} target="_blank" rel="noopener noreferrer" className="btn btn-sec barra-wa" aria-label="Conversar no WhatsApp" tabIndex={visivel ? 0 : -1} onClick={() => track('barra_mobile', { acao: 'whatsapp' })}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.3A8.5 8.5 0 1 1 20.5 11.6Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><path d="M8.8 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.1.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .6-.5.8-.5.3-1.4.5-2.6 0-2.1-.9-3.8-2.6-4.7-4.7-.4-1.1-.2-2 0-2.5Z" fill="currentColor"/></svg>
      </a>
    </div>
  );
}
