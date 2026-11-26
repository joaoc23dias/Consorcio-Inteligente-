// Dados estruturados (FAQPage) das perguntas exibidas na própria página.
const texto = (f) => f.a || (f.lista ? f.lista.join('. ') + '.' : f.passos.map((p, i) => `${i + 1}. ${p.t}: ${p.d}`).join(' '));

export default function FaqSchema({ perguntas }) {
  const dados = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: perguntas.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: texto(f) } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />;
}
