import type { Metadata } from 'next'
import { Menu } from '@/components/layout/Menu'
import { Hero } from '@/components/sections/Hero'
import { Capabilities } from '@/components/sections/Capabilities'
import { Clients } from '@/components/sections/Clients'
import { Awards } from '@/components/sections/Awards'
import { Cases } from '@/components/sections/Cases'
import { Contact } from '@/components/sections/Contact'
import { Certifications } from '@/components/sections/Certifications'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Jüssi – The Experience Agency',
  description: 'Conectando criatividade, tecnologia e dados para acelerar negócios.',
}

export default function HomePage() {
  return (
    <>
      <Menu variant="sem-fundo" isHomePage />
      <main>
        <Hero />
        <Capabilities />
        <Clients />
        <Awards />
        <Cases />
        <Contact />
        <Certifications />
        <Footer />
      </main>
    </>
  )
}
