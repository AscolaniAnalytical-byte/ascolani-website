import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import SectionLabel from '../components/SectionLabel'

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('animate-fade-up'); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`opacity-0 ${className}`}>{children}</div>
}

const services = [
  {
    number: '01',
    title: 'In-Depth Interviews',
    subtitle: 'One-on-one qualitative conversations at depth',
    description: 'Our structured yet flexible interview methodology surfaces the beliefs, decision-making processes, and latent motivations that shape behavior. We conduct interviews with executives, consumers, subject-matter experts, and front-line employees depending on your research needs.',
    applications: ['Customer journey mapping', 'Leadership alignment studies', 'Expert elicitation', 'Concept testing'],
    deliverable: 'Thematic analysis report with direct participant quotes, insight summary, and strategic implications.',
  },
  {
    number: '02',
    title: 'Ethnographic Research',
    subtitle: 'Immersive observation in natural contexts',
    description: 'We embed with your customers or workforce in the environments where decisions, habits, and behaviors actually occur. Ethnographic research captures what surveys miss: the workarounds, unspoken assumptions, and contextual pressures that shape how people really operate.',
    applications: ['Product usability research', 'Workplace culture assessments', 'Consumer behavior in retail or digital environments', 'Community and stakeholder listening'],
    deliverable: 'Field observation reports, annotated visual documentation, behavioral pattern analysis, and design implications.',
  },
  {
    number: '03',
    title: 'Focus Group Facilitation',
    subtitle: 'Structured group discussions that reveal shared meaning',
    description: 'Our facilitators are trained to surface not just individual opinions, but the group dynamics, social norms, and shared narratives that shape how your audience collectively makes sense of an issue. We design discussion guides that go far below the surface.',
    applications: ['Brand perception and positioning research', 'New concept development', 'Communications testing', 'Community needs assessments'],
    deliverable: 'Session transcripts, synthesis report, emergent theme mapping, and facilitation debrief.',
  },
  {
    number: '04',
    title: 'Strategic Synthesis & Sensemaking',
    subtitle: 'Turning complex data into clear organizational understanding',
    description: 'Many organizations have more qualitative data than they know what to do with from customer feedback to employee surveys to previous research reports. We specialize in synthesizing disparate qualitative sources into a coherent, actionable strategic narrative.',
    applications: ['Existing research synthesis', 'Multi-source data integration', 'Strategic planning support', 'Leadership team alignment workshops'],
    deliverable: 'Strategic synthesis document, frameworks for ongoing use, and facilitated team workshop.',
  },
  {
    number: '05',
    title: 'Longitudinal Research Programs',
    subtitle: 'Tracking change in beliefs, culture, and behavior over time',
    description: 'Some questions can\'t be answered in a single study. Our longitudinal research programs track how your customers, employees, or stakeholders evolve over time enabling organizations to understand not just where people are today, but how they\'re changing.',
    applications: ['Culture change monitoring', 'Brand relationship tracking', 'Customer journey evolution', 'Post-merger integration research'],
    deliverable: 'Periodic research reports, trend analysis, comparison frameworks, and strategic briefings.',
  },
  {
    number: '06',
    title: 'Stakeholder Research & Mapping',
    subtitle: 'Understanding the people your decisions affect',
    description: 'From investors to regulators to community members, every major organizational decision involves stakeholders whose perspectives often go unheard. We conduct rigorous stakeholder research that gives decision-makers a clear picture of the landscape they\'re navigating.',
    applications: ['Pre-launch stakeholder analysis', 'Policy and regulatory environment research', 'Community relations research', 'Investor and partner sentiment research'],
    deliverable: 'Stakeholder map, perspective analysis, influence and interest framework, engagement recommendations.',
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute border border-white rounded-full"
              style={{
                width: `${(i + 1) * 120}px`,
                height: `${(i + 1) * 120}px`,
                top: '50%',
                right: '-5%',
                transform: 'translateY(-50%)',
                marginTop: `-${(i + 1) * 60}px`,
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionLabel light>Our Services</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6">
            A full suite of qualitative research capabilities.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            From single-method studies to comprehensive multi-phase programs, we design research engagements that answer the specific questions your organization is asking.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.number} className={`animate-delay-${Math.min(i * 100, 400)}`}>
                <div className="bg-white rounded-2xl p-8 md:p-12 border border-navy-50 hover:border-gold-400/30 hover:shadow-md transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-5 mb-5">
                        <span className="font-serif text-5xl font-bold text-gold-400/30 leading-none mt-1">{s.number}</span>
                        <div>
                          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900 mb-1">{s.title}</h2>
                          <p className="text-gold-600 text-sm font-medium">{s.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-charcoal-700 leading-relaxed">{s.description}</p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-charcoal-700 mb-3">Common Applications</h4>
                        <ul className="space-y-2">
                          {s.applications.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-charcoal-700">
                              <span className="text-gold-500 mt-0.5 flex-shrink-0">—</span>
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-charcoal-700 mb-2">Deliverable</h4>
                        <p className="text-sm text-charcoal-700 leading-relaxed">{s.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl font-semibold text-white mb-5 leading-tight">
              Not sure which approach fits your question?
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Most engagements begin with a short discovery call. We'll help you identify the right methodology for your specific challenge or design a mixed-method approach if your question calls for it.
            </p>
            <Link to="/contact" className="inline-block px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-sm rounded transition-colors duration-200">
              Book a Discovery Call
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
