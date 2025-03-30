import { motion } from "framer-motion"
import { MessageSquare, Users, Brain, Mic, Code, Lightbulb, Boxes } from "lucide-react"

const services = [
  {
    icon: MessageSquare,
    title: "AI Consulting",
    href: "/services/consulting",
    description: "Strategic guidance for implementing AI solutions in your business workflow."
  },
  {
    icon: Users,
    title: "Digital Avatars",
    href: "/services/digital-avatars",
    description: "Create lifelike AI-powered digital representatives for your brand."
  },
  {
    icon: Brain,
    title: "AI Assistants",
    href: "/services/ai-assistants",
    description: "Tailored AI solutions that automate tasks and enhance productivity."
  },
  {
    icon: Mic,
    title: "Voice Solutions",
    href: "/services/voice-solutions",
    description: "Advanced voice recognition and synthesis for modern interactions."
  },
  {
    icon: Code,
    title: "LLM Fine-tuning",
    href: "/services/llm-tuning",
    description: "Customize language models to match your specific business needs."
  },
  {
    icon: Lightbulb,
    title: "Prompt Engineering",
    href: "/services/prompt-engineering",
    description: "Optimize AI interactions for better results and efficiency."
  },
  {
    icon: Boxes,
    title: "AI Integration",
    href: "/services/ai-integration",
    description: "Seamless implementation of AI solutions into your existing systems."
  }
]

export function Services() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-primary mb-4">
            Our <span className="text-accent-green">Services</span>
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to transform your business operations and drive innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:bg-accent-green/5"
            >
              <service.icon className="h-12 w-12 text-accent-green mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-primary/80 mb-4">{service.description}</p>
              <a
                href={service.href}
                className="inline-flex items-center text-accent-blue hover:text-accent-blue/80 font-medium"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}