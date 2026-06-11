'use client';
import { useState } from 'react';

export default function SixArchetypesSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const archetypes = [
    { icon: '👨‍⚕️', name: 'O Médico', profession: 'Profissional de Saúde', color: 'blue', before: { status: 'Ganhando R$ 25k/mês mas 100% preso em financiamentos', problems: ['30 anos de banco', 'R$ 680k em juros', 'Nenhuma renda passiva'] }, after: { status: '2 imóveis em 16 meses', achievements: ['1 moradia (R$ 500k)', '1 aluguel (R$ 4.500/mês)', '+R$ 700k economia'] }, roi: '+R$ 700k', quote: '"Descobri que outros estavam usando consórcio para multiplicar patrimônio."' },
    { icon: '💼', name: 'O Empresário', profession: 'Dono de Negócio', color: 'green', before: { status: 'R$ 150k/mês mas capital preso', problems: ['Capital imobilizado', 'Sem patrimônio', 'Risco concentrado'] }, after: { status: '3 imóveis em 28 meses', achievements: ['Patrimônio: R$ 1.5M', 'Renda: R$ 8.5k/mês', 'Portfolio diversificado'] }, roi: '+R$ 1.5M', quote: '"Consórcio me permitiu multiplicar patrimônio sem pressão."' },
    { icon: '🏠', name: 'O Corretor', profession: 'Profissional Imobiliário', color: 'orange', before: { status: 'Renda flutuante (R$ 5k-R$ 15k)', problems: ['Sem previsibilidade', 'Nenhuma segurança', 'Dependência de comissões'] }, after: { status: '2 imóveis alugados em 18 meses', achievements: ['Renda fixa: R$ 8.5k/mês', 'Comissões: Bônus', 'Independência financeira'] }, roi: '+R$ 8.5k/mês', quote: '"Hoje tenho renda que não depende da economia."' },
    { icon: '⚖️', name: 'O Profissional Liberal', profession: 'Advogado/Contador', color: 'purple', before: { status: 'R$ 12k/mês sem patrimônio', problems: ['Vivendo do salário', 'Sem alavancagem', 'Futuro incerto'] }, after: { status: '3 imóveis em 30 meses', achievements: ['Patrimônio: R$ 1.5M', 'Renda: R$ 8.5k/mês', 'Aposentadoria aos 45'] }, roi: '+R$ 1.5M', quote: '"Construí patrimônio exponencial mantendo minha prática."' },
    { icon: '🛍️', name: 'O E-commerce', profession: 'Pequeno Empresário Digital', color: 'pink', before: { status: 'Negócio crescendo, capital preso', problems: ['R$ 30k/mês sem patrimônio', 'Risco total no negócio', 'Sem proteção'] }, after: { status: '2 imóveis + negócio em 22 meses', achievements: ['Patrimônio: R$ 1M', 'Renda: R$ 9k/mês', 'Negócio sem pressão'] }, roi: '+R$ 1M', quote: '"Agora posso escalar sem medo."' },
    { icon: '👔', name: 'O Executivo', profession: 'Gerente/Diretor', color: 'indigo', before: { status: 'R$ 50k/mês sem alavancagem', problems: ['Sem renda passiva', 'Futuro amarrado ao emprego', 'Sem segurança'] }, after: { status: '3 imóveis em 26 meses', achievements: ['Patrimônio: R$ 1.5M', 'Renda: R$ 8.5k/mês', 'Deixou emprego no mês 28'] }, roi: '+R$ 1.5M', quote: '"Finalmente tenho renda que não depende do meu trabalho."' }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">6 Arquétipos de Sucesso</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Resultados reais de 200+ clientes que transformaram suas vidas usando o Método SPA®</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {archetypes.map((archetype, index) => (
            <div key={index} className={`bg-white border-l-4 border-${archetype.color}-500 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden`} onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-4xl mb-2">{archetype.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{archetype.name}</h3>
                    <p className="text-gray-600 text-sm">{archetype.profession}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-3"><div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div><h4 className="font-bold">ANTES</h4></div>
                  <p className="text-gray-700 font-semibold text-sm mb-2">{archetype.before.status}</p>
                  <ul className="text-gray-600 text-xs space-y-1">{archetype.before.problems.map((p, i) => <li key={i}>❌ {p}</li>)}</ul>
                </div>
                {expandedIndex === index && (
                  <div className="border-t pt-6">
                    <div className="flex items-center mb-3"><div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div><h4 className="font-bold">DEPOIS</h4></div>
                    <p className="text-gray-700 font-semibold text-sm mb-2">{archetype.after.status}</p>
                    <ul className="text-gray-600 text-xs space-y-1 mb-4">{archetype.after.achievements.map((a, i) => <li key={i}>✅ {a}</li>)}</ul>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-lg p-3 mb-4">
                      <p className="text-green-900 font-bold text-sm">ROI ECONÔMICO</p>
                      <p className="text-green-800 font-bold text-lg">{archetype.roi}</p>
                    </div>
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 text-sm">{archetype.quote}</blockquote>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-yellow-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Em Números Reais</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><p className="text-4xl font-bold text-yellow-600 mb-2">200+</p><p className="text-gray-600 font-semibold">Clientes</p></div>
            <div className="text-center"><p className="text-4xl font-bold text-green-600 mb-2">R$ 50M+</p><p className="text-gray-600 font-semibold">Patrimônio</p></div>
            <div className="text-center"><p className="text-4xl font-bold text-blue-600 mb-2">98%</p><p className="text-gray-600 font-semibold">Satisfação</p></div>
            <div className="text-center"><p className="text-4xl font-bold text-purple-600 mb-2">14-36</p><p className="text-gray-600 font-semibold">Meses</p></div>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Qual é seu arquétipo? Descubra qual estratégia funciona melhor para você</p>
          <a href="https://wa.me/19998187567" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all inline-block">📊 Ver Meu Arquétipo</a>
        </div>
      </div>
    </section>
  );
}
