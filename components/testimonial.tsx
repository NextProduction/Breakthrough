import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  role?: string
  avatarUrl?: string
  rating?: number
}

export function Testimonial({ quote, author, role, avatarUrl, rating }: TestimonialProps) {
  return (
    <Card className="overflow-hidden border-0 bg-white/80 shadow-md">
      <CardContent className="p-6">
        <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
          <QuoteIcon className="h-4 w-4 text-indigo-600" />
        </div>
        <p className="mb-4 text-slate-700">{quote}</p>
        <div className="flex items-center">
          {avatarUrl ? (
            <div className="mr-3 overflow-hidden rounded-full">
              <Image
                src={avatarUrl || "/placeholder.svg"}
                alt={author}
                width={40}
                height={40}
                className="h-10 w-10 object-cover"
              />
            </div>
          ) : (
            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              {author.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="font-medium text-slate-900">{author}</p>
            {role && <p className="text-sm text-slate-500">{role}</p>}
          </div>
          {rating && (
            <div className="ml-auto flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
