// components/navbar.tsx
'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  const links = ['Work', 'Services', 'About', 'Contact']
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-widest text-amber-400">LUMINA</span>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-zinc-400 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <button className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-amber-300 transition-colors">
            Get Started
          </button>
        </div>
        
        <button className="md:hidden text-zinc-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-zinc-400 hover:text-white transition-colors" onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <button className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-amber-300 transition-colors w-full">
            Get Started
          </button>
        </div>
      )}
    </header>
  )
}