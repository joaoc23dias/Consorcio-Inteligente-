'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Carta curta do João, em primeira pessoa: como ele trabalha e o que promete.
// A biografia fica na página Sobre; aqui não se repete.
const PARAGRAFOS = [
  'Em uma década nos mercados financeiro e imobiliário, vi muita gente deixar de construir patrimônio não por falta de renda, mas por falta de um plano.',
  'Por isso eu não começo pela cota nem pelo aporte. Começo pelo que você quer conquistar, pelo que cabe no seu mês e pelo tempo que você tem. Só depois o consórcio entra, como ferramenta, dentro do Método SPA® da Gaia Group.',
  'Também vou te dizer quando o consórcio não faz sentido para você. Ninguém pode prometer data de contemplação, e eu não prometo.',
];
const DESTAQUE = 'O que eu ofereço é clareza: os números na mesa antes de qualquer assinatura.';
const FECHO = 'Se fizer sentido seguir, você segue sabendo exatamente onde está entrando. Se não fizer, sai da conversa com o seu cenário mais claro do que quando chegou.';

export default function CartaJoao() {
  const ref = useRef(null);
  const [aberta, setAberta] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAberta(true); io.disconnect(); } }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section id="carta" ref={ref} className={`carta2${aberta ? ' aberta' : ''}`} aria-labelledby="carta-titulo">
      <div className="wrap carta2-grade">
        <figure className="carta2-foto">
          <Image src="/joao-sobre.webp" alt="João Dias sentado à mesa de estratégia, no escritório" width={960} height={1200} sizes="(max-width: 960px) 80vw, 440px" />
        </figure>
        <article className="carta2-papel">
          <h2 id="carta-titulo" className="carta2-h">Antes da nossa conversa.</h2>
          {PARAGRAFOS.map((p, i) => <p key={i} className="carta2-l" style={{ '--n': i }}>{p}</p>)}
          <p className="carta2-l carta2-destaque" style={{ '--n': PARAGRAFOS.length }}>{DESTAQUE}</p>
          <p className="carta2-l" style={{ '--n': PARAGRAFOS.length + 1 }}>{FECHO}</p>
          <footer className="carta2-assinatura carta2-l" style={{ '--n': PARAGRAFOS.length + 2.4 }}>
            <span className="carta2-nome">João Dias</span>
            <span className="carta2-cargo">Especialista em planejamento patrimonial · Gaia Group</span>
          </footer>
        </article>
      </div>
    </section>
  );
}
