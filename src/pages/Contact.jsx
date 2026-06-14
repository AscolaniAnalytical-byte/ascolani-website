import { useState } from 'react'
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

const projectTypes = [
  'In-Depth Interviews',
  'Ethnographic Research',
  'Focus Group Facilitation',
  'Strategic Synthesis',
  'Longitudinal Research',
  'Stakeholder Research',
  'Not sure yet',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', projectType: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
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

  const inputClass = (field) =>
    `w-full bg-white border rounded-lg px-4 py-3 text-navy-900 placeholder-charcoal-700/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all ${
      errors[field] ? 'border-red-400' : 'border-navy-100'
    }`

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-40 pb-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionLabel light>Contact Us</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6">
            Let's explore what your research challenge actually requires.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Every engagement begins with a conversation. Tell us about your situation and we'll respond within two business days.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Sidebar info */}
            <AnimatedSection className="lg:col-span-2">
              <div className="space-y-10">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-4">What to expect</h3>
                  <div className="space-y-5">
                    {[
                      { step: '01', label: 'Initial response', text: 'A member of our team will respond within two business days to schedule an introductory call.' },
                      { step: '02', label: 'Discovery call', text: 'A 30-minute conversation to understand your challenge, your timeline, and whether we\'re the right fit.' },
                      { step: '03', label: 'Proposal', text: 'If the fit is right, we\'ll send a tailored proposal outlining methodology, timeline, and investment.' },
                    ].map(item => (
                      <div key={item.step} className="flex gap-4">
                        <span className="font-serif text-gold-400 font-bold text-lg leading-none mt-0.5 flex-shrink-0">{item.step}</span>
                        <div>
                          <h4 className="font-semibold text-navy-900 text-sm mb-1">{item.label}</h4>
                          <p className="text-charcoal-700 text-sm leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-navy-100 pt-8">
                  <h4 className="font-semibold text-navy-900 text-sm mb-4">Direct contact</h4>
                  <div className="space-y-2 text-sm text-charcoal-700">
                    <p>
                      <a href="mailto:inquiries@ascolaniconsulting.com" className="text-gold-600 hover:text-gold-700 font-medium">
                        inquiries@ascolaniconsulting.com
                      </a>
                    </p>
                    <p>+1 (317) 376-7250</p>
                    <p>+1 (815) 209-3249</p>
                    <p className="leading-relaxed text-charcoal-700/70">
                      1811 Broad Ripple Ave<br />Indianapolis, IN 46220
                    </p>
                  </div>
                </div>

                <div className="bg-navy-900 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/margaret.jpg"
                      alt="Dr. Margaret Ascolani"
                      className="w-14 h-14 rounded-full object-cover object-top flex-shrink-0 ring-2 ring-gold-500/30"
                    />
                    <div>
                      <p className="text-white text-sm font-semibold font-serif">Dr. Margaret Ascolani</p>
                      <p className="text-gold-400 text-xs">Ph.D. · M.A. · M.S. &nbsp;·&nbsp; Founder</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed italic font-serif">
                    "We take on a limited number of engagements each quarter to ensure we can give each client the depth of attention their work deserves."
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3 animate-delay-200">
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 border border-navy-50 text-center">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-gold-500">
                      <path d="M6 16l7 7 13-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-3">Thank you for reaching out.</h3>
                  <p className="text-charcoal-700 leading-relaxed max-w-sm mx-auto">
                    We've received your message and will be in touch within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-navy-50 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">
                        Full Name <span className="text-gold-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={handleChange('name')}
                        placeholder="Dr. Jane Smith"
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">
                        Email Address <span className="text-gold-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        placeholder="jane@example.com"
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={handleChange('company')}
                      placeholder="Acme Corporation"
                      className={inputClass('company')}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">
                      Project Type
                    </label>
                    <select
                      value={form.projectType}
                      onChange={handleChange('projectType')}
                      className={`${inputClass('projectType')} cursor-pointer`}
                    >
                      <option value="">Select a service area...</option>
                      {projectTypes.map(pt => (
                        <option key={pt} value={pt}>{pt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">
                      Tell us about your challenge <span className="text-gold-500">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={handleChange('message')}
                      rows={6}
                      placeholder="What decision are you trying to make? What do you need to understand? What have you already tried?"
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <p className="text-xs text-charcoal-700/60 leading-relaxed">
                        By submitting this form, you agree to our privacy policy. We do not share your information with third parties and treat all inquiries with strict confidentiality.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm rounded-lg transition-colors duration-200"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
