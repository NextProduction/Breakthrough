"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  BrainCircuit,
  Cigarette,
  Brain,
  Coffee,
  Gamepad2,
  Plus,
  X,
  Smartphone,
  Wine,
  Utensils,
  Clock,
  ShoppingCart,
  Tv,
  Zap,
  Heart,
} from "lucide-react"

const habitTemplates = [
  {
    id: "smoking",
    name: "Smoking",
    icon: Cigarette,
    description: "Quit smoking cigarettes",
    milestones: [1, 3, 7, 14, 30, 60, 90, 180, 365],
    defaultRewards: {
      1: "Celebrate with a healthy snack",
      3: "Buy a new book or magazine",
      7: "Treat yourself to a nice meal",
      14: "Get a massage or spa treatment",
      30: "Buy something you've wanted",
      60: "Plan a weekend getaway",
      90: "Take a class you're interested in",
      180: "Major purchase you've been saving for",
      365: "Take the vacation you've always wanted",
    },
    color: "red",
  },
  {
    id: "masturbation",
    name: "Masturbation",
    icon: Brain,
    description: "Overcome compulsive behavior",
    milestones: [1, 7, 14, 30, 60, 90, 180, 365],
    defaultRewards: {
      1: "Do something creative",
      7: "Buy new workout gear",
      14: "Try a new hobby",
      30: "Get a massage or spa treatment",
      60: "Take a weekend trip",
      90: "Take a class you're interested in",
      180: "Major personal goal achievement",
      365: "Plan a major life milestone",
    },
    color: "purple",
  },
  {
    id: "social-media",
    name: "Social Media",
    icon: Smartphone,
    description: "Reduce excessive social media usage",
    milestones: [1, 3, 7, 14, 30, 60, 90],
    defaultRewards: {
      1: "Read a chapter of a book",
      3: "Call a friend or family member",
      7: "Buy a new book or audiobook",
      14: "Try a new outdoor activity",
      30: "Take a photography class",
      60: "Plan a social gathering with friends",
      90: "Take a digital detox vacation",
    },
    color: "blue",
  },
  {
    id: "alcohol",
    name: "Alcohol",
    icon: Wine,
    description: "Quit or reduce alcohol consumption",
    milestones: [1, 3, 7, 14, 30, 60, 90, 180, 365],
    defaultRewards: {
      1: "Buy a fancy non-alcoholic drink",
      3: "Try a new restaurant",
      7: "Get a premium coffee or tea",
      14: "Buy new workout clothes",
      30: "Book a spa day",
      60: "Take a cooking class",
      90: "Plan a healthy vacation",
      180: "Major fitness goal achievement",
      365: "Celebrate with a major life purchase",
    },
    color: "purple",
  },
  {
    id: "junk-food",
    name: "Junk Food",
    icon: Utensils,
    description: "Stop eating unhealthy processed foods",
    milestones: [1, 3, 7, 14, 30, 60, 90],
    defaultRewards: {
      1: "Buy fresh organic fruit",
      3: "Try a new healthy recipe",
      7: "Buy quality kitchen equipment",
      14: "Take a healthy cooking class",
      30: "Get a nutrition consultation",
      60: "Buy premium healthy ingredients",
      90: "Plan a healthy food vacation",
    },
    color: "green",
  },
  {
    id: "procrastination",
    name: "Procrastination",
    icon: Clock,
    description: "Stop delaying important tasks",
    milestones: [1, 3, 7, 14, 30, 60, 90],
    defaultRewards: {
      1: "Take a relaxing break",
      3: "Buy a productivity tool",
      7: "Treat yourself to entertainment",
      14: "Get a planner or organizer",
      30: "Take a productivity course",
      60: "Upgrade your workspace",
      90: "Celebrate with a major purchase",
    },
    color: "orange",
  },
  {
    id: "online-shopping",
    name: "Impulse Shopping",
    icon: ShoppingCart,
    description: "Control unnecessary online purchases",
    milestones: [1, 3, 7, 14, 30, 60, 90],
    defaultRewards: {
      1: "Put money in savings instead",
      3: "Buy something you actually need",
      7: "Invest the money you would have spent",
      14: "Donate to a charity",
      30: "Buy one meaningful item",
      60: "Plan a experience instead of things",
      90: "Make a significant investment",
    },
    color: "yellow",
  },
  {
    id: "binge-watching",
    name: "Binge Watching",
    icon: Tv,
    description: "Reduce excessive TV/streaming consumption",
    milestones: [1, 3, 7, 14, 30, 60, 90],
    defaultRewards: {
      1: "Read for 30 minutes",
      3: "Go for a walk outside",
      7: "Buy a new book",
      14: "Try a new hobby",
      30: "Take a class or workshop",
      60: "Plan an outdoor adventure",
      90: "Take a creative vacation",
    },
    color: "indigo",
  },
  {
    id: "energy-drinks",
    name: "Energy Drinks",
    icon: Zap,
    description: "Stop consuming energy drinks",
    milestones: [1, 3, 7, 14, 30, 60, 90],
    defaultRewards: {
      1: "Buy a premium water bottle",
      3: "Try natural energy alternatives",
      7: "Get a sleep quality tracker",
      14: "Buy quality vitamins",
      30: "Get a health checkup",
      60: "Invest in better sleep setup",
      90: "Take a wellness retreat",
    },
    color: "yellow",
  },
  {
    id: "caffeine",
    name: "Caffeine",
    icon: Coffee,
    description: "Reduce caffeine dependency",
    milestones: [1, 3, 7, 14, 30, 60, 90],
    defaultRewards: {
      1: "Try a new herbal tea",
      3: "Buy a nice water bottle",
      7: "Get premium decaf coffee",
      14: "Try meditation app subscription",
      30: "Get a premium tea collection",
      60: "Buy a quality sleep mask",
      90: "Invest in a meditation retreat",
    },
    color: "brown",
  },
  {
    id: "gaming",
    name: "Excessive Gaming",
    icon: Gamepad2,
    description: "Control gaming habits",
    milestones: [1, 3, 7, 14, 30, 60, 90],
    defaultRewards: {
      1: "Go for a walk outside",
      3: "Call a friend",
      7: "Buy a new book",
      14: "Try a new physical activity",
      30: "Join a sports club or gym",
      60: "Take a skill-building class",
      90: "Plan an outdoor adventure trip",
    },
    color: "blue",
  },
  {
    id: "negative-thinking",
    name: "Negative Thinking",
    icon: Heart,
    description: "Replace negative thought patterns",
    milestones: [1, 3, 7, 14, 30, 60, 90],
    defaultRewards: {
      1: "Practice gratitude journaling",
      3: "Do something kind for yourself",
      7: "Buy a self-help book",
      14: "Try a mindfulness app",
      30: "Get a therapy session",
      60: "Take a personal development course",
      90: "Plan a self-care retreat",
    },
    color: "pink",
  },
  {
    id: "custom",
    name: "Custom Habit",
    icon: BrainCircuit,
    description: "Create your own habit to quit",
    milestones: [1, 7, 14, 30, 60, 90],
    defaultRewards: {
      1: "Small personal treat",
      7: "Something you enjoy",
      14: "Meaningful reward",
      30: "Significant celebration",
      60: "Major personal goal",
      90: "Life-changing reward",
    },
    color: "gray",
  },
]

export default function AddHabit() {
  const router = useRouter()
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [habitName, setHabitName] = useState("")
  const [habitDescription, setHabitDescription] = useState("")
  const [habitPromise, setHabitPromise] = useState("")
  const [customMilestones, setCustomMilestones] = useState<number[]>([])
  const [milestoneRewards, setMilestoneRewards] = useState<Record<number, string>>({})
  const [milestoneInput, setMilestoneInput] = useState("")

  const handleTemplateSelect = (templateId: string) => {
    const template = habitTemplates.find((t) => t.id === templateId)
    if (template) {
      setSelectedTemplate(templateId)
      setHabitName(template.name)
      setHabitDescription(template.description)
      setCustomMilestones(template.milestones)
      setMilestoneRewards(template.defaultRewards || {})
    }
  }

  const addMilestone = () => {
    const days = Number.parseInt(milestoneInput)
    if (days > 0 && !customMilestones.includes(days)) {
      const newMilestones = [...customMilestones, days].sort((a, b) => a - b)
      setCustomMilestones(newMilestones)
      setMilestoneInput("")

      // Add default reward for new milestone
      if (!milestoneRewards[days]) {
        setMilestoneRewards((prev) => ({
          ...prev,
          [days]: `Reward for ${days} days`,
        }))
      }
    }
  }

  const removeMilestone = (days: number) => {
    setCustomMilestones(customMilestones.filter((m) => m !== days))
    const newRewards = { ...milestoneRewards }
    delete newRewards[days]
    setMilestoneRewards(newRewards)
  }

  const updateMilestoneReward = (milestone: number, reward: string) => {
    setMilestoneRewards((prev) => ({
      ...prev,
      [milestone]: reward,
    }))
  }

  const generateUUID = () => {
    return crypto.randomUUID()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!habitName.trim() || customMilestones.length === 0) return

    const newHabit = {
      id: generateUUID(),
      name: habitName.trim(),
      description: habitDescription.trim(),
      promise: habitPromise.trim(),
      startDate: new Date().toISOString().split("T")[0],
      currentStreak: 0,
      longestStreak: 0,
      totalDays: 0,
      successfulDays: 0,
      milestones: customMilestones,
      milestoneRewards: milestoneRewards,
      achievements: [],
      lastUpdated: new Date().toISOString(),
      calendar: {},
      createdAt: new Date().toISOString(),
    }

    const existingHabits = JSON.parse(localStorage.getItem("Breakthrough-habits") || "[]")
    existingHabits.push(newHabit)
    localStorage.setItem("Breakthrough-habits", JSON.stringify(existingHabits))

    router.push("/dashboard")
  }

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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Habit</h1>
          <p className="text-gray-600">Choose from our comprehensive habit templates or create a custom one</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Template Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Choose a Habit Template</CardTitle>
              <CardDescription>Select from our scientifically-backed habit templates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {habitTemplates.map((template) => {
                  const Icon = template.icon
                  return (
                    <div
                      key={template.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        selectedTemplate === template.id
                          ? "border-indigo-500 bg-indigo-50 shadow-md"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleTemplateSelect(template.id)}
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <Icon className="h-8 w-8 text-gray-600" />
                        <div>
                          <h3 className="font-semibold">{template.name}</h3>
                          <p className="text-sm text-gray-600">{template.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Habit Details */}
          {selectedTemplate && (
            <Card>
              <CardHeader>
                <CardTitle>Habit Details</CardTitle>
                <CardDescription>Customize your habit information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="habit-name">Habit Name</Label>
                  <Input
                    id="habit-name"
                    value={habitName}
                    onChange={(e) => setHabitName(e.target.value)}
                    placeholder="Enter habit name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="habit-description">Description (Optional)</Label>
                  <Textarea
                    id="habit-description"
                    value={habitDescription}
                    onChange={(e) => setHabitDescription(e.target.value)}
                    placeholder="Describe your habit or motivation"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="habit-promise">Your Promise (Required)</Label>
                  <Textarea
                    id="habit-promise"
                    value={habitPromise}
                    onChange={(e) => setHabitPromise(e.target.value)}
                    placeholder="Write a personal promise to yourself about why you want to quit this habit..."
                    rows={4}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    This promise will be shown to you whenever you consider breaking your streak
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Milestones & Rewards */}
          {selectedTemplate && (
            <Card>
              <CardHeader>
                <CardTitle>Milestones & Rewards</CardTitle>
                <CardDescription>Set goals and define your personal rewards for achieving them</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Milestones */}
                <div className="grid gap-4 md:grid-cols-2">
                  {customMilestones.map((days) => (
                    <div key={days} className="p-4 border rounded-lg bg-gray-50">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-indigo-600">
                          {days} Day{days !== 1 ? "s" : ""} Milestone
                        </h4>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeMilestone(days)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div>
                        <Label htmlFor={`reward-${days}`}>Your Reward</Label>
                        <Input
                          id={`reward-${days}`}
                          value={milestoneRewards[days] || ""}
                          onChange={(e) => updateMilestoneReward(days, e.target.value)}
                          placeholder="e.g., Buy a pizza, Get a massage, Take a day off..."
                          className="mt-1"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          What will you treat yourself to when you reach this milestone?
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add New Milestone */}
                <div className="flex gap-2">
                  <Input
                    type="number"
                    value={milestoneInput}
                    onChange={(e) => setMilestoneInput(e.target.value)}
                    placeholder="Add milestone (days)"
                    min="1"
                  />
                  <Button type="button" onClick={addMilestone} variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-2">💡 Reward Tips</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Make rewards meaningful but not counterproductive</li>
                    <li>• Choose things you genuinely look forward to</li>
                    <li>• Scale rewards with milestone difficulty</li>
                    <li>• Consider experiences over material things</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Submit */}
          {selectedTemplate && (
            <div className="flex gap-4">
              <Link href="/dashboard" className="flex-1">
                <Button type="button" variant="outline" className="w-full">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" className="flex-1">
                Create Habit
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
