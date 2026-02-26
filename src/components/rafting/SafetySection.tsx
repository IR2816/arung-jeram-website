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
    title: 'Peralatan Safety Standar',
    desc: 'Helm, pelampung (life jacket), dan dayung berkualitas standar industri wisata air.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Tim Rescue Terlatih',
    desc: 'Tim rescue terlatih dan berpengalaman siap siaga di setiap titik jalur rafting.',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    icon: UserCheck,
    title: 'Pemandu Lokal Terlatih',
    desc: 'Pemandu lokal yang telah mengikuti pelatihan keamanan air.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: FileCheck,
    title: 'Safety Briefing',
    desc: 'Penjelasan lengkap sebelum rafting tentang teknik mendayung dan prosedur keselamatan.',
    color: 'from-amber-400 to-orange-500'
  },
]

export function SafetySection() {
  return (
    <section id="keamanan" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4 px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Keamanan & Standar
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Keselamatan Peserta Adalah Prioritas
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Kami berkomitmen memberikan pengalaman rafting yang seru dengan standar keamanan internasional dan equipment berkualitas.
            </p>
          </div>
        </ScrollReveal>

        {/* Safety Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {safetyFeatures.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center hover:-translate-y-1 h-full">
                <CardContent className="pt-8 pb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
