import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: string
  iconBgColor?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = "text-indigo-600",
  iconBgColor = "bg-indigo-100",
}: FeatureCardProps) {
  return (
    <Card className="overflow-hidden border-0 bg-white/80 backdrop-blur transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${iconBgColor}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <CardTitle className="text-xl text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-slate-600">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
