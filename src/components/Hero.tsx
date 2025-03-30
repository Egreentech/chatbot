import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { RotatingDodecahedron } from "./RotatingDodecahedron"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h1 className="font-display text-5xl font-bold leading-tight text-primary lg:text-7xl">
              Empowering Businesses with{" "}
              <span className="text-accent-green">AI Solutions</span>
            </h1>
            <p className="text-lg text-primary/80">
              We specialize in developing custom AI solutions that drive efficiency and innovation. From AI assistants and avatars to voice solutions and LLM fine-tuning, we help businesses harness the power of artificial intelligence to achieve their goals.
            </p>
            <div className="flex gap-4">
              <a
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-accent-green px-6 py-3 font-medium text-primary transition-all hover:bg-accent-green/90 hover:shadow-lg"
              >
                Schedule a Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/services"
                className="flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 font-medium text-primary transition-all hover:border-accent-blue hover:text-accent-blue"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square bg-accent-green/5 rounded-3xl overflow-hidden"
          >
            <RotatingDodecahedron />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-background/80 to-background" />
    </section>
  )
}