import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of AI in Business: Trends and Predictions",
    excerpt: "Explore the latest trends in artificial intelligence and how they're shaping the future of business operations.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "AI Trends"
  },
  {
    title: "Implementing AI Assistants: A Complete Guide",
    excerpt: "Learn how to successfully integrate AI assistants into your business workflow for maximum efficiency.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "Implementation"
  },
  {
    title: "Voice AI: The Next Frontier in Customer Service",
    excerpt: "Discover how voice AI technology is revolutionizing customer service and user experience.",
    image: "https://images.unsplash.com/photo-1631994337586-f81953dd7dfa?q=80&w=800&auto=format&fit=crop",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Voice AI"
  }
]

export function BlogPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-primary mb-4">
            Latest from Our <span className="text-accent-green">Blog</span>
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in AI technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-green/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-primary/60 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-primary/80 mb-4 line-clamp-2">{post.excerpt}</p>
                <a
                  href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="inline-flex items-center text-accent-blue hover:text-accent-blue/80 font-medium"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 font-medium text-primary transition-all hover:border-accent-blue hover:text-accent-blue"
          >
            View all articles
          </a>
        </motion.div>
      </div>
    </section>
  )
}