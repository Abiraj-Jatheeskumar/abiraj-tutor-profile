import { useInView } from '../hooks/useInView'

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 7.5-9.75-7.5" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const contacts = [
  {
    icon: <WhatsAppIcon />,
    iconColor: 'text-green-400',
    iconBg: 'bg-green-400/8',
    label: 'WhatsApp',
    value: '0776 921 300',
    note: 'Instant messaging support — Fast responses',
    href: 'https://wa.me/94776921300',
  },
  {
    icon: <PhoneIcon />,
    iconColor: 'text-[#f59e0b]',
    iconBg: 'bg-[#f59e0b]/8',
    label: 'Phone Call',
    value: '0776 921 300',
    note: 'Available Monday to Saturday, 8am – 8pm',
    href: 'tel:+94776921300',
  },
  {
    icon: <EmailIcon />,
    iconColor: 'text-[#f59e0b]',
    iconBg: 'bg-[#f59e0b]/8',
    label: 'Email Address',
    value: 'abiraj30@gmail.com',
    note: 'Send student records or queries anytime',
    href: 'mailto:abiraj30@gmail.com',
  },
]

const enrollSteps = [
  {
    title: 'Initiate Contact',
    desc: 'Send a quick text via WhatsApp or call to introduce the student (Grade, Medium, and subjects required).'
  },
  {
    title: 'Needs Discussion',
    desc: 'A brief 10-15 minute discussion to establish previous grades, focus chapters, and optimal schedules.'
  },
  {
    title: 'Seat Allocation',
    desc: 'Receive details on batch schedules, virtual board links, class booklets, and finalize enrollment.'
  }
]

export default function Contact() {
  const [headRef, headInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section id="contact" className="relative py-28 bg-[#000000] px-6 overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#f59e0b]/[0.04] blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Heading */}
        <div
          ref={headRef}
          className="text-center mb-20"
          style={{ opacity: 0, animation: headInView ? 'fadeInUp 0.8s ease-out forwards' : 'none' }}
        >
          <span className="inline-block font-body text-[#f59e0b] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Get Started
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Secure Your <span className="text-gold-gradient">Session</span>
          </h2>
          <p className="mt-4 font-body text-white/50 text-base max-w-sm mx-auto leading-relaxed">
            Ready to start learning? Reach out through your preferred channel or follow the steps to register.
          </p>
        </div>

        {/* Contact Split layout */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
          style={{ opacity: 0, animation: gridInView ? 'fadeInUp 0.8s ease-out 0.15s forwards' : 'none' }}
        >
          {/* Left Column — Contact link cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3.5 sm:gap-5 bg-[#121212]/45 border border-white/5 rounded-2xl p-4 sm:p-5 hover:border-[#f59e0b]/35 hover:bg-[#121212]/65 hover:shadow-[0_6px_25px_rgba(245,158,11,0.06)] transition-all duration-300 group"
              >
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${contact.iconBg} ${contact.iconColor} group-hover:scale-105 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                {/* Labels */}
                <div className="flex flex-col">
                  <span className="font-body text-white/55 text-[10px] uppercase tracking-wider font-semibold">
                    {contact.label}
                  </span>
                  <span className="font-display font-semibold text-base sm:text-lg text-white group-hover:text-[#f59e0b] transition-colors mt-0.5">
                    {contact.value}
                  </span>
                  <span className="font-body text-white/60 text-xs mt-0.5 leading-tight">
                    {contact.note}
                  </span>
                </div>
                {/* Arrow indicator */}
                <div className="ml-auto w-8 h-8 rounded-full border border-white/10 hidden sm:flex items-center justify-center shrink-0 group-hover:border-[#f59e0b]/40 group-hover:bg-[#f59e0b]/8 text-white/30 group-hover:text-[#f59e0b] transition-all duration-300">
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column — Step Guide Card */}
          <div className="lg:col-span-5">
            <div className="h-full bg-gradient-to-br from-[#121212]/55 to-[#050505]/55 backdrop-blur-sm rounded-3xl p-5 sm:p-8 border border-[#f59e0b]/15 flex flex-col gap-6 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              {/* Internal abstract visual accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#f59e0b]/[0.04] blur-2xl pointer-events-none" />

              <h3 className="font-display text-xl font-bold text-white flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] animate-ping" />
                How to Register
              </h3>
              
              <p className="font-body text-white/65 text-xs leading-relaxed">
                Start your structured learning path or arrange dynamic sessions by following these three direct actions:
              </p>

              <div className="flex flex-col gap-5 mt-2">
                {enrollSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center text-[10px] font-bold text-[#f59e0b] font-display shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-sm font-semibold text-white/95">
                        {step.title}
                      </span>
                      <span className="font-body text-white/60 text-[11px] mt-0.5 leading-relaxed">
                        {step.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/94776921300"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full bg-[#f59e0b] text-[#030303] font-body font-bold text-sm py-4 rounded-xl text-center hover:bg-amber-400 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(245,158,11,0.35)] transition-all duration-300"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
