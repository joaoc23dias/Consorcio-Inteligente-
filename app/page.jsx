'use client';

import React, { useState } from 'react';
import { ChevronDown, Check, Zap, Shield, Users, Target } from 'lucide-react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import UrgencySection from './components/UrgencySection';
import GuaranteeSection from './components/GuaranteeSection';

const testimonials = [
    {
            id: 1,
            author: 'Mariana Silva',
            role: 'Empresária',
            text: 'O consórcio inteligente transformou minha vida financeira. Consegui comprar meu apartamento sem pagar juros abusivos.',
            rating: 5
    },
    {
            id: 2,
            author: 'Carlos Mendes',
            role: 'Empresário',
            text: 'Melhor decisão financeira que tomei. O retorno foi muito maior que esperava.',
            rating: 5
    },
    {
            id: 3,
            author: 'Fernanda Costa',
            role: 'Professora',
            text: 'Finalmente consegui sair da dívida. Este método realmente funciona!',
            rating: 5
    },
    {
            id: 4,
            author: 'Ricardo Santos',
            role: 'Engenheiro',
            text: 'Aumentei meu patrimônio em 300% em 3 anos. Simplesmente incrível!',
            rating: 5
    }
    ];

const faqData = [
    {
            question: 'Como funciona o consórcio inteligente?',
            answer: 'O consórcio funciona com grupos de pessoas reunindo dinheiro mensalmente. A cada assembleia, um grupo é sorteado ou contemplado, recebendo o fundo acumulado.'
    },
    {
            question: 'Quanto preciso investir?',
            answer: 'Começamos com investimentos a partir de R$ 500/mês. Você pode aumentar conforme sua capacidade financeira.'
    },
    {
            question: 'É seguro? Posso confiar?',
            answer: 'Sim! Operamos com total transparência, conformidade legal e proteção de seus dados. Todos os processos são auditados.'
    },
    {
            question: 'Quando recebo meu dinheiro?',
            answer: 'Isso depende do sorteio ou indicação. Em média, você recebe entre 6-18 meses após começar.'
    },
    {
            question: 'Há desistências ou penalidades?',
            answer: 'Você pode sair do consórcio, mas com multas de desistência conforme os termos. Recomendamos completar o ciclo.'
    },
    {
            question: 'Como é feito o sorteio?',
            answer: 'Usamos um sistema completamente automatizado e transparente, com verificação em tempo real em nossas assembleias.'
    },
    {
            question: 'Posso indicar outras pessoas?',
            answer: 'Sim! Indicar amigos e familiares gera bônus e vantagens exclusivas para sua rede de indicação.'
    },
    {
            question: 'Qual é a taxa de sucesso?',
            answer: '98% de nossas associados atingem seus objetivos financeiros. A taxa de satisfação é superior a 95%.'
    }
    ];

export default function Home() {
      const [expandedFaq, setExpandedFaq] = useState(null);
      const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  return (
          <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
              {/* NAVIGATION */}
                <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-yellow-400/20">
                        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                                  <h1 className="text-2xl font-bold text-white">Consórcio Inteligente</h1>h1>
                                  <div className="flex gap-6">
                                              <button className="text-white hover:text-yellow-400 transition">Sobre</button>button>
                                              <button className="text-white hover:text-yellow-400 transition">Método</button>button>
                                              <button className="text-white hover:text-yellow-400 transition">Resultados</button>button>
                                              <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition">Começar</button>button>
                                  </div>div>
                        </div>div>
                </nav>nav></div>
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Crie sua Riqueza com Consórcio Inteligente</h2>h2>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">Descubra como João Dias multiplicou seu patrimônio em 300% em 3 anos</p>p>
              <button className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-300 transition">
                        Começar Agora
              </button>button>
      </section>section>
          
      {/* PROBLEMA SECTION */}
                <section className="py-20 px-4 bg-black/30">
                  <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-bold text-white mb-12 text-center">Por que Bancos Não Funcionam</h2>h2>
                            <div className="grid md:grid-cols-2 gap-12">
                                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                                                      <h3 className="text-2xl font-bold text-red-400 mb-4">BANCO</h3>h3>
                                                      <ul className="space-y-3 text-gray-200">
                                                                      <li>❌ Juros 2-4% ao mês</li>li>
                                                                      <li>❌ Burocracia</li>li>
                                                                      <li>❌ 0% retorno</li>li>
                                                      </ul>ul>
                                        </div>div>
                                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                                                      <h3 className="text-2xl font-bold text-green-400 mb-4">CONSÓRCIO</h3>h3>
                                                      <ul className="space-y-3 text-gray-200">
                                                                      <li>✅ 0% juros</li>li>
                                                                      <li>✅ Simples</li>li>
                                                                      <li>✅ 300%+ retorno</li>li>
                                                      </ul>ul>
                                        </div>div>
                            </div>div>
                  </div>div>
          </section>
          
              {/* METODO SECTION */}
                <section className="py-20 px-4">
                        <div className="max-w-6xl mx-auto">
                                  <h2 className="text-4xl font-bold text-white mb-12 text-center">O Método SPA</h2>h2>
                                  <div className="grid md:grid-cols-3 gap-8">
                                              <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-yellow-400/30 text-center">
                                                            <Shield className="w-16 h-16 bg-yellow-400 rounded-full p-2 text-black mx-auto mb-4" />
                                                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">SEGURANÇA</h3>h3>
                                                            <p className="text-gray-200">100% seguro e regulado</p>p>
                                              </div>div>
                                              <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-yellow-400/30 text-center">
                                                            <Zap className="w-16 h-16 bg-yellow-400 rounded-full p-2 text-black mx-auto mb-4" />
                                                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">RAPIDEZ</h3>h3>
                                                            <p className="text-gray-200">Processos rápidos</p>p>
                                              </div>div>
                                              <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-yellow-400/30 text-center">
                                                            <Users className="w-16 h-16 bg-yellow-400 rounded-full p-2 text-black mx-auto mb-4" />
                                                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">APOIO</h3>h3>
                                                            <p className="text-gray-200">Comunidade de especialistas</p>p>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
                <SocialProofSection />
          
                <section className="py-20 px-4 bg-black/40">
                        <div className="max-w-6xl mx-auto">
                                  <h2 className="text-4xl font-bold text-white mb-12 text-center">João Dias</h2>h2>
                                  <div className="grid md:grid-cols-2 gap-12 items-center">
                                              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 rounded-lg">
                                                            <div className="bg-blue-900 p-12 rounded-lg text-center">
                                                                            <p className="text-6xl font-bold text-yellow-400">João</p>p>
                                                                            <p className="text-center text-gray-200 mt-4">Fundador</p>p>
                                                            </div>div>
                                              </div>div>
                                              <div>
                                                            <h3 className="text-3xl font-bold text-white mb-6">De Endividado a Milionário</h3>h3>
                                                            <p className="text-gray-200 mb-4 text-lg">João Dias mudou sua vida financeira com o método.</p>p>
                                                            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6 mt-6">
                                                                            <p className="text-yellow-400 font-bold text-lg">Resultado: 300% em 3 anos</p>p>
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
                <section className="py-20 px-4">
                        <div className="max-w-6xl mx-auto">
                                  <h2 className="text-4xl font-bold text-white mb-12 text-center">Resultados</h2>h2>
                                  <div className="grid md:grid-cols-2 gap-8">
                                      {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white/10 backdrop-blur rounded-lg p-8 border border-yellow-400/20">
                                            <div className="flex items-center mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <span key={i} className="text-yellow-400 text-xl">★</span>span>
                                                  ))}
                                            </div>div>
                                            <p className="text-gray-200 mb-6 italic">"{testimonial.text}"</p>p>
                                            <p className="text-white font-bold">{testimonial.author}</p>p>
                                            <p className="text-yellow-400 text-sm">{testimonial.role}</p>p>
                            </div>div>
                          ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
                <FAQSection />
                <UrgencySection />
                <GuaranteeSection />
                <CTASection />
          
              {/* FOOTER */}
                <footer className="bg-black/80 border-t border-yellow-400/20 py-12 px-4">
                        <div className="max-w-6xl mx-auto">
                                  <div className="grid md:grid-cols-4 gap-8 mb-8">
                                              <div>
                                                            <h4 className="text-white font-bold mb-4">Consórcio Inteligente</h4>h4>
                                                            <p className="text-gray-400 text-sm">Transformando vidas</p>p>
                                              </div>div>
                                              <div>
                                                            <h4 className="text-white font-bold mb-4">Links</h4>h4>
                                                            <ul className="space-y-2">
                                                                            <li><a href="#" className="text-gray-400 hover:text-yellow-400">Sobre</a>a></li>li>
                                                            </ul>ul>
                                              </div>div>
                                              <div>
                                                            <h4 className="text-white font-bold mb-4">Legal</h4>h4>
                                                            <ul className="space-y-2">
                                                                            <li><a href="#" className="text-gray-400 hover:text-yellow-400">Privacidade</a>a></li>li>
                                                            </ul>ul>
                                              </div>div>
                                              <div>
                                                            <h4 className="text-white font-bold mb-4">Contato</h4>h4>
                                                            <p className="text-gray-400 text-sm">contato@consorcio.com</p>p>
                                              </div>div>
                                  </div>div>
                                  <div className="border-t border-gray-700 pt-8 text-center">
                                              <p className="text-gray-400">© 2024 Todos direitos reservados</p>p>
                                  </div>div>
                        </div>div>
                </footer>footer>          </>div>
            );
}</section>
</>div>
      );
}
