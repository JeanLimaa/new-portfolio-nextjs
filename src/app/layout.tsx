import './styles/scroll.css';
import './styles/globals.css';

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: "600" })

export const metadata: Metadata = {
  title: 'Portfolio - Jean',
  description: 'Portfolio de Jean Lima, desenvolvedor fullstack javascript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
