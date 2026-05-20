import { useInView } from '../hooks/useInView'

const stats = [
  {
    value: 'BSc(Hons)',
    label: 'Computer Science (Reading)',
    sublabel: 'University level technical logic',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    value: '2 Mediums',
    label: 'English & Tamil Instruction',
    sublabel: 'Dedicated bilingual guidance',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
  },
  {
    value: 'Flexible Classes',
    label: 'Individual, Group & Online',
    sublabel: 'Customizable times & slots',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '2 Core',
    label: 'Subjects Taught',
    sublabel: 'Focused & deep expertise',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
]

const highlights = [
  {
    title: 'A/L Chemistry (Tamil Medium)',
    desc: 'Deep theoretical logic, systematic organic maps, and numerical troubleshooting methods.'
  },
  {
    title: 'A/L & O/L ICT (English & Tamil)',
    desc: 'Core programming fundamentals, databases, logic math, and digital infrastructure lessons.'
  },
  {
    title: 'Student-Centric Delivery',
    desc: 'Fostering conceptual comprehension first, adjusting paces according to classroom progress.'
  },
  {
    title: 'Exam-Oriented Question Banks',
    desc: 'Dissecting previous state exams and simulated problems matching standard marking guidelines.'
  }
]

export default function About() {
  const [headRef, headInView]   = useInView()
  const [bioRef,  bioInView]    = useInView()
  const [statsRef, statsInView] = useInView()

  return (
    <section id="about" className="relative py-16 sm:py-28 bg-[#000000] px-4 sm:px-6 overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-[#f59e0b]/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-[#f59e0b]/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Heading */}
        <div
          ref={headRef}
          className="text-center mb-12 sm:mb-20"
          style={{ opacity: 0, animation: headInView ? 'fadeInUp 0.8s ease-out forwards' : 'none' }}
        >
          <span className="inline-block font-body text-[#f59e0b] text-xs font-semibold uppercase tracking-[0.25em] mb-2.5">
            Tutor Profile
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Academic Credentials &amp; <span className="text-gold-gradient">Bio</span>
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column — Biography & Checklist */}
          <div
            ref={bioRef}
            className="lg:col-span-7 flex flex-col gap-6 relative"
            style={{ opacity: 0, animation: bioInView ? 'fadeInUp 0.8s ease-out 0.1s forwards' : 'none' }}
          >
            {/* Visual quotes background */}
            <span className="font-display text-[90px] sm:text-[120px] leading-[0.75] text-[#f59e0b]/8 font-black select-none absolute -left-4 sm:-left-12 -top-8 sm:-top-10 pointer-events-none" aria-hidden>
              “
            </span>
            
            <div className="flex flex-col gap-4 sm:gap-5 relative z-10">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Bridging Technology Logic with Science Pedagogy
              </h3>
              <p className="font-body text-white/80 text-sm sm:text-base leading-relaxed">
                As a dedicated educator reading for a <span className="text-[#f59e0b] font-semibold">BSc(Hons) in Computer Science</span>, I bring logical analysis and structured thinking into Chemistry and ICT tuition. My focus is on converting complex syllabi into digestible pieces.
              </p>
              <p className="font-body text-white/60 text-xs sm:text-sm leading-relaxed">
                Whether mastering organic chemistry path charts or coding python scripts, I ensure my students comprehend the fundamental structures behind the curriculum rather than relying on plain memorization.
              </p>
            </div>

            {/* Highlights Checklist */}
            <div className="flex flex-col gap-4 mt-4 border-t border-white/5 pt-6">
              {highlights.map(h => (
                <div key={h.title} className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0 mt-2" />
                  <div className="flex flex-col">
                    <span className="font-display text-sm font-semibold text-white/95">{h.title}</span>
                    <span className="font-body text-white/60 text-xs mt-0.5 leading-relaxed">{h.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Professional Grid Stats */}
          <div 
            ref={statsRef} 
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full"
          >
            {stats.map(({ value, label, sublabel, icon }, i) => (
              <div
                key={label}
                className="group relative bg-[#121212]/45 border border-white/5 rounded-2xl p-4 sm:p-6 flex flex-row sm:flex-col items-center sm:items-start gap-4 hover:border-[#f59e0b]/30 hover:bg-[#121212]/60 transition-all duration-300 overflow-hidden"
                style={{
                  opacity: 0,
                  animation: statsInView ? `fadeInUp 0.7s ease-out ${0.08 + i * 0.12}s forwards` : 'none',
                }}
              >
                {/* Gradient visual highlight bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f59e0b]/10 to-transparent group-hover:via-[#f59e0b]/30 transition-all duration-500" />
                
                {/* Icon Container */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f59e0b]/8 flex items-center justify-center text-[#f59e0b] group-hover:bg-[#f59e0b]/15 transition-all duration-350 shrink-0">
                  {icon}
                </div>

                <div className="flex flex-col text-left">
                  <div className="font-display text-lg sm:text-2xl font-bold text-[#f59e0b] leading-tight">{value}</div>
                  <div className="font-display font-semibold text-white/90 text-sm mt-0.5 sm:mt-1">{label}</div>
                  <div className="font-body text-white/55 text-[10px] uppercase mt-0.5 tracking-wider hidden sm:block">{sublabel}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
