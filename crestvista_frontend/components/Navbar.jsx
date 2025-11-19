'use client'
import Link from 'next/link'
export default function Navbar(){
  return (
    <nav className="w-full fixed top-0 left-0 bg-[#0C0F14]/80 backdrop-blur-md z-50 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="/crestvista-logo.png" alt="Crestvista Logo" className="w-10 h-10 rounded" />
        <span className="font-bold text-lg tracking-wide">Crestvista Properties LTD</span>
      </div>
      <div className="flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/properties">Properties</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
