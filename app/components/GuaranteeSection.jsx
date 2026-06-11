'use client';

export default function GuaranteeSection() {
    const guaranteePoints = [
      {
              emoji: '✅',
              title: '7 Dias de Teste Completo',
              description: 'Acesso total ao Método SPA por 7 dias sem risco'
      },
      {
              emoji: '💰',
              title: 'Dinheiro de Volta 100%',
              description: 'Se não funcionar, você recebe cada centavo investido de volta'
      },
      {
              emoji: '📞',
              title: 'Suporte Especializado',
              description: 'Equipe dedicada pronta para ajudar em cada passo'
      },
      {
              emoji: '📚',
              title: 'Todos os Materiais Inclusos',
              description: 'Acesso a vídeos, planilhas, cronograma e comunidade VIP'
      }
        ];

  return (
        <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="max-w-6xl mx-auto">
                {/* Headline Principal */}
                      <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-green-800 mb-4">
                                            Sua Decisão é Sem Risco ✓
                                </h2>h2>
                                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                                            Estamos tão confiantes de que o Método SPA vai transformar sua vida que oferecemos uma garantia de 7 dias - 100% do seu dinheiro de volta se não gostar.
                                </p>p>
                      </div>div>
              
                {/* Grid de Garantias */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {guaranteePoints.map((point, index) => (
                      <div
                                      key={index}
                                      className="bg-white p-8 rounded-lg border-2 border-green-200 shadow-md hover:shadow-lg hover:border-green-400 transition-all text-center"
                                    >
                                    <div className="text-5xl mb-4">{point.emoji}</div>div>
                                    <h3 className="text-lg font-bold text-green-800 mb-2">{point.title}</h3>h3>
                                    <p className="text-gray-600 text-sm">{point.description}</p>p>
                      </div>div>
                    ))}
                      </div>div>
              
                {/* CTA Final com Urgência */}
                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-12 rounded-lg shadow-2xl mb-12 text-center">
                                <h3 className="text-3xl font-bold mb-4">Pronto para Começar?</h3>h3>
                                <p className="text-xl mb-8 text-green-100">
                                            Você já perdeu tempo e dinheiro com financiamentos caros. Não perca mais essa oportunidade.
                                </p>p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                            <button className="bg-white text-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg">
                                                          Entrar Agora 🚀
                                            </button>button>
                                            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-all">
                                                          Agendar Consulta
                                            </button>button>
                                </div>div>
                      
                                <p className="text-green-100 text-sm">
                                            Você receberá acesso imediatamente após a inscrição
                                </p>p>
                      </div>div>
              
                {/* Depoimento Final */}
                      <div className="bg-white p-8 rounded-lg border-2 border-green-200 max-w-3xl mx-auto mb-12">
                                <p className="text-gray-700 text-lg mb-4 italic">
                                            "Não acreditava que conseguiria 3 imóveis em menos de 2 anos. O Método SPA mudou minha visão financeira e hoje gero R$ 15.000/mês em renda passiva. Isso é life-changing!"
                                </p>p>
                                <div className="flex items-center">
                                            <div className="text-3xl mr-3">👨‍💼</div>div>
                                            <div>
                                                          <p className="font-bold text-gray-800">Ricardo Martins</p>p>
                                                          <p className="text-gray-600 text-sm">Empresário • São Paulo • 28 meses para 3 imóveis</p>p>
                                            </div>div>
                                </div>div>
                      </div>div>
              
                {/* Rodapé com Segurança */}
                      <div className="text-center border-t-2 border-green-200 pt-8">
                                <p className="text-gray-600 text-sm mb-4">
                                            Sua segurança é importante para nós. Todos os dados são criptografados e protegidos.
                                </p>p>
                                <div className="flex justify-center gap-6 text-gray-600">
                                            <span className="text-sm">🔒 Pagamento Seguro</span>span>
                                            <span className="text-sm">📧 Privacidade Garantida</span>span>
                                            <span className="text-sm">✅ Garantia 7 Dias</span>span>
                                </div>div>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
