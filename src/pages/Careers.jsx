import { Link } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel'

const values = [
  { title: 'Intellectual curiosity', text: 'We are drawn to people who ask better questions, not just people who have more answers.' },
  { title: 'Rigor and craft', text: 'We care deeply about the quality of our work at every stage, from how we design a discussion guide to how we write a final report.' },
  { title: 'Human-centered thinking', text: 'We believe that understanding people is both a professional discipline and a personal commitment.' },
  { title: 'Clear communication', text: 'Research that cannot be communicated clearly is research that cannot be used. We value people who can write and speak with precision and warmth.' },
]

export default function Careers() {
  return (
    <>
      <section className="bg-navy-950 pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg viewBox="0 0 1200 600" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <circle cx="1100" cy="100" r="500" stroke="white" strokeWidth="0.5" />
            <circle cx="1100" cy="100" r="350" stroke="white" strokeWidth="0.3" />
            <circle cx="1100" cy="100" r="200" stroke="white" strokeWidth="0.3" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionLabel light>Careers</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6">
            We are a small firm that does serious work.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Ascolani Analytical Consulting is built around depth, not volume. We take on a limited number of engagements each quarter so that every one of them receives the full weight of our attention.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionLabel>Who We Are Looking For</SectionLabel>
              <h2 className="font-serif text-4xl font-semibold text-navy-900 mb-8 leading-tight">
                Collaborators, not just contractors.
              </h2>
              <div className="space-y-5 text-charcoal-700 leading-relaxed">
                <p>
                  We are a founding-stage firm, which means we are not hiring in the traditional sense right now. What we are doing is building relationships with researchers, analysts, facilitators, and strategists who share our values and might be the right fit for future collaboration.
                </p>
                <p>
                  If you have a background in qualitative research, social science, human-computer interaction, organizational behavior, or a related field, and you are drawn to consulting work that goes deeper than most, we would like to hear from you.
                </p>
                <p>
                  We work with independent collaborators on a project basis as our engagements require. We are also open to conversations with early-career researchers who want mentorship and exposure to applied research in commercial contexts.
                </p>
              </div>
            </div>

            <div>
              <SectionLabel>What We Value</SectionLabel>
              <h2 className="font-serif text-4xl font-semibold text-navy-900 mb-8 leading-tight">
                The qualities we look for in everyone we work with.
              </h2>
              <div className="space-y-6">
                {values.map((v) => (
                  <div key={v.title} className="border-l-2 border-gold-500 pl-6">
                    <h4 className="font-serif text-lg font-semibold text-navy-900 mb-1">{v.title}</h4>
                    <p className="text-charcoal-700 text-sm leading-relaxed">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel light>Get in Touch</SectionLabel>
          <h2 className="font-serif text-4xl font-semibold text-white mb-5 leading-tight">
            No open roles right now. But we are always listening.
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            If something on this page resonated with you, send us a note at the address below. Tell us about your background, what kind of work you are looking for, and why Ascolani interests you. We read every message.
          </p>
          <a
            href="mailto:inquiries@ascolaniconsulting.com"
            className="inline-block px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-sm rounded transition-colors duration-200"
          >
            inquiries@ascolaniconsulting.com
          </a>
        </div>
      </section>
    </>
  )
}
