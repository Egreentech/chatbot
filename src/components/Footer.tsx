import { Brain, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Brain className="h-8 w-8 text-accent-green" />
              <span className="font-display text-xl font-bold">AIAutoEye</span>
            </div>
            <p className="text-white/80 mb-4">
              Empowering businesses with cutting-edge AI solutions. Transform your operations with our innovative technology.
            </p>
            <p className="text-sm text-white/60">
              GSTN: 27AADFE8057C1ZK
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-green shrink-0 mt-1" />
                <p className="text-white/80">
                  Egreen Tech<br />
                  116 C Wing Synthofine Industrial Estate<br />
                  Goregaon East, Mumbai-400063
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-green" />
                <a href="mailto:aiautoeye@gmail.com" className="text-white/80 hover:text-accent-green transition-colors">
                  aiautoeye@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-green" />
                <a href="tel:+919987702749" className="text-white/80 hover:text-accent-green transition-colors">
                  +91 99877 02749
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-white/80 hover:text-accent-green transition-colors">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-white/80 hover:text-accent-green transition-colors">Services</a>
              </li>
              <li>
                <a href="/blog" className="text-white/80 hover:text-accent-green transition-colors">Blog</a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-accent-green transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/ai-consulting" className="text-white/80 hover:text-accent-green transition-colors">AI Consulting</a>
              </li>
              <li>
                <a href="/services/digital-avatars" className="text-white/80 hover:text-accent-green transition-colors">Digital Avatars</a>
              </li>
              <li>
                <a href="/services/ai-assistants" className="text-white/80 hover:text-accent-green transition-colors">AI Assistants</a>
              </li>
              <li>
                <a href="/services/voice-solutions" className="text-white/80 hover:text-accent-green transition-colors">Voice Solutions</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} AIAutoEye. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="text-white/60 text-sm hover:text-accent-green transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 text-sm hover:text-accent-green transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}