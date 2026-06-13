'use client';

import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import SixBenefitsSection from './components/SixBenefitsSection';
import ValueStackingSection from './components/ValueStackingSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import UrgencySection from './components/UrgencySection';
import GuaranteeSection from './components/GuaranteeSection';

const sections = [HeroSection, SixBenefitsSection, BenefitsSection, ValueStackingSection, SocialProofSection, FAQSection, UrgencySection, GuaranteeSection, CTASection];

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      {sections.map((Section, i) => <Section key={i} />)}
      <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', padding: '1.5rem 1rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>&copy; 2024 Cons&oacute;rcio Inteligente. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
