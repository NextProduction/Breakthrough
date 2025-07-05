"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Share2, Download, X, Trophy, Brain } from "lucide-react"

interface AchievementShareProps {
  isOpen: boolean
  onClose: () => void
  achievement: {
    title: string
    description: string
    habitName: string
    streak: number
    date: string
    milestone: number
  }
}

export function AchievementShare({ isOpen, onClose, achievement }: AchievementShareProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  if (!isOpen) return null

  const generateShareImage = async () => {
    setIsGenerating(true)

    // Create a canvas element for the share image
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 600

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 800, 600)
    gradient.addColorStop(0, "#4f46e5")
    gradient.addColorStop(1, "#7c3aed")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 800, 600)

    // Add some decorative elements
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
    ctx.beginPath()
    ctx.arc(700, 100, 80, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(100, 500, 60, 0, Math.PI * 2)
    ctx.fill()

    // Main content area
    ctx.fillStyle = "rgba(255, 255, 255, 0.95)"
    ctx.roundRect(50, 50, 700, 500, 20)
    ctx.fill()

    // Title
    ctx.fillStyle = "#1f2937"
    ctx.font = "bold 48px system-ui"
    ctx.textAlign = "center"
    ctx.fillText("🏆 Achievement Unlocked!", 400, 150)

    // Achievement name
    ctx.font = "bold 36px system-ui"
    ctx.fillStyle = "#4f46e5"
    ctx.fillText(achievement.title, 400, 220)

    // Habit name
    ctx.font = "24px system-ui"
    ctx.fillStyle = "#6b7280"
    ctx.fillText(`${achievement.habitName} Journey`, 400, 260)

    // Streak info
    ctx.font = "bold 32px system-ui"
    ctx.fillStyle = "#059669"
    ctx.fillText(`${achievement.streak} Days Strong!`, 400, 320)

    // Date
    ctx.font = "20px system-ui"
    ctx.fillStyle = "#6b7280"
    ctx.fillText(new Date(achievement.date).toLocaleDateString(), 400, 360)

    // Motivational message
    ctx.font = "italic 18px system-ui"
    ctx.fillStyle = "#374151"
    ctx.fillText("Every day you choose freedom is a victory! 🎉", 400, 420)

    // Breakthrough branding
    ctx.font = "bold 24px system-ui"
    ctx.fillStyle = "#4f46e5"
    ctx.fillText("Breakthrough - Open Source Habit Tracker", 400, 480)

    // Website
    ctx.font = "16px system-ui"
    ctx.fillStyle = "#6b7280"
    ctx.fillText("github.com/Breakthrough/Breakthrough", 400, 510)

    // Convert to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `Breakthrough-achievement-${achievement.milestone}-days.png`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }
      setIsGenerating(false)
    }, "image/png")
  }

  const shareToSocial = (platform: string) => {
    const text = `🏆 Just achieved ${achievement.milestone} days without ${achievement.habitName}! Every day I choose freedom is a victory. #Breakthrough #HabitTracker #Recovery`
    const url = "https://NextProduction.dev/breakthrough"

    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`
        break
      case "reddit":
        shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`
        break
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }
  }

  const copyToClipboard = () => {
    const text = `🏆 Just achieved ${achievement.milestone} days without ${achievement.habitName}! Every day I choose freedom is a victory. Check out Breakthrough - the open source habit tracker: https://NextProduction.dev/breakthrough #Breakthrough #HabitTracker #Recovery`
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button onClick={onClose} className="absolute right-2 top-2 p-1 hover:bg-gray-100 rounded-full">
            <X className="h-4 w-4" />
          </button>
          <CardTitle className="text-center flex items-center justify-center">
            <Trophy className="h-6 w-6 mr-2 text-yellow-600" />
            Share Your Achievement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Achievement Preview */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg text-center">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
            <p className="text-indigo-100 mb-2">{achievement.habitName} Journey</p>
            <div className="text-3xl font-bold mb-2">{achievement.streak} Days Strong!</div>
            <p className="text-indigo-200 text-sm">{new Date(achievement.date).toLocaleDateString()}</p>
          </div>

          {/* Neuroscience Fact */}
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-start space-x-2">
              <Brain className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Neuroscience Fact</h4>
                <p className="text-blue-800 text-sm">
                  {achievement.milestone >= 90
                    ? "After 90 days, your brain's dopamine receptors have significantly recovered, making natural rewards more satisfying!"
                    : achievement.milestone >= 30
                      ? "At 30 days, your prefrontal cortex is strengthening, improving your decision-making and impulse control!"
                      : achievement.milestone >= 7
                        ? "After a week, new neural pathways are forming as your brain adapts to healthier patterns!"
                        : "Every day of progress strengthens the neural pathways for your new healthy habits!"}
                </p>
              </div>
            </div>
          </div>

          {/* Download Image */}
          <div>
            <h4 className="font-semibold mb-3">Download Achievement Image</h4>
            <Button onClick={generateShareImage} disabled={isGenerating} className="w-full">
              <Download className="h-4 w-4 mr-2" />
              {isGenerating ? "Generating..." : "Download Image"}
            </Button>
          </div>

          {/* Social Sharing */}
          <div>
            <h4 className="font-semibold mb-3">Share on Social Media</h4>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => shareToSocial("twitter")} className="text-blue-500">
                Twitter
              </Button>
              <Button variant="outline" onClick={() => shareToSocial("facebook")} className="text-blue-600">
                Facebook
              </Button>
              <Button variant="outline" onClick={() => shareToSocial("linkedin")} className="text-blue-700">
                LinkedIn
              </Button>
              <Button variant="outline" onClick={() => shareToSocial("reddit")} className="text-orange-600">
                Reddit
              </Button>
            </div>
          </div>

          {/* Copy Text */}
          <div>
            <h4 className="font-semibold mb-3">Copy Share Text</h4>
            <Button variant="outline" onClick={copyToClipboard} className="w-full">
              <Share2 className="h-4 w-4 mr-2" />
              Copy to Clipboard
            </Button>
          </div>

          {/* Inspiration */}
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <h4 className="font-semibold text-green-900 mb-2">You're Inspiring Others!</h4>
            <p className="text-green-800 text-sm">
              By sharing your achievement, you're showing others that recovery is possible and motivating them to start
              their own journey to freedom.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
