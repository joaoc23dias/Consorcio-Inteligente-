'use client';

const guarantees = [
  { title: 'Satisfacao Garantida', description: 'Se apos 30 dias voce nao estiver satisfeito, devolvemos 100% do seu investimento - sem perguntas.' },
  { title: 'Propriedades Verificadas', description: 'Todas as oportunidades sao analisadas por nossos especialistas para garantir retorno maximo.' },
  { title: 'Suporte Ilimitado', description: 'Acesso ao nosso time de especialistas durante todo o periodo de participacao no consorcio.' },
  { title: 'Resultados Comprovados', description: 'Mais de 500 clientes ja contemplaram suas propriedades com sucesso usando o Metodo SPA.' }
];

export default function GuaranteeSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sua Decisao Esta Protegida</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Investindo em sua confianca com uma garantia completa de satisfacao</p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {guarantees.map((g, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg p-8 border border-green-600 border-opacity-30 hover:border-opacity-100 transition-all">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0"><span className="text-black font-bold text-xl">✓</span></div>
                <div><h3 className="text-xl font-bold text-white mb-2">{g.title}</h3><p className="text-gray-300 leading-relaxed">{g.description}</p></div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-green-950 via-gray-900 to-green-950 rounded-lg p-10 mb-16 border border-green-700 border-opacity-50">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Garantia de Reversao de Risco</h3>
          <p className="text-gray-300 text-lg text-center mb-6 leading-relaxed">Estamos tao confiantes na qualidade do Metodo SPA que oferecemos uma garantia incondicional de 30 dias. Se voce nao ficar satisfeito, devolvemos cada centavo investido.</p>
          <p className="text-green-400 font-bold text-center">Nenhuma pergunta. Nenhuma burocracia. Apenas reembolso completo.</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500"></div>
            <div><p className="text-white font-bold">Cliente Satisfeito</p><p className="text-yellow-400 text-sm">Multiplicou seu patrimonio em apenas 18 meses</p></div>
          </div>
          <p className="text-gray-300 italic">Facil de entender, temos suporte completo e ja contemplei meu primeiro imovel. Agora estou seguindo a estrategia para obter mais 2 propriedades.</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 mb-6">Nao deixe esta oportunidade passar. Seus proximos 3 imoveis estao esperando.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/19998187567" className="inline-block px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-lg transition-all duration-300">Comecar Meu Caminho Agora</a>
            <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="inline-block px-10 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg rounded-lg border border-gray-600 transition-all duration-300">Conversar com Especialista</a>
          </div>
          <p className="text-xs text-gray-500 mt-6">A satisfacao do cliente e nossa prioridade. Garantia de 30 dias, sem riscos.</p>
        </div>
      </div>
    </section>
  );
}
