import './globals.css';
import '@fontsource-variable/schibsted-grotesk';
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource-variable/schibsted-grotesk/wght-italic.css';
import '@fontsource-variable/source-serif-4/opsz.css';
import { Analytics } from '@vercel/analytics/react';
import Melhorias from './components/Melhorias';
import { ESCRITORIOS, WHATSAPP, GAIA } from './content';

const SITE_URL = 'https://www.consorciointeligente.com.br';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Consórcio estratégico e carta contemplada | João Dias',
  description:
    'Planejamento patrimonial com consórcio estratégico HS e cartas contempladas. Escritórios em Ribeirão Preto, São José do Rio Pardo e Mococa.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'João Dias · Consórcio estratégico e planejamento patrimonial',
    description: 'Seu próximo ativo merece uma estratégia, não uma cota qualquer. Consórcio HS e cartas contempladas pela Gaia Group.',
    url: SITE_URL,
    siteName: 'João Dias · Consórcio Inteligente',
    locale: 'pt_BR',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#F7F7F3',
};

const TELEFONE = `+${WHATSAPP}`;
const REGIAO = ['Ribeirão Preto', 'São José do Rio Pardo', 'Mococa', 'Guaxupé', 'Monte Santo de Minas', 'Tambaú', 'Casa Branca'];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#site`,
      url: SITE_URL,
      name: 'João Dias · Consórcio Inteligente',
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#joao`,
      name: 'João Dias',
      jobTitle: 'Especialista em planejamento patrimonial',
      url: SITE_URL,
      image: `${SITE_URL}/joao-dias-hero.jpg`,
      sameAs: ['https://www.instagram.com/joaodias.consorcio/'],
      worksFor: { '@id': `${SITE_URL}/#gaia` },
      knowsAbout: ['Consórcio', 'Carta contemplada', 'Planejamento patrimonial', 'Consórcio de imóvel', 'Consórcio de veículo'],
    },
    {
      '@type': 'FinancialService',
      '@id': `${SITE_URL}/#gaia`,
      name: 'Gaia Group Investimentos & Consórcios',
      url: SITE_URL,
      telephone: TELEFONE,
      email: GAIA.email,
      logo: `${SITE_URL}/logo-gaia-vermelho.png`,
      areaServed: REGIAO.map((c) => ({ '@type': 'City', name: c })),
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consórcio estratégico de imóvel e veículo (HS Consórcios)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compra e venda de carta contemplada' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diagnóstico patrimonial' } },
      ],
      department: ESCRITORIOS.map((e) => ({
        '@type': 'FinancialService',
        name: `Gaia Group ${e.cidade}`,
        telephone: TELEFONE,
        address: { '@type': 'PostalAddress', streetAddress: e.endereco, addressLocality: e.cidade, addressRegion: 'SP', addressCountry: 'BR' },
      })),
    }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Melhorias />
        <Analytics />
      </body>
    </html>
  );
}
