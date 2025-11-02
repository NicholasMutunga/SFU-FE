"use client"

export function EventsHero() {
  return (
    <section className="relative w-full min-h-96 bg-primary overflow-hidden flex items-center justify-center py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-95" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
          Events & Gatherings
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
          Connect with our community, learn about our vision, and be part of the movement for unity and progress.
        </p>
      </div>
    </section>
  )
}
