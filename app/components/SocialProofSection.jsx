'use client';

export default function SocialProofSection() {
      const stats = [
          {
                    number: '500+',
                    label: 'Clientes que Transformaram Vidas',
                    subtext: 'Metodologia comprovada de sucesso'
          },
          {
                    number: '1.200+',
                    label: 'Imóveis Adquiridos',
                    subtext: 'Em todo o Brasil'
          },
          {
                    number: 'R$ 2.1B',
                    label: 'Economizados em Juros',
                    subtext: 'Versus financiamento tradicional'
          }
            ];

  const testimonials = [
      {
                name: 'Carlos Silva',
                title: 'Empresário | São Paulo',
                result: '3 imóveis em 28 meses',
                income: 'R$ 12.500/mês de renda passiva',
                stars: 5
      },
      {
                name: 'Marina Costa',
                title: 'Consultora | Rio de Janeiro',
                result: '2 imóveis em 20 meses',
                income: 'R$ 8.000/mês de renda passiva',
                stars: 5
      },
      {
                name: 'Dr. João Pereira',
                title: 'Médico | Minas Gerais',
                result: '4 imóveis em 40 meses',
                income: 'R$ 18.500/mês de renda passiva',
                stars: 5
      }
        ];

  return (
          <section className="py-24 px-4 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    {/* Headline */}
                        <div className="text-center mb-20">
                                  <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                              Resultados Comprovados que Falam por Si
                                  </h2>h2>
                                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                              Milhares de pessoas já conquistaram sua liberdade financeira com o Método SPA. Aqui estão os números reais.
                                  </p>p>
                        </div>div>
                
                    {/* Estatísticas Premium */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {stats.map((stat, index) => (
                          <div
                                            key={index}
                                            className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-600 rounded-2xl p-10 text-center hover:border-yellow-400 transition-all duration-300 group"
                                          >
                                        <div className="text-6xl font-bold text-yellow-500 mb-4 group-hover:text-yellow-400 transition-colors">
                                            {stat.number}
                                        </div>div>
                                        <h3 className="text-xl font-bold text-white mb-3">{stat.label}</h3>h3>
                                        <p className="text-gray-400 text-sm">{stat.subtext}</p>p>
                          </div>div>
                        ))}
                        </div>div>
                
                    {/* Divider Premium */}
                        <div className="flex items-center gap-4 mb-20">
                                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>div>
                                  <span className="text-yellow-500 text-lg font-bold">★ HISTÓRIAS DE SUCESSO REAIS ★</span>span>
                                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>div>
                        </div>div>
                
                    {/* Depoimentos Premium */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                          <div
                                            key={index}
                                            className="bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-yellow-600/30 rounded-2xl p-10 hover:border-yellow-500/60 transition-all duration-300 group"
                                          >
                              {/* Estrelas */}
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(testimonial.stars)].map((_, i) => (
                                                                <span key={i} className="text-yellow-500 text-xl">★</span>span>
                                                              ))}
                                        </div>div>
                          
                              {/* Nome e Título */}
                                        <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>h4>
                                        <p className="text-yellow-500/80 text-sm mb-6 font-medium">{testimonial.title}</p>p>
                          
                              {/* Resultado */}
                                        <div className="bg-black/50 border border-yellow-600/20 rounded-lg p-4 mb-4">
                                                        <p className="text-sm text-gray-400 mb-2">Resultado:</p>p>
                                                        <p className="text-white font-bold text-lg">{testimonial.result}</p>p>
                                        </div>div>
                          
                              {/* Renda Passiva */}
                                        <div className="bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border border-yellow-600/30 rounded-lg p-4">
                                                        <p className="text-sm text-gray-400 mb-2">Renda Passiva Gerada:</p>p>
                                                        <p className="text-yellow-400 font-bold text-lg">{testimonial.income}</p>p>
                                        </div>div>
                          </div>div>
                        ))}
                        </div>div>
                
                    {/* CTA Subtil */}
                        <div className="text-center mt-20">
                                  <p className="text-lg text-gray-400">
                                              Estes são <span className="text-yellow-500 font-bold">resultados reais</span>span> de pessoas que transformaram vidas com dedicação ao Método SPA.
                                  </p>p>
                        </div>div>
                </div>div>
          </section>section>
        );
}</section>
