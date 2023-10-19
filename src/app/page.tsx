import { Skills } from '@/components/Skills/Skills'
import { HomeSection } from '@/components/Home'
import { Portfolio } from '@/components/Portfolio/Portfolio'
import { AboutComponent } from '@/components/About/About'

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutComponent />
      <Skills />
      <Portfolio />
    </main>
  )
}
