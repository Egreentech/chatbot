import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WhyUs } from './components/WhyUs'
import { Testimonials } from './components/Testimonials'
import { BlogPreview } from './components/BlogPreview'
import { Footer } from './components/Footer'
import { ChatBot } from './components/ChatBot'
import { SEO } from './components/SEO'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <BlogPreview />
      <Footer />
      <ChatBot />
    </div>
  )
}

export default App