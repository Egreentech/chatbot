import { useState } from "react"
import { motion } from "framer-motion"
import { Label } from "./ui/label"
import { Mail, Phone, Send } from "lucide-react"

const services = [
  "AI Consulting",
  "Digital Avatars",
  "AI Assistants",
  "Voice Solutions",
  "LLM Fine-tuning",
  "Prompt Engineering",
  "AI Integration"
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const formValues = Object.fromEntries(formData.entries())

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formValues),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Failed to submit form. Please try again or contact us directly at aiautoeye@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-8 shadow-lg text-center"
      >
        <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="h-8 w-8 text-accent-green" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4">Message Sent!</h3>
        <p className="text-primary/80 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="inline-flex items-center gap-2 rounded-full bg-accent-green px-6 py-3 font-medium text-primary transition-all hover:bg-accent-green/90"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-primary">Name</Label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-accent-green/50"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-primary">Company</Label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-accent-green/50"
            placeholder="Company Name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-primary">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-accent-green/50"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-primary">Phone</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-accent-green/50"
              placeholder="+91 99877 02749"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service" className="text-primary">Service of Interest</Label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-accent-green/50"
        >
          <option value="">Select a service</option>
          {services.map(service => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-primary">Message</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-accent-green/50"
          placeholder="Tell us about your project..."
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-accent-green px-6 py-3 font-medium text-primary transition-all hover:bg-accent-green/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}