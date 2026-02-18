import './globals.css'

export const metadata = {
  title: 'K&B LLC',
  description: 'Japan-based Operational Bridge — 日本と韓国を、現場からつなぐ。',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Sans+KR:wght@300;400;500;700&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="bg-mesh" />
        <div className="grain" />
        {children}
      </body>
    </html>
  )
}
