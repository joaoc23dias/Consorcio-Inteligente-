'use client';

export default function SocialProofSection() {
    const stats = [
      {
              number: '500+',
              label: 'Clientes Satisfeitos',
              description: 'Que transformaram suas vidas financeiras',
              icon: '👥'
      },
      {
              number: '1.200+',
              label: 'Imóveis Adquiridos',
              description: 'Em todo o Brasil através do Método SPA',
              icon: '🏠'
      },
      {
              number: 'R$ 2.1B',
              label: 'Economizados em Juros',
              description: 'Comparado ao financiamento bancário tradicional',
              icon: '💰'
      },
      {
              number: '36',
              label: 'Meses Médios',
              description: 'Para conquistar 3 imóveis com renda passiva',
              icon: '⏱️'
      }
        ];

  const testimonials = [
    {
            name: 'Carlos Silva',
            role: 'Empresário',
            achievement: 'De 0 a 3 imóveis em 28 meses',
            income: 'R$ 12.500/mês em renda passiva',
            avatar: '👨‍💼'
    },
    {
            name: 'Maria Santos',
            role: 'Consultora',
            achievement: 'De 0 a 2 imóveis em 20 meses',
            income: 'R$ 8.000/mês em renda passiva',
            avatar: '👩‍💼'
    },
    {
            name: 'João Oliveira',
            role: 'Médico',
            achievement: 'De 0 a 4 imóveis em 42 meses',
            income: 'R$ 18.000/mês em renda passiva',
            avatar: '👨‍⚕️'
    }
      ];

  return (
        <section className="py-20 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                {/* Estatísticas */}
                      <div className="mb-20">
                                <div className="text-center mb-12">
                                            <h2 className="text-4xl font-bold text-blue-600 mb-4">Prova Social de Resultados</h2>h2>
                                            <p className="text-xl text-gray-600">Milhares de pessoas já transformaram suas vidas financeiras com o Método SPA</p>p>
                                </div>div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                  {stats.map((stat, index) => (
                        <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center border-2 border-blue-200">
                                        <div className="text-5xl mb-4">{stat.icon}</div>div>
                                        <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{stat.label}</h3>h3>
                                        <p className="text-sm text-gray-600">{stat.description}</p>p>
                        </div>div>
                      ))}
                                </div>div>
                      </div>div>
              
                {/* Casos de Sucesso */}
                      <div>
                                <div className="text-center mb-12">
                                            <h2 className="text-4xl font-bold text-blue-600 mb-4">Casos de Sucesso Reais</h2>h2>
                                            <p className="text-xl text-gray-600">Histórias reais de pessoas que alcançaram a liberdade financeira</p>p>
                                </div>div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                  {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                                        <div className="flex items-center mb-4">
                                                          <div className="text-5xl mr-4">{testimonial.avatar}</div>div>
                                                          <div>
                                                                              <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>h4>
                                                                              <p className="text-sm text-blue-600 font-semibold">{testimonial.role}</p>p>
                                                          </div>div>
                                        </div>div>
                                        <div className="border-t-2 border-blue-200 pt-4">
                                                          <p className="text-sm text-gray-700 mb-2">
                                                                              <span className="font-bold text-blue-600">Resultado:</span>span> {testimonial.achievement}
                                                          </p>p>
                                                          <p className="text-sm text-gray-700">
                                                                              <span className="font-bold text-green-600">Renda Passiva:</span>span> {testimonial.income}
                                                          </p>p>
                                        </div>div>
                                        <div className="mt-4 flex">
                                          {[...Array(5)].map((_, i) => (
                                              <span key={i} className="text-yellow-400 text-lg">⭐</span>span>
                                            ))}
                                        </div>div>
                        </div>div>
                      ))}
                                </div>div>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
