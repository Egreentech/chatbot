import { writeFileSync } from 'fs'
import { resolve } from 'path'

const domain = 'https://aiautoeye.com'

const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/services/consulting',
  '/services/digital-avatars',
  '/services/ai-assistants',
  '/services/voice-solutions',
  '/services/llm-tuning',
  '/services/prompt-engineering',
  '/services/ai-integration',
  '/blog',
  '/privacy-policy',
  '/terms'
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${domain}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`

writeFileSync(resolve('public', 'sitemap.xml'), sitemap)
console.log('Sitemap generated successfully!')