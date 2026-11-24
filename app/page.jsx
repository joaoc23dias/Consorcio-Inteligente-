import Header from './components/Header';
import Hero from './components/Hero';
import Plano from './components/Plano';
import QuandoNao from './components/QuandoNao';
import Metodo from './components/Metodo';
import HS from './components/HS';
import Depoimentos from './components/Depoimentos';
import Simulador from './components/Simulador';
import Comparativo from './components/Comparativo';
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
        <Plano />
        <QuandoNao />
        <Metodo />
        <HS />
        <Comparativo />
        <Depoimentos />
        <Simulador />
        <Duvidas />
        <Agendar />
      </main>
      <Footer />
    </>
  );
}
