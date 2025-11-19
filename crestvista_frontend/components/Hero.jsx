'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
export default function Hero(){
  return (
    <div className="relative h-[80vh] w-full bg-cover bg-center flex items-center justify-center text-white" style={{backgroundImage: "url('/hero.jpg')"}}>
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">Crestvista Properties LTD</h1>
        <p className="text-lg md:text-xl opacity-90 mb-6">Where Value Meets Excellence.</p>
        <div className="flex justify-center gap-4">
          <Link href="/properties" className="bg-[#D4AF37] px-6 py-3 rounded-md font-semibold text-black">Explore Properties</Link>
          <Link href="/contact" className="border border-[#D4AF37] px-6 py-3 rounded-md font-semibold">Contact Us</Link>
        </div>
      </motion.div>
    </div>
  )
}
