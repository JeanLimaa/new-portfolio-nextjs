import '@/styles/scroll.css';
import '@/styles/globals.css';

import type { Metadata } from 'next'
import { Oxanium } from 'next/font/google'
import { Header } from '@/components/Header/Header';

const oxanium = Oxanium({ subsets: ['latin'], weight: ["300", "600", "400", "500", "600", "700"]})

export const metadata: Metadata = {
  title: 'Portfolio - Jean',
  description: 'Portfolio de Jean Lima, desenvolvedor fullstack javascript.',
  icons: '/icon.png'
}

interface Props {
  children: React.ReactNode
}

export default async function  RootLayout({
  children
}: Props) {

  return (
    <html lang={"pt"}>
      <body className={oxanium.className}>
          {children}
      </body>
    </html>
  )
}
