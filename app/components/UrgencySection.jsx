'use client';

export default function UrgencySection() {
    const spotsLeft = 8;
    const totalSpots = 50;
    const bonuses = [
      {
              title: 'Bônus 1: Planilha de Análise de Imóveis',
              description: 'Ferramenta exclusiva para calcular ROI e selecionarImóveis com melhor potencial de aluguel',
              value: 'R$ 497'
      },
      {
              title: 'Bônus 2: Cronograma de 36 Meses',
              description: 'Mapa passo-a-passo de como conquistar 3 imóveis em tempo recorde',
              value: 'R$ 297'
      },
      {
              title: 'Bônus 3: Acesso ao Grupo VIP do Discord',
              description: 'Comunidade exclusiva com 200+ membros que já aplicam o Método SPA',
              value: 'R$ 197'
      },
      {
              title: 'Bônus 4: Suporte de 30 Dias',
              description: 'Acesso direto a especialistas para tirar dúvidas sobre sua jornada',
              value: 'R$ 697'
      }
        ];

  const percentFilled = ((totalSpots - spotsLeft) / totalSpots) * 100;

  return (
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <div className="max-w-6xl mx-auto">
                {/* Headline de Urgência */}
                      <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold mb-4">
                                            ⏰ Apenas {spotsLeft} Vagas Restantes - Oferta Termina em 48 Horas!
                                </h2>h2>
                                <p className="text-xl text-orange-100">
                                  {totalSpots - spotsLeft} de {totalSpots} consultores já conquistaram seus 3 imóveis. Você será o próximo?
                                </p>p>
                      </div>div>
              
                {/* Barra de Progresso */}
                      <div className="mb-12 max-w-2xl mx-auto">
                                <div className="bg-orange-900 rounded-full h-8 overflow-hidden border-2 border-white">
                                            <div
                                                            className="bg-gradient-to-r from-yellow-300 to-white h-full transition-all duration-500"
                                                            style={{ width: `${percentFilled}%` }}
                                                          />
                                </div>div>
                                <p className="text-center text-orange-100 mt-2">
                                  {percentFilled.toFixed(0)}% das vagas preenchidas
                                </p>p>
                      </div>div>
              
                {/* Grid de Bônus */}
                      <div className="mb-12">
                                <h3 className="text-3xl font-bold text-center mb-8">
                                            BÔNUS EXCLUSIVOS (por tempo limitado!)
                                </h3>h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {bonuses.map((bonus, index) => (
                        <div
                                          key={index}
                                          className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border-2 border-white border-opacity-30 hover:border-white hover:border-opacity-100 transition-all"
                                        >
                                        <div className="flex items-start justify-between mb-3">
                                                          <h4 className="text-xl font-bold flex-1">{bonus.title}</h4>h4>
                                                          <span className="text-lg font-bold whitespace-nowrap ml-3">{bonus.value}</span>span>
                                        </div>div>
                                        <p className="text-orange-100">{bonus.description}</p>p>
                        </div>div>
                      ))}
                                </div>div>
                                <p className="text-center text-orange-100 mt-6 text-lg">
                                            🎁 <span className="font-bold">Valor Total dos Bônus: R$ 1.688</span>span> - GRÁTIS para os primeiros 50 inscritos!
                                </p>p>
                      </div>div>
              
                {/* Urgência com Números */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center border-2 border-white border-opacity-30">
                                            <div className="text-4xl font-bold text-yellow-300 mb-2">{spotsLeft}</div>div>
                                            <div className="text-lg">Vagas Restantes</div>div>
                                            <p className="text-orange-100 text-sm mt-2">A cada hora, mais 1-2 pessoas se inscrevem</p>p>
                                </div>div>
                                <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center border-2 border-white border-opacity-30">
                                            <div className="text-4xl font-bold text-yellow-300 mb-2">48h</div>div>
                                            <div className="text-lg">Tempo Restante</div>div>
                                            <p className="text-orange-100 text-sm mt-2">Oferta exclusiva por prazo limitado</p>p>
                                </div>div>
                                <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center border-2 border-white border-opacity-30">
                                            <div className="text-4xl font-bold text-yellow-300 mb-2">12</div>div>
                                            <div className="text-lg">Semanas</div>div>
                                            <p className="text-orange-100 text-sm mt-2">Para dominar o Método SPA completamente</p>p>
                                </div>div>
                      </div>div>
              
                {/* CTA com Risco Zero */}
                      <div className="text-center bg-white text-orange-600 p-8 rounded-lg mb-8 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-3">GARANTIA DE SATISFAÇÃO 100%</h3>h3>
                                <p className="mb-4">
                                            Se depois de 7 dias você achar que não é para você, devolvemos 100% do investimento. Sem perguntas. Sem burocracias.
                                </p>p>
                                <p className="text-lg font-bold">
                                            Você não tem nada a perder, apenas R$ 680 mil em juros a economizar! 🚀
                                </p>p>
                      </div>div>
              
                {/* Countdown Crítico */}
                      <div className="text-center">
                                <p className="text-2xl font-bold mb-4 animate-pulse">
                                            ⚡ ÚLTIMA CHANCE: Oferta expira em 48 HORAS ⚡
                                </p>p>
                                <p className="text-orange-100 text-lg">
                                            Não adie esta decisão. Os primeiros 50 consultores que se inscreverem hoje receberão os 4 bônus GRÁTIS (valor R$ 1.688)
                                </p>p>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
