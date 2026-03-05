'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Contact2 } from '@/components/ui/contact-2'
import { ScrollReveal } from './Animations'

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

        <ScrollReveal>
          <Contact2
            embedded
            title="Hubungi Kami"
            description="Isi form ini, lalu kami akan balas cepat via WhatsApp."
            address="Desa Putat Nutug, Ciseeng, Bogor"
            phone="+62 812-3456-7890"
            email="sembaradventure@gmail.com"
            web={{ label: 'Instagram @sembaradventure', url: 'https://instagram.com/sembaradventure' }}
            whatsappGreeting="Halo Sembar Adventure, saya ingin bertanya:"
          />
        </ScrollReveal>

        <div className="mt-12">
          <ScrollReveal direction="right">
            <Card className="border-0 shadow-xl overflow-hidden min-h-[500px]">
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
