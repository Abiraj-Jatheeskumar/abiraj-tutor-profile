import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home',     href: '#hero', id: 'hero' },
  { label: 'Subjects', href: '#subjects', id: 'subjects' },
  { label: 'About',    href: '#about', id: 'about' },
  { label: 'FAQ',      href: '#faq', id: 'faq' },
  { label: 'Contact',  href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const scrollPosition = window.scrollY + 140
      const currentSection = navLinks.find(({ id }) => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          return scrollPosition >= top && scrollPosition < top + height
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-dark py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#f59e0b]/40 bg-[#121212] flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.25)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.45)] transition-all duration-300">
            <img src="/intro3.png" alt="J. Abiraj" className="w-full h-full object-cover scale-[1.3] origin-top" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-base tracking-tight leading-none group-hover:text-[#f59e0b] transition-colors duration-200">
              J. Abiraj
            </span>
            <span className="text-[#f59e0b]/75 text-[10px] font-body font-semibold tracking-wider uppercase mt-0.5">
              Professional Tutor
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href, id }) => {
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                className={`relative font-body text-sm font-medium transition-colors duration-350 py-1 ${
                  isActive ? 'text-[#f59e0b]' : 'text-white/60 hover:text-white'
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#f59e0b] transition-all duration-350 rounded-full ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </a>
            )
          })}
          <a
            href="#contact"
            className="bg-[#f59e0b] text-[#030303] font-body font-bold text-sm px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(245,158,11,0.3)] hover:shadow-[0_4px_24px_rgba(245,158,11,0.5)] hover:bg-amber-400 hover:scale-105 transition-all duration-300"
          >
            Book a Session
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Elegant Floating Glass Menu Popover */}
      <div
        className={`md:hidden absolute top-[76px] right-6 w-64 glass-dark border border-[#f59e0b]/25 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 origin-top-right z-50 ${
          menuOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map(({ label, href, id }, i) => {
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`font-body text-base font-semibold py-1 block transition-all duration-200 transform ${
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                } ${
                  isActive ? 'text-[#f59e0b] translate-x-1.5' : 'text-white/70 hover:text-[#f59e0b] hover:translate-x-1.5'
                }`}
                style={{ transitionDelay: `${i * 45}ms` }}
              >
                {label}
              </a>
            )
          })}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`w-full bg-[#f59e0b] text-[#030303] font-body font-bold text-sm py-3 rounded-xl text-center block shadow-[0_4px_12px_rgba(245,158,11,0.25)] hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 transform ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
            style={{ transitionDelay: `${navLinks.length * 45}ms` }}
          >
            Book a Session
          </a>
        </div>
      </div>
    </header>
  )
}
