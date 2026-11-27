import { SobreTopo, SobreEmpresas, SobreRegiao, SobreMetodo, SobreDocs, SobreFim } from '../../components/Sobre';

export const metadata = {
  title: 'Sobre João Dias, Gaia Group e HS Consórcios | Consórcio Inteligente',
  description: 'João Dias, especialista em planejamento patrimonial pela Gaia Group, com a HS Consórcios (Grupo Herval) como administradora. Escritórios em Ribeirão Preto, São José do Rio Pardo e Mococa.',
  alternates: { canonical: '/sobre' },
};

export default function PaginaSobre() {
  return (
    <>
      <SobreTopo />
      <SobreEmpresas />
      <SobreRegiao />
      <SobreMetodo />
      <SobreDocs />
      <SobreFim />
    </>
  );
}
