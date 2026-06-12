export default function ValueStackingSection() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Projeção de Cenário com o Método SPA
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Veja uma projeção de cenário comparando o Método SPA com continuar no financiamento. Valores ilustrativos, podem variar conforme cada caso.
        </p>

        <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-950/20 border-2 border-yellow-500/50 rounded-2xl p-12 mb-8">
          <h3 className="text-2xl font-bold text-center mb-12">
            🎯 PROJEÇÃO DE CENÁRIO (48 MESES)
          </h3>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-6 pb-6 border-b border-yellow-500/30">
              <div className="text-3xl">💰</div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">ECONOMIA EM JUROS</h4>
                <p className="text-gray-300 text-sm mb-3">Você não paga juros com consórcio</p>
                <p className="text-3xl font-bold text-yellow-400">R$ 680.000</p>
              </div>
            </div>

            <div className="flex items-start gap-6 pb-6 border-b border-yellow-500/30">
              <div className="text-3xl">💚</div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">RENDA PASSIVA</h4>
                <p className="text-gray-300 text-sm mb-3">Imóvel #2+ gerando aluguel</p>
                <p className="text-3xl font-bold text-green-400">R$ 192.000</p>
              </div>
            </div>

            <div className="flex items-start gap-6 pb-6 border-b border-yellow-500/30">
              <div className="text-3xl">📈</div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">PATRIMÔNIO</h4>
                <p className="text-gray-300 text-sm mb-3">2-3 imóveis vs 1 tradicional</p>
                <p className="text-3xl font-bold text-blue-400">+R$ 500.000+</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-3xl">🎁</div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">FLEXIBILIDADE</h4>
                <p className="text-gray-300 text-sm mb-3">Fluxo liberado para investimentos</p>
                <p className="text-3xl font-bold text-purple-400">ILIMITADA</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-600/30 to-yellow-700/30 border-t-2 border-yellow-500/50 pt-8">
            <p className="text-center text-gray-300 mb-2 text-sm">POTENCIAL PROJETADO</p>
            <p className="text-center text-4xl font-bold text-yellow-400">
              +R$ 1.3M+
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4 text-red-300">❌ COM BANCO</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>📦 1 imóvel apenas</li>
              <li>💸 R$ 680k perdido em juros</li>
              <li>🚫 Sem renda passiva</li>
              <li>🔒 Fluxo preso</li>
            </ul>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4 text-green-300">✅ COM MÉTODO SPA</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>🏠 2-3 imóveis</li>
              <li>💰 R$ 680k economizado</li>
              <li>💚 +R$ 2-5k/mês renda</li>
              <li>🚀 100% fluxo liberado</li>
            </ul>
          </div>
        </div>
      </div>
    <p className="text-center text-xs text-gray-500 mt-10 max-w-3xl mx-auto">Projeção meramente ilustrativa. Os valores dependem do grupo, das parcelas, da estratégia de lance e das condições de mercado. O consórcio não garante contemplação nem rentabilidade, e os resultados podem variar.</p>
      </section>
  );
}
