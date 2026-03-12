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
    <Card className="group overflow-hidden border-0 bg-white shadow-premium transition-all duration-500 rounded-[2rem] md:rounded-[2.5rem] flex flex-col h-full max-w-[400px] mx-auto card-shine hover-lift">
      {/* Upper Section: Image with Dynamic Height */}
      <div className="relative h-[250px] sm:h-64 md:h-72 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {pkg.featured && (
            <Badge className="bg-emerald-500 text-white border-0 shadow-lg font-black px-3 py-1 rounded-xl text-[9px] uppercase tracking-wider animate-pulse">
              Recommended
            </Badge>
          )}
        </div>

        {/* Price Tag Floating */}
        <div className="absolute top-4 right-4 glass-dark px-3 py-1.5 rounded-xl border border-white/20 text-white font-bold text-[10px] md:text-xs">
          Rp {pkg.price.toLocaleString('id-ID')}
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
          <div className="flex flex-col">
            <h3 className="text-white font-black text-xl md:text-2xl drop-shadow-lg tracking-tight group-hover:text-emerald-400 transition-colors uppercase font-outfit">
              {pkg.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="flex items-center text-[9px] text-emerald-50 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 font-bold uppercase tracking-wider">
                <Clock className="h-2.5 w-2.5 mr-1" />
                {pkg.duration}
              </span>
              <span className="flex items-center text-[9px] text-emerald-50 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 font-bold uppercase tracking-wider">
                {pkg.distance}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <CardContent className="p-5 md:p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-100 flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            <Users className="h-3 w-3" />
            <span>{pkg.capacity}</span>
          </Badge>
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            Min. {pkg.minAge} th
          </Badge>
        </div>

        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 font-medium">
          {pkg.description}
        </p>

        {/* Highlights */}
        <div className="space-y-3 mb-6">
          <span className="text-[9px] font-black text-emerald-950/20 uppercase tracking-[0.2em] block">Inclusions</span>
          <div className="grid grid-cols-1 gap-2.5">
            {pkg.highlights.map((highlight, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 text-[8px] font-black">✓</span>
                </div>
                <span className="text-sm text-gray-700 font-bold">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Footer / CTA */}
      <CardFooter className="p-5 md:p-6 pt-0 flex flex-col gap-3 mt-auto">
        <div className="flex flex-col gap-2 w-full">
          <Button
            asChild
            className="w-full h-14 bg-emerald-950 hover:bg-black text-white rounded-2xl shadow-premium transition-all duration-300 font-black flex items-center justify-center gap-2 text-sm uppercase tracking-wider group/btn cursor-pointer"
            onClick={handleSelect}
          >
            <a href="#booking">
              Amankan Slot
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="w-full h-10 text-emerald-800 hover:bg-emerald-50 rounded-xl font-bold flex items-center justify-center gap-2 text-xs cursor-pointer"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Tanya Pemandu
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
