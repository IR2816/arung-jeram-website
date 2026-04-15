'use client'

import { ScrollReveal } from './Animations'
import { Badge } from '@/components/ui/badge'
import { Instagram } from 'lucide-react'
import NextImage from 'next/image'

const instagramPosts = [
  { id: 1, image: '/images/Rafting/webp/1.webp', likes: 124, comments: 12 },
  { id: 2, image: '/images/Rafting/webp/2.webp', likes: 89, comments: 5 },
  { id: 3, image: '/images/Rafting/webp/3.webp', likes: 210, comments: 24 },
  { id: 4, image: '/images/Rafting/webp/4.webp', likes: 156, comments: 8 },
  { id: 5, image: '/images/Rafting/webp/5.webp', likes: 302, comments: 41 },
  { id: 6, image: '/images/Rafting/webp/6.webp', likes: 178, comments: 15 },
]

export function InstagramSection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden border-t border-border/50">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20 space-y-6">
            <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-pink-600 border-pink-500/20 px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] rounded-full backdrop-blur-sm shadow-sm inline-flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              @sembaradventure
            </Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tighter uppercase font-outfit leading-tight max-w-3xl mx-auto">
              Ikuti Keseruan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">Kami</span>
            </h2>
            <p className="text-muted-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              Lihat momen-momen seru petualangan terbaru dari teman-teman yang sudah merasakan sensasi rafting bersama kami di Instagram.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {instagramPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100}>
              <a
                href="https://www.instagram.com/sembar_adventure/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square overflow-hidden rounded-[2rem] group shadow-sm border border-border/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2 hover:border-pink-500/20"
              >
                <NextImage
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Instagram Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-6">
                  
                  {/* Subtle Instagram Icon in background */}
                  <Instagram className="absolute text-white/10 w-24 h-24 scale-50 group-hover:scale-100 transition-transform duration-700 ease-out" strokeWidth={1} />
                  
                  <div className="flex items-center gap-8 relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-col items-center text-white font-bold gap-1.5 group/icon">
                      <svg aria-label="Suka" className="w-8 h-8 text-white transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:text-pink-500" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex flex-col items-center text-white font-bold gap-1.5 group/icon">
                      <svg aria-label="Komentar" className="w-8 h-8 text-white transition-transform duration-300 group-hover/icon:scale-110" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="https://www.instagram.com/sembar_adventure/" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center justify-center font-bold px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-wide group">
              <Instagram className="mr-3 h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              Lihat Lebih Banyak di Instagram
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
