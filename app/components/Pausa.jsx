import Image from 'next/image';

// Foto gerada no Higgsfield (nano banana) para a pausa antes do diagnóstico.
const FOTO = 'https://d8j0ntlcm91z4.cloudfront.net/user_3MbR0sUBpodDPQLh4ssVdL8A42p/hf_20261125_182651_a6f4094f-e6f0-41e1-a77a-ccb744ba578b.png';

export default function Pausa() {
  return (
    <section className="pausa" aria-labelledby="pausa-titulo">
      <div className="pausa-foto">
        <Image src={FOTO} alt="Casal sorrindo com as chaves da casa nova na sala de estar" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: '70% 50%' }} />
      </div>
      <div className="wrap pausa-wrap">
        <div className="pausa-card">
          <h2 id="pausa-titulo" className="h2" style={{ margin: '0 0 14px' }}>A próxima conquista começa com uma conversa.</h2>
          <p className="cp" style={{ margin: '0 0 24px' }}>
            Sem compromisso. Você sai com o seu cenário claro, os números na mesa e o caminho que faz sentido para você.
          </p>
          <a href="#diagnostico" className="btn btn-pri">Agendar meu diagnóstico</a>
        </div>
      </div>
    </section>
  );
}
