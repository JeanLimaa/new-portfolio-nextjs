import '@/styles/scroll.css';
import '@/styles/globals.css';

import type { Metadata } from 'next'
import { Oxanium } from 'next/font/google'

const oxanium = Oxanium({ subsets: ['latin'], weight: ["300", "600", "400", "500", "600", "700"]})

export const metadata: Metadata = {
  title: 'Portfolio - Jean Lima',
  description: 'Conheça o portfolio de Jean Lima, um desenvolvedor fullstack especializado em Javascript, com experiência em React, Next.js, Node.js e outras tecnologias modernas.',
  keywords: 'Jean Lima, desenvolvedor fullstack, Javascript, React, Next.js, Node.js, portfolio, desenvolvedor web, desenvolvimento web, programação',
  icons: '/icon.png'
}

interface Props {
  children: React.ReactNode,
  params: {lang: string}
}

export default async function RootLayout({
  children,
  params
}: Props) {
  return (
    <html lang={params.lang}>
      <body className={oxanium.className}>
          {children}
      </body>
    </html>
  )
}
