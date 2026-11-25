import Image from 'next/image';

// Fechamento: a mesma mesa de estratégia do topo, agora como convite.
const FOTO = '/mesa-estrategia.webp';

export default function Pausa() {
  return (
    <section className="pausa" aria-labelledby="pausa-titulo">
      <div className="pausa-foto" aria-hidden="true">
        <Image src={FOTO} alt="" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: '75% 60%' }} />
      </div>
      <div className="wrap pausa-wrap">
        <div className="pausa-card">
          <h2 id="pausa-titulo" className="h2" style={{ margin: '0 0 16px' }}>O seu lugar nessa mesa está reservado.</h2>
          <p className="cp" style={{ margin: 0 }}>
            No diagnóstico você sai com o seu cenário claro, os números na mesa e o caminho que faz sentido para o seu patrimônio.
          </p>
        </div>
      </div>
    </section>
  );
}
