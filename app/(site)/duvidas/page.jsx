import TopoPagina from '../../components/TopoPagina';
import Duvidas from '../../components/Duvidas';
import Guia from '../../components/Guia';
import FaqSchema from '../../components/FaqSchema';
import { FAQ } from '../../content';

export const metadata = {
  title: 'Dúvidas sobre consórcio | João Dias · Consórcio Inteligente',
  description: 'Respostas diretas sobre consórcio estratégico, contemplação, lance e cartas contempladas da HS Consórcios.',
  alternates: { canonical: '/duvidas' },
};

export default function PaginaDuvidas() {
  return (
    <>
      <FaqSchema perguntas={FAQ} />
      <TopoPagina titulo="Dúvidas" texto="As perguntas que mais chegam sobre consórcio, contemplação e lance, com respostas diretas." />
      <Duvidas />
      <Guia />
    </>
  );
}
