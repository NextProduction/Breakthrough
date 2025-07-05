import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BrainCircuit, Github, Code, Users, Heart, Bug, Lightbulb, BookOpen } from "lucide-react"
import { GitHubBadges } from "@/components/github-badges"

export default function Contribute() {
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
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contribute to Breakthrough</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Help us build the best open-source habit tracker. Every contribution makes a difference in someone's journey
            to freedom.
          </p>
          <GitHubBadges />
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <a href="https://github.com/Breakthrough/Breakthrough" target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <Github className="h-8 w-8 mx-auto mb-2 text-gray-700" />
                <h3 className="font-semibold">View Source</h3>
                <p className="text-sm text-gray-600">Browse the code</p>
              </CardContent>
            </Card>
          </a>

          <a href="https://github.com/Breakthrough/Breakthrough/issues" target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <Bug className="h-8 w-8 mx-auto mb-2 text-red-600" />
                <h3 className="font-semibold">Report Issues</h3>
                <p className="text-sm text-gray-600">Found a bug?</p>
              </CardContent>
            </Card>
          </a>

          <a href="https://github.com/Breakthrough/Breakthrough/discussions" target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                <h3 className="font-semibold">Ideas</h3>
                <p className="text-sm text-gray-600">Share suggestions</p>
              </CardContent>
            </Card>
          </a>

          <a href="https://github.com/Breakthrough/Breakthrough/wiki" target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-semibold">Documentation</h3>
                <p className="text-sm text-gray-600">Learn more</p>
              </CardContent>
            </Card>
          </a>
        </div>

        {/* Ways to Contribute */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ways to Contribute</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-6 w-6 mr-2 text-blue-600" />
                  Code Contributions
                </CardTitle>
                <CardDescription>Help improve the app with your coding skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend Development</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• React/Next.js components</li>
                    <li>• UI/UX improvements</li>
                    <li>• Mobile responsiveness</li>
                    <li>• Accessibility features</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Features & Enhancements</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• New habit tracking features</li>
                    <li>• Data visualization</li>
                    <li>• Export/import functionality</li>
                    <li>• PWA improvements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 mr-2 text-green-600" />
                  Non-Code Contributions
                </CardTitle>
                <CardDescription>Contribute without writing code</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Content & Research</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Scientific fact verification</li>
                    <li>• Motivational quotes</li>
                    <li>• Health benefit research</li>
                    <li>• Translation support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Community Support</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• User testing and feedback</li>
                    <li>• Documentation improvements</li>
                    <li>• Bug reports and feature requests</li>
                    <li>• Community moderation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Getting Started</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fork the Repository</h3>
                  <p className="text-gray-600">Create your own copy of the Breakthrough repository on GitHub.</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Make Changes</h3>
                  <p className="text-gray-600">Implement your improvements, fix bugs, or add new features.</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Submit Pull Request</h3>
                  <p className="text-gray-600">Share your changes with the community for review and integration.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Needs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Need Help With</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <Badge className="w-fit bg-red-100 text-red-800">High Priority</Badge>
                <CardTitle className="text-lg">Mobile App Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Help create native mobile apps for iOS and Android using React Native.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-yellow-500">
              <CardHeader>
                <Badge className="w-fit bg-yellow-100 text-yellow-800">Medium Priority</Badge>
                <CardTitle className="text-lg">Data Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Create beautiful charts and graphs to show user progress over time.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-800">Good First Issue</Badge>
                <CardTitle className="text-lg">UI Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enhance the user interface with better animations and micro-interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <Badge className="w-fit bg-blue-100 text-blue-800">Research</Badge>
                <CardTitle className="text-lg">Scientific Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Research and add more scientific facts about habit formation and recovery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardHeader>
                <Badge className="w-fit bg-purple-100 text-purple-800">Translation</Badge>
                <CardTitle className="text-lg">Internationalization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Help translate the app into different languages for global accessibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-indigo-500">
              <CardHeader>
                <Badge className="w-fit bg-indigo-100 text-indigo-800">Testing</Badge>
                <CardTitle className="text-lg">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Test the app on different devices and browsers, report bugs and issues.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="text-indigo-100 mb-6">
                Together, we're building something that can help millions of people break free from harmful habits. Your
                contribution, no matter how small, makes a real difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/Breakthrough/Breakthrough" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </Button>
                </a>
                <a href="https://discord.gg/Breakthrough" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-indigo-600"
                  >
                    Join Discord
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
