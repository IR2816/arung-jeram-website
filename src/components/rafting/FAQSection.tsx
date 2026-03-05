'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle, MessageCircle, CloudRain, CreditCard, Calendar, Users, AlertCircle } from 'lucide-react'
import { ScrollReveal } from './Animations'
import { getWhatsAppUrl } from '@/lib/whatsapp'

const faqData = [
  {
    category: 'Booking & Pembayaran',
    icon: CreditCard,
    faqs: [
      {
        q: 'Bagaimana cara booking rafting?',
        a: 'Anda bisa booking langsung via WhatsApp dengan mengisi form booking di website ini, atau datang langsung ke lokasi. Kami merekomendasikan booking H-1 atau H-2 sebelum tanggal rafting untuk memastikan ketersediaan slot.'
      },
      {
        q: 'Apakah bisa bayar di tempat?',
        a: 'Ya, pembayaran bisa dilakukan di tempat (cash/transfer). Untuk booking grup besar atau corporate, kami menerima DP 50% untuk mengunci jadwal.'
      },
      {
        q: 'Metode pembayaran apa saja yang diterima?',
        a: 'Kami menerima tunai, transfer bank (BCA, Mandiri, BNI), dan e-wallet (GoPay, OVO, Dana).'
      },
    ]
  },
  {
    category: 'Cuaca & Pembatalan',
    icon: CloudRain,
    faqs: [
      {
        q: 'Bagaimana kalau hujan?',
        a: 'Aktivitas rafting tetap berjalan saat hujan gerimis karena akan menambah seru pengalaman! Namun jika cuaca ekstrem (badai, banjir), kami akan menghubungi Anda untuk penjadwalan ulang tanpa biaya tambahan.'
      },
      {
        q: 'Apakah bisa membatalkan booking?',
        a: 'Pembatalan gratis jika dilakukan H-2 sebelum tanggal rafting. Pembatalan H-1 dikenakan biaya 25% dari total. Pembatalan di hari-H tidak bisa dikembalikan.'
      },
      {
        q: 'Bagaimana jika saya tidak bisa datang?',
        a: 'Anda bisa mengganti jadwal maksimal H-1 sebelum rafting dengan menghubungi kami via WhatsApp. Slot bisa dipindahkan ke tanggal lain dalam 30 hari.'
      },
    ]
  },
  {
    category: 'Aktivitas',
    icon: Calendar,
    faqs: [
      {
        q: 'Jam operasional rafting?',
        a: 'Jam operasional rafting 11:00 - 15:00 WIB. Disarankan datang minimal 1 jam sebelum slot yang diinginkan.'
      },
      {
        q: 'Berapa lama waktu untuk satu sesi rafting?',
        a: 'Tergantung paket yang dipilih: Family Trip 1 jam 20 menit, Panorama Trip 80 menit, Adventure Trip 2,5 jam.'
      },
      {
        q: 'Berapa orang dalam satu perahu?',
        a: 'Kapasitas perahu adalah 6 orang termasuk pemandu. Jika grup Anda lebih dari 5 orang, akan menggunakan lebih dari satu perahu.'
      },
      {
        q: 'Apa saja yang perlu dibawa?',
        a: 'Bawa pakaian ganti, handuk, sandal jepit/sepatu air, sunscreen, dan topi. Jangan lupa dry bag untuk HP dan barang berharga.'
      },
    ]
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-emerald-50/50">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <Badge className="bg-emerald-950 text-emerald-400 border-emerald-800 mb-6 px-6 py-2 text-sm uppercase tracking-[0.3em] font-black">
              Pusat Bantuan
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-6 tracking-tighter uppercase font-outfit">
              PERTANYAAN <span className="text-emerald-500">UMUM</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Temukan jawaban cepat untuk pertanyaan yang paling sering diajukan mengenai petualangan rafting kami.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {faqData.map((category, i) => (
            <ScrollReveal key={i} delay={i * 100} className={i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <Card className="border border-emerald-100 shadow-sm hover:shadow-premium transition-all duration-500 bg-white rounded-[2.5rem] overflow-hidden group hover-lift h-full flex flex-col">
                <div className="bg-emerald-950 p-6 flex items-center justify-between group-hover:bg-black transition-colors">
                  <div className="flex items-center gap-3 text-white">
                    <category.icon className="h-6 w-6 text-emerald-400" />
                    <h3 className="text-sm font-black uppercase tracking-widest">{category.category}</h3>
                  </div>
                  <HelpCircle className="h-5 w-5 text-emerald-800" />
                </div>
                <CardContent className="p-4 flex-grow">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, j) => (
                      <AccordionItem key={j} value={`${i}-${j}`} className="border-emerald-50 px-2 last:border-0">
                        <AccordionTrigger className="text-left font-bold text-emerald-950 hover:text-emerald-500 py-4 text-xs uppercase tracking-wider">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-4 text-sm leading-relaxed font-medium">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Banner */}
        <ScrollReveal delay={400}>
          <div className="mt-20">
            <div className="bg-emerald-950 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center max-w-5xl mx-auto">
              {/* Abstract Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -ml-32 -mb-32" />

              <div className="relative z-10">
                <h3 className="text-white text-3xl md:text-5xl font-black mb-6 font-outfit uppercase leading-none">
                  MASIH PUNYA <br /> <span className="text-emerald-400">PERTANYAAN?</span>
                </h3>
                <p className="text-emerald-100/60 font-medium mb-10 max-w-xl mx-auto text-lg">
                  Tim kami siap menjawab segala kebutuhan dan keraguan Anda secara real-time.
                </p>
                <a
                  href={getWhatsAppUrl('Halo Sembar Adventure, saya ingin bertanya')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white h-16 px-12 text-lg rounded-2xl shadow-xl transition-all duration-300 font-black group uppercase tracking-widest">
                    HUBUNGI KAMI SEKARANG
                    <MessageCircle className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
