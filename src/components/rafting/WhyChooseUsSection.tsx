'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Award, 
  Users, 
  MapPin, 
  Clock, 
  HeartHandshake,
  ThumbsUp,
  Sparkles
} from 'lucide-react'
import { ScrollReveal } from './Animations'

const trustPoints = [
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Standar keamanan internasional dengan peralatan berkualitas dan tim rescue terlatih',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Pemandu Lokal',
    desc: 'Pemandu bersertifikat yang menguasai karakter Sungai Cisadane dengan baik',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    icon: MapPin,
    title: 'Lokasi Strategis',
    desc: 'Di kawasan Lembah Cisadane yang asri, mudah dijangkau dari Jakarta & Bogor',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Award,
    title: 'Harga Transparan',
    desc: 'Tanpa biaya tersembunyi. Harga sudah termasuk perahu, peralatan, dan pemandu',
    color: 'from-amber-400 to-orange-500'
  },
]

const differentiators = [
  { label: 'Jalur Rafting', value: '3 Pilihan', desc: 'Family Trip, Panorama Trip, dan Adventure Trip' },
  { label: 'Lintasan Terpanjang', value: '12 KM', desc: 'Adventure Trip untuk adrenalin maksimal' },
  { label: 'Fasilitas', value: 'Lengkap', desc: 'Cafe, camping, paintball, dan outbound' },
  { label: 'Jam Operasional', value: 'Fleksibel', desc: 'Buka 6 hari dalam seminggu' },
]

const testimonials = [
  {
    name: 'Budi Santoso',
    location: 'Jakarta',
    rating: 5,
    comment: 'Pengalaman rafting yang seru! Pemandu terlatih dan lokasinya indah. Recommended untuk keluarga!',
  },
  {
    name: 'Siti Rahayu',
    location: 'Bogor',
    rating: 5,
    comment: 'Pertama kali rafting dan langsung ketagihan! Safety briefing sangat jelas, jadi merasa aman sepanjang perjalanan.',
  },
  {
    name: 'Ahmad Fauzi',
    location: 'Depok',
    rating: 5,
    comment: 'Trip Adventure-nya mantap! Jeram-nya menantang tapi tetap aman. Cafe-nya juga enak untuk bersantai setelah rafting.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="tentang" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Kenapa Memilih Kami?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sembah Adventure, Pilihan Tepat untuk Petualangan Anda
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lebih dari sekadar rafting. Kami menyediakan pengalaman petualangan yang aman, seru, dan berkesan.
            </p>
          </div>
        </ScrollReveal>

        {/* Trust Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPoints.map((point, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center hover:-translate-y-2 h-full group overflow-hidden">
                <CardContent className="pt-8 pb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <point.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-sm">{point.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats/Differentiators */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {differentiators.map((item, i) => (
                <div key={i} className="text-center text-white">
                  <p className="text-3xl md:text-4xl font-bold mb-1">{item.value}</p>
                  <p className="text-emerald-200 text-sm mb-1">{item.label}</p>
                  <p className="text-emerald-100 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Apa Kata Mereka?</h3>
            <p className="text-gray-600">Pengalaman nyata dari para petualang</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">&ldquo;{t.comment}&rdquo;</p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
