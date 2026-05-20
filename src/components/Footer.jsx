const footerLinks = [
  { label: 'Home',     href: '#hero' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'About',    href: '#about' },
  { label: 'FAQ',      href: '#faq' },
  { label: 'Contact',  href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#020202] overflow-hidden">
      {/* Top border ambient divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#f59e0b]/40 bg-[#121212] flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                <img src="/intro3.png" alt="J. Abiraj" className="w-full h-full object-cover scale-[1.3] origin-top" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base tracking-tight leading-none">
                  J. Abiraj
                </span>
                <span className="text-[#f59e0b]/75 text-[9px] font-body font-semibold tracking-wider uppercase mt-0.5">
                  Professional Tutor
                </span>
              </div>
            </div>
            <p className="font-body text-white/50 text-[11px] max-w-[220px] text-center md:text-left leading-relaxed mt-1">
              BSc(Hons) Computer Science (Reading) &middot; Advanced Chemistry &amp; ICT Specialization
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-body text-white/60 text-sm hover:text-[#f59e0b] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5 font-body text-white/60 text-xs hover:text-[#f59e0b] transition-colors duration-200"
            aria-label="Scroll back to top"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#f59e0b]/45 group-hover:bg-[#f59e0b]/8 transition-all duration-200">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] text-center">
          <p className="font-body text-white/40 text-xs">
            &copy; {new Date().getFullYear()} J. Abiraj. All rights reserved. BSc(Hons) Computer Science | Professional Educator.
          </p>
        </div>
      </div>
    </footer>
  )
}
