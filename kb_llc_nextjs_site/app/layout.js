
import './globals.css'

export const metadata = {
  title: '合同会社K&B | K&B LLC',
  description: 'Inbound / Logistics / 3PL / Business Operations in Osaka'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
