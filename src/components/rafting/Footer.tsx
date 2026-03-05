import Link from 'next/link'
import { Waves, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import { getWhatsAppNumber, formatPhoneNumber } from '@/lib/whatsapp'

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100/60 pt-24 pb-12 border-t border-emerald-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Company Info */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3 font-bold group">
              <div className="bg-white p-2.5 rounded-2xl shadow-xl transition-transform group-hover:scale-110">
                <Waves className="h-7 w-7 text-emerald-950" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white text-2xl font-black tracking-tighter uppercase font-outfit">SEMBAR</span>
                <span className="text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase">ADVENTURE</span>
              </div>
            </Link>
            <p className="text-sm font-medium leading-relaxed max-w-xs">
              Penyedia layanan arung jeram paling aman dan berkesan di Sungai Cisadane, Bogor. Menghadirkan petualangan otentik dengan standar internasional.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com/sembaradventure", bg: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500" },
                { icon: Facebook, href: "https://facebook.com/sembaradventure", bg: "hover:bg-blue-600" },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.bg} group`}>
                  <social.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
              <a href="https://tiktok.com/@sembaradventure" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-black group">
                <svg className="h-5 w-5 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em]">Navigasi</h3>
            <ul className="space-y-4">
              {['Beranda', 'Tentang Kami', 'Paket Rafting', 'Pusat FAQ', 'Booking'].map((item, i) => (
                <li key={i}>
                  <Link href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm font-bold hover:text-emerald-400 transition-colors uppercase tracking-widest">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-6 lg:pl-12">
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em]">Hubungi Kami</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="text-xs font-bold leading-relaxed">Jl. H. Miing No.1a, Putat Nutug, Ciseeng, Kabupaten Bogor, Jawa Barat</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="text-xs font-bold">{formatPhoneNumber(getWhatsAppNumber())}</p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest">sembaradventure@gmail.com</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="text-xs font-bold uppercase">11:00-15:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2">&copy; {new Date().getFullYear()} SEMBAR ADVENTURE</p>
          <p className="text-[8px] font-medium text-emerald-500/40 uppercase tracking-[0.1em]">Crafted for Adventure Enthusiasts World-wide</p>
        </div>
      </div>
    </footer>
  )
}
