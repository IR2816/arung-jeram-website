'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/rafting/Navbar'
import { Footer } from '@/components/rafting/Footer'
import { PackageCard, type PackageType } from '@/components/rafting/PackageCard'
import { ProductSection } from '@/components/rafting/ProductSection'
import { GallerySection } from '@/components/rafting/GallerySection'
import { BookingSection } from '@/components/rafting/BookingSection'
import { AddOnSection } from '@/components/rafting/AddOnSection'
import { ContactSection } from '@/components/rafting/ContactSection'
import { SafetySection } from '@/components/rafting/SafetySection'
import { FAQSection } from '@/components/rafting/FAQSection'
import { WhyChooseUsSection } from '@/components/rafting/WhyChooseUsSection'
import { FloatingWhatsApp } from '@/components/rafting/FloatingWhatsApp'
import { ScrollReveal, Floating } from '@/components/rafting/Animations'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { 
  ChevronDown, 
  ArrowRight,
  Sparkles,
  Leaf,
  Sun,
  Waves,
  Coffee,
  Tent,
  Target
} from 'lucide-react'

// Paket dari brosur dengan data konsisten
const packages: PackageType[] = [
  {
    id: 'family',
    name: 'Family Trip',
    slug: 'family-trip',
    description: 'Petualangan arung jeram yang sempurna untuk keluarga. Nikmati kebersamaan dengan pemandangan alam yang indah di Sungai Cisadane.',
    price: 650000,
    duration: '1 jam 20 menit',
    distance: '5 KM',
    minAge: 7,
    capacity: '6 orang/perahu',
    highlights: ['Pemandangan Hutan C4', 'Jeram Bagol', 'Ideal untuk keluarga'],
    imageUrl: '/images/Rafting/webp/5.webp',
    featured: true,
  },
  {
    id: 'panorama',
    name: 'Panorama Trip',
    slug: 'panorama-trip',
    description: 'Nikmati keindahan jalur panorama Lembah Cisadane dengan kombinasi jeram seru dan pemandangan alam.',
    price: 700000,
    duration: '80 menit',
    distance: '7 KM',
    minAge: 10,
    capacity: '6 orang/perahu',
    highlights: ['Batu Burut', 'Jeram Lemcis (Lembah Cisadane)', 'View panorama lembah'],
    imageUrl: '/images/Rafting/webp/9.webp',
    featured: true,
  },
  {
    id: 'adventure',
    name: 'Adventure Trip',
    slug: 'adventure-trip',
    description: 'Tantangan penuh adrenalin dengan jeram yang menegangkan. Lintasan terpanjang untuk pencari sensasi sejati!',
    price: 850000,
    duration: '2,5 jam',
    distance: '12 KM',
    minAge: 12,
    capacity: '6 orang/perahu',
    highlights: ['Jeram Kuda', 'Jeram Naga', 'Untuk pencari adrenalin'],
    imageUrl: '/images/Rafting/webp/10.webp',
    featured: false,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <FloatingWhatsApp />
      
      <main className="flex-1">
        {/* ========== HERO SECTION ========== */}
        <section id="home" className="relative min-h-[100vh] flex items-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/Rafting/webp/Banner_sembar_adventure.webp"
              alt="Sembah Adventure"
              fill
              className="object-contain bg-black"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          
          {/* Floating decorations */}
          <div className="absolute top-20 right-10 md:right-20 z-10 opacity-60">
            <Floating duration={4} distance={15}>
              <Leaf className="w-12 h-12 md:w-16 md:h-16 text-emerald-400" />
            </Floating>
          </div>
          <div className="absolute top-40 right-1/4 z-10 opacity-40">
            <Floating duration={5} distance={20}>
              <Sun className="w-8 h-8 md:w-12 md:h-12 text-amber-400" />
            </Floating>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 pt-20">
            <div className="max-w-3xl text-white">
              <div className="animate-fade-in-down" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 mb-6 text-sm px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Your Holiday Experience in Cisadane
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                SEMBAR<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 text-gradient-animated">
                  ADVENTURE
                </span>
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
                {[
                  { icon: Waves, label: 'Rafting' },
                  { icon: Tent, label: 'Camping' },
                  { icon: Target, label: 'Outbound' },
                  { icon: Coffee, label: 'Cafe' },
                  { icon: Target, label: 'Paintball' },
                ].map((item, i) => (
                  <Badge key={i} variant="outline" className="bg-white/10 border-white/30 text-white px-4 py-2 text-sm backdrop-blur-sm">
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Badge>
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed animate-fade-in-up max-w-2xl" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
                Wahana arung jeram di Sungai Cisadane. Petualangan seru untuk keluarga, pelajar, dan corporate di Lembah Cisadane.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
                <a href="#paket">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 group">
                    Lihat Paket
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="#booking">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                    Booking Sekarang
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-gentle">
            <a href="#tentang" className="text-white/80 hover:text-white transition-colors">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium">Scroll</span>
                <ChevronDown className="h-6 w-6" />
              </div>
            </a>
          </div>
        </section>

        {/* ========== WHY CHOOSE US ========== */}
        <WhyChooseUsSection />

        {/* ========== PAKET RAFTING ========== */}
        <section id="paket" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">
                  Paket Rafting
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Pilih Paket Petualangan Anda
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Tiga pilihan paket untuk semua level, dari keluarga hingga pencari adrenalin sejati.
                  Harga sudah termasuk perahu (6 orang), peralatan safety, dan pemandu lokal + tim rescue terlatih.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <ScrollReveal key={pkg.id} delay={i * 100}>
                  <PackageCard pkg={pkg} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SAFETY & SOP ========== */}
        <SafetySection />

        {/* ========== PRODUK & FASILITAS ========== */}
        <ProductSection />

        {/* ========== ADD-ON & CAFE MENU ========== */}
        <AddOnSection />

        {/* ========== GALERI ========== */}
        <GallerySection />

        {/* ========== FAQ ========== */}
        <FAQSection />

        {/* ========== CTA BESAR ========== */}
        <section className="py-28 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Siap Berpetualang di Sungai Cisadane?
              </h2>
              <p className="text-emerald-100 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
                Booking sekarang dan rasakan pengalaman rafting yang tak terlupakan bersama Sembah Adventure!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#booking">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-10 h-16 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group font-semibold">
                    Booking Sekarang
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a 
                  href={getWhatsAppUrl('Halo Sembah Adventure, saya ingin booking rafting')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button 
                    className="inline-flex items-center justify-center whitespace-nowrap font-semibold border-2 border-white bg-transparent text-white hover:bg-white hover:text-emerald-600 h-16 px-10 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat WhatsApp
                  </button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ========== BOOKING ========== */}
        <BookingSection />

        {/* ========== KONTAK ========== */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
