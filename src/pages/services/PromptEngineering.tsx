import { motion } from "framer-motion"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { MessageSquare, Sparkles, Target, LineChart, Settings, Zap } from "lucide-react"
import { GoldenSpiral } from "../../components/GoldenSpiral"

const features = [
  {
    icon: MessageSquare,
    title: "Prompt Optimization",
    description: "Fine-tune prompts for improved accuracy and relevance in AI responses."
  },
  {
    icon: Sparkles,
    title: "Context Enhancement",
    description: "Optimize context handling for more coherent and meaningful interactions."
  },
  {
    icon: Target,
    title: "Response Formatting",
    description: "Structure AI outputs for consistency and better user experience."
  },
  {
    icon: LineChart,
    title: "Performance Analysis",
    description: "Track and analyze prompt effectiveness and response quality."
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Seamlessly integrate optimized prompts into your AI systems."
  },
  {
    icon: Zap,
    title: "Efficiency Boost",
    description: "Reduce token usage and improve response speed through optimization."
  }
]

const benefits = [
  {
    title: "Better Accuracy",
    description: "Achieve more precise and relevant AI responses through carefully crafted prompts."
  },
  {
    title: "Cost Reduction",
    description: "Optimize token usage and reduce processing costs with efficient prompts."
  },
  {
    title: "Consistent Output",
    description: "Maintain consistency in AI responses across different use cases."
  },
  {
    title: "Enhanced UX",
    description: "Improve user experience with more natural and helpful AI interactions."
  }
]

export function PromptEngineering() {
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
                Prompt <span className="text-accent-green">Engineering</span>
              </h1>
              <p className="text-lg text-primary/80 mb-8">
                Optimize your AI interactions with expert prompt engineering. We help you craft precise, efficient prompts that deliver better results and reduce costs.
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
              <GoldenSpiral />
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
              Our <span className="text-accent-green">Services</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Comprehensive prompt engineering solutions to enhance your AI systems.
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
            className="bg-white rounded-2xl p-8 shadow-lg mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-primary mb-6 text-center">
              Our <span className="text-accent-green">Process</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-green">1</span>
                </div>
                <h3 className="font-bold text-primary mb-2">Analysis</h3>
                <p className="text-primary/80 text-sm">Evaluate current prompt performance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-green">2</span>
                </div>
                <h3 className="font-bold text-primary mb-2">Design</h3>
                <p className="text-primary/80 text-sm">Craft optimized prompts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-green">3</span>
                </div>
                <h3 className="font-bold text-primary mb-2">Testing</h3>
                <p className="text-primary/80 text-sm">Validate and refine results</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-green">4</span>
                </div>
                <h3 className="font-bold text-primary mb-2">Implementation</h3>
                <p className="text-primary/80 text-sm">Deploy and monitor performance</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Key <span className="text-accent-green">Benefits</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Discover how expert prompt engineering can improve your AI systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                <p className="text-primary/80">{benefit.description}</p>
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
              Schedule a Consultation
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