'use client';
import { useEffect } from 'react';

// Profundidade no topo: o fundo e a foto reagem ao mouse e à rolagem em
// velocidades diferentes, criando camadas. Desligado para quem prefere menos movimento.
export default function MesaFx() {
  useEffect(() => {
    const mesa = document.querySelector('.mesa');
    if (!mesa || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf = 0;
    let mx = 0; let my = 0; let tx = 0; let ty = 0; let sy = 0;
    const fino = window.matchMedia('(pointer: fine)').matches;
    const mover = (e) => {
      const r = mesa.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    };
    const rolar = () => { sy = Math.min(window.scrollY, mesa.offsetHeight); };
    const loop = () => {
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      mesa.style.setProperty('--mx', mx.toFixed(4));
      mesa.style.setProperty('--my', my.toFixed(4));
      mesa.style.setProperty('--sy', `${sy}px`);
      raf = requestAnimationFrame(loop);
    };
    if (fino) mesa.addEventListener('pointermove', mover);
    window.addEventListener('scroll', rolar, { passive: true });
    const io = new IntersectionObserver(([e]) => {
      cancelAnimationFrame(raf);
      if (e.isIntersecting) raf = requestAnimationFrame(loop);
    });
    io.observe(mesa);
    return () => { cancelAnimationFrame(raf); io.disconnect(); mesa.removeEventListener('pointermove', mover); window.removeEventListener('scroll', rolar); };
  }, []);
  return null;
}
