"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import { ArrowLeft, BrainCircuit, CheckCircle, XCircle, Trophy, Share2 } from "lucide-react"
import { AchievementShare } from "@/components/achievement-share"
import { PromiseReminder } from "@/components/promise-reminder"
import { CelebrationModal } from "@/components/celebration-modal"

interface Habit {
  id: string
  name: string
  description: string
  promise: string
  startDate: string
  currentStreak: number
  longestStreak: number
  totalDays: number
  successfulDays: number
  milestones: number[]
  milestoneRewards: Record<number, string>
  achievements: string[]
  lastUpdated: string
  calendar: Record<string, "success" | "break">
}

export default function HabitDetail() {
  const params = useParams()
  const router = useRouter()
  const [habit, setHabit] = useState<Habit | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [showBreakDialog, setShowBreakDialog] = useState(false)
  const [showAchievementShare, setShowAchievementShare] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [celebrationData, setCelebrationData] = useState<any>(null)
  const [newAchievement, setNewAchievement] = useState<any>(null)
  const [userProfile, setUserProfile] = useState<any>(null)

  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("Breakthrough-habits") || "[]")
    const foundHabit = savedHabits.find((h: Habit) => h.id === params.id)
    if (foundHabit) {
      setHabit(foundHabit)
    }

    // Load user profile
    const savedProfile = localStorage.getItem("Breakthrough-profile")
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile))
    }
  }, [params.id])

  const updateHabitDay = (date: Date, status: "success" | "break") => {
    if (!habit) return

    const dateStr = date.toISOString().split("T")[0]
    const updatedCalendar = { ...habit.calendar, [dateStr]: status }

    // Recalculate stats
    const successDays = Object.values(updatedCalendar).filter((s) => s === "success").length
    const totalDays = Object.keys(updatedCalendar).length

    // Calculate current streak
    let currentStreak = 0
    const today = new Date()
    for (let i = 0; i < 365; i++) {
      const checkDate = new Date(today)
      checkDate.setDate(today.getDate() - i)
      const checkDateStr = checkDate.toISOString().split("T")[0]

      if (updatedCalendar[checkDateStr] === "success") {
        currentStreak++
      } else if (updatedCalendar[checkDateStr] === "break") {
        break
      }
    }

    // Check for new achievements
    const newAchievements = [...habit.achievements]
    let unlockedAchievement = null

    habit.milestones.forEach((milestone) => {
      const achievementName = `${milestone} Day${milestone !== 1 ? "s" : ""} Strong`
      if (currentStreak >= milestone && !newAchievements.includes(achievementName)) {
        newAchievements.push(achievementName)
        unlockedAchievement = {
          title: achievementName,
          description: `Congratulations! You've maintained your ${habit.name} streak for ${milestone} days!`,
          habitName: habit.name,
          streak: currentStreak,
          date: new Date().toISOString(),
          milestone: milestone,
          customReward: habit.milestoneRewards?.[milestone],
        }
      }
    })

    const updatedHabit = {
      ...habit,
      calendar: updatedCalendar,
      currentStreak,
      longestStreak: Math.max(habit.longestStreak, currentStreak),
      totalDays,
      successfulDays: successDays,
      achievements: newAchievements,
      lastUpdated: new Date().toISOString(),
    }

    setHabit(updatedHabit)

    // Save to localStorage
    const allHabits = JSON.parse(localStorage.getItem("Breakthrough-habits") || "[]")
    const habitIndex = allHabits.findIndex((h: Habit) => h.id === habit.id)
    if (habitIndex !== -1) {
      allHabits[habitIndex] = updatedHabit
      localStorage.setItem("Breakthrough-habits", JSON.stringify(allHabits))
    }

    // Show celebrations
    if (status === "success") {
      if (unlockedAchievement) {
        // Milestone achievement
        setCelebrationData({
          type: "milestone",
          habitName: habit.name,
          streak: currentStreak,
          userName: userProfile?.name,
          milestone: unlockedAchievement.milestone,
          customReward: unlockedAchievement.customReward,
        })
        setNewAchievement(unlockedAchievement)
        setShowCelebration(true)
      } else {
        // Daily success
        setCelebrationData({
          type: "daily",
          habitName: habit.name,
          streak: currentStreak,
          userName: userProfile?.name,
        })
        setShowCelebration(true)
      }
    }
  }

  const getDayStatus = (date: Date) => {
    if (!habit) return null
    const dateStr = date.toISOString().split("T")[0]
    return habit.calendar[dateStr] || null
  }

  const isDateInFuture = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date > today
  }

  const calculateSuccessRate = () => {
    if (!habit || habit.totalDays === 0) return 0
    return Math.round((habit.successfulDays / habit.totalDays) * 100)
  }

  const getNeuroscienceFactForStreak = (streak: number) => {
    if (streak >= 90) {
      return "After 90 days, your brain's dopamine receptors have significantly recovered, making natural rewards more satisfying again!"
    } else if (streak >= 60) {
      return "At 60 days, your brain shows measurable improvements in white matter integrity and cognitive function!"
    } else if (streak >= 30) {
      return "After 30 days, your prefrontal cortex is significantly stronger, improving decision-making and impulse control!"
    } else if (streak >= 14) {
      return "At 2 weeks, new neural pathways are solidifying as your brain adapts to healthier patterns!"
    } else if (streak >= 7) {
      return "After a week, neuroplasticity is actively forming new connections to support your healthy choices!"
    } else if (streak >= 3) {
      return "After 3 days, your brain is beginning to adjust its neurochemical balance!"
    } else if (streak >= 1) {
      return "Every day of progress strengthens the neural pathways for your new healthy habits!"
    }
    return "Your brain is ready to start forming new, healthier patterns!"
  }

  if (!habit) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BrainCircuit className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Habit not found</h2>
          <Link href="/dashboard">
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    )
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

      <div className="container mx-auto px-4 py-8">
        {/* Habit Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{habit.name}</h1>
          <p className="text-gray-600">{habit.description}</p>
        </div>

        {/* Neuroscience Insight */}
        <Card className="mb-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center">🧠 Your Brain Right Now</h3>
            <p className="text-purple-100">{getNeuroscienceFactForStreak(habit.currentStreak)}</p>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Current Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{habit.currentStreak} days</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Longest Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{habit.longestStreak} days</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{calculateSuccessRate()}%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Days</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-600">{habit.totalDays}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <Card>
            <CardHeader>
              <CardTitle>Progress Calendar</CardTitle>
              <CardDescription>Track your daily progress</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="rounded-md border"
                modifiers={{
                  success: (date) => getDayStatus(date) === "success",
                  break: (date) => getDayStatus(date) === "break",
                }}
                modifiersStyles={{
                  success: { backgroundColor: "#10b981", color: "white" },
                  break: { backgroundColor: "#ef4444", color: "white" },
                }}
              />

              {/* Day Actions */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h4>
                {isDateInFuture(selectedDate) ? (
                  <p className="text-gray-500">Future date - cannot update</p>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={getDayStatus(selectedDate) === "success" ? "default" : "outline"}
                      onClick={() => updateHabitDay(selectedDate, "success")}
                      className="flex-1"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Success
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex-1"
                      onClick={() => updateHabitDay(selectedDate, "break")}
                      disabled={getDayStatus(selectedDate) === "break"}
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Mark as Failed
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Progress & Achievements */}
          <div className="space-y-6">
            {/* Next Milestone */}
            <Card>
              <CardHeader>
                <CardTitle>Next Milestone</CardTitle>
                <CardDescription>Your progress to the next goal</CardDescription>
              </CardHeader>
              <CardContent>
                {(() => {
                  const nextMilestone = habit.milestones.find((m) => m > habit.currentStreak)
                  if (!nextMilestone) {
                    return (
                      <div className="text-center py-4">
                        <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                        <p className="font-semibold">All milestones achieved!</p>
                        <p className="text-sm text-gray-600">You've reached every goal. Keep going!</p>
                        <Button className="mt-4" onClick={() => setShowAchievementShare(true)}>
                          <Share2 className="h-4 w-4 mr-2" />
                          Share Achievement
                        </Button>
                      </div>
                    )
                  }

                  const progress = (habit.currentStreak / nextMilestone) * 100
                  const reward = habit.milestoneRewards?.[nextMilestone]

                  return (
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{nextMilestone} Day Goal</span>
                        <span>
                          {habit.currentStreak} / {nextMilestone} days
                        </span>
                      </div>
                      <Progress value={progress} className="h-3 mb-2" />
                      <p className="text-sm text-gray-600 mb-2">{nextMilestone - habit.currentStreak} days to go!</p>

                      {reward && (
                        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500 mt-3">
                          <h5 className="font-semibold text-green-900 text-sm">🎁 Your Reward:</h5>
                          <p className="text-green-800 text-sm">{reward}</p>
                        </div>
                      )}
                    </div>
                  )
                })()}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Milestones you've unlocked</CardDescription>
              </CardHeader>
              <CardContent>
                {habit.achievements.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">
                    No achievements yet. Keep going to unlock your first milestone!
                  </p>
                ) : (
                  <div className="space-y-2">
                    {habit.achievements.map((achievement, index) => {
                      const milestone = Number.parseInt(achievement.split(" ")[0])
                      const reward = habit.milestoneRewards?.[milestone]

                      return (
                        <div key={index} className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Trophy className="h-5 w-5 text-yellow-600" />
                              <span className="font-medium">{achievement}</span>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setNewAchievement({
                                  title: achievement,
                                  description: `Congratulations! You've maintained your ${habit.name} streak for ${milestone} days!`,
                                  habitName: habit.name,
                                  streak: milestone,
                                  date: habit.lastUpdated,
                                  milestone: milestone,
                                })
                                setShowAchievementShare(true)
                              }}
                            >
                              <Share2 className="h-3 w-3" />
                            </Button>
                          </div>
                          {reward && <p className="text-yellow-800 text-sm">🎁 Reward: {reward}</p>}
                        </div>
                      )
                    })}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  className="w-full"
                  onClick={() => updateHabitDay(new Date(), "success")}
                  disabled={getDayStatus(new Date()) === "success"}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark Today as Success
                </Button>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => setShowBreakDialog(true)}
                  disabled={getDayStatus(new Date()) === "break"}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Mark Today as Failed
                </Button>
                <Link href="/calendar" className="block">
                  <Button variant="outline" className="w-full">
                    View Full Calendar
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Break Day Confirmation Dialog */}
      <PromiseReminder
        isOpen={showBreakDialog}
        onClose={() => setShowBreakDialog(false)}
        promise={habit.promise}
        habitName={habit.name}
        onKeepGoing={() => setShowBreakDialog(false)}
        onBreakDay={() => {
          updateHabitDay(new Date(), "break")
          setShowBreakDialog(false)
        }}
      />

      {/* Celebration Modal */}
      {celebrationData && (
        <CelebrationModal
          isOpen={showCelebration}
          onClose={() => {
            setShowCelebration(false)
            if (celebrationData.type === "milestone" && newAchievement) {
              setShowAchievementShare(true)
            }
          }}
          type={celebrationData.type}
          data={celebrationData}
        />
      )}

      {/* Achievement Share Dialog */}
      {newAchievement && (
        <AchievementShare
          isOpen={showAchievementShare}
          onClose={() => setShowAchievementShare(false)}
          achievement={newAchievement}
        />
      )}
    </div>
  )
}
