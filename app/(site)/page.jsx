import Hero from '../components/Hero';
import EstrategiaPresente from '../components/EstrategiaPresente';
import Metodo from '../components/Metodo';
import Credenciais from '../components/Credenciais';
import Depoimentos from '../components/Depoimentos';
import CartaJoao from '../components/CartaJoao';
import Agendar from '../components/Agendar';

// Início em 7 blocos: topo, diagnóstico, Método SPA®, quem te atende, provas, Carta do João e agendamento.
export default function Home() {
  return (
    <>
      <Hero />
      <EstrategiaPresente />
      <Metodo />
      <Credenciais linkSobre />
      <Depoimentos />
      <CartaJoao />
      <Agendar />
    </>
  );
}
