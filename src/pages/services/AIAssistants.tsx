import { motion } from "framer-motion"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Brain, MessageSquare, Zap, Database, Lock, BarChart } from "lucide-react"
import { RotatingOctahedron } from "../../components/RotatingOctahedron"

const features = [
  {
    icon: Brain,
    title: "Advanced NLP",
    description: "Natural language processing for human-like understanding and responses."
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Support",
    description: "Seamless integration across chat, email, and messaging platforms."
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Instant responses and decision-making capabilities."
  },
  {
    icon: Database,
    title: "Knowledge Integration",
    description: "Connect with your existing databases and knowledge bases."
  },
  {
    icon: Lock,
    title: "Secure Operations",
    description: "Enterprise-grade security for sensitive communications."
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Detailed insights into assistant performance and usage."
  }
]

const useCases = [
  {
    title: "Customer Support",
    description: "24/7 automated support with intelligent ticket routing and resolution."
  },
  {
    title: "Internal Operations",
    description: "Streamline HR, IT, and administrative tasks with AI automation."
  },
  {
    title: "Sales Assistance",
    description: "Qualify leads and provide product recommendations automatically."
  },
  {
    title: "Knowledge Management",
    description: "Instant access to company information and documentation."
  }
]

export function AIAssistants() {
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
                AI <span className="text-accent-green">Assistants</span>
              </h1>
              <p className="text-lg text-primary/80 mb-8">
                Intelligent AI assistants that automate tasks, enhance productivity, and provide 24/7 support for your business operations.
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
              <RotatingOctahedron />
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
              Our AI assistants combine advanced technology with practical business applications.
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
              Discover how AI assistants can transform your business operations.
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