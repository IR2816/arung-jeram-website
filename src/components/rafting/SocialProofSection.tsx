'use client'

import { ScrollReveal } from './Animations'
import { Star } from 'lucide-react'

export function SocialProofSection() {
  return (
    <section className="py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">

        {/* Google Maps Rating Badge */}
        <ScrollReveal>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-xl border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-12 h-12 relative flex-shrink-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Google_Maps_icon.svg/512px-Google_Maps_icon.svg.png"
                  alt="Google Maps"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xl font-black text-gray-900">4.9</span>
                  <div className="flex text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <span className="text-sm text-gray-500 font-medium">Berdasarkan 500+ ulasan pengunjung</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
