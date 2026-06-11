'use client';

import { useState } from 'react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
            question: 'Como funciona o Consórcio Inteligente?',
            answer: 'O Consórcio Inteligente é um método de aquisição de imóveis onde você se une a outras pessoas em um grupo de consórcio. Cada mês, o grupo arrecada recursos e um membro contemple um imóvel. Você começa a gerar renda passiva imediatamente após contemplar seu primeiro imóvel, enquanto continua pagando suas parcelas.'
    },
    {
            question: 'Qual é a diferença do Método SPA para outros métodos?',
            answer: 'O Método SPA (Sistema de Planejamento Avançado) combina consórcio inteligente com estratégias de alocação de renda. Enquanto a maioria das pessoas usa a renda dos aluguel para pagar a parcela, nós ensinamos como usar parte dessa renda para pagar E para investir em mais imóveis simultaneamente.'
    },
    {
            question: 'Quanto tempo leva para contemplar 3 imóveis?',
            answer: 'Nossos clientes conseguem contemplar 3 imóveis em média entre 14 a 36 meses, dependendo do tamanho do consórcio e da estratégia de renda passiva implementada. Isso é significativamente mais rápido que o mercado tradicional (60+ meses).'
    },
    {
            question: 'Preciso de quanto dinheiro para começar?',
            answer: 'Você pode começar com R$ 10.000 a R$ 50.000 como entrada inicial, dependendo do valor do imóvel que deseja adquirir. O restante é financiado pelo consórcio durante o período de 30-36 meses.'
    },
    {
            question: 'E se eu não conseguir pagar uma parcela?',
            answer: 'O consórcio é regulado e oferece proteção. Se você não conseguir pagar temporariamente, há opções como suspensão temporária ou renegociação. Porém, com o Método SPA, a renda passiva dos imóveis anteriores geralmente cobre a parcela do próximo imóvel.'
    },
    {
            question: 'Que tipos de imóveis posso adquirir?',
            answer: 'Você pode adquirir residências, apartamentos, casarões comerciais e terrenos através do consórcio. O método SPA funciona melhor com imóveis que geram boa renda de aluguel.'
    },
    {
            question: 'Como é a renda passiva garantida?',
            answer: 'Não é garantida por lei, mas com o Método SPA você escolhe imóveis em localizações de alta demanda por aluguel. Nossos clientes alcançam uma média de R$ 8.500 a R$ 18.000/mês em renda passiva com 2-3 imóveis.'
    },
    {
            question: 'Preciso de experiência prévia com imóveis?',
            answer: 'Não! O Método SPA inclui treinamento completo sobre seleção de imóveis, negociação, gestão de inquilinos e otimização de renda. Começamos do zero com você.'
    }
      ];

  return (
        <section className="py-20 px-4 bg-gray-50">
              <div className="max-w-4xl mx-auto">
                      <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-blue-600 mb-4">Perguntas Frequentes</h2>h2>
                                <p className="text-xl text-gray-600">Tire suas dúvidas sobre o Método SPA e o Consórcio Inteligente</p>p>
                      </div>div>
              
                      <div className="space-y-4">
                        {faqs.map((faq, index) => (
                      <div key={index} className="bg-white rounded-lg border-2 border-blue-200 overflow-hidden">
                                    <button
                                                      className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-50 transition-colors"
                                                      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                                    >
                                                    <h3 className="text-lg font-bold text-gray-800 pr-4">{faq.question}</h3>h3>
                                                    <span className={`text-2xl text-blue-600 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                                                                      ▼
                                                    </span>span>
                                    </button>button>
                                    
                        {openIndex === index && (
                                        <div className="px-6 pb-6 border-t-2 border-blue-200 bg-blue-50">
                                                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>p>
                                        </div>div>
                                    )}
                      </div>div>
                    ))}
                      </div>div>
              
                      <div className="mt-12 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border-2 border-blue-300">
                                <p className="text-center text-gray-800">
                                            <span className="font-bold text-blue-600">Ainda tem dúvidas?</span>span> Agende uma consulta gratuita com nossos especialistas!
                                </p>p>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
