import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'
import Ticker from '../components/Ticker'

function useIntersection(ref, className = 'animate-fade-up') {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add(className); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, className])
}

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  useIntersection(ref)
  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 24h16M24 16v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    title: 'Ethnographic Research',
    desc: 'Immersive field studies that reveal how people actually behave, not just what they say they do.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 18h16M16 24h12M16 30h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'In-Depth Interviews',
    desc: 'Expert-led one-on-one conversations designed to surface nuanced beliefs, motivations, and mental models.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 36L20 24l8 8 12-16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="14" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: 'Strategic Synthesis',
    desc: 'Translating complex qualitative data into clear strategic direction that informs confident decision-making.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="18" cy="18" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 12l4 4M12 24l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: 'Focus Group Facilitation',
    desc: 'Structured group discussions that uncover shared narratives, tensions, and unmet needs within your audience.',
  },
]


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen bg-navy-950 flex items-center overflow-hidden">
        {/* Hero painting background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/hero3.png"
            alt=""
            className="w-full h-full object-cover object-center opacity-30"
          />
          {/* Gradient overlay so text stays legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <SectionLabel light>Qualitative Research &amp; Strategy</SectionLabel>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-8 animate-fade-up">
              Understanding the{' '}
              <em className="text-gold-400 not-italic">"why"</em>{' '}
              behind the data.
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up" style={{ animationDelay: '150ms' }}>
              Ascolani Analytical Consulting helps organizations make better decisions by uncovering the human narratives that quantitative data alone cannot reveal.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '250ms' }}>
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-sm rounded transition-colors duration-200"
              >
                Book a Consultation
              </Link>
              <Link
                to="/services"
                className="px-7 py-3.5 border border-white/30 hover:border-white/60 text-white text-sm font-medium rounded transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-gold-400/60 to-transparent mx-auto" />
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy-900 leading-tight mb-6">
                Research that moves organizations forward.
              </h2>
              <p className="text-charcoal-700 text-lg leading-relaxed mb-6">
                We conduct rigorous qualitative research that helps leadership teams navigate ambiguity: whether entering a new market, rethinking a product, or trying to understand why a strategy is stalling.
              </p>
              <p className="text-charcoal-700 leading-relaxed mb-8">
                Our work goes beyond surface-level insights. We identify the underlying beliefs, social dynamics, and contextual factors that shape behavior, and translate those findings into strategic clarity.
              </p>
              <Link to="/about" className="text-gold-600 font-semibold text-sm hover:text-gold-700 inline-flex items-center gap-2 group">
                Learn more about our approach
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="animate-delay-200">
              {/* Abstract illustration */}
              <div className="relative">
                <div className="bg-navy-900 rounded-2xl p-10 relative overflow-hidden">
                  <svg viewBox="0 0 400 300" fill="none" className="w-full opacity-80">
                    <rect x="20" y="20" width="360" height="260" rx="8" stroke="#d4b96a" strokeWidth="0.5" />
                    <line x1="20" y1="80" x2="380" y2="80" stroke="white" strokeWidth="0.3" opacity="0.2" />
                    <line x1="20" y1="150" x2="380" y2="150" stroke="white" strokeWidth="0.3" opacity="0.2" />
                    <line x1="20" y1="220" x2="380" y2="220" stroke="white" strokeWidth="0.3" opacity="0.2" />
                    {/* Data visualization bars */}
                    <rect x="50" y="120" width="30" height="100" rx="2" fill="#d4b96a" opacity="0.6" />
                    <rect x="100" y="90" width="30" height="130" rx="2" fill="#d4b96a" opacity="0.8" />
                    <rect x="150" y="150" width="30" height="70" rx="2" fill="#7a9bc8" opacity="0.6" />
                    <rect x="200" y="70" width="30" height="150" rx="2" fill="#d4b96a" opacity="0.9" />
                    <rect x="250" y="110" width="30" height="110" rx="2" fill="#7a9bc8" opacity="0.5" />
                    <rect x="300" y="140" width="30" height="80" rx="2" fill="#d4b96a" opacity="0.4" />
                    {/* Trend line */}
                    <path d="M65 220 Q115 180 165 200 Q215 160 265 175 Q315 155 345 160" stroke="#d4b96a" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                    {/* Labels */}
                    <text x="30" y="250" fill="white" opacity="0.4" fontSize="10" fontFamily="sans-serif">Q1</text>
                    <text x="80" y="250" fill="white" opacity="0.4" fontSize="10" fontFamily="sans-serif">Q2</text>
                    <text x="130" y="250" fill="white" opacity="0.4" fontSize="10" fontFamily="sans-serif">Q3</text>
                    <text x="180" y="250" fill="white" opacity="0.4" fontSize="10" fontFamily="sans-serif">Q4</text>
                    <text x="230" y="250" fill="white" opacity="0.4" fontSize="10" fontFamily="sans-serif">Q5</text>
                    <text x="280" y="250" fill="white" opacity="0.4" fontSize="10" fontFamily="sans-serif">Q6</text>
                    <circle cx="215" cy="70" r="5" fill="#d4b96a" />
                    <text x="225" y="74" fill="#d4b96a" opacity="0.9" fontSize="9" fontFamily="sans-serif">Peak insight</text>
                  </svg>
                  <div className="absolute top-4 right-4 text-gold-400/40 text-xs font-mono">qualitative data map</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-500/10 rounded-full blur-xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy-900 leading-tight">
              Research methods that go deeper.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} className={`animate-delay-${i * 100}`}>
                <div className="group p-8 border border-navy-100 rounded-xl hover:border-gold-400/40 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-gold-500 mb-5">{s.icon}</div>
                  <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{s.title}</h3>
                  <p className="text-charcoal-700 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-block px-7 py-3 border border-navy-800 text-navy-800 hover:bg-navy-900 hover:text-white text-sm font-medium rounded transition-colors duration-200">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <SectionLabel light>How We Work</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight">
              From first conversation to final delivery.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: '01', title: 'Discovery Call', desc: 'A 30-minute conversation to understand your challenge, your timeline, and whether qualitative research is the right tool.' },
              { step: '02', title: 'Proposal', desc: 'A written proposal outlining the methodology, participant profile, deliverables, timeline, and investment. No surprises.' },
              { step: '03', title: 'Fieldwork', desc: 'We conduct interviews, focus groups, ethnographic sessions, or other methods as agreed. You are kept informed at every milestone.' },
              { step: '04', title: 'Delivery', desc: 'A final report with findings, strategic implications, and a live debrief session with your team to ensure the work lands.' },
            ].map((item, i) => (
              <AnimatedSection key={item.step} className={`animate-delay-${i * 100}`}>
                <div className="relative p-8 border-l border-white/10 first:border-l-0 md:first:border-l-0">
                  <span className="font-serif text-5xl font-bold text-white/10 block mb-4">{item.step}</span>
                  <div className="w-8 h-0.5 bg-gold-500 mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <SectionLabel>What Clients Say</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy-900 leading-tight">
              In their own words.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Thorough, diligent, and they went above and beyond at every stage. They may have just saved my family's business.",
                attr: 'Owner, Independent Restaurant',
              },
              {
                quote: "We had a product that worked. Ascolani Analytical helped us bridge the gap between that product and the people it was built for. We took a chance on them, and we only wish we had done it sooner.",
                attr: 'Head of Product, Durable Medical Device Manufacturer',
              },
              {
                quote: "They challenged our assumptions at every step. It was a rocky start — they kept telling us what we needed to hear rather than what we wanted to hear. In the end, we are genuinely happy with where our strategy landed.",
                attr: 'Supply Chain Strategist, Industrial Technology',
              },
            ].map((t, i) => (
              <AnimatedSection key={i} className={`animate-delay-${i * 100}`}>
                <div className="bg-cream rounded-2xl p-8 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-gold-400 text-4xl font-serif leading-none block mb-4">"</span>
                    <p className="text-navy-900 leading-relaxed font-serif text-lg italic">{t.quote}</p>
                  </div>
                  <p className="text-charcoal-700/60 text-xs tracking-wide uppercase mt-6 pt-6 border-t border-navy-100">{t.attr}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* CTA */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute -right-20 -bottom-20 w-96 h-96 opacity-5" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="#0a1530" strokeWidth="1" />
            <circle cx="200" cy="200" r="120" stroke="#0a1530" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="60" stroke="#0a1530" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionLabel>Let's Talk</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              Ready to find the answers your data can't give you?
            </h2>
            <p className="text-charcoal-700 text-lg leading-relaxed mb-10">
              Tell us about your challenge. We'll help you determine whether qualitative research is the right tool, and how to make the most of it.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm rounded transition-colors duration-200"
            >
              Schedule a Discovery Call
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
