"use client"

import Head from "next/head"
import { useRouter } from "next/router"

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogType?: string
  ogImage?: string
  twitterHandle?: string
}

export function SEO({
  title = "ICanQuit - Break Free from Bad Habits",
  description = "The open-source, neuroscience-backed habit tracker designed to help you overcome unwanted habits with privacy-first tracking.",
  canonicalUrl,
  ogType = "website",
  ogImage = "/og-image.png",
  twitterHandle = "@icanquitapp",
}: SEOProps) {
  const router = useRouter()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://icanquit.app"
  const canonicalUrlFull = canonicalUrl ? `${siteUrl}${canonicalUrl}` : `${siteUrl}${router.asPath}`
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrlFull} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrlFull} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content="ICanQuit" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrlFull} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageUrl} />
      {twitterHandle && <meta property="twitter:creator" content={twitterHandle} />}

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#4f46e5" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </Head>
  )
}
