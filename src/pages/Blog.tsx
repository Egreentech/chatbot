import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Calendar, Clock } from "lucide-react"
import { supabase } from "../lib/supabase"
import type { BlogPost } from "../lib/supabase"
import { SEO } from "../components/SEO"

export function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false })
        .not('published_at', 'is', null)

      if (error) {
        console.error('Error fetching blog posts:', error)
        return
      }

      setBlogPosts(data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog - Latest AI Insights and Updates"
        description="Stay updated with the latest trends, insights, and best practices in AI technology. Read our expert articles on AI implementation, industry news, and success stories."
        type="blog"
      />
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
              Latest <span className="text-accent-green">Insights</span>
            </h1>
            <p className="text-lg text-primary/80">
              Stay updated with the latest trends, best practices, and insights in AI technology and implementation.
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center text-primary/60">Loading posts...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading={index > 5 ? 'lazy' : undefined}
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
                        {new Date(post.published_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.read_time}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-accent-blue transition-colors">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h2>
                    <p className="text-primary/80 mb-4 line-clamp-2">{post.excerpt}</p>
                    <a
                      href={`/blog/${post.slug}`}
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
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}