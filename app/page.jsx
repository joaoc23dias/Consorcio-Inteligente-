'use client';
import { useState } from 'react';
import { Menu, X, ChevronDown, CheckCircle, ArrowRight, Play } from 'lucide-react';

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
    },
  ];

  const faqItems = [
    {
      category: "SOBRE O MÉTODO SPA",
      q: "Por que consórcio é SUPERIOR a financiamento bancário?",
      a: "BANCO: 7-9% juros/ano + múltiplas taxas = você paga R$ 1.2M por R$ 500k\nCONSÓRCIO: 0% juros + taxa admin 2-3% = você paga R$ 520k por R$ 500k\nDIFERENÇA: R$ 680k que você não perde em juros. Isso é capital para investir ou multiplicar patrimônio. O Método SPA otimiza ainda mais reduzindo tempo de contemplação de 36+ meses para 14 meses."
    },
    {
      category: "SOBRE O MÉTODO SPA",
      q: "Qual é o risco real de ficar sem contemplação?",
      a: "Consórcio tradicional: 36-60 meses. MÉTODO SPA: 12-18 meses média (dados de +200 clientes). Por quê? Seleção inteligente de grupos (TOP 5-7%), posicionamento estratégico, timing correto, análise científica. Nossos clientes são contemplados em 14 meses vs 36+ da média nacional. Risco mitigado por expertise."
    },
    {
      category: "CONFIANÇA & SEGURANÇA",
      q: "Consórcio não é um esquema? Já ouvi falar de fraudes...",
      a: "Consórcio legítimo é regulado pelo Banco Central desde 1970. A Gaia Group trabalha EXCLUSIVAMENTE com HS Consórcio (Grupo Herval) — administradora autorizada há 20+ anos com zero fraudes e milhões em patrimônio gerado. Transparência total: extrato mensal, regulação BC, zero esquema. Diferença: Esquemas falsos se chamam consórcio mas não têm regulação."
    },
    {
      category: "CONFIANÇA & SEGURANÇA",
      q: "Qual é a história de João Dias? Por que acreditar nele?",
      a: "João Dias é Consórcio Specialist e Engenheiro do Consórcio na Gaia Group. Criou o Método SPA® — metodologia exclusiva que transformou como empresários veem consórcio (de dívida para alavancagem patrimonial). Track record: +200 clientes atendidos, R$ 50M+ patrimônio gerado, 98% satisfação, 5+ anos no mercado, 0 processos. Sua reputação é construída em resultados reais."
    },
    {
      category: "CONFIANÇA & SEGURANÇA",
      q: "Como vocês garantem satisfação e qualidade?",
      a: "98% taxa de satisfação não é slogan — é resultado de 5+ anos de trabalho consistente. Garantias reais: acompanhamento até contemplação, suporte contínuo, estrutura legal/fiscal otimizada, análise de grupos científica. Zero processos Procon. Você não está contratando uma venda — está contratando um parceiro que ganha quando você ganha."
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

  const comparisonData = [
    { aspect: "Juros", banco: "7-9% ao ano", consorcio: "0%", spa: "0%" },
    { aspect: "Taxa Admin", banco: "✗ Múltiplas", consorcio: "2-3%", spa: "2-3%" },
    { aspect: "Contemplação", banco: "Imediato", consorcio: "36+ meses", spa: "14 meses" },
    { aspect: "Flexibilidade", banco: "✗ Hipoteca", consorcio: "Média", spa: "Alta" },
    { aspect: "Múltiplas Aquisições", banco: "✗", consorcio: "✗", spa: "✓✓✓" },
    { aspect: "Renda Passiva", banco: "✗", consorcio: "✗", spa: "✓✓" },
    { aspect: "Custo Total R$ 500k", banco: "R$ 1.2M", consorcio: "R$ 520k", spa: "R$ 520k" },
    { aspect: "Economia", banco: "—", consorcio: "+R$ 680k", spa: "+R$ 680k+" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/98 backdrop-blur z-50 border-b border-yellow-600/30">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center font-bold text-black text-lg">G</div>
            <div>
              <div className="font-bold text-base">Gaia Group</div>
              <div className="text-yellow-600 text-xs font-semibold">Consórcio Inteligente</div>
            </div>
          </div>
          
          <ul className="hidden md:flex gap-8 text-sm">
            <li><a href="#hero" className="hover:text-yellow-600 transition">Home</a></li>
            <li><a href="#problema" className="hover:text-yellow-600 transition">Desafio</a></li>
            <li><a href="#metodo" className="hover:text-yellow-600 transition">Método</a></li>
            <li><a href="#resultados" className="hover:text-yellow-600 transition">Resultados</a></li>
            <li><a href="#faq" className="hover:text-yellow-600 transition">FAQ</a></li>
          </ul>

          <div className="hidden md:flex gap-3">
            <a href="https://wa.me/19998187567" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-sm font-bold transition">
              💬 WhatsApp
            </a>
            <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="bg-yellow-600 hover:bg-yellow-700 text-black px-4 py-2 rounded font-bold text-sm transition">
              📅 Agendar
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-yellow-600/20 px-6 py-4 space-y-4">
            <a href="#hero" className="block hover:text-yellow-600">Home</a>
            <a href="#problema" className="block hover:text-yellow-600">Desafio</a>
            <a href="#metodo" className="block hover:text-yellow-600">Método</a>
            <a href="#resultados" className="block hover:text-yellow-600">Resultados</a>
            <a href="#faq" className="block hover:text-yellow-600">FAQ</a>
            <div className="flex gap-3">
              <a href="https://wa.me/19998187567" className="flex-1 bg-green-500 text-white px-4 py-2 rounded text-center font-bold text-sm">WhatsApp</a>
              <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="flex-1 bg-yellow-600 text-black px-4 py-2 rounded font-bold text-center text-sm">Agendar</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="pt-32 pb-24 px-6 bg-gradient-to-b from-black via-black to-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-yellow-600/20 border border-yellow-600/50 px-5 py-2 rounded-full mb-8 text-sm">
            <span className="text-yellow-600 font-bold">✦ MÉTODO SPA® — PATENTEADO GAIA GROUP</span>
          </div>

          <h1 className="font-black text-6xl md:text-7xl mb-8 leading-tight">
            De Profissional Estagnado a Proprietário de <span className="text-yellow-600">2-3 Imóveis em 14 Meses</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            Sem juros bancários. Sem comprometer fluxo de caixa.
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            Enquanto você financia pelo banco e perde R$ 680k em juros em 30 anos, empresários inteligentes estão usando <strong>consórcio como ferramenta estratégica</strong> para multiplicar patrimônio REAL. Comprovado com +200 clientes. R$ 50M+ gerados.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <a href="https://wa.me/19998187567" className="bg-yellow-600 hover:bg-yellow-700 text-black px-10 py-4 font-black rounded-lg transition transform hover:scale-105 text-lg">
              🎁 GUIA GRÁTIS: Os 7 Segredos
            </a>
            <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="border-2 border-yellow-600 hover:bg-yellow-600 hover:text-black text-yellow-600 px-10 py-4 font-black rounded-lg transition">
              📞 CONSULTORIA GRATUITA (30 min)
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-6">
              <div className="text-5xl font-black text-yellow-600">+200</div>
              <div className="text-gray-400 text-sm mt-2 font-semibold">CLIENTES</div>
            </div>
            <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-6">
              <div className="text-5xl font-black text-yellow-600">R$ 50M+</div>
              <div className="text-gray-400 text-sm mt-2 font-semibold">PATRIMÔNIO</div>
            </div>
            <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-6">
              <div className="text-5xl font-black text-yellow-600">98%</div>
              <div className="text-gray-400 text-sm mt-2 font-semibold">SATISFAÇÃO</div>
            </div>
            <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-6">
              <div className="text-5xl font-black text-yellow-600">14</div>
              <div className="text-gray-400 text-sm mt-2 font-semibold">MESES (MÉDIA)</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="py-24 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-5xl text-white text-center mb-4">
            O Desafio Silencioso
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16">
            Por que empresários inteligentes estão rejeitando bancos...
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-black text-white mb-6">❌ Caminho do Banco</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3"><span className="text-red-500 font-black">✗</span> <span><strong>7-9% juros/ano</strong> por 30 anos</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-black">✗</span> <span>Você paga <strong>R$ 1.2M por R$ 500k</strong></span></li>
                <li className="flex gap-3"><span className="text-red-500 font-black">✗</span> <span><strong>Fluxo preso</strong> por 3 décadas</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-black">✗</span> <span><strong>Sem flexibilidade</strong> real</span></li>
              </ul>
            </div>

            <div className="bg-green-950/30 border border-green-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-black text-white mb-6">✅ Caminho Inteligente</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3"><span className="text-green-500 font-black">✓</span> <span><strong>0% juros</strong> — exatamente o bem</span></li>
                <li className="flex gap-3"><span className="text-green-500 font-black">✓</span> <span>Você paga <strong>R$ 520k por R$ 500k</strong></span></li>
                <li className="flex gap-3"><span className="text-green-500 font-black">✓</span> <span><strong>Fluxo LIBERADO</strong> após contemplação</span></li>
                <li className="flex gap-3"><span className="text-green-500 font-black">✓</span> <span><strong>Máxima flexibilidade</strong> real</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-600/20 border-2 border-yellow-600 rounded-xl p-8 text-center mb-12">
            <p className="text-2xl font-black text-white mb-3">
              A Diferença Econômica Real
            </p>
            <p className="text-5xl font-black text-yellow-400">
              R$ 680.000
            </p>
            <p className="text-gray-300 mt-4">
              É quanto você economiza em juros usando consórcio vs banco para aquisição de R$ 500k
            </p>
          </div>

          {/* COMPARATIVO VISUAL */}
          <div className="bg-black/50 rounded-xl p-8 overflow-x-auto">
            <h3 className="text-xl font-bold text-white mb-6 text-center">BANCO vs CONSÓRCIO vs MÉTODO SPA</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-yellow-600/30">
                  <th className="text-left py-3 px-3 text-yellow-600 font-black">Aspecto</th>
                  <th className="text-center py-3 px-3 text-gray-400">BANCO</th>
                  <th className="text-center py-3 px-3 text-gray-400">CONSÓRCIO</th>
                  <th className="text-center py-3 px-3 text-green-400 font-bold">MÉTODO SPA</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-800 hover:bg-yellow-600/5 transition">
                    <td className="py-4 px-3 font-semibold text-white">{row.aspect}</td>
                    <td className="text-center py-4 px-3 text-gray-400">{row.banco}</td>
                    <td className="text-center py-4 px-3 text-gray-300">{row.consorcio}</td>
                    <td className="text-center py-4 px-3 text-green-400 font-bold">{row.spa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MÉTODO SPA */}
      <section id="metodo" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-5xl text-center mb-4 text-white">
            O Método SPA®: 3 Pilares de Inteligência Financeira
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16">
            Como transformamos consórcio em alavancagem patrimonial real
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-yellow-600/20 to-yellow-600/5 border-2 border-yellow-600/50 rounded-xl p-8 hover:border-yellow-600 transition">
              <div className="text-6xl font-black text-yellow-600 mb-4">S</div>
              <h3 className="text-2xl font-black text-white mb-6">Segurança Estratégica</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white text-sm mb-2">Seleção TOP 5-7% de Grupos</p>
                  <p className="text-gray-400 text-xs">Analisamos centenas. Selecionamos apenas os melhores com histórico, solidez, potencial de contemplação rápida.</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white text-sm mb-2">Contemplação em 12-18 Meses</p>
                  <p className="text-gray-400 text-xs">Média mercado: 36-60. Nossos clientes: 14. Inteligência vs sorte.</p>
                </div>
              </div>
              <div className="border-t border-yellow-600/30 pt-4">
                <p className="text-yellow-600 font-black">RESULTADO:</p>
                <p className="text-white text-sm mt-2">3 anos à frente da concorrência</p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-yellow-600/20 to-yellow-600/5 border-2 border-yellow-600/50 rounded-xl p-8 hover:border-yellow-600 transition">
              <div className="text-6xl font-black text-yellow-600 mb-4">P</div>
              <h3 className="text-2xl font-black text-white mb-6">Patrimônio Multiplicado</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white text-sm mb-2">2-3 Aquisições Estruturadas</p>
                  <p className="text-gray-400 text-xs">Múltiplas cartas em paralelo = 2-3 imóveis em 24-36 meses vs 1 imóvel em 5+ anos.</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white text-sm mb-2">Diversificação Real</p>
                  <p className="text-gray-400 text-xs">Moradia + aluguel + negócio. Portfolio vs bem único.</p>
                </div>
              </div>
              <div className="border-t border-yellow-600/30 pt-4">
                <p className="text-yellow-600 font-black">RESULTADO:</p>
                <p className="text-white text-sm mt-2">Patrimônio exponencial vs linear</p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-yellow-600/20 to-yellow-600/5 border-2 border-yellow-600/50 rounded-xl p-8 hover:border-yellow-600 transition">
              <div className="text-6xl font-black text-yellow-600 mb-4">A</div>
              <h3 className="text-2xl font-black text-white mb-6">Alavancagem Real</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white text-sm mb-2">Imóvel → Aluguel (Renda Passiva)</p>
                  <p className="text-gray-400 text-xs">1º imóvel + 2º gerando aluguel = cash flow mensal.</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white text-sm mb-2">Fluxo Liberado → Investimentos</p>
                  <p className="text-gray-400 text-xs">Após contemplação, invista a mesma parcela. Multiplicação exponencial.</p>
                </div>
              </div>
              <div className="border-t border-yellow-600/30 pt-4">
                <p className="text-yellow-600 font-black">RESULTADO:</p>
                <p className="text-white text-sm mt-2">1 carta vira 3-4 fontes de renda</p>
              </div>
            </div>
          </div>

          {/* TIMELINE VISUAL */}
          <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-600/5 border-2 border-yellow-600 rounded-xl p-8">
            <h3 className="font-black text-2xl text-white text-center mb-8">SUA JORNADA: Mês a Mês</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center font-black text-black text-sm flex-shrink-0">MÊS 0</div>
                <div className="flex-1">
                  <p className="font-bold text-white">Contratação + Entra no Grupo TOP 5-7%</p>
                  <p className="text-gray-400 text-sm">Seleção estratégica do melhor grupo para você</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center font-black text-black text-sm flex-shrink-0">MÊS 14</div>
                <div className="flex-1">
                  <p className="font-bold text-white text-green-400">🎯 1ª CONTEMPLAÇÃO</p>
                  <p className="text-gray-400 text-sm">Adquire 1º bem + economiza R$ 680k em juros</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center font-black text-black text-sm flex-shrink-0">MÊS 30</div>
                <div className="flex-1">
                  <p className="font-bold text-white text-green-400">🎯 2ª CONTEMPLAÇÃO</p>
                  <p className="text-gray-400 text-sm">Adquire 2º bem + começa aluguel (renda passiva)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center font-black text-black text-sm flex-shrink-0">MÊS 48</div>
                <div className="flex-1">
                  <p className="font-bold text-white text-green-400">🎯 3ª CONTEMPLAÇÃO</p>
                  <p className="text-gray-400 text-sm">Adquire 3º bem (renda + patrimônio exponencial)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM É JOÃO DIAS */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-5xl text-center mb-4 text-white">
            {joaoDiasInfo.title}
          </h2>
          
          <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-600/5 border-2 border-yellow-600/50 rounded-xl p-12 text-center mb-16">
            <div className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center font-black text-black text-4xl mx-auto mb-6">JD</div>
            
            <p className="text-2xl font-black text-white mb-4">João Dias</p>
            <p className="text-yellow-600 font-bold text-lg mb-8">{joaoDiasInfo.bio}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {joaoDiasInfo.achievements.map((a, i) => (
                <div key={i} className="bg-black/50 rounded-lg p-4">
                  <p className="text-3xl font-black text-yellow-600">{a.value}</p>
                  <p className="text-gray-400 text-sm mt-2">{a.label}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              "Descobri que consórcio é MUITO mais que uma parcela de carro. É a ferramenta de alavancagem patrimonial que empresários usam para construir fortuna enquanto bancos ganham com juros. Criei o Método SPA para democratizar esse conhecimento."
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://instagram.com/joaodias.consorcio" className="text-yellow-600 hover:text-yellow-400 font-bold text-sm">📸 @joaodias.consorcio</a>
              <a href="https://linkedin.com/in/joaocarlosdias-sp" className="text-yellow-600 hover:text-yellow-400 font-bold text-sm">💼 LinkedIn</a>
              <a href="https://wa.me/19998187567" className="text-yellow-600 hover:text-yellow-400 font-bold text-sm">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS - CASE STUDIES */}
      <section id="resultados" className="py-24 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-5xl text-center mb-4 text-white">
            Resultados Reais De Clientes Reais
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16">
            O que +200 clientes conquistaram aplicando o Método SPA
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-yellow-600/10 to-black border border-yellow-600/30 rounded-xl p-8 hover:border-yellow-600 transition">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="font-black text-white text-lg">{t.name}</p>
                    <p className="text-yellow-600 text-sm font-bold">{t.role}</p>
                  </div>
                  <button 
                    onClick={() => setExpandedVideo(expandedVideo === i ? null : i)}
                    className="bg-yellow-600 hover:bg-yellow-700 text-black p-3 rounded-full flex-shrink-0 transition"
                  >
                    <Play size={16} />
                  </button>
                </div>

                <div className="bg-black/50 rounded-lg p-4 mb-4 border-l-4 border-red-500">
                  <p className="text-xs text-gray-500 font-bold mb-2">ANTES</p>
                  <p className="text-white font-semibold text-sm">{t.before}</p>
                </div>

                <div className="bg-black/50 rounded-lg p-4 mb-4 border-l-4 border-green-500">
                  <p className="text-xs text-gray-500 font-bold mb-2">DEPOIS</p>
                  <p className="text-white font-semibold text-sm">{t.after}</p>
                </div>

                <div className="bg-yellow-600/20 rounded-lg p-4 mb-4 border border-yellow-600/50">
                  <p className="text-xs text-yellow-600 font-bold mb-2">ROI ECONÔMICO</p>
                  <p className="text-yellow-400 font-black text-sm">{t.roi}</p>
                </div>

                {expandedVideo === i && (
                  <div className="bg-black/80 rounded-lg p-6 mb-4 border border-yellow-600/30">
                    <p className="text-sm text-gray-300 mb-4">
                      [Vídeo de depoimento de {t.name} — Disponível no WhatsApp / Instagram]
                    </p>
                    <a href={`https://wa.me/19998187567?text=Quero%20assistir%20o%20depoimento%20de%20${t.name}`} className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-bold text-sm transition">
                      Assistir Depoimento Completo
                    </a>
                  </div>
                )}

                <div className="border-t border-yellow-600/30 pt-4">
                  <p className="text-gray-300 text-sm italic">"{t.quote}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* SOCIAL PROOF ANIMADO */}
          <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-600/5 border-2 border-yellow-600 rounded-xl p-12 text-center">
            <p className="text-gray-400 text-sm mb-8 font-semibold">EM NÚMEROS REAIS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-5xl font-black text-yellow-600">200+</p>
                <p className="text-gray-400 text-sm mt-2">Clientes Atendidos</p>
              </div>
              <div>
                <p className="text-5xl font-black text-yellow-600">R$ 50M+</p>
                <p className="text-gray-400 text-sm mt-2">Patrimônio Gerado</p>
              </div>
              <div>
                <p className="text-5xl font-black text-yellow-600">98%</p>
                <p className="text-gray-400 text-sm mt-2">Taxa de Satisfação</p>
              </div>
              <div>
                <p className="text-5xl font-black text-yellow-600">14</p>
                <p className="text-gray-400 text-sm mt-2">Meses (Média)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO EXATO */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-5xl text-center mb-4 text-white">
            3 Passos Para Começar
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16">
            Do diagnóstico até sua primeira contemplação
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative bg-gradient-to-br from-yellow-600/10 to-black border border-yellow-600/30 rounded-xl p-8 hover:border-yellow-600 transition">
                <div className="absolute -top-4 left-8 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center font-black text-black text-lg">
                  {step.number}
                </div>

                <div className="mt-6 mb-6">
                  <h3 className="text-2xl font-black text-white mb-2">{step.title}</h3>
                  <p className="text-yellow-600 font-bold text-sm">{step.time}</p>
                </div>

                <ul className="space-y-3">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-gray-300">
                      <CheckCircle size={20} className="text-yellow-600 flex-shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {i < 2 && (
                  <div className="absolute -right-5 top-1/2 hidden md:block">
                    <ArrowRight size={32} className="text-yellow-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-black text-5xl text-center mb-4 text-white">
            Perguntas Estratégicas
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16">
            As dúvidas que TODO profissional de sucesso faz
          </p>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-yellow-600/5 border border-yellow-600/30 rounded-xl overflow-hidden hover:border-yellow-600 transition">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex justify-between items-start hover:bg-yellow-600/10 transition"
                >
                  <div className="text-left">
                    <span className="text-yellow-600 text-xs font-bold">{item.category}</span>
                    <p className="font-bold text-white text-lg mt-1">{item.q}</p>
                  </div>
                  <ChevronDown 
                    size={24} 
                    className={`text-yellow-600 flex-shrink-0 transition ${expandedFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {expandedFaq === i && (
                  <div className="px-8 py-6 bg-black/50 border-t border-yellow-600/30">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-wrap text-sm">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGÊNCIA & CTA FINAL */}
      <section className="py-24 px-6 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-5xl md:text-6xl mb-6">
            Não Espere Mais Um Mês
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-semibold">
            Cada mês que você adia, perde aproximadamente R$ 5.600 em juros que NÃO pagaria com consórcio.
          </p>

          <div className="bg-black/30 rounded-xl p-12 mb-12 border-2 border-black/50">
            <p className="text-lg mb-6">
              <strong>OFERTA ESPECIAL — VÁLIDA APENAS PARA OS PRÓXIMOS 7 DIAS:</strong>
            </p>
            
            <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black">✅</span>
                <span className="text-lg font-semibold">Consultoria GRATUITA 60 min (normalmente R$ 500)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black">✅</span>
                <span className="text-lg font-semibold">Análise Financeira Completa + ROI (R$ 1.000)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black">✅</span>
                <span className="text-lg font-semibold">Recomendação de 3 Melhores Grupos (R$ 300)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black">✅</span>
                <span className="text-lg font-semibold">Estrutura de Múltiplas Aquisições Personalizada</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black">✅</span>
                <span className="text-lg font-semibold">Acesso Grupo VIP WhatsApp (30 dias suporte)</span>
              </div>
            </div>

            <p className="text-xl font-black mb-2">VALOR TOTAL: ~R$ 2.000</p>
            <p className="text-3xl font-black">SEU INVESTIMENTO: R$ 0 (Apenas primeiros 5 clientes)</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
            <a 
              href="https://calendar.app.google/vrfs719bs8DdDrst8"
              className="bg-black text-yellow-600 px-12 py-5 font-black text-xl rounded-xl hover:bg-gray-900 transition transform hover:scale-105 inline-block"
            >
              🎯 AGENDAR AGORA
            </a>
            <a 
              href="https://wa.me/19998187567"
              className="bg-black text-yellow-600 px-12 py-5 font-black text-xl rounded-xl hover:bg-gray-900 transition transform hover:scale-105 inline-block"
            >
              💬 ENVIAR MENSAGEM
            </a>
          </div>

          <p className="text-sm opacity-75 font-semibold">
            ⚠️ Vagas limitadas. Atendimento cheio. Primeiros 5 agendam recebem bônus especial.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-yellow-600/20 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center font-black text-black mb-4">G</div>
              <p className="text-gray-400 text-sm">
                Transformando consórcio em alavancagem patrimonial estratégica. +200 clientes. R$ 50M+ gerados. O Método SPA que funciona.
              </p>
            </div>

            <div>
              <h4 className="text-white font-black mb-6">Navegação</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#hero" className="hover:text-yellow-600 transition">Home</a></li>
                <li><a href="#problema" className="hover:text-yellow-600 transition">Desafio</a></li>
                <li><a href="#metodo" className="hover:text-yellow-600 transition">Método SPA</a></li>
                <li><a href="#resultados" className="hover:text-yellow-600 transition">Resultados</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-6">Contato</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://wa.me/19998187567" className="hover:text-yellow-600 transition">📱 (19) 99818-7567</a></li>
                <li><a href="mailto:joao@gaiagroup.com.br" className="hover:text-yellow-600 transition">✉️ joao@gaiagroup.com.br</a></li>
                <li><a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="hover:text-yellow-600 transition">📅 Agendar</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-6">Social</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://instagram.com/joaodias.consorcio" className="hover:text-yellow-600 transition">📸 Instagram</a></li>
                <li><a href="https://linkedin.com/in/joaocarlosdias-sp" className="hover:text-yellow-600 transition">💼 LinkedIn</a></li>
                <li><a href="https://wa.me/19998187567" className="hover:text-yellow-600 transition">💬 WhatsApp</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-yellow-600/20 pt-12 text-center text-gray-600 text-sm">
            <p>© 2024 Gaia Group Investimentos & Consórcios. Todos os direitos reservados.</p>
            <p className="mt-3">Método SPA® é propriedade intelectual da Gaia Group. Parceiro exclusivo HS Consórcio (Grupo Herval) — Regulado pelo Banco Central.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
