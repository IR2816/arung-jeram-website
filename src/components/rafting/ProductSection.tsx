'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Waves, Coffee, Tent, Target, MapPin, Car, Trees, ArrowRight } from 'lucide-react'
import { ScrollReveal } from './Animations'

const products = [
  {
    title: 'Arung Jeram Cisadane',
    icon: Waves,
    color: 'from-emerald-500 to-teal-600',
    image: '/images/Rafting/webp/8.webp',
    description: 'Rasakan sensasi arung jeram di Sungai Cisadane dengan berbagai pilihan paket yang seru!',
    features: ['Family Trip', 'Panorama Trip', 'Adventure Trip']
  },
  {
    title: 'Sembar Sunset Cafe',
    icon: Coffee,
    color: 'from-amber-500 to-orange-600',
    image: '/images/cafe/warkop-hero.webp',
    description: 'Nikmati kopi dan makanan lezat dengan pemandangan sunset yang memukau di tepi sungai.',
    features: ['Kopi Tradisional', 'Nasi Bakar', 'Es Kelapa Muda', 'View Sungai']
  },
  {
    title: 'Camping Ground',
    icon: Tent,
    color: 'from-green-500 to-emerald-600',
    image: '/images/Rafting/webp/4.webp',
    description: 'Berkemah di alam terbuka dengan udara segar dan pemandangan alam yang menenangkan.',
    features: ['Area Tenda', 'Bonio-Bonio', 'Campfire', 'Outdoor Activities']
  },
  {
    title: 'Paintball',
    icon: Target,
    color: 'from-red-500 to-rose-600',
    image: '/images/Rafting/webp/7.webp',
    description: 'Uji strategi dan kerjasama tim dengan permainan paintball yang seru dan menegangkan!',
    features: ['Peralatan Lengkap', 'Instructor', 'Berbagai Game Mode', 'Cocok untuk Team Building']
  }
]

const facilities = [
  { icon: MapPin, label: 'Titik Kumpul Rafting', desc: 'Basecamp dengan fasilitas lengkap' },
  { icon: Car, label: 'Lahan Parkir Luas', desc: 'Tempat parkir yang memadai' },
  { icon: Trees, label: 'Lapangan Outdoor', desc: 'Area untuk outbound dan games' },
]

export function ProductSection() {
  return (
    <section id="produk" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Products */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">
              Produk & Layanan
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nikmati Berbagai Aktivitas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Dari rafting hingga cafe, kami punya semua yang Anda butuhkan untuk liburan sempurna
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {products.map((product, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${product.color} p-2 rounded-xl`}>
                    <product.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{product.title}</h3>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <ul className="space-y-1">
                    {product.features.map((feature, j) => (
                      <li key={j} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="text-emerald-500">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Facilities */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-700 border-teal-200 mb-4 px-4 py-2">
              Fasilitas
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Lengkapi Kenyamanan Anda
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {facilities.map((facility, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-teal-50 to-emerald-50 text-center hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                    <facility.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">{facility.label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{facility.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
