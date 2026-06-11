'use client';

import SixBenefitsSection from './components/SixBenefitsSection';
import SixArchetypesSection from './components/SixArchetypesSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import UrgencySection from './components/UrgencySection';
import GuaranteeSection from './components/GuaranteeSection';

export default function Home() {
    return (
          <main className="min-h-screen bg-white">
            {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <div className="max-w-4xl mx-auto text-center">
                                  <h1 className="text-5xl font-bold mb-6">Passe de 0 a 3 Imóveis em 14 Meses — Enquanto Bancos Cobram 7-9%, Você Economiza R$ 680 Mil</h1>h1>
                                  <p className="text-xl mb-8">Transforme sua vida financeira com o Método SPA</p>p>
                                  <button className="bg-white text-blue-600 px-8 py-3">Comece Agora</button>button>
                        </div>div>
                </div>div>
          
            {/* O Desafio Section */}
                <section className="py-20 px-4 bg-gray-50">
                        <div className="max-w-4xl mx-auto">
                                  <h2 className="text-3xl font-bold mb-12">O Desafio Silencioso: Por Que Empresários Inteligentes Rejeitam Bancos</h2>h2>
                                  
                                  <div className="bg-white p-6 shadow rounded-lg mb-6 sombra">
                                              <h3 className="text-xl font-bold mb-4">💰 Economize R$ 680 Mil em Juros</h3>h3>
                                              <p className="text-gray-600">Sem juros abusivos como no crédito tradicional</p>p>
                                              <p className="text-gray-600">Enquanto custa financiamento 7-9% ao ano, o consórcio custa apenas 2-3%. Para R$ 500 mil em 30 anos: você economizou R$ 680 mil.</p>p>
                                              <p className="text-blue-600 font-bold mt-4">R$ 680.000</p>p>
                                  </div>div>
                        
                                  <div className="bg-white p-6 shadow rounded-lg mb-6 sombra">
                                              <h3 className="text-xl font-bold mb-4">📈 Gere R$ 8.500/Mês de Renda Passiva</h3>h3>
                                              <p className="text-gray-600">Adapte-se à sua realidade financeira</p>p>
                                              <p className="text-gray-600">2 imóveis alugados gerando R$ 4.500 e R$ 4.000 por mês = R$ 8.500 em renda passiva antes mesmo de pagar todas as parcelas.</p>p>
                                              <p className="text-blue-600 font-bold mt-4">R$ 8.500/mês</p>p>
                                  </div>div>
                        
                                  <div className="bg-white p-6 shadow rounded-lg mb-6 sombra">
                                              <h3 className="text-xl font-bold mb-4">⚡ Contemple 3 Imóveis em 36 meses (vs 60+ do Mercado)</h3>h3>
                                              <p className="text-gray-600">Regulado e fiscalizado pelo Colúmbia Britânica</p>p>
                                              <p className="text-gray-600">Média do mercado: 60+ meses. Nossos clientes: 14-36 meses. Você fica 24 meses à frente da concorrência.</p>p>
                                              <p className="text-blue-600 font-bold mt-4">24 MESES VANTAGEM</p>p>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* FASE 2: Seção de 6 Benefícios */}
                <SixBenefitsSection />
          
            {/* FASE 3: Seção de 6 Arquétipos */}
                <SixArchetypesSection />

              {/* FASE 4: Seção de Prova Social */}
              <SocialProofSection />

              {/* FASE 4: Seção de FAQ */}
              <FAQSection />

              {/* FASE 4: Call-to-Action Final */}
              <CTASection />

              {/* FASE 5: Seção de Urgência e Escassez */}
              <UrgencySection />

              {/* FASE 6: Seção de Garantia */}
              <GuaranteeSection />
          </main>main>
        );
}</main>
