"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="h-8 w-8 text-indigo-600" />
              <div className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
            </div>
            <Link href="/" className="text-2xl font-bold text-slate-900">
              ICanQuit
            </Link>
            <Badge variant="secondary" className="bg-green-100 text-xs text-green-800">
              Open Source
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            <Link href="/about">
              <Button variant="ghost" className="text-slate-700 hover:text-slate-900">
                About
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="ghost" className="text-slate-700 hover:text-slate-900">
                Features
              </Button>
            </Link>
            <Link href="/facts">
              <Button variant="ghost" className="text-slate-700 hover:text-slate-900">
                Science
              </Button>
            </Link>
            <a href="https://github.com/icanquit/icanquit" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-slate-700 hover:text-slate-900">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
            <Link href="/dashboard">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mt-4 flex flex-col space-y-2 rounded-lg bg-white p-4 shadow-lg md:hidden">
            <Link href="/about">
              <Button variant="ghost" className="w-full justify-start text-slate-700">
                About
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="ghost" className="w-full justify-start text-slate-700">
                Features
              </Button>
            </Link>
            <Link href="/facts">
              <Button variant="ghost" className="w-full justify-start text-slate-700">
                Science
              </Button>
            </Link>
            <a href="https://github.com/icanquit/icanquit" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="w-full justify-start text-slate-700">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
            <Link href="/dashboard">
              <Button className="w-full bg-indigo-600">Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
