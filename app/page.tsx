import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { StatsSection } from "@/components/stats-section"
import { Testimonial } from "@/components/testimonial"
import { CTASection } from "@/components/cta-section"
// import { SEO } from "@/components/seo"
import { StructuredData } from "@/components/structured-data"
import { GitHubBadges } from "@/components/github-badges"
import {
  Shield,
  Calendar,
  Trophy,
  Brain,
  Heart,
  Users,
  Zap,
  BarChart,
  Lock,
  Award,
  Clock,
  Sparkles,
} from "lucide-react"

export default function LandingPage() {
  // Stats data
  const stats = [
    { value: "100%", label: "Privacy", description: "Local storage only" },
    { value: "0", label: "Servers", description: "No data collection" },
    { value: "∞", label: "Habits", description: "Track unlimited habits" },
    { value: "MIT", label: "License", description: "Free & open source" },
  ]

  // Testimonials data
  const testimonials = [
    {
      quote:
        "ICanQuit helped me understand what was happening in my brain during recovery. The neuroscience insights kept me motivated when things got tough.",
      author: "Sarah M.",
      role: "30 days smoke-free",
      rating: 5,
    },
    {
      quote:
        "The custom rewards system was a game-changer. Having something to look forward to at each milestone made all the difference.",
      author: "Mike R.",
      role: "60 days social media detox",
      rating: 5,
    },
    {
      quote:
        "Being able to track multiple habits and see my overall progress gave me confidence that I could change my life.",
      author: "Alex T.",
      role: "90 days alcohol-free",
      rating: 5,
    },
  ]

  // Structured data for SEO
  const appStructuredData = {
    name: "ICanQuit",
    description: "Open source, neuroscience-backed habit tracker to help you break free from harmful habits",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    screenshot: "https://NextProduction.dev/i-can-quit/screenshot.png",
    featureList:
      "Privacy-First Design, Visual Progress Tracking, Achievement System, Neuroscience Education, Promise System, Open Source Community",
  }

  return (
    <>
      {/* <SEO
        title="ICanQuit - Break Free from Bad Habits | Open Source Habit Tracker"
        description="The neuroscience-backed habit tracker that helps you overcome unwanted habits with personalized insights, rewards, and a supportive community."
      /> */}
      <StructuredData type="WebApplication" data={appStructuredData} />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* GitHub Badges */}
          <section className="bg-white py-6">
            <div className="container mx-auto px-4">
              <GitHubBadges />
            </div>
          </section>

          {/* Stats Section */}
          <StatsSection stats={stats} />

          {/* Features Section */}
          <section className="bg-gradient-to-b from-white to-slate-50 py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-slate-900">Neuroscience-Powered Features</h2>
                <p className="mx-auto max-w-3xl text-xl text-slate-600">
                  Every feature is designed based on the latest neuroscience research on habit formation and addiction
                  recovery.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  icon={Shield}
                  title="Privacy-First Design"
                  description="All your data is stored locally in your browser. No servers, no tracking, complete privacy and control."
                  iconColor="text-indigo-600"
                  iconBgColor="bg-indigo-100"
                />

                <FeatureCard
                  icon={Calendar}
                  title="Visual Progress Tracking"
                  description="Beautiful calendars and charts show your progress. Visual feedback strengthens neural pathways for success."
                  iconColor="text-green-600"
                  iconBgColor="bg-green-100"
                />

                <FeatureCard
                  icon={Trophy}
                  title="Achievement System"
                  description="Unlock achievements and share your victories. Dopamine rewards reinforce positive behavior patterns."
                  iconColor="text-yellow-600"
                  iconBgColor="bg-yellow-100"
                />

                <FeatureCard
                  icon={Brain}
                  title="Neuroscience Education"
                  description="Learn what happens in your brain during recovery. Knowledge empowers your journey to freedom."
                  iconColor="text-purple-600"
                  iconBgColor="bg-purple-100"
                />

                <FeatureCard
                  icon={Heart}
                  title="Promise System"
                  description="Write personal promises that remind you of your 'why' during difficult moments."
                  iconColor="text-red-600"
                  iconBgColor="bg-red-100"
                />

                <FeatureCard
                  icon={Users}
                  title="Open Source Community"
                  description="Built by the community, for the community. Transparent development and continuous improvement."
                  iconColor="text-blue-600"
                  iconBgColor="bg-blue-100"
                />
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="bg-white py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-slate-900">How It Works</h2>
                <p className="mx-auto max-w-3xl text-xl text-slate-600">
                  Based on neuroscience research, our approach leverages your brain's natural ability to form new
                  patterns.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-slate-900">Set Your Intention</h3>
                  <p className="leading-relaxed text-slate-600">
                    Choose your habit and write a personal promise. This activates your prefrontal cortex and
                    strengthens commitment pathways.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-blue-600">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-slate-900">Track Daily Progress</h3>
                  <p className="leading-relaxed text-slate-600">
                    Mark each day as success or break. Consistent tracking creates new neural pathways and reinforces
                    positive behavior.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-red-600">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-slate-900">Celebrate Victories</h3>
                  <p className="leading-relaxed text-slate-600">
                    Unlock achievements and share your progress. Positive reinforcement releases dopamine and
                    strengthens new habits.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-slate-50 py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-slate-900">Success Stories</h2>
                <p className="mx-auto max-w-3xl text-xl text-slate-600">
                  Real people, real results. See how ICanQuit has helped others break free from unwanted habits.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <Testimonial key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </section>

          {/* More Features Section */}
          <section className="bg-white py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-slate-900">More Powerful Features</h2>
                <p className="mx-auto max-w-3xl text-xl text-slate-600">
                  Designed to support your journey every step of the way.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <FeatureCard
                  icon={Zap}
                  title="12+ Habit Templates"
                  description="Pre-configured templates for common habits like smoking, social media, alcohol, and more."
                  iconColor="text-orange-600"
                  iconBgColor="bg-orange-100"
                />

                <FeatureCard
                  icon={BarChart}
                  title="Advanced Analytics"
                  description="Track your progress with detailed statistics, success rates, and streak information."
                  iconColor="text-blue-600"
                  iconBgColor="bg-blue-100"
                />

                <FeatureCard
                  icon={Lock}
                  title="Data Export/Import"
                  description="Backup and restore your data with our comprehensive export/import system."
                  iconColor="text-green-600"
                  iconBgColor="bg-green-100"
                />

                <FeatureCard
                  icon={Award}
                  title="Custom Rewards"
                  description="Define personal treats for reaching milestones to keep yourself motivated."
                  iconColor="text-purple-600"
                  iconBgColor="bg-purple-100"
                />

                <FeatureCard
                  icon={Clock}
                  title="Comprehensive Calendar"
                  description="View your progress across all habits with our detailed calendar view."
                  iconColor="text-indigo-600"
                  iconBgColor="bg-indigo-100"
                />

                <FeatureCard
                  icon={Sparkles}
                  title="Celebration System"
                  description="Enjoy confetti animations and celebrations when you reach milestones."
                  iconColor="text-yellow-600"
                  iconBgColor="bg-yellow-100"
                />

                <FeatureCard
                  icon={Shield}
                  title="UUID-Based System"
                  description="Robust habit identification and data integrity with UUID-based IDs."
                  iconColor="text-red-600"
                  iconBgColor="bg-red-100"
                />

                <FeatureCard
                  icon={Users}
                  title="User Profiles"
                  description="Personalize your experience with custom names, avatars, and bios."
                  iconColor="text-teal-600"
                  iconBgColor="bg-teal-100"
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <CTASection
            title="Ready to Transform Your Life?"
            description="Join thousands who have successfully quit their bad habits with ICanQuit. Your journey to freedom starts with a single click."
            primaryButtonText="Start Your Journey Now"
            primaryButtonLink="/dashboard"
            secondaryButtonText="Explore Features"
            secondaryButtonLink="/features"
          />
        </main>

        <Footer />
      </div>
    </>
  )
}
