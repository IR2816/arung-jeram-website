'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from './Animations'

const galleryImages = [
  { src: '/images/Rafting/webp/9.webp', alt: 'Arung Jeram Seru' },
  { src: '/images/Rafting/webp/7.webp', alt: 'Tim Rafting' },
  { src: '/images/Rafting/13.jpeg', alt: 'Aksi Mendayung' },
  { src: '/images/Rafting/webp/4.webp', alt: 'Camping Ground' },
  { src: '/images/cafe/warkop-gallery.webp', alt: 'Sembar Sunset Cafe' },
  { src: '/images/Rafting/webp/10.webp', alt: 'Rafting Adventure' },
  { src: '/images/Rafting/14.jpeg', alt: 'Keseruan Air' },
  { src: '/images/Rafting/webp/1.webp', alt: 'Rafting Keluarga' },
  { src: '/images/Rafting/15.jpeg', alt: 'Jeram Menantang' },
  { src: '/images/Rafting/webp/3.webp', alt: 'Petualangan Seru' },
  { src: '/images/Rafting/webp/11.webp', alt: 'Pemandu Lokal' },
  { src: '/images/Rafting/webp/5.webp', alt: 'Momen Seru 1' },
  { src: '/images/Rafting/16.jpeg', alt: 'Kebersamaan Tim' },
  { src: '/images/Rafting/webp/6.webp', alt: 'Momen Seru 2' },
  { src: '/images/Rafting/webp/2.webp', alt: 'Pemandangan Sungai' },
  { src: '/images/Rafting/webp/8.webp', alt: 'Momen Seru 3' },
]

export function GallerySection() {
  return (
    <section id="galeri" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] -mr-48 -mt-48 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] -ml-48 -mb-48 opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20 space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] rounded-full backdrop-blur-sm shadow-sm">
              Momen Petualangan
            </Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tighter uppercase font-outfit max-w-4xl mx-auto leading-tight">
              DOKUMENTASI <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">TERBAIK KAMI</span>
            </h2>
            <p className="text-muted-foreground/80 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Kumpulan ekspresi kebahagiaan para petualang yang telah menaklukkan derasnya Sungai Cisadane bersama kami.
            </p>
          </div>
        </ScrollReveal>

        {/* Organic Masonry Gallery */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6 max-w-7xl mx-auto">
          {galleryImages.map((img, i) => {
            // Strategic aspect ratios to create organic masonry layout
            const aspectRatios: Record<number, string> = {
              0: "aspect-[3/4]",
              1: "aspect-square",
              2: "aspect-[4/5]",
              3: "aspect-square",
              4: "aspect-[16/9]",
              5: "aspect-[3/4]",
              6: "aspect-square",
              7: "aspect-[4/3]",
              8: "aspect-[3/5]",
              9: "aspect-square",
              10: "aspect-[4/3]",
              11: "aspect-square",
              12: "aspect-[4/5]",
              13: "aspect-square",
              14: "aspect-[3/4]",
              15: "aspect-[4/3]",
            };
            
            const aspectClass = aspectRatios[i] || "aspect-square";

            return (
              <ScrollReveal key={i} delay={(i % 4) * 100} className="break-inside-avoid">
                <div className={`relative w-full ${aspectClass} group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-border/50 shadow-lg shadow-black/5 transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-500/20 md:hover:-translate-y-2 block bg-muted`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  {/* Premium Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Title Tag */}
                  <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20">
                    <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 inline-block shadow-xl">
                      <p className="text-white text-[10px] md:text-xs font-extrabold uppercase tracking-widest">{img.alt}</p>
                    </div>
                  </div>

                  {/* Icon Hover Decor */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0 z-20">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg border border-emerald-400/30">
                      <span className="text-emerald-400 font-extrabold text-xl">+</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="text-center mt-16 md:mt-20">
          <a
            href="https://www.tiktok.com/@sembar_adventure"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 font-bold px-10 py-5 rounded-full bg-foreground text-background shadow-xl hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-wide group"
          >
            Lihat Video di TikTok
            <svg className="w-5 h-5 transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
