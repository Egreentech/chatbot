import { motion } from "framer-motion"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Brain, Database, Code, LineChart, Shield, Zap, Sparkles, Target, Settings, Users } from "lucide-react"
import { RotatingDodecahedron } from "../../components/RotatingDodecahedron"

const features = [
  {
    icon: Brain,
    title: "Domain Adaptation",
    description: "Customize language models to understand your industry-specific terminology, context, and requirements with high accuracy."
  },
  {
    icon: Database,
    title: "Data Preparation",
    description: "Expert data curation, cleaning, and augmentation to ensure high-quality training datasets for optimal model performance."
  },
  {
    icon: Code,
    title: "Model Architecture",
    description: "Selection and optimization of model architectures based on your specific use case and performance requirements."
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Robust data protection measures and secure training environments to safeguard your sensitive information."
  },
  {
    icon: Settings,
    title: "Parameter Optimization",
    description: "Fine-tune model parameters and hyperparameters for optimal performance and efficiency."
  },
  {
    icon: LineChart,
    title: "Performance Monitoring",
    description: "Comprehensive monitoring and analytics to track model performance and identify areas for improvement."
  }
]

const applications = [
  {
    icon: Users,
    title: "Customer Service",
    description: "Train models to handle customer inquiries with domain knowledge and brand voice.",
    capabilities: [
      "Intent recognition",
      "Response generation",
      "Multi-language support",
      "Sentiment analysis"
    ]
  },
  {
    icon: Database,
    title: "Document Processing",
    description: "Enhance models for efficient document analysis and information extraction.",
    capabilities: [
      "Content classification",
      "Data extraction",
      "Summary generation",
      "Format conversion"
    ]
  },
  {
    icon: Brain,
    title: "Knowledge Management",
    description: "Create models that understand and process your organization's knowledge base.",
    capabilities: [
      "Content organization",
      "Query understanding",
      "Contextual search",
      "Knowledge synthesis"
    ]
  },
  {
    icon: Target,
    title: "Specialized Tasks",
    description: "Develop models for industry-specific applications and unique business needs.",
    capabilities: [
      "Code generation",
      "Legal document analysis",
      "Medical text processing",
      "Financial analysis"
    ]
  }
]

const process = [
  {
    title: "Assessment",
    description: "Evaluate your current needs, data quality, and desired outcomes",
    steps: [
      "Requirements analysis",
      "Data evaluation",
      "Feasibility study",
      "Resource planning"
    ]
  },
  {
    title: "Preparation",
    description: "Prepare and process data for model training",
    steps: [
      "Data cleaning",
      "Format standardization",
      "Quality validation",
      "Dataset creation"
    ]
  },
  {
    title: "Fine-tuning",
    description: "Train and optimize the model for your specific use case",
    steps: [
      "Model selection",
      "Parameter tuning",
      "Performance testing",
      "Iterative improvement"
    ]
  },
  {
    title: "Deployment",
    description: "Integrate the fine-tuned model into your systems",
    steps: [
      "Integration setup",
      "Performance validation",
      "Monitoring configuration",
      "Documentation"
    ]
  }
]

export function LLMFineTuning() {
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
                LLM <span className="text-accent-green">Fine-tuning</span>
              </h1>
              <p className="text-lg text-primary/80 mb-8">
                Transform large language models into specialized AI solutions tailored to your business needs. Our expert fine-tuning services help you create custom models that understand your industry, speak your language, and deliver precise results.
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
                  href="#process"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 font-medium text-primary transition-all hover:border-accent-blue hover:text-accent-blue"
                >
                  Learn More
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
              Our comprehensive fine-tuning services ensure your models deliver optimal performance for your specific use case.
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
              Applications & <span className="text-accent-green">Use Cases</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Explore how fine-tuned language models can transform various aspects of your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <app.icon className="h-12 w-12 text-accent-green mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">{app.title}</h3>
                <p className="text-primary/80 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.capabilities.map((capability) => (
                    <li key={capability} className="flex items-center gap-2 text-primary/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            id="process"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
              Our Fine-tuning <span className="text-accent-green">Process</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent-green">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-primary/80 text-sm mb-4">{step.description}</p>
                  <ul className="text-sm text-primary/70 space-y-1">
                    {step.steps.map((s) => (
                      <li key={s} className="flex items-center gap-1 justify-center">
                        <div className="h-1 w-1 rounded-full bg-accent-green" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
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