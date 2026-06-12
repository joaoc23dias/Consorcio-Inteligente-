'use client';

import { useState } from 'react';

const faqs = [
  { question: 'Como funciona o Consórcio Inteligente?', answer: 'O Consórcio Inteligente é um método de aquisição de imóveis onde você se une a outras pessoas em um grupo. Você contribui mensalmente e quando chega sua vez (contemplação), recebe o valor para adquirir seu imóvel sem precisar de empréstimo bancário.' },
  { question: 'Qual é a diferença do Método SPA para outros métodos?', answer: 'O Método SPA (Sistema de Planejamento Avançado) combina consórcio inteligente com estratégias de alavancagem financeira, permitindo que você contemple múltiplos imóveis e construa renda passiva de forma planejada.' },
  { question: 'Quanto tempo leva para contemplar imóveis?', answer: 'Não existe prazo garantido: a contemplação no consórcio ocorre por sorteio ou lance. O que fazemos é estruturar uma estratégia de lances para buscar antecipar a contemplação. O tempo varia conforme o grupo, o valor das parcelas e a disponibilidade de recursos para lance.' },
  { question: 'Preciso de quanto dinheiro para começar?', answer: 'Você pode começar com R$ 10.000 a R$ 50.000 como entrada inicial, dependendo do valor do imóvel que escolher. Após isso, contribuições mensais baseadas no seu consórcio.' },
  { question: 'E se eu não conseguir pagar uma parcela?', answer: 'O consórcio é regulado e oferece proteções ao cotista. Em caso de dificuldade, existem mecanismos de negociação e flexibilização. Nossa equipe orienta você sobre as melhores opções disponíveis no seu grupo.' },
  { question: 'Que tipos de imóveis posso adquirir?', answer: 'Você pode adquirir residências, apartamentos, imóveis comerciais e terrenos. A carta de crédito do consórcio de imóveis tem ampla flexibilidade de uso conforme as regras do grupo contratado.' },
  { question: 'Como é a renda passiva?', answer: 'Com o Método SPA você escolhe imóveis em localizações estratégicas para locação. O primeiro imóvel pode ser moradia e os demais geram renda de aluguel mensal, construindo um fluxo de caixa recorrente.' },
  { question: 'O consórcio é seguro?', answer: 'O consórcio não é um investimento, é uma forma de aquisição planejada de bens. É regulado pelo Banco Central do Brasil (BACEN). Nossa assessoria ajuda a selecionar grupos dentro de administradoras reconhecidas e a estruturar estratégias de lances com base no seu perfil financeiro.' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)' }} className="section_padding">
      <div className="layout_container" style={{ maxWidth: '760px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="accent_tag" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Dúvidas Frequentes</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '1rem' }}>
            Perguntas Frequentes
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ fontSize: '1rem', fontWeight: 600, color: openIndex === index ? 'var(--accent-orange)' : 'var(--text-primary)', lineHeight: 1.4, transition: 'color 0.2s ease' }}>
                  {faq.question}
                </span>
                <span style={{ fontSize: '1.25rem', color: openIndex === index ? 'var(--accent-orange)' : 'var(--text-muted)', flexShrink: 0, transition: 'color 0.2s ease', fontWeight: 300 }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div style={{ paddingBottom: '1.25rem' }}>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
