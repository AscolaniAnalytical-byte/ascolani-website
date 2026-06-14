import { useParams, Link } from 'react-router-dom'
import { insights } from '../data/insights'
import SectionLabel from '../components/SectionLabel'

export default function InsightArticle() {
  const { slug } = useParams()
  const article = insights.find(a => a.slug === slug)

  if (!article) {
    return (
      <section className="bg-cream min-h-screen pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-semibold text-navy-900 mb-4">Article not found.</h1>
          <Link to="/insights" className="text-gold-600 hover:text-gold-700 text-sm font-medium">Back to Insights</Link>
        </div>
      </section>
    )
  }

  const index = insights.findIndex(a => a.slug === slug)
  const next = insights[index + 1] || insights[0]

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-40 pb-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link to="/insights" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors mb-10">
            ← Back to Insights
          </Link>
          <SectionLabel light>{article.tag}</SectionLabel>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-4xl mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-white/40 text-sm">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
        {/* Cover image */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-t-2xl overflow-hidden aspect-[21/9]">
            <img
              src={article.cover}
              alt={article.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal-700 leading-relaxed font-serif italic mb-10 border-l-2 border-gold-500 pl-6">
              {article.excerpt}
            </p>
            <div className="text-charcoal-700 leading-relaxed space-y-6">
              {article.body.split('\n\n').map((para, i) => (
                <p key={i} className="leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-navy-100 mt-16 pt-8 flex items-center justify-between">
            <p className="text-xs text-charcoal-700/50 uppercase tracking-widest">Ascolani Analytical Consulting</p>
            <Link to="/contact" className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold rounded transition-colors">
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Next article */}
      <section className="py-16 bg-white border-t border-navy-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-charcoal-700/40 mb-6">Next Article</p>
          <Link to={`/insights/${next.slug}`} className="group flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-64 aspect-video rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={next.cover}
                alt={next.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-500">{next.tag}</span>
              <h3 className="font-serif text-2xl font-semibold text-navy-900 mt-2 mb-3 group-hover:text-navy-700 transition-colors leading-snug">
                {next.title}
              </h3>
              <span className="text-gold-500 text-sm font-medium inline-flex items-center gap-2">
                Read article <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
