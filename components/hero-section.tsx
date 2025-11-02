"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-primary overflow-hidden flex items-center justify-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-95" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Together We Rise for a United Tomorrow
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
          Join the Shikana Frontliners for Unity Party in building a stronger, more prosperous nation through unity and
          progress.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-bold transition-colors"
          >
            Join the Movement
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-colors"
          >
            Support Us Today
          </Link>
        </div>
      </div>
    </section>
  )
}
