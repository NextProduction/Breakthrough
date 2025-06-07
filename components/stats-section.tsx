import { Card, CardContent } from "@/components/ui/card"

interface Stat {
  value: string
  label: string
  description?: string
}

interface StatsProps {
  stats: Stat[]
}

export function StatsSection({ stats }: StatsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 bg-white/80 shadow-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                <div className="mt-1 text-sm font-medium uppercase tracking-wider text-slate-500">{stat.label}</div>
                {stat.description && <div className="mt-2 text-xs text-slate-400">{stat.description}</div>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
