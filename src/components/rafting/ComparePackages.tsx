'use client'

import { Check, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from '@/components/rafting/Animations'

const features = [
  { name: 'Jarak', values: ['1 KM', '5 KM', '12 KM', '12 KM'] },
  { name: 'Waktu', values: ['15 menit', '1 jam', '2.5 jam', '2.5 jam'] },
  { name: 'Welcome Drink', values: [false, true, true, true] },
  { name: 'Kelapa Bakar', values: [false, true, true, true] },
  { name: 'Transport Lokal', values: [true, true, true, true] },
  { name: 'Saung, Parkir, Musholla', values: [true, true, true, true] },
  { name: 'Guide SNI & Rescue', values: [true, true, true, true] },
  { name: 'Harga', values: ['100k', '150k', '250k', '300k'] },
]

const packages = ['Fun Rafting', 'Family Trip', 'Adventure Trip', 'Longtrip']

export function ComparePackages() {
  return (
    <section id="bandingkan" className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2 text-xs uppercase tracking-widest font-bold">
              Bandingkan
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tighter font-outfit uppercase">
              Komparasi Paket Rafting
            </h2>
            <p className="text-muted-foreground font-medium max-w-2xl mx-auto text-lg leading-relaxed">
              Pilih paket yang paling sesuai dengan durasi dan fasilitas yang Anda inginkan bersama Sembar Adventure.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="w-full max-w-5xl mx-auto overflow-x-auto pb-4 scrollbar-hide">
            <div className="min-w-[800px] bg-white rounded-[2rem] border border-emerald-100 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)] overflow-hidden relative">
              
              {/* Glass subtle pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />
              
              <table className="w-full text-left border-collapse relative z-10">
                <thead>
                  <tr>
                    <th className="p-6 bg-gray-50/80 border-b border-r border-emerald-100/50 w-1/5 backdrop-blur-sm">
                      <span className="text-emerald-900 font-extrabold text-lg uppercase tracking-wide">Fasilitas</span>
                    </th>
                    {packages.map((pkg, i) => (
                      <th key={pkg} className={`p-6 bg-gray-50/80 border-b border-emerald-100/50 text-center w-[20%] backdrop-blur-sm ${i < packages.length - 1 ? 'border-r' : ''}`}>
                        <span className="text-emerald-700 font-black text-lg uppercase tracking-wider block">{pkg}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-100/50">
                  {features.map((feature, i) => (
                    <tr key={feature.name} className="hover:bg-emerald-50/30 transition-colors group">
                      <td className="p-6 font-bold text-gray-700 bg-white/50 backdrop-blur-sm border-r border-emerald-100/50">
                        {feature.name}
                      </td>
                      {feature.values.map((val, idx) => (
                        <td key={`${feature.name}-${idx}`} className={`p-6 text-center bg-white/50 backdrop-blur-sm group-hover:bg-emerald-50/20 transition-colors ${idx < feature.values.length - 1 ? 'border-r border-emerald-100/50' : ''}`}>
                          {typeof val === 'boolean' ? (
                            val ? (
                              <div className="flex justify-center">
                                <div className="p-2 bg-emerald-100 rounded-full">
                                  <Check className="h-5 w-5 text-emerald-600" strokeWidth={3} />
                                </div>
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <div className="p-2 bg-gray-100 rounded-full">
                                  <X className="h-5 w-5 text-gray-400" strokeWidth={3} />
                                </div>
                              </div>
                            )
                          ) : (
                            <span className={`font-black uppercase tracking-wide ${feature.name === 'Harga' ? 'text-xl text-emerald-600' : 'text-gray-900'}`}>
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
