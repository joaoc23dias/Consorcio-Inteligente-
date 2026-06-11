'use client'

export default function GuaranteeSection() {
      const guarantees = [
          {
                    title: 'Satisfação Garantida',
                    description: 'Se após 30 dias você não estiver satisfeito, devolvemos 100% do seu investimento - sem perguntas.'
          },
          {
                    title: 'Propriedades Verificadas',
                    description: 'Todas as imagens são analisadas por nossos especialistas para garantir retorno máximo.'
          },
          {
                    title: 'Suporte Ilimitado',
                    description: 'Acesso ao nosso time de especialistas durante todo o período de participação no consorcio.'
          },
          {
                    title: 'Resultados Comprovados',
                    description: 'Más de 500 clientes já contemplaram suas propriedades com sucesso usando o Método SPA.'
          }
            ]

  return (
          <section className="py-24 px-4 bg-black">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                        <div className="text-center mb-16">
                                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                                              Sua Decisão Está Protegida
                                  </h2>h2>
                                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                              Investindo em sua confiança com uma garantia completa de satisfação
                                  </p>p>
                                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-6"></div>div>
                        </div>div>
                
                    {/* Guarantees Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-16">
                            {guarantees.map((guarantee, index) => (
                          <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg p-8 border border-green-600 border-opacity-30 hover:border-opacity-100 transition-all">
                                        <div className="flex gap-4 items-start">
                                                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                                                          <span className="text-black font-bold text-xl">✓</span>span>
                                                        </div>div>
                                                        <div>
                                                                          <h3 className="text-xl font-bold text-white mb-2">{guarantee.title}</h3>h3>
                                                                          <p className="text-gray-300 leading-relaxed">{guarantee.description}</p>p>
                                                        </div>div>
                                        </div>div>
                          </div>div>
                        ))}
                        </div>div>
                
                    {/* Risk Reversal Box */}
                        <div className="bg-gradient-to-r from-green-950 via-gray-900 to-green-950 rounded-lg p-10 mb-16 border border-green-700 border-opacity-50">
                                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Garant ia de Rever são de Risco</h3>h3>
                                  <p className="text-gray-300 text-lg text-center mb-6 leading-relaxed">
                                              Estamos to confis ntes na qualidade do Método SPA que oferecemos uma garantia incondicional de 30 dias. Se você não dobrar ou triplicar seu patrimonio em imóveis dentro de 2 anos, devolvemos cada centavo investido.
                                  </p>p>
                                  <p className="text-green-400 font-bold text-center">Nenhuma pergunta. Nenhuma burocracia. Apenas reembolso completo.</p>p>
                        </div>div>
                
                    {/* Testimonial */}
                        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 mb-12">
                                  <div className="flex items-center gap-4 mb-4">
                                              <div className="w-12 h-12 rounded-full bg-yellow-500"></div>div>
                                              <div>
                                                            <p className="text-white font-bold">Cliente Satisfeito</p>p>
                                                            <p className="text-yellow-400 text-sm">Multiplicou seu patrimônio em apenas 18 meses</p>p>
                                              </div>div>
                                  </div>div>
                                  <p className="text-gray-300 italic">"Ó Fácil de entender, temos suporte completo e já contemplei meu primeiro imóvel. Agora estou seguindo a estratégia para obter mais 2 propriedades."</p>p>
                        </div>div>
                
                    {/* Final CTA Section */}
                        <div className="text-center">
                                  <p className="text-gray-400 mb-6">Não deixe esta oportunidade passar. Seus próximos 3 imóveis estão esperando.</p>p>
                                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                              <button className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
                                                            Começar Meu Caminho Agora
                                              </button>button>
                                              <button className="px-10 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg rounded-lg border border-gray-600 transition-all duration-300">
                                                            Conversar com Especialista
                                              </button>button>
                                  </div>div>
                                  <p className="text-xs text-gray-500 mt-6">
                                              A satisfação do cliente é nossa prioridade. Garantia de 30 dias, sem riscos.
                                  </p>p>
                        </div>div>
                </div>div>
          </section>section>
        )
}</section>
