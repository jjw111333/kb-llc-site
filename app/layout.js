
import './globals.css'

export const metadata = {
  title: 'K&B LLC',
  description: 'Operational Bridge in Japan'
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="bg"></div>
        {children}
      </body>
    </html>
  )
}
