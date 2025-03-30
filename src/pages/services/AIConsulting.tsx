import { motion } from "framer-motion"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Brain, BarChart as ChartBar, FileSearch, Shield, Target, Users, Lightbulb, Zap } from "lucide-react"
import { RotatingTetrahedron } from "../../components/RotatingTetrahedron"

const features = [
  {
    icon: Brain,
    title: "AI Readiness Assessment",
    description: "Comprehensive evaluation of your organization's technical infrastructure, data quality, and team capabilities for AI adoption."
  },
  {
    icon: ChartBar,
    title: "ROI Analysis",
    description: "Detailed cost-benefit analysis, performance metrics definition, and expected returns from AI implementation across different business functions."
  },
  {
    icon: FileSearch,
    title: "Technology Stack Review",
    description: "In-depth analysis of your current technology stack and recommendations for AI-compatible tools, frameworks, and platforms."
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Thorough evaluation of potential risks including data privacy, security vulnerabilities, and regulatory compliance requirements."
  },
  {
    icon: Target,
    title: "Implementation Strategy",
    description: "Customized roadmap for AI integration, including timeline, resource allocation, and milestone planning."
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Comprehensive training programs to upskill your team in AI technologies, best practices, and maintenance procedures."
  }
]

const processSteps = [
  {
    title: "Discovery",
    description: "Initial consultation to understand your business goals, challenges, and current technological landscape.",
    icon: Lightbulb
  },
  {
    title: "Assessment",
    description: "Thorough analysis of your organization's AI readiness, including infrastructure, data, and team capabilities.",
    icon: FileSearch
  },
  {
    title: "Strategy Development",
    description: "Creation of a tailored AI implementation plan aligned with your business objectives and budget.",
    icon: Target
  },
  {
    title: "Implementation Support",
    description: "Expert guidance throughout the AI integration process, ensuring smooth deployment and adoption.",
    icon: Zap
  }
]

const industries = [
  {
    title: "Healthcare",
    applications: [
      "Patient care optimization",
      "Medical image analysis",
      "Healthcare workflow automation",
      "Predictive diagnostics"
    ]
  },
  {
    title: "Finance",
    applications: [
      "Risk assessment",
      "Fraud detection",
      "Algorithmic trading",
      "Customer service automation"
    ]
  },
  {
    title: "Manufacturing",
    applications: [
      "Predictive maintenance",
      "Quality control",
      "Supply chain optimization",
      "Production planning"
    ]
  },
  {
    title: "Retail",
    applications: [
      "Inventory management",
      "Customer behavior analysis",
      "Personalized recommendations",
      "Demand forecasting"
    ]
  }
]

export function AIConsulting() {
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
                AI <span className="text-accent-green">Consulting</span>
              </h1>
              <p className="text-lg text-primary/80 mb-8">
                Transform your business with expert AI consulting services. Our team of experienced consultants helps you navigate the complexities of AI adoption, ensuring successful implementation and measurable results. From strategy development to deployment support, we're your trusted partner in AI transformation.
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
                  href="#industries"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 font-medium text-primary transition-all hover:border-accent-blue hover:text-accent-blue"
                >
                  View Industries
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square bg-accent-green/5 rounded-3xl overflow-hidden"
            >
              <RotatingTetrahedron />
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
              Comprehensive consulting services tailored to your organization's unique needs and objectives.
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
              Our Consulting <span className="text-accent-green">Process</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-accent-green" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-primary/80 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="industries"
            className="mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-primary mb-8 text-center">
              Industry <span className="text-accent-green">Solutions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-primary mb-4">{industry.title}</h3>
                  <ul className="space-y-2">
                    {industry.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2 text-primary/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                        {app}
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