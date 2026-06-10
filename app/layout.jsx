'use client';

export const metadata = {
  title: 'Gaia Group | Consórcio Inteligente',
  description: 'Método SPA - Transformando consórcio em alavancagem patrimonial',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
