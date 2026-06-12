'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, CheckCircle, ArrowRight, Play } from 'lucide-react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import UrgencySection from './components/UrgencySection';
import GuaranteeSection from './components/GuaranteeSection';

export default function Home() {
          return (
                      <div className="w-full min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
                              {/* HERO SECTION */}
                            <HeroSection />
                      
                              {/* BENEFITS SECTION */}
                            <BenefitsSection />
                      
                              {/* SOCIAL PROOF SECTION */}
                            <SocialProofSection />
                      
                              {/* FAQ SECTION */}
                            <FAQSection />
                      
                              {/* URGENCY SECTION */}
                            <UrgencySection />
                      
                              {/* GUARANTEE SECTION */}
                            <GuaranteeSection />
                      
                              {/* CTA FINAL SECTION */}
                            <CTASection />
                      
                              {/* FOOTER */}
                            <footer className="bg-blue-950 text-white text-center py-6 border-t border-blue-800">
                                    <p className="text-sm">© 2024 Consórcio Inteligente. Todos os direitos reservados.</p>p>
                            </footer>footer>
                      </div>div>
                    );
}</div>
