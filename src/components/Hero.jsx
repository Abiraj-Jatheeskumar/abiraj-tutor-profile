export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#030303] overflow-hidden"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Morphing blobs */}
        <div
          className="absolute -top-40 -right-40 w-[620px] h-[620px] bg-[#f59e0b]/[0.08] blur-[120px] animate-blob"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-[#8b5cf6]/[0.035] blur-[110px] animate-blob"
          style={{ animationDelay: '4s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#f59e0b]/[0.03] blur-[140px]" />

        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" fill="#f59e0b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        {/* Floating geometric accents */}
        <div className="absolute top-[18%] left-[5%]  w-12 h-12 border border-[#f59e0b]/20 rounded-xl rotate-12 animate-float"  style={{ animationDelay: '1s' }} />
        <div className="absolute top-[25%] right-[5%] w-8  h-8  border border-[#f59e0b]/15 rounded-full   animate-floatX" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-[20%] left-[8%] w-5 h-5 bg-[#f59e0b]/10 rounded-sm rotate-45 animate-float"   style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[15%] right-[5%]  w-10 h-10 border border-[#f59e0b]/10 rotate-[25deg] animate-floatX" style={{ animationDelay: '1.8s' }} />
      </div>

      {/* ── Main content (2-Column Grid) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-32 lg:pb-20">
        
        {/* Left Column — Copy & Credibility */}
        <div 
          className="lg:col-span-7 flex flex-col items-start text-left gap-5 sm:gap-6"
          style={{ opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.1s forwards' }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 sm:gap-2 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[#f59e0b] text-[10px] sm:text-xs font-semibold font-body tracking-wider uppercase mb-1 sm:mb-0">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#f59e0b] animate-pulse shrink-0" />
            BSc(Hons) in Computer Science (Reading)
          </span>

          {/* Heading */}
          <h1 className="font-display text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] sm:leading-tight text-white mt-1 sm:mt-0">
            Empowering Futures in <br />
            <span className="text-gold-gradient">Chemistry &amp; ICT</span>
          </h1>

          {/* Subtitle */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <p className="font-display text-xl sm:text-2xl font-bold text-white/95">
              J. Abiraj
            </p>
            <span className="font-body text-[10px] sm:text-xs font-bold text-[#f59e0b] bg-[#f59e0b]/12 border border-[#f59e0b]/35 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md uppercase tracking-wider">
              Professional Tutor
            </span>
          </div>

          {/* Tagline */}
          <p className="font-body text-white/60 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
            Simplifying complex concepts, breaking down syllabus barriers, and boosting examination confidence with tailored methods in English &amp; Tamil mediums.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto mt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#f59e0b] text-[#030303] font-body font-bold text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_4px_30px_rgba(245,158,11,0.6)] hover:bg-amber-400 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Me Now
            </a>
            <a
              href="#subjects"
              className="inline-flex items-center justify-center gap-2.5 glass text-[#f59e0b] font-body font-bold text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-[#f59e0b]/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              View Subjects
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Quick Info Badges */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-5 sm:pt-6 border-t border-white/5 w-full max-w-lg mt-2 text-left">
            <div>
              <div className="font-display text-base sm:text-lg md:text-xl font-bold text-[#f59e0b]">BSc(Hons)</div>
              <div className="font-body text-white/60 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider mt-1.5 leading-tight">CS Reading</div>
            </div>
            <div>
              <div className="font-display text-base sm:text-lg md:text-xl font-bold text-[#f59e0b]">2 Subjects</div>
              <div className="font-body text-white/60 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider mt-1.5 leading-tight">Chemistry &amp; ICT</div>
            </div>
            <div>
              <div className="font-display text-base sm:text-lg md:text-xl font-bold text-[#f59e0b]">Dual Medium</div>
              <div className="font-body text-white/60 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider mt-1.5 leading-tight">English &amp; Tamil</div>
            </div>
          </div>
        </div>

        {/* Right Column — Premium Image Frame */}
        <div 
          className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0"
          style={{ opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.35s forwards' }}
        >
          {/* Animated Background Glow behind picture */}
          <div className="absolute inset-0 rounded-full bg-[#f59e0b]/[0.06] blur-2xl animate-pulse-glow pointer-events-none scale-90" />
          
          {/* Photo Outer Container — Elegant Breathing Frame */}
          <div className="relative group w-[240px] h-[240px] xs:w-[270px] xs:h-[270px] sm:w-[330px] sm:h-[330px] rounded-full p-2 sm:p-3 transition-all duration-500 flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            
            {/* Soft Breathing Glowing Accent Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 blur-lg animate-pulse-glow group-hover:blur-xl transition-all duration-700 pointer-events-none" />
            
            {/* Inner Metallic Frame Base */}
            <div className="absolute inset-1 sm:inset-1.5 rounded-full border border-[#f59e0b]/20 bg-[#0a0a0a]/60 backdrop-blur-md group-hover:border-[#f59e0b]/40 transition-colors duration-700 pointer-events-none" />

            {/* Image mask — Perfect Circle */}
            <div className="w-full h-full rounded-full overflow-hidden relative z-10 border-[3px] sm:border-[4px] border-[#030303] ring-1 ring-[#f59e0b]/30 shadow-inner group-hover:ring-[#f59e0b]/60 transition-all duration-500">
              <img
                src="/intro3.png"
                alt="J. Abiraj Profile"
                className="w-full h-full object-cover scale-[1.15] origin-top transition-transform duration-700 ease-out group-hover:scale-[1.22] filter contrast-[1.02] brightness-[1.02]"
              />
              {/* Soft gradient bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>

            {/* Tiny float overlay card */}
            <div className="absolute -bottom-1 -right-1 sm:-right-4 glass rounded-2xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.4)] border border-[#f59e0b]/35 max-w-[160px] xs:max-w-[190px] sm:max-w-[200px] hover:scale-105 transition-transform duration-300 z-20">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#f59e0b]/20 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-body text-[9px] sm:text-xs font-semibold text-white/90 leading-tight">
                Exam Focused Lessons &amp; Materials
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0, animation: 'fadeIn 1s ease-out 1.4s forwards' }}
      >
        <span className="font-body text-white/65 text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#f59e0b]/60 to-transparent animate-scroll-down" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  )
}
