'use client';

import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import UrgencySection from './components/UrgencySection';
import GuaranteeSection from './components/GuaranteeSection';

const sections = [HeroSection, BenefitsSection, SocialProofSection, FAQSection, UrgencySection, GuaranteeSection, CTASection];

export default function Home() {
          return (
                    <main className="w-full min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
                              {sections.map((Section, i) => <Section key={i} />)}
                    <footer className="bg-blue-950 text-white text-center py-6 border-t border-blue-800"><p className="text-sm">&copy; 2024 Cons&oacute;rcio Inteligente. Todos os direitos reservados.</p></footer>
                    </main>
                    );
}
