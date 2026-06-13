'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '0.85rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: scrolled
        ? 'rgba(10, 10, 12, 0.92)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled
        ? '1px solid rgba(255,255,255,0.06)'
        : '1px solid transparent',
      transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
    }}>
      {/* Logo Gaia */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Image
          src="/logo-gaia.png"
          alt="Gaia Group"
          width={120}
          height={40}
          priority
          style={{ objectFit: 'contain', height: '40px', width: 'auto' }}
        />
      </div>

      {/* CTA direita */}
      <a
        href="#cta"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
        }}
        style={{
          backgroundColor: 'var(--accent-orange)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.82rem',
          letterSpacing: '0.04em',
          padding: '0.55rem 1.2rem',
          borderRadius: '6px',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        Agendar Análise →
      </a>
    </nav>
  );
}
