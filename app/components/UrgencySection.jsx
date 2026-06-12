'use client';

import { useState, useEffect } from 'react';

const bonuses = [
  { title: 'Planilha de Analise de Imoveis', objection: 'Resolve: "E se eu escolher o imovel errado?"', value: 'R$ 497' },
  { title: 'Cronograma Estrategico de 36 Meses', objection: 'Resolve: "E se eu nao souber a ordem certa?"', value: 'R$ 297' },
  { title: 'Guia Completo de Contemplacao', objection: 'Resolve: "E se eu travar no meio do caminho?"', value: 'R$ 197' },
  { title: 'Consultoria 1x1 com Especialista', objection: 'Resolve: "E se eu precisar de ajuda personalizada?"', value: 'R$ 1.997' }
];

const totalValue = 2988;

export default function UrgencySection() {
  const DEADLINE = new Date('2026-06-30T23:59:00-03:00');
  const getRemaining = () => Math.max(0, Math.floor((DEADLINE.getTime() - Date.now()) / 1000));
  const [timeLeft, setTimeLeft] = useState(0);
  const expired = timeLeft <= 0;

  useEffect(() => {
    setTimeLeft(getRemaining());
    const timer = setInterval(() => {
      setTimeLeft(getRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Esta Oferta Encerra em Breve</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Aproveite as condicoes especiais antes do encerramento da oferta</p>
        </div>
        <div className="bg-gradient-to-r from-red-950 to-red-900 rounded-lg p-10 mb-12 border border-red-700">
          <p className="text-center text-gray-300 mb-4 text-lg">{expired ? 'As inscricoes desta turma estao encerradas' : 'Tempo Restante da Oferta'}</p>
          {!expired && (
          <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
            <div className="text-center"><div className="bg-black rounded-lg py-4 px-6 border border-yellow-500"><p className="text-4xl font-bold text-yellow-400">{pad(days)}</p></div><p className="text-gray-400 text-sm mt-2">Dias</p></div>
            <div className="text-center"><div className="bg-black rounded-lg py-4 px-6 border border-yellow-500"><p className="text-4xl font-bold text-yellow-400">{pad(hours)}</p></div><p className="text-gray-400 text-sm mt-2">Horas</p></div>
            <div className="text-center"><div className="bg-black rounded-lg py-4 px-6 border border-yellow-500"><p className="text-4xl font-bold text-yellow-400">{pad(minutes)}</p></div><p className="text-gray-400 text-sm mt-2">Minutos</p></div>
            <div className="text-center"><div className="bg-black rounded-lg py-4 px-6 border border-yellow-500"><p className="text-4xl font-bold text-yellow-400">{pad(seconds)}</p></div><p className="text-gray-400 text-sm mt-2">Segundos</p></div>
          </div>
          )}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-4">Tudo o Que Voce Recebe Hoje</h3>
          <p className="text-gray-400 text-center mb-10">Cada bonus existe para eliminar um motivo de voce nao conseguir</p>
          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-lg p-6 border border-yellow-500 border-opacity-30 hover:border-opacity-100 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0"><span className="text-black font-bold text-xl">+</span></div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-1">{bonus.title}</h4>
                    <p className="text-gray-400 text-sm mb-2 italic">{bonus.objection}</p>
                    <p className="text-yellow-400 font-semibold">Valor: {bonus.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-gradient-to-br from-yellow-900/30 to-yellow-950/30 border-2 border-yellow-500/60 rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <p className="text-gray-300 text-sm mb-2">VALOR TOTAL DOS BONUS</p>
            <p className="text-gray-500 text-2xl font-bold line-through mb-4">R$ {totalValue.toLocaleString('pt-BR')}</p>
            <p className="text-green-400 text-lg mb-1">Hoje, ao entrar no programa</p>
            <p className="text-5xl font-bold text-yellow-400 mb-2">GRATIS</p>
            <p className="text-gray-400 text-sm">Todos os bonus inclusos sem custo adicional ao entrar no programa</p>
          </div>
        </div>
        <div className="text-center mt-16">
          <a href="https://wa.me/19998187567" className="inline-block px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-lg transition-all duration-300 mb-4">Quero Aproveitar a Oferta</a>
          <p className="text-gray-400 text-sm">Oferta valida ate 30 de junho de 2026.</p>
        </div>
      </div>
    </section>
  );
}
