import { useState } from 'react'
import SectionLabel from '../components/SectionLabel'

const availability = [
  'In-person interviews (Indianapolis area)',
  'Remote video interviews',
  'Online focus groups',
  'In-person focus groups',
  'Diary or journal studies',
  'Short online surveys',
]

const backgrounds = [
  'Healthcare or life sciences',
  'Technology or engineering',
  'Sports, media, or entertainment',
  'Supply chain or logistics',
  'Education or academia',
  'Finance or professional services',
  'General consumer',
  'Other',
]

export default function Participate() {
  const [form, setForm] = useState({
    name: '', email: '', age: '', background: '', availability: [], message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    setSubmitted(true)
  }

  function handleChange(field) {
    return (e) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }))
      if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }))
    }
  }

  function toggleAvailability(item) {
    setForm(prev => ({
      ...prev,
      availability: prev.availability.includes(item)
        ? prev.availability.filter(a => a !== item)
        : [...prev.availability, item],
    }))
  }

  const inputClass = (field) =>
    `w-full bg-white border rounded-lg px-4 py-3 text-navy-900 placeholder-charcoal-700/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all ${errors[field] ? 'border-red-400' : 'border-navy-100'}`

  return (
    <>
      <section className="bg-navy-950 pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg viewBox="0 0 1200 600" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <rect x="800" y="-100" width="600" height="600" stroke="white" strokeWidth="0.5" transform="rotate(15 800 200)" />
            <rect x="850" y="-50" width="500" height="500" stroke="white" strokeWidth="0.3" transform="rotate(15 800 200)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionLabel light>Join Our Research Panel</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6">
            Your perspective is the data.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Qualitative research only works because real people are willing to share their experiences honestly. If you are open to participating in future interviews, focus groups, or studies, we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'What participation looks like', text: 'Engagements vary by project. Some are single 60-minute interviews. Others are multi-session focus groups. We will always tell you exactly what is involved before you commit to anything.' },
              { title: 'Your time and compensation', text: 'Participants are compensated for their time. The format and amount varies by study. All details are communicated clearly before any session begins.' },
              { title: 'Your privacy is protected', text: 'Everything you share is treated as confidential. Your name is never attached to any finding or report without your explicit permission. You may withdraw at any time.' },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-navy-50 rounded-xl">
                <div className="w-8 h-0.5 bg-gold-500 mb-4" />
                <h4 className="font-serif text-lg font-semibold text-navy-900 mb-2">{item.title}</h4>
                <p className="text-charcoal-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-2xl p-12 border border-navy-50 text-center">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-gold-500">
                  <path d="M6 16l7 7 13-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-3">You are on the panel.</h3>
              <p className="text-charcoal-700 leading-relaxed max-w-sm mx-auto">
                Thank you for signing up. We will reach out when a study matches your background and availability. You will never be contacted without prior notice.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-navy-50">
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-2">Sign up for the research panel</h2>
              <p className="text-charcoal-700 text-sm mb-8 leading-relaxed">We will reach out only when a study matches your background. No spam, no pressure.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">Full Name <span className="text-gold-500">*</span></label>
                    <input type="text" value={form.name} onChange={handleChange('name')} placeholder="Your name" className={inputClass('name')} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">Email Address <span className="text-gold-500">*</span></label>
                    <input type="email" value={form.email} onChange={handleChange('email')} placeholder="your@email.com" className={inputClass('email')} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">Age Range</label>
                    <select value={form.age} onChange={handleChange('age')} className={`${inputClass('age')} cursor-pointer`}>
                      <option value="">Select...</option>
                      {['18-24', '25-34', '35-44', '45-54', '55-64', '65+'].map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">Professional Background</label>
                    <select value={form.background} onChange={handleChange('background')} className={`${inputClass('background')} cursor-pointer`}>
                      <option value="">Select...</option>
                      {backgrounds.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-3">Availability (select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availability.map((item) => (
                      <label key={item} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          onClick={() => toggleAvailability(item)}
                          className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors cursor-pointer ${form.availability.includes(item) ? 'bg-gold-500 border-gold-500' : 'border-navy-200 bg-white'}`}
                        >
                          {form.availability.includes(item) && (
                            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                              <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-charcoal-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">Anything else you would like us to know?</label>
                  <textarea value={form.message} onChange={handleChange('message')} rows={4} placeholder="Optional..." className={`${inputClass('message')} resize-none`} />
                </div>

                <p className="text-xs text-charcoal-700/50 leading-relaxed">
                  By submitting this form you agree to be contacted about future research opportunities. You can unsubscribe at any time. We never share your information with third parties.
                </p>

                <button type="submit" className="w-full py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm rounded-lg transition-colors duration-200">
                  Join the Research Panel
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
