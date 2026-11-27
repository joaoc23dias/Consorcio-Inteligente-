import { Suspense } from 'react';
import RaioX from './RaioX';

export const metadata = {
  title: 'Raio-X Patrimonial | João Dias · Consórcio Inteligente',
  robots: { index: false, follow: false },
};

export default function PaginaRaioX() {
  return <Suspense fallback={null}><RaioX /></Suspense>;
}
