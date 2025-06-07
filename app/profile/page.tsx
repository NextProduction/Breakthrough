"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Shield, Trophy, Calendar, Award, Star, Edit3, Save, BarChart3, Target, Clock } from "lucide-react"
import { DataExportImport } from "@/components/data-export-import"

interface UserProfile {
  name: string
  joinDate: string
  avatar: string
  bio: string
}

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
  calendar: Record<string, "success" | "break">
  promise?: string
  createdAt?: string
}

export default function Profile() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    joinDate: new Date().toISOString(),
    avatar: "🛡️",
    bio: "",
  })
  const [isEditing, setIsEditing] = useState(false)
  const [editProfile, setEditProfile] = useState<UserProfile>(profile)
  const [totalStats, setTotalStats] = useState({
    totalHabits: 0,
    totalStreakDays: 0,
    totalAchievements: 0,
    averageSuccessRate: 0,
    longestOverallStreak: 0,
    daysTracked: 0,
    totalDaysQuit: 0,
  })

  useEffect(() => {
    // Load habits
    const savedHabits = JSON.parse(localStorage.getItem("icanquit-habits") || "[]")
    setHabits(savedHabits)

    // Load profile
    const savedProfile = localStorage.getItem("icanquit-profile")
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile)
      setProfile(parsedProfile)
      setEditProfile(parsedProfile)
    } else {
      // First time user - prompt for name
      setIsEditing(true)
    }

    // Calculate overall stats
    const totalHabits = savedHabits.length
    const totalStreakDays = savedHabits.reduce((sum: number, habit: Habit) => sum + habit.currentStreak, 0)
    const totalAchievements = savedHabits.reduce((sum: number, habit: Habit) => sum + habit.achievements.length, 0)
    const longestOverallStreak = savedHabits.reduce(
      (max: number, habit: Habit) => Math.max(max, habit.longestStreak),
      0,
    )
    const daysTracked = savedHabits.reduce((sum: number, habit: Habit) => sum + habit.totalDays, 0)

    // Calculate total days quit across all habits
    const totalDaysQuit = savedHabits.reduce((sum: number, habit: Habit) => {
      const start = new Date(habit.startDate)
      const now = new Date()
      const daysQuit = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
      return sum + Math.max(0, daysQuit)
    }, 0)

    const averageSuccessRate =
      totalHabits > 0
        ? Math.round(
            savedHabits.reduce((sum: number, habit: Habit) => {
              const rate = habit.totalDays > 0 ? (habit.successfulDays / habit.totalDays) * 100 : 0
              return sum + rate
            }, 0) / totalHabits,
          )
        : 0

    setTotalStats({
      totalHabits,
      totalStreakDays,
      totalAchievements,
      averageSuccessRate,
      longestOverallStreak,
      daysTracked,
      totalDaysQuit,
    })
  }, [])

  const saveProfile = () => {
    setProfile(editProfile)
    localStorage.setItem("icanquit-profile", JSON.stringify(editProfile))
    setIsEditing(false)
  }

  const getProfileLevel = () => {
    const score = totalStats.totalAchievements * 10 + totalStats.totalStreakDays
    if (score >= 1000) return { level: "Habit Master", color: "text-purple-600", bg: "bg-purple-100", emoji: "👑" }
    if (score >= 500) return { level: "Freedom Fighter", color: "text-blue-600", bg: "bg-blue-100", emoji: "⚔️" }
    if (score >= 200) return { level: "Change Champion", color: "text-green-600", bg: "bg-green-100", emoji: "🏆" }
    if (score >= 50) return { level: "Progress Pioneer", color: "text-yellow-600", bg: "bg-yellow-100", emoji: "🌟" }
    return { level: "Journey Beginner", color: "text-gray-600", bg: "bg-gray-100", emoji: "🌱" }
  }

  const profileLevel = getProfileLevel()

  const getAllAchievements = () => {
    const allAchievements: { name: string; habit: string; date: string; habitId: string }[] = []
    habits.forEach((habit) => {
      habit.achievements.forEach((achievement) => {
        allAchievements.push({
          name: achievement,
          habit: habit.name,
          date: habit.lastUpdated,
          habitId: habit.id,
        })
      })
    })
    return allAchievements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  const getHabitProgress = () => {
    return habits.map((habit) => {
      const successRate = habit.totalDays > 0 ? Math.round((habit.successfulDays / habit.totalDays) * 100) : 0
      const daysQuit = Math.floor((new Date().getTime() - new Date(habit.startDate).getTime()) / (1000 * 60 * 60 * 24))
      const nextMilestone = habit.milestones.find((m) => m > habit.currentStreak)

      return {
        ...habit,
        successRate,
        daysQuit,
        nextMilestone,
        progressToNext: nextMilestone ? (habit.currentStreak / nextMilestone) * 100 : 100,
      }
    })
  }

  const avatarOptions = ["🛡️", "💪", "🧠", "⭐", "🔥", "🚀", "🏆", "👑", "🌟", "💎"]

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
            <div className="flex items-center space-x-4">
              <DataExportImport />
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-indigo-600" />
                <span className="text-2xl font-bold text-gray-900">ICanQuit</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="text-center">
                <div className="text-6xl mb-2">{profile.avatar}</div>
                {isEditing && (
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {avatarOptions.map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => setEditProfile({ ...editProfile, avatar: emoji })}
                        className={`text-2xl p-2 rounded-lg hover:bg-gray-100 ${
                          editProfile.avatar === emoji ? "bg-indigo-100 ring-2 ring-indigo-500" : ""
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-1 text-center md:text-left">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        value={editProfile.name}
                        onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
                        placeholder="Enter your name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio (Optional)</Label>
                      <Input
                        id="bio"
                        value={editProfile.bio}
                        onChange={(e) => setEditProfile({ ...editProfile, bio: e.target.value })}
                        placeholder="Tell us about your journey..."
                        className="mt-1"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={saveProfile} disabled={!editProfile.name.trim()}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Profile
                      </Button>
                      {profile.name && (
                        <Button
                          variant="outline"
                          onClick={() => {
                            setEditProfile(profile)
                            setIsEditing(false)
                          }}
                        >
                          Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">{profile.name || "Anonymous Champion"}</h1>
                      <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                    {profile.bio && <p className="text-gray-600 mb-4">{profile.bio}</p>}
                    <div className="flex items-center justify-center md:justify-start space-x-4">
                      <Badge className={`${profileLevel.bg} ${profileLevel.color} text-lg px-4 py-2`}>
                        {profileLevel.emoji} {profileLevel.level}
                      </Badge>
                      <span className="text-gray-500">
                        Member since {new Date(profile.joinDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Habits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-600">{totalStats.totalHabits}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Current Streaks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{totalStats.totalStreakDays}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{totalStats.totalAchievements}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{totalStats.averageSuccessRate}%</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Best Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{totalStats.longestOverallStreak}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Days Tracked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-600">{totalStats.daysTracked}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Days Quit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">{totalStats.totalDaysQuit}</div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Tabs */}
        <Tabs defaultValue="achievements" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
            <TabsTrigger value="habits">Habit Details</TabsTrigger>
          </TabsList>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                  All Achievements ({getAllAchievements().length})
                </CardTitle>
                <CardDescription>Complete history of your milestones and accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                {getAllAchievements().length === 0 ? (
                  <div className="text-center py-8">
                    <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No achievements yet</p>
                    <p className="text-sm text-gray-400">Start tracking habits to unlock achievements!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {getAllAchievements().map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500"
                      >
                        <div className="flex items-center space-x-3">
                          <Trophy className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-medium">{achievement.name}</p>
                            <p className="text-sm text-gray-600">{achievement.habit}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-xs">
                            {new Date(achievement.date).toLocaleDateString()}
                          </Badge>
                          <Link href={`/habit/${achievement.habitId}`} className="block mt-1">
                            <Button variant="ghost" size="sm" className="text-xs">
                              View Habit
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                    Progress Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {getHabitProgress().map((habit) => (
                    <div key={habit.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{habit.name}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {habit.currentStreak} days
                          </Badge>
                          <span className="text-sm text-gray-600">{habit.successRate}%</span>
                        </div>
                      </div>
                      <Progress value={habit.successRate} className="h-2" />
                      <div className="text-xs text-gray-500">
                        {habit.daysQuit} days quit • {habit.achievements.length} achievements
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-green-600" />
                    Next Milestones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {getHabitProgress()
                    .filter((habit) => habit.nextMilestone)
                    .map((habit) => (
                      <div key={habit.id} className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-green-900">{habit.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {habit.nextMilestone} days
                          </Badge>
                        </div>
                        <Progress value={habit.progressToNext} className="h-2 mb-2" />
                        <div className="text-xs text-green-700">
                          {habit.currentStreak} / {habit.nextMilestone} days ({Math.round(habit.progressToNext)}%)
                        </div>
                      </div>
                    ))}
                  {getHabitProgress().filter((habit) => habit.nextMilestone).length === 0 && (
                    <div className="text-center py-4">
                      <Target className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">All milestones achieved!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="habits">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                  Detailed Habit Tracking
                </CardTitle>
                <CardDescription>Complete overview of all your habits and their progress</CardDescription>
              </CardHeader>
              <CardContent>
                {habits.length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No habits tracked yet</p>
                    <Link href="/add-habit">
                      <Button className="mt-4">Add Your First Habit</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {getHabitProgress().map((habit) => (
                      <div key={habit.id} className="p-4 border rounded-lg bg-gray-50">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{habit.name}</h3>
                            <p className="text-gray-600 text-sm">{habit.description}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              Started: {new Date(habit.startDate).toLocaleDateString()}
                              {habit.createdAt && ` • Created: ${new Date(habit.createdAt).toLocaleDateString()}`}
                            </p>
                          </div>
                          <Link href={`/habit/${habit.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{habit.currentStreak}</div>
                            <div className="text-xs text-gray-600">Current Streak</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{habit.longestStreak}</div>
                            <div className="text-xs text-gray-600">Best Streak</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">{habit.successRate}%</div>
                            <div className="text-xs text-gray-600">Success Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-600">{habit.daysQuit}</div>
                            <div className="text-xs text-gray-600">Days Quit</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Overall Progress</span>
                            <span>
                              {habit.successfulDays} / {habit.totalDays} days
                            </span>
                          </div>
                          <Progress value={habit.successRate} className="h-2" />
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {habit.achievements.map((achievement, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              <Trophy className="h-3 w-3 mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                          {habit.achievements.length === 0 && (
                            <span className="text-gray-500 text-sm">No achievements yet</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Motivational Section */}
        {totalStats.totalHabits > 0 && (
          <Card className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Keep Going Strong, {profile.name || "Champion"}!</h3>
              <p className="text-indigo-100 mb-4">
                You've tracked {totalStats.daysTracked} days, quit for {totalStats.totalDaysQuit} total days, and earned{" "}
                {totalStats.totalAchievements} achievements. Every day you don't give up is a victory!
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/dashboard">
                  <Button variant="secondary">Continue Your Journey</Button>
                </Link>
                <Link href="/add-habit">
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Add New Habit
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
