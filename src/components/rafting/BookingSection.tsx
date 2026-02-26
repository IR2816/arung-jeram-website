'use client'

import { useState } from 'react'
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
import { CalendarIcon, Send, Users, Phone, User, Package, CheckCircle } from 'lucide-react'
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
    <section id="booking" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">
              Booking
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Booking Sekarang
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Isi form di bawah dan langsung terhubung ke WhatsApp kami untuk konfirmasi booking!
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <Card className="border-0 shadow-2xl bg-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Form Booking
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Nama */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Nama Lengkap *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama lengkap"
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl h-12"
                    />
                  </div>

                  {/* No HP */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      No. WhatsApp *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="08xxxxxxxxxx"
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl h-12"
                    />
                  </div>

                  {/* Pilih Paket */}
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Pilih Paket *
                    </Label>
                    <Select value={formData.package} onValueChange={(value) => setFormData({ ...formData, package: value })}>
                      <SelectTrigger className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl h-12">
                        <SelectValue placeholder="Pilih paket rafting" />
                      </SelectTrigger>
                      <SelectContent>
                        {packages.map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.id}>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{pkg.name}</span>
                              <span className="text-emerald-600">- Rp {pkg.price.toLocaleString('id-ID')}</span>
                              <span className="text-gray-400 text-xs">({pkg.distance})</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {selectedPackage && (
                      <div className="bg-emerald-50 rounded-xl p-4 mt-2">
                        <p className="text-sm text-emerald-700">
                          <strong>{selectedPackage.name}</strong> • {selectedPackage.distance} • {selectedPackage.duration}
                        </p>
                        <p className="text-lg font-bold text-emerald-600 mt-1">
                          Rp {selectedPackage.price.toLocaleString('id-ID')} per perahu
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Tanggal & Jumlah Peserta */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        Tanggal *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              'w-full justify-start text-left font-normal border-gray-200 rounded-xl h-12',
                              !date && 'text-muted-foreground'
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, 'd MMM yyyy', { locale: id }) : 'Pilih tanggal'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date() || date.getDay() === 5} // Jumat tutup
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Jumlah Peserta
                      </Label>
                      <Input
                        type="number"
                        min="1"
                        max="50"
                        value={formData.participants}
                        onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl h-12"
                      />
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">Tambah Layanan (Opsional)</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {addOnOptions.map((addon) => (
                        <button
                          key={addon.id}
                          type="button"
                          onClick={() => toggleAddon(addon.name)}
                          className={cn(
                            'p-3 rounded-xl border-2 text-left transition-all',
                            formData.addons.includes(addon.name)
                              ? 'border-emerald-500 bg-emerald-50'
                              : 'border-gray-200 hover:border-gray-300'
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{addon.name}</span>
                            {formData.addons.includes(addon.name) && (
                              <CheckCircle className="h-4 w-4 text-emerald-500" />
                            )}
                          </div>
                          <span className="text-xs text-gray-500">+Rp {addon.price.toLocaleString('id-ID')}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Catatan */}
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-gray-700 font-medium">Catatan Tambahan</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Ada permintaan khusus? Tulis di sini..."
                      rows={3}
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    onClick={handleBooking}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    disabled={!formData.name || !formData.phone || !formData.package || !date}
                  >
                    <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Booking via WhatsApp
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
