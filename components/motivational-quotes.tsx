"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const motivationalQuotes = [
  {
    quote: "The first step towards getting somewhere is to decide you are not going to stay where you are.",
    author: "J.P. Morgan",
    category: "motivation",
  },
  {
    quote: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier",
    category: "persistence",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    category: "inspiration",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "beginning",
  },
  {
    quote: "Progress, not perfection, is the goal.",
    author: "Unknown",
    category: "progress",
  },
  {
    quote: "Every moment is a fresh beginning.",
    author: "T.S. Eliot",
    category: "renewal",
  },
  {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    category: "timing",
  },
  {
    quote: "Your future self will thank you for the choices you make today.",
    author: "Unknown",
    category: "future",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "persistence",
  },
  {
    quote: "The pain of discipline weighs ounces while the pain of regret weighs tons.",
    author: "Jim Rohn",
    category: "discipline",
  },
]

interface MotivationalQuoteProps {
  className?: string
  showDaily?: boolean
}

export function MotivationalQuote({ className = "", showDaily = false }: MotivationalQuoteProps) {
  const [currentQuote, setCurrentQuote] = useState(motivationalQuotes[0])

  useEffect(() => {
    if (showDaily) {
      // Show same quote for the entire day
      const today = new Date().toDateString()
      const savedQuote = localStorage.getItem(`icanquit-daily-quote-${today}`)

      if (savedQuote) {
        setCurrentQuote(JSON.parse(savedQuote))
      } else {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
        setCurrentQuote(randomQuote)
        localStorage.setItem(`icanquit-daily-quote-${today}`, JSON.stringify(randomQuote))
      }
    } else {
      // Random quote each time
      const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
      setCurrentQuote(randomQuote)
    }
  }, [showDaily])

  return (
    <Card className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white ${className}`}>
      <CardContent className="p-6 text-center">
        <Quote className="h-8 w-8 mx-auto mb-4 text-blue-200" />
        <p className="text-lg font-medium mb-2 italic">"{currentQuote.quote}"</p>
        <p className="text-blue-200">— {currentQuote.author}</p>
      </CardContent>
    </Card>
  )
}
