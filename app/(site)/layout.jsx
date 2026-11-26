import Header from '../components/Header';
import Footer from '../components/Footer';
import BarraMobile from '../components/BarraMobile';
import WhatsFlutuante from '../components/WhatsFlutuante';

export default function SiteLayout({ children }) {
  return (
    <>
      <a href="#conteudo" className="skip">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">{children}</main>
      <BarraMobile />
      <WhatsFlutuante />
      <Footer />
    </>
  );
}
