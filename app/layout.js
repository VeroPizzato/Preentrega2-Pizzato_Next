import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spirit Computacion',
  description: 'Venta de insumos y equipos informaticos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}


