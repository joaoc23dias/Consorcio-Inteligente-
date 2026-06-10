'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [menu, setMenu] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black/95 z-50 border-b border-yellow-600/20">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-black">G</div>
          <ul className="hidden md:flex gap-8">
            <li><a href="#hero" className="hover:text-yellow-600">Home</a></li>
            <li><a href="#metodo" className="hover:text-yellow-600">Método SPA</a></li>
          </ul>
          <div className="hidden md:flex gap-3">
            <a href="https://wa.me/19998187567" className="bg-green-500 px-4 py-2 rounded">WhatsApp</a>
            <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="bg-yellow-600 text-black px-4 py-2 rounded font-bold">Agendar</a>
          </div>
          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-6 text-center">
        <h1 className="font-bold text-5xl md:text-6xl mb-6">
          De Executivo Estagnado para Proprietário de <span className="text-yellow-600">2-3 Imóveis em 14 Meses</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">Sem juros bancários, sem comprometer fluxo de caixa</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="https://wa.me/19998187567" className="bg-yellow-600 text-black px-8 py-4 font-bold rounded">🎁 DOWNLOAD GRÁTIS</a>
          <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="border-2 border-yellow-600 px-8 py-4 font-bold rounded">📅 AGENDAR</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div><div className="text-4xl font-bold text-yellow-600">+200</div><div className="text-gray-400">Clientes</div></div>
          <div><div className="text-4xl font-bold text-yellow-600">R$ 50M+</div><div className="text-gray-400">Patrimônio</div></div>
          <div><div className="text-4xl font-bold text-yellow-600">98%</div><div className="text-gray-400">Satisfação</div></div>
          <div><div className="text-4xl font-bold text-yellow-600">14</div><div className="text-gray-400">Meses</div></div>
        </div>
      </section>

      <section id="metodo" className="py-20 px-6 bg-gray-950">
        <h2 className="font-bold text-4xl text-center mb-16">Método SPA: 3 Pilares</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-yellow-600/5 border border-yellow-600/30 rounded-lg p-8">
            <div className="text-3xl font-bold text-yellow-600 mb-4">S</div>
            <h3 className="text-xl font-bold mb-4">Segurança</h3>
            <p className="text-gray-400">Seleção dos TOP 5-7% de grupos com contemplação rápida</p>
          </div>
          <div className="bg-yellow-600/5 border border-yellow-600/30 rounded-lg p-8">
            <div className="text-3xl font-bold text-yellow-600 mb-4">P</div>
            <h3 className="text-xl font-bold mb-4">Patrimônio</h3>
            <p className="text-gray-400">Posicionamento estratégico para contemplação antecipada</p>
          </div>
          <div className="bg-yellow-600/5 border border-yellow-600/30 rounded-lg p-8">
            <div className="text-3xl font-bold text-yellow-600 mb-4">A</div>
            <h3 className="text-xl font-bold mb-4">Alavancagem</h3>
            <p className="text-gray-400">Transformar em renda passiva e multiplicar patrimônio</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-yellow-600 text-black text-center">
        <h2 className="font-bold text-4xl mb-6">Não deixe para depois</h2>
        <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="inline-block bg-black text-yellow-600 px-12 py-4 font-bold text-xl rounded">
          AGENDAR CONSULTORIA GRÁTIS
        </a>
      </section>

      <footer className="bg-black border-t border-yellow-600/20 py-12 px-6 text-center text-gray-600">
        <p>© 2024 Gaia Group. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
