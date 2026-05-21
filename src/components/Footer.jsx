const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#020202] overflow-hidden py-4">
      {/* Soft ambient background glows */}
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[400px] h-[150px] rounded-full bg-[#f59e0b]/[0.02] blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 translate-x-1/2 w-[400px] h-[150px] rounded-full bg-[#f59e0b]/[0.02] blur-[100px] pointer-events-none" />

      {/* Decorative dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Top border ambient divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/35 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-10 md:py-14 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3.5 group/brand cursor-default">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#f59e0b]/40 bg-[#121212] flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.25)] group-hover/brand:border-[#f59e0b] group-hover/brand:shadow-[0_0_20px_rgba(245,158,11,0.45)] transition-all duration-500">
                <img src="/intro3.png" alt="J. Abiraj" className="w-full h-full object-cover scale-[1.3] origin-top group-hover/brand:scale-[1.38] transition-transform duration-500" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-white text-base tracking-tight leading-none group-hover/brand:text-[#f59e0b] transition-colors duration-300">
                  J. Abiraj
                </span>
                <span className="text-[#f59e0b]/75 text-[9px] font-body font-semibold tracking-wider uppercase mt-0.5">
                  Professional Tutor
                </span>
              </div>
            </div>
            <p className="font-body text-white/50 text-[11px] max-w-[290px] md:max-w-[220px] text-center md:text-left leading-relaxed mt-1 group-hover/brand:text-white/70 transition-colors duration-300">
              BSc(Hons) Computer Science (Reading) &middot; Advanced Chemistry &amp; ICT Specialization
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 my-4 md:my-0 max-w-md mx-auto md:max-w-none">
            {footerLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative font-body text-white/70 hover:text-[#030303] bg-white/[0.02] hover:bg-[#f59e0b] border border-white/5 hover:border-[#f59e0b] transition-all duration-300 text-[10px] md:text-xs uppercase tracking-wider font-bold px-4.5 py-2.5 rounded-full shadow-sm hover:shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:-translate-y-0.5"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5 font-body text-white/60 text-xs hover:text-[#f59e0b] transition-colors duration-300 focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span className="uppercase tracking-wider font-semibold text-[10px] md:text-xs">
              Back to top
            </span>
            <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#f59e0b] group-hover:bg-[#f59e0b]/10 transition-all duration-300 shrink-0 group-hover:shadow-[0_0_10px_rgba(245,158,11,0.2)]">
              <svg className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-white/[0.04] text-center px-4">
          <p className="font-body text-white/35 text-[10px] md:text-xs leading-relaxed max-w-[320px] sm:max-w-none mx-auto">
            &copy; {new Date().getFullYear()} J. Abiraj. All rights reserved.
            <span className="block sm:inline sm:before:content-['|'] sm:before:mx-2 text-white/20 mt-1 sm:mt-0">
              BSc(Hons) Computer Science | Professional Educator.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
