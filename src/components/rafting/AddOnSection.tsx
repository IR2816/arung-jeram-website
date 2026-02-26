'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Camera, Coffee, UtensilsCrossed, CheckCircle, Sparkles, ArrowRight, ImageIcon, Video, Package } from 'lucide-react'
import { ScrollReveal } from './Animations'
import { getWhatsAppUrl } from '@/lib/whatsapp'

// Add-on untuk rafting (harus booking)
const raftingAddons = [
  { 
    name: 'Paket 10 Foto', 
    price: '150.000', 
    desc: '10 foto dari petualangan rafting Anda yang siap untuk dibagikan',
    icon: ImageIcon,
    features: ['10 foto', 'Edit warna', 'Via Google Drive'],
    popular: false 
  },
  { 
    name: 'Clip Video', 
    price: '200.000', 
    desc: 'Video clip dari momen seru rafting Anda',
    icon: Video,
    features: ['Clip video', 'Musik & efek', 'Siap upload'],
    popular: false 
  },
  { 
    name: 'Paket Lengkap', 
    price: '300.000', 
    desc: '10 foto + clip video - HEMAT Rp 50.000!',
    icon: Package,
    features: ['10 foto', 'Clip video', 'HEMAT 50K!'],
    popular: true 
  },
]

// Menu cafe - bisa dipesan langsung tanpa booking
const cafeMenu = {
  appetizers: [
    { name: 'Mix Platter', price: '18.000', desc: 'Pilihan premium appetizer' },
    { name: 'Kebab', price: '15.000', desc: '' },
    { name: 'Roti Bakar', price: '12.000', desc: 'Roti bakar keju' },
    { name: 'Pisang Goreng', price: '15.000', desc: 'Coklat, Keju, atau Susu' },
    { name: 'Pempek', price: 'Coming Soon', desc: 'Khas Palembang' },
  ],
  mainCourse: [
    { name: 'Nasi Goreng', price: '15.000', desc: '' },
    { name: 'Mie', price: '12.000', desc: 'Mie instan + Telur + Sayur' },
    { name: 'Makanan Tradisional', price: 'Coming Soon', desc: 'Ayam Betutu' },
  ],
  beverages: [
    { name: 'Teh', price: '5.000', desc: 'Teh panas, Es Teh' },
    { name: 'Kopi', price: '7.000', desc: 'Kopi panas, Es Kopi' },
    { name: 'Coklat', price: '5.000', desc: 'Ovaltine, Milo, atau Beng-beng' },
    { name: 'Air Mineral', price: '5.000', desc: '' },
  ]
}

export function AddOnSection() {
  const whatsappUrl = getWhatsAppUrl('Halo Sembah Adventure, saya ingin menambahkan dokumentasi saat rafting!')

  return (
    <section id="addon" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Add-on Rafting - Enhanced Design */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border-violet-200 mb-4 px-4 py-2">
              <Camera className="h-4 w-4 mr-2" />
              Dokumentasi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Abadikan Momen Berharga
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Dapatkan foto dan video profesional untuk mengingat pengalaman rafting Anda
            </p>
          </div>
        </ScrollReveal>

        {/* Documentation Packages - Premium Card Design */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="grid md:grid-cols-3 gap-6">
            {raftingAddons.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group h-full ${item.popular ? 'ring-2 ring-violet-500' : 'border border-gray-100'}`}>
                  {item.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-center py-2 text-sm font-semibold z-10">
                      <Sparkles className="h-4 w-4 inline-block mr-1" />
                      Paling Populer
                    </div>
                  )}
                  
                  <CardContent className={`p-6 ${item.popular ? 'pt-14' : ''}`}>
                    {/* Icon & Title */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${item.popular ? 'bg-gradient-to-br from-violet-500 to-purple-600' : 'bg-gradient-to-br from-violet-100 to-purple-100'}`}>
                        <item.icon className={`h-8 w-8 ${item.popular ? 'text-white' : 'text-violet-600'}`} />
                      </div>
                      <h3 className="font-bold text-xl text-gray-800">{item.name}</h3>
                      <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
                    </div>
                    
                    {/* Price */}
                    <div className="text-center mb-6">
                      <span className="text-sm text-gray-400">Mulai dari</span>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-sm text-gray-500">Rp</span>
                        <span className={`text-4xl font-bold ${item.popular ? 'text-violet-600' : 'text-gray-800'}`}>{item.price}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {item.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className={`h-4 w-4 flex-shrink-0 ${item.popular ? 'text-violet-500' : 'text-green-500'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className={`w-full rounded-xl transition-all duration-300 ${item.popular ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg shadow-violet-500/25' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                        Pesan via WhatsApp
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-[200px]" />
          <Badge variant="outline" className="px-4 py-2 bg-white text-gray-500">
            Tidak perlu booking rafting
          </Badge>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-[200px]" />
        </div>

        {/* Cafe Menu - Enhanced Design */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 border-amber-200 mb-4 px-4 py-2">
              <Coffee className="h-4 w-4 mr-2" />
              Sembar Sunset Cafe
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Menu Cafe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nikmati macam-macam menu langsung di cafe tanpa perlu booking rafting!
            </p>
          </div>
        </ScrollReveal>

        {/* Cafe Cards - Three Columns */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Gancaran Ringan Card */}
          <ScrollReveal delay={100}>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group h-full flex flex-col">
              <div className="relative bg-gradient-to-br from-yellow-500 to-orange-500 p-6 text-white text-center overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold">🥘 Gancaran Ringan</h3>
                  <p className="text-orange-100 text-xs mt-1">Appetizers</p>
                </div>
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {cafeMenu.appetizers.map((item, j) => (
                    <li key={j} className="flex justify-between items-start gap-3 text-sm group/item">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{item.name}</p>
                        {item.desc && <p className="text-xs text-gray-500">{item.desc}</p>}
                      </div>
                      <span className="font-bold text-orange-600 whitespace-nowrap text-sm">{typeof item.price === 'string' && item.price.includes('Coming') ? item.price : `Rp ${item.price}`}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Panganan Kenyang Card */}
          <ScrollReveal delay={150}>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group h-full flex flex-col">
              <div className="relative bg-gradient-to-br from-amber-600 to-orange-600 p-6 text-white text-center overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold">🍚 Panganan Kenyang</h3>
                  <p className="text-orange-100 text-xs mt-1">Main Course</p>
                </div>
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {cafeMenu.mainCourse.map((item, j) => (
                    <li key={j} className="flex justify-between items-start gap-3 text-sm group/item">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{item.name}</p>
                        {item.desc && <p className="text-xs text-gray-500">{item.desc}</p>}
                      </div>
                      <span className="font-bold text-amber-700 whitespace-nowrap text-sm">{typeof item.price === 'string' && item.price.includes('Coming') ? item.price : `Rp ${item.price}`}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Tirta Penyejuk Card */}
          <ScrollReveal delay={200}>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group h-full flex flex-col">
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white text-center overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold">🥤 Tirta Penyejuk</h3>
                  <p className="text-emerald-100 text-xs mt-1">Beverages</p>
                </div>
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {cafeMenu.beverages.map((item, j) => (
                    <li key={j} className="flex justify-between items-start gap-3 text-sm group/item">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{item.name}</p>
                        {item.desc && <p className="text-xs text-gray-500">{item.desc}</p>}
                      </div>
                      <span className="font-bold text-teal-600 whitespace-nowrap text-sm">{typeof item.price === 'string' && item.price.includes('Coming') ? item.price : `Rp ${item.price}`}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Info Box - Enhanced */}
        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-200 rounded-2xl p-6 max-w-2xl shadow-lg shadow-amber-100">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-4 rounded-xl shadow-lg">
                <Coffee className="h-7 w-7 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-800 text-lg">Menu Cafe tersedia setiap hari!</p>
                <p className="text-gray-600">Datang langsung ke cafe tanpa perlu booking rafting</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
