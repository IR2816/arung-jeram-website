'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles, Waves, Coffee, Tent, Target, Clock, MapPin } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/whatsapp'

interface BannerProps {
  title: React.ReactNode
  titleHighlight?: string
  subtitle?: string
  description: string
  badge?: string
  badgeIcon?: React.ReactNode
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  backgroundImage?: string
  showBadges?: boolean
  showLocationInfo?: boolean
}

// Daftar gambar rafting yang tersedia
const RAFTING_IMAGES = [
  '/images/Rafting/webp/1.webp',
  '/images/Rafting/webp/2.webp',
  '/images/Rafting/webp/3.webp',
  '/images/Rafting/webp/4.webp',
  '/images/Rafting/webp/5.webp',
  '/images/Rafting/webp/6.webp',
  '/images/Rafting/webp/7.webp',
  '/images/Rafting/webp/8.webp',
  '/images/Rafting/webp/9.webp',
  '/images/Rafting/webp/10.webp',
  '/images/Rafting/webp/11.webp',
  '/images/Rafting/webp/12.webp',
]

// Fungsi untuk mendapatkan random rafting image
const getRandomRaftingImage = () => {
  return RAFTING_IMAGES[Math.floor(Math.random() * RAFTING_IMAGES.length)]
}

export function Banner({
  title,
  subtitle,
  description,
  badge,
  badgeIcon,
  ctaText = 'Booking Sekarang',
  ctaHref = '#booking',
  secondaryCtaText = 'Lihat Paket',
  secondaryCtaHref = '#paket',
  backgroundImage,
  showBadges = true,
  showLocationInfo = true,
}: BannerProps) {
  const bgImage = backgroundImage || getRandomRaftingImage()

  return (
    <section className="relative bg-black">
      {/* Background: blur-cover layer + gradient, to look premium while keeping image uncropped */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover scale-110 blur-2xl opacity-55"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(16,185,129,0.28),transparent_55%),radial-gradient(900px_520px_at_85%_35%,rgba(20,184,166,0.22),transparent_60%)]" />
      </div>

      <div className="relative z-10 pt-16 sm:pt-18 md:pt-20 pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-start gap-8 md:gap-10">
            {/* Banner Visual (top, full-width, no crop) */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-transparent to-teal-400/10" />
                <div className="relative aspect-[21/9] sm:aspect-[24/7] md:aspect-[24/6] lg:aspect-[24/5]">
                  <Image
                    src={bgImage}
                    alt="Sembar Adventure Banner"
                    fill
                    className="object-cover p-0.5 md:p-1.5 rounded-2xl"
                    priority
                    sizes="100vw"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-emerald-500/25 blur-2xl" />
              <div className="pointer-events-none absolute -top-8 -right-6 h-28 w-28 rounded-full bg-teal-400/20 blur-2xl" />
            </div>

            {/* Copy */}
            <div className="text-white max-w-3xl">
              {badge && (
                <div
                  className="animate-fade-in-down mb-4 inline-flex"
                  style={{ animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}
                >
                  <Badge className="bg-emerald-500/15 text-emerald-200 border-emerald-400/25 px-4 py-2 text-xs sm:text-sm">
                    {badgeIcon && <span className="mr-2">{badgeIcon}</span>}
                    {badge}
                  </Badge>
                </div>
              )}

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight animate-fade-in-up"
                style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
              >
                {title}
              </h1>

              {subtitle && (
                <p
                  className="mt-4 sm:mt-5 text-base md:text-lg text-gray-200/90 leading-relaxed animate-fade-in-up"
                  style={{ animationDelay: '0.45s', opacity: 0, animationFillMode: 'forwards' }}
                >
                  {subtitle}
                </p>
              )}

              <p
                className="mt-4 sm:mt-5 text-base md:text-lg text-gray-200/90 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: description === subtitle ? '0.45s' : '0.55s', opacity: 0, animationFillMode: 'forwards' }}
              >
                {description}
              </p>

              {showBadges && (
                <div
                  className="mt-5 sm:mt-6 flex flex-wrap gap-2 animate-fade-in-up"
                  style={{ animationDelay: '0.65s', opacity: 0, animationFillMode: 'forwards' }}
                >
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-3 py-1 text-xs">
                    <Waves className="w-3 h-3 mr-1" /> Rafting
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-3 py-1 text-xs">
                    <Coffee className="w-3 h-3 mr-1" /> Warkop
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-3 py-1 text-xs">
                    <Tent className="w-3 h-3 mr-1" /> Camping
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-3 py-1 text-xs">
                    <Target className="w-3 h-3 mr-1" /> Outbound
                  </Badge>
                </div>
              )}

              <div
                className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                style={{ animationDelay: '0.75s', opacity: 0, animationFillMode: 'forwards' }}
              >
                <a href={ctaHref}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 h-12 rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.02] group"
                  >
                    {ctaText}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href={secondaryCtaHref}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white/25 bg-white/5 text-white hover:bg-white/10 px-8 h-12 rounded-full backdrop-blur-sm"
                  >
                    {secondaryCtaText}
                  </Button>
                </a>
              </div>

              {showLocationInfo && (
                <div
                  className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-200/80 animate-fade-in-up"
                  style={{ animationDelay: '0.85s', opacity: 0, animationFillMode: 'forwards' }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm text-xs sm:text-sm">
                    <Clock className="h-4 w-4 text-emerald-200" /> Rafting buka 11:00 - 15:00
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm text-xs sm:text-sm">
                    <MapPin className="h-4 w-4 text-teal-200" /> Desa Putat Nutug, Ciseeng
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="relative z-10 mt-14 h-20 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
