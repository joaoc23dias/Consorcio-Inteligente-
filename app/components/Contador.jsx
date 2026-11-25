'use client';
import { useEffect, useRef, useState } from 'react';

// Anima o primeiro número do texto (ex.: "+410 mil", "R$ 11 bi", "+2.600") quando entra na tela.
export default function Contador({ texto, duracao = 1600 }) {
  const m = texto.match(/(\d{1,3}(?:\.\d{3})*(?:,\d+)?|\d+)/);
  const ref = useRef(null);
  const [atual, setAtual] = useState(texto);

  useEffect(() => {
    if (!m || !ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const alvo = Number(m[1].replace(/\./g, '').replace(',', '.'));
    const casas = m[1].includes(',') ? m[1].split(',')[1].length : 0;
    const milhar = m[1].includes('.');
    const fmt = (v) => v.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas, useGrouping: milhar });
    setAtual(texto.replace(m[1], fmt(0)));
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const passo = (t) => {
        const p = Math.min(1, (t - t0) / duracao);
        const ease = 1 - Math.pow(1 - p, 4);
        setAtual(texto.replace(m[1], fmt(alvo * ease)));
        if (p < 1) raf = requestAnimationFrame(passo);
      };
      raf = requestAnimationFrame(passo);
    }, { threshold: 0.6 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texto]);

  return <span ref={ref} aria-label={texto}><span aria-hidden="true">{atual}</span></span>;
}
