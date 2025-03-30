import { motion } from "framer-motion"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { MessageSquare, Users, Brain, Mic, Code, Lightbulb, Boxes } from "lucide-react"

const services = [
  {
    icon: MessageSquare,
    title: "AI Consulting",
    description: "Strategic guidance for implementing AI solutions in your business workflow.",
    features: [
      "AI readiness assessment",
      "Technology stack recommendations",
      "Implementation roadmap",
      "ROI analysis",
      "Risk assessment"
    ]
  },
  {
    icon: Users,
    title: "Digital Avatars",
    description: "Create lifelike AI-powered digital representatives for your brand.",
    features: [
      "Customizable appearance",
      "Natural language processing",
      "Emotion recognition",
      "Multi-language support",
      "24/7 availability"
    ]
  },
  {
    icon: Brain,
    title: "Custom AI Assistants",
    description: "Tailored AI solutions that automate tasks and enhance productivity.",
    features: [
      "Task automation",
      "Workflow optimization",
      "Knowledge base integration",
      "API integration",
      "Performance analytics"
    ]
  },
  {
    icon: Mic,
    title: "Voice Solutions",
    description: "Advanced voice recognition and synthesis for modern interactions.",
    features: [
      "Speech recognition",
      "Text-to-speech",
      "Voice biometrics",
      "Accent adaptation",
      "Noise cancellation"
    ]
  },
  {
    icon: Code,
    title: "LLM Fine-tuning",
    description: "Customize language models to match your specific business needs.",
    features: [
      "Domain adaptation",
      "Custom training data",
      "Performance optimization",
      "Model evaluation",
      "Continuous improvement"
    ]
  },
  {
    icon: Lightbulb,
    title: "Prompt Engineering",
    description: "Optimize AI interactions for better results and efficiency.",
    features: [
      "Prompt optimization",
      "Context management",
      "Response formatting",
      "Error handling",
      "Performance tracking"
    ]
  },
  {
    icon: Boxes,
    title: "AI Integration",
    description: "Seamless implementation of AI solutions into your existing systems.",
    features: [
      "System analysis",
      "API development",
      "Data pipeline setup",
      "Testing and validation",
      "Monitoring tools"
    ]
  }
]

export function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h1 className="font-display text-5xl font-bold text-primary mb-6">
              Our <span className="text-accent-green">Services</span>
            </h1>
            <p className="text-lg text-primary/80">
              Comprehensive AI solutions tailored to transform your business operations and drive innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-accent-green/10 rounded-2xl p-4 group-hover:bg-accent-green/20 transition-colors">
                    <service.icon className="h-8 w-8 text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-primary/80 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-primary/70">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-accent-blue hover:text-accent-blue/80 font-medium mt-6"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-green px-8 py-4 font-medium text-primary transition-all hover:bg-accent-green/90 hover:shadow-lg"
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
        </div>
      </section>

      <Footer />
    </div>
  )
}