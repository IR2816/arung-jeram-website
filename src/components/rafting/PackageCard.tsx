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
  const whatsappUrl = getWhatsAppUrl(`Halo Sembah Adventure, saya tertarik dengan paket *${pkg.name}*. Bisa info lebih lanjut?`)

  return (
    <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 card-shine h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        {pkg.imageUrl ? (
          <Image
            src={pkg.imageUrl}
            alt={pkg.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">{pkg.name}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {pkg.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-lg px-3 py-1 animate-pulse">
              ⭐ Recommended
            </Badge>
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-xl drop-shadow-lg">{pkg.name}</h3>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Clock className="h-3 w-3 mr-1" />
              {pkg.duration}
            </Badge>
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              {pkg.distance}
            </Badge>
          </div>
        </div>
      </div>

      <CardHeader className="pb-2 pt-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm bg-gray-100 px-2.5 py-1 rounded-full">
            <Users className="h-3.5 w-3.5" />
            {pkg.capacity}
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 text-sm bg-emerald-50 px-2.5 py-1 rounded-full">
            Min. {pkg.minAge} tahun
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4 flex-grow">
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">{pkg.description}</p>
        
        {/* Highlights */}
        <ul className="space-y-1.5">
          {pkg.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-emerald-500 mt-0.5">✓</span>
              {highlight}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-0 flex-col border-t bg-gradient-to-r from-gray-50 to-white p-4 mt-auto">
        <div className="w-full flex items-center justify-between mb-4">
          <div>
            <span className="text-gray-400 text-xs">Harga per Perahu</span>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-bold text-2xl">
              Rp {pkg.price.toLocaleString('id-ID')}
            </p>
          </div>
          <div className="text-right">
            <span className="text-gray-400 text-xs">Kapasitas</span>
            <p className="text-gray-700 font-semibold">6 orang</p>
          </div>
        </div>
        
        {/* CTA Buttons - More Aggressive */}
        <div className="w-full space-y-2">
          <a href="#booking" className="block">
            <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group rounded-xl">
              Booking Sekarang
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 rounded-xl group">
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Tanya via WhatsApp
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  )
}
