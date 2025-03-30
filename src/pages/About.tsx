import { Header } from "../components/Header"
import { AboutHero } from "../components/AboutHero"
import { Footer } from "../components/Footer"

export function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <Footer />
    </div>
  )
}