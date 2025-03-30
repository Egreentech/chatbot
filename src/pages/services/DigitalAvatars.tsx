import { motion } from "framer-motion"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Users, Brain, MessageSquare, Video, Sparkles, Laptop } from "lucide-react"
import { RotatingCube } from "../../components/RotatingCube"

const features = [
  {
    icon: Users,
    title: "Customizable Appearance",
    description: "Create unique avatars that match your brand identity and target audience preferences."
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced natural language processing for human-like interactions and understanding."
  },
  {
    icon: MessageSquare,
    title: "Multi-Language Support",
    description: "Communicate with users in multiple languages, expanding your global reach."
  },
  {
    icon: Video,
    title: "Real-time Animation",
    description: "Fluid, natural movements and expressions that enhance engagement."
  },
  {
    icon: Sparkles,
    title: "Emotion Recognition",
    description: "Detect and respond to user emotions for more empathetic interactions."
  },
  {
    icon: Laptop,
    title: "Cross-platform Support",
    description: "Deploy your avatars across web, mobile, and desktop applications."
  }
]

const useCases = [
  {
    title: "Customer Service",
    description: "24/7 support with personalized assistance and instant response times."
  },
  {
    title: "Virtual Events",
    description: "Engaging presenters and hosts for online conferences and webinars."
  },
  {
    title: "Educational Content",
    description: "Interactive tutors and instructors for enhanced learning experiences."
  },
  {
    title: "Brand Ambassador",
    description: "Consistent brand representation across all digital touchpoints."
  }
]

export function DigitalAvatars() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl font-bold text-primary mb-6">
                Digital <span className="text-accent-green">Avatars</span>
              </h1>
              <p className="text-lg text-primary/80 mb-8">
                Transform your digital presence with lifelike AI-powered avatars. Create engaging, personalized interactions that represent your brand 24/7.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent-green px-6 py-3 font-medium text-primary transition-all hover:bg-accent-green/90 hover:shadow-lg"
              >
                Get Started
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square bg-accent-green/5 rounded-3xl overflow-hidden"
            >
              <RotatingCube />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Key <span className="text-accent-green">Features</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Our digital avatars combine cutting-edge AI technology with stunning visuals to create memorable interactions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <feature.icon className="h-12 w-12 text-accent-green mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-primary/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Use <span className="text-accent-green">Cases</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Discover how digital avatars can transform various aspects of your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{useCase.title}</h3>
                <p className="text-primary/80">{useCase.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-green px-8 py-4 font-medium text-primary transition-all hover:bg-accent-green/90 hover:shadow-lg"
            >
              Schedule a Demo
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}