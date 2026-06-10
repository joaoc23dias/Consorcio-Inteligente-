'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
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
                <span className="text-white font-bold">C</span>
              </div>
              <span className="font-bold text-xl">Consórcio Inteligente</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-blue-600">Início</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600">Benefícios</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Depoimentos</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Quero Participar</button>
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <HeroSection />
      <BenefitsSection />
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Depoimentos de Consorciados Satisfeitos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2">André Silva</h3>
              <p className="text-gray-600 text-sm mb-4">CEO da Empresa X</p>
              <p className="text-gray-700 mb-4">2 cartas de R$ 500 mil contempladas</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2">Maria Santos</h3>
              <p className="text-gray-600 text-sm mb-4">Diretora Financeira</p>
              <p className="text-gray-700 mb-4">3 cartas de R$ 300 mil cada</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2">João Costa</h3>
              <p className="text-gray-600 text-sm mb-4">Empresário</p>
              <p className="text-gray-700 mb-4">1 carta de R$ 1 milhão</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-gray-300 rounded-lg">
                <button onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)} className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <ChevronDown size={20} className={expandedFaq === faq.id ? 'rotate-180' : ''} />
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 py-4 bg-white text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Pronto para Mudar Sua Vida?</h2>
          <p className="text-xl mb-8">Junte-se a milhares que conquistaram seus sonhos através do consórcio inteligente</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 inline-flex items-center">
            Começar Agora <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Consórcio Inteligente</h3>
              <p className="text-gray-400">Transformando sonhos em realidade através do consórcio</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Recursos</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Consórcio Inteligente. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
