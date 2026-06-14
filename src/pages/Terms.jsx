import SectionLabel from '../components/SectionLabel'

const sections = [
  {
    title: 'Scope of Engagement',
    body: `Each engagement with Ascolani Analytical Consulting is governed by a written proposal and, where applicable, a separate Statement of Work. The proposal defines the research objectives, methodology, timeline, deliverables, and investment. Work begins only after the proposal is accepted in writing and an initial payment is received.`,
  },
  {
    title: 'Deliverables',
    body: `We are committed to delivering the outputs described in each proposal on the agreed timeline. Deliverables may include written research reports, synthesis documents, presentation decks, facilitation materials, or other formats as specified. All deliverables are reviewed internally before submission to ensure they meet our standards for quality and accuracy.`,
  },
  {
    title: 'Revisions',
    body: `Each engagement includes one round of revisions to the final deliverable, based on written feedback provided within ten business days of delivery. Additional revision rounds beyond this are scoped and priced separately. Revisions are limited to clarifications, corrections, and formatting adjustments. Requests that substantially change the scope or methodology of the original engagement are treated as new work.`,
  },
  {
    title: 'Payment Terms',
    body: `Engagements are invoiced in two installments: 50% upon acceptance of the proposal, and 50% upon delivery of the final report. For longer engagements, milestone-based payment schedules may be arranged. Invoices are due within 14 business days of receipt. Late payments are subject to a 1.5% monthly fee. We reserve the right to pause or suspend work on engagements where invoices remain outstanding beyond 30 days.`,
  },
  {
    title: 'Confidentiality',
    body: `We treat every client engagement, including its existence, purpose, findings, and commercial context, as strictly confidential. We do not discuss client work with outside parties, and we do not reference client names or details in public materials without explicit written permission. Clients are similarly asked to treat our proprietary methodologies, frameworks, and unpublished research materials as confidential.`,
  },
  {
    title: 'Intellectual Property',
    body: `Upon receipt of final payment, clients receive full ownership of the final deliverables produced for their engagement. Ascolani Analytical Consulting retains ownership of the methodologies, frameworks, templates, and research instruments used to produce those deliverables. We also retain the right to draw on aggregate, anonymized learnings from our body of work to improve future research, provided no client-identifiable information is used.`,
  },
  {
    title: 'Scope Changes',
    body: `Changes to the agreed scope of work, including additions to the research questions, additional participant groups, new deliverable formats, or extended timelines, are documented in a written amendment to the proposal. Scope changes that require additional time or resources are priced accordingly before work continues.`,
  },
  {
    title: 'Cancellation',
    body: `If a client cancels an engagement before work begins, the initial 50% deposit is non-refundable. If cancellation occurs after work has begun, the client is invoiced for all work completed to the point of cancellation, at a pro-rated rate based on the agreed project fee. Ascolani Analytical Consulting reserves the right to withdraw from an engagement if client conduct is found to be in violation of participant rights, ethical standards, or these Terms of Engagement.`,
  },
  {
    title: 'Limitation of Liability',
    body: `Our liability in connection with any engagement is limited to the fees paid for that engagement. We are not liable for decisions made by clients on the basis of research findings, for outcomes resulting from the client's use or misuse of deliverables, or for indirect, consequential, or incidental damages of any kind.`,
  },
]

export default function Terms() {
  return (
    <>
      <section className="bg-navy-950 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel light>Terms of Engagement</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6">
            How we work together, clearly stated.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            These terms govern all consulting engagements with Ascolani Analytical Consulting. We believe clarity on these matters protects both parties and allows the work to proceed without distraction.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={s.title} className="pb-10 border-b border-navy-100 last:border-0 last:pb-0">
                <div className="flex items-start gap-4 mb-3">
                  <span className="font-serif text-2xl font-bold text-gold-400/40 leading-none mt-1 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-xl font-semibold text-navy-900">{s.title}</h3>
                </div>
                <p className="text-charcoal-700 leading-relaxed pl-10">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-navy-100">
            <p className="text-charcoal-700/60 text-sm">Last updated: June 2025</p>
            <p className="text-charcoal-700/60 text-sm mt-1">
              Questions? Email us at{' '}
              <a href="mailto:inquiries@ascolaniconsulting.com" className="text-gold-600 hover:text-gold-700">inquiries@ascolaniconsulting.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
