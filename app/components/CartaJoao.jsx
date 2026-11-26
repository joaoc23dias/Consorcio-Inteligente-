// Bloco 6 do início: carta curta do João, em primeira pessoa.
// Texto em aprovação: alterar aqui quando o João revisar.
const PARAGRAFOS = [
  'Sou de São José do Rio Pardo e há uma década trabalho nos mercados financeiro e imobiliário. Nesse tempo, vi muita gente deixar de construir patrimônio não por falta de renda, mas por falta de um plano.',
  'Por isso eu não começo pela cota nem pelo aporte. Começo pelo que você quer conquistar, pelo que cabe no seu mês e pelo tempo que você tem. Só depois o consórcio entra, como ferramenta, dentro do Método SPA® da Gaia Group.',
  'Também vou te dizer quando o consórcio não faz sentido para você. Ninguém pode prometer data de contemplação, e eu não prometo. O que eu ofereço é clareza: os números na mesa antes de qualquer assinatura.',
  'Se fizer sentido seguir, você segue sabendo exatamente onde está entrando. Se não fizer, sai da conversa com o seu cenário mais claro do que quando chegou.',
];

export default function CartaJoao() {
  return (
    <section id="carta" className="sec carta" aria-labelledby="carta-titulo">
      <div className="wrap">
        <article className="carta-papel">
          <h2 id="carta-titulo" className="h2">Antes da nossa conversa.</h2>
          {PARAGRAFOS.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          <footer className="carta-assinatura">
            <span className="marca-nome">João Dias</span>
            <span className="carta-cargo">Especialista em planejamento patrimonial pela Gaia Group</span>
            <time dateTime="2026-11">Novembro de 2026</time>
          </footer>
        </article>
      </div>
    </section>
  );
}
