'use client';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import MethodSection from './components/MethodSection';
import FounderSection from './components/FounderSection';
import SixBenefitsSection from './components/SixBenefitsSection';
import SocialProofSection from './components/SocialProofSection';
import ValueStackingSection from './components/ValueStackingSection';
import UrgencySection from './components/UrgencySection';
import GuaranteeSection from './components/GuaranteeSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';

// Hormozi funnel order:
// 1. Hero (Claim + Mecanismo + Prova imediata)
// 2. Pain Agitation (97% erram — por que)
// 3. Mechanism: Como Funciona o Metodo SPA (3 passos)
// 4. SixBenefits: 6 maneiras de usar o consorcio
// 5. Social Proof (resultados reais)
// 6. Grand Slam Offer / Value Stacking (Before/After + +R$1.3M)
// 7. Urgency + Bonus Stack
// 8. Guarantee (reversao de risco)
// 9. CTA final (formulario)
// 10. FAQ

const sections = [
  HeroSection,
  BenefitsSection,
  MethodSection,
  FounderSection,
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
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', overflowX: 'hidden' }}>
      <Navbar />
      <div style={{ paddingTop: '70px' }}>
        {sections.map((Section, i) => (
          <Section key={i} />
        ))}
      </div>
      <hr className="divider-orange" />
      <footer style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <img
            src="/logo-gaia.png"
            alt="Gaia Group"
            style={{ height: '32px', width: 'auto', opacity: 0.7, display: 'inline-block' }}
          />
        </div>
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
