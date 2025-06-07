"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Star, Heart, X } from "lucide-react"
import { Confetti } from "./confetti"

interface CelebrationModalProps {
  isOpen: boolean
  onClose: () => void
  type: "daily" | "milestone"
  data: {
    habitName: string
    streak: number
    userName?: string
    milestone?: number
    customReward?: string
  }
}

export function CelebrationModal({ isOpen, onClose, type, data }: CelebrationModalProps) {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true)
      // Auto-close after 5 seconds for daily celebrations
      if (type === "daily") {
        const timer = setTimeout(() => {
          onClose()
        }, 5000)
        return () => clearTimeout(timer)
      }
    }
  }, [isOpen, type, onClose])

  if (!isOpen) return null

  const getDailyMessage = () => {
    const messages = [
      "Boom! Another victory! 🎉",
      "You're crushing it! 💪",
      "Respect! Keep the momentum! 🔥",
      "Absolutely legendary! ⭐",
      "Your brain is getting stronger! 🧠",
      "Victory tastes sweet! 🍯",
      "You're rewriting your story! 📖",
      "Unstoppable force! 🚀",
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  const getMilestoneMessage = () => {
    const { milestone, habitName, userName } = data
    return `${userName || "Champion"}, you've conquered ${milestone} days without ${habitName}! This is HUGE! 🏆`
  }

  return (
    <>
      <Confetti isActive={showConfetti} onComplete={() => setShowConfetti(false)} />

      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
        <Card className="max-w-md w-full">
          <CardHeader className="relative text-center">
            <button onClick={onClose} className="absolute right-2 top-2 p-1 hover:bg-gray-100 rounded-full">
              <X className="h-4 w-4" />
            </button>

            {type === "daily" ? (
              <div className="space-y-4">
                <div className="text-6xl animate-bounce">🎉</div>
                <CardTitle className="text-2xl text-green-600">{getDailyMessage()}</CardTitle>
              </div>
            ) : (
              <div className="space-y-4">
                <Trophy className="h-16 w-16 mx-auto text-yellow-500 animate-pulse" />
                <CardTitle className="text-xl text-purple-600">Milestone Achieved!</CardTitle>
              </div>
            )}
          </CardHeader>

          <CardContent className="text-center space-y-4">
            {type === "daily" ? (
              <div>
                <p className="text-lg font-semibold text-gray-900">Day {data.streak} Complete!</p>
                <p className="text-gray-600">
                  {data.userName || "Champion"}, you're building incredible momentum with {data.habitName}!
                </p>
                <div className="flex justify-center space-x-2 mt-4">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <Heart className="h-6 w-6 text-red-500" />
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
              </div>
            ) : (
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-4">{getMilestoneMessage()}</p>

                {data.customReward && (
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">🎁 Time for Your Reward!</h4>
                    <p className="text-green-800 font-medium">"{data.customReward}"</p>
                    <p className="text-green-700 text-sm mt-2">
                      You've earned this! Go celebrate your incredible achievement!
                    </p>
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-blue-900 mb-2">🧠 Your Brain Right Now</h4>
                  <p className="text-blue-800 text-sm">
                    {data.milestone >= 90
                      ? "Your dopamine receptors have significantly recovered! Natural rewards feel amazing again."
                      : data.milestone >= 30
                        ? "Your prefrontal cortex is much stronger now. Decision-making and impulse control are greatly improved!"
                        : data.milestone >= 7
                          ? "New neural pathways are forming! Your brain is adapting to healthier patterns."
                          : "Every day strengthens the neural pathways for your new healthy habits!"}
                  </p>
                </div>
              </div>
            )}

            <Button onClick={onClose} className="w-full mt-6">
              {type === "daily" ? "Keep Going! 💪" : "Continue Journey 🚀"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
