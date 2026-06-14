import SectionLabel from '../components/SectionLabel'

const sections = [
  {
    title: 'What information we collect',
    body: `When you submit a form on this website, whether through the contact form, the research panel signup, or the newsletter, we collect the information you provide directly: your name, email address, company name, and any details you include in your message. We do not collect any information about you automatically beyond standard server logs, and we do not use tracking cookies or behavioral analytics tools.`,
  },
  {
    title: 'How we use your information',
    body: `We use the information you submit solely to respond to your inquiry, contact you about research participation opportunities you have opted into, or send you the newsletter you subscribed to. We do not use your information for advertising, profiling, or any purpose beyond the one you submitted it for.`,
  },
  {
    title: 'Who we share your information with',
    body: `We do not sell, rent, or share your personal information with third parties for commercial purposes. In limited cases, we may use trusted service providers to help us manage communications (for example, an email delivery platform). These providers are bound by confidentiality obligations and are not permitted to use your data for any purpose other than delivering our communications.`,
  },
  {
    title: 'How long we keep your information',
    body: `Contact form submissions are retained for as long as necessary to respond to your inquiry and maintain a record of our communication. Newsletter subscriber data is retained until you unsubscribe. Research panel registrations are retained until you ask to be removed. You can request deletion of your information at any time by emailing us.`,
  },
  {
    title: 'Your rights',
    body: `You have the right to request access to the personal information we hold about you, to correct inaccurate information, and to request that we delete your information. If you subscribed to our newsletter, you can unsubscribe at any time using the link included in every email. For any other requests, contact us at the address below.`,
  },
  {
    title: 'Security',
    body: `We take reasonable measures to protect the information you submit to us from unauthorized access, disclosure, or loss. Our website is served over encrypted connections (HTTPS). Form submissions are transmitted securely.`,
  },
  {
    title: 'Changes to this policy',
    body: `We may update this Privacy Policy from time to time. When we do, we will update the date at the bottom of this page. We encourage you to review this page periodically if you have an ongoing relationship with us.`,
  },
]

export default function Privacy() {
  return (
    <>
      <section className="bg-navy-950 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel light>Privacy Policy</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6">
            Plain language. No surprises.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            We collect minimal information, use it only for the purpose you intended, and never share it without your knowledge. Here is exactly how that works.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="pb-10 border-b border-navy-100 last:border-0 last:pb-0">
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{s.title}</h3>
                <p className="text-charcoal-700 leading-relaxed">{s.body}</p>
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
