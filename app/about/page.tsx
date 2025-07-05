import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BrainCircuit, Github, Heart, Users, Brain, Zap, Globe, Code, Star } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2">
              <BrainCircuit className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Breakthrough</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BrainCircuit className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Breakthrough</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The first open-source, neuroscience-backed habit tracker designed to help millions break free from harmful
            habits and build healthier lives.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                To democratize access to effective habit change tools by creating an open-source, privacy-first,
                scientifically-backed platform that empowers anyone to break free from harmful habits and build a
                healthier lifestyle.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Why We Built This */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why We Built Breakthrough</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Science-Based Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Most habit trackers are built without considering the neuroscience of addiction and habit formation.
                  We wanted to create a tool that leverages the latest research on neuroplasticity, dopamine systems,
                  and behavioral change to maximize your chances of success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BrainCircuit className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Privacy-First Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Your habit data is deeply personal. We believe you should have complete control over it. That's why
                  all your data stays in your browser - no servers, no tracking, no data mining. Your journey is yours
                  alone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Open Source Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We believe the best tools are built by communities, not corporations. By making Breakthrough open source,
                  we ensure it will always be free, transparent, and continuously improved by people who actually use
                  it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Global Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Addiction and harmful habits affect people worldwide, regardless of economic status. By creating a
                  free, web-based tool that works offline, we ensure anyone with a browser can access help.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Human-Centered</h3>
              <p className="text-gray-600">
                Every feature is designed with empathy and understanding of the human struggle with habits.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Science-Driven</h3>
              <p className="text-gray-600">
                All features are based on peer-reviewed neuroscience and psychology research.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BrainCircuit className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy-First</h3>
              <p className="text-gray-600">
                Your data belongs to you. We never collect, store, or share your personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Built with Modern Technology</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-6 w-6 mr-2 text-blue-600" />
                Technology Stack
              </CardTitle>
              <CardDescription>
                Breakthrough is built with cutting-edge web technologies for performance, reliability, and user experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="space-y-1">
                    <Badge variant="outline">Next.js 14</Badge>
                    <Badge variant="outline">React 18</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">UI Components</h4>
                  <div className="space-y-1">
                    <Badge variant="outline">shadcn/ui</Badge>
                    <Badge variant="outline">Radix UI</Badge>
                    <Badge variant="outline">Lucide Icons</Badge>
                    <Badge variant="outline">Framer Motion</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <div className="space-y-1">
                    <Badge variant="outline">PWA Support</Badge>
                    <Badge variant="outline">Local Storage</Badge>
                    <Badge variant="outline">Offline First</Badge>
                    <Badge variant="outline">Responsive Design</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Open Source Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Source Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Github className="h-8 w-8 mx-auto mb-2 text-gray-700" />
                <div className="text-2xl font-bold text-gray-900">MIT</div>
                <div className="text-sm text-gray-600">License</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                <div className="text-2xl font-bold text-gray-900">1.2k+</div>
                <div className="text-sm text-gray-600">GitHub Stars</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Contributors</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Languages</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Future Vision */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Vision for the Future</h2>
                <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto leading-relaxed">
                  We envision a world where effective habit change tools are accessible to everyone, regardless of their
                  economic situation. Through open source development and community collaboration, we're building the
                  most comprehensive, scientifically-backed habit tracker ever created.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold mb-2">Mobile Apps</h3>
                    <p className="text-green-100 text-sm">Native iOS and Android apps with offline sync</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AI Insights</h3>
                    <p className="text-green-100 text-sm">Personalized recommendations based on your patterns</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Global Community</h3>
                    <p className="text-green-100 text-sm">Anonymous support groups and shared experiences</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Get Involved */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Breakthrough is built by people like you. Whether you're a developer, designer, researcher, or someone with
            lived experience, your contribution can help millions of people break free from harmful habits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/Breakthrough/Breakthrough" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <Github className="h-5 w-5 mr-2" />
                Contribute on GitHub
              </Button>
            </a>
            <Link href="/dashboard">
              <Button size="lg" variant="outline">
                Start Using Breakthrough
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
