'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { CalendarIcon, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PackageType } from './PackageCard'

interface BookingDialogProps {
  pkg: PackageType | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingDialog({ pkg, open, onOpenChange }: BookingDialogProps) {
  const [date, setDate] = useState<Date>()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    people: '1',
    notes: '',
  })
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!pkg || !date) return

    setLoading(true)
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId: pkg.id,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          bookingDate: date.toISOString(),
          numberOfPeople: parseInt(formData.people),
          notes: formData.notes,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setTimeout(() => {
          onOpenChange(false)
          setSuccess(false)
          setFormData({ name: '', email: '', phone: '', people: '1', notes: '' })
          setDate(undefined)
        }, 2000)
      }
    } catch (error) {
      console.error('Booking error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!pkg) return null

  const totalPrice = pkg.price * parseInt(formData.people || '1')

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Booking: {pkg.name}</DialogTitle>
          <DialogDescription>
            Isi form di bawah untuk melakukan pemesanan. Kami akan menghubungi Anda untuk konfirmasi.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Booking Berhasil!</h3>
            <p className="text-gray-500">Kami akan segera menghubungi Anda.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">No. Telepon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Tanggal Booking</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'justify-start text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'd MMMM yyyy', { locale: id }) : 'Pilih tanggal'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="people">Jumlah Orang</Label>
                  <Input
                    id="people"
                    type="number"
                    min="1"
                    max="50"
                    value={formData.people}
                    onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Catatan (Opsional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Permintaan khusus, pertanyaan, dll."
                  rows={3}
                />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-emerald-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Harga per orang</span>
                <span>Rp {pkg.price.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Jumlah orang</span>
                <span>{formData.people || 1}</span>
              </div>
              <div className="border-t border-emerald-200 pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-emerald-600">Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading || !date}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Memproses...
                </>
              ) : (
                'Konfirmasi Booking'
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
