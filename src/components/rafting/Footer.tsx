import Link from 'next/link'
import { Waves, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white text-lg font-bold">SEMBAR</span>
                <span className="text-emerald-400 text-xs font-medium -mt-1">ADVENTURE</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 text-sm">
              Wahana arung jeram di Sungai Cisadane. Rasakan petualangan seru bersama keluarga, teman, atau rekan kerja di Lembah Cisadane.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/sembaradventure" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-2 rounded-lg transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com/@sembaradventure" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-black p-2 rounded-lg transition-all">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://facebook.com/sembaradventure" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-blue-600 p-2 rounded-lg transition-all">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-emerald-400 transition-colors">Beranda</Link></li>
              <li><Link href="#tentang" className="hover:text-emerald-400 transition-colors">Tentang Kami</Link></li>
              <li><Link href="#paket" className="hover:text-emerald-400 transition-colors">Paket Rafting</Link></li>
              <li><Link href="#keamanan" className="hover:text-emerald-400 transition-colors">Keamanan & SOP</Link></li>
              <li><Link href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link href="#booking" className="hover:text-emerald-400 transition-colors">Booking</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              <li><Link href="#paket" className="hover:text-emerald-400 transition-colors">Arung Jeram Cisadane</Link></li>
              <li><Link href="#produk" className="hover:text-emerald-400 transition-colors">Sembar Sunset Cafe</Link></li>
              <li><Link href="#produk" className="hover:text-emerald-400 transition-colors">Camping Ground</Link></li>
              <li><Link href="#produk" className="hover:text-emerald-400 transition-colors">Paintball</Link></li>
              <li><Link href="#addon" className="hover:text-emerald-400 transition-colors">Add-On Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Jl. Lembah Cisadane Jl. H. Miing No.1a, RT.4/RW.2, Putat Nutug, Kec. Ciseeng, Kabupaten Bogor, Jawa Barat 16120</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>sembaradventure@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>Sen-Kam, Sab-Min: 10:00-16:30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sembah Adventure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
