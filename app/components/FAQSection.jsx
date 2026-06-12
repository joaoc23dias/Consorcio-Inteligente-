'use client';

import { useState } from 'react';

const faqs = [
  { question: 'Como funciona o Consorcio Inteligente?', answer: 'O Consorcio Inteligente e um metodo de aquisicao de imoveis onde voce se une a outras pessoas em um grupo. Voce contribui mensalmente e quando chega sua vez (contemplacao), recebe o valor para adquirir seu imovel sem precisar de emprestimo bancario.' },
  { question: 'Qual e a diferenca do Metodo SPA para outros metodos?', answer: 'O Metodo SPA (Sistema de Planejamento Avancado) combina consorcio inteligente com estrategias de alavancagem financeira, permitindo que voce contemple multiplos imoveis rapidamente e construa renda passiva exponencial.' },
  { question: 'Quanto tempo leva para contemplar 3 imoveis?', answer: 'Nossos clientes conseguem contemplar 3 imoveis em media entre 24 a 36 meses, dependendo do tamanho do consorcio, valor das parcelas e da sua estrategia de lance.' },
  { question: 'Preciso de quanto dinheiro para comecar?', answer: 'Voce pode comecar com R$ 10.000 a R$ 50.000 como entrada inicial, dependendo do valor do imovel que escolher. Apos isso, contribuicoes mensais baseadas no seu consorcio.' },
  { question: 'E se eu nao conseguir pagar uma parcela?', answer: 'O consorcio e regulado e oferece protecao. Se voce nao conseguir pagar temporariamente, ha opcoes como suspensao de parcelas ou negociacao direta com o administrador.' },
  { question: 'Que tipos de imoveis posso adquirir?', answer: 'Voce pode adquirir residencias, apartamentos, salas comerciais e terrenos atraves do consorcio. A escolha depende da disponibilidade e das cotas do consorcio que voce participar.' },
  { question: 'Como e a renda passiva?', answer: 'Com o Metodo SPA voce escolhe imoveis em localizacoes de alta demanda que naturalmente apreciam. Ao locar os imoveis, voce gera renda mensal enquanto se posiciona para contemplar novamente.' },
  { question: 'Existe risco na contemplacao?', answer: 'Todo investimento tem riscos, mas consorcio e regulado pelo Banco Central. Nosso metodo reduz riscos atraves de analise estrategica de localizacao e mercado.' }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Duvidas Frequentes</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Respostas claras sobre o Metodo SPA e Consorcio Inteligente</p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-6"></div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-yellow-500 bg-gradient-to-r from-gray-900 to-gray-950">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-8 py-5 text-left flex justify-between items-center hover:bg-gray-800 transition-colors">
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <span className={`text-yellow-400 text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>{'\u25BC'}</span>
              </button>
              {openIndex === index && (
                <div className="px-8 py-6 bg-gray-900 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center p-10 rounded-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-yellow-500 border-opacity-30">
          <h3 className="text-2xl font-bold text-white mb-4">Ainda tem duvidas?</h3>
          <p className="text-gray-400 mb-6">Nossos consultores estao prontos para responder qualquer pergunta especifica sobre seu caso.</p>
          <a href="https://wa.me/19998187567" className="inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300">Agendar Consulta Gratuita</a>
        </div>
      </div>
    </section>
  );
}
