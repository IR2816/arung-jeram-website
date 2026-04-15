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
  { id: 'fun-rafting', name: 'Fun Rafting', price: 100000, duration: '15 menit', distance: '1 KM' },
  { id: 'family-trip', name: 'Family Trip', price: 150000, duration: '±1 jam', distance: '5 KM' },
  { id: 'adventure-trip', name: 'Adventure Trip', price: 250000, duration: '±2,5 jam', distance: '12 KM' },
  { id: 'longtrip', name: 'Longtrip', price: 300000, duration: '2,5 jam', distance: '12 KM' },
]

const documentationOptions = [
  { id: 'none', name: 'Tidak, Terima Kasih' },
  { id: 'foto-video-fun', name: 'Foto & Video — Rp 100.000/perahu (Fun Rafting)' },
  { id: 'foto-video-family', name: 'Foto & Video — Rp 150.000/perahu (Family/Panorama Trip)' },
  { id: 'foto-video-adventure', name: 'Foto & Video — Rp 250.000/perahu (Adventure Trip)' },
  { id: 'foto-video-longtrip', name: 'Foto & Video — Rp 300.000/perahu (Longtrip)' },
]


export function BookingSection() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    package: '',
    participants: '6',
    documentation: 'none',
    notes: '',
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
    const docOption = documentationOptions.find(d => d.id === formData.documentation)
    const docText = docOption && docOption.id !== 'none' ? `\n📸 Dokumentasi: ${docOption.name}` : ''

    const message = `🌊 BOOKING SEMBAR ADVENTURE

👤 Nama: ${formData.name}
📱 No HP: ${formData.phone}
📦 Paket: ${packageName}
👥 Jumlah Peserta: ${formData.participants} orang
📅 Tanggal: ${dateStr}${docText}

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

  return (
    <section id="booking" className="relative py-24 md:py-32 overflow-hidden bg-gray-50/50">
      {/* Immersive Background Decorations */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] rounded-full backdrop-blur-sm shadow-sm">
              Booking Trip
            </Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tighter uppercase font-outfit max-w-3xl mx-auto leading-tight">
              AMANKAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">TRIP</span> ANDA
            </h2>
            <p className="text-muted-foreground/80 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Isi form berikut dan kami akan konfirmasi via WhatsApp. Pembayaran via BCA — bisa DP atau lunas sesuai kesepakatan.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Why Book With Us Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-emerald-950 rounded-[2.5rem] p-8 md:p-10 text-white h-full relative overflow-hidden group shadow-2xl transition-transform duration-500 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-emerald-400/20 group-hover:scale-150 transition-all duration-700 ease-out" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-8 leading-tight uppercase font-outfit tracking-tight relative z-10">
                  Benefit <br />Booking Kami
                </h3>
                <ul className="space-y-6 md:space-y-8 relative z-10 flex-grow">
                  {[
                    { title: "Konfirmasi Cepat", subtitle: "Real-time via WhatsApp", icon: CheckCircle },
                    { title: "Pembayaran Aman", subtitle: "Transfer via Bank BCA", icon: Send },
                    { title: "Fasilitas Standar SNI", subtitle: "Peralatan selalu dicek", icon: Shield },
                    { title: "Rescue Siaga", subtitle: "Tim profesional di titik rawan", icon: User }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-5 items-start group/item">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-3 shadow-inner">
                        <item.icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div className="flex flex-col pt-0.5">
                        <p className="text-white font-bold text-sm uppercase tracking-wide">{item.title}</p>
                        <p className="text-emerald-100/60 font-medium text-xs mt-1">{item.subtitle}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 w-full mb-0 pb-0">
                  <div className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-inner">
                    <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />Live Support
                    </p>
                    <p className="text-xs text-white/80 font-medium leading-relaxed">Tim kami aktif melayani pukul 08:00 - 20:00 WIB.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Main Booking Form */}
          <div className="lg:w-2/3">
            <ScrollReveal delay={200}>
              <Card className="border border-border/50 shadow-xl shadow-black/5 bg-background rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 relative group hover:border-emerald-500/20">
                {/* Subtle gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Nama */}
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                        Nama Lengkap
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500/50" />
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Budi Santoso"
                          className="pl-12 border-border/50 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl md:rounded-2xl h-12 md:h-14 bg-muted/30 transition-colors hover:bg-muted/50 font-bold placeholder:text-muted-foreground/50 text-xs md:text-sm"
                        />
                      </div>
                    </div>

                    {/* No HP */}
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                        No. WhatsApp
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500/50" />
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="08xxxxxxxxxx"
                          className="pl-12 border-border/50 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl md:rounded-2xl h-12 md:h-14 bg-muted/30 transition-colors hover:bg-muted/50 font-bold placeholder:text-muted-foreground/50 text-xs md:text-sm"
                        />
                      </div>
                    </div>

                    {/* Pilih Paket */}
                    <div className="md:col-span-2 space-y-3">
                      <Label className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                        Pilih Paket Petualangan
                      </Label>
                      <Select value={formData.package} onValueChange={(value) => setFormData({ ...formData, package: value })}>
                        <SelectTrigger className="border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl md:rounded-2xl h-12 md:h-14 bg-emerald-50/30 font-bold text-xs md:text-sm">
                          <SelectValue placeholder="Pilih paket rafting" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl md:rounded-2xl border-emerald-100 font-bold text-xs md:text-sm">
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
                              'w-full justify-start text-left font-bold border-emerald-100 rounded-xl md:rounded-2xl h-12 md:h-14 bg-emerald-50/30 text-xs md:text-sm',
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
                          className="pl-12 border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl md:rounded-2xl h-12 md:h-14 bg-emerald-50/30 font-bold text-xs md:text-sm"
                        />
                      </div>
                    </div>

                    {/* Dokumentasi */}
                    <div className="md:col-span-2 space-y-2 md:space-y-3">
                      <Label className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                        Dokumentasi Premium
                      </Label>
                      <Select value={formData.documentation} onValueChange={(value) => setFormData({ ...formData, documentation: value })}>
                        <SelectTrigger className="border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl md:rounded-2xl h-12 md:h-14 bg-emerald-50/30 font-bold text-xs md:text-sm">
                          <SelectValue placeholder="Pilih paket dokumentasi" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl md:rounded-2xl border-emerald-100 font-bold text-xs md:text-sm">
                          {documentationOptions.map((opt) => (
                            <SelectItem key={opt.id} value={opt.id}>
                              <span className="font-black text-emerald-900">{opt.name}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8 md:mt-12">
                    <Button
                      onClick={handleBooking}
                      className="w-full h-14 md:h-16 bg-emerald-950 hover:bg-black text-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-300 group font-black uppercase tracking-widest text-xs md:text-sm"
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
