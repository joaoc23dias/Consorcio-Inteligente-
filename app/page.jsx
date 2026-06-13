'use client';
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import SixBenefitsSection from './components/SixBenefitsSection';
import ValueStackingSection from './components/ValueStackingSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import UrgencySection from './components/UrgencySection';
import GuaranteeSection from './components/GuaranteeSection';

// Hormozi funnel order:
// 1. Hero (Claim + Mecanismo + Prova imediata)
// 2. Pain Agitation (97% erram — por quê)
// 3. Mechanism / 6 Razões (como o SPA resolve cada dor)
// 4. Social Proof (resultados reais)
// 5. Grand Slam Offer / Value Stacking (Before/After + +R$1.3M)
// 6. Urgency + Bonus Stack
// 7. Guarantee (reversão de risco)
// 8. CTA final (formulário)
// 9. FAQ
const sections = [
  HeroSection,
  BenefitsSection,
  SixBenefitsSection,
  SocialProofSection,
  ValueStackingSection,
  UrgencySection,
  GuaranteeSection,
  CTASection,
  FAQSection,
];

export default function Home() {
  // Global reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', overflowX: 'hidden' }}>
      {sections.map((Section, i) => (
        <Section key={i} />
      ))}
      <hr className="divider-orange" />
      <footer style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; 2024 Cons&oacute;rcio Inteligente &mdash; M&eacute;todo SPA&reg; Patenteado GAIA Group.
          Todos os direitos reservados.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.4rem', maxWidth: '48rem', margin: '0.4rem auto 0' }}>
          *Resultados ilustrativos. Rentabilidade e contempla&ccedil;&atilde;o dependem de perfil, grupo e condi&ccedil;&otilde;es de mercado.
          O cons&oacute;rcio n&atilde;o &eacute; investimento financeiro.
        </p>
      </footer>
    </main>
  );
}
