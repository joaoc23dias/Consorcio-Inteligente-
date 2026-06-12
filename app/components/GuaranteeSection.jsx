'use client';

const garantias = [
  { titulo: 'Garantia de Satisfacao (30 dias)', descricao: 'Se em 30 dias voce achar que o metodo nao e para voce, devolvemos 100% do valor da consultoria. Sem perguntas, sem burocracia.' },
  { titulo: 'Garantia de Suporte Especializado', descricao: 'Acompanhamento do nosso time de especialistas durante todo o seu periodo de participacao no consorcio, sem custo extra.' },
  { titulo: 'Garantia de Metodo Comprovado', descricao: 'Voce tem acesso ao mesmo Metodo SPA estruturado que ja foi aplicado por mais de 200 clientes, com transparencia em cada etapa.' },
  { titulo: 'Garantia de Analise Transparente', descricao: 'Todas as oportunidades de grupos sao analisadas por especialistas, com criterios claros e informacoes verificadas antes de qualquer decisao.' }
];

export default function GuaranteeSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sua Decisao com Seguranca</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Reduzimos o seu risco com garantias claras sobre o nosso trabalho e o nosso metodo</p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {garantias.map((g, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg p-8 border border-green-600 border-opacity-30 hover:border-opacity-100 transition-all">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0"><span className="text-black font-bold text-xl">+</span></div>
                <div><h3 className="text-xl font-bold text-white mb-2">{g.titulo}</h3><p className="text-gray-300 leading-relaxed">{g.descricao}</p></div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-green-950 via-gray-900 to-green-950 rounded-lg p-10 mb-16 border border-green-700 border-opacity-50">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Nosso Compromisso Com Voce</h3>
          <p className="text-gray-300 text-lg text-center mb-6 leading-relaxed">Nosso compromisso e oferecer o melhor metodo, a melhor analise e o melhor acompanhamento do mercado. A contemplacao em consorcio depende de sorteio ou lance e nao pode ser garantida por lei, mas a qualidade do nosso trabalho e da nossa estrategia, sim.</p>
          <p className="text-green-400 font-bold text-center">Transparencia total. Sem promessas de contemplacao. Apenas metodo, estrategia e suporte de verdade.</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500"></div>
            <div><p className="text-white font-bold">Cliente Satisfeito</p><p className="text-yellow-400 text-sm">Estruturou seu plano de aquisicao com o Metodo SPA</p></div>
          </div>
          <p className="text-gray-300 italic">Facil de entender, temos suporte completo e ja conquistei meu primeiro imovel pelo consorcio. Agora sigo a estrategia para buscar mais propriedades.</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 mb-6">Da o primeiro passo com seguranca e com todas as informacoes na mao.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/19998187567" className="inline-block px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-lg transition-all duration-300">Comecar Meu Caminho Agora</a>
            <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="inline-block px-10 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg rounded-lg border border-gray-600 transition-all duration-300">Conversar com Especialista</a>
          </div>
          <p className="text-xs text-gray-500 mt-6">A satisfacao do cliente e nossa prioridade. Consorcio nao tem promessa de contemplacao: o resultado depende de sorteio ou lance.</p>
        </div>
      </div>
    </section>
  );
}
