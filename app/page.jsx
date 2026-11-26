import Header from './components/Header';
import Hero from './components/Hero';
import Credenciais from './components/Credenciais';
import Estrategia from './components/Estrategia';
import Metodo from './components/Metodo';
import HS from './components/HS';
import Depoimentos from './components/Depoimentos';
import Simulador from './components/Simulador';
import Comparativo from './components/Comparativo';
import Cartas from './components/Cartas';
import BarraMobile from './components/BarraMobile';
import WhatsFlutuante from './components/WhatsFlutuante';
import Pausa from './components/Pausa';
import Guia from './components/Guia';
import Duvidas from './components/Duvidas';
import Agendar from './components/Agendar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="skip">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Estrategia />
        <Credenciais />
        <HS />
        <Metodo />
        <Simulador />
        <Comparativo />
        <Cartas />
        <Depoimentos />
        <Duvidas />
        <Guia />
        <Pausa />
        <Agendar />
        <BarraMobile />
        <WhatsFlutuante />
      </main>
      <Footer />
    </>
  );
}
