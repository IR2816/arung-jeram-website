'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, Users, ArrowRight, MessageCircle } from 'lucide-react'
import NextImage from 'next/image'
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

  const handleSelect = () => {
    // Dispatch custom event for BookingSection to pick up
    window.dispatchEvent(new CustomEvent('select-package', { detail: pkg.id }));
  };

  return (
    <Card className="group overflow-hidden border-0 bg-white shadow-md hover:shadow-premium transition-all duration-500 rounded-[2.5rem] flex flex-col h-full max-w-[400px] mx-auto card-shine hover-lift">
      {/* Upper Section: Image with Dynamic Height */}
      <div className="relative h-[clamp(160px,28vh,280px)] sm:h-64 md:h-72 overflow-hidden">
        {pkg.imageUrl ? (
          <NextImage
            src={pkg.imageUrl}
            alt={pkg.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-emerald-100 flex items-center justify-center">
            <Users className="h-10 w-10 text-emerald-300" />
          </div>
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {pkg.featured && (
            <Badge className="bg-emerald-500 text-white border-0 shadow-lg font-black px-3 py-1 rounded-full text-[10px] uppercase tracking-wider animate-glow">
              Recommended
            </Badge>
          )}
        </div>

        {/* Price Tag Floating */}
        <div className="absolute top-4 right-4 glass-dark px-3 py-1.5 rounded-2xl border border-white/20 text-white font-bold text-xs">
          Rp {pkg.price.toLocaleString('id-ID')}
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div className="flex flex-col">
            <h3 className="text-white font-black text-2xl drop-shadow-lg tracking-tight group-hover:text-emerald-400 transition-colors uppercase font-outfit">
              {pkg.name}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="flex items-center text-[10px] text-emerald-50 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 font-bold uppercase tracking-wider">
                <Clock className="h-3 w-3 mr-1" />
                {pkg.duration}
              </span>
              <span className="flex items-center text-[10px] text-emerald-50 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 font-bold uppercase tracking-wider">
                {pkg.distance}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-100 flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            <Users className="h-3.5 w-3.5" />
            <span>{pkg.capacity}</span>
          </Badge>
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            Min. {pkg.minAge} th
          </Badge>
        </div>

        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
          {pkg.description}
        </p>

        {/* Highlights */}
        <div className="space-y-4 mb-6">
          <span className="text-[10px] font-black text-emerald-900/30 uppercase tracking-[0.2em] block">Inclusions</span>
          <div className="grid grid-cols-1 gap-3">
            {pkg.highlights.map((highlight, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                  <span className="text-emerald-600 text-[10px] font-bold">✓</span>
                </div>
                <span className="text-sm text-gray-700 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Footer / CTA */}
      <CardFooter className="p-6 pt-0 flex flex-col gap-3 mt-auto">
        <div className="flex flex-col gap-2 w-full">
          <a href="#booking" className="w-full group/btn" onClick={handleSelect}>
            <Button className="w-full h-14 bg-emerald-950 hover:bg-black text-white rounded-2xl shadow-xl transition-all duration-300 font-black flex items-center justify-center gap-2 text-base uppercase tracking-wider">
              Amankan Slot
              <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="ghost" className="w-full h-12 text-emerald-800 hover:bg-emerald-50 rounded-2xl font-bold flex items-center justify-center gap-2 text-sm">
              <MessageCircle className="h-5 w-5" />
              Tanya Pemandu
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  )
}
