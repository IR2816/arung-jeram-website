'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide preloader after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-emerald-950 px-4"
        >
          <div className="relative overflow-hidden text-center">
            {/* Outline Text */}
            <h1 
              className="text-3xl sm:text-5xl md:text-7xl font-black font-outfit uppercase text-transparent tracking-tighter" 
              style={{ WebkitTextStroke: '1px rgba(16, 185, 129, 0.3)' }}
            >
              Sembar Adventure
            </h1>
            {/* Filling Text */}
            <motion.h1 
              initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
              animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
              transition={{ duration: 1.8, ease: "circInOut" }}
              className="absolute top-0 left-0 w-full text-3xl sm:text-5xl md:text-7xl font-black font-outfit uppercase text-emerald-400 tracking-tighter"
            >
              Sembar Adventure
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}