'use client';
import { useEffect } from 'react';
import { track } from '@vercel/analytics';

// Animações de entrada ao rolar (desligadas para quem prefere menos movimento)
// e registro de cliques nos botões de agendamento.
export default function Melhorias() {
  useEffect(() => {
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let observer;
    if (!reduz && 'IntersectionObserver' in window) {
      const alvos = document.querySelectorAll('main section > .wrap');
      document.documentElement.classList.add('reveal-on');
      observer = new IntersectionObserver(
        (entradas) => {
          entradas.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      alvos.forEach((el, idx) => (idx === 0 ? el.classList.add('in') : observer.observe(el)));
    }

    const clique = (ev) => {
      const link = ev.target.closest('a[href$="#diagnostico"]');
      if (link) {
        const secao = link.closest('section, header');
        track('agendar_clique', { origem: secao?.id || secao?.tagName.toLowerCase() || 'pagina' });
      }
    };
    document.addEventListener('click', clique);
    return () => {
      document.removeEventListener('click', clique);
      if (observer) observer.disconnect();
    };
  }, []);
  return null;
}
