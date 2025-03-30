import { motion } from "framer-motion"
import { Header } from "../components/Header"
import { ContactForm } from "../components/ContactForm"
import { Footer } from "../components/Footer"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
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
              Get in <span className="text-accent-green">Touch</span>
            </h1>
            <p className="text-lg text-primary/80">
              Ready to transform your business with AI? We're here to help. Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-green/10 mb-4">
                  <MapPin className="h-6 w-6 text-accent-green" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Visit Us</h3>
                <p className="text-primary/80">
                  Egreen Tech<br />
                  116 C Wing Synthofine Industrial Estate<br />
                  Goregaon East, Mumbai-400063
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-green/10 mb-4">
                  <Mail className="h-6 w-6 text-accent-green" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Email Us</h3>
                <a
                  href="mailto:aiautoeye@gmail.com"
                  className="text-primary/80 hover:text-accent-green transition-colors"
                >
                  aiautoeye@gmail.com
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-green/10 mb-4">
                  <Phone className="h-6 w-6 text-accent-green" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Call Us</h3>
                <a
                  href="tel:+919987702749"
                  className="text-primary/80 hover:text-accent-green transition-colors"
                >
                  +91 99877 02749
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}