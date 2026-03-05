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
import NextImage from 'next/image'
import { ArrowRight, ArrowRightLeft, MessageCircle, Clock, Users } from 'lucide-react'
import { TestimonialCarousel } from '@/components/ui/testimonial'

const testimonials = [
  {
    id: 1,
    name: "Andi Wijaya",
    avatar: "https://i.pravatar.cc/150?u=andi",
    description: "Luar biasa! Pemandunya sangat profesional dan jeramnya benar-benar memacu adrenalin. Sangat direkomendasikan!"
  },
  {
    id: 2,
    name: "Siti Aminah",
    avatar: "https://i.pravatar.cc/150?u=siti",
    description: "Pengalaman yang sangat menyenangkan untuk keluarga. Anak-anak saya sangat senang dan merasa aman."
  },
  {
    id: 3,
    name: "Budi Santoso",
    avatar: "https://i.pravatar.cc/150?u=budi",
    description: "Tempatnya asik, cafenya juga enak buat nongkrong setelah capek rafting. Pelayanan ramah banget!"
  }
]

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
                    #1 Rafting Adventure in Bogor
                  </Badge>
                  <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 leading-[0.85] tracking-tighter font-outfit uppercase">
                    Arungi <span className="text-emerald-400">Adrenalin</span><br />Sungai Cisadane.
                  </h1>
                  <p className="text-emerald-100/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                    Rasakan sensasi menaklukkan jeram terbaik dengan standar keamanan kelas dunia dan pemandu profesional bersertifikat.
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
                        Booking Sekarang
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

            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 mb-8 md:hidden animate-bounce text-emerald-700 font-bold text-sm bg-emerald-100/80 backdrop-blur-sm w-fit mx-auto px-6 py-3 rounded-full border-2 border-emerald-200 shadow-lg">
                <ArrowRightLeft className="h-5 w-5" />
                <span>GESER UNTUK PILIHAN PAKET</span>
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
                  Cerita dari para petualang yang telah merasakan serunya Sungai Cisadane bersama Sembar Adventure.
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
