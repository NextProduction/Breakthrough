"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, X } from "lucide-react"

interface PromiseReminderProps {
  promise: string
  habitName: string
  onKeepGoing: () => void
  onBreakDay: () => void
  isOpen: boolean
  onClose: () => void
}

export function PromiseReminder({
  promise,
  habitName,
  onKeepGoing,
  onBreakDay,
  isOpen,
  onClose,
}: PromiseReminderProps) {
  if (!isOpen) return null

  const motivationalMessages = [
    "Every moment is a fresh beginning. You have the power to choose differently right now.",
    "Your future self will thank you for the strength you show today.",
    "This feeling will pass, but your progress is permanent.",
    "You've come so far already. Don't let one moment erase all your hard work.",
    "The pain of discipline weighs ounces while the pain of regret weighs tons.",
    "You are stronger than your urges. You are bigger than your challenges.",
  ]

  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-md w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button onClick={onClose} className="absolute right-2 top-2 p-1 hover:bg-gray-100 rounded-full">
            <X className="h-4 w-4" />
          </button>
          <CardTitle className="text-red-600 flex items-center">
            <Heart className="h-5 w-5 mr-2" />
            Wait! Remember Your Promise
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">You're about to break your {habitName} streak</h3>
            <p className="text-gray-600 text-sm">Take a moment to remember why you started this journey.</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="font-medium text-blue-900 mb-2">Your Promise:</p>
            <p className="text-blue-800 italic">"{promise}"</p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <p className="font-medium text-yellow-900 mb-2">Remember:</p>
            <p className="text-yellow-800 italic">"{randomMessage}"</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <p className="font-medium text-green-900 mb-2">You can choose:</p>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Take a deep breath and wait 10 minutes</li>
              <li>• Call a friend or family member</li>
              <li>• Go for a walk or do some exercise</li>
              <li>• Practice a healthy coping strategy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Button onClick={onKeepGoing} className="w-full bg-green-600 hover:bg-green-700">
              I'll Keep Going Strong 💪
            </Button>
            <Button
              variant="outline"
              onClick={onBreakDay}
              className="w-full text-red-600 border-red-300 hover:bg-red-50"
            >
              Mark as Break Day
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Remember: A break day doesn't mean failure. It's part of the journey. You can start again tomorrow.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
