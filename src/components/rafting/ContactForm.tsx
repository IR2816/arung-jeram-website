'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Loader2, Send, CheckCircle } from 'lucide-react'
import { ScrollReveal } from './Animations'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setSuccess(false), 3000)
      }
    } catch (error) {
      console.error('Contact error:', error)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    { icon: MapPin, title: 'Alamat', content: 'Jl. Lembah Cisadane Jl. H. Miing No.1a, RT.4/RW.2, Putat Nutug, Kec. Ciseeng, Kabupaten Bogor, Jawa Barat 16120', color: 'from-emerald-400 to-teal-500' },
    { icon: Phone, title: 'Telepon', content: '+62 812-3456-7890', color: 'from-blue-400 to-cyan-500' },
    { icon: Mail, title: 'Email', content: 'info@sembahadventure.com', color: 'from-amber-400 to-orange-500' },
    { icon: Clock, title: 'Jam Operasional', content: 'Senin - Kamis, Sabtu - Minggu: 10:00 - 16:30 WIB', color: 'from-purple-400 to-pink-500' },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Contact Info */}
      <div className="space-y-6">
        <ScrollReveal>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Hubungi Kami</h3>
            <p className="text-gray-600 text-lg">
              Ada pertanyaan atau ingin informasi lebih lanjut? Jangan ragu untuk menghubungi kami.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {contactInfo.map((info, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 group overflow-hidden">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${info.color} p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{info.title}</h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* WhatsApp Button */}
        <ScrollReveal delay={400}>
          <a href={getWhatsAppUrl('Halo Sembah Adventure, saya ingin bertanya')} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
              <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat via WhatsApp
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </a>
        </ScrollReveal>
      </div>

      {/* Contact Form */}
      <ScrollReveal direction="right">
        <Card className="border-0 shadow-2xl bg-white overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6">
            <CardTitle className="text-xl flex items-center gap-2">
              <Send className="h-5 w-5" />
              Kirim Pesan
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {success ? (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pesan Terkirim!</h3>
                <p className="text-gray-500">Kami akan segera merespons pesan Anda.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-gray-700 font-medium">Nama</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl h-12"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-gray-700 font-medium">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl h-12"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone" className="text-gray-700 font-medium">No. Telepon</Label>
                    <Input
                      id="contact-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl h-12"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject" className="text-gray-700 font-medium">Subjek</Label>
                    <Input
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl h-12"
                      placeholder="Subjek pesan"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-gray-700 font-medium">Pesan</Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  )
}
