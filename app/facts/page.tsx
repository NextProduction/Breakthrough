import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BrainCircuit, Brain, Heart, TreesIcon as Lungs, Clock, TrendingUp } from "lucide-react"

const smokingFacts = [
  {
    timeframe: "20 minutes",
    benefit: "Heart rate and blood pressure drop",
    description: "Your cardiovascular system begins to recover almost immediately after quitting.",
  },
  {
    timeframe: "12 hours",
    benefit: "Carbon monoxide levels normalize",
    description: "Your blood oxygen levels return to normal, improving circulation.",
  },
  {
    timeframe: "2-3 weeks",
    benefit: "Circulation improves and lung function increases",
    description: "Walking becomes easier and your risk of heart attack begins to drop.",
  },
  {
    timeframe: "1-9 months",
    benefit: "Coughing and shortness of breath decrease",
    description: "Cilia regrow in your lungs, increasing their ability to handle mucus and reduce infection.",
  },
  {
    timeframe: "1 year",
    benefit: "Risk of heart disease is cut in half",
    description: "Your risk of coronary heart disease is about half that of a smoker's.",
  },
  {
    timeframe: "5 years",
    benefit: "Stroke risk reduced to that of a non-smoker",
    description: "Your risk of stroke can fall to about the same as a non-smoker's.",
  },
]

const addictionFacts = [
  {
    title: "Neuroplasticity and Recovery",
    description:
      "The brain's ability to reorganize and form new neural connections means recovery from addiction is always possible, regardless of how long the addiction has lasted.",
    icon: Brain,
  },
  {
    title: "Dopamine System Reset",
    description:
      "After 90 days of abstinence, the brain's dopamine receptors begin to return to normal levels, making it easier to find pleasure in everyday activities.",
    icon: TrendingUp,
  },
  {
    title: "Habit Loop Breaking",
    description:
      "It takes an average of 66 days to form a new habit. Breaking an old habit follows a similar timeline with consistent effort.",
    icon: Clock,
  },
  {
    title: "Stress Response Improvement",
    description:
      "Quitting addictive behaviors leads to improved stress management and emotional regulation within 30-60 days.",
    icon: Heart,
  },
]

const healthBenefits = [
  {
    category: "Mental Health",
    benefits: [
      "Reduced anxiety and depression",
      "Improved sleep quality",
      "Better concentration and focus",
      "Enhanced self-esteem and confidence",
    ],
    color: "bg-purple-100 text-purple-800",
  },
  {
    category: "Physical Health",
    benefits: [
      "Improved cardiovascular health",
      "Better immune system function",
      "Increased energy levels",
      "Enhanced physical performance",
    ],
    color: "bg-green-100 text-green-800",
  },
  {
    category: "Social Benefits",
    benefits: ["Improved relationships", "Better social interactions", "Increased productivity", "Financial savings"],
    color: "bg-blue-100 text-blue-800",
  },
]

const neuroscienceTimeline = [
  {
    timeframe: "Day 1-3",
    title: "Initial Withdrawal & Neurochemical Adjustment",
    description:
      "Your brain begins adjusting to the absence of the addictive substance or behavior. Dopamine levels start to stabilize.",
    quote: "The first 72 hours are crucial as your brain begins to reset its reward pathways.",
    source: "Dr. Anna Lembke, Stanford Addiction Medicine",
  },
  {
    timeframe: "Week 1-2",
    title: "Neuroplasticity Activation",
    description:
      "New neural pathways begin forming as your brain adapts to healthier patterns. Stress hormones start to normalize.",
    quote:
      "Neuroplasticity allows the brain to reorganize and form new connections throughout life, making recovery possible at any age.",
    source: "Dr. Norman Doidge, Neuroplasticity Research",
  },
  {
    timeframe: "Month 1",
    title: "Prefrontal Cortex Strengthening",
    description:
      "The brain's executive control center becomes more active, improving decision-making and impulse control.",
    quote: "After 30 days, we see significant improvements in prefrontal cortex function, the brain's CEO.",
    source: "Dr. Judson Brewer, Brown University",
  },
  {
    timeframe: "Month 2-3",
    title: "Dopamine Receptor Recovery",
    description: "Dopamine receptors begin returning to normal density, making natural rewards more satisfying again.",
    quote: "The brain's reward system starts to find pleasure in everyday activities again after 60-90 days.",
    source: "Dr. Nora Volkow, NIDA Director",
  },
  {
    timeframe: "Month 6+",
    title: "Long-term Structural Changes",
    description:
      "Significant structural brain changes occur, with improved white matter integrity and cognitive function.",
    quote: "Six months of abstinence can lead to measurable improvements in brain structure and function.",
    source: "Dr. Bryon Adinoff, UT Southwestern",
  },
]

export default function Facts() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Science Behind Quitting</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the scientific facts about addiction recovery can motivate and guide your journey to freedom.
          </p>
        </div>

        {/* Smoking Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Lungs className="h-8 w-8 mr-3 text-red-600" />
            Smoking Cessation Timeline
          </h2>
          <p className="text-gray-600 mb-8">
            Your body begins to heal immediately after quitting smoking. Here's what happens:
          </p>
          <div className="grid gap-6">
            {smokingFacts.map((fact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{fact.benefit}</CardTitle>
                    <Badge variant="outline" className="text-sm font-semibold">
                      {fact.timeframe}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Addiction Science */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Brain className="h-8 w-8 mr-3 text-purple-600" />
            Addiction Recovery Science
          </h2>
          <p className="text-gray-600 mb-8">
            Modern neuroscience reveals how the brain recovers from addiction and forms new, healthy patterns.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {addictionFacts.map((fact, index) => {
              const Icon = fact.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Icon className="h-6 w-6 mr-3 text-indigo-600" />
                      {fact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{fact.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Neuroscience Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Brain className="h-8 w-8 mr-3 text-indigo-600" />
            Your Brain's Recovery Timeline
          </h2>
          <p className="text-gray-600 mb-8">
            Understanding what happens in your brain during recovery can help you stay motivated through each phase.
          </p>
          <div className="grid gap-6">
            {neuroscienceTimeline.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-indigo-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-indigo-900">{phase.title}</CardTitle>
                    <Badge variant="outline" className="text-sm font-semibold bg-indigo-50 text-indigo-700">
                      {phase.timeframe}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">{phase.description}</p>
                  <div className="p-3 bg-indigo-50 rounded-lg border-l-4 border-indigo-300">
                    <p className="text-indigo-800 italic font-medium">"{phase.quote}"</p>
                    <p className="text-indigo-600 text-sm mt-1">- {phase.source}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Health Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Heart className="h-8 w-8 mr-3 text-red-600" />
            Health Benefits of Quitting
          </h2>
          <p className="text-gray-600 mb-8">
            Breaking free from harmful habits brings comprehensive benefits across all areas of life.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {healthBenefits.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <Badge key={benefitIndex} className={`${category.color} block text-center py-2`}>
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Citations */}
        <section className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Research Sources</CardTitle>
              <CardDescription className="text-blue-700">
                This information is based on peer-reviewed scientific research
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-blue-800 space-y-2">
              <p>• American Heart Association - Smoking Cessation Guidelines</p>
              <p>• National Institute on Drug Abuse - Addiction Recovery Research</p>
              <p>• Journal of Neuroscience - Neuroplasticity and Addiction Recovery</p>
              <p>• World Health Organization - Tobacco Control Guidelines</p>
              <p>• American Psychological Association - Habit Formation Studies</p>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Recovery?</h3>
              <p className="text-green-100 mb-6">
                Science shows that recovery is possible for everyone. Your brain is capable of healing and forming new,
                healthy patterns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button size="lg" variant="secondary">
                    Track Your Progress
                  </Button>
                </Link>
                <Link href="/add-habit">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-green-600"
                  >
                    Start New Habit
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
