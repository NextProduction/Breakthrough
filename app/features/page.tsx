import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BrainCircuit, Brain, Calendar, Trophy, Heart, Share2, BarChart3, Clock, Zap, Lock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Neuroscience-Based Design",
    description:
      "Every feature is designed based on the latest neuroscience research on habit formation and addiction recovery.",
    neuroscience:
      "The app leverages neuroplasticity - your brain's ability to reorganize and form new neural connections. Visual progress tracking activates the brain's reward system, while achievement unlocking provides dopamine reinforcement.",
    benefits: ["Activates prefrontal cortex", "Strengthens neural pathways", "Leverages neuroplasticity"],
    color: "purple",
  },
  {
    icon: Calendar,
    title: "Visual Progress Tracking",
    description: "Beautiful calendars and charts show your progress over time with color-coded success and break days.",
    neuroscience:
      "Visual feedback creates stronger memory encoding and activates the brain's pattern recognition systems. The visual cortex processes information 60,000 times faster than text, making progress immediately apparent.",
    benefits: ["Enhanced memory encoding", "Pattern recognition", "Immediate feedback loops"],
    color: "green",
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description:
      "Unlock achievements and milestones as you progress. Share your victories with beautiful achievement cards.",
    neuroscience:
      "Achievement unlocking triggers dopamine release in the brain's reward system. This positive reinforcement strengthens the neural pathways associated with your new healthy behaviors.",
    benefits: ["Dopamine reward system", "Positive reinforcement", "Motivation enhancement"],
    color: "yellow",
  },
  {
    icon: Heart,
    title: "Promise System",
    description:
      "Write personal promises that remind you of your 'why' during difficult moments and potential relapses.",
    neuroscience:
      "Personal promises activate the prefrontal cortex, the brain's executive control center. This strengthens impulse control and decision-making capabilities during moments of temptation.",
    benefits: ["Strengthens impulse control", "Activates executive function", "Emotional regulation"],
    color: "red",
  },
  {
    icon: Share2,
    title: "Achievement Sharing",
    description:
      "Share your milestones and achievements on social media to celebrate your victories and inspire others.",
    neuroscience:
      "Social sharing activates the brain's social reward networks and releases oxytocin. Public commitment also creates accountability through social pressure mechanisms.",
    benefits: ["Social reward activation", "Oxytocin release", "Accountability mechanisms"],
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Detailed analytics show your success rates, streak patterns, and improvement over time.",
    neuroscience:
      "Data visualization helps the brain identify patterns and trends. The analytical process engages the prefrontal cortex and helps build self-awareness and metacognition.",
    benefits: ["Pattern recognition", "Self-awareness building", "Metacognitive enhancement"],
    color: "indigo",
  },
  {
    icon: Clock,
    title: "Daily Check-ins",
    description: "Mark each day as success or break. Consistent daily tracking builds new neural pathways.",
    neuroscience:
      "Daily repetition is crucial for habit formation. The basal ganglia, responsible for automatic behaviors, strengthens through consistent daily practice and tracking.",
    benefits: ["Habit formation", "Basal ganglia strengthening", "Automatic behavior development"],
    color: "orange",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get immediate feedback on your actions with real-time streak updates and progress indicators.",
    neuroscience:
      "Immediate feedback creates stronger learning associations in the brain. The faster the feedback, the stronger the neural connection between action and outcome.",
    benefits: ["Stronger learning associations", "Faster neural connections", "Enhanced motivation"],
    color: "pink",
  },
  {
    icon: Lock,
    title: "Privacy-First Design",
    description: "All your data is stored locally in your browser. No servers, no tracking, complete privacy.",
    neuroscience:
      "Privacy reduces stress and anxiety, which can interfere with habit formation. Lower stress levels allow the prefrontal cortex to function optimally for decision-making.",
    benefits: ["Reduced stress and anxiety", "Optimal prefrontal function", "Enhanced decision-making"],
    color: "gray",
  },
]

const neuroscienceTimeline = [
  {
    period: "Day 1-3",
    title: "Initial Neurochemical Adjustment",
    description: "Your brain begins adjusting to the absence of the addictive substance or behavior.",
    changes: ["Dopamine levels start stabilizing", "Withdrawal symptoms peak", "Stress hormones elevated"],
  },
  {
    period: "Week 1-2",
    title: "Neuroplasticity Activation",
    description: "New neural pathways begin forming as your brain adapts to healthier patterns.",
    changes: ["New synaptic connections form", "Stress hormones normalize", "Sleep patterns improve"],
  },
  {
    period: "Month 1",
    title: "Prefrontal Cortex Strengthening",
    description: "The brain's executive control center becomes more active and efficient.",
    changes: ["Improved decision-making", "Better impulse control", "Enhanced focus and attention"],
  },
  {
    period: "Month 2-3",
    title: "Dopamine Receptor Recovery",
    description: "Dopamine receptors begin returning to normal density and sensitivity.",
    changes: ["Natural rewards become satisfying", "Mood stabilizes", "Motivation increases"],
  },
  {
    period: "Month 6+",
    title: "Long-term Structural Changes",
    description: "Significant structural brain changes occur with lasting improvements.",
    changes: ["White matter integrity improves", "Cognitive function enhanced", "Emotional regulation strengthened"],
  },
]

export default function Features() {
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Features Based on <span className="text-indigo-600">Neuroscience</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature in Breakthrough is designed based on the latest neuroscience research on habit formation,
            addiction recovery, and behavioral change.
          </p>
        </div>

        {/* Features Grid */}
        <section className="mb-16">
          <div className="grid gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const colorClasses = {
                purple: "bg-purple-100 text-purple-600 border-purple-200",
                green: "bg-green-100 text-green-600 border-green-200",
                yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
                red: "bg-red-100 text-red-600 border-red-200",
                blue: "bg-blue-100 text-blue-600 border-blue-200",
                indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
                orange: "bg-orange-100 text-orange-600 border-orange-200",
                pink: "bg-pink-100 text-pink-600 border-pink-200",
                gray: "bg-gray-100 text-gray-600 border-gray-200",
              }

              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                        <CardDescription className="text-base">{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Brain className="h-4 w-4 mr-2 text-purple-600" />
                          The Neuroscience
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{feature.neuroscience}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Brain Benefits</h4>
                        <div className="space-y-1">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <Badge key={benefitIndex} variant="outline" className="text-xs mr-1 mb-1">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Neuroscience Timeline */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Brain's Recovery Timeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding what happens in your brain during recovery helps you stay motivated through each phase.
            </p>
          </div>

          <div className="space-y-6">
            {neuroscienceTimeline.map((phase, index) => (
              <Card key={index} className="border-l-4 border-indigo-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {phase.period}
                      </Badge>
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                      <CardDescription>{phase.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {phase.changes.map((change, changeIndex) => (
                      <div key={changeIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{change}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Sources */}
        <section className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Research Foundation</CardTitle>
              <CardDescription className="text-blue-700">
                Our features are based on peer-reviewed research from leading institutions
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-blue-800 space-y-2">
              <p>
                • <strong>Stanford Addiction Medicine</strong> - Dopamine and reward system research
              </p>
              <p>
                • <strong>MIT Neuroscience</strong> - Habit formation and basal ganglia studies
              </p>
              <p>
                • <strong>Harvard Medical School</strong> - Neuroplasticity and behavioral change
              </p>
              <p>
                • <strong>National Institute on Drug Abuse</strong> - Addiction recovery mechanisms
              </p>
              <p>
                • <strong>Journal of Neuroscience</strong> - Visual feedback and learning associations
              </p>
              <p>
                • <strong>Nature Neuroscience</strong> - Prefrontal cortex and executive function
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardContent className="p-8">
              <Brain className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Rewire Your Brain?</h3>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                Start your neuroscience-backed journey to freedom. Every day you track is a step towards rewiring your
                brain for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button size="lg" variant="secondary">
                    Start Tracking Now
                  </Button>
                </Link>
                <Link href="/facts">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-indigo-600"
                  >
                    Learn More Science
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
