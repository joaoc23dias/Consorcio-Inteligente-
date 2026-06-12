'use client';

import { useState, useEffect } from 'react';

const bonuses = [
  { title: 'Planilha de Analise de Imoveis', value: 'R$ 497' },
  { title: 'Cronograma de 36 Meses', value: 'R$ 297' },
  { title: 'Guia de Financiamento', value: 'R$ 197' },
  { title: 'Consultoria 1x1 (valor de mercado)', value: 'R$ 1.997' }
];

export default function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState(48 * 3600);
  const spotsRemaining = 8;
  const totalSpots = 50;
  const progressPercent = ((totalSpots - spotsRemaining) / totalSpots) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-900 bg-opacity-50 border border-red-700 px-4 py-2 rounded-lg mb-4">
            <p className="text-red-300 font-bold text-sm">APENAS {spotsRemaining} VAGAS RESTANTES</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Esta Oferta Encerra em Breve</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Garanta seu lugar no programa antes que as vagas acabem</p>
        </div>
        <div className="mb-12">
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-300"><span className="text-yellow-400 font-bold">{totalSpots - spotsRemaining}</span> de {totalSpots} vagas preenchidas</p>
            <p className="text-gray-400 text-sm">{Math.round(progressPercent)}% completo</p>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-gray-700">
            <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-950 to-red-900 rounded-lg p-10 mb-12 border border-red-700">
          <p className="text-center text-gray-300 mb-4 text-lg">Tempo Restante da Oferta</p>
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            <div className="text-center"><div className="bg-black rounded-lg py-4 px-6 border border-yellow-500"><p className="text-4xl font-bold text-yellow-400">{pad(hours)}</p></div><p className="text-gray-400 text-sm mt-2">Horas</p></div>
            <div className="text-center"><div className="bg-black rounded-lg py-4 px-6 border border-yellow-500"><p className="text-4xl font-bold text-yellow-400">{pad(minutes)}</p></div><p className="text-gray-400 text-sm mt-2">Minutos</p></div>
            <div className="text-center"><div className="bg-black rounded-lg py-4 px-6 border border-yellow-500"><p className="text-4xl font-bold text-yellow-400">{pad(seconds)}</p></div><p className="text-gray-400 text-sm mt-2">Segundos</p></div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-10">Bonus Exclusivos da Oferta</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-lg p-6 border border-yellow-500 border-opacity-30 hover:border-opacity-100 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0"><span className="text-black font-bold text-xl">✓</span></div>
                  <div className="flex-1"><h4 className="text-white font-bold mb-1">{bonus.title}</h4><p className="text-yellow-400 font-semibold">Valor: {bonus.value}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <a href="https://wa.me/19998187567" className="inline-block px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-lg transition-all duration-300 mb-4">Garantir Minha Vaga Agora</a>
          <p className="text-gray-400 text-sm">Apenas {spotsRemaining} vagas disponiveis. Confirme sua presenca antes que acabem.</p>
        </div>
      </div>
    </section>
  );
}
