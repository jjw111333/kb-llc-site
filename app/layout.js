
import './globals.css'

export const metadata = {
  title: 'K&B LLC',
  description: 'Japan-based Operational Bridge'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="bg"></div>
        {children}
      </body>
    </html>
  )
}
