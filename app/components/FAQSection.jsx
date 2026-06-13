'use client';
import { useState, useEffect, useRef } from 'react';

const faqs = [
  { question: 'Como funciona o Consórcio Inteligente?', answer: 'Você entra num grupo, paga parcelas mensais e usa lances estratégicos para ser contemplado antes da média. Sem banco, sem juros, sem esperar sorteio. O Método SPA® identifica os grupos certos e calcula o lance ideal para contemplação em 14-36 meses.' },
  { question: 'Qual é a diferença do Método SPA para outros métodos?', answer: 'Métodos genéricos ensinam "como funciona consórcio". O SPA® vai além: analisa +5.000 grupos com critérios de liquidez e histórico, calcula o lance exato baseado em dados reais e acompanha você até a contemplação. É the difference between wishing and winning.' },
  { question: 'Quanto tempo leva para contemplar imóveis?', answer: 'A média do mercado é 60+ meses esperando sorteio. Com estratégia de lance do Método SPA®, nossos clientes buscam contemplação em 14-36 meses. Impossível garantir prazo — mas possível calcular a probabilidade e otimizar. E isso muda tudo.' },
  { question: 'Preciso de quanto dinheiro para começar?', answer: 'Depende do imóvel que você quer. Como regra geral: ter de 15% a 30% do valor do bem disponível para lance inicial coloca você numa posição estratégica forte. Nossa consultoria gratuita calcula o número exato para o seu perfil.' },
  { question: 'E se eu não conseguir pagar uma parcela?', answer: 'O consórcio é regulado pelo Banco Central. Existem mecanismos de flexibilização, cartas de crédito e opções de renegociação. Além disso, nossa equipe acompanha todo o seu período — você nunca fica sozinho diante de um imprevisto.' },
  { question: 'Que tipos de imóveis posso adquirir?', answer: 'Residências, apartamentos, imóveis comerciais e terrenos. A carta de crédito tem ampla flexibilidade. Nossos clientes usam o Modelo SPA® para montar portfólios mistos: moradia própria + imóvel de renda + comercial. Liberdade total de alocação.' },
  { question: 'Como é a renda passiva no Modelo SPA®?', answer: 'Imóvel #1 = moradia (parcela zero). Imóvel #2 = R$4.000/mês de aluguel. Imóvel #3 = R$4.500/mês. Em 36 meses você pode ter R$8.500/mês de renda passiva — sem hipoteca, sem banco, sem comprometer seu fluxo de caixa.' },
  { question: 'O consórcio é seguro?', answer: 'Regulado pelo Banco Central do Brasil (BACEN). Selecionamos apenas administradoras com rating A+, historicamente sólidas e auditadas. Todo o processo é transparente, com contratos claros e proteções legais para o cotista.' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="section bg-dots" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>

      {/* Glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(255,90,31,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ maxWidth: '56rem' }}>

        {/* Header */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>❓ DÚVIDAS FREQUENTES</span>
          <h2 className="text-h2" style={{ marginBottom: '1rem' }}>
            Perguntas{' '}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: '34rem', margin: '0 auto' }}>
            Tudo que você precisa saber antes de começar. Sem enrolação.
          </p>
        </div>

        {/* FAQ accordion — inside glass card */}
        <div className={`card-glass reveal ${visible ? 'visible' : ''} delay-1`} style={{ padding: '0', overflow: 'hidden' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: index < faqs.length - 1 ? '1px solid var(--border-color)' : 'none',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  padding: '1.4rem 2rem',
                  background: openIndex === index ? 'rgba(255,90,31,0.04)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s ease',
                }}
              >
                <span style={{
                  fontSize: '0.975rem',
                  fontWeight: 600,
                  color: openIndex === index ? 'var(--accent-orange)' : 'var(--text-primary)',
                  lineHeight: 1.45,
                  transition: 'color 0.2s ease',
                }}>
                  {faq.question}
                </span>
                <span style={{
                  width: '1.75rem',
                  height: '1.75rem',
                  borderRadius: '50%',
                  border: `1.5px solid ${openIndex === index ? 'var(--accent-orange)' : 'var(--border-color)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1rem',
                  color: openIndex === index ? 'var(--accent-orange)' : 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  fontWeight: 300,
                }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div style={{ padding: '0 2rem 1.5rem 2rem', borderLeft: '2px solid var(--accent-orange)', marginLeft: '2rem', marginRight: '2rem', marginBottom: '0.5rem' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Hormozi */}
        <div className={`reveal ${visible ? 'visible' : ''} delay-2`} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
            Não encontrou sua resposta?
          </p>
          <a
            href="https://wa.me/19998187567"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              background: 'rgba(255,90,31,0.08)',
              border: '1px solid rgba(255,90,31,0.3)',
              borderRadius: 'var(--radius-lg)',
              color: 'var(--accent-orange)',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            💬 Falar com especialista no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
