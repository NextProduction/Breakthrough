import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Brain } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-10 md:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-800">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-indigo-500"></span>
            Open Source & Privacy-First
          </div>

          <h1 className="mb-6 text-5xl font-extrabold text-black leading-tight tracking-tight  md:text-6xl">
            Break <span className="!bg-gradient-to-r !from-indigo-600 !to-purple-600 !bg-clip-text text-transparent font-bold">Free</span> from Bad Habits
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-slate-600 md:text-2xl">
            The neuroscience-backed habit tracker that helps you overcome unwanted habits with personalized insights,
            rewards, and a supportive community.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/dashboard">
              <Button size="lg" className="h-14 px-8 text-lg">
                <Zap className="mr-2 h-5 w-5" />
                Follow Your Journey
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
                <Brain className="mr-2 h-5 w-5" />
                Go to Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
