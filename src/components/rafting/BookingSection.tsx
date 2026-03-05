'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Calendar as CalendarComponent
} from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { CalendarIcon, Send, Users, Phone, User, Package, CheckCircle, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollReveal } from './Animations'
import { getWhatsAppUrl } from '@/lib/whatsapp'

const packages = [
  { id: 'family', name: 'Family Trip', price: 650000, duration: '1 jam 20 menit', distance: '5 KM' },
  { id: 'panorama', name: 'Panorama Trip', price: 700000, duration: '80 menit', distance: '7 KM' },
  { id: 'adventure', name: 'Adventure Trip', price: 850000, duration: '2,5 jam', distance: '12 KM' },
]

const addOnOptions = [
  { id: 'dokumentasi-foto', name: 'Dokumentasi 10 Foto', price: 150000 },
  { id: 'dokumentasi-video', name: 'Dokumentasi Video', price: 200000 },
  { id: 'makan', name: 'Paket Makan', price: 25000 },
  { id: 'minum', name: 'Es Kelapa Muda', price: 15000 },
]

export function BookingSection() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    package: '',
    participants: '6',
    notes: '',
    addons: [] as string[],
  })

  useEffect(() => {
    const handlePackageSelect = (e: any) => {
      setFormData(prev => ({ ...prev, package: e.detail }));
    };
    window.addEventListener('select-package', handlePackageSelect);
    return () => window.removeEventListener('select-package', handlePackageSelect);
  }, []);

  const selectedPackage = packages.find(p => p.id === formData.package)

  const generateWhatsAppMessage = () => {
    const packageName = selectedPackage?.name || 'Paket tidak dipilih'
    const dateStr = date ? format(date, 'EEEE, d MMMM yyyy', { locale: id }) : 'Tanggal belum dipilih'
    const addonsStr = formData.addons.length > 0
      ? `\nAddon: ${formData.addons.join(', ')}`
      : ''

    const message = `🌊 BOOKING SEMBAR ADVENTURE

👤 Nama: ${formData.name}
📱 No HP: ${formData.phone}
📦 Paket: ${packageName}
👥 Jumlah Peserta: ${formData.participants} orang
📅 Tanggal: ${dateStr}${addonsStr}

📝 Catatan:
${formData.notes || '-'}

_Dikirim dari website sembaradventure.com_`

    return message
  }

  const handleBooking = () => {
    if (!formData.name || !formData.phone || !formData.package || !date) {
      alert('Mohon lengkapi semua data yang diperlukan')
      return
    }

    const message = generateWhatsAppMessage()
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  const toggleAddon = (addonId: string) => {
    setFormData(prev => ({
      ...prev,
      addons: prev.addons.includes(addonId)
        ? prev.addons.filter(a => a !== addonId)
        : [...prev.addons, addonId]
    }))
  }

  return (
    <section id="booking" className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Immersive Background Decorations */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-emerald-950 text-emerald-400 border-emerald-800 mb-6 px-6 py-2 text-sm uppercase tracking-[0.3em] font-black">
              Reservasi Cepat
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-6 tracking-tighter uppercase font-outfit">
              AMANKAN <span className="text-emerald-500">JADWAL</span> ANDA
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Wujudkan petualangan impian Anda dengan pengisian form singkat yang langsung terhubung ke WhatsApp Admin kami.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Why Book With Us Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-emerald-950 rounded-[2.5rem] p-8 text-white h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 opacity-10 rounded-full blur-2xl -mr-10 -mt-10" />
                <h3 className="text-2xl font-black mb-8 leading-tight uppercase font-outfit">Benefit <br />Booking Kami</h3>
                <ul className="space-y-6">
                  {[
                    { title: "Konfirmasi Real-time", icon: CheckCircle },
                    { title: "Pembayaran Aman", icon: Send },
                    { title: "SOP Internasional", icon: Shield },
                    { title: "Asuransi Lengkap", icon: User }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-4 w-4 text-emerald-400" />
                      </div>
                      <p className="text-emerald-100/80 text-sm font-bold uppercase tracking-wide pt-1">{item.title}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 p-4 glass-dark rounded-2xl border border-white/10">
                  <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Live Support</p>
                  <p className="text-xs text-white/60 font-medium">Tim kami aktif melayani pukul 08:00 - 20:00 WIB.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Main Booking Form */}
          <div className="lg:w-2/3">
            <ScrollReveal delay={200}>
              <Card className="border border-emerald-100 shadow-premium bg-white rounded-[2.5rem] overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Nama */}
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                        Nama Lengkap
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-300" />
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Budi Santoso"
                          className="pl-12 border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl h-14 bg-emerald-50/30 font-bold placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    {/* No HP */}
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                        No. WhatsApp
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-300" />
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="08xxxxxxxxxx"
                          className="pl-12 border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl h-14 bg-emerald-50/30 font-bold placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    {/* Pilih Paket */}
                    <div className="md:col-span-2 space-y-3">
                      <Label className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                        Pilih Paket Petualangan
                      </Label>
                      <Select value={formData.package} onValueChange={(value) => setFormData({ ...formData, package: value })}>
                        <SelectTrigger className="border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl h-14 bg-emerald-50/30 font-bold">
                          <SelectValue placeholder="Pilih paket rafting" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-emerald-100 font-bold">
                          {packages.map((pkg) => (
                            <SelectItem key={pkg.id} value={pkg.id}>
                              <div className="flex items-center gap-2">
                                <span className="font-black text-emerald-900">{pkg.name}</span>
                                <span className="text-emerald-500 font-medium">Rp {pkg.price.toLocaleString('id-ID')}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Tanggal & Peserta */}
                    <div className="space-y-3">
                      <Label className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                        Tanggal Kedatangan
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              'w-full justify-start text-left font-bold border-emerald-100 rounded-2xl h-14 bg-emerald-50/30',
                              !date && 'text-gray-300 font-bold'
                            )}
                          >
                            <CalendarIcon className="mr-3 h-5 w-5 text-emerald-300" />
                            {date ? format(date, 'd MMM yyyy', { locale: id }) : 'Pilih tanggal'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 rounded-2xl border-emerald-100 overflow-hidden shadow-2xl">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                        Jumlah Orang
                      </Label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-300" />
                        <Input
                          type="number"
                          min="1"
                          max="50"
                          value={formData.participants}
                          onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                          className="pl-12 border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl h-14 bg-emerald-50/30 font-bold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-12">
                    <Button
                      onClick={handleBooking}
                      className="w-full h-16 bg-emerald-950 hover:bg-black text-white rounded-2xl shadow-xl transition-all duration-300 group font-black uppercase tracking-widest"
                      disabled={!formData.name || !formData.phone || !formData.package || !date}
                    >
                      Kirim Reservasi WhatsApp
                      <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">
                      * data aman & tidak akan disebarluaskan
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
