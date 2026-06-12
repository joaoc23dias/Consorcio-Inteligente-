'use client';

import { TrendingUp, Zap, Target, Heart, Lock, Users } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "ECONOMIZE ATÉ R$ 680 MIL",
    description: "Sem juros compostos. Apenas taxa de administração 2-3%.",
    details: ["Juros zero cobrados", "Taxa de admin apenas", "Diferença é seu patrimônio"],
    metric: "R$ 680.000",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Zap,
    title: "ESTRATÉGIA PARA ANTECIPAR A CONTEMPLAÇÃO",
    description: "O mercado costuma levar 36-60 meses. Com estratégia de lance, o objetivo é antecipar esse prazo.",
    details: ["Análise dos melhores grupos", "Estratégia de lances", "Foco em antecipar a contemplação"],
    metric: "PLANO ESTRATÉGICO",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Target,
    title: "ESTRUTURE 2-3 IMÓVEIS",
    description: "1 cota = 1 carta de crédito. Com 2-3 cotas, você estrutura a aquisição de múltiplos imóveis ao longo do plano.",
    details: ["Múltiplas cartas", "Contemplação sequencial", "Portfolio completo"],
    metric: "2-3 IMÓVEIS",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Heart,
    title: "RENDA PASSIVA MENSAL",
    description: "1º imóvel: moradia. 2º+: gera aluguel todo mês.",
    details: ["Aquisição sequencial planejada", "Estratégia para gerar renda", "Cash flow positivo como meta"],
    metric: "+R$ 2-5K/MÊS",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Lock,
    title: "FLUXO 100% LIBERADO",
    description: "Sem hipoteca. Após contemplação, fluxo é seu.",
    details: ["Sem hipoteca", "Flexibilidade total", "Capital para reinvestir"],
    metric: "100% LIBERADA",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Users,
    title: "MÉTODO + SUPORTE VIP",
    description: "Seleção + estruturação + suporte especializado.",
    details: ["Diagnóstico completo", "TOP 3 grupos recomendados", "WhatsApp VIP 30 dias"],
    metric: "200+ CLIENTES",
    color: "from-pink-500 to-pink-600"
  }
];

export default function BenefitsSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            6 Razões Por Que 200+ Profissionais
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Escolhem o Método SPA
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={idx}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition group"
              >
                <div className={`bg-gradient-to-br ${benefit.color} p-3 rounded-lg w-fit mb-6`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{benefit.description}</p>

                <div className="space-y-3 mb-6 border-t border-gray-800 pt-6">
                  {benefit.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="text-yellow-400">✓</div>
                      <p className="text-gray-300 text-sm">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className={`bg-gradient-to-r ${benefit.color} bg-opacity-10 border rounded-lg p-4`}>
                  <p className="text-sm font-medium text-gray-300 mb-1">MÉTRICA</p>
                  <p className={`text-xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.metric}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
