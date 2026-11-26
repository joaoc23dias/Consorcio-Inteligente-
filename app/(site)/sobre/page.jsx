import TopoPagina from '../../components/TopoPagina';
import Credenciais from '../../components/Credenciais';
import Metodo from '../../components/Metodo';
import HS from '../../components/HS';
import { BC_URL } from '../../content';

export const metadata = {
  title: 'Sobre João Dias, Gaia Group e HS Consórcios | Consórcio Inteligente',
  description: 'João Dias, especialista em planejamento patrimonial pela Gaia Group, com a HS Consórcios (Grupo Herval) como administradora. Escritórios em Ribeirão Preto, São José do Rio Pardo e Mococa.',
  alternates: { canonical: '/sobre' },
};

const DOCUMENTOS = [
  { href: 'https://hsconsorcios.com.br/entenda-mais#regulamento', t: 'Regulamento Geral da HS Consórcios' },
  { href: 'https://hsconsorcios.com.br/wp-content/uploads/2025/01/Regulamento-Geral.-Requisitos-para-liberacao-do-credito.pdf', t: 'Requisitos para liberação do crédito' },
  { href: BC_URL, t: 'Consulta da HS Consórcios no Banco Central' },
];

export default function PaginaSobre() {
  return (
    <>
      <TopoPagina titulo="Sobre" texto="João Dias, a Gaia Group, a HS Consórcios e o Método SPA® da Gaia Group." />
      <Credenciais />
      <Metodo />
      <HS />
      <section className="sec" aria-labelledby="docs-titulo" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 id="docs-titulo" className="h3" style={{ fontSize: 30, margin: 0 }}>Documentos oficiais</h2>
          <ul className="lista-docs">
            {DOCUMENTOS.map((d) => (
              <li key={d.href}><a href={d.href} target="_blank" rel="noopener noreferrer">{d.t}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
