import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel'

const faqs = [
  {
    category: 'About Qualitative Research',
    questions: [
      {
        q: 'What is the difference between qualitative and quantitative research?',
        a: 'Quantitative research measures. It tells you how many, how often, and how much. Qualitative research explains. It tells you why, how, and what it means. A survey might tell you that 60% of customers are dissatisfied. Qualitative research tells you what that dissatisfaction actually feels like, where it comes from, and what would have to change for it to go away. Both have their place, but organizations often over-invest in measurement and under-invest in understanding.',
      },
      {
        q: 'Can qualitative research replace surveys and analytics?',
        a: 'No, and we would not recommend it. Qualitative research is not designed to produce statistically representative findings. Its value is in depth, not breadth. The most effective research programs combine both: quantitative methods identify patterns at scale, and qualitative methods explain what those patterns actually mean. We often work alongside a client\'s existing analytics function rather than replacing it.',
      },
      {
        q: 'How do I know if qualitative research is the right approach for my question?',
        a: 'Qualitative research is well-suited to questions that start with "why" or "how." If you are trying to understand why customers behave in a certain way, how a decision gets made inside an organization, or what an experience actually feels like to the people living it, qualitative methods are likely appropriate. If you need a statistically valid percentage or a representative sample, you need quantitative methods, or a combination of both. If you are unsure, the best place to start is a short discovery call.',
      },
    ],
  },
  {
    category: 'Working With Us',
    questions: [
      {
        q: 'How long does an engagement typically take?',
        a: 'It depends on the scope. A focused in-depth interview study with a clear research question might run four to six weeks from kickoff to final report. A broader ethnographic program or multi-method engagement could run three to five months. We scope every project individually and are transparent about timelines before work begins. We do not rush research. The quality of the output depends on the quality of the process.',
      },
      {
        q: 'Do you work with small companies, or only large organizations?',
        a: 'We work with organizations of all sizes. What matters more than size is whether the research question is substantive and whether the client is genuinely committed to using the findings. Some of our most meaningful engagements have been with early-stage companies trying to understand a market before they build in the wrong direction. Others have been with established institutions dealing with complex cultural or strategic challenges.',
      },
      {
        q: 'What does the process look like from first contact to final report?',
        a: 'It typically goes: a short discovery call to understand your challenge; a written proposal outlining the methodology, timeline, and investment; a project kickoff once the proposal is accepted; fieldwork, including interviews, focus groups, or observation depending on the methodology; analysis and synthesis; and a final report delivered with a presentation and debrief session. We keep clients informed throughout and build in touchpoints at key milestones.',
      },
      {
        q: 'How do you handle confidentiality?',
        a: 'Every engagement is treated as confidential by default, including its existence. We do not discuss client names, challenges, or findings with outside parties. All research participants are protected under our informed consent protocols, and no participant is identified in any deliverable without their explicit written permission. We are happy to sign a mutual NDA before any substantive discussion begins.',
      },
    ],
  },
  {
    category: 'For Research Participants',
    questions: [
      {
        q: 'What does participating in a research study actually involve?',
        a: 'It depends on the study. Most commonly, participation involves a one-on-one interview lasting 45 to 90 minutes, conducted over video call or in person. Some studies involve focus group discussions of 4 to 8 people. Others might involve a short diary or journal exercise over several days. You will always receive a full description of what is involved before you commit to anything.',
      },
      {
        q: 'Is my participation confidential?',
        a: 'Yes. Your identity is never attached to your responses in any report or deliverable without your explicit permission. Recordings and transcripts are stored securely and deleted after the project concludes. In reports, participants are described only in general terms, such as "a healthcare professional in their 40s," never by name or identifying detail.',
      },
      {
        q: 'Can I withdraw from a study after I have agreed to participate?',
        a: 'Yes, at any time and without any consequence. If you change your mind before a session, simply let us know and we will remove you from the study. If you become uncomfortable during a session, you can pause or end it immediately. Your participation is always voluntary.',
      },
    ],
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-navy-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="font-serif text-lg font-medium text-navy-900 group-hover:text-navy-700 transition-colors leading-snug">
          {q}
        </span>
        <span className={`text-gold-500 text-xl flex-shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="pb-6 pr-8 animate-fade-in">
          <p className="text-charcoal-700 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      <section className="bg-navy-950 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel light>Frequently Asked Questions</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6">
            Questions we hear most often, answered honestly.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            If your question is not here, send it to us directly. We would rather give you a straight answer than leave you guessing.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {faqs.map((category) => (
              <div key={category.category}>
                <SectionLabel>{category.category}</SectionLabel>
                <div className="bg-white rounded-2xl border border-navy-50 px-8 divide-y divide-navy-100">
                  {category.questions.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-navy-900 rounded-2xl p-8 text-center">
            <h3 className="font-serif text-2xl font-semibold text-white mb-3">Still have a question?</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              We are happy to answer questions before any commitment is made. A short conversation is often the fastest way to figure out whether we are the right fit.
            </p>
            <Link to="/contact" className="inline-block px-7 py-3 bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-sm rounded transition-colors duration-200">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
