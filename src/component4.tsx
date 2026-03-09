// components/hero.tsx
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm text-amber-400 mb-8">
          <Sparkles size={14} />
          <span>Award-winning digital studio</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
          We craft digital
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            experiences
          </span>
          <br />
          that matter.
        </h1>
        
        {/* Subtext */}
        <p className="mx-auto max-w-2xl text-lg text-zinc-400 mb-10">
          Lumina is a creative studio specializing in brand identity, web design, and digital strategy. We help ambitious brands stand out in a crowded world.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 font-semibold text-zinc-950 hover:bg-amber-300 transition-colors">
            View Our Work <ArrowRight size={18} />
          </button>
          <button className="flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3.5 font-semibold text-white hover:border-zinc-500 transition-colors">
            Start a Project
          </button>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '150+', label: 'Projects' },
            { value: '80+', label: 'Clients' },
            { value: '8 yrs', label: 'Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}