import Image from 'next/image'
import { Services } from '@/components/Services/Services'
import { HomeSection } from '@/components/Home'
import { Header } from '@/components/Header'
import { About } from '@/components/About/About'
import { Portfolio } from '@/components/Portfolio/Portfolio'

export default function Home() {
  return (
    <main>
      <Header />
      <HomeSection />
      <About />
      <Services />
      <Portfolio />
    </main>
  )
}
