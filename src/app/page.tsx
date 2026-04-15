'use client'

import { Star } from 'lucide-react'
import { Navbar } from '@/components/rafting/Navbar'
import { Footer } from '@/components/rafting/Footer'
import { PackageCard, type PackageType } from '@/components/rafting/PackageCard'
import { GallerySection } from '@/components/rafting/GallerySection'
import { BookingSection } from '@/components/rafting/BookingSection'
import { ContactSection } from '@/components/rafting/ContactSection'
import { SafetySection } from '@/components/rafting/SafetySection'
import { FAQSection } from '@/components/rafting/FAQSection'
import { WhyChooseUsSection } from '@/components/rafting/WhyChooseUsSection'
import { FloatingWhatsApp } from '@/components/rafting/FloatingWhatsApp'
import { WeatherWidget } from '@/components/rafting/WeatherWidget'
import { ScrollReveal } from '@/components/rafting/Animations'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import NextImage from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowRightLeft, MessageCircle } from 'lucide-react'
import { TestimonialCarousel } from '@/components/ui/testimonial'

const testimonials = [
  {
    id: 1,
    name: "Andi Wijaya",
    avatar: "https://i.pravatar.cc/150?u=andi",
    description: "Pemandunya sangat profesional dan ramah. Jeramnya seru, kami merasa aman sepanjang perjalanan. Sangat direkomendasikan untuk keluarga!"
  },
  {
    id: 2,
    name: "Siti Aminah",
    avatar: "https://i.pravatar.cc/150?u=siti",
    description: "Pengalaman rafting yang luar biasa bersama keluarga. Anak-anak sangat senang dan merasa aman dengan pemandu yang berpengalaman."
  },
  {
    id: 3,
    name: "Rizky Pratama",
    avatar: "https://i.pravatar.cc/150?u=rizky",
    description: "Ikut Adventure Trip, jeramnya benar-benar menantang! Tim rescue standby di setiap titik kritis. Puas banget, pasti balik lagi."
  }
]

// 4 paket utama Sembar Adventure
const packages: PackageType[] = [
  {
    id: 'fun-rafting',
    name: 'Fun Rafting',
    slug: 'fun-rafting',
    description: 'Pengarungan ringan 1 KM selama 15 menit. Cocok untuk pemula, anak-anak, dan keluarga. Aman dan menyenangkan.',
    price: 100000,
    duration: '15 menit',
    distance: '1 KM',
    minAge: 6,
    capacity: '6 orang/perahu',
    highlights: [
      'Durasi singkat, sensasi nyata',
      'Cocok untuk anak usia 6 tahun ke atas',
      'Pemandu skipper profesional',
    ],
    inclusion: 'Peralatan arung jeram, Helm, Dayung, Pemandu (Skipper), Tim Rescue, Ruang Ganti, Saung, Musholla, Parkiran',
    exclusion: 'Foto & Video (Rp 100.000/perahu)',
    imageUrl: '/images/Rafting/webp/5.webp',
    featured: false,
  },
  {
    id: 'family-trip',
    name: 'Family Trip',
    slug: 'family-trip',
    description: 'Jalur 5 KM sekitar 1 jam melewati Hutan Cifor dan Jeram Bagol. Pilihan terbaik untuk liburan keluarga.',
    price: 150000,
    duration: '±1 jam',
    distance: '5 KM',
    minAge: 0,
    capacity: '6 orang/perahu',
    highlights: [
      'Hutan Cifor',
      'Jeram Bagol',
      'Cocok untuk semua usia',
    ],
    inclusion: 'Peralatan arung jeram, Helm, Dayung, Pemandu (Skipper), Tim Rescue, Ruang Ganti',
    exclusion: 'Foto & Video (Rp 150.000/perahu)',
    imageUrl: '/images/Rafting/webp/9.webp',
    featured: true,
  },
  {
    id: 'adventure-trip',
    name: 'Adventure Trip',
    slug: 'adventure-trip',
    description: 'Jalur 12 KM sekitar 2,5 jam dengan jeram-jeram legendaris Cisadane. Untuk yang ingin tantangan sesungguhnya.',
    price: 250000,
    duration: '±2,5 jam',
    distance: '12 KM',
    minAge: 8,
    capacity: '6 orang/perahu',
    highlights: [
      'Jeram Blender',
      'Jeram Kerinduan',
      'Jeram Kuda',
      'Jeram Bendungan',
    ],
    inclusion: 'Peralatan arung jeram, Helm, Dayung, Pemandu (Skipper), Tim Rescue, Ruang Ganti, Saung, Musholla, Parkiran',
    exclusion: 'Foto & Video (Rp 250.000/perahu)',
    imageUrl: '/images/Rafting/webp/10.webp',
    featured: false,
  },
  {
    id: 'longtrip',
    name: 'Longtrip',
    slug: 'longtrip',
    description: 'Rute Ciampea → Putat Nutug, 12 KM selama 2,5 jam melewati Jeram Naga dengan pemandangan alam yang belum banyak dijamah.',
    price: 300000,
    duration: '2,5 jam',
    distance: '12 KM',
    minAge: 0,
    capacity: '6 orang/perahu',
    highlights: [
      'Jeram Naga',
      'Rute Ciampea → Putat Nutug',
      'Pemandangan alam asli',
    ],
    inclusion: 'Peralatan arung jeram, Helm, Dayung, Pemandu (Skipper), Tim Rescue, Ruang Ganti',
    exclusion: 'Foto & Video (Rp 300.000/perahu)',
    imageUrl: '/images/Rafting/webp/5.webp',
    featured: false,
  },
]

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroImageY = useTransform(heroScrollY, [0, 1], ["-10%", "20%"])
  const heroBgY = useTransform(heroScrollY, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <FloatingWhatsApp />
      <WeatherWidget />

      <main className="flex-1 mesh-gradient">
        {/* ========== IMMERSIVE HERO SECTION ========== */}
        <section ref={heroRef} id="home" className="relative pb-32 lg:pb-40 pt-32 lg:pt-40 flex flex-col items-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-950">
          
          <div className="absolute z-0 inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_70%)] animate-pulse" />
            <div className="absolute top-[20%] -left-[10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px] animate-float" />
            <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-teal-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-2s' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
            {/* Top Text Content */}
            <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
              <ScrollReveal>
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 mb-6 px-4 py-2 text-sm lg:text-base uppercase tracking-widest font-bold backdrop-blur-md">
                  Rafting Terbaik di Bogor
                </Badge>
                <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-[0.9] tracking-tighter font-outfit uppercase drop-shadow-xl">
                  Arung Jeram <br className="hidden md:block"/>
                  <span className="text-emerald-400 drop-shadow-lg">Sungai</span> Cisadane.
                </h1>
                <p className="text-emerald-50/90 text-base md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
                  Tersedia 4 pilihan jalur untuk semua tingkat kemampuan — dari 15 menit hingga 2,5 jam. Peralatan lengkap, pemandu profesional, tim rescue siaga.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#paket" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 md:px-10 h-14 md:h-16 text-base md:text-lg rounded-2xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 font-bold group">
                      Lihat Paket Rafting
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href="#booking" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/20 px-8 md:px-10 h-14 md:h-16 text-base md:text-lg rounded-2xl backdrop-blur-md transition-all duration-300 font-bold">
                      Amankan Trip Sekarang
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Mobile-only Floating Stats */}
            <div className="md:hidden mt-8 w-full z-20">
              <ScrollReveal delay={400}>
                <div className="glass-dark px-4 py-6 rounded-3xl border border-white/20 backdrop-blur-xl bg-black/60 shadow-2xl overflow-hidden shadow-emerald-900/50 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-emerald-500/20 pointer-events-none" />
                  <div className="grid grid-cols-3 gap-2 divide-x divide-white/20 relative z-10 w-full min-w-[280px]">
                    <div className="text-center px-1 flex flex-col items-center justify-center">
                      <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1 w-full">Jalur Rafting</p>
                      <p className="text-lg sm:text-2xl font-black text-white font-outfit uppercase leading-none">12 KM</p>
                    </div>
                    <div className="text-center px-1 flex flex-col items-center justify-center">
                      <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1 w-full">Durasi Maks</p>
                      <p className="text-lg sm:text-2xl font-black text-white font-outfit uppercase leading-none">2.5 JAM</p>
                    </div>
                    <div className="text-center px-1 flex flex-col items-center justify-center">
                      <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1 w-full">Keamanan</p>
                      <p className="text-lg sm:text-2xl font-black text-white font-outfit uppercase leading-none">CERTIFIED</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Dashboard / App Presentation Image Container (Desktop Only) */}
            <div className="hidden md:block w-full max-w-6xl mx-auto relative mt-10">
              <ScrollReveal delay={200} className="relative z-0">
                <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 ring-1 ring-white/5 bg-emerald-950 flex flex-col items-center justify-center">
                    <NextImage
                      src="/images/Rafting/webp/Banner_sembar_adventure.webp"
                      alt="Sembar Adventure Hero Full"
                      width={1400}
                      height={400}
                      className="w-full h-auto object-contain"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollReveal>

              {/* Floating Stats overlapping the bottom edge */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 lg:-bottom-12 w-[90%] md:w-auto max-w-4xl z-20">
                <ScrollReveal delay={400}>
                  <div className="glass-dark px-4 py-6 md:px-10 md:py-6 rounded-3xl md:rounded-full border border-white/20 backdrop-blur-xl bg-black/60 md:bg-black/40 shadow-2xl overflow-hidden shadow-emerald-900/50">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-emerald-500/20 pointer-events-none" />
                    <div className="grid grid-cols-3 gap-2 md:gap-12 divide-x divide-white/20 relative z-10 w-full min-w-[280px] md:min-w-[600px]">
                      <div className="text-center px-1 md:px-4 flex flex-col items-center justify-center">
                        <p className="text-[10px] md:text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1 md:mb-2 w-full">Jalur Rafting</p>
                        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-outfit uppercase leading-none">12 KM</p>
                      </div>
                      <div className="text-center px-1 md:px-4 flex flex-col items-center justify-center">
                        <p className="text-[10px] md:text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1 md:mb-2 w-full">Durasi Maks</p>
                        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-outfit uppercase leading-none">2.5 JAM</p>
                      </div>
                      <div className="text-center px-1 md:px-4 flex flex-col items-center justify-center">
                        <p className="text-[10px] md:text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1 md:mb-2 w-full">Keamanan</p>
                        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-outfit uppercase leading-none">CERTIFIED</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Bottom Wave Decor */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-px z-10">
            <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,113.84,122.2,125.44,188.47,116.32,246.33,108.33,288,81.16,321.39,56.44Z" className="fill-white"></path>
            </svg>
          </div>
        </section>

        {/* ========== SAFETY & SOP ========== */}
        <SafetySection />

        {/* ========== PAKET RAFTING ========== */}
        <section id="paket" className="py-16 md:py-32 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-20">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2 text-xs uppercase tracking-widest font-bold">
                  Paket Pilihan
                </Badge>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tighter font-outfit uppercase">
                  4 Paket Rafting untuk Semua Kebutuhan
                </h2>
                <p className="text-muted-foreground font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                  Dari 15 menit untuk pemula hingga 2,5 jam untuk yang ingin jalur penuh. Semua paket sudah termasuk peralatan lengkap dan pemandu profesional.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 pb-8 md:pb-0 w-full">
              {packages.map((pkg, i) => (
                <div key={pkg.id} className="w-full h-full">
                  <ScrollReveal delay={i * 100} className="h-full">
                    <PackageCard pkg={pkg} />
                  </ScrollReveal>
                </div>
              ))}
            </div>

            {/* Operational Info */}
            <ScrollReveal delay={200}>
              <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
                <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm">
                  <p className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-1">Operasional</p>
                  <p className="text-gray-700 font-bold">Buka Setiap Hari</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm">
                  <p className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-1">Kapasitas</p>
                  <p className="text-gray-700 font-bold">1 Perahu = 6 Orang</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm">
                  <p className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-1">Grup Besar</p>
                  <p className="text-gray-700 font-bold">{'>'}6 Orang = Multi Perahu</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>



        {/* ========== WHY CHOOSE US ========== */}
        <WhyChooseUsSection />

        {/* ========== GALERI ========== */}
        <GallerySection />


        {/* ========== TESTIMONIALS & RATING ========== */}
        <section id="testimoni" className="py-20 md:py-32 bg-white relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
              
              {/* Left Column: Heading & Google Reviews Badge */}
              <div className="lg:w-1/3 text-center lg:text-left space-y-8">
                <ScrollReveal>
                  <div className="space-y-4">
                    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] rounded-full backdrop-blur-sm shadow-sm inline-flex items-center">
                      <Star className="h-4 w-4 mr-2 fill-emerald-600" />
                      Testimoni
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tighter uppercase font-outfit leading-tight">
                      Apa Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Mereka?</span>
                    </h2>
                    <p className="text-muted-foreground/80 text-base md:text-lg font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                      Cerita langsung dari peserta yang telah menaklukkan tantangan dan merasakan serunya Sungai Cisadane bersama Sembar Adventure.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="inline-flex lg:flex items-center gap-5 p-5 bg-background rounded-3xl border border-border/50 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-500 group">
                    <div className="w-14 h-14 relative flex-shrink-0 bg-gray-50 rounded-full p-2.5 shadow-inner">
                      <NextImage
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Google_Maps_icon.svg/512px-Google_Maps_icon.svg.png"
                        alt="Google Maps Review"
                        fill
                        className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-black text-foreground font-outfit">4.9</span>
                        <div className="flex text-amber-400">
                          <Star className="h-4 w-4 fill-current drop-shadow-sm" />
                          <Star className="h-4 w-4 fill-current drop-shadow-sm" />
                          <Star className="h-4 w-4 fill-current drop-shadow-sm" />
                          <Star className="h-4 w-4 fill-current drop-shadow-sm" />
                          <Star className="h-4 w-4 fill-current drop-shadow-sm" />
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground font-semibold">Dari <span className="text-emerald-600 font-bold">500+</span> Ulasan Google</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Carousel */}
              <div className="lg:w-2/3 w-full">
                <ScrollReveal delay={200}>
                  <div className="relative">
                    <TestimonialCarousel testimonials={testimonials} className="py-6" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <FAQSection />

        {/* ========== CTA BESAR ========== */}
        <section className="py-16 md:py-28 bg-emerald-900 relative overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-emerald-500/20 rounded-full blur-[120px] animate-float" />
            <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-teal-500/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-1.5s' }} />
          </div>

          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-sm">
                Siap Rafting di Sungai Cisadane?
              </h2>
              <p className="text-emerald-100 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
                Pilih paket yang sesuai, amankan jadwal Anda, dan kami siapkan semuanya. Buka setiap hari.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#booking">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-10 h-16 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group font-semibold">
                    Amankan Trip Saya
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a
                  href={getWhatsAppUrl('Halo Sembar Adventure, saya ingin tanya info rafting')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap font-semibold border-2 border-white bg-transparent text-white hover:bg-white hover:text-emerald-600 h-16 px-10 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Tanya Admin
                  </button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ========== BOOKING ========== */}
        <BookingSection />
      </main>

      <Footer />
    </div>
  )
}
