'use client'

import { useState } from 'react'

export default function FAQSection() {
      const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
      {
                question: 'Como funciona o Consórcio Inteligente?',
                answer: 'O Consórcio Inteligente é um método de aquisição de imóveis onde você se une a outras pessoas em um grupo. Você contribui mensalmente e quando chega sua vez (contemplação), recebe o valor para adquirir seu imóvel sem precisar de empréstimo bancário.'
      },
      {
                question: 'Qual é a diferença do Método SPA para outros métodos?',
                answer: 'O Método SPA (Sistema de Planejamento Avançado) combina consórcio inteligente com estratégias de alavancagem financeira, permitindo que você contemple múltiplos imóveis rapidamente e construa renda passiva exponencial.'
      },
      {
                question: 'Quanto tempo leva para contemplar 3 imóveis?',
                answer: 'Nossos clientes conseguem contemplar 3 imóveis em média entre 14 a 36 meses, dependendo do tamanho do consórcio, valor das parcelas e da sua estratégia de lance. Alguns clientes ainda mais rápido.'
      },
      {
                question: 'Preciso de quanto dinheiro para começar?',
                answer: 'Você pode começar com R$ 10.000 a R$ 50.000 como entrada inicial, dependendo do valor do imóvel que escolher. Após isso, contribuições mensais baseadas no seu consórcio.'
      },
      {
                question: 'E se eu não conseguir pagar uma parcela?',
                answer: 'O consórcio é regulado e oferece proteção. Se você não conseguir pagar temporariamente, há opções como suspensão de parcelas ou negociação direta com o administrador.'
      },
      {
                question: 'Que tipos de imóveis posso adquirir?',
                answer: 'Você pode adquirir residências, apartamentos, casarões comerciais e terrenos através do consórcio. A escolha depende da disponibilidade e das cotas do consórcio que você participar.'
      },
      {
                question: 'Como é a renda passiva garantida?',
                answer: 'Não é garantida por lei, mas com o Método SPA você escolhe imóveis em localizações de alta demanda que naturalmente apreciam. Ao locar os imóveis, você gera renda mensal enquanto se posiciona para contemplar novamente.'
      },
      {
                question: 'Existe risco na contemplação?',
                answer: 'Todo investimento tem riscos, mas consórcio é regulado pelo Banco Central. Nosso método reduz riscos através de análise estratégica de localização e mercado, garantindo propriedades com alta demanda.'
      }
        ]

  const toggleFAQ = (index) => {
          setOpenIndex(openIndex === index ? null : index)
  }

  return (
          <section className="py-24 px-4 bg-black">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                        <div className="text-center mb-16">
                                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                                              Dúvidas Frequentes
                                  </h2>h2>
                                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                              Respostas claras sobre o Método SPA e Consórcio Inteligente
                                  </p>p>
                                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-6"></div>div>
                        </div>div>
                
                    {/* FAQ Items */}
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                          <div
                                            key={index}
                                            className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-yellow-500 bg-gradient-to-r from-gray-900 to-gray-950"
                                          >
                                        <button
                                                            onClick={() => toggleFAQ(index)}
                                                            className="w-full px-8 py-5 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                                                          >
                                                        <span className="text-lg font-semibold text-white pr-4">
                                                            {faq.question}
                                                        </span>span>
                                                        <div className="flex-shrink-0">
                                                                          <span
                                                                                                  className={`text-yellow-400 text-2xl transition-transform duration-300 ${
                                                                                                                            openIndex === index ? 'rotate-180' : ''
                                                                                                      }`}
                                                                                                >
                                                                                              ▼
                                                                          </span>span>
                                                        </div>div>
                                        </button>button>
                          
                              {/* Answer */}
                              {openIndex === index && (
                                                              <div className="px-8 py-6 bg-gray-900 border-t border-gray-700 animate-in fade-in duration-300">
                                                                                <p className="text-gray-300 leading-relaxed">
                                                                                    {faq.answer}
                                                                                </p>p>
                                                              </div>div>
                                        )}
                          </div>div>
                        ))}
                        </div>div>
                
                    {/* Bottom CTA */}
                        <div className="mt-16 text-center p-10 rounded-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-yellow-500 border-opacity-30">
                                  <h3 className="text-2xl font-bold text-white mb-4">Ainda tem dúvidas?</h3>h3>
                                  <p className="text-gray-400 mb-6">
                                              Nossos consultores estão prontos para responder qualquer pergunta específica sobre seu caso.
                                  </p>p>
                                  <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
                                              Agendar Consulta Gratuita
                                  </button>button>
                        </div>div>
                </div>div>
          </section>section>
        )
}</section>
