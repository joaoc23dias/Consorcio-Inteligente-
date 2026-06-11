'use client'

import { useState } from 'react'

export default function CTASection() {
      const [formData, setFormData] = useState({
              name: '',
              email: '',
              phone: '',
              message: ''
      })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
          const { name, value } = e.target
          setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
          e.preventDefault()
          setSubmitted(true)
          setFormData({ name: '', email: '', phone: '', message: '' })
          setTimeout(() => setSubmitted(false), 5000)
  }

  return (
          <section className="py-24 px-4 bg-black">
                <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Benefits */}
                                  <div>
                                              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">
                                                            Pronto para Multiplicar Seus Imóveis?
                                              </h2>h2>
                                              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                                            Comece agora e tenha acesso ao treinamento completo do Método SPA, análise gratuita de imagens, e suporte de nossos especialistas.
                                              </p>p>
                                              <ul className="space-y-4 mb-8">
                                                            <li className="flex items-start gap-4">
                                                                            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                                                                                              <span className="text-black font-bold text-sm">✓</span>span>
                                                                            </div>div>
                                                                            <div>
                                                                                              <h4 className="text-white font-bold mb-1">Treinamento Completo</h4>h4>
                                                                                              <p className="text-gray-400">Acesso à plataforma de cursos com todos os passos do método</p>p>
                                                                            </div>div>
                                                            </li>li>
                                                            <li className="flex items-start gap-4">
                                                                            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                                                                                              <span className="text-black font-bold text-sm">✓</span>span>
                                                                            </div>div>
                                                                            <div>
                                                                                              <h4 className="text-white font-bold mb-1">Análise de Imóveis</h4>h4>
                                                                                              <p className="text-gray-400">Consultoria especializada para escolher as melhores propriedades</p>p>
                                                                            </div>div>
                                                            </li>li>
                                                            <li className="flex items-start gap-4">
                                                                            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                                                                                              <span className="text-black font-bold text-sm">✓</span>span>
                                                                            </div>div>
                                                                            <div>
                                                                                              <h4 className="text-white font-bold mb-1">Suporte Dedicado</h4>h4>
                                                                                              <p className="text-gray-400">Acesso direto ao time de especialistas para dúvidas e orientação</p>p>
                                                                            </div>div>
                                                            </li>li>
                                              </ul>ul>
                                  </div>div>
                        
                            {/* Right Column - Form */}
                                  <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg p-10 border border-gray-700">
                                              <h3 className="text-2xl font-bold text-white mb-6">Solicite sua Consulta</h3>h3>
                                              
                                      {submitted ? (
                            <div className="bg-green-900 border border-green-700 rounded-lg p-6 text-center">
                                            <p className="text-green-300 font-semibold mb-2">Obrigado pelo seu interesse!</p>p>
                                            <p className="text-gray-300">Entraremos em contato em breve.</p>p>
                            </div>div>
                          ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                              <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>label>
                                                              <input
                                                                                      type="text"
                                                                                      name="name"
                                                                                      value={formData.name}
                                                                                      onChange={handleChange}
                                                                                      required
                                                                                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                                                                                      placeholder="João Silva"
                                                                                    />
                                            </div>div>
                            
                                            <div>
                                                              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>label>
                                                              <input
                                                                                      type="email"
                                                                                      name="email"
                                                                                      value={formData.email}
                                                                                      onChange={handleChange}
                                                                                      required
                                                                                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                                                                                      placeholder="seu@email.com"
                                                                                    />
                                            </div>div>
                            
                                            <div>
                                                              <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>label>
                                                              <input
                                                                                      type="tel"
                                                                                      name="phone"
                                                                                      value={formData.phone}
                                                                                      onChange={handleChange}
                                                                                      required
                                                                                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                                                                                      placeholder="(11) 99999-9999"
                                                                                    />
                                            </div>div>
                            
                                            <div>
                                                              <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem (Opcional)</label>label>
                                                              <textarea
                                                                                      name="message"
                                                                                      value={formData.message}
                                                                                      onChange={handleChange}
                                                                                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors resize-none h-20"
                                                                                      placeholder="Conte um pouco sobre seu interesse..."
                                                                                    />
                                            </div>div>
                            
                                            <button
                                                                  type="submit"
                                                                  className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 mt-6"
                                                                >
                                                              Enviar Consulta
                                            </button>button>
                            
                                            <p className="text-xs text-gray-500 text-center mt-4">
                                                              Responderemos em até 24 horas
                                            </p>p>
                            </form>form>
                                              )}
                                  </div>div>
                        </div>div>
                </div>div>
          </section>section>
        )
}</section>
