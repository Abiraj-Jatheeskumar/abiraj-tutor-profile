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
        title: 'A/L Chemistry Teachers Guide (Tamil Medium)',
        link: 'https://nie.lk/pdffiles/tg/tALTG%20Chemistry.pdf',
        primary: true
      },
      {
        title: 'A/L Chemistry Resource Book Portal',
        link: 'https://nie.lk/showom3',
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
        <div className="flex flex-col gap-2.5 mt-2 overflow-hidden">
          <h4 className="font-display font-bold text-[9px] text-white/40 uppercase tracking-wider px-1">
            Syllabus Highlights
          </h4>
          <div className="flex overflow-x-auto gap-2.5 pb-2 -mx-2 px-2 scrollbar-hide snap-x">
            {subject.features.map((f, idx) => (
              <div key={idx} className="flex flex-col gap-2 shrink-0 w-[170px] sm:w-[190px] bg-[#121212]/50 border border-white/5 rounded-xl p-3 snap-start hover:border-[#f59e0b]/30 hover:bg-[#121212]/80 transition-colors">
                <div className="w-5 h-5 rounded-md bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b]">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-body text-white/75 text-[11px] leading-snug whitespace-normal">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10">
        {/* Class Materials Included */}
        <div className="mt-3 border-t border-white/5 pt-3.5 overflow-hidden">
          <h4 className="font-display font-bold text-[9px] text-white/40 uppercase tracking-wider mb-2.5 px-1">
            Materials Provided
          </h4>
          <div className="flex overflow-x-auto gap-2 pb-2 -mx-2 px-2 scrollbar-hide snap-x">
            {subject.provided.map(p => (
              <div
                key={p}
                className="flex items-center gap-2 shrink-0 snap-start bg-[#080808]/80 border border-white/5 px-3 py-1.5 rounded-lg hover:border-[#f59e0b]/30 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_6px_rgba(245,158,11,0.8)] shrink-0" />
                <span className="font-body text-[10px] sm:text-[11px] text-white/80 font-medium whitespace-nowrap">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Attachment */}
        {subject.resources && subject.resources.length > 0 && (
          <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-[#121212]/40 border border-[#f59e0b]/15 flex flex-col gap-3.5 shadow-[0_4px_20px_rgba(245,158,11,0.03)] animate-border-pulse">
            <div className="flex items-center gap-2 mb-1">
              <div className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]"></span>
              </div>
              <span className="font-display font-semibold text-[10px] text-[#f59e0b] uppercase tracking-wider">Exclusive Academic Files</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {subject.resources.map((res, rIdx) => (
                <a
                  key={rIdx}
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#f59e0b]/30 hover:bg-[#121212]/90 hover:shadow-[0_8px_20px_rgba(245,158,11,0.06)] transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Subtle shimmer hover effect */}
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:animate-shimmer-sweep pointer-events-none" />

                  <div className="flex items-center gap-3.5 truncate relative z-10 mr-2">
                    {/* Big File Icon Block */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 border border-[#f59e0b]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    {/* File Text Details */}
                    <div className="flex flex-col text-left truncate">
                      <span className="font-display font-semibold text-[11px] sm:text-[12px] text-white/95 group-hover:text-[#f59e0b] transition-colors truncate">{res.title}</span>
                      <span className="font-body text-[9px] text-white/40 tracking-wider uppercase mt-0.5 group-hover:text-white/60 transition-colors">Secured Document • View</span>
                    </div>
                  </div>
                  
                  {/* Download/Arrow Action Icon */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#f59e0b] group-hover:border-[#f59e0b] text-white/40 group-hover:text-[#030303] transition-all duration-300 relative z-10 shadow-lg">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
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

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {methodologies.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#121212]/45 border border-white/5 rounded-2xl p-4 sm:p-6 flex flex-row sm:flex-col gap-3.5 sm:gap-4 items-start hover:border-[#f59e0b]/30 hover:bg-[#121212]/65 hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] transition-all duration-300 relative group"
              >
                {/* Index badge */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#f59e0b]/8 border border-[#f59e0b]/20 flex items-center justify-center font-display font-black text-[#f59e0b] text-sm group-hover:bg-[#f59e0b]/15 group-hover:scale-105 transition-all duration-300 shrink-0">
                  {idx + 1}
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2">
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
