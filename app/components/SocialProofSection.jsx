'use client';

const stats = [
  { number: '500+', label: 'Clientes que Transformaram Vidas', subtext: 'Metodologia comprovada de sucesso' },
  { number: '1.200+', label: 'Imoveis Adquiridos', subtext: 'Em todo o Brasil' },
  { number: 'R$ 2.1B', label: 'Economizados em Juros', subtext: 'Versus financiamento tradicional' }
];

const testimonials = [
  { name: 'Carlos Silva', title: 'Empresario | Sao Paulo', result: '3 imoveis em 28 meses', income: 'R$ 12.500/mes de renda passiva' },
  { name: 'Marina Costa', title: 'Consultora | Rio de Janeiro', result: '2 imoveis em 20 meses', income: 'R$ 8.000/mes de renda passiva' },
  { name: 'Dr. Joao Pereira', title: 'Medico | Minas Gerais', result: '4 imoveis em 40 meses', income: 'R$ 18.500/mes de renda passiva' }
];

export default function SocialProofSection() {
  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Resultados Comprovados que Falam por Si</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Centenas de pessoas ja estruturaram a compra dos seus imoveis com o Metodo SPA.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-600 rounded-2xl p-10 text-center">
              <div className="text-6xl font-bold text-yellow-500 mb-4">{stat.number}</div>
              <h3 className="text-xl font-bold text-white mb-3">{stat.label}</h3>
              <p className="text-gray-400 text-sm">{stat.subtext}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-900 to-black border border-yellow-600/30 rounded-2xl p-10">
              <h4 className="text-xl font-bold text-white mb-1">{t.name}</h4>
              <p className="text-yellow-500/80 text-sm mb-6 font-medium">{t.title}</p>
              <div className="bg-black/50 border border-yellow-600/20 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">Resultado:</p>
                <p className="text-white font-bold text-lg">{t.result}</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border border-yellow-600/30 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Renda Passiva Gerada:</p>
                <p className="text-yellow-400 font-bold text-lg">{t.income}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    <p className="text-center text-xs text-gray-500 mt-12 max-w-3xl mx-auto">Os depoimentos refletem experiencias individuais e nao representam garantia de resultado. A contemplacao no consorcio depende de sorteio ou lance e os resultados podem variar de pessoa para pessoa.</p>
      </section>
  );
}
