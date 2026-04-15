'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { useState, useEffect } from 'react'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { Home, Info, Package, ShieldCheck, HelpCircle, Phone, ArrowRight, Instagram, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Beranda', icon: Home },
  { href: '#tentang', label: 'Tentang', icon: Info },
  { href: '#paket', label: 'Paket Rafting', icon: Package },
  { href: '#keamanan', label: 'Keamanan', icon: ShieldCheck },
  { href: '#faq', label: 'FAQ', icon: HelpCircle },
  { href: '#kontak', label: 'Kontak', icon: Phone },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
      
      // Auto-hide when scrolling down, show when scrolling up
      if (currentScrollY > 300) {
        if (currentScrollY > lastScrollY && isVisible) {
          setIsVisible(false) // Scrolling down
        } else if (currentScrollY < lastScrollY && !isVisible) {
          setIsVisible(true) // Scrolling up
        }
      } else {
        setIsVisible(true) // Always show at the top
      }
      setLastScrollY(currentScrollY)
    }

    // passive: true for smoother scrolling
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isVisible])

  return (
    <header 
      className={`fixed left-0 right-0 z-50 mx-auto transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-[150%]'
      } ${
        isScrolled 
          ? 'top-4 md:top-6 w-[calc(100%-2rem)] max-w-5xl bg-background/90 backdrop-blur-xl border border-border/50 shadow-2xl shadow-emerald-500/10 rounded-[2.5rem] py-1.5' 
          : 'top-0 w-full max-w-full bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm rounded-none py-0'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 w-full">
        <nav className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:border-emerald-200 group-hover:-translate-y-0.5 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <Image src="/Icon.png" alt="Sembar Adventure" width={32} height={32} className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" priority />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-foreground text-[22px] font-black tracking-tighter uppercase font-outfit leading-none mb-0.5">SEMBAR</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 text-[9px] font-black tracking-[0.35em] uppercase leading-none">ADVENTURE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium text-sm underline-animation"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#booking">
              <Button variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-500/20">
                Booking
              </Button>
            </a>
            <a
              href={getWhatsAppUrl('Halo Sembar Adventure, saya ingin booking')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30">
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0 border-l-0 bg-emerald-950 text-white overflow-hidden flex flex-col">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              
              {/* Sidebar Header */}
              <div className="p-8 pb-10 relative overflow-hidden bg-emerald-900">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8 group">
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 shadow-inner overflow-hidden transition-transform duration-500 group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Image src="/Icon.png" alt="Sembar Adventure" width={38} height={38} className="object-contain relative z-10 transition-transform duration-500 group-hover:-rotate-3" priority />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-white text-[24px] font-black tracking-tighter uppercase font-outfit leading-none mb-1">SEMBAR</span>
                      <span className="text-emerald-400 text-[10px] font-black tracking-[0.35em] uppercase leading-none">ADVENTURE</span>
                    </div>
                  </div>
                  <p className="text-emerald-100/60 text-sm font-medium leading-relaxed">
                    Petualangan arung jeram terbaik di Sungai Cisadane, Bogor.
                  </p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-grow p-6 py-8 space-y-2 overflow-y-auto">
                <span className="text-[10px] font-black text-emerald-400/30 uppercase tracking-[0.2em] block px-4 mb-4">Navigasi Utama</span>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                      <link.icon className="h-5 w-5 text-emerald-400 group-hover:text-white" />
                    </div>
                    <span className="text-lg font-bold group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className="p-8 border-t border-white/5 bg-emerald-900/50">
                <div className="flex flex-col gap-4">
                  <a href="#booking" onClick={() => setIsOpen(false)} className="w-full">
                    <Button className="w-full h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-black text-base uppercase tracking-wider group/btn shadow-lg">
                      Booking Sekarang
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={getWhatsAppUrl('Halo Sembar Adventure, saya ingin bertanya')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full h-12 border-white/10 text-white hover:bg-white/5 rounded-xl font-bold text-xs gap-2">
                        <Phone className="h-4 w-4" />
                        WhatsApp
                      </Button>
                    </a>
                    <a
                      href="https://www.instagram.com/sembar_adventure/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full h-12 border-white/10 text-white hover:bg-white/5 rounded-xl font-bold text-xs gap-2">
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-[10px] text-emerald-100/30 font-medium">© 2024 Sembar Adventure. All rights reserved.</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
