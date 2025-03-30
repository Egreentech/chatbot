import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop",
    content: "AIAutoEye transformed our customer service with their AI assistant solution. The implementation was smooth, and the results exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, InnovateAI",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop",
    content: "Their expertise in LLM fine-tuning helped us create a highly specialized AI model that perfectly matches our industry requirements.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, DataFlow",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&h=250&auto=format&fit=crop",
    content: "The digital avatar solution provided by AIAutoEye has revolutionized how we interact with our customers. Highly recommended!",
    rating: 5
  }
]

export function Testimonials() {
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
            Client <span className="text-accent-green">Success Stories</span>
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            See how our AI solutions have helped businesses achieve their goals and drive innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent-green text-accent-green" />
                ))}
              </div>
              <p className="text-primary/80 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-primary/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}