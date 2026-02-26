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
    category: 'Persyaratan',
    icon: Users,
    faqs: [
      {
        q: 'Berapa usia minimal untuk rafting?',
        a: 'Usia minimal 7 tahun untuk Family Trip, 10 tahun untuk Panorama Trip, dan 12 tahun untuk Adventure Trip. Anak-anak harus didampingi orang tua.'
      },
      {
        q: 'Apakah harus bisa berenang?',
        a: 'Tidak wajib, karena semua peserta wajib menggunakan pelampung (life jacket) dan helm. Namun untuk kenyamanan, kemampuan berenang dasar sangat direkomendasikan.'
      },
      {
        q: 'Apakah ada batasan berat badan?',
        a: 'Ya, berat badan maksimal 100 kg untuk kenyamanan dan keamanan perahu. Jika ada kondisi khusus, silakan konsultasikan terlebih dahulu.'
      },
      {
        q: 'Apakah ibu hamil boleh rafting?',
        a: 'Maaf, ibu hamil tidak diizinkan untuk rafting demi keselamatan. Namun kami menyediakan alternatif aktivitas seperti cafe dan area bermain.'
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
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4 px-4 py-2">
              <HelpCircle className="h-4 w-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Cari jawaban untuk pertanyaan Anda tentang rafting dan layanan kami
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-5">
          {faqData.map((category, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-5">
                  <div className="flex items-center gap-3 text-white">
                    <category.icon className="h-6 w-6" />
                    <h3 className="text-lg font-bold">{category.category}</h3>
                  </div>
                </div>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, j) => (
                      <AccordionItem key={j} value={`${i}-${j}`} className="px-6 border-b last:border-0">
                        <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-emerald-600 py-4">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-4">
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

        {/* CTA */}
        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <Card className="inline-block border-0 shadow-lg bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-500 p-3 rounded-xl">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">Masih punya pertanyaan?</p>
                    <p className="text-gray-600 text-sm">Chat langsung dengan tim kami</p>
                  </div>
                  <a 
                    href={getWhatsAppUrl('Halo Sembah Adventure, saya ingin bertanya')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full">
                      Chat WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
