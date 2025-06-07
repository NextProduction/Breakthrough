"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Shield, CalendarIcon, CheckCircle, XCircle, Filter } from "lucide-react"

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
}

export default function BigCalendar() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [selectedHabit, setSelectedHabit] = useState<string>("all")
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("icanquit-habits") || "[]")
    setHabits(savedHabits)
  }, [])

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  const getDayStatus = (date: string, habitId?: string) => {
    if (habitId) {
      const habit = habits.find((h) => h.id === habitId)
      return habit?.calendar[date] || null
    }

    // For "all habits" view, show combined status
    const dayStatuses = habits.map((habit) => habit.calendar[date]).filter(Boolean)
    if (dayStatuses.length === 0) return null

    const hasBreak = dayStatuses.includes("break")
    const hasSuccess = dayStatuses.includes("success")

    if (hasBreak && hasSuccess) return "mixed"
    if (hasBreak) return "break"
    if (hasSuccess) return "success"
    return null
  }

  const getHabitStatusForDay = (date: string, habitId: string) => {
    const habit = habits.find((h) => h.id === habitId)
    return habit?.calendar[date] || null
  }

  const renderCalendarDay = (day: number) => {
    const dateStr = formatDate(currentDate.getFullYear(), currentDate.getMonth(), day)
    const today = new Date()
    const isToday = dateStr === today.toISOString().split("T")[0]
    const isFuture = new Date(dateStr) > today

    if (selectedHabit === "all") {
      const status = getDayStatus(dateStr)

      return (
        <div
          key={day}
          className={`
            min-h-[80px] p-2 border border-gray-200 relative
            ${isToday ? "ring-2 ring-indigo-500" : ""}
            ${isFuture ? "bg-gray-50" : "bg-white"}
          `}
        >
          <div className="text-sm font-medium text-gray-900 mb-1">{day}</div>

          {!isFuture && (
            <div className="space-y-1">
              {habits.map((habit) => {
                const habitStatus = getHabitStatusForDay(dateStr, habit.id)
                if (!habitStatus) return null

                return (
                  <div
                    key={habit.id}
                    className={`
                      text-xs px-1 py-0.5 rounded flex items-center
                      ${habitStatus === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                    `}
                  >
                    {habitStatus === "success" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <XCircle className="h-3 w-3 mr-1" />
                    )}
                    <span className="truncate">{habit.name}</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )
    } else {
      const status = getDayStatus(dateStr, selectedHabit)

      return (
        <div
          key={day}
          className={`
            min-h-[60px] p-2 border border-gray-200 flex flex-col items-center justify-center
            ${isToday ? "ring-2 ring-indigo-500" : ""}
            ${isFuture ? "bg-gray-50" : "bg-white"}
            ${status === "success" ? "bg-green-50" : ""}
            ${status === "break" ? "bg-red-50" : ""}
          `}
        >
          <div className="text-sm font-medium text-gray-900 mb-1">{day}</div>
          {!isFuture && status && (
            <div className="flex items-center">
              {status === "success" ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <XCircle className="h-4 w-4 text-red-600" />
              )}
            </div>
          )}
        </div>
      )
    }
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="min-h-[60px] border border-gray-200 bg-gray-50"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(renderCalendarDay(day))
    }

    return days
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getMonthStats = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = getDaysInMonth(currentDate)

    let successDays = 0
    let breakDays = 0
    let trackedDays = 0

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = formatDate(year, month, day)
      const dayDate = new Date(dateStr)

      if (dayDate <= new Date()) {
        if (selectedHabit === "all") {
          const hasAnyData = habits.some((habit) => habit.calendar[dateStr])
          if (hasAnyData) {
            trackedDays++
            const dayStatuses = habits.map((habit) => habit.calendar[dateStr]).filter(Boolean)
            if (dayStatuses.includes("success")) successDays++
            if (dayStatuses.includes("break")) breakDays++
          }
        } else {
          const habit = habits.find((h) => h.id === selectedHabit)
          if (habit?.calendar[dateStr]) {
            trackedDays++
            if (habit.calendar[dateStr] === "success") successDays++
            if (habit.calendar[dateStr] === "break") breakDays++
          }
        }
      }
    }

    return { successDays, breakDays, trackedDays }
  }

  const monthStats = getMonthStats()

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
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">ICanQuit</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Habit Calendar</h1>
          <p className="text-gray-600">View all your habits and progress in one comprehensive calendar</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <Select value={selectedHabit} onValueChange={setSelectedHabit}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select habit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Habits</SelectItem>
                {habits.map((habit) => (
                  <SelectItem key={habit.id} value={habit.id}>
                    {habit.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => navigateMonth("prev")}>
              Previous
            </Button>
            <Button variant="outline" onClick={() => setCurrentDate(new Date())}>
              Today
            </Button>
            <Button variant="outline" onClick={() => navigateMonth("next")}>
              Next
            </Button>
          </div>
        </div>

        {/* Month Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Success Days</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{monthStats.successDays}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Break Days</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{monthStats.breakDays}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                {monthStats.trackedDays > 0 ? Math.round((monthStats.successDays / monthStats.trackedDays) * 100) : 0}%
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2" />
              {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </CardTitle>
            <CardDescription>
              {selectedHabit === "all"
                ? "Showing all habits - each colored bar represents a different habit"
                : `Showing progress for ${habits.find((h) => h.id === selectedHabit)?.name || "selected habit"}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-0 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="p-2 text-center text-sm font-medium text-gray-500 border border-gray-200 bg-gray-50"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-0">{renderCalendar()}</div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-600">Success Day</span>
              </div>
              <div className="flex items-center space-x-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="text-sm text-gray-600">Break Day</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-indigo-500 rounded"></div>
                <span className="text-sm text-gray-600">Today</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-100 border border-gray-200"></div>
                <span className="text-sm text-gray-600">No Data</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Habit List */}
        {selectedHabit === "all" && habits.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Habit Legend</CardTitle>
              <CardDescription>Quick overview of all your tracked habits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {habits.map((habit) => (
                  <div key={habit.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{habit.name}</h4>
                      <p className="text-sm text-gray-600">{habit.currentStreak} day streak</p>
                    </div>
                    <Link href={`/habit/${habit.id}`}>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
