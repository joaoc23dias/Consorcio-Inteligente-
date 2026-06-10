import './globals.css'

export const metadata = {
  title: 'Gaia Group — Consórcio Inteligente',
  description: 'Método SPA: Multiplique seu patrimônio com consórcio inteligente. +200 clientes, R$ 50M+ gerados, 98% satisfação.',
  keywords: 'consórcio, consórcio inteligente, alavancagem patrimonial, método SPA, gaia group',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Gaia Group — Consórcio Inteligente',
    description: 'Multiplique seu patrimônio com o Método SPA',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXX');`}
        </script>
      </head>
      <body className="bg-black text-white font-montserrat">
        {children}
      </body>
    </html>
  )
}
