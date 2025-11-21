import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
        <div className="pt-24 sm:pt-32">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-300/80 tracking-widest uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            NizarDev Portfolio
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Super Modern, Elegan, dan Interaktif
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl">
            Showcasing karya terbaik dengan sentuhan 3D yang playful namun tetap profesional. Scroll untuk eksplorasi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-full bg-blue-500/90 hover:bg-blue-500 text-white transition-colors">Lihat Project</a>
            <a href="#contact" className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">Kontak</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero