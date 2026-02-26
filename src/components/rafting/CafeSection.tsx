'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Coffee, Utensils, Clock, MapPin, Wifi, Music } from 'lucide-react'
import { ScrollReveal } from './Animations'

const menuItems = [
  {
    category: 'Gancaran Ringan',
    type: 'food',
    items: [
      { name: 'Mix Platter', price: '18K', desc: 'Kentang, sosis, nugget' },
      { name: 'Kebab', price: '15K' },
      { name: 'Roti Bakar', desc: 'Varian: coklat 12K, keju 13K, coklat keju 15K' },
      { name: 'Pisang Goreng', price: '15K', desc: 'Coklat, keju, susu' },
      { name: 'Pempek', note: 'Khas Palembang - coming soon' },
    ],
  },
  {
    category: 'Panganan Kenyang',
    type: 'food',
    items: [
      { name: 'Nasi Goreng', price: '15K', desc: 'Nasi goreng + telur' },
      { name: 'Mie', price: '12K', desc: 'Mie instan + telur + sayur' },
      { name: 'Makanan Tradisional', note: 'Ayam betutu - coming soon' },
    ],
  },
  {
    category: 'Turta Penyejuk',
    type: 'drink',
    items: [
      { name: 'Teh', price: '5K', desc: 'Teh panas 3K, es teh 4K, es teh manis 5K' },
      { name: 'Kopi', price: '7K', desc: 'Kopi panas 5K, es kopi 7K' },
      { name: 'Coklat', price: '5K', desc: 'Ovaltine 10K, Milo 10K, Beng-beng 7K' },
      { name: 'Air Mineral', price: '5K' },
    ],
  },
]

const facilities = [
  { icon: Wifi, label: 'Free WiFi', color: 'from-amber-400 to-orange-500' },
  { icon: Music, label: 'Live Music Weekend', color: 'from-pink-400 to-rose-500' },
  { icon: Clock, label: 'Buka Setiap Hari', color: 'from-emerald-400 to-teal-500' },
  { icon: MapPin, label: 'View Sungai', color: 'from-cyan-400 to-blue-500' },
]

export function CafeSection() {
  return (
    <section id="cafe" className="py-24 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-4 px-4 py-2">
              ☕ Warkop Sembah
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Santai Sebelum atau{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Sesudah Petualangan
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nikmati kopi tradisional dan makanan lezat di Warkop Sembah. 
              Tempat yang sempurna untuk bersantai dengan view sungai yang asri.
            </p>
          </div>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal>
          <div className="relative h-[450px] rounded-3xl overflow-hidden mb-16 shadow-2xl group">
            <Image
              src="/images/cafe/warkop-hero.webp"
              alt="Warkop Sembah Interior"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <h3 className="text-white text-3xl font-bold mb-3">Suasana Hangat & Nyaman</h3>
              <p className="text-white/90 text-lg">Tempat ngopi dengan nuansa tradisional dan pemandangan alam yang menenangkan</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Facilities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-2 group overflow-hidden">
                <CardContent className="py-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${facility.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <facility.icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-700">{facility.label}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Menu */}
          <ScrollReveal direction="left">
            <Card className="border-0 shadow-2xl bg-white h-full overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-2xl shadow-lg">
                    <Utensils className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Menu Favorit</h3>
                </div>

                {menuItems.map((category, i) => (
                  <div key={i} className="mb-8 last:mb-0">
                    <h4 className="font-bold text-amber-700 mb-4 flex items-center gap-2 text-lg">
                      {category.type === 'drink' ? (
                        <Coffee className="h-5 w-5" />
                      ) : (
                        <Utensils className="h-5 w-5" />
                      )}
                      {category.category}
                    </h4>
                    <div className="space-y-4">
                      {category.items.map((item, j) => (
                        <div key={j} className="flex justify-between items-start border-b border-amber-100 pb-3 hover:bg-amber-50 px-2 py-1 rounded-lg transition-colors -mx-2">
                          <div>
                            <p className="font-semibold text-gray-800">{item.name}</p>
                            {item.desc && <p className="text-sm text-gray-500">{item.desc}</p>}
                            {item.note && <p className="text-sm text-amber-600 italic">{item.note}</p>}
                          </div>
                          <span className="font-bold text-amber-600 whitespace-nowrap ml-4 text-lg">{item.price || '-'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Info & Image */}
          <div className="space-y-8">
            <ScrollReveal direction="right" delay={100}>
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/cafe/warkop-menu.webp"
                  alt="Menu Warkop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Jam Operasional</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-lg">
                      <span className="text-amber-100">Senin - Kamis</span>
                      <span className="font-bold">10:00 - 16:30</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="text-amber-100">Jumat</span>
                      <span className="font-bold text-amber-200">Tutup</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="text-amber-100">Sabtu - Minggu</span>
                      <span className="font-bold">10:00 - 16:30</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/30">
                    <p className="text-amber-100 flex items-center gap-2">
                      <Music className="h-5 w-5" />
                      🎵 Live Music: Setiap Sabtu & Minggu
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
              <Card className="border-0 shadow-xl bg-white overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Lokasi Sembah Adventure</h3>
                  <p className="text-gray-600 flex items-start gap-3 leading-relaxed">
                    <MapPin className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                    <span>
                      Jl. Lembah Cisadane Jl. H. Miing No.1a<br />
                      RT.4/RW.2, Putat Nutug, Kec. Ciseeng<br />
                      Kabupaten Bogor, Jawa Barat 16120
                    </span>
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/SEMBAR+ADVENTURE+(Rafting,+Outbond,Cafe)/@-6.4684479,106.6618818,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69dd0079b77229:0x7620c15d8f94c653!8m2!3d-6.4684532!4d106.6644567!16s%2Fg%2F11yrgnzq6v?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full mt-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-full py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <MapPin className="h-5 w-5 mr-2" />
                      Lihat di Google Maps
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
