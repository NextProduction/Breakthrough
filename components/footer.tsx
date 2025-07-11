import Link from "next/link"
import { BrainCircuit, Github, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <BrainCircuit className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold">Breakthrough</span>
            </div>
            <p className="mb-4 text-slate-400">Open source habit tracker for a healthier you.</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/NextProduction/Breakthrough"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product column */}
          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/features" className="text-slate-400 transition-colors hover:text-white">
                Features
              </Link>
              <Link href="/dashboard" className="text-slate-400 transition-colors hover:text-white">
                Dashboard
              </Link>
              <Link href="/facts" className="text-slate-400 transition-colors hover:text-white">
                Science
              </Link>
              <Link href="/calendar" className="text-slate-400 transition-colors hover:text-white">
                Calendar
              </Link>
            </div>
          </div>

          {/* Community column */}
          <div>
            <h3 className="mb-4 font-semibold">Community</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://github.com/NextProduction/Breakthrough"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://github.com/NextProduction/Breakthrough/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
              >
                Discussions
              </a>
              <a
                href="https://github.com/NextProduction/Breakthrough/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
              >
                Issues
              </a>
              <Link href="/contribute" className="text-slate-400 transition-colors hover:text-white">
                Contribute
              </Link>
            </div>
          </div>

          {/* About column */}
          <div>
            <h3 className="mb-4 font-semibold">About</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="text-slate-400 transition-colors hover:text-white">
                About Project
              </Link>
              <a
                href="https://github.com/NextProduction/Breakthrough/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
              >
                License
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Breakthrough. Open source under MIT License.</p>
          <p className="mt-2 text-sm">
            <span className="font-semibold text-indigo-400">Delivered by <Link href="https://nextproduction.dev/?utm_source=breakthrough-app&&utm_medium=footer">Next Production Dev</Link></span> • Made with ❤️ by the
            Breakthrough Community
          </p>
        </div>
      </div>
    </footer>
  )
}
