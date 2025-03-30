import { motion } from "framer-motion"
import { Brain, Cpu, Lock, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Expert AI Knowledge",
    description: "Our team brings deep expertise in artificial intelligence and machine learning, ensuring cutting-edge solutions for your business."
  },
  {
    icon: Cpu,
    title: "Custom Solutions",
    description: "We develop tailored AI solutions that perfectly match your business needs and integrate seamlessly with your existing systems."
  },
  {
    icon: Lock,
    title: "Security First",
    description: "Your data security is our priority. We implement robust security measures and follow industry best practices."
  },
  {
    icon: Zap,
    title: "Fast Implementation",
    description: "Quick deployment and integration of AI solutions, helping you stay ahead of the competition."
  }
]

export function WhyUs() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-primary mb-4">
            Why Choose <span className="text-accent-green">AIAutoEye</span>
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            We combine expertise, innovation, and reliability to deliver AI solutions that drive real business value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-accent-green mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-primary/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}