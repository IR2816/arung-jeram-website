'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
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
    title: 'Peralatan Berkualitas',
    desc: 'Peralatan arung jeram berkualitas tinggi dengan tim rescue terlatih untuk keselamatan Anda',
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
]

const differentiators = [
  { label: 'Pilihan Paket', value: '4 Paket', desc: 'Fun Rafting, Family Trip, Adventure Trip, dan Longtrip' },
  { label: 'Jalur Terpanjang', value: '12 KM', desc: 'Adventure Trip & Longtrip untuk pengarungan penuh' },
  { label: 'Kapasitas', value: '6 Orang', desc: '1 perahu = 6 orang. Grup besar pakai beberapa perahu' },
  { label: 'Jam Operasional', value: 'Setiap Hari', desc: 'Buka 7 hari seminggu untuk Anda' },
]

export function WhyChooseUsSection() {
  return (
    <section id="tentang" className="py-20 md:py-32 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20 space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] rounded-full backdrop-blur-sm shadow-sm inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Keunggulan Kami
            </Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tighter uppercase font-outfit max-w-3xl mx-auto leading-tight">
              Pilihan Tepat Untuk <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Petualangan Anda</span>
            </h2>
            <p className="text-muted-foreground/80 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
              Lebih dari sekadar rafting. Kami menyediakan pengalaman petualangan yang aman, seru, dan berkesan dengan standar profesional.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-4 md:gap-6 mb-16">
          {/* Main Feature - Spans 2x2 on desktop */}
          <ScrollReveal className="md:col-span-2 md:row-span-2 group">
            <div className="h-full relative overflow-hidden rounded-[2.5rem] bg-emerald-950 text-white p-8 md:p-12 shadow-2xl transition-transform duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-emerald-400/20 group-hover:scale-150 transition-all duration-700 ease-out" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -ml-24 -mb-24 group-hover:bg-teal-400/20 group-hover:scale-150 transition-all duration-700 ease-out" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Shield className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight leading-tight font-outfit uppercase">
                    Keamanan & <br/>Peralatan Standar
                  </h3>
                  <p className="text-emerald-100/70 text-lg leading-relaxed max-w-md font-medium">
                    Peralatan arung jeram berkualitas tinggi dan tim rescue profesional bersertifikat. Keselamatan Anda adalah prioritas utama di setiap arus.
                  </p>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="w-12 h-12 rounded-full border-2 border-emerald-950 bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center text-[10px] font-black shadow-lg shadow-black/20">
                        PRO
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Tim Rescue Sertifikasi</span>
                    <span className="text-xs font-medium text-emerald-400/80">Siaga di titik rawan</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 2 - Local Expertise */}
          <ScrollReveal className="md:col-span-1 md:row-span-1">
            <div className="h-full relative overflow-hidden rounded-[2.5rem] bg-white border border-border/50 p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-2 group group-hover:border-emerald-500/20">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-inner">
                    <Users className="h-7 w-7 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-outfit uppercase tracking-tight">Pemandu Lokal Berpengalaman</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">Menguasai setiap lekuk dan jeram Sungai Cisadane secara mendalam.</p>
                </div>
                <div className="absolute bottom-4 right-6 text-6xl font-black text-black/5 group-hover:text-emerald-500/10 transition-colors duration-500 select-none">
                  01
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3 - Location */}
          <ScrollReveal className="md:col-span-1 md:row-span-1">
            <div className="h-full relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-50 to-emerald-50/50 border border-teal-100 p-8 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-lg shadow-teal-500/5 hover:shadow-teal-500/15">
              <div>
                <div className="w-14 h-14 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <MapPin className="h-7 w-7 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold text-teal-950 mb-3 font-outfit uppercase tracking-tight">Lokasi Strategis</h4>
                <p className="text-teal-800/70 text-sm leading-relaxed font-medium">Kawasan hijau Lembah Cisadane yang menenangkan & mudah diakses.</p>
              </div>
              <div className="absolute bottom-4 right-6 text-6xl font-black text-teal-900/5 group-hover:text-teal-600/10 transition-colors duration-500 select-none">
                02
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Section with Glass Effect */}
        <ScrollReveal>
          <div className="bg-background/60 backdrop-blur-2xl rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border border-border/50 transition-all duration-700 hover:shadow-emerald-500/10 hover:border-emerald-500/20 group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 relative z-10">
              {differentiators.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative mb-3">
                    <div className="absolute -inset-4 bg-emerald-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100" />
                    <p className="relative text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-800 to-emerald-600 transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-default font-outfit uppercase tracking-tighter">
                      {item.value}
                    </p>
                  </div>
                  <p className="text-emerald-700 font-extrabold text-sm uppercase tracking-[0.2em] mb-2">{item.label}</p>
                  <p className="text-muted-foreground/80 font-medium text-xs leading-relaxed max-w-[200px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
