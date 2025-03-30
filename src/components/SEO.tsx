import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export function SEO({
  title = "AIAutoEye - AI Solutions for Business",
  description = "Transform your business with cutting-edge AI solutions. From digital avatars to voice solutions, we help businesses harness the power of artificial intelligence.",
  image = "https://aiautoeye.com/og-image.jpg",
  url = "https://aiautoeye.com",
  type = "website"
}: SEOProps) {
  const siteTitle = title.includes("AIAutoEye") ? title : `${title} | AIAutoEye`

  return (
    <Helmet>
      {/* Basic */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="AIAutoEye" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#B2E71B" />
    </Helmet>
  )
}