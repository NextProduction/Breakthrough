"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Plus, Calendar, Trophy, TrendingUp, Shield, User } from "lucide-react"
import { DataExportImport } from "@/components/data-export-import"

interface Habit {
  id: string
  name: string
  description: string
  startDate: string
  currentStreak: number
  longestStreak: number
  totalDays: number
  successfulDays: number
  milestones: number[]
  achievements: string[]
  lastUpdated: string
}

interface UserProfile {
  name: string
  joinDate: string
  avatar: string
  bio: string
}

export default function Dashboard() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    const savedHabits = localStorage.getItem("icanquit-habits")
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits))
    }

    const savedProfile = localStorage.getItem("icanquit-profile")
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile))
    }
  }, [])

  const calculateSuccessRate = (habit: Habit) => {
    if (habit.totalDays === 0) return 0
    return Math.round((habit.successfulDays / habit.totalDays) * 100)
  }

  const getDaysQuit = (startDate: string) => {
    const start = new Date(startDate)
    const now = new Date()
    return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  }

  const getTotalStats = () => {
    return {
      totalHabits: habits.length,
      totalStreakDays: habits.reduce((sum, habit) => sum + habit.currentStreak, 0),
      totalAchievements: habits.reduce((sum, habit) => sum + habit.achievements.length, 0),
      averageSuccessRate:
        habits.length > 0
          ? Math.round(habits.reduce((sum, habit) => sum + calculateSuccessRate(habit), 0) / habits.length)
          : 0,
    }
  }

  const stats = getTotalStats()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">ICanQuit</span>
            </Link>
            <div className="flex items-center space-x-4">
              <DataExportImport />
              <Link href="/facts">
                <Button variant="ghost">Science</Button>
              </Link>
              <Link href="/calendar">
                <Button variant="ghost">Calendar</Button>
              </Link>
              <Link href="/profile">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{userProfile?.name || "Profile"}</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back{userProfile?.name ? `, ${userProfile.name}` : ""}! 👋
          </h1>
          <p className="text-gray-600">Track your progress and celebrate your victories</p>
        </div>

        {/* Daily Motivation */}
        <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Daily Motivation</h3>
            <p className="text-blue-100 italic">
              "Success is the sum of small efforts repeated day in and day out." - Robert Collier
            </p>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        {habits.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Active Habits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalHabits}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Streak Days</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalStreakDays}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalAchievements}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.averageSuccessRate}%</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Profile Quick Access */}
        {userProfile && (
          <Card className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{userProfile.avatar}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{userProfile.name}</h3>
                    <p className="text-gray-600">
                      {stats.totalAchievements} achievements • {stats.totalStreakDays} streak days
                    </p>
                  </div>
                </div>
                <Link href="/profile">
                  <Button variant="outline">
                    <User className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Habits List */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Habits</h2>
          <Link href="/add-habit">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Habit
            </Button>
          </Link>
        </div>

        {habits.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No habits tracked yet</h3>
              <p className="text-gray-600 mb-6">Start your journey by adding your first habit to quit.</p>
              <Link href="/add-habit">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Habit
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {habits.map((habit) => (
              <Card key={habit.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{habit.name}</CardTitle>
                      <CardDescription>{habit.description}</CardDescription>
                    </div>
                    <Badge variant="secondary">{getDaysQuit(habit.startDate)} days quit</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Current Streak</div>
                      <div className="text-2xl font-bold text-green-600">{habit.currentStreak} days</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Longest Streak</div>
                      <div className="text-2xl font-bold text-blue-600">{habit.longestStreak} days</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                      <div className="text-2xl font-bold text-purple-600">{calculateSuccessRate(habit)}%</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress to next milestone</span>
                      <span>
                        {habit.currentStreak} /{" "}
                        {habit.milestones.find((m) => m > habit.currentStreak) ||
                          habit.milestones[habit.milestones.length - 1]}{" "}
                        days
                      </span>
                    </div>
                    <Progress
                      value={
                        (habit.currentStreak /
                          (habit.milestones.find((m) => m > habit.currentStreak) ||
                            habit.milestones[habit.milestones.length - 1])) *
                        100
                      }
                      className="h-2"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {habit.achievements.slice(0, 3).map((achievement, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Trophy className="h-3 w-3 mr-1" />
                        {achievement}
                      </Badge>
                    ))}
                    {habit.achievements.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{habit.achievements.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/habit/${habit.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        View Calendar
                      </Button>
                    </Link>
                    <Link href={`/habit/${habit.id}`} className="flex-1">
                      <Button className="w-full">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Update Progress
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
