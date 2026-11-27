import Cartas, { CartasTopo, CartasAntes, CartasFim } from '../../components/Cartas';
import FaqSchema from '../../components/FaqSchema';
import { CARTAS_FAQ_COMPLETA } from '../../content';

export const metadata = {
  title: 'Cartas contempladas HS: compra e venda | João Dias · Consórcio Inteligente',
  description: 'Compra e venda de cartas contempladas da HS Consórcios com a intermediação da Gaia Group.',
  alternates: { canonical: '/cartas-contempladas' },
};

export default function PaginaCartas() {
  return (
    <>
      <FaqSchema perguntas={CARTAS_FAQ_COMPLETA} />
      <CartasTopo />
      <CartasAntes />
      <Cartas />
      <CartasFim />
    </>
  );
}
