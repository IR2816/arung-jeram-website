'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Image from 'next/image'

export interface TestimonialType {
  id: string
  customerName: string
  customerLocation: string | null
  rating: number
  comment: string
  imageUrl: string | null
}

export function TestimonialCard({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <Card className="h-full border-0 shadow-lg bg-white">
      <CardContent className="p-6">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-5 w-5 ${
                star <= testimonial.rating
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.comment}&rdquo;</p>

        {/* Customer Info */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
            {testimonial.imageUrl ? (
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.customerName}
                width={48}
                height={48}
                className="object-cover"
              />
            ) : (
              <span className="text-white font-bold text-lg">
                {testimonial.customerName.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div>
            <p className="font-semibold text-gray-800">{testimonial.customerName}</p>
            {testimonial.customerLocation && (
              <p className="text-sm text-gray-500">{testimonial.customerLocation}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
