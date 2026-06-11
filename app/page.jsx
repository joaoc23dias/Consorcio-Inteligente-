'use client';

import SixBenefitsSection from './components/SixBenefitsSection';
import SixArchetypesSection from './components/SixArchetypesSection';

export default function Home() {
              return (
                              <main className="min-h-screen bg-white">
                                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
                                            <div className="max-w-4xl mx-auto text-center">
                                                      <h1 className="text-5xl font-bold mb-6">Passe de 0 a 3 Imóveis em 14 Meses — Enquanto Bancos Cobram 7-9%, Você Economiza R$ 680 Mil</h1>
                                                      <p className="text-xl mb-8">Transforme sua vida financeira com o Método SPA</p>
                                                      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100">
                                                                  Comece Agora
                                                      </button>                                            </div>
                                    </div>
                              
                                    <section className="py-20 px-4 bg-gray-50">
                                            <div className="max-w-4xl mx-auto">
                                                      <h2 className="text-3xl font-bold text-center mb-12">O Desafio Silencioso: Por Que Empresários Inteligentes Rejeitam Bancos</h2>
                                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                                  <div className="bg-white p-6 shadow rounded-lg">
                                                                                <h3 className="text-xl font-bold mb-4">💰 Economize R$ 680 Mil em Juros</h3>
                                                                                <p className="text-gray-600">Sem juros abusivos como no crédito tradicional</p>
                                                                                <p className="text-gray-600">Enquanto custa financiamento 7-9% ao ano, o consórcio custa apenas 2-3%. Para R$ 500 mil em 30 anos: você economizou R$ 680 mil.</p>
                                                                  </div>
                                                                  <div className="bg-white p-6 shadow rounded-lg">
                                                                                <h3 className="text-xl font-bold mb-4">📈 Gere R$ 8.500/Mês de Renda Passiva</h3>
                                                                                <p className="text-gray-600">Adapte-se à sua realidade financeira</p>
                                                                                <p className="text-gray-600">2 imóveis alugados gerando R$ 4.500 e R$ 4.000 por mês = R$ 8.500 em renda passiva antes mesmo de pagar todas as parcelas.</p>
                                                                  </div>
                                                                  <div className="bg-white p-6 shadow rounded-lg">
                                                                                <h3 className="text-xl font-bold mb-4">⚡ Contemple 3 Imóveis em 36 meses (vs 60+ do Mercado)</h3>
                                                                                <p className="text-gray-600">Regulado e fiscalizado pelo Colúmbia Britânica</p>
                                                                                <p className="text-gray-600">Média do mercado: 60+ meses. Nossos clientes: 14-36 meses. Você fica 24 meses à frente da concorrência.</p>
                                                                  </div>
                                                      </div>
                                            </div>
                                    </section>
                              
                                          {/* Fase 2: Seção de 6 Benefícios */}
                                    <SixBenefitsSection />
                              
                                          {/* Fase 3: Seção de 6 Arquetipos */}
                                    <SixArchetypesSection />
                              </main>
                            );
};
