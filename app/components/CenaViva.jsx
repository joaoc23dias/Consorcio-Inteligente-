'use client';
import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';

// Cena viva: a imagem atual ganha profundidade, luz e reação ao cursor.
// Tudo é desenhado sobre as coordenadas reais da imagem (W x H), então as
// linhas de luz e os pontos acompanham o enquadramento em qualquer tela.
// Camadas: palco (imagem + SVG de luz + rótulos), poeira (canvas) e luz do cursor.
// Sem cursor (celular ou parado), a cena se apresenta sozinha, ponto a ponto.

export default function CenaViva({
  src, alt = '', w, h, origem = [0.5, 0.5], alvo = 'section',
  caminhos = [], pontos = [], brilhos = [], prioridade = false, sizes = '100vw', raio = 150, video = null,
  final = null, pouso = null,
}) {
  const raiz = useRef(null);
  const palco = useRef(null);
  const tela = useRef(null);
  const [ativo, setAtivo] = useState(-1);
  const filme = useRef(null);
  const [rodando, setRodando] = useState(false);
  const uid = useId().replace(/:/g, '');
  // pouso: os bens descem um a um sobre a mesa vazia, só na primeira visita da sessão
  const [fasePouso, setFasePouso] = useState('feito');
  const introAte = useRef(0);

  useEffect(() => {
    if (!pouso || !final) return;
    const calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let visto = false;
    try { visto = sessionStorage.getItem('ci_pouso') === '1'; } catch { /* armazenamento bloqueado */ }
    if (calmo || visto) return;
    try { sessionStorage.setItem('ci_pouso', '1'); } catch { /* segue sem lembrar */ }
    const INI = 450, PASSO = 620, DUR = 950;
    const total = INI + PASSO * (pouso.length - 1) + DUR + 500;
    introAte.current = performance.now() + total + 900;
    setFasePouso('rodando');
    const ts = pouso.map((c, i) => setTimeout(() => setAtivo(c.ponto), INI + PASSO * i + DUR * 0.75));
    ts.push(setTimeout(() => { setAtivo(-1); setFasePouso('fechando'); }, total));
    ts.push(setTimeout(() => setFasePouso('feito'), total + 900));
    return () => ts.forEach(clearTimeout);
  }, [pouso, final]);

  useEffect(() => {
    const el = raiz.current;
    const sec = el?.closest(alvo);
    if (!el || !sec) return;
    const calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (calmo) return;

    // estado do cursor: alvo (t) e posição suavizada (s)
    const t = { x: 0, y: 0, lx: 0.68, ly: 0.55 };
    const s = { x: 0, y: 0, lx: 0.68, ly: 0.55 };
    let ultimoMouse = 0;
    let visivel = true;
    let raf = 0;
    let atual = -1;
    let ciclo = 0;

    const mudaAtivo = (i) => { if (i !== atual) { atual = i; setAtivo(i); } };

    const posPonto = (p) => {
      const r = palco.current.getBoundingClientRect();
      return [r.left + (p.x / w) * r.width, r.top + (p.y / h) * r.height];
    };

    const mover = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      const r = sec.getBoundingClientRect();
      t.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      t.y = ((e.clientY - r.top) / r.height) * 2 - 1;
      const rc = el.getBoundingClientRect();
      t.lx = (e.clientX - rc.left) / rc.width;
      t.ly = (e.clientY - rc.top) / rc.height;
      ultimoMouse = performance.now();
      // o ponto mais próximo do cursor acende
      let melhor = -1, dist = raio;
      pontos.forEach((p, i) => {
        const [px, py] = posPonto(p);
        const d = Math.hypot(e.clientX - px, e.clientY - py);
        if (d < dist) { dist = d; melhor = i; }
      });
      mudaAtivo(melhor);
    };
    const sair = () => { t.x = 0; t.y = 0; mudaAtivo(-1); ultimoMouse = 0; };
    sec.addEventListener('pointermove', mover);
    sec.addEventListener('pointerleave', sair);

    // poeira de luz
    const cv = tela.current;
    const ctx = cv.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    const N = window.innerWidth < 760 ? 26 : 58;
    const grao = Array.from({ length: N }, () => ({
      x: Math.random(), y: Math.random(), r: 0.5 + Math.random() * 1.4,
      v: 0.00012 + Math.random() * 0.00035, f: Math.random() * Math.PI * 2, a: 0.25 + Math.random() * 0.5,
    }));
    const medir = () => {
      const r = el.getBoundingClientRect();
      W = r.width; H = r.height;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);

    const io = new IntersectionObserver(([en]) => {
      visivel = en.isIntersecting;
      if (visivel && !raf) raf = requestAnimationFrame(quadro);
    }, { threshold: 0.02 });
    io.observe(el);

    const inicio = performance.now();
    function quadro(now) {
      raf = 0;
      if (!visivel) return;
      const parado = now - ultimoMouse > 2600 && now > introAte.current;
      if (parado && pontos.length) {
        // apresentação automática: a luz visita cada ponto
        const k = Math.floor((now - inicio) / 3200) % pontos.length;
        if (k !== ciclo || atual === -1) { ciclo = k; mudaAtivo(k); }
        const r = el.getBoundingClientRect();
        const [px, py] = posPonto(pontos[k]);
        t.lx = (px - r.left) / r.width; t.ly = (py - r.top) / r.height;
        t.x = Math.sin(now / 5200) * 0.35; t.y = Math.cos(now / 6100) * 0.25;
      }
      const e = 0.06;
      s.x += (t.x - s.x) * e; s.y += (t.y - s.y) * e;
      s.lx += (t.lx - s.lx) * 0.08; s.ly += (t.ly - s.ly) * 0.08;
      sec.style.setProperty('--cx', s.x.toFixed(4));
      sec.style.setProperty('--cy', s.y.toFixed(4));
      el.style.setProperty('--lx', `${(s.lx * 100).toFixed(2)}%`);
      el.style.setProperty('--ly', `${(s.ly * 100).toFixed(2)}%`);

      ctx.clearRect(0, 0, W, H);
      const lx = s.lx * W, ly = s.ly * H;
      for (const g of grao) {
        g.y -= g.v * (1 + Math.abs(s.x));
        g.f += 0.006;
        if (g.y < -0.02) { g.y = 1.02; g.x = Math.random(); }
        let x = (g.x + Math.sin(g.f) * 0.004) * W, y = g.y * H;
        // o cursor afasta a poeira, como ar em movimento
        const dx = x - lx, dy = y - ly, d = Math.hypot(dx, dy);
        if (d < 110 && !parado) { g.x += (dx / (d || 1)) * 0.0016; g.y += (dy / (d || 1)) * 0.0016; }
        const perto = Math.max(0, 1 - d / 420);
        ctx.globalAlpha = g.a * (0.25 + perto * 0.9);
        ctx.fillStyle = '#F1DDB3';
        ctx.beginPath(); ctx.arc(x, y, g.r * (1 + perto * 0.6), 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(quadro);
    }
    raf = requestAnimationFrame(quadro);

    return () => {
      cancelAnimationFrame(raf);
      sec.removeEventListener('pointermove', mover);
      sec.removeEventListener('pointerleave', sair);
      ro.disconnect(); io.disconnect();
    };
  }, [alvo, pontos, w, h, raio]);

  // vídeo em loop por cima da imagem: entra só quando já pode tocar,
  // escolhe o arquivo leve no celular e fica parado com movimento reduzido ou economia de dados
  useEffect(() => {
    const v = filme.current;
    if (!v || !video) return;
    const calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const economia = navigator.connection && navigator.connection.saveData;
    if (calmo || economia) return;
    v.src = window.innerWidth < 900 && video.leve ? video.leve : video.src;
    const pronto = () => { setRodando(true); v.play().catch(() => {}); };
    v.addEventListener('canplaythrough', pronto, { once: true });
    v.load();
    const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) v.play().catch(() => {}); else v.pause(); });
    io.observe(v);
    return () => { io.disconnect(); v.removeEventListener('canplaythrough', pronto); };
  }, [video]);

  const ligado = (c) => ativo >= 0 && (pontos[ativo]?.caminhos || []).includes(c.id);

  return (
    <div ref={raiz} className={`cena${ativo >= 0 ? ' cena-ativa' : ''}${rodando ? ' com-video' : ''}`} aria-hidden="true"
      style={{ '--ar': w / h, '--ox': origem[0], '--oy': origem[1] }}>
      <div ref={palco} className="cena-palco">
        <Image src={src} alt={alt} fill priority={prioridade} sizes={sizes} style={{ objectFit: 'cover' }} />
        {pouso && fasePouso !== 'feito' && pouso.map((c, i) => {
          const pos = { left: `${(c.x / w) * 100}%`, top: `${(c.y / h) * 100}%`, width: `${(c.w / w) * 100}%`, height: `${(c.h / h) * 100}%`, animationDelay: `${450 + 620 * i}ms` };
          return (
            <span key={c.obj} className="cena-bem">
              <img className="cena-bem-sombra" src={c.sombra} alt="" style={pos} />
              <img className="cena-bem-obj" src={c.obj} alt="" style={pos} />
            </span>
          );
        })}
        {final && (
          <Image src={final} alt="" fill priority={prioridade} sizes={sizes} className={`cena-final${fasePouso === 'rodando' ? ' oculta' : ''}`} style={{ objectFit: 'cover' }} />
        )}
        {video && (
          <video ref={filme} className="cena-video" muted loop playsInline preload="none" tabIndex={-1}
            style={{ top: `${video.topo}%`, height: `${video.altura}%` }} />
        )}
        <svg className="cena-svg" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
          <defs>
            <filter id={`brilho-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <radialGradient id={`halo-${uid}`}>
              <stop offset="0" stopColor="#F1DDB3" stopOpacity=".55" />
              <stop offset=".45" stopColor="#BFD6EE" stopOpacity=".18" />
              <stop offset="1" stopColor="#BFD6EE" stopOpacity="0" />
            </radialGradient>
          </defs>
          {pontos.map((p, i) => (
            <ellipse key={`h${i}`} className={`cena-halo${ativo === i ? ' on' : ''}`} cx={p.x} cy={p.halo?.y ?? p.y}
              rx={p.halo?.rx ?? 120} ry={p.halo?.ry ?? 70} fill={`url(#halo-${uid})`} />
          ))}
          <g filter={`url(#brilho-${uid})`}>
            {caminhos.map((c, i) => (
              <g key={c.id} className={`cena-via${ligado(c) ? ' on' : ''}`}>
                <path className="cena-trilho" d={c.d} pathLength="1000" />
                <path className="cena-pulso" d={c.d} pathLength="1000" style={{ animationDelay: `${-i * 0.9}s`, animationDuration: `${c.dur || 4.2}s` }} />
              </g>
            ))}
          </g>
          {brilhos.map((b, i) => (
            <g key={`b${i}`} className={`cena-faisca${ativo >= 0 && b.ponto === ativo ? ' on' : ''}`} transform={`translate(${b.x} ${b.y})`}>
              <g style={{ animationDelay: `${i * 1.3}s` }}>
                <path d="M0 -22 L3 -3 L22 0 L3 3 L0 22 L-3 3 L-22 0 L-3 -3 Z" fill="#FFF3D6" />
                <circle r="5" fill="#FFF8E8" />
              </g>
            </g>
          ))}
        </svg>
      </div>
      <div className="cena-veu" />
      <canvas ref={tela} className="cena-poeira" />
      <div className="cena-luz" />
      <div className="cena-palco cena-camada">
        {pontos.map((p, i) => (
          <span key={`r${i}`} className={`cena-rotulo${ativo === i ? ' on' : ''}${p.lado ? ` ${p.lado}` : ''}`}
            style={{ left: `${(p.x / w) * 100}%`, top: `${(p.y / h) * 100}%` }}>
            <b>{p.rotulo}</b>
            {p.sub && <small>{p.sub}</small>}
          </span>
        ))}
      </div>
    </div>
  );
}
