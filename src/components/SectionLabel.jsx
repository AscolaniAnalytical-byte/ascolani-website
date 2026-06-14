export default function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${
        light ? 'text-gold-400' : 'text-gold-600'
      }`}
    >
      {children}
    </span>
  )
}
