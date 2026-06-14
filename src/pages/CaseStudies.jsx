import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
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

const caseStudies = [
  {
    id: 'cs-01',
    tag: 'Sports & Entertainment',
    title: "How a premier motorsport league discovered that its youngest fans weren't disengaged. They just had no reason to care about the people driving the cars.",
    context: "A well-established professional racing series had a demographic problem hiding in plain sight. Internal membership survey data, gathered from nearly 190,000 fans, revealed that 81% of their audience was aged 45 or older. Only 19% were under 44. The 18-34 demographic, the segment most critical to the league's long-term commercial viability, was effectively absent. The series had tried increasing digital content, but engagement metrics among younger audiences remained flat.",
    challenge: "The client needed to understand not just who the young fan was, but why they weren't connecting, and crucially, whether they could be reached without alienating the loyal older fan base that represented the backbone of the league's current revenue. Standard competitive benchmarking against rival racing series was explicitly deprioritized. The client wanted to understand how entertainment, football, tennis, and other sports had built emotional attachment to individual athletes, and whether that model could work for motorsport.",
    approach: [
      'Competitive landscape analysis across entertainment, individual sports, and team sports, examining how different industries build identity around athletes',
      'Structured literature review on human brand authenticity, fan engagement theory, and the role of digital media in reshaping celebrity relationships',
      'In-depth interviews with four distinct participant segments: superfans, casual fans, non-fans aged 18–34, and established fans aged 40+',
      'Subject matter expert interview with a digital content strategist at one of the most historically significant motorsport venues in the world',
      'Affinity mapping and thematic analysis of interview data, producing separate insight maps for fan and non-fan segments',
      'Heuristic review and content audit of existing digital fan-facing properties, including the league\'s onboarding and educational pages',
    ],
    findings: "The research surfaced a consistent and striking pattern: young non-fans did not dislike motorsport. They simply had no relationship with any of the drivers. Every driver looked the same to them. The sport had optimized heavily for the technical spectacle of the race but had almost entirely failed to build individual human narratives around its athletes. In contrast, sports that successfully engaged young audiences had made their athletes culturally legible, with stories, personalities, and visible identities that existed outside of competitive performance. A secondary finding was equally important: existing digital products were information-dense and passive. Superfans had compensated by consuming multiple parallel content streams simultaneously during races, but the platform wasn't built for this, leaving them to cobble together their own experience. Non-fans, meanwhile, encountered educational content that was text-heavy, inconsistent in tone, and offered no entry point to a specific driver's story.",
    outcome: "Research findings produced three strategic directions: humanizing drivers through athlete-style personal storytelling; building a more immersive, multi-stream in-race digital experience; and redesigning the league's introductory content to be narrative-led rather than informational. The research established that younger fans valued the potential and rarity of an athlete, with future promise mattering more than historical record, a distinction with direct implications for how individual drivers should be positioned across different audience segments.",
    image: '/motorsports.png',
    pullQuote: "Young fans did not dislike motorsport. They had no relationship with any of the drivers. Every driver looked the same to them.",
    color: 'bg-navy-900',
    bgHex: '#001130',
    accentColor: 'text-gold-400',
    borderColor: 'border-gold-500/20',
  },
  {
    id: 'cs-02',
    tag: 'Digital Health & MedTech',
    title: "Understanding what 63% of Parkinson's patients experience daily, and why the devices designed to help them were missing the human reality entirely.",
    context: "A digital health startup was developing an assistive wearable device targeting a specific and underserved clinical problem: freezing of gait (FOG), a neurological symptom experienced by approximately 63% of Parkinson's patients, in which walking suddenly arrests mid-stride, dramatically increasing fall risk and loss of independence. Despite a substantial market (over one million Parkinson's patients in the United States alone, with a serviceable market of roughly 315,000 patients experiencing gait freeze), existing solutions were either pharmaceutical, clinically invasive, or physically cumbersome. The startup needed to understand the lived reality of their users before committing to a product direction.",
    challenge: "The core research challenge was bridging the gap between clinical descriptions of gait freezing and the daily human experience of living with it. Existing competitive products had been designed from the outside, by engineers solving a mechanical problem, rather than from an understanding of the psychological, social, and practical barriers patients faced. The client needed to understand not just when and how gait freezing occurred, but the emotional texture of the experience: the embarrassment, the compensation strategies, the relationship with caregivers and clinicians, and the mental blocks that accompanied the physical ones.",
    approach: [
      'In-depth interviews with practicing neurologists with decades of clinical experience treating Parkinson\'s patients',
      'Interviews with patients actively living with Parkinson\'s, including individuals who also worked as fitness coaches, providing a uniquely informed dual perspective',
      'Empathy mapping and persona development to capture the full emotional and behavioral profile of the primary user',
      'Day-in-the-life journey mapping, tracking the frequency, context, and emotional weight of gait freeze incidents across a typical patient\'s day',
      'Market environment analysis including competitive landscape review, regulatory dynamics, insurance reimbursement frameworks, and macroeconomic forces',
      'Value proposition design mapping patient pains, gains, and functional jobs-to-be-done against potential product features',
    ],
    findings: "The research revealed several findings that would not have emerged from clinical literature alone. First, the mental block preceding gait freeze was as significant as the physical arrest itself. Patients described a cycle of anxiety and anticipation that often preceded and exacerbated episodes. Second, stigma was a material design constraint: patients deeply resisted solutions that made their condition visible or that resembled traditional medical devices. Existing assistive solutions, some weighing over 25 pounds, were abandoned not because they didn't work, but because they were incompatible with how patients wanted to move through the world. Third, clinicians were severely data-constrained: neurologists were making medication and treatment decisions based on brief office visits and patient self-report, with no access to continuous, objective movement data. A solution that served patients and generated clinical-grade data simultaneously would address two urgent needs with a single product.",
    outcome: "The research directly shaped the product concept: a discreet wearable device using machine learning to detect the signature precursors of a freeze event and deliver haptic feedback to interrupt the pattern before it fully develops, while simultaneously building a continuous data record accessible to neurologists and physical therapists. The business model followed the clinical pathway: devices would be introduced through physical therapists acting as both trainers and distributors, with a subscription data layer providing ongoing revenue and a growing dataset valuable to pharmaceutical and research organizations. The research reframed what had been positioned as an assistive device into a clinical data platform with a human interface.",
    image: '/mri.png',
    pullQuote: "Existing solutions were abandoned not because they did not work, but because they were incompatible with how patients wanted to move through the world.",
    color: 'bg-charcoal-900',
    bgHex: '#282724',
    accentColor: 'text-gold-400',
    borderColor: 'border-gold-500/20',
  },
  {
    id: 'cs-03',
    tag: 'Industrial Automation & Supply Chain',
    title: "Why a compelling autonomous vehicle technology was the right idea for the wrong moment, and what a manufacturer should do about it anyway.",
    context: "An industrial technology company was evaluating whether to enter the automated yard truck market, a segment sitting at the intersection of autonomous vehicle engineering, warehouse logistics, and the ongoing push across heavy industry to reduce labour costs and operational risk. Automated yard trucks (also called terminal tractors or hostlers) move trailers within distribution centres and port facilities. The underlying technology was maturing, and several well-capitalized players were beginning to make moves in the space. The client needed an honest assessment of whether this was a viable business opportunity, and if so, when.",
    challenge: "The challenge was not primarily technical. The client's internal teams could assess engineering feasibility. What they needed was a rigorous qualitative understanding of the human and organizational dimensions of adoption: how decision-makers in large distribution and logistics operations actually evaluated new automation technology; what the union and labour relations landscape looked like on the ground; how long procurement and implementation cycles genuinely ran in practice; and whether the infrastructure realities of existing facilities posed barriers that no amount of product improvement could overcome.",
    approach: [
      'In-depth interviews with subject matter experts in supply chain management and distribution centre operations, covering procurement decision-making and operational integration',
      'Interviews with autonomous vehicle engineers to map the current state and near-term trajectory of the enabling technology',
      'Conversations with labour union representatives to understand workforce concerns, negotiation dynamics, and the realistic pace of technology acceptance in organized workplaces',
      'Analysis of distribution centre infrastructure realities: facility age, layout standardization, retrofit complexity, and capital investment cycles',
      'Market timing assessment examining analogous industrial automation adoption curves in comparable sectors',
      'Strategic options analysis for different entry timing scenarios',
    ],
    findings: "The research produced a nuanced but clear picture. The technology was credible and the long-term market was real, but the path to commercial adoption in 2023 was obstructed by structural barriers that were not technological in nature. Large distribution and logistics operators move slowly on capital infrastructure decisions. Procurement cycles for technology of this kind typically span 18 to 36 months from initial evaluation to deployment. More significantly, the existing physical infrastructure of most distribution centres, built over decades without autonomous vehicle integration in mind, would require either substantial retrofitting or purpose-built new facilities to accommodate automated yard operations at scale. Neither path was imminent at any meaningful volume. Labour dynamics compounded this: union agreements in major distribution operations represented a significant negotiation layer, and the pace of acceptance in organized workplaces was materially slower than in greenfield non-union environments. The picture was not discouraging. It was clearly time-bound. All indicators pointed to a viable market in the 3 to 5 year horizon.",
    outcome: "The engagement concluded with a strategic recommendation against immediate full market entry, but with an equally clear affirmative case for early positioning. The research identified specific enabling technologies, including sensors, fleet management software, and facility mapping tools, that the client could invest in or partner around now, building the technical infrastructure and industry relationships that would be necessary to move quickly when the market conditions aligned. The recommendation was explicit: the cost of waiting passively until the market matured was higher than the cost of measured early investment. Companies that began building distribution-sector relationships, understanding facility integration requirements, and developing the ancillary technology stack in 2023 would be positioned to lead. Those that waited for clear market signals would find themselves retrofitting their capabilities alongside the facilities they were trying to serve.",
    image: '/realtruck.png',
    pullQuote: "The picture was not discouraging. It was clearly time-bound. Companies that waited for clear market signals would find themselves retrofitting their capabilities alongside the facilities they were trying to serve.",
    color: 'bg-navy-800',
    bgHex: '#01153a',
    accentColor: 'text-gold-400',
    borderColor: 'border-gold-500/20',
  },
  {
    id: 'cs-04',
    tag: 'Food & Beverage',
    title: "How a restaurant with genuinely good food discovered that silence from happy customers was costing them as much as the noise from unhappy ones.",
    context: "A well-regarded independent restaurant in a mid-sized Midwestern city had built a loyal following over several years, primarily through word of mouth and a dependable dine-in experience. When the business shifted to a heavier reliance on takeout during the pandemic, it retained a core of loyal customers who continued to order regularly. What the owners had not anticipated was the review dynamic that came with this shift. By the time Ascolani Analytical Consulting was brought in, the restaurant's average rating across Google, Yelp, and TripAdvisor had settled at 3.9. The number did not reflect the actual customer experience. It reflected a structural gap in who was motivated to speak.",
    challenge: "The client needed to understand two things. First, why their ratings were stuck despite consistently positive word of mouth and strong repeat business. Second, what it would take to convert satisfied customers into active advocates without compromising the authenticity that had built their reputation in the first place. A third dimension complicated the picture: a portion of dine-in customers were arriving during a period when operations had not fully recovered from the pandemic transition. Service levels for new in-person guests had deteriorated without the owners fully realizing it, and those guests were the most likely to have strong feelings and the lowest loyalty threshold for acting on them.",
    approach: [
      'Initial outreach to both loyal customers and individuals who had left negative reviews online, to understand how the experience was being described from both sides',
      'Thematic analysis of mixed interview responses, recognizing the gap between what people say, what they do, and what they actually experience as a signal worth investigating further',
      'Unannounced observational visits to the restaurant across multiple days and times, going beyond the kitchen to study service flow, staff behavior, and the physical dynamics of the dining room',
      'Identification of two distinct customer populations operating in the same space: dine-in guests and takeout and delivery orders, and analysis of how each was being served',
      'A structured focus group experiment: Group A received prompt, attentive service and Group B experienced deliberate delays, with both groups eating identical food. Post-meal ratings were collected and compared.',
      'Analysis of review sentiment across Google, Yelp, and TripAdvisor to identify thematic patterns in one-star and five-star submissions',
      'Customer journey mapping to locate the emotional moments most likely to drive review behavior in either direction',
      'Development of a review encouragement framework that avoided manufactured urgency or direct solicitation',
    ],
    findings: "Initial outreach to customers told two contradictory stories. People who had left negative reviews said the food was not good. Frequent customers said the food was excellent. Neither group was lying. But the contradiction was significant enough that a simple food or menu audit would not resolve it. There was a gap between what people said and what they had actually experienced, and the research needed to find it.\n\nThe answer came through direct observation. Over several unannounced visits, a pattern emerged that no survey would have surfaced: two entirely separate customer populations were sharing the same physical space, but only one of them felt like they belonged there. Dine-in guests would arrive, sit down, and wait. Meanwhile, they watched delivery couriers walk in through the front door, collect bags, and leave. The kitchen was clearly running. Food was clearly being made. It just was not for them.\n\nThe dynamic this created was precise and predictable. A customer who walks into a busy restaurant and sees others ahead of them adjusts their expectations accordingly. A customer who walks into a near-empty dining room and then waits while watching takeout orders leave does not. Their expectations were set by what they saw, not by the reality of an online order placed an hour before their arrival. Feeling deprioritized did not just make customers impatient. It changed how they experienced the food when it arrived. Appetite diminished. Attention to imperfections increased. The food that loyal takeout customers raved about was the same food that new dine-in customers picked apart.\n\nThe focus group experiment confirmed this directly. Group A, served promptly and attentively, rated the food significantly higher than Group B, who waited. Same kitchen. Same dishes. Same day. The service experience was rewriting the food experience in real time.\n\nA second finding completed the picture: the restaurant's most loyal customers, the takeout regulars who had built the reputation in the first place, had no particular reason to post publicly. They told friends. They reordered. They never opened Yelp. The review record was being written almost entirely by the people who had been most disappointed, while the people most satisfied stayed quiet.",
    outcome: "The engagement produced a set of practical interventions targeting both sides of the review gap. On the service side, the restaurant implemented structured service recovery protocols specifically for dine-in guests, with particular attention to the moments most likely to generate negative experiences: long waits without acknowledgment, incorrect orders, and departure without any engagement from staff.\n\nOn the encouragement side, the team developed a lightweight review invitation approach built into natural end-of-visit moments, framed around genuine appreciation rather than requests for ratings. Loyal takeout customers were reached through packaging inserts and a simple follow-up message that acknowledged their regularity without feeling transactional. Customers were never incentivized to leave positive reviews specifically. They were incentivized to share their honest experience if they had enjoyed themselves.\n\nEight months after implementation, the restaurant's average rating had risen from 3.9 to 4.4 across Google, Yelp, and TripAdvisor. The improvement was not the result of suppressing negative voices. It was the result of finally giving the satisfied majority a reason to speak.",
    image: '/food.png',
    pullQuote: "Ratings had fallen from the high 4s into the high 3s. Revenue had not yet followed. They wanted to get ahead of it.",
    storyboard: '/storyboard.png',
    color: 'bg-charcoal-800',
    bgHex: '#353430',
    accentColor: 'text-gold-400',
    borderColor: 'border-gold-500/20',
  },
]

function CaseStudyCard({ cs, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <AnimatedSection className={`animate-delay-${Math.min(index * 100, 300)}`}>
      <article className={`${cs.color} rounded-2xl overflow-hidden`} style={cs.bgHex ? { backgroundColor: cs.bgHex } : {}}>
        <div className="p-8 md:p-12">
          <div className="flex items-start justify-between mb-6">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${cs.accentColor}`}>
              {cs.tag}
            </span>
            <span className="font-serif text-4xl font-bold text-white/10">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className={`${cs.image ? 'grid grid-cols-1 md:grid-cols-2 gap-8 items-center' : ''} mb-6`}>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white leading-snug">
              {cs.title}
            </h2>
            {cs.image && (
              <div className="rounded-xl overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.tag}
                  className="w-full h-48 object-cover object-center"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">Context</h4>
              <p className="text-white/70 text-sm leading-relaxed">{cs.context}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">The Challenge</h4>
              <p className="text-white/70 text-sm leading-relaxed">{cs.challenge}</p>
            </div>
          </div>

          {cs.pullQuote && (
            <div className={`border-l-2 border-gold-500 pl-6 my-6`}>
              <p className="font-serif text-xl md:text-2xl text-white/90 leading-snug italic">
                "{cs.pullQuote}"
              </p>
            </div>
          )}

          {expanded && (
            <div className={`border-t ${cs.borderColor} pt-8 mt-2 animate-fade-in`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">Our Approach</h4>
                  <ul className="space-y-2">
                    {cs.approach.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <span className={`${cs.accentColor} mt-0.5 flex-shrink-0`}>+</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">Key Findings</h4>
                  {cs.findings.split('\n\n').map((para, i) => (
                    <p key={i} className="text-white/70 text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
                  ))}
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">Outcome</h4>
                  {cs.outcome.split('\n\n').map((para, i) => (
                    <p key={i} className="text-white/70 text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
                  ))}
                </div>
              </div>
              {cs.storyboard && (
                <div className={`border-t ${cs.borderColor} mt-8 pt-8`}>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Research Storyboard</h4>
                  <img
                    src={cs.storyboard}
                    alt="Research storyboard"
                    className="w-full rounded-lg opacity-90"
                  />
                </div>
              )}
            </div>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className={`mt-6 text-sm font-medium ${cs.accentColor} hover:opacity-80 transition-opacity inline-flex items-center gap-2`}
          >
            {expanded ? 'Show less' : 'Read full case study'}
            <span className={`transition-transform duration-200 inline-block ${expanded ? 'rotate-180' : ''}`}>↓</span>
          </button>
        </div>
      </article>
    </AnimatedSection>
  )
}

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
          <svg viewBox="0 0 400 400" fill="none">
            <polygon points="200,20 380,380 20,380" stroke="white" strokeWidth="0.5" />
            <polygon points="200,80 320,340 80,340" stroke="white" strokeWidth="0.3" />
            <polygon points="200,140 260,300 140,300" stroke="white" strokeWidth="0.3" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionLabel light>Case Studies</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6">
            Research that changed the way our clients understood their problems.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            All engagements are anonymized to protect client confidentiality. Each study represents a real research challenge and the depth of thinking we bring to every mandate we accept.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.id} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality note */}
      <section className="py-12 bg-white border-t border-b border-navy-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 flex-shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold-500">
                <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 11V7a4 4 0 1 1 8 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-navy-900 mb-1">A note on confidentiality</h4>
              <p className="text-charcoal-700 text-sm leading-relaxed max-w-3xl">
                Client names, identifying details, and proprietary data have been removed or altered in all case studies. We treat every engagement from initial inquiry through final delivery with strict professional discretion. Detailed references are available to prospective clients upon request, subject to client permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionLabel>Work With Us</SectionLabel>
            <h2 className="font-serif text-4xl font-semibold text-navy-900 mb-5 leading-tight">
              Have a question that looks like these?
            </h2>
            <p className="text-charcoal-700 leading-relaxed mb-8">
              We'd be glad to discuss whether qualitative research is the right approach for your challenge, and what that engagement might look like.
            </p>
            <Link to="/contact" className="inline-block px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm rounded transition-colors duration-200">
              Start the Conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
