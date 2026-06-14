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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`opacity-0 ${className}`}>{children}</div>
}

const values = [
  {
    title: 'Rigor Without Rigidity',
    desc: 'We apply structured methodologies while remaining flexible enough to follow unexpected but important threads when the fieldwork demands it.',
  },
  {
    title: 'Context Over Convenience',
    desc: 'We never take shortcuts. Understanding your audience means understanding the world they inhabit, not just their answers to survey questions.',
  },
  {
    title: 'Clarity as a Deliverable',
    desc: "Our job isn't done when the data is collected. It's done when your leadership team has a clear, shared understanding of what the research means.",
  },
  {
    title: 'Earned Confidentiality',
    desc: 'We treat every engagement, from participant data to strategic findings, with the discretion that serious business research demands.',
  },
]

const team = [
  {
    name: 'Dr. Margaret Ascolani',
    credentials: 'Ph.D. · M.A. · M.S.',
    role: 'Founder & Principal Researcher',
    initials: 'MA',
    photo: '/margaret.jpg',
    paragraphs: [
      "Dr. Margaret Ascolani's path to founding Ascolani Analytical Consulting was not accidental. It was the natural culmination of a lifelong interest in understanding how people make sense of the world around them.",
      "Her academic foundation speaks to a rigorous curiosity. Dr. Ascolani earned her undergraduate training in psychology from Southern Illinois University, Edwardsville, before completing a Master of Arts in Cognitive and Social Processes, a Master of Science in Quantitative Psychology, and a Ph.D. in Educational Psychology. Few researchers operate at the intersection of human cognition, social behavior, and methodological rigor the way she does. That intersection is precisely where Ascolani Analytical Consulting lives.",
      "Before stepping fully into the consulting world, Dr. Ascolani built her expertise in applied environments where the stakes were real. She served as an Operations Analyst with the Indiana Department of Corrections, developing a grounded understanding of how institutions function and where the gaps between policy and human reality often hide. She later transitioned to Purdue University, where she serves as an Assessment Coordinator and Director of the Listening Lab, leading qualitative methods and analytics work centered on hearing the human experiences behind the data.",
      "But the story starts even earlier. Long before research was her profession, it was her pastime. As a young person, Dr. Ascolani spent her free time designing surveys and distributing them to friends, acquaintances, and anyone willing to participate. Not for a grade or a paycheck, but out of pure curiosity. She wanted to know how people thought, what they believed, and how those things differed from person to person. That instinct to ask rather than assume, to listen before concluding, never left her. It became the foundation of everything she does.",
    ],
  },
  {
    name: 'Damilola Yussuf',
    credentials: 'B.Sc. · M.S.',
    role: 'Co-Founder',
    initials: 'DY',
    photo: '/damilola.png',
    paragraphs: [
      "Damilola Yussuf has never seen data and storytelling as separate disciplines. For him, they have always been two sides of the same coin, and building Ascolani Analytical Consulting was his way of proving it.",
      "Mr. Yussuf's academic foundation began at Wisconsin International University College in Accra, Ghana, where he studied Computer Science and Management, an early signal of the dual lens he would carry throughout his career: the technical precision of systems thinking combined with the strategic orientation of business. Following his studies, he completed his mandatory NYSC service in Nigeria, an experience that grounded his work in the realities of institutions, infrastructure, and the human beings that move through both.",
      "His first major professional chapter came as a Data Analyst at Planet Project Ng Ltd, where he was embedded in one of West Africa's most ambitious infrastructure initiatives: the Oshodi Transport Interchange in Lagos, the largest bus transportation terminal of its kind on the continent. There, Mr. Yussuf did more than crunch numbers. He translated quantitative data into operational insight, helping facilitate the movement of hundreds of thousands of commuters daily. It was large-scale, high-stakes work that taught him something essential: data is not just a measurement tool. It is a record of human behavior, and human behavior is always trying to tell you something.",
      "What set Mr. Yussuf apart even then was what he was doing outside the office. He was running Genesis Studios, a media production firm where he worked as a producer, developing narratives, shaping stories, and thinking carefully about how information lands with an audience. Most people would see a hard divide between that world and the world of data analytics. Mr. Yussuf saw a direct through-line. The same instinct that makes a good producer, knowing what matters, knowing what to cut, knowing how to make people feel the weight of something, is the same instinct that makes a great analyst.",
      "That realization sent him back to school. He pursued a Master's degree in Human-Computer Interaction at Indiana University-Purdue University Indianapolis (IUPUI), deepening his understanding of how people engage with the tools, interfaces, and systems that increasingly define modern life. His focus extended beyond usability into something more fundamental: how our interactions with everyday technology shape the ecosystems we build around ourselves, the habits we form, the assumptions we carry, and ultimately, the decisions we make.",
      "It is why Mr. Yussuf incorporates storyboarding into his analytical process. Because data, in his view, is never truly complete until it is understood, and understanding requires more than a well-formatted report. It requires narrative. It requires structure. It requires a human being on the other end who can see themselves in the findings and know what to do next.",
      "His guiding philosophy is direct: \"The job of a data analyst is to find the stories that drive purpose through data.\" Numbers earn their value only when they connect to something real, a decision, a direction, a person whose experience they represent.",
    ],
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="xMidYMid slice">
            <line x1="0" y1="150" x2="1200" y2="150" stroke="white" strokeWidth="0.5" />
            <line x1="0" y1="300" x2="1200" y2="300" stroke="white" strokeWidth="0.5" />
            <line x1="0" y1="450" x2="1200" y2="450" stroke="white" strokeWidth="0.5" />
            <line x1="200" y1="0" x2="200" y2="600" stroke="white" strokeWidth="0.5" />
            <line x1="500" y1="0" x2="500" y2="600" stroke="white" strokeWidth="0.5" />
            <line x1="800" y1="0" x2="800" y2="600" stroke="white" strokeWidth="0.5" />
            <line x1="1100" y1="0" x2="1100" y2="600" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionLabel light>About the Firm</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6">
            Built on the belief that understanding people is a strategic advantage.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Founded in 2023 by a qualitative researcher and a data storyteller who share a single conviction: that most organizations are making decisions with an incomplete picture of the humans they serve.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-serif text-4xl font-semibold text-navy-900 mb-8 leading-tight">
                A lifelong curiosity, made into a practice.
              </h2>
              <div className="space-y-5 text-charcoal-700 leading-relaxed">
                <p>
                  Ascolani Analytical Consulting was founded in 2023 by two people who approached the same problem from opposite directions: Dr. Margaret Ascolani, a qualitative researcher with a Ph.D. in Educational Psychology and years of applied institutional research, and Damilola Yussuf, a data analyst and media producer who had spent his career translating complex information into stories that moved people to action.
                </p>
                <p>
                  What united them was a shared frustration. Organizations were sitting on enormous amounts of data, qualitative and quantitative, and still making decisions that missed the human reality underneath. The tools existed. The rigor existed. What was missing was the commitment to go deeper, to ask why, to treat understanding as a deliverable in its own right.
                </p>
                <p>
                  That commitment became the firm. Ascolani Analytical Consulting now serves clients across sports and entertainment, digital health, industrial technology, and the public sector, bringing together academic rigor, analytical precision, and the discipline of narrative to every engagement.
                </p>
                <p>
                  Our name carries a deliberate meaning. <em>Ascolani</em> derives from the Italian verb <em>ascoltare</em>: to listen deeply. That commitment defines everything we do.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="animate-delay-200">
              <div className="relative">
                {/* Abstract pattern block */}
                <div className="bg-navy-900 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                  <svg viewBox="0 0 400 400" fill="none" className="w-4/5 opacity-70">
                    <circle cx="200" cy="200" r="160" stroke="#d4b96a" strokeWidth="0.5" />
                    <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="0.3" opacity="0.3" />
                    <circle cx="200" cy="200" r="80" stroke="#d4b96a" strokeWidth="0.5" opacity="0.5" />
                    <circle cx="200" cy="200" r="40" stroke="white" strokeWidth="0.5" opacity="0.4" />
                    <circle cx="200" cy="200" r="8" fill="#d4b96a" opacity="0.8" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                      const rad = (deg * Math.PI) / 180
                      const x1 = 200 + 8 * Math.cos(rad)
                      const y1 = 200 + 8 * Math.sin(rad)
                      const x2 = 200 + 160 * Math.cos(rad)
                      const y2 = 200 + 160 * Math.sin(rad)
                      return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="0.3" opacity="0.15" />
                    })}
                    {[60, 120, 180, 240, 300, 360].map((deg, i) => {
                      const rad = (deg * Math.PI) / 180
                      const x = 200 + 120 * Math.cos(rad)
                      const y = 200 + 120 * Math.sin(rad)
                      return <circle key={i} cx={x} cy={y} r="4" fill="#d4b96a" opacity="0.5" />
                    })}
                  </svg>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gold-500/10 w-32 h-32 rounded-full blur-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="font-serif text-4xl font-semibold text-navy-900 leading-tight max-w-xl">
              Principles that guide every engagement.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} className={`animate-delay-${i * 100}`}>
                <div className="border-l-2 border-gold-500 pl-8 py-2">
                  <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{v.title}</h3>
                  <p className="text-charcoal-700 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <SectionLabel light>Our Founders</SectionLabel>
            <h2 className="font-serif text-4xl font-semibold text-white leading-tight max-w-xl">
              The people behind the practice.
            </h2>
          </AnimatedSection>
          <div className="space-y-12">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} className={`animate-delay-${i * 100}`}>
                <div className="bg-navy-900 rounded-2xl p-8 md:p-12">
                  <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
                    <div className="w-28 h-28 rounded-2xl bg-gold-500/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      {member.photo
                        ? <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                        : <span className="font-serif text-3xl text-gold-400 font-semibold">{member.initials}</span>
                      }
                    </div>
                    <div className="pt-1">
                      <h3 className="font-serif text-2xl font-semibold text-white mb-1">{member.name}</h3>
                      {member.credentials && (
                        <p className="text-white/40 text-xs leading-relaxed mb-2">
                          {member.credentials.split(' · ').map((deg, i, arr) => (
                            <span key={i}>
                              {deg}
                              {i < arr.length - 1 && (
                                <span className="text-gold-500 font-bold mx-1">·</span>
                              )}
                            </span>
                          ))}
                        </p>
                      )}
                      <p className="text-gold-400 text-xs tracking-[0.15em] uppercase">{member.role}</p>
                    </div>
                  </div>
                  <div className="space-y-4 max-w-3xl">
                    {member.paragraphs.map((p, j) => (
                      <p key={j} className="text-white/65 text-sm leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <SectionLabel>What Makes Us Different</SectionLabel>
              <h2 className="font-serif text-4xl font-semibold text-navy-900 mb-10 leading-tight">
                We don't just report findings. We build understanding.
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { label: 'Academic Depth', text: 'Our methods are grounded in peer-reviewed social science, not just industry best practices.' },
                { label: 'Sector Experience', text: 'Deep familiarity with your industry means we know which questions to ask from day one.' },
                { label: 'Embedded Collaboration', text: 'We work alongside your internal teams throughout the process, not just at the beginning and end.' },
              ].map((item, i) => (
                <AnimatedSection key={item.label} className={`animate-delay-${i * 100}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-navy-50">
                    <div className="w-8 h-0.5 bg-gold-500 mb-4" />
                    <h4 className="font-serif text-lg font-semibold text-navy-900 mb-2">{item.label}</h4>
                    <p className="text-charcoal-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection className="mt-12">
              <Link to="/contact" className="inline-block px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm rounded transition-colors duration-200">
                Talk to Our Team
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
