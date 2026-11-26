import TopoPagina from '../../components/TopoPagina';
import Cartas from '../../components/Cartas';
import FaqSchema from '../../components/FaqSchema';
import { CARTAS_FAQ } from '../../content';

export const metadata = {
  title: 'Cartas contempladas HS: compra e venda | João Dias · Consórcio Inteligente',
  description: 'Compra e venda de cartas contempladas da HS Consórcios com a intermediação da Gaia Group.',
  alternates: { canonical: '/cartas-contempladas' },
};

export default function PaginaCartas() {
  return (
    <>
      <FaqSchema perguntas={CARTAS_FAQ} />
      <TopoPagina titulo="Cartas contempladas" texto="Compra e venda de cartas contempladas da HS Consórcios, com a intermediação da Gaia Group." />
      <Cartas />
    </>
  );
}
