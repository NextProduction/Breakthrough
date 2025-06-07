import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Brain, Github } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#4f46e5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-800">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-indigo-500"></span>
            Open Source & Privacy-First
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-5xl font-extrabold leading-tight tracking-tight text-transparent md:text-7xl">
            Break Free from Bad Habits
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-slate-600 md:text-2xl">
            The neuroscience-backed habit tracker that helps you overcome unwanted habits with personalized insights,
            rewards, and a supportive community.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/dashboard">
              <Button size="lg" className="h-14 px-8 text-lg">
                <Zap className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
                <Brain className="mr-2 h-5 w-5" />
                Explore Features
              </Button>
            </Link>
            <a href="https://github.com/icanquit/icanquit" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg" className="h-14 px-8 text-lg">
                <Github className="mr-2 h-5 w-5" />
                View Source
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
