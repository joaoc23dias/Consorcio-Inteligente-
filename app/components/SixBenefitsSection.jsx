'use client';

export default function SixBenefitsSection() {
    const benefits = [
      { icon: '💰', title: 'Economize R$ 680 Mil em Juros', description: 'Enquanto financiamento custa 7-9% ao ano, consórcio custa apenas 2-3%. Para R$ 500k em 30 anos: você economiza R$ 680 mil.' },
      { icon: '📈', title: 'Gere R$ 8.500/Mês de Renda Passiva', description: '2 imóveis alugados gerando R$ 4.500 e R$ 4.000 por mês = R$ 8.500 em renda passiva antes mesmo de pagar todas as parcelas.' },
      { icon: '⚡', title: 'Contemple 3 Imóveis em 36 Meses', description: 'Média do mercado: 60+ meses. Nossos clientes: 14-36 meses. Você fica 24 meses à frente da concorrência.' },
      { icon: '🏦', title: 'Desbloqueie Fluxo de Caixa', description: 'Após 14 meses: 1ª contemplação. Reimvesta mesma parcela: 3x mais rápido. Capital liberado para oportunidades.' },
      { icon: '🔐', title: 'Diversifique Sem Comprometer Capital', description: 'Moradia + Aluguel + Negócio (portfólio real). Não prende 100% do fluxo em 1 único imóvel. Flexibilidade financeira completa.' },
      { icon: '🚀', title: 'Multiplique Patrimônio 3X Mais Rápido', description: 'Banco: Linear (1 imóvel a cada 5 anos). Consórcio: Exponencial (3 em 3 anos). Aceleração 300% vs método tradicional.' }
        ];

  return (
        <section className="py-20 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                      <h2 className="text-4xl font-bold text-center mb-4">6 Maneiras de Explodir Seu Patrimônio em 36 Meses</h2>h2>
                      <p className="text-center text-gray-600 mb-12">Cada estratégia é desenhada para encontrar e capturar oportunidades patrimoniais que você está perdendo.</p>p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <div className="text-4xl mb-4">{benefit.icon}</div>div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>h3>
                                    <p className="text-gray-600">{benefit.description}</p>p>
                      </div>div>
                    ))}
                      </div>div>
                      
                      <div className="mt-12 text-center">
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
                                            🌟 Descobrir Todas as 6 Estratégias
                                </button>button>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
