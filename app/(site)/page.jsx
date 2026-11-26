import Hero from '../components/Hero';
import Estrategia from '../components/Estrategia';
import Credenciais from '../components/Credenciais';
import HS from '../components/HS';
import Metodo from '../components/Metodo';
import Depoimentos from '../components/Depoimentos';
import Duvidas from '../components/Duvidas';
import Guia from '../components/Guia';
import Pausa from '../components/Pausa';
import Agendar from '../components/Agendar';

export default function Home() {
  return (
    <>
      <Hero />
      <Estrategia />
      <Credenciais />
      <HS />
      <Metodo />
      <Depoimentos />
      <Duvidas />
      <Guia />
      <Pausa />
      <Agendar />
    </>
  );
}
