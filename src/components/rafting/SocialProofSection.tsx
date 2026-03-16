'use client'

import { ScrollReveal } from './Animations'
import { Star } from 'lucide-react'

export function SocialProofSection() {
  const partners = [
    { name: 'PT Pertamina', logo: 'https://upload.wikimedia.org/wikipedia/id/thumb/b/b5/Logo_Pertamina.png/600px-Logo_Pertamina.png' },
    { name: 'Bank Mandiri', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_of_Bank_Mandiri.svg/512px-Logo_of_Bank_Mandiri.svg.png' },
    { name: 'Telkom Indonesia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Telkom_Indonesia_2013.svg/512px-Telkom_Indonesia_2013.svg.png' },
    { name: 'Unilever', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Unilever.svg/512px-Unilever.svg.png' },
    { name: 'Gojek', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Gojek_Logo.svg/512px-Gojek_Logo.svg.png' },
    { name: 'BCA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/512px-Bank_Central_Asia.svg.png' },
  ]

  return (
    <section className="py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">

        {/* Google Maps Rating Badge */}
        <ScrollReveal>
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-xl border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-12 h-12 relative flex-shrink-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Google_Maps_icon.svg/512px-Google_Maps_icon.svg.png"
                  alt="Google Maps"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xl font-black text-gray-900">4.9</span>
                  <div className="flex text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <span className="text-sm text-gray-500 font-medium">Berdasarkan 500+ ulasan pengunjung</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trusted By Marquee */}
        <ScrollReveal delay={100}>
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Dipercaya oleh Perusahaan Terkemuka
            </p>
          </div>

          <div className="relative flex overflow-hidden group">
            <div className="animate-marquee flex gap-12 items-center min-w-full justify-around pr-12">
              {partners.map((partner, index) => (
                <div key={index} className="relative w-32 h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="animate-marquee flex gap-12 items-center min-w-full justify-around pr-12 absolute top-0 left-full">
              {partners.map((partner, index) => (
                <div key={index + 'dup'} className="relative w-32 h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
