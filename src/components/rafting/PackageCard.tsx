'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, Users, ArrowRight, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export interface PackageType {
  id: string
  name: string
  slug: string
  description: string
  price: number
  duration: string
  distance: string
  minAge: number
  capacity: string
  highlights: string[]
  imageUrl: string | null
  featured?: boolean
}

interface PackageCardProps {
  pkg: PackageType
}

export function PackageCard({ pkg }: PackageCardProps) {
  const whatsappUrl = getWhatsAppUrl(`Halo Sembar Adventure, saya tertarik dengan paket *${pkg.name}*. Bisa info lebih lanjut?`)

  return (
    <Card className="group overflow-hidden border border-emerald-50 bg-white hover:border-emerald-200 shadow-md hover:shadow-premium transition-all duration-500 hover:-translate-y-2 flex flex-col h-full rounded-2xl sm:rounded-3xl max-w-[400px] mx-auto">
      {/* Upper Section: Image with Dynamic Height */}
      <div className="relative h-[clamp(140px,25vh,240px)] sm:h-56 md:h-64 overflow-hidden">
        {pkg.imageUrl ? (
          <Image
            src={pkg.imageUrl}
            alt={pkg.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-emerald-100 flex items-center justify-center">
            <Users className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-300" />
          </div>
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex flex-col gap-2">
          {pkg.featured && (
            <Badge className="bg-amber-400 hover:bg-amber-500 text-black border-0 shadow-lg font-extrabold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[10px] uppercase tracking-wider animate-pulse">
              Recommeded
            </Badge>
          )}
        </div>

        {/* Bottom Info Overlay - Dynamic Font Sizes */}
        <div className="absolute bottom-2 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex justify-between items-end">
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-base sm:text-2xl drop-shadow-md leading-tight group-hover:text-emerald-300 transition-colors">
              {pkg.name}
            </h3>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
              <span className="flex items-center text-[9px] sm:text-xs text-emerald-50 bg-emerald-600/40 backdrop-blur-md px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg border border-white/10">
                <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                {pkg.duration}
              </span>
              <span className="flex items-center text-[9px] sm:text-xs text-emerald-50 bg-emerald-600/40 backdrop-blur-md px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg border border-white/10">
                {pkg.distance}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Compressed Padding */}
      <CardContent className="p-3 sm:p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-4">
          <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-100 flex items-center gap-1 px-1.5 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-semibold">
            <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>{pkg.capacity}</span>
          </Badge>
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-100 px-1.5 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-semibold">
            Min. {pkg.minAge} th
          </Badge>
        </div>

        <p className="text-gray-600 text-[11px] sm:text-sm mb-3 sm:mb-6 leading-relaxed line-clamp-2 italic">
          "{pkg.description}"
        </p>

        {/* Highlights - Dynamic visibility and spacing */}
        <div className="space-y-1.5 sm:space-y-3 mb-3 sm:mb-6 overflow-hidden">
          <span className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Fasilitas</span>
          <div className="grid grid-cols-1 gap-1 sm:gap-2">
            {pkg.highlights.map((highlight, i) => (
              <div key={i} className={`flex items-center gap-1.5 sm:gap-2 ${i > 1 ? 'hidden xs:flex' : 'flex'}`}>
                <div className="h-3.5 w-3.5 sm:h-5 sm:w-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 text-[8px] sm:text-[10px] font-bold">✓</span>
                </div>
                <span className="text-[10px] sm:text-sm text-gray-700 truncate">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Footer / CTA Area - Compact Height */}
      <CardFooter className="p-3 sm:p-6 pt-0 flex flex-col gap-2 sm:gap-4 mt-auto">
        <div className="w-full flex items-center justify-between p-2.5 sm:p-4 rounded-xl bg-gray-50/80 border border-gray-100/50">
          <div>
            <span className="text-[8px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-0">Biaya Perahu</span>
            <span className="text-emerald-700 font-bold text-base sm:text-2xl font-inter">
              Rp {pkg.price.toLocaleString('id-ID')}
            </span>
          </div>
          <span className="text-emerald-600/50 font-bold text-[8px] sm:text-xs px-2 py-0.5 bg-emerald-50 rounded-md">All-In</span>
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-3 w-full">
          <a href="#booking" className="w-full group/btn">
            <Button className="w-full h-9 sm:h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg sm:rounded-xl shadow-md hover:shadow-emerald-200 transition-all font-bold flex items-center justify-center gap-1.5 text-[10px] sm:text-base">
              Amankan Slot
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="ghost" className="w-full h-8 sm:h-12 text-emerald-600 hover:bg-emerald-50 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-1.5 text-[10px] sm:text-base">
              <MessageCircle className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              Tanya Pemandu
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  )
}
