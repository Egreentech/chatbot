import { motion } from "framer-motion"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto prose prose-lg"
          >
            <h1 className="font-display text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
            
            <p className="text-primary/80">Last updated: March 29, 2024</p>

            <h2>1. Introduction</h2>
            <p>
              AIAutoEye ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Information about your business and AI needs</li>
              <li>Communications and feedback you provide</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you technical notices and updates</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Professional advisers</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us at:
            </p>
            <ul>
              <li>Email: aiautoeye@gmail.com</li>
              <li>Address: 116 C Wing Synthofine Industrial Estate, Goregaon East, Mumbai-400063</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}