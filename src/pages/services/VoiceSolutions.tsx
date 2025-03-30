import { motion } from "framer-motion"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Mic, Volume2, Languages, Wand2, Shield, Settings, Brain, Zap } from "lucide-react"
import { RotatingIcosahedron } from "../../components/RotatingIcosahedron"

const features = [
  {
    icon: Mic,
    title: "Advanced Speech Recognition",
    description: "State-of-the-art speech-to-text with 99% accuracy, noise reduction, and accent adaptation capabilities."
  },
  {
    icon: Volume2,
    title: "Natural Text-to-Speech",
    description: "Human-like voice synthesis with emotional intelligence and natural prosody in multiple languages."
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Support for over 50 languages and regional accents, enabling global communication."
  },
  {
    icon: Brain,
    title: "Voice AI Processing",
    description: "Real-time voice analysis, intent recognition, and contextual understanding."
  },
  {
    icon: Shield,
    title: "Voice Authentication",
    description: "Secure biometric authentication with anti-spoofing technology and fraud detection."
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Ultra-low latency voice processing for instant responses and natural conversations."
  }
]

const useCases = [
  {
    title: "Customer Service",
    description: "Intelligent voice assistants that handle customer inquiries 24/7, reducing wait times and improving satisfaction.",
    features: [
      "Natural language understanding",
      "Context-aware responses",
      "Seamless call routing",
      "Sentiment analysis"
    ]
  },
  {
    title: "Voice Commerce",
    description: "Enable voice-based shopping experiences with secure authentication and personalized recommendations.",
    features: [
      "Voice-based ordering",
      "Product search",
      "Secure payments",
      "Order tracking"
    ]
  },
  {
    title: "Healthcare",
    description: "Voice-enabled solutions for patient care, medical documentation, and healthcare workflow optimization.",
    features: [
      "Medical transcription",
      "Voice EMR updates",
      "Patient monitoring",
      "Appointment scheduling"
    ]
  },
  {
    title: "Smart Workplaces",
    description: "Transform workplace efficiency with voice-controlled systems and hands-free operations.",
    features: [
      "Meeting transcription",
      "Voice commands",
      "Task automation",
      "System control"
    ]
  }
]

const technologies = [
  {
    title: "Neural Speech Processing",
    description: "Advanced neural networks for superior speech recognition and synthesis."
  },
  {
    title: "Acoustic Modeling",
    description: "Precise acoustic modeling for enhanced voice quality and naturalness."
  },
  {
    title: "Natural Language Understanding",
    description: "Deep learning models for context-aware voice interactions."
  },
  {
    title: "Voice Biometrics",
    description: "Advanced voice authentication and verification systems."
  }
]

export function VoiceSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-background">
      <Header />
      
      <section className="pt-32 pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(178,231,27,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(178,231,27,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl font-bold text-primary mb-6">
                Voice <span className="text-accent-green">Solutions</span>
              </h1>
              <p className="text-lg text-primary/80 mb-8">
                Transform your business interactions with our advanced voice AI solutions. From intelligent voice assistants to secure voice authentication systems, we provide cutting-edge technology that enables natural, efficient, and secure voice-based experiences.
              </p>
              <div className="flex gap-4">
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
                <a
                  href="#use-cases"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 font-medium text-primary transition-all hover:border-accent-blue hover:text-accent-blue"
                >
                  Explore Use Cases
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square bg-gradient-to-br from-accent-green/5 via-white to-accent-green/10 rounded-3xl overflow-hidden shadow-xl"
            >
              <RotatingIcosahedron />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(178,231,27,0.1),transparent_70%)]" />
            <h2 className="font-display text-4xl font-bold text-primary mb-4 relative">
              Key <span className="text-accent-green">Features</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto relative">
              Our voice solutions combine advanced AI technology with practical applications for seamless voice interactions.
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
                className="bg-gradient-to-br from-white via-white to-accent-green/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-green/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <feature.icon className="h-12 w-12 text-accent-green mb-4 relative" />
                <h3 className="text-xl font-bold text-primary mb-2 relative">{feature.title}</h3>
                <p className="text-primary/80 relative">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="use-cases"
            className="mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-primary mb-8 text-center">
              Industry <span className="text-accent-green">Applications</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-primary mb-4">{useCase.title}</h3>
                  <p className="text-primary/80 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-primary/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
              Our <span className="text-accent-green">Technology</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-6 w-6 text-accent-green" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{tech.title}</h3>
                  <p className="text-primary/80 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

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