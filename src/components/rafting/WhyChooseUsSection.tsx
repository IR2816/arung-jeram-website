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

export function WhyChooseUsSection() {
  return (
    <section id="tentang" className="py-12 md:py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-100 mb-4 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Kenapa Memilih Kami?
            </Badge>
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Sembar Adventure, Pilihan Tepat untuk Petualangan Anda
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Lebih dari sekadar rafting. Kami menyediakan pengalaman petualangan yang aman, seru, dan berkesan.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 md:gap-6 mb-16">
          {/* Main Feature - Spans 2x2 on desktop */}
          <ScrollReveal className="md:col-span-2 md:row-span-2">
            <div className="h-full relative overflow-hidden rounded-3xl bg-emerald-900 text-white p-8 group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-emerald-500/30 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Safety First Integration</h3>
                  <p className="text-emerald-100/80 text-lg leading-relaxed max-w-md">
                    Standar keamanan internasional dengan peralatan berkualitas tinggi dan tim rescue profesional yang tersertifikasi. Prioritas kami adalah keselamatan Anda di setiap arus.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="w-10 h-10 rounded-full border-2 border-emerald-900 bg-emerald-700 flex items-center justify-center text-[10px] font-bold">Rescuer</div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-emerald-200">100+ Certified Guides</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 2 - Local Expertise */}
          <ScrollReveal className="md:col-span-2 md:row-span-1">
            <div className="h-full relative overflow-hidden rounded-3xl bg-white border border-emerald-100 p-8 shadow-sm hover:shadow-premium transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pemandu Lokal Berpengalaman</h3>
                  <p className="text-gray-600 text-sm">Menguasai setiap lekuk dan jeram Sungai Cisadane sejak 2010.</p>
                </div>
                <div className="text-4xl font-black text-emerald-50/50 group-hover:text-emerald-100 transition-colors">02</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3 - Location */}
          <ScrollReveal className="md:col-span-1 md:row-span-1">
            <div className="h-full relative overflow-hidden rounded-3xl bg-teal-50 border border-teal-100 p-6 flex flex-col justify-between group">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-teal-600" />
              </div>
              <h4 className="font-bold text-teal-900">Lokasi Strategis</h4>
              <p className="text-teal-700/70 text-xs mt-1 leading-relaxed">Kawasan hijau Lembah Cisadane yang menenangkan.</p>
            </div>
          </ScrollReveal>

          {/* Feature 4 - Pricing */}
          <ScrollReveal className="md:col-span-1 md:row-span-1">
            <div className="h-full relative overflow-hidden rounded-3xl bg-emerald-600 text-white p-6 flex flex-col justify-between group">
              <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-4 translate-y-4">
                <Award className="w-24 h-24" />
              </div>
              <h4 className="font-bold text-white text-lg">Harga Transparan</h4>
              <div className="mt-4">
                <span className="text-2xl font-black">All-In</span>
                <p className="text-emerald-100 text-[10px] mt-1">Tanpa biaya tambahan tersembunyi.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Section with Glass Effect */}
        <ScrollReveal>
          <div className="glass rounded-[2rem] p-8 md:p-12 shadow-premium relative overflow-hidden border border-emerald-100/50">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {differentiators.map((item, i) => (
                <div key={i} className="text-center group">
                  <p className="text-4xl md:text-5xl font-black text-emerald-800 mb-2 group-hover:scale-110 transition-transform duration-300 font-outfit">{item.value}</p>
                  <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-gray-400 text-[10px] leading-relaxed px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
