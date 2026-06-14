const items = [
  { number: '8', label: 'Case Studies Completed' },
  { number: '4', label: 'Market Research Projects' },
  { number: '100%', label: 'Client Satisfaction Rate' },
  { number: '5', label: 'Industries Served' },
  { number: '200+', label: 'Research Participants' },
  { number: '6', label: 'Research Methods' },
  { number: '100%', label: 'Confidential Engagements' },
  { number: '2023', label: 'Year Founded' },
]

const tickerKeyframes = `
  @keyframes tickerLeft {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`

function TickerItem({ number, label }) {
  return (
    <div className="flex items-center gap-10 flex-shrink-0">
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-3xl font-bold text-gold-400">{number}</span>
        <span className="text-white/50 text-sm tracking-wide whitespace-nowrap">{label}</span>
      </div>
      <span className="text-gold-500/30 text-lg flex-shrink-0">&#9670;</span>
    </div>
  )
}

export default function Ticker() {
  return (
    <>
      <style>{tickerKeyframes}</style>
      <div className="bg-navy-900 border-y border-white/5 overflow-hidden relative" style={{ height: '72px' }}>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-900 to-transparent z-10 pointer-events-none" />

        {/* Centered vertically */}
        <div className="absolute inset-0 flex items-center">
          <div
            className="flex gap-10"
            style={{
              width: 'max-content',
              animation: 'tickerLeft 35s linear infinite',
            }}
          >
            {[...items, ...items].map((item, i) => (
              <TickerItem key={i} number={item.number} label={item.label} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
