import { Skills } from '@/components/Skills/Skills'
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
      <Skills />
      <Portfolio />
    </main>
  )
}
