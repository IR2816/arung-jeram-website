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
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-pink-100 text-pink-700 border-pink-200 mb-4 px-4 py-2 text-xs uppercase tracking-widest font-bold inline-flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              @sembaradventure
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Ikuti Keseruan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Lihat momen-momen seru petualangan terbaru dari teman-teman yang sudah merasakan sensasi rafting bersama kami di Instagram.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {instagramPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square overflow-hidden rounded-2xl group"
              >
                <NextImage
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Instagram Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <div className="flex items-center text-white font-bold gap-2">
                    <svg aria-label="Suka" className="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center text-white font-bold gap-2">
                    <svg aria-label="Komentar" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    <span>{post.comments}</span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Instagram className="mr-2 h-5 w-5" />
              Lihat Lebih Banyak di Instagram
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
