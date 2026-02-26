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
  { src: '/images/cafe/warkop-menu.webp', alt: 'Menu Cafe', span: false },
  { src: '/images/Rafting/webp/10.webp', alt: 'Rafting Adventure', span: false },
  { src: '/images/Rafting/webp/3.webp', alt: 'Petualangan Seru', span: false },
  { src: '/images/Rafting/webp/4.webp', alt: 'Clip Video', span: false },
]

export function GallerySection() {
  return (
    <section id="galeri" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">
              Galeri
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Momen Seru Pelanggan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Lihat pengalaman menyenangkan dari pelanggan-pelanggan kami
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div 
                className={`relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  img.span ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <div className={`relative ${img.span ? 'h-full min-h-[320px]' : 'h-48'}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <p className="text-white font-medium">{img.alt}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
