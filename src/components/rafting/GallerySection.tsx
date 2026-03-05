'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from './Animations'

const galleryImages = [
  { src: '/images/Rafting/webp/9.webp', alt: 'Arung Jeram Seru', span: true },
  { src: '/images/Rafting/webp/7.webp', alt: 'Tim Rafting', span: false },
  { src: '/images/Rafting/webp/2.webp', alt: 'Pemandangan Sungai', span: false },
  { src: '/images/Rafting/webp/11.webp', alt: 'Pemandu Lokal', span: false },
  { src: '/images/Rafting/webp/1.webp', alt: 'Rafting Keluarga', span: false },
  { src: '/images/cafe/warkop-gallery.webp', alt: 'Sembar Sunset Cafe', span: true },
  { src: '/images/Rafting/webp/10.webp', alt: 'Rafting Adventure', span: false },
  { src: '/images/Rafting/webp/3.webp', alt: 'Petualangan Seru', span: false },
  { src: '/images/Rafting/webp/4.webp', alt: 'Clip Video', span: false },
]

export function GallerySection() {
  return (
    <section id="galeri" className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -ml-48 -mb-48 opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <Badge className="bg-emerald-950 text-emerald-400 border-emerald-800 mb-6 px-6 py-2 text-sm uppercase tracking-[0.3em] font-black">
              Momen Petualangan
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-6 tracking-tighter uppercase font-outfit">
              DOKUMENTASI <span className="text-emerald-500">TERBAIK</span> KAMI
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Kumpulan ekspresi kebahagiaan para petualang yang telah menaklukkan derasnya Sungai Cisadane bersama kami.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid Gallery 2.0 */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto md:grid-rows-3 gap-3 md:gap-5 h-auto md:h-[900px]">
          {galleryImages.map((img, i) => {
            // Strategic bento mapping based on index
            let gridClasses = "relative group overflow-hidden rounded-[2.5rem] border border-emerald-100/50 shadow-sm transition-all duration-700 hover:shadow-premium hover-lift";

            if (i === 0) gridClasses += " col-span-2 row-span-2"; // Large feature
            if (i === 5) gridClasses += " col-span-2 row-span-1"; // Wide cafe feature
            if (i === 7) gridClasses += " col-span-1 row-span-1 hidden md:block";

            return (
              <ScrollReveal key={i} delay={i * 50} className={gridClasses}>
                <div className="relative w-full h-full min-h-[200px] aspect-square md:aspect-auto">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes={i === 0 || i === 5 ? "100vw" : "50vw"}
                  />

                  {/* Premium Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="glass-dark px-4 py-2 rounded-2xl border border-white/10 inline-block">
                      <p className="text-white text-xs font-bold uppercase tracking-widest">{img.alt}</p>
                    </div>
                  </div>

                  {/* Icon Hover Decor */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-black">+</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  )
}
