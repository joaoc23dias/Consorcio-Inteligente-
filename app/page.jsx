'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, CheckCircle, ArrowRight, Play } from 'lucide-react';

// ✅ IMPORTAR OS 3 COMPONENTES NOVOS
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ValueStackingSection from './components/ValueStackingSection';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedVideo, setExpandedVideo] = useState(null);

  const testimonials = [
    {
      name: "André Silva",
      role: "Médico",
      before: "Preso em financiamentos 7-9% ao ano",
      after: "2 cartas de R$ 500 mil contempladas",
      roi: "+R$ 700k economizados em juros",
      quote: "Descobri que enquanto financiava imóvel pagando juros, outros estavam usando consórcio para multiplicar patrimônio. Agora tenho 2 imóveis e patrimônio real.",
      videoId: "andre-silva"
    },
    {
      name: "Paulo Martins",
      role: "Corretor",
      before: "Comissões flutuantes, renda instável",
      after: "Renda passiva + 3 cartas contemp.",
      roi: "Contemplada no 1º mês",
      quote: "Meu maior erro foi demorar a entender. Hoje tenho renda passiva que não depende da economia. Consórcio mudou meu jogo.",
      videoId: "paulo-martins"
    },
    {
      name: "Carlos Eduardo",
      role: "Empresário",
      before: "Capital preso em operações",
      after: "R$ 850k em 18 meses",
      roi: "+3 imóveis para portfólio",
      quote: "Como empresário, capital é tudo. Consórcio me permitiu multiplicar patrimônio enquanto meu negócio crescia. Zero juros mudou a equação.",
      videoId: "carlos-eduardo"
    }
  ];

  const faqItems = [
    {
      category: "SOBRE O MÉTODO SPA",
      q: "Por que consórcio é SUPERIOR a financiamento bancário?",
      a: "BANCO: 7
