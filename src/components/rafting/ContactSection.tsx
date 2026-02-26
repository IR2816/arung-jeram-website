'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react'
import { ScrollReveal } from './Animations'
import { getWhatsAppUrl } from '@/lib/whatsapp'

const contactInfo = [
  { 
    icon: MapPin, 
    title: 'Alamat', 
    content: 'Kawasan desa Semplak Barat dan Ciseeng, Desa Kutat Nutung, Ciseeng, Bogor',
    color: 'from-emerald-400 to-teal-500'
  },
  { 
    icon: Phone, 
    title: 'WhatsApp', 
    content: '+62 812-3456-7890',
    link: getWhatsAppUrl(),
    color: 'from-green-400 to-emerald-500'
  },
  { 
    icon: Mail, 
    title: 'Email', 
    content: 'sembaradventure@gmail.com',
    link: 'mailto:sembaradventure@gmail.com',
    color: 'from-amber-400 to-orange-500'
  },
  { 
    icon: Clock, 
    title: 'Jam Operasional Rafting', 
    content: '11:00 - 15:00 WIB',
    color: 'from-purple-400 to-pink-500'
  },
]

export function ContactSection() {
  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">
              Kontak
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Kami siap menjawab semua pertanyaan Anda dengan respon cepat
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <a 
                  href={info.link || '#'} 
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 group cursor-pointer">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${info.color} p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{info.title}</h4>
                        <p className="text-gray-600 text-sm">{info.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </ScrollReveal>
            ))}

            {/* Social Media */}
            <ScrollReveal delay={400}>
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-5">
                  <h4 className="font-bold text-gray-800 mb-4">Ikuti Kami</h4>
                  <div className="flex gap-3">
                    <a 
                      href="https://instagram.com/sembaradventure" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl text-white hover:scale-105 transition-transform"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://tiktok.com/@sembaradventure" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black p-3 rounded-xl text-white hover:scale-105 transition-transform"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* WhatsApp CTA */}
            <ScrollReveal delay={500}>
              <a 
                href={getWhatsAppUrl('Halo Sembah Adventure, saya ingin bertanya')}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                  <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat via WhatsApp
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </ScrollReveal>
          </div>

          {/* Google Maps */}
          <ScrollReveal direction="right">
            <Card className="border-0 shadow-xl overflow-hidden h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.9!2d106.6618818!3d-6.4684479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69dd0079b77229%3A0x7620c15d8f94c653!2sSEMBAR%20ADVENTURE%20(Rafting%2C%20Outbond%2C%20Cafe)!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
