import './globals.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import { ESCRITORIOS } from './content';

const SITE_URL = 'https://joaodias.engenheirodoconsorcio.com.br';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'João Dias · Planejamento Patrimonial | Método SPA®',
  description:
    'João Dias, especialista em planejamento patrimonial pela Gaia Group. Consórcio estratégico administrado pela HS Consórcios, com diagnóstico patrimonial em Ribeirão Preto, São José do Rio Pardo e Mococa.',
  openGraph: {
    title: 'João Dias · Planejamento Patrimonial',
    description: 'Seu próximo ativo merece uma estratégia, não uma cota qualquer.',
    url: SITE_URL,
    siteName: 'João Dias · Planejamento Patrimonial',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/joao-dias.jpg', width: 1080, height: 1080, alt: 'João Dias' }],
  },
};

export const viewport = {
  themeColor: '#FAF7F1',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'João Dias',
  jobTitle: 'Especialista em planejamento patrimonial',
  url: SITE_URL,
  image: `${SITE_URL}/joao-dias.jpg`,
  sameAs: ['https://www.instagram.com/joaodias.consorcio/'],
  worksFor: {
    '@type': 'FinancialService',
    name: 'Gaia Group Investimentos & Consórcios',
    location: ESCRITORIOS.map((e) => ({
      '@type': 'Place',
      name: `Gaia Group ${e.cidade}`,
      address: { '@type': 'PostalAddress', streetAddress: e.endereco, addressLocality: e.cidade, addressRegion: 'SP', addressCountry: 'BR' },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
