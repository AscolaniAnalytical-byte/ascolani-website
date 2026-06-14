import { Link } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
]

const resourceLinks = [
  { to: '/insights', label: 'Insights' },
  { to: '/careers', label: 'Careers' },
  { to: '/participate', label: 'Join Our Research Panel' },
  { to: '/faq', label: 'FAQ' },
]

const legalLinks = [
  { to: '/ethics', label: 'Ethics and Compliance' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Engagement' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true)
    }
  }

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img src="/logo.png" alt="Ascolani Analytical Consulting" className="h-14 w-auto mb-4" />
              <p className="text-sm leading-relaxed text-white/50 max-w-xs">
                Helping organizations understand the human dimensions of complex decisions through rigorous qualitative research.
              </p>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">Stay Informed</p>
              {subscribed ? (
                <p className="text-gold-400 text-sm">You are subscribed. Thank you.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold-500/50 transition-colors min-w-0"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-semibold rounded transition-colors flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Legal */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <a href="mailto:inquiries@ascolaniconsulting.com" className="hover:text-gold-400 transition-colors">
                  inquiries@ascolaniconsulting.com
                </a>
              </li>
              <li className="text-white/50">+1 (317) 376-7250</li>
              <li className="text-white/50">+1 (815) 209-3249</li>
              <li className="text-white/50 leading-relaxed">
                1811 Broad Ripple Ave<br />Indianapolis, IN 46220
              </li>
            </ul>

            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-xs text-white/40 hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ascolani Analytical Consulting. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Confidentiality and integrity in every engagement.
          </p>
        </div>
      </div>
    </footer>
  )
}
