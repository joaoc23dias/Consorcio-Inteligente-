import Hero from '../components/Hero';
import Estrategia from '../components/Estrategia';
import Metodo from '../components/Metodo';
import Credenciais from '../components/Credenciais';
import Depoimentos from '../components/Depoimentos';
import Agendar from '../components/Agendar';

// Início em blocos: topo, diagnóstico, Método SPA®, quem te atende, provas e agendamento.
// A Carta do João entra entre provas e agendamento quando o texto for aprovado.
export default function Home() {
  return (
    <>
      <Hero />
      <Estrategia />
      <Metodo />
      <Credenciais linkSobre />
      <Depoimentos />
      <Agendar />
    </>
  );
}
