import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const faqs = [
  {
    question: 'Which mediums are the Chemistry and ICT classes conducted in?',
    answer: 'A/L Chemistry is conducted exclusively in Tamil Medium. A/L and O/L ICT classes are available in both English Medium and Tamil Medium (separate batches or individual sessions).',
  },
  {
    question: 'How are online sessions structured, and what tools are used?',
    answer: 'Online classes are conducted via high-speed Zoom sessions. We use interactive digital whiteboards for real-time problem-solving, record every live session for future reference, and distribute class recordings and digital tutes in PDF format right after class.',
  },
  {
    question: 'Do you offer individual classes, or are they only in batches?',
    answer: 'I offer both formats: small interactive batches (to encourage peer discussion and mock rankings) and individualized 1-on-1 tutoring (for focused revision, targeting specific student learning barriers).',
  },
  {
    question: 'Are parents updated on the student\'s progress?',
    answer: 'Absolutely. Regular parent-tutor check-ins are conducted. I share results of the monthly topical mock tests and provide insights into student attendance, speed progress, and conceptual focus areas.',
  },
  {
    question: 'What materials are provided to students during the program?',
    answer: 'Students receive comprehensive printed/digital Unit booklets, topical worksheet question packs containing over 20+ years of past papers, and simulated mock exams structured exactly around national evaluation rubrics.',
  },
]

export default function FAQ() {
  const [headRef, headInView] = useInView()
  const [listRef, listInView] = useInView()
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="relative py-16 sm:py-28 bg-[#050505] px-4 sm:px-6 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#f59e0b]/[0.02] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-px h-24 bg-gradient-to-t from-[#f59e0b]/40 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Heading */}
        <div
          ref={headRef}
          className="text-center mb-10 sm:mb-16"
          style={{ opacity: 0, animation: headInView ? 'fadeInUp 0.8s ease-out forwards' : 'none' }}
        >
          <span className="inline-block font-body text-[#f59e0b] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] mb-2 sm:mb-2.5">
            Common Questions
          </span>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="mt-3 sm:mt-3.5 font-body text-white/65 text-xs sm:text-base max-w-sm mx-auto leading-relaxed">
            Everything you need to know about the class formats, mediums, and lesson materials.
          </p>
        </div>

        {/* Accordion List */}
        <div
          ref={listRef}
          className="flex flex-col gap-3 sm:gap-4"
          style={{ opacity: 0, animation: listInView ? 'fadeInUp 0.8s ease-out 0.15s forwards' : 'none' }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`group border border-white/5 rounded-2xl transition-all duration-300 bg-[#121212]/45 hover:bg-[#121212]/65 ${
                  isOpen ? 'border-[#f59e0b]/35 shadow-[0_8px_30px_rgba(245,158,11,0.06)]' : 'hover:border-white/10'
                }`}
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-4 sm:px-6 py-3.5 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 font-display font-semibold text-[13px] sm:text-base md:text-lg text-white group-hover:text-[#f59e0b]/90 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug pr-2">{faq.question}</span>
                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#f59e0b]/30 transition-all duration-300 bg-[#050505] ${
                    isOpen ? 'border-[#f59e0b]/40 text-[#f59e0b] rotate-180' : 'text-white/65'
                  }`}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content wrapper (Grid Transition for smooth height animation) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out px-4 sm:px-6 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-4 sm:pb-5' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-body text-white/70 text-[11px] sm:text-sm leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
