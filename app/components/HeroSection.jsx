'use client';

import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-black text-white pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/40 rounded-full px-4 py-2">
            <span className="text-yellow-400 text-sm font-medium">✦ MÉTODO SPA® — PATENTEADO GAIA GROUP</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight">
          Saia do Financiamento Bancário
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            e Tenha 2-3 Imóveis em 14 Meses
          </span>
          <br />
          <span className="text-2xl md:text-3xl text-gray-300">(Economizando R$ 680 Mil em Juros)</span>
        </h1>

        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/50 rounded-xl px-6 py-4 max-w-2xl">
            <p className="text-green-400 text-center font-semibold text-lg">
              ⏱️ CONTEMPLAÇÃO MÉDIA: 14 MESES vs 36-60 DO MERCADO
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Nosso Método SPA® identifica os TOP 5-7% de grupos de consórcio 
          e estrutura suas múltiplas aquisições para contemplação estratégica.
          <br/>
          Sem juros, sem impacto no fluxo de caixa.
          <br/>
          Comprovado com +200 empresários inteligentes.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 mb-12 max-w-3xl mx-auto text-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">+200</p>
            <p className="text-gray-400 text-sm">Clientes</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">R$ 50M+</p>
            <p className="text-gray-400 text-sm">Patrimônio</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">98%</p>
            <p className="text-gray-400 text-sm">Satisfação</p>
          </div>
          <div className="hidden md:block">
            <p className="text-2xl md:text-3xl font-bold text-white">14</p>
            <p className="text-gray-400 text-sm">Meses (Med.)</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/19998187567" 
            className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition transform hover:scale-105"
          >
            🎯 Iniciar Simulação Grátis (2 min)
            <ArrowRight size={20} />
          </a>
          
          <a 
            href="https://calendar.app.google/vrfs719bs8DdDrst8" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition"
          >
            📞 Agendar Consultoria Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
