'use client'

import { Navbar } from '@/components/rafting/Navbar'
import { Footer } from '@/components/rafting/Footer'
import { PackageCard, type PackageType } from '@/components/rafting/PackageCard'
import { GallerySection } from '@/components/rafting/GallerySection'
import { BookingSection } from '@/components/rafting/BookingSection'
import { ContactSection } from '@/components/rafting/ContactSection'
import { SafetySection } from '@/components/rafting/SafetySection'
import { FAQSection } from '@/components/rafting/FAQSection'
import { SocialProofSection } from '@/components/rafting/SocialProofSection'
import { WhyChooseUsSection } from '@/components/rafting/WhyChooseUsSection'
import { FloatingWhatsApp } from '@/components/rafting/FloatingWhatsApp'
import { ScrollReveal } from '@/components/rafting/Animations'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import NextImage from 'next/image'
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
    inclusion: 'Peralatan arung jeram, Helm, Dayung, Pemandu (Skipper), Tim Rescue, Ruang Ganti',
    exclusion: 'Foto & Video (Rp 200.000/perahu)',
    imageUrl: '/images/Rafting/webp/5.webp',
    featured: false,
  },
  {
    id: 'family-trip',
    name: 'Family Trip',
    slug: 'family-trip',
    description: 'Jalur 5 KM sekitar 1 jam melewati Hutan Cipor dan Jeram Bagol. Pilihan terbaik untuk liburan keluarga.',
    price: 150000,
    duration: '±1 jam',
    distance: '5 KM',
    minAge: 0,
    capacity: '6 orang/perahu',
    highlights: [
      'Hutan Cipor',
      'Jeram Bagol',
      'Cocok untuk semua usia',
    ],
    inclusion: 'Peralatan arung jeram, Helm, Dayung, Pemandu (Skipper), Tim Rescue, Ruang Ganti',
    exclusion: 'Foto & Video (Rp 200.000/perahu)',
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
    inclusion: 'Peralatan arung jeram, Helm, Dayung, Pemandu (Skipper), Tim Rescue, Ruang Ganti',
    exclusion: 'Foto & Video (Rp 200.000/perahu)',
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
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <FloatingWhatsApp />

      <main className="flex-1 mesh-gradient">
        {/* ========== IMMERSIVE HERO SECTION ========== */}
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-emerald-950">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 z-0 opactiy-40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)] animate-pulse" />
            <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-emerald-500/20 rounded-full blur-[120px] animate-float" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-teal-500/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-2s' }} />
          </div>

          {/* Hero Content Wrapper */}
          <div className="container mx-auto px-4 relative z-10 pt-32 pb-12">
            <div className="max-w-6xl mx-auto">
              {/* Text Intro Area */}
              <div className="text-center mb-12 lg:mb-20">
                <ScrollReveal>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-6 px-4 py-2 text-sm uppercase tracking-widest font-bold backdrop-blur-md">
                    Rafting Terbaik di Bogor
                  </Badge>
                  <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 leading-[0.85] tracking-tighter font-outfit uppercase">
                    Arung Jeram <span className="text-emerald-400">Sungai</span><br />Cisadane.
                  </h1>
                  <p className="text-emerald-100/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                    Tersedia 4 pilihan jalur untuk semua tingkat kemampuan — dari 15 menit hingga 2,5 jam. Peralatan lengkap, pemandu profesional, tim rescue siaga.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#paket">
                      <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 h-16 text-lg rounded-2xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 font-bold group">
                        Lihat Paket Rafting
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                    <a href="#booking">
                      <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10 h-16 text-lg rounded-2xl backdrop-blur-md transition-all duration-300 font-bold">
                        Amankan Trip Sekarang
                      </Button>
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              {/* Wide Hero Banner - DESKTOP ONLY */}
              <div className="hidden lg:block">
                <ScrollReveal delay={200}>
                  <div className="relative aspect-[21/7] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group card-shine">
                    <NextImage
                      src="/images/Rafting/webp/Banner_sembar_adventure.webp"
                      alt="Sembar Adventure Hero Full"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />

                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div className="glass-dark px-8 py-4 rounded-2xl border border-white/10 backdrop-blur-xl">
                        <div className="flex gap-12">
                          <div>
                            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">Jalur Rafting</p>
                            <p className="text-2xl font-black text-white font-outfit uppercase leading-tight">12 KM</p>
                          </div>
                          <div className="w-px h-10 bg-white/10" />
                          <div>
                            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">Durasi Maks</p>
                            <p className="text-2xl font-black text-white font-outfit uppercase leading-tight">2.5 JAM</p>
                          </div>
                          <div className="w-px h-10 bg-white/10" />
                          <div>
                            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">Keamanan</p>
                            <p className="text-2xl font-black text-white font-outfit uppercase leading-tight">CERTIFIED</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>

          {/* Bottom Wave Decor */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-px">
            <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,113.84,122.2,125.44,188.47,116.32,246.33,108.33,288,81.16,321.39,56.44Z" className="fill-white"></path>
            </svg>
          </div>
        </section>

      {/* ========== SOCIAL PROOF ========== */}
      <SocialProofSection />

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
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  4 Paket Rafting untuk Semua Kebutuhan
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Dari 15 menit untuk pemula hingga 2,5 jam untuk yang ingin jalur penuh. Semua paket sudah termasuk peralatan lengkap dan pemandu profesional.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 mb-10 md:hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center gap-2 bg-emerald-950 text-white px-6 py-3 rounded-2xl shadow-premium border border-white/10 group active:scale-95 transition-all">
                  <ArrowRightLeft className="h-4 w-4 text-emerald-400 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Geser & Pilih Paket</span>
                </div>
              </div>
            </ScrollReveal>

            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth snap-x">
              {packages.map((pkg, i) => (
                <div key={pkg.id} className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center flex-shrink-0">
                  <ScrollReveal delay={i * 100}>
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

        {/* ========== LOKASI ========== */}
        <ContactSection />

        {/* ========== WHY CHOOSE US ========== */}
        <WhyChooseUsSection />

        {/* ========== GALERI ========== */}
        <GallerySection />


        {/* ========== TESTIMONIALS ========== */}
        <section id="testimoni" className="py-20 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2 text-xs uppercase tracking-widest font-bold">
                  Testimoni
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  Apa Kata Mereka?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Cerita dari peserta rafting yang telah merasakan serunya Sungai Cisadane bersama Sembar Adventure.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <TestimonialCarousel testimonials={testimonials} className="py-10" />
            </ScrollReveal>
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
