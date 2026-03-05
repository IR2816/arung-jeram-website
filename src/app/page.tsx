'use client'

import { Navbar } from '@/components/rafting/Navbar'
import { Footer } from '@/components/rafting/Footer'
import { PackageCard, type PackageType } from '@/components/rafting/PackageCard'
import { GallerySection } from '@/components/rafting/GallerySection'
import { BookingSection } from '@/components/rafting/BookingSection'
import { AddOnSection } from '@/components/rafting/AddOnSection'
import { ContactSection } from '@/components/rafting/ContactSection'
import { SafetySection } from '@/components/rafting/SafetySection'
import { FAQSection } from '@/components/rafting/FAQSection'
import { WhyChooseUsSection } from '@/components/rafting/WhyChooseUsSection'
import { FloatingWhatsApp } from '@/components/rafting/FloatingWhatsApp'
import { ScrollReveal } from '@/components/rafting/Animations'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { LandingAccordionItem } from '@/components/ui/interactive-image-accordion'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

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
        <section id="home">
          <div className="relative bg-black pt-16 sm:pt-18 md:pt-20">
            <div className="container mx-auto px-4">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl group">
                <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[24/6] lg:aspect-[24/5] overflow-hidden">
                  <Image
                    src="/images/Rafting/webp/Banner_sembar_adventure.webp"
                    alt="Sembar Adventure"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                    sizes="100vw"
                  />
                  {/* Subtle glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Bottom fade into page */}
            <div className="relative z-10 mt-14 h-20 bg-gradient-to-b from-transparent to-white" />
          </div>
        </section>

        {/* ========== WHY CHOOSE US ========== */}
        <WhyChooseUsSection />

        {/* ========== PAKET RAFTING ========== */}
        <section id="paket" className="py-16 md:py-32 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-20">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2 text-xs uppercase tracking-widest font-bold">
                  Paket Pilihan
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  Pilih Level Petualanganmu
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Dari arus tenang untuk keluarga hingga jeram menantang untuk pencari adrenalin. Temukan paket yang sesuai dengan keberanianmu.
                </p>
              </div>
            </ScrollReveal>

            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth snap-x">
              {packages.map((pkg, i) => (
                <div key={pkg.id} className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center flex-shrink-0">
                  <ScrollReveal delay={i * 100}>
                    <PackageCard pkg={pkg} />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SAFETY & SOP ========== */}
        <SafetySection />

        {/* ========== PRODUK & FASILITAS (INTERACTIVE ACCORDION) ========== */}
        <LandingAccordionItem />

        {/* ========== ADD-ON & CAFE MENU ========== */}
        <AddOnSection />

        {/* ========== GALERI ========== */}
        <GallerySection />

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
                Siap Berpetualang di Sungai Cisadane?
              </h2>
              <p className="text-emerald-100 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
                Booking sekarang dan rasakan pengalaman rafting yang tak terlupakan bersama Sembar Adventure!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#booking">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-10 h-16 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group font-semibold">
                    Booking Sekarang
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a
                  href={getWhatsAppUrl('Halo Sembar Adventure, saya ingin booking rafting')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap font-semibold border-2 border-white bg-transparent text-white hover:bg-white hover:text-emerald-600 h-16 px-10 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
