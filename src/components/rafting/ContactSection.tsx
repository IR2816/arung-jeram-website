'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Contact2 } from '@/components/ui/contact-2'
import { ScrollReveal } from './Animations'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="kontak" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Premium Background Decor */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20 space-y-6">
            <Badge className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-500/20 px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] rounded-full backdrop-blur-sm shadow-sm inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Kontak & Lokasi
            </Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tighter uppercase font-outfit leading-tight max-w-3xl mx-auto">
              Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Kami</span>
            </h2>
            <p className="text-muted-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              Kami siap merealisasikan petualangan rafting terbaik Anda. Jangan ragu bertanya, respon kilat via WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mb-16 md:mb-24 relative">
          <div className="absolute -inset-1 bg-gradient-to-b from-emerald-500/20 to-transparent blur-xl opacity-50 rounded-[3rem] -z-10" />
          <ScrollReveal>
            <div className="bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl rounded-[2.5rem] p-4 md:p-8">
              <Contact2
                embedded
                title="Kirim Pesan"
                description="Isi form ini, lalu sistem kami akan otomatis membuka WhatsApp dengan detail pesanan Anda."
                address="Desa Semplak Barat, kecamatan kemang, kabupaten Bogor"
                email="sembaradventure@gmail.com"
                web={{ label: 'Instagram @sembar_adventure', url: 'https://www.instagram.com/sembar_adventure/' }}
                whatsappGreeting="Halo Sembar Adventure, saya ingin bertanya:"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Premium Location Maps */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight font-outfit uppercase">
              Titik <span className="text-emerald-500">Lokasi</span> Kami
            </h3>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Map 1: Sembar Adventure */}
          <ScrollReveal direction="up" delay={0} className="h-full">
            <div className="group h-full relative p-1 rounded-[2.5rem] bg-gradient-to-b from-border/50 to-transparent hover:from-emerald-500/30 transition-all duration-500">
              <Card className="h-full border-0 shadow-xl overflow-hidden rounded-[2.2rem] bg-background/80 backdrop-blur-xl flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-emerald-500/10">
                <div className="p-6 flex items-start justify-between gap-4 z-10 relative">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-600">
                        <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <h4 className="font-extrabold text-lg md:text-xl text-foreground font-outfit uppercase tracking-tight leading-none">Sembar Adventure</h4>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium pl-10 md:pl-11">Area Rafting Semplak Barat</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/wS78W9SowS1Uj4Uq9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2.5 bg-gray-100 hover:bg-emerald-50 text-gray-600 hover:text-emerald-600 rounded-2xl transition-colors hidden sm:flex items-center justify-center text-xs font-bold"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] mt-auto">
                  <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.249419198695!2d106.72911299999998!3d-6.513689400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c333903777d7%3A0x2c93af67f597c46f!2sARUNG%20JERAM%20SEMBAR%20ADVENTURE!5e0!3m2!1sen!2sid!4v1713374246830!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale-[0.8] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 object-cover"
                  />
                </div>
              </Card>
            </div>
          </ScrollReveal>

          {/* Map 2: Sembar Cafe & Outbond */}
          <ScrollReveal direction="up" delay={150} className="h-full">
            <div className="group h-full relative p-1 rounded-[2.5rem] bg-gradient-to-b from-border/50 to-transparent hover:from-teal-500/30 transition-all duration-500">
              <Card className="h-full border-0 shadow-xl overflow-hidden rounded-[2.2rem] bg-background/80 backdrop-blur-xl flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-teal-500/10">
                <div className="p-6 flex items-start justify-between gap-4 z-10 relative">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-teal-500/10 rounded-xl text-teal-600">
                        <Navigation className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <h4 className="font-extrabold text-lg md:text-xl text-foreground font-outfit uppercase tracking-tight leading-none">Sembar Cafe</h4>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium pl-10 md:pl-11">Lokasi Cafe & Outbond Utama</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/gQ9C2mH2z1B2H2Z16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2.5 bg-gray-100 hover:bg-teal-50 text-gray-600 hover:text-teal-600 rounded-2xl transition-colors hidden sm:flex items-center justify-center text-xs font-bold"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] mt-auto">
                  <div className="absolute inset-0 bg-teal-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.023348611121!2d106.666993175043!3d-6.51881779347318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69dd0079b77229%3A0x7620c15d8f94c653!2sSEMBAR%20ADVENTURE%20(Rafting%2C%20Outbond%2CCafe)!5e0!3m2!1sen!2sid!4v1713374346830!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale-[0.8] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 object-cover"
                  />
                </div>
              </Card>
            </div>
          </ScrollReveal>

          {/* Map 3: Grand Titik Kumpul */}
          <ScrollReveal direction="up" delay={300} className="h-full md:col-span-2 lg:col-span-1">
            <div className="group h-full relative p-1 rounded-[2.5rem] bg-gradient-to-b from-border/50 to-transparent hover:from-amber-500/30 transition-all duration-500">
              <Card className="h-full border-0 shadow-xl overflow-hidden rounded-[2.2rem] bg-background/80 backdrop-blur-xl flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-500/10">
                <div className="p-6 flex items-start justify-between gap-4 z-10 relative">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-amber-500/10 rounded-xl text-amber-600">
                        <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <h4 className="font-extrabold text-lg md:text-xl text-foreground font-outfit uppercase tracking-tight leading-none">Grand T-Kumpul</h4>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium pl-10 md:pl-11">Lokasi Khusus Kumpul Rombongan</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/QpEks4S4M3vK1xS37"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2.5 bg-gray-100 hover:bg-amber-50 text-gray-600 hover:text-amber-600 rounded-2xl transition-colors hidden sm:flex items-center justify-center text-xs font-bold"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] mt-auto">
                  <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992.7!2d106.8152977!3d-6.7143764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cd0d9a30c359%3A0x240227981d3f9df0!2sGrand%20Titik%20Kumpul!5e0!3m2!1sen!2sid!4v1700000000001!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale-[0.8] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 object-cover"
                  />
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
