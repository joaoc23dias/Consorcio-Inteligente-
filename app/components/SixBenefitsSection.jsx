'use client';

export default function SixBenefitsSection() {
  const benefits = [
    { icon: '💰', title: 'Economize R$ 680 Mil em Juros', description: 'Enquanto financiamento custa 7-9% ao ano, consórcio custa apenas 2-3%. Para R$ 500k em 30 anos: você economiza R$ 680 mil.', highlight: 'R$ 680.000', color: 'yellow' },
    { icon: '📈', title: 'Gere R$ 8.500/Mês de Renda Passiva', description: '2 imóveis alugados gerando R$ 4.500 e R$ 4.000 por mês = R$ 8.500 em renda passiva antes mesmo de pagar todas as parcelas.', highlight: 'R$ 8.500/mês', color: 'blue' },
    { icon: '⚡', title: 'Contemple 3 Imóveis em 36 Meses', description: 'Média do mercado: 60+ meses. Nossos clientes: 14-36 meses. Você fica 24 meses à frente da concorrência.', highlight: '24 MESES VANTAGEM', color: 'green' },
    { icon: '🏦', title: 'Desbloqueie Fluxo de Caixa', description: 'Após 14 meses: 1ª contemplação. Reimvesta mesma parcela: 3x mais rápido. Capital liberado para oportunidades.', highlight: '3X MAIS RÁPIDO', color: 'purple' },
    { icon: '🔐', title: 'Diversifique Sem Comprometer Capital', description: 'Moradia + Aluguel + Negócio (portfólio real). Não prende 100% do fluxo em 1 único imóvel. Flexibilidade financeira completa.', highlight: 'MÚLTIPLAS FONTES', color: 'red' },
    { icon: '🚀', title: 'Multiplique Patrimônio 3X Mais Rápido', description: 'Banco: Linear (1 imóvel a cada 5 anos). Consórcio: Exponencial (3 em 3 anos). Aceleração 300% vs método tradicional.', highlight: '3 IMÓVEIS/3 ANOS', color: 'cyan' }
  ];

  const colorClasses = { yellow: 'from-yellow-50 to-orange-50 border-yellow-500 bg-yellow-100 text-yellow-800', blue: 'from-blue-50 to-indigo-50 border-blue-500 bg-blue-100 text-blue-800', green: 'from-green-50 to-emerald-50 border-green-500 bg-green-100 text-green-800', purple: 'from-purple-50 to-pink-50 border-purple-500 bg-purple-100 text-purple-800', red: 'from-red-50 to-orange-50 border-red-500 bg-red-100 text-red-800', cyan: 'from-cyan-50 to-blue-50 border-cyan-500 bg-cyan-100 text-cyan-800' };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">6 Maneiras de Explodir Seu Patrimônio em 36 Meses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Cada estratégia é desenhada para encontrar e capturar oportunidades patrimoniais que você está perdendo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className={`bg-gradient-to-br ${colorClasses[benefit.color]} rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-l-4 transform hover:scale-105`}>
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">{benefit.description}</p>
              <div className={`${colorClasses[benefit.color].split(' ')[3]} ${colorClasses[benefit.color].split(' ')[4]} font-bold text-sm px-3 py-2 rounded-md inline-block`}>{benefit.highlight}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://wa.me/19998187567" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 hover:shadow-lg text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 inline-block">🌟 Descobrir Todas as 6 Estratégias</a>
        </div>
      </div>
    </section>
  );
}
