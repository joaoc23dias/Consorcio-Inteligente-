'use client';
import { useEffect, useState } from 'react';
import { track } from '@vercel/analytics';
import { WHATSAPP } from '../content';
import { IconeWhats } from './WhatsFlutuante';

export default function BarraMobile() {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const hero = document.querySelector('.mesa-ctas');
    const diag = document.getElementById('diagnostico');
    let passouHero = false, noDiag = false;
    const atualizar = () => setVisivel(passouHero && !noDiag);
    const io1 = new IntersectionObserver(([e]) => { passouHero = !e.isIntersecting && e.boundingClientRect.top < 0; atualizar(); });
    const io2 = new IntersectionObserver(([e]) => { noDiag = e.isIntersecting; atualizar(); });
    if (hero) io1.observe(hero); else { passouHero = true; atualizar(); }
    if (diag) io2.observe(diag);
    return () => { io1.disconnect(); io2.disconnect(); };
  }, []);

  const msg = 'Olá, João! Vi o seu site e quero conversar sobre um diagnóstico patrimonial.';
  return (
    <div className={`barra-mobile${visivel ? ' on' : ''}`} aria-hidden={!visivel}>
      <a href="/#diagnostico" className="btn btn-pri" tabIndex={visivel ? 0 : -1} onClick={() => track('barra_mobile', { acao: 'diagnostico' })}>Agendar diagnóstico</a>
      <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`} target="_blank" rel="noopener noreferrer" className="btn barra-wa" aria-label="Conversar no WhatsApp" tabIndex={visivel ? 0 : -1} onClick={() => track('barra_mobile', { acao: 'whatsapp' })}>
        <IconeWhats size={24} />
      </a>
    </div>
  );
}
