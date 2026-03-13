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
  const whatsappUrl = getWhatsAppUrl('Halo Sembar Adventure, saya ingin menambahkan dokumentasi saat rafting!')

  return (
    <section id="addon" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-200 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-200 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Add-on Rafting - Enhanced Design */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 mb-4 px-4 py-2 uppercase tracking-widest font-bold">
              <Camera className="h-4 w-4 mr-2" />
              DOKUMENTASI PREMIUM
            </Badge>
            <h2 className="text-3xl md:text-6xl font-black text-emerald-950 mb-4 md:mb-6 font-outfit uppercase tracking-tighter leading-none">
              ABADIKAN <span className="text-emerald-500">MOMEN</span> BERHARGA
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
              Dapatkan foto dan video profesional dengan peralatan berkualitas tinggi untuk mengingat setiap detik petualangan Anda.
            </p>
          </div>
        </ScrollReveal>

        {/* Documentation Packages - Premium Card Design */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {raftingAddons.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className={`relative border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group h-full rounded-[2.5rem] card-shine ${item.popular ? 'border-emerald-500 ring-1 ring-emerald-500/20' : ''}`}>
                  {item.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-emerald-600 text-white text-center py-2 text-[10px] font-black uppercase tracking-[0.2em] z-10">
                      <Sparkles className="h-3 w-3 inline-block mr-1 mb-0.5" />
                      Paling Populer
                    </div>
                  )}

                  <CardContent className={`p-6 md:p-8 ${item.popular ? 'pt-12 md:pt-16' : ''}`}>
                    {/* Icon & Title */}
                    <div className="text-center mb-6 md:mb-8">
                      <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl md:rounded-[2rem] flex items-center justify-center mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg ${item.popular ? 'bg-emerald-600 shadow-emerald-200' : 'bg-emerald-50 border border-emerald-100'}`}>
                        <item.icon className={`h-8 w-8 md:h-10 md:w-10 ${item.popular ? 'text-white' : 'text-emerald-600'}`} />
                      </div>
                      <h3 className="font-black text-xl md:text-2xl text-emerald-950 font-outfit uppercase tracking-tight">{item.name}</h3>
                      <p className="text-gray-500 text-xs md:text-sm mt-2 md:mt-3 font-medium px-4">{item.desc}</p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6 md:mb-8 bg-emerald-50/50 py-4 md:py-6 rounded-2xl md:rounded-3xl border border-emerald-100/50">
                      <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest block mb-1">Mulai dari</span>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-sm md:text-lg font-bold text-emerald-800">Rp</span>
                        <span className={`text-3xl md:text-5xl font-black font-outfit ${item.popular ? 'text-emerald-600' : 'text-emerald-950'}`}>{item.price}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-10 px-2">
                      {item.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.popular ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-emerald-500'}`}>
                            <CheckCircle className="h-3 w-3" />
                          </div>
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
                      <Button className={`w-full h-14 rounded-2xl transition-all duration-300 font-black uppercase tracking-widest text-xs group ${item.popular ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-500/20' : 'bg-emerald-950 hover:bg-black text-white'}`}>
                        PESAN SEKARANG
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Divider Area */}
        <div className="relative mb-16 md:mb-24 overflow-hidden py-8 md:py-12">
          <div className="absolute top-1/2 left-0 w-full h-px bg-emerald-100" />
          <div className="relative flex justify-center">
            <Badge variant="outline" className="px-6 md:px-8 py-2 md:py-3 bg-white text-emerald-800 border-2 border-emerald-100 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs shadow-sm">
              Tanpa perlu booking rafting
            </Badge>
          </div>
        </div>

        {/* Cafe Menu - Ultra Modern Design */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-amber-500/10 text-amber-600 border-amber-200 mb-4 px-4 py-2 uppercase tracking-widest font-bold">
              <Coffee className="h-4 w-4 mr-2" />
              SEMBAR SUNSET CAFE
            </Badge>
            <h2 className="text-3xl md:text-6xl font-black text-emerald-950 mb-4 md:mb-6 font-outfit uppercase tracking-tighter leading-none">
              MENU <span className="text-amber-500">SIGNATURE</span> KAMI
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
              Nikmati hidangan lezat dan kopi hangat di tepi sungai. Tersedia untuk umum tanpa harus mengikuti aktivitas rafting.
            </p>
          </div>
        </ScrollReveal>

        {/* Cafe Cards - Three Columns Premium */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Gancaran Ringan Card */}
          <ScrollReveal delay={100}>
            <Card className="border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group h-full flex flex-col rounded-[2.5rem]">
              <div className="relative bg-emerald-950 p-6 md:p-8 text-white text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-12 -mt-12 md:-mr-16 md:-mt-16" />
                <div className="relative z-10">
                  <span className="text-emerald-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-1 md:mb-2 block">Appetizers</span>
                  <h3 className="text-xl md:text-2xl font-black font-outfit uppercase tracking-tight">GANCARAN RINGAN</h3>
                </div>
              </div>
              <CardContent className="p-4 md:p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-emerald-50/30">
                <ul className="space-y-3 md:space-y-6 flex-1">
                  {cafeMenu.appetizers.map((item, j) => (
                    <li key={j} className="flex justify-between items-start gap-4 group/item">
                      <div className="flex-1">
                        <p className="font-bold text-emerald-950 group-hover/item:text-emerald-600 transition-colors uppercase text-xs md:text-sm tracking-tight">{item.name}</p>
                        {item.desc && <p className="text-[10px] md:text-[11px] text-gray-400 font-medium leading-tight mt-1">{item.desc}</p>}
                      </div>
                      <div className="text-right">
                        <span className="font-black text-emerald-700 whitespace-nowrap text-xs md:text-sm font-outfit">
                          {typeof item.price === 'string' && item.price.includes('Coming') ?
                            <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-1 rounded-md uppercase tracking-widest font-bold">SOON</span> :
                            `IDR ${item.price}`
                          }
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Panganan Kenyang Card */}
          <ScrollReveal delay={150}>
            <Card className="border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group h-full flex flex-col rounded-[2.5rem] transform md:-translate-y-4">
              <div className="relative bg-emerald-600 p-6 md:p-8 text-white text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="relative z-10">
                  <span className="text-emerald-100 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-1 md:mb-2 block">Main Course</span>
                  <h3 className="text-xl md:text-2xl font-black font-outfit uppercase tracking-tight">PANGANAN KENYANG</h3>
                </div>
              </div>
              <CardContent className="p-4 md:p-8 flex-1 flex flex-col bg-white">
                <ul className="space-y-3 md:space-y-6 flex-1">
                  {cafeMenu.mainCourse.map((item, j) => (
                    <li key={j} className="flex justify-between items-start gap-4 group/item">
                      <div className="flex-1">
                        <p className="font-bold text-emerald-950 group-hover/item:text-emerald-600 transition-colors uppercase text-sm tracking-tight">{item.name}</p>
                        {item.desc && <p className="text-[11px] text-gray-400 font-medium leading-tight mt-1">{item.desc}</p>}
                      </div>
                      <div className="text-right">
                        <span className="font-black text-emerald-700 whitespace-nowrap text-sm font-outfit">
                          {typeof item.price === 'string' && item.price.includes('Coming') ?
                            <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-1 rounded-md uppercase tracking-widest font-bold">SOON</span> :
                            `IDR ${item.price}`
                          }
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-emerald-50 text-center">
                  <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest flex items-center justify-center gap-2">
                    <Sparkles className="h-3 w-3" /> BEST SELLER <Sparkles className="h-3 w-3" />
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Tirta Penyejuk Card */}
          <ScrollReveal delay={200}>
            <Card className="border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group h-full flex flex-col rounded-[2.5rem]">
              <div className="relative bg-emerald-950 p-6 md:p-8 text-white text-center overflow-hidden">
                <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-teal-500/10 rounded-full blur-2xl -ml-12 -mb-12 md:-ml-16 md:-mb-16" />
                <div className="relative z-10">
                  <span className="text-emerald-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-1 md:mb-2 block">Beverages</span>
                  <h3 className="text-xl md:text-2xl font-black font-outfit uppercase tracking-tight">TIRTA PENYEJUK</h3>
                </div>
              </div>
              <CardContent className="p-4 md:p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-emerald-50/30">
                <ul className="space-y-3 md:space-y-6 flex-1">
                  {cafeMenu.beverages.map((item, j) => (
                    <li key={j} className="flex justify-between items-start gap-4 group/item">
                      <div className="flex-1">
                        <p className="font-bold text-emerald-950 group-hover/item:text-emerald-600 transition-colors uppercase text-sm tracking-tight">{item.name}</p>
                        {item.desc && <p className="text-[11px] text-gray-400 font-medium leading-tight mt-1">{item.desc}</p>}
                      </div>
                      <div className="text-right">
                        <span className="font-black text-emerald-700 whitespace-nowrap text-sm font-outfit">
                          {typeof item.price === 'string' && item.price.includes('Coming') ?
                            <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-1 rounded-md uppercase tracking-widest font-bold">SOON</span> :
                            `IDR ${item.price}`
                          }
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Info Box - Enhanced Ultra Premium */}
        <ScrollReveal delay={300}>
          <div className="mt-16 md:mt-24 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-emerald-950 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 max-w-4xl border border-white/10 shadow-3xl relative overflow-hidden group">
              {/* Shine effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shine" />

              <div className="bg-emerald-500 w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center shadow-2xl relative z-10 flex-shrink-0 animate-float">
                <Coffee className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <div className="text-center md:text-left relative z-10">
                <p className="font-black text-white text-xl md:text-2xl font-outfit uppercase tracking-tight mb-2">Cafe tersedia setiap hari!</p>
                <p className="text-emerald-100/60 font-medium text-base md:text-lg leading-relaxed">
                  Terbuka untuk umum. Nikmati suasana alam yang asri sambil menikmati hidangan kami.
                </p>
              </div>
              <div className="md:ml-auto relative z-10 w-full md:w-auto">
                <a
                  href={getWhatsAppUrl('Halo Sembar Adventure, saya ingin menanyakan meja di Cafe')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full md:w-auto border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-xl h-14 px-8 font-black uppercase tracking-widest text-xs transition-all duration-300">
                    INFO CAFE
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
