'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, CheckCircle, ArrowRight, Play } from 'lucide-react';

// IMPORTAR OS 3 COMPONENTES ORIGINAIS
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ValueStackingSection from './components/ValueStackingSection';

export default function Home() {
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
        const [expandedFaq, setExpandedFaq] = useState(null);
        const [expandedVideo, setExpandedVideo] = useState(null);

  const testimonials = [
        {
                    name: "João Dias",
                    role: "Empresário",
                    before: "Preso em financiamentos 7-9% ao ano",
                    after: "2 cartasde R$ 500 mil contempladas",
                    roi: "R$ 680k economizados em juros",
                    quote: "Descobri que enquanto financiava imóvel pagando juros, outros estavam usando consórcio para multiplicar patrimônio. Agora tenho 2 imóveis e patrimônio real.",
                    videoId: "joao-dias"
        },
        {
                    name: "Maria Silva",
                    role: "Empresária",
                    before: "Precisava de capital para expandir negócio",
                    after: "R$ 1.2 milhões em cartas",
                    roi: "Negócio acelerou 300%",
                    quote: "O consórcio foi o catalisador que meu negócio precisava. Capital sem dívida, sem juros. A diferença é abissal.",
                    videoId: "maria-silva"
        },
        {
                    name: "Carlos Santos",
                    role: "Investidor",
                    before: "Renda presa em investimentos baixo rendimento",
                    after: "R$ 8.500/mês de renda passiva",
                    roi: "Patrimônio cresceu 5x",
                    quote: "Consórcio me permitiu estruturar uma carteira de imóveis que gera R$ 8.500 mensais. Hoje os imóveis pagam a si mesmos.",
                    videoId: "carlos-santos"
        }
          ];

                return (
                          <div <div className="w-full min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-600 text-white"><
                          }}>
                                {/* SEÇÃO 1: HERO */}
                                      <HeroSection />

                                {/* SEÇÃO 2: BENEFÍCIOS */}
                                      <BenefitsSection />

                                {/* SEÇÃO 3: VALUE STACKING */}
                                      <ValueStackingSection />

                                {/* RODAPÉ */}
                                      <footer className="bg-black/80 border-t border-yellow-400/20 py-12 px-4">
                                              <div className="max-w-6xl mx-auto">
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                                                    <div>
                                                                                  <h4 className="text-white font-bold mb-4">Sobre Nós</h4>h4>
                                                                                  <p className="text-gray-400 text-sm">Consórcio Inteligente - Transformando vidas financeiras desde 2020.</p>p>
                                                                    </div>div>
                                                                    <div>
                                                                                  <h4 className="text-white font-bold mb-4">Links</h4>h4>
                                                                                  <ul className="space-y-2">
                                                                                                  <li><a href="#" className="text-gray-400 hover:text-yellow-400">Home</a>a></li>li>
                                                                                                  <li><a href="#" className="text-gray-400 hover:text-yellow-400">Sobre</a>a></li>li>
                                                                                                  <li><a href="#" className="text-gray-400 hover:text-yellow-400">Contato</a>a></li>li>
                                                                                  </ul>ul>
                                                                    </div>div>                                                                                  <p className="text-gray-400 text-sm">contato@consorcio.com</p>p>
                                                                    </div>div>
                                                        </div>div>
                                                        <div className="border-t border-gray-700 pt-8 text-center">
                                                                    <p className="text-gray-400 text-sm">© 2024 Todos os direitos reservados.</p>p>
                                                        </div>div>
                                              </div>div>      </div>
              );
            }h
