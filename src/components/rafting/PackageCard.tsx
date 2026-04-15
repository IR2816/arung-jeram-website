'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, Users, ArrowRight, MessageCircle, Target, Check, X } from 'lucide-react'
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
  inclusion?: string
  exclusion?: string
  imageUrl: string | null
  featured?: boolean
}

interface PackageCardProps {
  pkg: PackageType
}

export function PackageCard({ pkg }: PackageCardProps) {
  const whatsappUrl = getWhatsAppUrl(`Halo Sembar Adventure, saya tertarik dengan paket *${pkg.name}* seharga Rp ${pkg.price.toLocaleString('id-ID')}. Mohon info lebih lanjut untuk booking.`)

  const handleSelect = () => {
    // Dispatch custom event for BookingSection to pick up
    window.dispatchEvent(new CustomEvent('select-package', { detail: pkg.id }));
  };

  return (
    <div className="group relative w-full h-full max-w-[420px] mx-auto z-10 transition-all duration-500 hover:-translate-y-2">
      {/* Animated glow behind the card */}
      <div className="absolute -inset-[1px] rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b from-emerald-500/50 via-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
      
      <Card className="relative h-full flex flex-col overflow-hidden bg-background/80 backdrop-blur-xl border border-border/50 shadow-xl shadow-black/5 transition-all duration-500 group-hover:shadow-2xl group-hover:border-emerald-500/30 rounded-[2.5rem] md:rounded-[3rem]">
        {/* Upper Section: Edge-to-Edge Image with Modern Glassmorphism */}
        <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
          {pkg.imageUrl ? (
            <NextImage
              src={pkg.imageUrl}
              alt={pkg.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center">
              <Users className="h-12 w-12 text-emerald-300/50" />
            </div>
          )}

          {/* Vignette Overlay & Soft Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 opacity-90 transition-opacity duration-500 group-hover:opacity-75" />
          <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500" />

          {/* Top Info Bar */}
          <div className="absolute top-5 inset-x-5 flex justify-between items-start z-10">
            <div className="flex flex-col gap-2">
              {pkg.featured && (
                <Badge className="bg-gradient-to-r from-orange-400 to-rose-500 text-white border-0 shadow-lg shadow-orange-500/30 font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] relative overflow-hidden">
                  <span className="relative z-10">Paling Laris</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                </Badge>
              )}
            </div>

            {/* Premium Floating Price Tag */}
            <div className="flex flex-col items-end">
              <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl shadow-xl flex flex-col items-center">
                <span className="text-white/70 text-[9px] font-bold uppercase tracking-widest mb-0.5">Mulai Dari</span>
                <span className="text-white font-black text-base md:text-lg leading-none tracking-tight">
                  Rp {pkg.price.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Image Info */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h3 className="text-white font-black text-2xl md:text-3xl drop-shadow-xl tracking-tight leading-[1.1] mb-3 group-hover:text-emerald-300 transition-colors uppercase font-outfit">
              {pkg.name}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center text-[10px] md:text-xs text-white font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl shadow-lg">
                <Clock className="h-3 w-3 md:h-3.5 md:w-3.5 mr-1.5 text-emerald-300" />
                {pkg.duration}
              </div>
              <div className="flex items-center text-[10px] md:text-xs text-white font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl shadow-lg">
                <Target className="h-3 w-3 md:h-3.5 md:w-3.5 mr-1.5 text-emerald-300" />
                {pkg.distance}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <CardContent className="p-6 md:p-8 flex-grow flex flex-col relative z-20 bg-background/50">
          <div className="flex flex-wrap items-start gap-2 mb-5">
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wide">
              <Users className="h-3.5 w-3.5 shrink-0" />
              {pkg.capacity}
            </Badge>
            {pkg.minAge > 0 && (
              <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20 flex items-center px-3 py-1.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wide">
                1 Dewasa, Min. {pkg.minAge} th
              </Badge>
            )}
          </div>

          <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed font-medium min-h-[4.5rem]">
            {pkg.description}
          </p>

          {/* Premium Highlights Grid */}
          <div className="mb-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border/50" />
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] text-center">Fasilitas Unggulan</span>
              <div className="h-px flex-1 bg-border/50" />
            </div>
            
            <div className="flex flex-col gap-3">
              {pkg.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3 group/item">
                  <div className="h-5 w-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-emerald-100 group-hover/item:scale-110 transition-all duration-300">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/90 leading-tight group-hover/item:text-emerald-700 transition-colors pt-0.5">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusion & Exclusion Section - Bento Box Style */}
          {(pkg.inclusion || pkg.exclusion) && (
            <div className="mt-auto pt-4 grid grid-cols-1 gap-3">
              {pkg.inclusion && (
                <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-2xl p-4 rounded-tl-sm transition-colors hover:bg-emerald-50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-emerald-500 text-white rounded-full p-0.5"><Check className="h-3 w-3" /></div>
                    <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Include</span>
                  </div>
                  <p className="text-xs text-emerald-950/70 font-medium leading-relaxed pl-6">{pkg.inclusion}</p>
                </div>
              )}
              {pkg.exclusion && (
                <div className="bg-rose-50/50 border border-rose-100/50 rounded-2xl p-4 rounded-tr-sm transition-colors hover:bg-rose-50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-rose-500 text-white rounded-full p-0.5"><X className="h-3 w-3" /></div>
                    <span className="text-[10px] font-black text-rose-700 uppercase tracking-widest">Exclude</span>
                  </div>
                  <p className="text-xs text-rose-950/70 font-medium leading-relaxed pl-6">{pkg.exclusion}</p>
                </div>
              )}
            </div>
          )}
        </CardContent>

        {/* Action Footer */}
        <CardFooter className="p-6 md:p-8 pt-0 flex flex-col gap-3 relative z-20 bg-background/50 mt-auto">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button
              asChild
              className="flex-1 min-w-0 h-14 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-2xl shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40 font-black px-3 md:px-4 text-xs sm:text-sm uppercase tracking-wide group/btn cursor-pointer overflow-hidden relative"
              onClick={handleSelect}
            >
              <a href="#booking" className="flex items-center justify-center w-full">
                <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2 w-full whitespace-nowrap">
                  <span className="truncate">Pesan Sekarang</span>
                  <ArrowRight className="h-4 w-4 shrink-0 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-16 shrink-0 h-14 border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 rounded-2xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
              title="Tanya via WhatsApp"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
