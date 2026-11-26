import TopoPagina from '../../components/TopoPagina';
import Simulador from '../../components/Simulador';
import Comparativo from '../../components/Comparativo';

export const metadata = {
  title: 'Simulador de consórcio HS | João Dias · Consórcio Inteligente',
  description: 'Faça a conta do aporte mensal pelas tabelas da HS Consórcios e compare o consórcio com o financiamento.',
  alternates: { canonical: '/simulador' },
};

export default function PaginaSimulador() {
  return (
    <>
      <TopoPagina titulo="Simulador" texto="Escolha o bem e o valor do crédito, veja o aporte mensal pelas tabelas da HS Consórcios e compare com o financiamento." />
      <Simulador />
      <Comparativo />
    </>
  );
}
