import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Breakthrough - Open Source Habit Tracker",
  description:
    "Break free from bad habits with our open-source, privacy-first, science-backed habit tracker. Track progress, unlock achievements, and build a healthier lifestyle.",
  keywords: [
    "habit tracker",
    "quit smoking",
    "addiction recovery",
    "health",
    "wellness",
    "self-improvement",
    "open source",
  ],
  authors: [{ name: "Breakthrough Community" }],
  creator: "Breakthrough",
  publisher: "Next Production",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://breakthrough.nextproduction.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Breakthrough - Open Source Habit Tracker",
    description: "Break free from bad habits with our open-source, privacy-first, science-backed habit tracker.",
    url: "https://breakthrough.nextproduction.dev",
    siteName: "Breakthrough",
    images: [
      {
        url: "/breakthrough.svg",
        width: 1200,
        height: 630,
        alt: "Breakthrough Habit Tracker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breakthrough - Open Source Habit Tracker",
    description: "Break free from bad habits with our open-source, privacy-first, science-backed habit tracker.",
    images: ["/breakthrough.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Breakthrough.svg" type="image/svg+xml" />
        <link rel="icon" href="/Breakthrough.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Breakthrough" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <script defer src="https://platform.analytick.ir/script.js" data-website-id="62a50875-e436-4c47-81cf-48dc56a191ec"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
