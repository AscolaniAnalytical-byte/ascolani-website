import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import SectionLabel from '../components/SectionLabel'
import { insights } from '../data/insights'

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

export default function Insights() {
  const [featured, ...rest] = insights

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel light>Insights</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6">
            Thinking out loud about research, behavior, and better decisions.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Observations from the field, perspectives on method, and the occasional challenge to conventional thinking.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <Link to={`/insights/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-navy-900">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.cover}
                    alt={featured.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400">{featured.tag}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-xs text-white/40">{featured.date}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-xs text-white/40">{featured.readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white leading-snug mb-5 group-hover:text-gold-400 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">{featured.excerpt}</p>
                  <span className="text-gold-400 text-sm font-medium inline-flex items-center gap-2">
                    Read article <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Article grid */}
      <section className="pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article, i) => (
              <AnimatedSection key={article.slug} className={`animate-delay-${i * 100}`}>
                <Link to={`/insights/${article.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-navy-50 hover:border-gold-500/30 transition-colors duration-300 h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.cover}
                      alt={article.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-500">{article.tag}</span>
                      <span className="text-charcoal-700/30">·</span>
                      <span className="text-xs text-charcoal-700/50">{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-navy-900 leading-snug mb-3 group-hover:text-navy-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-charcoal-700 text-sm leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
                    <span className="text-gold-500 text-xs font-semibold uppercase tracking-wide inline-flex items-center gap-1">
                      Read more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
