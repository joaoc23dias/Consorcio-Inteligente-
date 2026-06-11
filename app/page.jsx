'use client';

export default function Home() {
      return ('use client';
      import { useState } from 'react';
      import { ChevronDown } from 'lucide-react';

      export default function Home() {
              const [expandedFaq, setExpandedFaq] = useState(null);

              const faqItems = [
                    { id: 1, pergunta: "Como funciona o Método SPA?", resposta: "O Método SPA é um sistema inovador que transforma consórcios em alavancagens inteligentes." },
                    { id: 2, pergunta: "Qual é a diferença entre banco e consórcio?", resposta: "No banco você paga juros de até 2% ao mês. No consórcio com o Método SPA, você investe de forma inteligente." },
                    { id: 3, pergunta: "Quanto tempo leva para conseguir a cota?", resposta: "Com o Método SPA, a maioria dos nossos clientes conseguem a cota em média 14 meses." },
                    { id: 4, pergunta: "É seguro investir em consórcio?", resposta: "Sim! O consórcio é regulado pelo Banco Central. Com o Método SPA, você tem consultoria especializada." },
                    { id: 5, pergunta: "Posso desistir a qualquer momento?", resposta: "Sim, você tem liberdade total. Mas com o Método SPA, descobrirá por que nem vai querer desistir!" },
                    { id: 6, pergunta: "Como começo agora?", resposta: "É simples! Clique em 'Começar Agora' e nossa equipe entrará em contato." }
                      ];

              const passos = [
                    { numero: "1", titulo: "Análise da Sua Situação", desc: "Avaliamos seu perfil financeiro e objetivos." },
                    { numero: "2", titulo: "Seleção da Cota Ideal", desc: "Escolhemos a cota que melhor se adequa ao seu planejamento." },
                    { numero: "3", titulo: "Acompanhamento Contínuo", desc: "Monitoramos todo o processo e garantimos os melhores resultados." }
                      ];

              const casos = [
                    { nome: "João Silva", resultado: "Conseguiu cota de R$ 350mil em 12 meses", detalhe: "Usando o Método SPA, estruturou um plano otimizado." },
                    { nome: "Maria Santos", resultado: "Economizou R$ 50mil vs. banco", detalhe: "Comparado a um financiamento bancário, economizou uma fortuna." },
                    { nome: "Carlos Oliveira", resultado: "Realizou seu sonho com segurança", detalhe: "Com assessoria VIP, comprou seu imóvel com total tranquilidade." }
                      ];

              return (
                        <div className="w-full bg-white">
                              <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
                                      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                                                          <span className="text-white font-bold">CI</span>span>
                                                            </div>div>
                                                            <span className="font-bold text-xl">Consórcio Inteligente</span>span>
                                                </div>div>
                                                <nav className="hidden md:flex gap-8">
                                                            <a href="#hero" className="text-gray-700 hover:text-blue-600">Home</a>a>
                                                            <a href="#desafio" className="text-gray-700 hover:text-blue-600">Desafio</a>a>
                                                            <a href="#metodo" className="text-gray-700 hover:text-blue-600">Método</a>a>
                                                            <a href="#resultados" className="text-gray-700 hover:text-blue-600">Resultados</a>a>
                                                            <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>a>
                                                </nav>nav>
                                                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                                                            Começar
                                                </button>button>
                                      </div>div>
                              </header>header>
                        
                              <section id="hero" className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 px-4">
                                      <div className="max-w-4xl mx-auto text-center">
                                                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                                            Transforme Sua Vida Financeira com o Método SPA
                                                </h1>h1>
                                                <p className="text-xl text-gray-700 mb-8">
                                                            200+ brasileiros conquistaram seus sonhos sem dívidas, sem juros e com total segurança.
                                                </p>p>
                                                <div className="flex gap-4 justify-center">
                                                            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700">
                                                                          Comece Sua Jornada
                                                            </button>button>
                                                            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50">
                                                                          Assista Demo
                                                            </button>button>
                                                </div>div>
                                      </div>div>
                              </section>section>
                        
                              <section id="stats" className="py-16 px-4 bg-white">
                                      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                                                <div className="text-center"><div className="text-4xl font-bold text-blue-600">200+</div>div><p className="text-gray-700">Clientes</p>p></div>div>
                                                <div className="text-center"><div className="text-4xl font-bold text-blue-600">R$ 50M+</div>div><p className="text-gray-700">Cotas</p>p></div>div>
                                                <div className="text-center"><div className="text-4xl font-bold text-blue-600">98%</div>div><p className="text-gray-700">Satisfação</p>p></div>div>
                                                <div className="text-center"><div className="text-4xl font-bold text-blue-600">14</div>div><p className="text-gray-700">Meses</p>p></div>div>
                                      </div>div>
                              </section>section>
                        
                              <section id="desafio" className="py-20 px-4 bg-gray-50">
                                      <div className="max-w-6xl mx-auto">
                                                <h2 className="text-4xl font-bold text-center mb-12">Banco vs. Consórcio</h2>h2>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                            <div className="p-8 rounded-lg bg-white border border-gray-200">
                                                                          <h3 className="text-2xl font-bold mb-6">Banco</h3>h3>
                                                                          <ul className="space-y-3"><li className="flex gap-3"><span>✗</span>span> Juros altos</li>li><li className="flex gap-3"><span>✗</span>span> Dívida crescente</li>li><li className="flex gap-3"><span>✗</span>span> Sem assessoria</li>li><li className="flex gap-3"><span>✗</span>span> Leva anos</li>li></ul>ul>
                                                            </div>div>
                                                            <div className="p-8 rounded-lg bg-white border border-gray-200">
                                                                          <h3 className="text-2xl font-bold mb-6">Consórcio Tradicional</h3>h3>
                                                                          <ul className="space-y-3"><li className="flex gap-3"><span>✗</span>span> Sem estratégia</li>li><li className="flex gap-3"><span>✗</span>span> Sem orientação</li>li><li className="flex gap-3"><span>✗</span>span> Riscos</li>li><li className="flex gap-3"><span>✗</span>span> Incerto</li>li></ul>ul>
                                                            </div>div>
                                                            <div className="p-8 rounded-lg bg-blue-600 text-white border-4 border-blue-600 transform md:scale-105">
                                                                          <h3 className="text-2xl font-bold mb-6">Método SPA</h3>h3>
                                                                          <ul className="space-y-3"><li className="flex gap-3"><span>✓</span>span> Sem juros</li>li><li className="flex gap-3"><span>✓</span>span> Patrimônio crescente</li>li><li className="flex gap-3"><span>✓</span>span> Assessoria VIP</li>li><li className="flex gap-3"><span>✓</span>span> 14 meses</li>li></ul>ul>
                                                            </div>div>
                                                </div>div>
                                      </div>div>
                              </section>section>
                        
                              <section id="metodo" className="py-20 px-4 bg-white">
                                      <div className="max-w-6xl mx-auto">
                                                <h2 className="text-4xl font-bold text-center mb-12">3 Passos Para Começar</h2>h2>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                      {passos.map((passo) => (
                                            <div key={passo.numero} className="text-center">
                                                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">{passo.numero}</div>div>
                                                            <h3 className="text-xl font-bold mb-3">{passo.titulo}</h3>h3>
                                                            <p className="text-gray-600">{passo.desc}</p>p>
                                            </div>div>
                                          ))}
                                                </div>div>
                                      </div>div>
                              </section>section>
                        
                              <section id="resultados" className="py-20 px-4 bg-gray-50">
                                      <div className="max-w-6xl mx-auto">
                                                <h2 className="text-4xl font-bold text-center mb-12">Casos de Sucesso</h2>h2>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                      {casos.map((caso, idx) => (
                                            <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg">
                                                            <h3 className="text-xl font-bold mb-2">{caso.nome}</h3>h3>
                                                            <p className="text-blue-600 font-semibold mb-3">{caso.resultado}</p>p>
                                                            <p className="text-gray-600">{caso.detalhe}</p>p>
                                            </div>div>
                                          ))}
                                                </div>div>
                                      </div>div>
                              </section>section>
                        
                              <section id="faq" className="py-20 px-4 bg-white">
                                      <div className="max-w-4xl mx-auto">
                                                <h2 className="text-4xl font-bold text-center mb-12">Dúvidas Frequentes</h2>h2>
                                                <div className="space-y-4">
                                                      {faqItems.map((faq) => (
                                            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                                            <button onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)} className="w-full p-6 flex justify-between items-center bg-gray-50 hover:bg-gray-100">
                                                                              <span className="font-semibold text-lg">{faq.pergunta}</span>span>
                                                                              <ChevronDown size={24} className={`transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`} />
                                                            </button>button>
                                                  {expandedFaq === faq.id && (
                                                                    <div className="p-6 bg-white border-t border-gray-200">
                                                                                        <p className="text-gray-700">{faq.resposta}</p>p>
                                                                    </div>div>
                                                            )}
                                            </div>div>
                                          ))}
                                                </div>div>
                                      </div>div>
                              </section>section>
                        
                              <section className="py-20 px-4 bg-blue-600 text-white">
                                      <div className="max-w-4xl mx-auto text-center">
                                                <h2 className="text-4xl font-bold mb-6">Pronto Para Transformar Sua Vida?</h2>h2>
                                                <p className="text-xl mb-8">Junte-se aos 200+ brasileiros que já conquistaram seus sonhos com o Método SPA</p>p>
                                                <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100">
                                                            Começar Agora - É Grátis!
                                                </button>button>
                                      </div>div>
                              </section>section>
                        
                              <footer className="bg-gray-900 text-white py-12 px-4">
                                      <div className="max-w-6xl mx-auto">
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                                                            <div><h4 className="font-bold mb-4">Empresa</h4>h4><ul className="space-y-2"><li><a href="#" className="hover:text-blue-400">Sobre</a>a></li>li><li><a href="#" className="hover:text-blue-400">Blog</a>a></li>li><li><a href="#" className="hover:text-blue-400">Contato</a>a></li>li></ul>ul></div>div>
                                                            <div><h4 className="font-bold mb-4">Produto</h4>h4><ul className="space-y-2"><li><a href="#" className="hover:text-blue-400">Método SPA</a>a></li>li><li><a href="#" className="hover:text-blue-400">Preços</a>a></li>li><li><a href="#" className="hover:text-blue-400">FAQ</a>a></li>li></ul>ul></div>div>
                                                            <div><h4 className="font-bold mb-4">Legal</h4>h4><ul className="space-y-2"><li><a href="#" className="hover:text-blue-400">Privacidade</a>a></li>li><li><a href="#" className="hover:text-blue-400">Termos</a>a></li>li><li><a href="#" className="hover:text-blue-400">Cookies</a>a></li>li></ul>ul></div>div>
                                                            <div><h4 className="font-bold mb-4">Redes</h4>h4><ul className="space-y-2"><li><a href="#" className="hover:text-blue-400">LinkedIn</a>a></li>li><li><a href="#" className="hover:text-blue-400">Instagram</a>a></li>li><li><a href="#" className="hover:text-blue-400">Facebook</a>a></li>li></ul>ul></div>div>
                                                </div>div>
                                                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                                                            <p>&copy; 2025 Consórcio Inteligente. Todos os direitos reservados.</p>p>
                                                </div>div>
                                      </div>div>
                              </footer>footer>
                        </div>div>
                      );
      }

            <section className="py-20 px-4 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                              <h2 className="text-4xl font-bold mb-6">Pronto Para Transformar Sua Vida?</h2>h2>
                              <p className="text-xl mb-8">Junte-se aos 200+ brasileiros que já conquistaram seus sonhos</p>p>
                              <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100">Começar Agora</button>button>
                    </div>div>
            </section>section>
                  </div>
                    );
                        }</section>
              <div className="min-h-screen bg-white p-8">
                    <h1 className="text-4xl font-bold mb-4">Consórcio Inteligente</h1>h1>
                    <p className="text-gray-600 mb-8">Plataforma de consórcios inteligentes para brasileiros</p>p>
                    <div className="bg-blue-600 text-white p-6 rounded-lg inline-block">
                            <p className="text-lg font-semibold">Bem-vindo! Site em desenvolvimento.</p>p>
                    </div>div>
              </div>div>
            );
}</div>
