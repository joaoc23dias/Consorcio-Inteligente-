'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, CheckCircle, ArrowRight, Play } from 'lucide-react';

// ✅ IMPORTAR OS 3 COMPONENTES NOVOS
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ValueStackingSection from './components/ValueStackingSection';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedVideo, setExpandedVideo] = useState(null);

  const testimonials = [
    {
      name: "André Silva",
      role: "Médico",
      before: "Preso em financiamentos 7-9% ao ano",
      after: "2 cartas de R$ 500 mil contempladas",
      roi: "+R$ 700k economizados em juros",
      quote: "Descobri que enquanto financiava imóvel pagando juros, outros estavam usando consórcio para multiplicar patrimônio. Agora tenho 2 imóveis e patrimônio real.",
      videoId: "andre-silva"
    },
    {
      name: "Paulo Martins",
      role: "Corretor",
      before: "Comissões flutuantes, renda instável",
      after: "Renda passiva + 3 cartas contemp.",
      roi: "Contemplada no 1º mês",
      quote: "Meu maior erro foi demorar a entender. Hoje tenho renda passiva que não depende da economia. Consórcio mudou meu jogo.",
      videoId: "paulo-martins"
    },
    {
      name: "Carlos Eduardo",
      role: "Empresário",
      before: "Capital preso em operações",
      after: "R$ 850k em 18 meses",
      roi: "+3 imóveis para portfólio",
      quote: "Como empresário, capital é tudo. Consórcio me permitiu multiplicar patrimônio enquanto meu negócio crescia. Zero juros mudou a equação.",
      videoId: "carlos-eduardo"
    }
  ];

  const faqItems = [
    {
      category: "SOBRE O MÉTODO SPA",
      q: "Por que consórcio é SUPERIOR a financiamento bancário?",
      a: "BANCO: 7-9% juros/ano + múltiplas taxas = você paga R$ 1,2M por R$ 500k\nCONSÓRCIO: 0% juros + taxa admin 2-3% = você paga R$ 520k por R$ 500k\nDIFERENÇA: R$ 680k que você não perde em juros. Isso é capital para investir ou multiplicar patrimônio. O Método SPA otimiza ainda mais tempo de contemplação de 36+ meses para 14 meses."
    },
    {
      category: "SOBRE O MÉTODO SPA",
      q: "Qual é o risco real de ficar sem contemplação?",
      a: "Consórcio tradicional: 36-60 meses. MÉTODO SPA: 12-18 meses média (dados de +200 clientes). Por quê? Seleção inteligente de grupos (TOP 5-7%), posicionamento estratégico, timing correto, análise científica. Nossos clientes são contemplados em 14 meses vs 36+ da média nacional. Risco mitigado por expertise."
    },
    {
      category: "CONFIANÇA & SEGURANÇA",
      q: "Consórcio não é um esquema? Já ouvi falar de fraudes...",
      a: "Consórcio legítimo é regulado pelo Banco Central desde 1970. A Gaia Group trabalha EXCLUSIVAMENTE com HS Consórcio (Grupo Herval) — administradora autorizada há mais de 20 anos com zero fraudes e milhões em patrimônio gerado. Transparência total: extrato mensal, regulação BC, zero esquema. Diferença: Esquemas falsos se chamam consórcio mas não têm regulação."
    },
    {
      category: "CONFIANÇA & SEGURANÇA",
      q: "Qual é a história de João Dias? Por que acreditar nele?",
      a: "João Dias é Consórcio Especialista e Engenheiro do Consórcio no Grupo Gaia. Criou o Método SPA® — metodologia exclusiva que mudou como empresários veem consórcio (de dívida para alavancagem patrimonial). Track record: +200 clientes atendidos, R$ 50M+ patrimônio gerado, 98% satisfação, 5+ anos no mercado, 0 processos. Sua inspiração é construída em resultados reais."
    },
    {
      category: "CONFIANÇA & SEGURANÇA",
      q: "Como vocês garantem satisfação e qualidade?",
      a: "98% taxa de satisfação não é slogan — é resultado de 5+ anos de trabalho consistente. Garantias reais: acompanhamento até contemplação, suporte contínuo, estrutura legal/fiscal otimizada, análise de grupos científicos. Zero processos Procon. Você não está contratando uma venda — está contratando um parceiro que ganha quando você ganha."
    },
    {
      category: "PRÁTICO & FINANCEIRO",
      q: "Qual é o investimento inicial real?",
      a: "Exemplo: Carta de R$ 500k\nEntrada: R$ 5-8k (1.5% — taxa de administração)\nMensalidade: R$ 2.5-3.5k/mês (SEM juros)\n\nBANCO PARA COMPARAR:\nEntrada: 10-20% (R$ 50-100k)\nMensalidade: R$ 4-6k/mês (COM juros altos)\n\nDiferença: Você começa com menos capital e sem juros predatórios. Flexível para 1, 2 ou 3 cartas."
    },
    {
      category: "PRÁTICO & FINANCEIRO",
      q: "Qual é o tempo até ver resultado real?",
      a: "Timeline típico:\nMês 0-1: Contratação + entrada em grupo\nMês 14: 1ª contemplação (média) — adquire bem + economia de R$ 680k em juros\nMês 14-18: Bem gerando renda (se aluguel) ou suportando negócio\nMês 15-19: 2ª contemplação (se tiver 2 cartas) — patrimônio cresce exponencialmente\nMês 24-36: 3ª contemplação — múltiplos ativos gerando renda\n\nResultado financeiro detectável: 14 meses. Multiplicação real: 24-36 meses."
    },
    {
      category: "DIFERENCIAL",
      q: "Por que devo confiar na Gaia Group e não em outro consultor?",
      a: "RAZÃO 1 — TRACK RECORD: +200 clientes, R$ 50M+ patrimônio, 98% satisfação, 5+ anos, 0 processos\n\nRAZÃO 2 — MÉTODO EXCLUSIVO: Método SPA é propriedade intelectual da Gaia Group. Você não encontra análise de grupos + posicionamento estratégico em outro lugar.\n\nRAZÃO 3 — ALINHAMENTO: Consultores genéricos ganham comissão em venda (vendem logo). Gaia Group é paga por RESULTADO — seu sucesso é nosso sucesso. Incentivos alinhados = expertise real."
    },
    {
      category: "PRÁTICO & FINANCEIRO",
      q: "Como funciona a consultoria? É obrigatória?",
      a: "Não é obrigatória. Você PODE contratar consórcio sozinho.\n\nMAS a consultoria adiciona VALOR porque:\n• Seleção de grupo (você não consegue fazer isso sozinho = risco de demorar 5 anos)\n• Timing estratégico (aumenta chance de contemplação rápida)\n• Estrutura legal/fiscal (otimiza impostos = economia real)\n• Planejamento de múltiplas cartas (multiplicação patrimonial)\n\nValor: ~R$ 2k. Retorno: ~R$ 100-400k em economia + tempo. ROI: 50-200x."
    },
    {
      category: "PROCESSO",
      q: "Qual é a próxima etapa? Como começo EXATAMENTE?",
      a: "PASSO 1: Baixar Guia Grátis (5 min)\n└─ \"7 Segredos de Alavancagem Patrimonial\"\n└─ Acesso a conteúdo exclusivo\n└─ Convite para grupo WhatsApp VIP\n\nPASSO 2: Agendar Consultoria (30 min sem compromisso)\n└─ Análise situação financeira\n└─ Recomendação personalizada de cartas\n└─ Estrutura para 1, 2 ou 3 aquisições\n\nPASSO 3: Iniciar Contratação (5 dias aprovação)\n└─ Documentação simples\n└─ Você entra no grupo\n└─ Acompanhamento até contemplação (14 meses média)"
    }
  ];

  const joaoDiasInfo = {
    title: "Quem é João Dias (e por que sua reputação é construída em resultados)",
    bio: "Consórcio Specialist & Engenheiro do Consórcio | Criador do Método SPA® | Formação: Universidade Federal de Lavras (UFLA)",
    achievements: [
      { label: "Clientes Atendidos", value: "+200" },
      { label: "Patrimônio Gerado", value: "R$ 50M+" },
      { label: "Taxa Satisfação", value: "98%" },
      { label: "Anos Mercado", value: "5+" }
    ]
  };

  const processSteps = [
    {
      number: "1",
      title: "Diagnóstico",
      time: "30 min",
      items: [
        "Análise completa situação financeira",
        "Identificação objetivos patrimoniais",
        "Cálculo capacidade real de aquisição"
      ]
    },
    {
      number: "2",
      title: "Estratégia",
      time: "Personalizada",
      items: [
        "Recomendação TOP 3 grupos",
        "Estrutura de 1, 2 ou 3 cartas",
        "Timeline até contemplação"
      ]
    },
    {
      number: "3",
      title: "Execução",
      time: "5 dias",
      items: [
        "Documentação simples",
        "Aprovação rápida",
        "Entrada no grupo"
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAVEGAÇÃO */}
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center font-bold text-black">G</div>
            <div>
              <p className="font-bold text-white">Gaia Group</p>
              <p className="text-xs text-yellow-400">Consórcio Inteligente</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="hover:text-yellow-400 transition">Home</a>
            <a href="#problema" className="hover:text-yellow-400 transition">Desafio</a>
            <a href="#metodo" className="hover:text-yellow-400 transition">Método</a>
            <a href="#resultados" className="hover:text-yellow-400 transition">Resultados</a>
            <a href="#faq" className="hover:text-yellow-400 transition">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/19998187567" className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded transition">
              💬 WhatsApp
            </a>
            <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition">
              📅 Agendar
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - NOVO COMPONENTE */}
      <HeroSection />

      {/* SEÇÃO DESAFIO */}
      <section id="problema" className="bg-gradient-to-b from-black to-gray-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">O Desafio Silencioso</h2>
          <p className="text-gray-400 text-center mb-12">Por que empresários inteligentes estão rejeitando bancos...</p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-300">❌ Caminho do Banco</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="font-semibold">7-9% juros/ano</p>
                    <p className="text-sm text-gray-400">por 30 anos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="font-semibold">Você paga R$ 1.2M por R$ 500k</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="font-semibold">Fluxo preso</p>
                    <p className="text-sm text-gray-400">por 3 décadas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="font-semibold">Sem flexibilidade real</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-300">✅ Caminho Inteligente</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold">0% juros</p>
                    <p className="text-sm text-gray-400">— exatamente o bem</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold">Você paga R$ 520k por R$ 500k</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold">Fluxo LIBERADO</p>
                    <p className="text-sm text-gray-400">após contemplação</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold">Máxima flexibilidade real</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-900/20 border-2 border-yellow-500/50 rounded-2xl p-12 text-center">
            <p className="text-gray-400 text-lg mb-4">A Diferença Econômica Real</p>
            <p className="text-5xl font-bold text-yellow-400 mb-4">R$ 680.000</p>
            <p className="text-gray-300">É quanto você economiza em juros usando consórcio vs banco para aquisição de R$ 500k</p>
          </div>
        </div>
      </section>

      {/* 6 BENEFÍCIOS - NOVO COMPONENTE */}
      <BenefitsSection />

      {/* VALUE STACKING - NOVO COMPONENTE */}
      <ValueStackingSection />

      {/* MÉTODO SPA */}
      <section id="metodo" className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            O Método SPA®: 3 Pilares de Inteligência Financeira
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">Como transformamos consórcio em alavancagem patrimonial real</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pilar 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">Segurança Estratégica</h3>
              
              <div className="mb-6">
                <p className="font-semibold text-yellow-400 mb-2">Seleção TOP 5-7% de Grupos</p>
                <p className="text-gray-300 text-sm">Analisamos centenas. Selecionamos apenas os melhores com histórico, solidez, potencial de contemplação rápida.</p>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-yellow-400 mb-2">Contemplação em 12-18 Meses</p>
                <p className="text-gray-300 text-sm">Média mercado: 36-60. Nossos clientes: 14. Inteligência vs sorte.</p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">RESULTADO:</p>
                <p className="text-lg font-bold text-yellow-400">3 anos à frente da concorrência</p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4">Patrimônio Multiplicado</h3>
              
              <div className="mb-6">
                <p className="font-semibold text-yellow-400 mb-2">2-3 Aquisições Estruturadas</p>
                <p className="text-gray-300 text-sm">Múltiplas cartas em paralelo = 2-3 imóveis em 24-36 meses vs 1 imóvel em 5+ anos.</p>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-yellow-400 mb-2">Diversificação Real</p>
                <p className="text-gray-300 text-sm">Moradia + aluguel + negócio. Portfolio vs bem único.</p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">RESULTADO:</p>
                <p className="text-lg font-bold text-yellow-400">Patrimônio exponencial vs linear</p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4">Alavancagem Real</h3>
              
              <div className="mb-6">
                <p className="font-semibold text-yellow-400 mb-2">Imóvel → Aluguel (Renda Passiva)</p>
                <p className="text-gray-300 text-sm">1º imóvel + 2º gerando aluguel = cash flow mensal.</p>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-yellow-400 mb-2">Fluxo Liberado → Investimentos</p>
                <p className="text-gray-300 text-sm">Após contemplação, invista a mesma parcela. Multiplicação exponencial.</p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">RESULTADO:</p>
                <p className="text-lg font-bold text-yellow-400">1 carta vira 3-4 fontes de renda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUA JORNADA */}
      <section className="bg-gradient-to-b from-black to-gray-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">SUA JORNADA: Mês a Mês</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              <div className="text-3xl font-bold text-yellow-400 mb-4">MÊS 0</div>
              <p className="font-semibold text-lg mb-4">Contratação + Entra no Grupo TOP 5-7%</p>
              <p className="text-gray-300 text-sm">Seleção estratégica do melhor grupo para você</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              <div className="text-3xl font-bold text-green-400 mb-4">MÊS 14</div>
              <p className="font-semibold text-lg mb-4">🎯 1ª CONTEMPLAÇÃO</p>
              <p className="text-gray-300 text-sm">Adquire 1º bem + economiza R$ 680k em juros</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              <div className="text-3xl font-bold text-blue-400 mb-4">MÊS 30</div>
              <p className="font-semibold text-lg mb-4">🎯 2ª CONTEMPLAÇÃO</p>
              <p className="text-gray-300 text-sm">Adquire 2º bem + começa aluguel (renda passiva)</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              <div className="text-3xl font-bold text-purple-400 mb-4">MÊS 48</div>
              <p className="font-semibold text-lg mb-4">🎯 3ª CONTEMPLAÇÃO</p>
              <p className="text-gray-300 text-sm">Adquire 3º bem (renda + patrimônio exponencial)</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOÃO DIAS */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{joaoDiasInfo.title}</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-12 mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-black">JD</span>
              </div>
              
              <p className="text-center font-bold text-2xl mb-2">João Dias</p>
              <p className="text-center text-gray-400 mb-8">{joaoDiasInfo.bio}</p>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {joaoDiasInfo.achievements.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-2xl font-bold text-yellow-400">{item.value}</p>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 text-center mb-8 italic">
                "Descobri que consórcio é MUITO mais que uma parcela de carro. É a ferramenta de alavancagem patrimonial que empresários usam para construir fortuna enquanto bancos ganham com juros. Criei o Método SPA para democratizar esse conhecimento."
              </p>

              <div className="flex justify-center gap-4">
                <a href="https://instagram.com/joaodias.consorcio" className="text-gray-400 hover:text-yellow-400 transition">📸 @joaodias.consorcio</a>
                <a href="https://linkedin.com/in/joaocarlosdias-sp" className="text-gray-400 hover:text-yellow-400 transition">💼 LinkedIn</a>
                <a href="https://wa.me/19998187567" className="text-gray-400 hover:text-yellow-400 transition">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="bg-gradient-to-b from-black to-gray-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Resultados Reais De Clientes Reais</h2>
          <p className="text-gray-400 text-center mb-16">O que +200 clientes conquistaram aplicando o Método SPA</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
                <p className="text-2xl font-bold mb-1">{testimonial.name}</p>
                <p className="text-gray-400 mb-6">{testimonial.role}</p>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">ANTES</p>
                  <p className="font-semibold text-yellow-400">{testimonial.before}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">DEPOIS</p>
                  <p className="font-semibold text-green-400">{testimonial.after}</p>
                </div>

                <div className="mb-6 border-t border-gray-800 pt-6">
                  <p className="text-sm text-gray-400 mb-2">ROI ECONÔMICO</p>
                  <p className="font-semibold text-blue-400">{testimonial.roi}</p>
                </div>

                <p className="text-gray-300 text-sm italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-yellow-900/20 to-yellow-950/20 border border-yellow-500/30 rounded-2xl p-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-gray-400">Clientes Atendidos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">R$ 50M+</p>
              <p className="text-gray-400">Patrimônio Gerado</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-gray-400">Taxa de Satisfação</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">14</p>
              <p className="text-gray-400">Meses (Média)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PASSOS */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">3 Passos Para Começar</h2>
          <p className="text-gray-400 text-center mb-16">Do diagnóstico até sua primeira contemplação</p>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
                <div className="text-5xl font-bold text-yellow-400 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{step.time}</p>
                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gradient-to-b from-black to-gray-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Perguntas Estratégicas</h2>
          <p className="text-gray-400 text-center mb-16">As dúvidas que TODO profissional de sucesso faz</p>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-start justify-between hover:bg-gray-800/50 transition"
                >
                  <div className="text-left">
                    <p className="text-xs text-yellow-400 mb-2">{item.category}</p>
                    <p className="font-semibold text-lg">{item.q}</p>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-yellow-400 flex-shrink-0 transition ${expandedFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-gray-800 text-gray-300 whitespace-pre-line">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-b from-black to-gray-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Não Espere Mais Um Mês</h2>
          <p className="text-xl text-gray-300 mb-12">
            Cada mês que você adia, perde aproximadamente R$ 5.600 em juros que NÃO pagaria com consórcio.
          </p>

          <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-950/20 border-2 border-yellow-500/50 rounded-2xl p-12 mb-8">
            <p className="text-yellow-400 font-bold text-lg mb-6">OFERTA ESPECIAL — VÁLIDA APENAS PARA OS PRÓXIMOS 7 DIAS:</p>
            
            <ul className="space-y-3 mb-8 text-left max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-green-400">✅</span>
                <div>
                  <p className="font-semibold">Consultoria GRATUITA 60 min</p>
                  <p className="text-sm text-gray-400">(normalmente R$ 500)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✅</span>
                <div>
                  <p className="font-semibold">Análise Financeira Completa + ROI</p>
                  <p className="text-sm text-gray-400">(R$ 1.000)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✅</span>
                <div>
                  <p className="font-semibold">Recomendação de 3 Melhores Grupos</p>
                  <p className="text-sm text-gray-400">(R$ 300)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✅</span>
                <div>
                  <p className="font-semibold">Estrutura de Múltiplas Aquisições Personalizada</p>
                </div>
              </li>
