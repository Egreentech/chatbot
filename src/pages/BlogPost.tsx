import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Calendar, Clock, Share2, Facebook, Linkedin } from "lucide-react"
import { supabase } from "../lib/supabase"
import type { BlogPost } from "../lib/supabase"

export function BlogPost() {
  const { blogTitle } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', blogTitle)
        .single()

      if (error || !data) {
        console.error('Error fetching blog post:', error)
        setLoading(false)
        return
      }

      setPost(data)
      setLoading(false)
    }

    fetchPost()
  }, [blogTitle])

  const handleShare = (platform: 'facebook' | 'linkedin') => {
    if (!post) return

    const currentUrl = window.location.href
    const title = encodeURIComponent(post.title)
    
    let shareUrl = ''
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${title}`
        break
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32">
          <div className="text-center text-primary/60">
            Loading post...
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-primary mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-primary/80 mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-accent-green px-6 py-3 font-medium text-primary transition-all hover:bg-accent-green/90"
            >
              View All Posts
            </a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <div className="flex items-center justify-between gap-4 text-sm text-primary/60 mb-4">
                <div className="flex items-center gap-4">
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
                  <span className="bg-accent-green/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 rounded-full hover:bg-accent-green/10 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-5 w-5 text-primary/60 hover:text-accent-blue" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-2 rounded-full hover:bg-accent-green/10 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-primary/60 hover:text-accent-blue" />
                  </button>
                </div>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                {post.title}
              </h1>
            </div>

            <div className="relative aspect-video mb-12">
              <img
                src={post.image_url}
                alt={post.title}
                className="rounded-2xl object-cover w-full h-full shadow-xl"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-primary/80 whitespace-pre-line">
                {post.content}
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-primary/10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary/60">Share this article:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 hover:border-accent-blue hover:text-accent-blue transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 hover:border-accent-blue hover:text-accent-blue transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}