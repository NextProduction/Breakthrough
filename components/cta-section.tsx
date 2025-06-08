import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  bgClass?: string
  textColorClass?: string
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  bgClass = "bg-gradient-to-r from-indigo-600 to-purple-600",
  textColorClass = "text-white",
}: CTASectionProps) {
  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`mb-4 text-4xl font-bold ${textColorClass}`}>{title}</h2>
          <p className={`mb-8 text-xl ${textColorClass} opacity-90`}>{description}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={primaryButtonLink}>
              <Button size="lg" variant="secondary" className="h-12 px-8">
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <Button
                  size="lg"
                  variant="outline"
                  className={`h-12 px-8 border-white text-indigo-400 hover:bg-white hover:text-indigo-600`}
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
