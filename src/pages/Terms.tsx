import { motion } from "framer-motion"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function Terms() {
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
            <h1 className="font-display text-4xl font-bold text-primary mb-8">Terms and Conditions</h1>
            
            <p className="text-primary/80">Last updated: March 29, 2024</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using AIAutoEye's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2>2. Services Description</h2>
            <p>
              AIAutoEye provides artificial intelligence solutions including but not limited to:
            </p>
            <ul>
              <li>AI Consulting Services</li>
              <li>Digital Avatar Development</li>
              <li>Custom AI Assistant Creation</li>
              <li>Voice Solutions</li>
              <li>LLM Fine-tuning</li>
              <li>AI Integration Services</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of AIAutoEye and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information when using our services</li>
              <li>Maintain the confidentiality of any login credentials</li>
              <li>Use our services in compliance with applicable laws and regulations</li>
              <li>Not engage in any activity that could harm our systems or security</li>
            </ul>

            <h2>5. Service Delivery</h2>
            <p>
              We strive to provide our services with the highest standards of professional care. However, we do not guarantee that:
            </p>
            <ul>
              <li>Services will meet all of your specific requirements</li>
              <li>Services will be uninterrupted, timely, or error-free</li>
              <li>Results obtained from using our services will be absolutely accurate or reliable</li>
            </ul>

            <h2>6. Payment Terms</h2>
            <p>
              Payment terms are established in individual service agreements. Unless otherwise specified:
            </p>
            <ul>
              <li>Payments are due according to the agreed payment schedule</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>Prices are subject to change with notice</li>
            </ul>

            <h2>7. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client information and project details. We will not disclose confidential information unless required by law or with your explicit consent.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              AIAutoEye shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>

            <h2>9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms and Conditions.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date of these terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              For any questions about these Terms and Conditions, please contact us at:
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