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
import { getBookingUrl } from '@/lib/whatsapp'

const packages = [
  { id: 'fun-rafting', name: 'Fun Rafting', price: 100000, duration: '15 menit', distance: '1 KM' },
  { id: 'family-trip', name: 'Family Trip', price: 150000, duration: '±1 jam', distance: '5 KM' },
  { id: 'adventure-trip', name: 'Adventure Trip', price: 250000, duration: '±2,5 jam', distance: '12 KM' },
  { id: 'longtrip', name: 'Longtrip', price: 300000, duration: '2,5 jam', distance: '12 KM' },
]


const documentationPriceMap: Record<string, number> = {
  'fun-rafting': 100000,
  'family-trip': 150000,
  'adventure-trip': 250000,
  'longtrip': 300000,
};


type DocumentationOption = { id: string; name: string; price: number };
function getDocumentationOptions(selectedPackageId: string): DocumentationOption[] {
  const options: (DocumentationOption | null)[] = [
    { id: 'none', name: 'Tidak, Terima Kasih', price: 0 },
    selectedPackageId && documentationPriceMap[selectedPackageId]
      ? { id: 'foto-video', name: 'Foto & Video', price: documentationPriceMap[selectedPackageId] }
      : null,
  ];
  return options.filter((x): x is DocumentationOption => x !== null);
}


export function BookingSection() {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    package: '',
    participants: 6,
    documentation: 'none',
    notes: '',
  })

  // Smart calculations
  const selectedPackage = packages.find(p => p.id === formData.package)
  const docOptions = getDocumentationOptions(formData.package);
  const selectedDocInfo = docOptions.find(d => d.id === formData.documentation) ?? docOptions[0] ?? { price: 0 };
  
  const totalBoats = Math.ceil(formData.participants / 6) // Asumsi 1 perahu max 6 pax
  const subtotalPackage = (selectedPackage?.price || 0) * formData.participants
  const subtotalDoc = selectedDocInfo.price * totalBoats
  const totalPrice = subtotalPackage + subtotalDoc

  useEffect(() => {
    const handlePackageSelect = (e: any) => {
      setFormData(prev => ({ ...prev, package: e.detail }));
      setStep(2); // Auto advance to next step when package is selected from another component
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    };
    window.addEventListener('select-package', handlePackageSelect);
    return () => window.removeEventListener('select-package', handlePackageSelect);
  }, []);

  const generateWhatsAppMessage = () => {
    const packageName = selectedPackage?.name || 'Paket tidak dipilih'
    const dateStr = date ? format(date, 'EEEE, d MMMM yyyy', { locale: id }) : 'Tanggal belum dipilih'
    const docOption = docOptions.find(d => d.id === formData.documentation)
    const docText = docOption && docOption.id !== 'none' ? `\n📸 Dokumentasi: ${docOption.name}` : ''

    const message = `🌊 BOOKING SEMBAR ADVENTURE

👤 Nama: ${formData.name}
📱 No HP: ${formData.phone}
📅 Tanggal: ${dateStr}

📦 Paket: ${packageName}
👥 Jumlah Peserta: ${formData.participants} orang
🛶 Estimasi: ${totalBoats} Perahu${docText}

💰 ESTIMASI BIAYA:
- Paket (${formData.participants} pax): Rp ${subtotalPackage.toLocaleString('id-ID')}
- Dokumentasi (${totalBoats} perahu): Rp ${subtotalDoc.toLocaleString('id-ID')}
-------------------------
💎 TOTAL: *Rp ${totalPrice.toLocaleString('id-ID')}*

📝 Catatan:
${formData.notes || '-'}

_Dikirim dari website sembaradventure.com_`

    return message
  }

  const handleBooking = () => {
    if (!formData.name || !formData.phone || !formData.package || !date) {
      alert('Mohon lengkapi semua data yang bertanda bintang (*)')
      return
    }

    const message = generateWhatsAppMessage()
    const url = getBookingUrl(message)
    const a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const nextStep = () => {
    if (step === 1 && !formData.package) return alert('Silakan pilih paket rafting terlebih dahulu.');
    if (step === 2 && !date) return alert('Silakan pilih tanggal keberangkatan.');
    if (step === 3 && (!formData.name || !formData.phone)) return alert('Silakan lengkapi data diri Anda.');
    if (step < 3) setStep(step + 1);
  }
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  }

  return (
    <section id="booking" className="relative py-24 md:py-32 overflow-hidden bg-background">
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
              <Card className="border border-border/50 shadow-xl shadow-black/5 bg-background rounded-[2.5rem] overflow-hidden relative group hover:border-emerald-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Progress Header */}
                <div className="bg-emerald-50/30 px-8 py-6 border-b border-border/50">
                  <div className="flex items-center justify-between relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-emerald-100 z-0">
                      <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }} />
                    </div>
                    {[
                      { num: 1, label: "Pilih Paket" },
                      { num: 2, label: "Detail Reservasi" },
                      { num: 3, label: "Selesai" }
                    ].map((s) => (
                      <div key={s.num} className="relative z-10 flex flex-col items-center gap-2">
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ring-4 ring-background",
                          step >= s.num ? "bg-emerald-500 text-white" : "bg-emerald-100 text-emerald-400"
                        )}>
                          {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
                        </div>
                        <span className={cn(
                          "text-xs font-bold uppercase tracking-wider hidden sm:block",
                          step >= s.num ? "text-emerald-950" : "text-muted-foreground/50"
                        )}>
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <CardContent className="p-8 md:p-12 relative z-10 min-h-[400px]">
                  {/* Step 1: Pilih Paket */}
                  {step === 1 && (
                    <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-500">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">Pilih Paket Anda</h3>
                        <p className="text-sm font-medium text-muted-foreground">Pilih paket rafting yang sesuai dengan keinginan Anda.</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {packages.map((pkg) => (
                          <div 
                            key={pkg.id}
                            onClick={() => {
                                setFormData(prev => ({ ...prev, package: pkg.id }));
                                setTimeout(() => setStep(2), 250);
                            }}
                            className={cn(
                              "relative p-6 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-lg group",
                              formData.package === pkg.id 
                                ? "border-emerald-500 bg-emerald-50 shadow-emerald-500/10" 
                                : "border-emerald-100/50 hover:border-emerald-500/50 bg-background"
                            )}
                          >
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-black text-lg text-emerald-950 uppercase tracking-tight group-hover:text-emerald-600 transition-colors">{pkg.name}</h4>
                              <Package className={cn("w-6 h-6 transition-colors", formData.package === pkg.id ? "text-emerald-500" : "text-emerald-200 group-hover:text-emerald-400")} />
                            </div>
                            <div className="space-y-1.5 mb-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                              <p className="flex items-center gap-2"><span className="text-emerald-500">⏱️</span> {pkg.duration}</p>
                              <p className="flex items-center gap-2"><span className="text-emerald-500">🌊</span> {pkg.distance}</p>
                            </div>
                            <p className="text-emerald-600 font-black text-2xl tracking-tighter">
                              Rp {pkg.price.toLocaleString('id-ID')}
                              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">/ pax</span>
                            </p>
                            
                            {formData.package === pkg.id && (
                              <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg animate-in zoom-in">
                                <CheckCircle className="w-5 h-5" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-6">
                        <Button 
                          onClick={nextStep} 
                          disabled={!formData.package}
                          className="w-full h-14 rounded-2xl bg-emerald-950 hover:bg-black text-white font-black text-xs uppercase tracking-widest transition-all"
                        >
                          Lanjut Detail Reservasi
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Detail Reservasi */}
                  {step === 2 && (
                    <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-500">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">Detail Reservasi</h3>
                        <p className="text-sm font-medium text-muted-foreground">Lengkapi data diri dan pesanan Anda.</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Nama */}
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                            Nama Lengkap <span className="text-red-500">*</span>
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
                            No. WhatsApp <span className="text-red-500">*</span>
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

                        {/* Tanggal */}
                        <div className="space-y-3">
                          <Label className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                            Tanggal Kedatangan <span className="text-red-500">*</span>
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  'w-full justify-start text-left font-bold border-emerald-100 rounded-xl md:rounded-2xl h-12 md:h-14 bg-emerald-50/30 text-xs md:text-sm',
                                  !date && 'text-gray-400 font-bold hover:text-emerald-950 transition-colors'
                                )}
                              >
                                <CalendarIcon className={cn("mr-3 h-5 w-5", date ? "text-emerald-500" : "text-emerald-300")} />
                                {date ? <span className="text-emerald-950">{format(date, 'd MMM yyyy', { locale: id })}</span> : 'Pilih tanggal'}
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

                        {/* Peserta */}
                        <div className="space-y-3">
                          <Label className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                            Jumlah Orang <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500/50" />
                            <Input
                              type="number"
                              min="1"
                              value={formData.participants}
                              onChange={(e) => setFormData({ ...formData, participants: parseInt(e.target.value) || 1 })}
                              className="pl-12 border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl md:rounded-2xl h-12 md:h-14 bg-emerald-50/30 font-black text-emerald-950 text-xs md:text-sm"
                            />
                          </div>
                        </div>

                        {/* Dokumentasi */}
                        <div className="md:col-span-2 space-y-3">
                          <Label className="text-emerald-950 font-black text-[10px] uppercase tracking-widest pl-1">
                            Tambahan Dokumentasi
                          </Label>
                          <Select value={formData.documentation} onValueChange={(value) => setFormData({ ...formData, documentation: value })}>
                            <SelectTrigger className="border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl md:rounded-2xl h-12 md:h-14 bg-emerald-50/30 font-bold text-xs md:text-sm">
                              <SelectValue placeholder="Pilih dokumentasi" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-emerald-100 font-bold text-xs md:text-sm">
                              {docOptions.map((doc) => (
                                <SelectItem key={doc.id} value={doc.id}>
                                  <div className="flex items-center gap-2">
                                    <span className="text-emerald-950 font-black">{doc.name}</span>
                                    {doc.price > 0 && <span className="text-emerald-600 font-bold ml-1">(+ Rp {doc.price.toLocaleString('id-ID')} / perahu)</span>}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-8 border-t border-border/50">
                        <Button 
                          onClick={prevStep} 
                          variant="outline"
                          className="w-1/3 h-14 rounded-2xl border-border/50 font-bold hover:bg-muted text-xs uppercase tracking-widest"
                        >
                          Tinjau Paket
                        </Button>
                        <Button 
                          onClick={nextStep}
                          disabled={!date || !formData.name || !formData.phone}
                          className="w-2/3 h-14 rounded-2xl bg-emerald-950 hover:bg-black text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-900/10"
                        >
                          Lanjut Ringkasan
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Ringkasan */}
                  {step === 3 && (
                    <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-500">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">Ringkasan Reservasi</h3>
                        <p className="text-sm font-medium text-muted-foreground">Periksa kembali detail pesanan Anda sebelum mengirim pesan.</p>
                      </div>

                      <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 md:p-8 space-y-6">
                        <div className="grid grid-cols-2 gap-y-5 text-sm">
                          <div className="text-muted-foreground font-bold uppercase tracking-wider text-[10px]">Nama Pemesan</div>
                          <div className="font-black text-right text-emerald-950">{formData.name}</div>
                          
                          <div className="text-muted-foreground font-bold uppercase tracking-wider text-[10px]">No. WhatsApp</div>
                          <div className="font-black text-right text-emerald-950">{formData.phone}</div>
                          
                          <div className="text-muted-foreground font-bold uppercase tracking-wider text-[10px]">Tanggal Trip</div>
                          <div className="font-black text-right text-emerald-950">
                            {date ? format(date, 'd MMMM yyyy', { locale: id }) : '-'}
                          </div>

                          <div className="col-span-2 border-t border-emerald-100/50 my-1" />

                          <div className="text-muted-foreground font-bold uppercase tracking-wider text-[10px]">Paket Rafting</div>
                          <div className="font-black text-right text-emerald-600">{selectedPackage?.name}</div>

                          <div className="text-muted-foreground font-bold uppercase tracking-wider text-[10px]">Total Peserta</div>
                          <div className="flex flex-col items-end">
                            <span className="font-black text-emerald-950">{formData.participants} Orang</span>
                            <span className="text-[10px] font-bold text-muted-foreground">(Estimasi {totalBoats} Perahu)</span>
                          </div>

                          <div className="text-muted-foreground font-bold uppercase tracking-wider text-[10px]">Dokumentasi</div>
                          <div className="font-black text-right text-emerald-950">{docOptions.find(d => d.id === formData.documentation)?.name}</div>
                        </div>

                        <div className="bg-emerald-950 rounded-2xl p-5 mt-4 shadow-xl">
                          <div className="flex justify-between items-center text-white">
                            <span className="font-bold uppercase tracking-widest text-[10px] text-emerald-400">Total Biaya</span>
                            <span className="text-2xl font-black tracking-tighter">
                              Rp {totalPrice.toLocaleString('id-ID')}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <Button 
                          onClick={prevStep} 
                          variant="outline"
                          className="w-full sm:w-1/3 h-14 md:h-16 rounded-2xl border-border/50 font-bold hover:bg-muted text-xs uppercase tracking-widest"
                        >
                          Ubah Detail
                        </Button>
                        <Button
                          onClick={handleBooking}
                          className="w-full sm:w-2/3 h-14 md:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-2xl shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:shadow-emerald-500/40 font-black uppercase tracking-widest text-xs md:text-sm group"
                        >
                          Kirim Reservasi WhatsApp
                          <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                      </div>
                      
                      <p className="text-center text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                        * Data Anda aman & kami konfirmasi secepatnya
                      </p>
                    </div>
                  )}

                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
