'use client';
import { useEffect, useRef, useState } from 'react';

// Ilustração viva de um grupo de consórcio: cada ponto é uma cota.
// A cada assembleia algumas cotas são contempladas. Uma delas é "o seu plano",
// com estratégia de contemplação definida no diagnóstico.
const COLS = 15;
const ROWS = 18;
const TOTAL = COLS * ROWS;
const SEU = 7 * COLS + 2; // posição do "seu plano"

export default function GrupoVivo() {
  const [ativos, setAtivos] = useState(() => new Set());
  const [assembleia, setAssembleia] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const s = new Set();
      for (let i = 0; i < 28; i++) s.add((i * 37) % TOTAL);
      s.delete(SEU);
      setAtivos(s);
      setAssembleia(14);
      return undefined;
    }
    let visivel = true;
    const io = new IntersectionObserver(([e]) => { visivel = e.isIntersecting; });
    if (ref.current) io.observe(ref.current);
    const t = setInterval(() => {
      if (!visivel || document.hidden) return;
      setAssembleia((a) => (a >= 60 ? 1 : a + 1));
      setAtivos((prev) => {
        if (prev.size > 110) return new Set();
        const n = new Set(prev);
        for (let k = 0; k < 2; k++) {
          let i = Math.floor(Math.random() * TOTAL);
          if (i !== SEU) n.add(i);
        }
        return n;
      });
    }, 1100);
    return () => { clearInterval(t); io.disconnect(); };
  }, []);

  const pontos = [];
  for (let i = 0; i < TOTAL; i++) {
    const c = i % COLS;
    const r = Math.floor(i / COLS);
    const x = 14 + c * 26;
    const y = 14 + r * 26;
    pontos.push(
      <circle key={i} cx={x} cy={y} r={i === SEU ? 5 : 3}
        className={i === SEU ? 'cota cota-seu' : ativos.has(i) ? 'cota cota-on' : 'cota'} />
    );
  }
  const sx = 14 + (SEU % COLS) * 26;
  const sy = 14 + Math.floor(SEU / COLS) * 26;

  return (
    <div className="grupo" ref={ref}>
      <svg viewBox="0 0 392 470" className="grupo-svg" aria-hidden="true">
        {pontos}
        <circle cx={sx} cy={sy} r="13" className="cota-anel" />
      </svg>
      <p className="grupo-rotulo" aria-hidden="true">Assembleia {assembleia}</p>
    </div>
  );
}
