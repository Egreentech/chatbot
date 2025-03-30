import { motion } from "framer-motion"
import { Brain, Users, Lightbulb, Rocket } from "lucide-react"

const stats = [
  {
    icon: Brain,
    value: "100+",
    label: "AI Models Deployed"
  },
  {
    icon: Users,
    value: "50+",
    label: "Enterprise Clients"
  },
  {
    icon: Lightbulb,
    value: "95%",
    label: "Client Satisfaction"
  },
  {
    icon: Rocket,
    value: "24/7",
    label: "Support Available"
  }
]

export function AboutHero() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            Pioneering the Future of <span className="text-accent-green">AI Solutions</span>
          </h1>
          <p className="text-lg text-primary/80 mb-8">
            At AIAutoEye, we're dedicated to transforming businesses through innovative AI solutions. Our team of experts combines deep technical knowledge with industry expertise to deliver cutting-edge AI implementations that drive real business value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-green/10 mb-4">
                <stat.icon className="h-6 w-6 text-accent-green" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-primary/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto prose prose-lg"
        >
          <h2 className="font-display text-3xl font-bold text-primary mb-6">Our Story</h2>
          <p className="text-primary/80">
            Founded by a team of AI enthusiasts and industry veterans, AIAutoEye emerged from a simple yet powerful vision: to make advanced AI technology accessible and practical for businesses of all sizes. Based in Mumbai, we've grown from a small startup to a trusted partner for enterprises across India and beyond.
          </p>
          <p className="text-primary/80">
            Our headquarters at Synthofine Industrial Estate in Goregaon East serves as a hub of innovation, where our team of experts works tirelessly to develop and implement AI solutions that address real-world business challenges. We pride ourselves on our ability to understand unique business needs and translate them into effective AI implementations.
          </p>
          <p className="text-primary/80">
            What sets us apart is our commitment to not just delivering technology, but ensuring it creates tangible value for our clients. We believe in building long-term partnerships, supporting our clients throughout their AI journey, from initial consultation to implementation and ongoing optimization.
          </p>
        </motion.div>
      </div>
    </section>
  )
}