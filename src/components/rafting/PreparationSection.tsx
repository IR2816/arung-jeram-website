'use client'

import { ScrollReveal } from './Animations'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Check, X, ShieldAlert } from 'lucide-react'

export function PreparationSection() {
  const toBring = [
    "Pakaian ganti lengkap (baju, celana, pakaian dalam)",
    "Sandal gunung atau sepatu olahraga yang nyaman",
    "Peralatan mandi & handuk",
    "Sunblock / tabir surya",
    "Obat-obatan pribadi",
    "Kantong plastik untuk pakaian basah",
  ]

  const notToBring = [
    "Perhiasan berharga (kalung, gelang, cincin)",
    "Pakaian berbahan jeans tebal",
    "Gadget atau elektronik tanpa pelindung air (dry bag)",
    "Uang tunai dalam jumlah berlebihan",
    "Membawa hewan peliharaan",
  ]

  return (
    <section className="py-20 md:py-32 bg-emerald-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2 text-xs uppercase tracking-widest font-bold">
              Persiapan
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Apa yang Perlu Disiapkan?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Agar pengalaman rafting Anda maksimal dan tetap aman, perhatikan daftar bawaan berikut sebelum berangkat ke Sembar Adventure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What to Bring */}
          <ScrollReveal delay={100}>
            <Card className="h-full border-0 shadow-lg rounded-3xl overflow-hidden bg-white">
              <div className="bg-emerald-500 p-6 flex items-center gap-4 text-white">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Harus Dibawa</h3>
                  <p className="text-emerald-50 text-sm">Persiapan wajib untuk kenyamanan</p>
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {toBring.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* What NOT to Bring */}
          <ScrollReveal delay={200}>
            <Card className="h-full border-0 shadow-lg rounded-3xl overflow-hidden bg-white">
              <div className="bg-rose-500 p-6 flex items-center gap-4 text-white">
                <div className="bg-white/20 p-3 rounded-xl">
                  <X className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Dihindari</h3>
                  <p className="text-rose-50 text-sm">Demi keamanan dan keselamatan barang</p>
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {notToBring.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
                        <X className="h-3 w-3 text-rose-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
                  <ShieldAlert className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <p className="text-sm text-amber-800 font-medium">
                    Tersedia loker penitipan barang yang aman di basecamp kami secara gratis.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
