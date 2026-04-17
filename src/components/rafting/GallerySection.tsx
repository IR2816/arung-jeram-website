'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from './Animations'

const bentoGroups = [
  {
    id: 1,
    title: 'Arung Jeram Seru',
    className: "col-span-2 md:col-span-2 lg:col-span-2 row-span-2",
    images: [
      { src: '/images/Rafting/webp/9.webp', alt: 'Arung Jeram Seru 1' },
      { src: '/images/Rafting/13.jpeg', alt: 'Arung Jeram Seru 2' },
      { src: '/images/Rafting/webp/10.webp', alt: 'Arung Jeram Seru 3' },
    ]
  },
  {
    id: 2,
    title: 'Camping Ground',
    className: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    images: [
      { src: '/images/gallery/camping-ground.jpg', alt: 'Camping Ground 1' },
      { src: '/images/Rafting/webp/4.webp', alt: 'Camping Ground 2' },
    ]
  },
  {
    id: 3,
    title: 'Keluarga & Teman',
    className: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    images: [
      { src: '/images/Rafting/webp/1.webp', alt: 'Keluarga & Teman 1' },
      { src: '/images/Rafting/webp/7.webp', alt: 'Keluarga & Teman 2' },
      { src: '/images/Rafting/16.jpeg', alt: 'Keluarga & Teman 3' },
    ]
  },
  {
    id: 4,
    title: 'Sembar Cafe',
    className: "col-span-2 md:col-span-2 lg:col-span-2 row-span-1",
    images: [
      { src: '/images/cafe/warkop-gallery.webp', alt: 'Sembar Cafe 1' },
      { src: '/images/cafe/warkop-hero.webp', alt: 'Sembar Cafe 2' },
    ]
  },
  {
    id: 5,
    title: 'Pemandu / Tim',
    className: "col-span-1 md:col-span-1 lg:col-span-2 row-span-1",
    images: [
      { src: '/images/Rafting/webp/11.webp', alt: 'Pemandu Profesional 1' },
      { src: '/images/Rafting/webp/2.webp', alt: 'Pemandu Profesional 2' },
    ]
  },
  {
    id: 6,
    title: 'Tantangan Jeram',
    className: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
    images: [
      { src: '/images/Rafting/15.jpeg', alt: 'Tantangan Jeram 1' },
      { src: '/images/Rafting/webp/3.webp', alt: 'Tantangan Jeram 2' },
      { src: '/images/Rafting/14.jpeg', alt: 'Tantangan Jeram 3' },
    ]
  },
  {
    id: 7,
    title: 'Momen Indah',
    className: "col-span-2 md:col-span-1 lg:col-span-1 row-span-1",
    images: [
      { src: '/images/Rafting/webp/8.webp', alt: 'Momen Indah 1' },
      { src: '/images/Rafting/webp/5.webp', alt: 'Momen Indah 2' },
      { src: '/images/Rafting/webp/6.webp', alt: 'Momen Indah 3' },
    ]
  }
]

function FadingBentoBox({ group, index }: { group: typeof bentoGroups[0], index: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (group.images.length <= 1) return;
    // Stagger intervals slightly based on index so not all morph simultaneously
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % group.images.length);
      }, 3000 + Math.random() * 2000); 
      return () => clearInterval(interval);
    }, index * 400); 
    return () => clearTimeout(timeout);
  }, [group.images.length, index]);

  return (
    <ScrollReveal delay={index * 100} className={`w-full h-full ${group.className}`}>
      <div className={`relative w-full h-full group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-border/50 shadow-lg shadow-black/5 transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-500/20 bg-muted`}>
        {group.images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            className={`object-cover transition-all duration-1000 ease-in-out ${
              i === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ))}

        {/* Premium Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

        {/* Title Tag Component overlay */}
        <div className="absolute bottom-6 left-6 right-6 lg:translate-y-8 lg:opacity-0 opacity-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-30">
          <div className="bg-white/90 lg:bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 inline-block shadow-xl">
            <p className="text-emerald-950 lg:text-white text-[10px] md:text-xs font-extrabold uppercase tracking-widest">{group.title}</p>
          </div>
        </div>

        {/* Icon Hover Decor */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0 z-30">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg border border-emerald-400/30">
            <span className="text-emerald-400 font-extrabold text-xl">+</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

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
              Kumpulan ekspresi kebahagiaan para petualang yang telah menaklukkan derasnya Sungai Cisadane bersama kami, termasuk fasilitas Camping Ground dan Cafe Sembar.
            </p>
          </div>
        </ScrollReveal>

        {/* Compact Dynamic Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px] gap-3 md:gap-4 grid-flow-row-dense max-w-6xl mx-auto">
          {bentoGroups.map((group, i) => (
            <FadingBentoBox key={group.id} group={group} index={i} />
          ))}
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
