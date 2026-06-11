'use client';

import { useState } from 'react';

export default function CTASection() {
    const [formData, setFormData] = useState({
          name: '',
          email: '',
          phone: '',
          message: ''
    });
    const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
                ...prev,
                [name]: value
        }));
  };

  const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar integração com serviço de email
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', message: '' });
                setSubmitted(false);
        }, 3000);
  };

  return (
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <div className="max-w-4xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Coluna Esquerda - Mensagem */}
                                <div className="flex flex-col justify-center">
                                            <h2 className="text-4xl font-bold mb-6">Pronto para Transformar Sua Vida Financeira?</h2>h2>
                                            <p className="text-xl text-blue-100 mb-6">
                                                          Milhares de pessoas já estão gerando renda passiva através do Método SPA. Sua vez é AGORA!
                                            </p>p>
                                            
                                            <div className="space-y-4">
                                                          <div className="flex items-center">
                                                                          <span className="text-2xl mr-3">✓</span>span>
                                                                          <span>Consulta gratuita com especialistas</span>span>
                                                          </div>div>
                                                          <div className="flex items-center">
                                                                          <span className="text-2xl mr-3">✓</span>span>
                                                                          <span>Análise personalizada do seu cenário financeiro</span>span>
                                                          </div>div>
                                                          <div className="flex items-center">
                                                                          <span className="text-2xl mr-3">✓</span>span>
                                                                          <span>Mapa de ação para conquistar 3 imóveis</span>span>
                                                          </div>div>
                                                          <div className="flex items-center">
                                                                          <span className="text-2xl mr-3">✓</span>span>
                                                                          <span>Acesso ao método SPA completo</span>span>
                                                          </div>div>
                                            </div>div>
                                </div>div>
                      
                        {/* Coluna Direita - Formulário */}
                                <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
                                            <h3 className="text-2xl font-bold text-blue-600 mb-6">Peça Sua Consulta Gratuita</h3>h3>
                                            
                                  {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                                              Nome Completo
                                                          </label>label>
                                                          <input
                                                                                type="text"
                                                                                name="name"
                                                                                value={formData.name}
                                                                                onChange={handleChange}
                                                                                placeholder="Seu nome..."
                                                                                required
                                                                                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
                                                                              />
                                        </div>div>
                        
                                        <div>
                                                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                                              Email
                                                          </label>label>
                                                          <input
                                                                                type="email"
                                                                                name="email"
                                                                                value={formData.email}
                                                                                onChange={handleChange}
                                                                                placeholder="seu@email.com"
                                                                                required
                                                                                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
                                                                              />
                                        </div>div>
                        
                                        <div>
                                                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                                              WhatsApp
                                                          </label>label>
                                                          <input
                                                                                type="tel"
                                                                                name="phone"
                                                                                value={formData.phone}
                                                                                onChange={handleChange}
                                                                                placeholder="(11) 9xxxx-xxxx"
                                                                                required
                                                                                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
                                                                              />
                                        </div>div>
                        
                                        <div>
                                                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                                              Mensagem (Opcional)
                                                          </label>label>
                                                          <textarea
                                                                                name="message"
                                                                                value={formData.message}
                                                                                onChange={handleChange}
                                                                                placeholder="Conte um pouco sobre seus objetivos..."
                                                                                rows="3"
                                                                                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
                                                                              />
                                        </div>div>
                        
                                        <button
                                                            type="submit"
                                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-shadow"
                                                          >
                                                          Solicitar Consulta Gratuita 🚀
                                        </button>button>
                        
                                        <p className="text-xs text-gray-600 text-center">
                                                          Responderemos em até 2 horas. Suas informações são 100% seguras.
                                        </p>p>
                        </form>form>
                      ) : (
                        <div className="text-center py-8">
                                        <div className="text-5xl mb-4">🎉</div>div>
                                        <h4 className="text-xl font-bold text-blue-600 mb-2">Obrigado {formData.name}!</h4>h4>
                                        <p className="text-gray-700">Recebemos seu contato. Em breve um especialista entrará em contato!</p>p>
                        </div>div>
                                            )}
                                </div>div>
                      </div>div>
              
                {/* Rodapé com Garantia */}
                      <div className="mt-12 text-center border-t-2 border-blue-400 pt-8">
                                <p className="text-lg">
                                            <span className="font-bold">💯 Garantia de Satisfação 100%</span>span><br/>
                                            Se não ficar satisfeito com a consultoria em 7 dias, devolvemos 100% do valor.
                                </p>p>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
