import { useInView } from '../hooks/useInView'

const ChemistryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v8.5L5.5 17A4 4 0 009.354 23h5.292a4 4 0 003.854-5.5L15 11.5V3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M8 7h8" />
    <circle cx="10" cy="17" r="1" fill="currentColor" />
    <circle cx="14" cy="19" r="0.8" fill="currentColor" />
  </svg>
)

const ICTIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l2 2-2 2M13 12h2" />
  </svg>
)

const subjects = [
  {
    num: '01',
    icon: <ChemistryIcon />,
    title: 'A/L Chemistry',
    badge: 'Tamil Medium Coaching',
    desc: 'Structured curriculum designed to master physical calculation dynamics, organic synthesis charts, and inorganic analytical methodologies.',
    audience: 'A/L Science Stream',
    mediums: 'Tamil Medium (Batch & Individual)',
    features: [
      'In-depth Physical Chemistry steps & calculation shortcuts',
      'Logical maps of Organic Chemistry conversion pathways',
      'Inorganic Chemistry memory maps & structured notes',
      'Targeted dissection of Past Papers & Model Papers (20+ years)',
    ],
    provided: [
      'Comprehensive Unit Booklets',
      'Topical Worksheets & Class Assignments',
      'Simulated Chemistry Mock Examination papers'
    ],
    resources: [
      {
        title: 'A/L Chem Unit Booklet (Request Info)',
        link: 'https://wa.me/94776921300?text=Hi%20Abiraj,%20I%20am%20interested%20in%20requesting%20the%20A/L%20Chemistry%20Unit%20Booklets.',
        primary: true
      },
      {
        title: 'Topical Worksheets & Simulated MCQ Packs',
        link: 'https://wa.me/94776921300?text=Hi%20Abiraj,%20I%20am%20interested%20in%20requesting%20the%20A/L%20Chemistry%20Worksheets.',
        primary: false
      }
    ]
  },
  {
    num: '02',
    icon: <ICTIcon />,
    title: 'A/L & O/L ICT',
    badge: 'English & Tamil Medium',
    desc: 'Comprehensive coverage of logic structures, database theory, systems, data networks, and programming architectures.',
    audience: 'A/L & O/L Students',
    mediums: 'English & Tamil (Batch & Individual)',
    features: [
      'Hands-on Python programming & logic formulation steps',
      'Database systems, SQL queries, & ER-diagram tutorials',
      'System design, data communications, & computer networks',
      'Practical exam techniques and marking scheme analysis',
    ],
    provided: [
      'Digital & Printed study guides & slides',
      'Practical Code Walkthroughs (Python & SQL scripts)',
      'Topic-by-topic Exam Question Packs'
    ],
    resources: [
      {
        title: '10-Yr O/L Lesson Aligned Guide (2015-2024)',
        link: '/analysis/ict_ol_professional_master_guide_lesson_aligned_2015_2024.html',
        primary: true
      },
      {
        title: 'O/L ICT Mega Master Guide',
        link: '/analysis/MEGA_MASTER_GUIDE.html',
        primary: false
      }
    ]
  },
]

const methodologies = [
  {
    title: 'Conceptual Deep-Dive',
    desc: 'Logical explanations, real-world analogies, and visual flowcharts instead of plain rote memorization.'
  },
  {
    title: 'Topical Question Drills',
    desc: 'Tackling relevant questions directly after class to check for retention and lock down core concepts.'
  },
  {
    title: 'Past-Paper Dissection',
    desc: 'Analyzing decades of actual papers alongside national evaluation reports to decode examiner expectations.'
  },
  {
    title: 'Constant Evaluation',
    desc: 'Regular timed mock tests to enhance speed, practice stress-management, and track performance indicators.'
  }
]

function SubjectCard({ subject }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="bg-[#121212]/45 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-[#f59e0b]/35 hover:shadow-[0_20px_60px_rgba(245,158,11,0.06)] transition-all duration-500 group relative overflow-hidden h-full text-left"
      style={{ opacity: 0, animation: inView ? 'fadeInUp 0.8s ease-out forwards' : 'none' }}
    >
      {/* Background soft glows on card hover */}
      <div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-[#f59e0b]/5 opacity-30 blur-[60px] pointer-events-none group-hover:scale-150 group-hover:opacity-75 transition-all duration-700 ease-out" />
      <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-[#f59e0b]/3 opacity-20 blur-[80px] pointer-events-none group-hover:scale-125 transition-all duration-700 ease-out" />

      {/* Top Section */}
      <div className="relative z-10">
        {/* Header Row */}
        <div className="flex items-center gap-3 border-b border-white/5 pb-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 shadow-[0_4px_12px_rgba(245,158,11,0.15)] flex items-center justify-center text-[#f59e0b] shrink-0 group-hover:scale-105 transition-transform duration-300">
            {subject.icon}
          </div>
          <div>
            <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-white leading-tight group-hover:text-[#f59e0b] transition-colors">
              {subject.title}
            </h3>
            <p className="font-body text-[#f59e0b] text-[9px] font-semibold uppercase tracking-wider mt-0.5 leading-none">{subject.badge}</p>
          </div>
        </div>

        {/* Description Tagline */}
        <p className="font-body text-white/70 text-xs mt-3 leading-relaxed">
          {subject.desc}
        </p>

        {/* Class details tags */}
        <div className="flex flex-wrap gap-2 my-3">
          <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/5 rounded-lg px-2.5 py-1 text-[10px] text-white/80 font-body">
            <svg className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{subject.audience}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/5 rounded-lg px-2.5 py-1 text-[10px] text-white/80 font-body">
            <svg className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="truncate">{subject.mediums}</span>
          </div>
        </div>

        {/* Syllabus Highlights */}
        <div className="flex flex-col gap-2.5 mt-2">
          <h4 className="font-display font-bold text-[9px] text-white/40 uppercase tracking-wider">
            Syllabus Highlights
          </h4>
          <ul className="flex flex-col gap-2 text-xs">
            {subject.features.map((f, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <div className="w-4 h-4 rounded-md bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b] shrink-0 mt-0.5 group-hover:bg-[#f59e0b]/20 transition-all">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-body text-white/75 text-[11px] leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10">
        {/* Class Materials Included */}
        <div className="flex flex-wrap gap-1.5 mt-4 border-t border-white/5 pt-3">
          {subject.provided.map(p => (
            <span
              key={p}
              className="font-body text-[9px] text-white/60 border border-white/5 bg-[#121212]/50 px-2 py-0.5 rounded-md hover:border-[#f59e0b]/25 hover:text-white transition-all duration-300"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Resources Attachment */}
        {subject.resources && subject.resources.length > 0 && (
          <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-[#f59e0b]/[0.02] to-[#f59e0b]/[0.06] border border-[#f59e0b]/15 flex flex-col gap-2.5 shadow-inner animate-border-pulse">
            <div className="flex items-center gap-2">
              <div className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]"></span>
              </div>
              <span className="font-display font-semibold text-[9px] text-[#f59e0b] uppercase tracking-wider">Exclusive Academic Files</span>
            </div>
            <div className="flex flex-col gap-2">
              {subject.resources.map((res, rIdx) => (
                <a
                  key={rIdx}
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg bg-[#030303]/60 border border-white/5 hover:border-[#f59e0b]/35 hover:bg-[#030303]/90 hover:shadow-[0_4px_15px_rgba(245,158,11,0.04)] transition-all duration-300 group overflow-hidden relative"
                >
                  {/* Continuous background shimmer line to draw eyes */}
                  <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full animate-shimmer-sweep pointer-events-none" />

                  <div className="flex items-center gap-2 truncate relative z-10 mr-2">
                    <svg className="w-4 h-4 text-[#f59e0b]/90 group-hover:scale-110 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-body text-[10px] sm:text-[11px] font-semibold text-white/80 group-hover:text-[#f59e0b] transition-colors truncate">{res.title}</span>
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#f59e0b]/40 group-hover:bg-[#f59e0b]/5 text-white/30 group-hover:text-[#f59e0b] transition-all duration-300 relative z-10">
                    <svg className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Subjects() {
  const [headRef, headInView] = useInView()
  const [methodRef, methodInView] = useInView()

  return (
    <section id="subjects" className="relative py-16 sm:py-28 bg-[#050505] px-4 sm:px-6 overflow-hidden">
      {/* Section top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#f59e0b]/40 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div
          ref={headRef}
          className="text-center mb-12 sm:mb-16"
          style={{ opacity: 0, animation: headInView ? 'fadeInUp 0.8s ease-out forwards' : 'none' }}
        >
          <span className="inline-block font-body text-[#f59e0b] text-xs font-semibold uppercase tracking-[0.25em] mb-2.5">
            Subjects Offered
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Specialized Academic <span className="text-gold-gradient">Coaching</span>
          </h2>
          <p className="mt-3.5 font-body text-white/65 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Professional guidance across two foundational sciences, designed to build a standard of top results.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mt-8">
          {subjects.map((s) => (
            <SubjectCard key={s.num} subject={s} />
          ))}
        </div>

        {/* Methodology section */}
        <div className="mt-16 border-t border-white/5 pt-20 sm:pt-28">
          <div
            ref={methodRef}
            className="text-center mb-12 sm:mb-16"
            style={{ opacity: 0, animation: methodInView ? 'fadeInUp 0.8s ease-out forwards' : 'none' }}
          >
            <span className="inline-block font-body text-[#f59e0b] text-xs font-semibold uppercase tracking-[0.25em] mb-2.5">
              Redefining Tutoring
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              My Teaching <span className="text-gold-gradient">Methodology</span>
            </h3>
            <p className="mt-3 font-body text-white/65 text-sm max-w-sm mx-auto leading-relaxed">
              A systematic 4-phase framework engineered to build academic resilience and outstanding test scores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {methodologies.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#121212]/45 border border-white/5 rounded-2xl p-5 sm:p-6 flex flex-col gap-3.5 sm:gap-4 hover:border-[#f59e0b]/30 hover:bg-[#121212]/65 hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] transition-all duration-300 relative group"
              >
                {/* Index badge */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#f59e0b]/8 border border-[#f59e0b]/20 flex items-center justify-center font-display font-black text-[#f59e0b] text-xs sm:text-sm group-hover:bg-[#f59e0b]/15 group-hover:scale-105 transition-all duration-300">
                  {idx + 1}
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-display font-semibold text-base sm:text-lg text-white group-hover:text-[#f59e0b] transition-colors duration-200">
                    {m.title}
                  </h4>
                  <p className="font-body text-white/65 text-xs leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
