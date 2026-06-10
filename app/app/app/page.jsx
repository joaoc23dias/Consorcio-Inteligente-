'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "André Silva",
      profession: "Médico",
      badge: "🏆 2 cartas de R$ 500 mil",
      quote: "Participei do evento da Gaia Group e descobri uma forma completamente diferente de enxergar consórcios. Contratei 2 cartas de 500 mil e já estou colhendo os resultados. Estratégia inteligente que funciona!"
    },
    {
      name: "Paulo Martins",
      profession: "Corretor de Seguros",
      badge: "🏆 Contemplada no 1º mês",
      quote: "Contratei 3 cartas de 200 mil. Já no primeiro mês tive a primeira carta contemplada! Nunca tinha visto consórcio assim. Método SPA realmente é diferente. Recomendo para todos os colegas."
    },
    {
      name: "Carlos Eduardo",
      profession: "Empresário",
      badge: "🏆 R$ 850k em 18 meses",
      quote: "Como empresário, preciso de estratégias que funcionem. O consórcio inteligente multiplicou meu patrimônio enquanto cuido do meu negócio. Resultado comprovado e sem risco."
    },
    {
      name: "Dra. Mariana Costa",
      profession: "Advogada",
      badge: "🏆 2 imóveis em 2 anos",
      quote: "Achei impossível conseguir patrimônio sem impactar meu fluxo de caixa. O método SPA mudou tudo. Consegui 2 imóveis enquanto mantinha meu escritório crescendo. Inteligência financeira pura!"
    },
    {
      name: "Roberto Alves",
      profession: "Dentista",
      badge: "🏆 Consultório + imóvel",
      quote: "Investi em 2 cartas e consegui recursos para expandir meu consultório E ainda adquiri um imóvel para renda passiva. Consórcio virou minha ferramenta de crescimento. Nunca mais faço dívida."
    },
    {
      name: "Fernanda Oliveira",
      profession: "Empresária - Moda",
      badge: "🏆 R$ 650k para negócio",
      quote: "Como empresária, preciso de capital inteligente. Através do consórcio consegui financiar a expansão do meu negócio E ainda adquiri meu imóvel próprio. Alavancagem patrimonial que funciona!"
    }
  ];

  const faqs = [
    {
      q: "Mas consórcio não é um esquema? Já ouvi histórias de fraude...",
      a: "Consórcio legítimo (regulado pelo Banco Central) é 100% seguro. A Gaia Group trabalha EXCLUSIVAMENTE com HS Consórcio (Grupo Herval) — administradora autorizada pelo BC há 20+ anos com zero fraudes. Você recebe extrato mensal, pode auditar tudo."
    },
    {
      q: "Por que consórcio é melhor que financiamento bancário?",
      a: "CONSÓRCIO: Juros 0%, taxa admin ~2-3%, paga exatamente o bem. BANCO: Juros 7-9% ao ano, múltiplas taxas, paga 140-180% a mais. Exemplo: R$ 500k no banco = R$ 1.2M em 30 anos. Economia: R$ 700k+"
    },
    {
      q: "E se eu não for contemplado rápido? E se demorar 5 anos?",
      a: "Consórcio tradicional: 3-5 anos. MÉTODO SPA: Selecionamos TOP 7% dos grupos com 12-18 meses. Nossos clientes são contemplados EM MÉDIA em 14 meses vs 36+ da média. Por isso 98% estão satisfeitos."
    },
    {
      q: "Qual é o risco real? Posso perder dinheiro?",
      a: "Riscos mitigados: Contemplação atrasada (seleção estratégica reduz), bem desvaloriza (zona estratégica), mudança de circunstâncias (flexibilidade de cessão), deixar pagar (perde contribuição mas sem falência). Consórcio é MAIS flexível que banco."
    },
    {
      q: "Quanto tempo até ver resultado real?",
      a: "Mês 0-1: Contratação. Mês 14: 1ª contemplação (média). Mês 14-18: Bem gerando renda. Resultado financeiro em ~14 meses. Multiplicação patrimonial: 18-36 meses."
    },
    {
      q: "Por que devo confiar na Gaia Group?",
      a: "Track record: +200 clientes, R$ 50M+ gerados, 98% satisfação, 5+ anos, 0 processos Procon. Método SPA é exclusivo. Alinhamento: você sucede = nós sucedemos."
    },
    {
      q: "Qual é o investimento inicial?",
      a: "1 carta (ex: R$ 500k): R$ 5-8k entrada + R$ 2.5-3.5k/mês. BANCO: 10-20% entrada + R$ 4-6k/mês com juros. Vantagem: menos capital + zero juros."
    },
    {
      q: "Como funciona a consultoria? É obrigatório?",
      a: "Não é obrigatória, mas adiciona valor: análise de grupos, timing de contemplação, estrutura legal/fiscal, planejamento futuro. 3-5 reuniões economizam R$ 100k+ em juros."
    },
    {
      q: "Posso fazer isso sozinho?",
      a: "Pode, mas: SEM consultoria = risco 5 anos + sem otimização. COM Gaia = 14 meses + otimização fiscal + múltiplas aquisições. Diferença: ~R$ 200-400k em vantagem."
    },
    {
      q: "Qual é a próxima etapa?",
      a: "PASSO 1: Baixar guia grátis. PASSO 2: Agendar consultoria (30 min). PASSO 3: Contratar e entrar em ~5 dias. Próxima contemplação? ~14 meses."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur z-50 border-b border-yellow-600/20">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-black">G</div>
            <span className="font-bold text-lg">Gaia Group</span>
          </div>
          
          <ul className="hidden md:flex gap-8">
            <li><a href="#hero" className="hover:text-yellow-600 transition">Home</a></li>
            <li><a href="#metodo" className="hover:text-yellow-600 transition">Método SPA</a></li>
            <li><a href="#resultados" className="hover:text-yellow-600 transition">Resultados</a></li>
            <li><a href="#faq" className="hover:text-yellow-600 transition">FAQ</a></li>
          </ul>

          <div className="hidden md:flex gap-3">
            <a href="https://wa.me/19998187567" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-sm font-semibold transition">
              WhatsApp
            </a>
            <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="bg-yellow-600 hover:bg-yellow-700 text-black px-4 py-2 rounded font-bold text-sm transition">
              Agendar
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-yellow-600/20 px-6 py-4 space-y-4">
            <a href="#hero" className="block hover:text-yellow-600">Home</a>
            <a href="#metodo" className="block hover:text-yellow-600">Método SPA</a>
            <a href="#resultados" className="block hover:text-yellow-600">Resultados</a>
            <a href="#faq" className="block hover:text-yellow-600">FAQ</a>
            <a href="https://wa.me/19998187567" className="block bg-green-500 text-white px-4 py-2 rounded text-center font-semibold">WhatsApp</a>
            <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="block bg-yellow-600 text-black px-4 py-2 rounded font-bold text-center">Agendar</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-yellow-600/20 border border-yellow-600/50 px-4 py-2 rounded-full mb-6">
            <span className="text-yellow-600 text-sm font-bold">✦ Método SPA — Exclusivo Gaia Group</span>
          </div>

          <h1 className="font-bold text-5xl md:text-6xl mb-6 leading-tight">
            De Executivo Estagnado para Proprietário de{' '}
            <span className="text-yellow-600">2-3 Imóveis em 14 Meses</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Sem juros bancários, sem comprometer fluxo de caixa — método comprovado com +200 clientes
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Enquanto você financia pelo banco e perde 60% em juros, empresários de alta renda estão usando o Método SPA para adquirir patrimônio REAL com parcelas menores, ZERO juros.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <a href="https://wa.me/19998187567" className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 font-bold rounded-lg transition transform hover:scale-105">
              🎁 DOWNLOAD GRÁTIS: Guia dos 7 Segredos
            </a>
            <a href="https://calendar.app.google/vrfs719bs8DdDrst8" className="border-2 border-yellow-600 hover:bg-yellow-600 hover:text-black text-yellow-600 px-8 py-4 font-bold rounded-lg transition">
              📅 AGENDAR CONSULTORIA
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: '+200', l: 'Clientes' },
              { n: 'R$ 50M+', l: 'Patrimônio' },
              { n: '98%', l: 'Satisfação' },
              { n: '14', l: 'Meses' }
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-yellow-600">{s.n}</div>
                <div className="text-sm text-gray-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-4xl text-white mb-4 text-center">
            O Desafio Silencioso dos Empresários de Alta Renda
          </h2>
          
          <p className="text-center text-gray-400 mb-16">
            Você construiu algo valioso. Mas há um problema que ninguém fala...
          </p>

          <div className="space-y-8">
            {[
              {
                num: 1,
                title: "Juros Bancários Comem Seu Patrimônio",
                desc: "Se você financia um imóvel de R$ 500k pelo banco: Taxa média 7-9% ao ano • Em 30 anos paga R$ 1.200k+ (140% a mais) • Fluxo amarrado por décadas"
              },
              {
                num: 2,
                title: "Fluxo de Caixa é Seu Ativo Mais Valioso",
                desc: "Cada real comprometido é um real que NÃO está gerando oportunidades, criando fundo de emergência ou multiplicando patrimônio. Resultado: rico no papel mas pobre na prática"
              },
              {
                num: 3,
                title: "Consultores Genéricos Não Entendem Seu Mundo",
                desc: "Bancos querem vender crédito (ganham em juros). Consultores tradicionais vendem produtos (ganham em comissão). Ninguém realmente quer ver você livre."
              }
            ].map((p, i) => (
              <div key={i} className="pb-8 border-b border-yellow-600/20 last:border-0">
                <div className="flex gap-4 mb-4">
                  <span className="text-2xl font-bold text-yellow-600">{p.num}</span>
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                </div>
                <p className="text-gray-400 ml-12">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-600/10 border-l-4 border-yellow-600 px-8 py-6 rounded mt-12">
            <p className="text-white text-lg">
              <strong>Mas e se existisse outro caminho?</strong> Uma forma que empresários realmente sucedidos usam para multiplicar patrimônio SEM sacrificar fluxo de caixa, SEM juros predatórios?
            </p>
          </div>
        </div>
      </section>

      {/* MÉTODO SPA */}
      <section id="metodo" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-4xl text-white text-center mb-4">
            O Método SPA: A Estratégia que Multiplica Patrimônio
          </h2>
          
          <p className="text-center text-gray-400 text-lg mb-16">
            Há 5+ anos, a Gaia Group percebeu um padrão: Os empresários mais inteligentes estavam usando consórcio de forma completamente diferente.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                l: 'S',
                t: 'Segurança — Seleção Estratégica',
                p: 'Analisamos centenas de grupos, selecionamos TOP 5-7% com maior potencial.',
                r: 'Contemplação em 12-18 meses (vs 3-5 anos da média)'
              },
              {
                l: 'P',
                t: 'Patrimônio — Posicionamento',
                p: 'Técnicas avançadas para você ficar na FRENTE da fila sem risco.',
                r: 'Contemplação antecipada, maximizando alavancagem'
              },
              {
                l: 'A',
                t: 'Alavancagem — Transformar em Renda',
                p: 'Estruturamos imóvel para aluguel, veículo para negócio, proteção legal.',
                r: '1 carta vira 2-3 fontes de renda + patrimônio protegido'
              }
            ].map((p, i) => (
              <div key={i} className="bg-yellow-600/5 border border-yellow-600/30 rounded-lg p-8 hover:border-yellow-600 transition">
                <div className="text-yellow-600 font-bold text-3xl mb-2">{p.l}</div>
                <h3 className="text-white font-bold text-lg mb-4">{p.t}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.p}</p>
                <div className="bg-black/50 px-3 py-2 rounded border-l-2 border-yellow-600">
                  <p className="text-gray-300 text-sm"><strong>Resultado:</strong> {p.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-4xl text-white text-center mb-16">
            Resultados Que Falam Mais Alto
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { n: '+200', l: 'Clientes' },
              { n: 'R$ 50M+', l: 'Patrimônio' },
              { n: '98%', l: 'Satisfação' },
              { n: '14', l: 'Meses' }
            ].map((s, i) => (
              <div key={i} className="text-center bg-black/50 p-8 rounded border border-yellow-600/20 hover:border-yellow-600 transition">
                <div className="text-5xl font-bold text-yellow-600 mb-2">{s.n}</div>
                <div className="text-gray-400 text-sm">{s.l}</div>
              </div>
            ))}
          </div>

          <h3 className="text-white font-bold text-3xl mb-8">Depoimentos de Clientes</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-black/50 border border-yellow-600/20 rounded-lg p-6 hover:border-yellow-600 transition">
                <p className="text-white font-bold mb-2">{t.name}</p>
                <p className="t
