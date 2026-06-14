import SectionLabel from '../components/SectionLabel'

const sections = [
  {
    title: 'Informed Consent',
    body: `Every research participant engages with us voluntarily and with full knowledge of what their participation involves. Before any interview, focus group, or study session begins, participants receive a clear explanation of the research purpose, what will be asked of them, how long it will take, how their responses will be used, and their right to withdraw at any time without consequence. No data is collected from any participant who has not given explicit, informed consent.`,
  },
  {
    title: 'Participant Confidentiality',
    body: `The identities of research participants are protected at every stage of our work. We do not attribute quotes, responses, or behaviors to named individuals in any deliverable without explicit written permission. In all client-facing reports, participants are identified only by relevant demographic or professional characteristics, and only when those characteristics are necessary for the research to be meaningful. Audio, video, and written records of sessions are stored securely and deleted according to agreed retention schedules.`,
  },
  {
    title: 'Client Confidentiality',
    body: `The nature of every client engagement, including the existence of the engagement itself, is treated as confidential unless the client provides explicit permission to disclose it. We do not discuss client names, challenges, findings, or strategies with any outside party. Case studies published on our website are fully anonymized and reviewed carefully before any detail that could identify a client or their competitive context is included.`,
  },
  {
    title: 'Data Handling and Security',
    body: `Research data, including interview recordings, transcripts, field notes, and analytical documents, is stored in encrypted, access-controlled environments. We limit access to raw data to members of the research team directly involved in the engagement. Data is not transferred to third parties except where necessary for analysis (for example, transcription services), in which case those parties are bound by equivalent confidentiality obligations.`,
  },
  {
    title: 'Researcher Independence',
    body: `We are committed to reporting findings honestly, even when those findings are inconvenient or contradict a client's prior assumptions. Our value to clients depends entirely on the integrity of our analysis. We do not shape findings to match desired conclusions, and we will explicitly flag when we believe a client's interpretation of our research is not supported by what we found.`,
  },
  {
    title: 'Participant Wellbeing',
    body: `We design our research instruments with participant wellbeing in mind. We avoid research approaches that are unnecessarily intrusive, distressing, or exploitative. If a participant becomes uncomfortable during a session, we pause or end the session at their request, with no pressure to continue. Where research topics touch on sensitive personal experiences, we take additional care in how questions are framed and how participants are prepared.`,
  },
  {
    title: 'Conflicts of Interest',
    body: `We disclose any potential conflicts of interest to clients before an engagement begins. If a member of our team has a personal, financial, or professional relationship with a research participant, client, or subject matter that could compromise the objectivity of our work, we address that conflict proactively, either through recusal or transparent disclosure.`,
  },
  {
    title: 'Reporting Concerns',
    body: `If you have a concern about how Ascolani Analytical Consulting has conducted research, handled your data, or treated you as a participant or client, we ask that you contact us directly at inquiries@ascolaniconsulting.com. We take all concerns seriously and commit to responding within five business days.`,
  },
]

export default function Ethics() {
  return (
    <>
      <section className="bg-navy-950 pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg viewBox="0 0 1200 600" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <polygon points="600,0 1200,600 0,600" stroke="white" strokeWidth="0.5" />
            <polygon points="600,100 1100,600 100,600" stroke="white" strokeWidth="0.3" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionLabel light>Ethics and Compliance</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6">
            How we conduct ourselves, in every engagement.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Rigorous research requires ethical foundations. These are the principles that govern how we treat participants, clients, and data across every project we undertake.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((s, i) => (
              <div key={s.title} className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-navy-100 last:border-0 last:pb-0">
                <div className="md:col-span-1">
                  <span className="font-serif text-3xl font-bold text-gold-400/30">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mt-1 leading-snug">{s.title}</h3>
                </div>
                <div className="md:col-span-3">
                  <p className="text-charcoal-700 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-navy-900 rounded-2xl p-8 md:p-10">
            <h4 className="font-serif text-xl font-semibold text-white mb-3">Questions or concerns?</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              We welcome questions about our research practices from participants, clients, and the public. If something on this page is unclear or you have a concern you would like to raise, please reach out directly.
            </p>
            <a href="mailto:inquiries@ascolaniconsulting.com" className="text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors">
              inquiries@ascolaniconsulting.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
