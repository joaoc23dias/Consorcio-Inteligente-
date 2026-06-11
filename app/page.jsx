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

// Data from original site
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
                </nav>nav>
          
              {/* HERO SECTION */}
                <section className="pt-32 pb-20 px-4 text-center">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Crie sua Riqueza com Consórcio Inteligente</h2>h2>
                        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">Descubra como João Dias multiplicou seu patrimônio em 300% em 3 anos usando o método que 10,000+ pessoas já confiam.</p>p>
                        <button className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-300 transition transform hover:scale-105">
                                  Começar Agora Gratuitamente
                        </button>button>
                </section>section>
          
              {/* PROBLEMA SECTION */}
                <section className="py-20 px-4 bg-black/30">
                        <div className="max-w-6xl mx-auto">
                                  <h2 className="text-4xl font-bold text-white mb-12 text-center">Por que Bancos Não Funcionam Para Você?</h2>h2>
                                  <div className="grid md:grid-cols-2 gap-12">
                                              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                                                            <h3 className="text-2xl font-bold text-red-400 mb-4">BANCO TRADICIONAL</h3>h3>
                                                            <ul className="space-y-3 text-gray-200">
                                                                            <li>❌ Juros de 2-4% ao mês</li>li>
                                                                            <li>❌ Burocracia infinita</li>li>
                                                                            <li>❌ Você enriquece 0%</li>li>
                                                                            <li>❌ Inféliz após 30 anos</li>li>
                                                                            <li>❌ Sem controle financeiro</li>li>
                                                            </ul>ul>
                                              </div>div>
                                              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                                                            <h3 className="text-2xl font-bold text-green-400 mb-4">CONSÓRCIO INTELIGENTE</h3>h3>
                                                            <ul className="space-y-3 text-gray-200">
                                                                            <li>✅ 0% de juros</li>li>
                                                                            <li>✅ Processo simples</li>li>
                                                                            <li>✅ Você enriquece 300%+</li>li>
                                                                            <li>✅ Livre em 3 anos</li>li>
                                                                            <li>✅ Controle total</li>li>
                                                            </ul>ul>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
              {/* MÉTODO SPA SECTION */}
                <section className="py-20 px-4">
                        <div className="max-w-6xl mx-auto">
                                  <h2 className="text-4xl font-bold text-white mb-12 text-center">O Método SPA</h2>h2>
                                  <p className="text-center text-gray-200 mb-12 text-lg">Três pilares que transformam sua vida financeira</p>p>
                                  <div className="grid md:grid-cols-3 gap-8">
                                              <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-yellow-400/30 text-center">
                                                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                                                            <Shield className="text-black" size={32} />
                                                            </div>div>
                                                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">SEGURANÇA</h3>h3>
                                                            <p className="text-gray-200">100% seguro, legal e regulado. Seus dados estão protegidos por tecnologia de ponta.</p>p>
                                              </div>div>
                                              <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-yellow-400/30 text-center">
                                                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                                                            <Zap className="text-black" size={32} />
                                                            </div>div>
                                                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">RAPIDEZ</h3>h3>
                                                            <p className="text-gray-200">Processos automáticos. Receba seu dinheiro em tempo record.</p>p>
                                              </div>div>
                                              <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-yellow-400/30 text-center">
                                                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                                                            <Users className="text-black" size={32} />
                                                            </div>div>
                                                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">APOIO</h3>h3>
                                                            <p className="text-gray-200">Comunidade de especialistas pronta para ajudar seu crescimento.</p>p>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
              {/* SOCIAL PROOF SECTION - COMPONENT */}
                <SocialProofSection />
          
              {/* JOÃO DIAS SECTION */}
                <section className="py-20 px-4 bg-black/40">
                        <div className="max-w-6xl mx-auto">
                                  <h2 className="text-4xl font-bold text-white mb-12 text-center">Quem É João Dias?</h2>h2>
                                  <div className="grid md:grid-cols-2 gap-12 items-center">
                                              <div>
                                                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 rounded-lg">
                                                                            <div className="bg-blue-900 p-12 rounded-lg">
                                                                                              <p className="text-6xl font-bold text-yellow-400 text-center">João</p>p>
                                                                                              <p className="text-center text-gray-200 mt-4">Fundador do Método Consórcio Inteligente</p>p>
                                                                            </div>div>
                                                            </div>div>
                                              </div>div>
                                              <div>
                                                            <h3 className="text-3xl font-bold text-white mb-6">De Endividado a Milionário em 3 Anos</h3>h3>
                                                            <p className="text-gray-200 mb-4 text-lg">João Dias estava endividado e desesperado. Precisava de uma solução que não envolvesse bancos ou juros abusivos.</p>p>
                                                            <p className="text-gray-200 mb-4 text-lg">Criou o método Consórcio Inteligente, que mudou sua vida financeira para sempre.</p>p>
                                                            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6 mt-6">
                                                                            <p className="text-yellow-400 font-bold text-lg">Resultado: 300% de retorno em 3 anos</p>p>
                                                                            <p className="text-gray-200 mt-2">Agora ensina sua metodologia para 10,000+ pessoas ao redor do mundo.</p>p>
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
              {/* RESULTADOS SECTION */}
                <section className="py-20 px-4">
                        <div className="max-w-6xl mx-auto">
                                  <h2 className="text-4xl font-bold text-white mb-12 text-center">Resultados Reais dos Nossos Membros</h2>h2>
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
          
              {/* FAQ SECTION - COMPONENT */}
                <FAQSection />
          
              {/* URGENCY SECTION - COMPONENT */}
                <UrgencySection />
          
              {/* GUARANTEE SECTION - COMPONENT */}
                <GuaranteeSection />
          
              {/* CTA FINAL - COMPONENT */}
                <CTASection />
          
              {/* FOOTER */}
                <footer className="bg-black/80 border-t border-yellow-400/20 py-12 px-4">
                        <div className="max-w-6xl mx-auto">
                                  <div className="grid md:grid-cols-4 gap-8 mb-8">
                                              <div>
                                                            <h4 className="text-white font-bold mb-4">Consórcio Inteligente</h4>h4>
                                                            <p className="text-gray-400 text-sm">Transformando vidas financeiras desde 2020</p>p>
                                              </div>div>
                                              <div>
                                                            <h4 className="text-white font-bold mb-4">Links</h4>h4>
                                                            <ul className="space-y-2">
                                                                            <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition">Sobre Nós</a>a></li>li>
                                                                            <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition">Contato</a>a></li>li>
                                                            </ul>ul>
                                              </div>div>
                                              <div>
                                                            <h4 className="text-white font-bold mb-4">Legal</h4>h4>
                                                            <ul className="space-y-2">
                                                                            <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition">Privacidade</a>a></li>li>
                                                                            <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition">Termos</a>a></li>li>
                                                            </ul>ul>
                                              </div>div>
                                              <div>
                                                            <h4 className="text-white font-bold mb-4">Contato</h4>h4>
                                                            <p className="text-gray-400 text-sm">contato@consorcio.com.br</p>p>
                                                            <p className="text-gray-400 text-sm">+55 (11) 98765-4321</p>p>
                                              </div>div>
                                  </div>div>
                                  <div className="border-t border-gray-700 pt-8 text-center">
                                              <p className="text-gray-400">© 2024 Consórcio Inteligente. Todos os direitos reservados.</p>p>
                                  </div>div>
                        </div>div>
                </footer>footer>
          </div>div>
        );
}</div>
