import './globals.css'

export const metadata = {
  title: 'Gaia Group',
  description: 'Consórcio Inteligente',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
