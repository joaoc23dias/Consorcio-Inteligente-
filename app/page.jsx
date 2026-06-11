''use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import HeroSection from './components/HeroSection';

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    { id: 1, question: "Como funciona o consórcio?", answer: "O consórcio é uma modalidade de financiamento colaborativo onde um grupo de pessoas se associa para adquirir bem móvel ou imóvel." },
    { id: 2, question: "Qual é a diferença entre consórcio e financiamento?", answer: "No consórcio você paga entre seus pares. No financiamento você toma emprestado e paga juros." },
    { id: 3, question: "Quanto tempo leva para ser contemplado?", answer: "O tempo varia de 24 a 120 meses conforme o grupo de consórcio." },
    { id: 4, question: "É seguro participar de um consórcio?", answer: "Sim, desde que seja uma administradora regularizada pela BACEN." }
      ];

  return (
        <div className="min-h-screen bg-white">
              <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                                <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                                                                          <span className="text-white font-bold">C</span>span>
                                                          </div>div>
                                                          <span className="font-bold text-xl">Consórcio Inteligente</span>span>
                                            </div>div>
                                            <nav className="hidden md:flex space-x-8">
                                                          <a href="#hero" className="text-gray-700 hover:text-blue-600">Início</a>a>
                                                          <a href="#benefits" className="text-gray-700 hover:text-blue-600">Benefícios</a>a>
                                                          <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Depoimentos</a>a>
                                                          <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>a>
                                                          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Quero Participar</button>button>
                                            </nav>nav>
                                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
                                              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                            </button>button>
                                </div>div>
                      </div>div>
              </header>header>
        
              <HeroSection />
        
              <section id="benefits" className="py-20 bg-gray-50">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-4xl font-bold text-center mb-16">Benefícios do Consórcio Inteligente</h2>h2>
                                
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                                                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                                                          <span className="text-2xl">🏠</span>span>
                                                          </div>div>
                                                          <h3 className="text-xl font-bold mb-3">Acesso Facilitado</h3>h3>
                                                          <p className="text-gray-600">Acesso a imóveis com pagamentos mais acessíveis que financiamento tradicional.</p>p>
                                            </div>div>
                                
                                            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                                                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                                                          <span className="text-2xl">💰</span>span>
                                                          </div>div>
                                                          <h3 className="text-xl font-bold mb-3">Sem Juros</h3>h3>
                                                          <p className="text-gray-600">Pague apenas entre seus pares, sem intermediários cobrando juros.</p>p>
                                            </div>div>
                                
                                            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                                                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                                                          <span className="text-2xl">🔒</span>span>
                                                          </div>div>
                                                          <h3 className="text-xl font-bold mb-3">Segurança Garantida</h3>h3>
                                                          <p className="text-gray-600">Regulado pela BACEN com proteção legal completa.</p>p>
                                            </div>div>
                                
                                            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                                                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                                                          <span className="text-2xl">⏱️</span>span>
                                                          </div>div>
                                                          <h3 className="text-xl font-bold mb-3">Flexibilidade</h3>h3>
                                                          <p className="text-gray-600">Escolha o tempo de contemplação que se adequa seu perfil.</p>p>
                                            </div>div>
                                
                                            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                                                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                                                          <span className="text-2xl">👥</span>span>
                                                          </div>div>
                                                          <h3 className="text-xl font-bold mb-3">Comunidade Forte</h3>h3>
                                                          <p className="text-gray-600">Faça parte de uma rede de pessoas com objetivos similares.</p>p>
                                            </div>div>
                                
                                            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                                                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                                                          <span className="text-2xl">📈</span>span>
                                                          </div>div>
                                                          <h3 className="text-xl font-bold mb-3">Crescimento Patrimonial</h3>h3>
                                                          <p className="text-gray-600">Construa seu patrimônio de forma colaborativa e segura.</p>p>
                                            </div>div>
                                </div>div>
                      </div>div>
              </section>section></div>
