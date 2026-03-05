'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  HardHat,
  Users,
  Heart,
  CheckCircle2,
  Clock,
  UserCheck,
  FileCheck
} from 'lucide-react'
import { ScrollReveal } from './Animations'

const safetyFeatures = [
  {
    icon: HardHat,
    title: 'Peralatan Standar',
    desc: 'Helm, pelampung (life jacket), dan dayung berkualitas standar internasional.',
    color: 'emerald'
  },
  {
    icon: Users,
    title: 'Tim Rescue',
    desc: 'Tim rescue terlatih yang siap siaga di setiap titik jeram kritikal.',
    color: 'teal'
  },
  {
    icon: UserCheck,
    title: 'Pemandu Ahli',
    desc: 'Pemandu lokal profesional dengan jam terbang tinggi di Sungai Cisadane.',
    color: 'emerald'
  },
  {
    icon: FileCheck,
    title: 'Safety Briefing',
    desc: 'Prosedur penjelasan keamanan mendetail sebelum memulai pengarungan.',
    color: 'teal'
  },
]

export function SafetySection() {
  return (
    <section id="keamanan" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-20">
            <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 mb-4 px-5 py-2 uppercase tracking-[0.2em] font-black text-[10px]">
              <Shield className="h-3 w-3 mr-2" />
              SECURITY & STANDARDS
            </Badge>
            <h2 className="text-3xl md:text-6xl font-black text-emerald-950 mb-4 md:mb-6 font-outfit uppercase tracking-tighter leading-none">
              KESELAMATAN ADALAH <br /> <span className="text-emerald-500">PRIORITAS UTAMA</span>
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg font-medium leading-relaxed">
              Kami menetapkan standar keamanan yang melampaui ekspektasi. Setiap detik petualangan Anda dilindungi oleh sistem keamanan berlapis dan tim profesional.
            </p>
          </div>
        </ScrollReveal>

        {/* Safety Features - Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {safetyFeatures.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Card className="relative group border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden h-full rounded-[2.5rem] p-4 card-shine">
                {/* Decorative float element */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100 transition-colors duration-500" />

                <CardContent className="pt-8 pb-6 md:pt-10 md:pb-8 px-6 text-center relative z-10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mx-auto mb-6 md:mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-emerald-500/10 border border-emerald-100/50 ${feature.color === 'emerald' ? 'bg-emerald-950 text-emerald-400' : 'bg-emerald-500 text-white'}`}>
                    <feature.icon className="h-8 w-8 md:h-10 md:w-10" />
                  </div>

                  <h3 className="font-black text-xl text-emerald-950 mb-4 font-outfit uppercase tracking-tight leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500 text-sm font-medium leading-relaxed px-2">
                    {feature.desc}
                  </p>

                  <div className="mt-8 pt-6 border-t border-emerald-50">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Verified System</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Confidence Banner */}
        <ScrollReveal delay={400}>
          <div className="mt-16 md:mt-24 p-1 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 shadow-2xl overflow-hidden group">
            <div className="bg-white rounded-[2.4rem] md:rounded-[2.9rem] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative">
              <div className="absolute top-0 right-0 w-64 h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05),transparent_70%)]" />

              <div className="flex items-center gap-4 md:gap-6 relative z-10 text-center md:text-left flex-col md:flex-row">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-950 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 animate-float shadow-2xl">
                  <Shield className="h-8 w-8 md:h-10 md:w-10 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xl md:text-3xl font-black text-emerald-950 font-outfit uppercase tracking-tight mb-2">SIAP BERPETUALANG DENGAN TENANG?</h4>
                  <p className="text-gray-500 font-medium text-base md:text-lg">Keamanan Anda adalah komitmen tanpa syarat bagi tim kami.</p>
                </div>
              </div>

              <div className="relative z-10 flex-shrink-0">
                <div className="flex items-center gap-4 bg-emerald-50 px-6 py-4 rounded-2xl border border-emerald-100">
                  <div className="text-center">
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Insurance</p>
                    <p className="text-xl font-black text-emerald-950 font-outfit">COVERED</p>
                  </div>
                  <div className="w-px h-8 bg-emerald-200" />
                  <div className="text-center">
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Support</p>
                    <p className="text-xl font-black text-emerald-950 font-outfit">24/7 LIVE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
