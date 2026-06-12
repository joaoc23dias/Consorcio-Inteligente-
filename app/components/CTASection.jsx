'use client';

import { useState } from 'react';

const features = [
  { title: 'Treinamento Completo', desc: 'Acesso a plataforma de cursos com todos os passos do metodo' },
  { title: 'Analise de Imoveis', desc: 'Consultoria especializada para escolher as melhores propriedades' },
  { title: 'Suporte Dedicado', desc: 'Acesso direto ao time de especialistas para duvidas e orientacao' }
];

export default function CTASection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Pronto para Multiplicar Seus Imoveis?</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">Comece agora e tenha acesso ao treinamento completo do Metodo SPA, analise gratuita de oportunidades e suporte de nossos especialistas.</p>
            <ul className="space-y-4 mb-8">
              {features.map((f, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-black font-bold text-sm">✓</span></div>
                  <div><h4 className="text-white font-bold mb-1">{f.title}</h4><p className="text-gray-400">{f.desc}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg p-10 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Solicite sua Consulta</h3>
            {submitted ? (
              <div className="bg-green-900 border border-green-700 rounded-lg p-6 text-center">
                <p className="text-green-300 font-semibold mb-2">Obrigado pelo seu interesse!</p>
                <p className="text-gray-300">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500" placeholder="Joao Silva" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem (Opcional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 resize-none h-20" placeholder="Conte um pouco sobre seu interesse..." />
                </div>
                <button type="submit" className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 mt-6">Enviar Consulta</button>
                <p className="text-xs text-gray-500 text-center mt-4">Responderemos em ate 24 horas</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
