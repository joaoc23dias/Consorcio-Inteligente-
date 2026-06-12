'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import UrgencySection from './components/UrgencySection';
import GuaranteeSection from './components/GuaranteeSection';

export default function Home() {
      return (
              <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 min-h-screen">
                    <HeroSection />
                    <BenefitsSection />
                    <SocialProofSection />
                    <FAQSection />
                    <UrgencySection />
                    <GuaranteeSection />
                    <CTASection />
                    <footer className="bg-black/80 border-t border-yellow-400/20 py-12 px-4">
                            <div className="max-w-6xl mx-auto">
                                      <div className="grid md:grid-cols-3 gap-8 mb-8">
                                                  <div>
                                                                <h4 className="text-white font-bold mb-4">Sobre</h4>h4>
                                                                <p className="text-gray-400 text-sm">Consórcio Inteligente - Transformando vidas financeiras desde 2020</p>p>
                                                  </div>div>
                                                  <div>
                                                                <h4 className="text-white font-bold mb-4">Links</h4>h4>
                                                                <ul className="space-y-2">
                                                                                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Home</a>a></li>li>
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
                    </footer>
              </div>
            );
}
}</div>
