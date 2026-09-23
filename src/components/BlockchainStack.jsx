import { useScrollFade } from '../hooks/useScrollFade'
import { stack } from '../data/portfolio'

const categoryColors = {
  Frontend:   { bg: 'rgba(0,245,255,0.07)',  border: 'rgba(0,245,255,0.25)',  text: '#00f5ff' },
  Blockchain: { bg: 'rgba(168,85,247,0.07)', border: 'rgba(168,85,247,0.25)', text: '#a855f7' },
  Contracts:  { bg: 'rgba(57,255,20,0.06)',  border: 'rgba(57,255,20,0.2)',   text: '#39ff14' },
  Libraries:  { bg: 'rgba(249,115,22,0.07)', border: 'rgba(249,115,22,0.25)', text: '#f97316' },
  Storage:    { bg: 'rgba(236,72,153,0.07)', border: 'rgba(236,72,153,0.25)', text: '#ec4899' },
}

export default function BlockchainStack() {
  const ref = useScrollFade()

  return (
    <section className="py-28 max-w-6xl mx-auto px-6">
      <div ref={ref} className="fade-up">
        <span className="section-badge">Stack</span>
        <h2
          className="font-bold mb-14"
          style={{ fontSize: 'clamp(26px,3vw,42px)' }}
        >
          The <span className="neon-text">ecosystem</span> I build in
        </h2>

        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          }}
        >
          {Object.entries(stack).map(([category, items]) => {
            const c = categoryColors[category] || categoryColors.Frontend
            return (
              <div
                key={category}
                className="rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                }}
              >
                <h3
                  className="font-mono text-xs font-semibold mb-4 uppercase tracking-widest"
                  style={{ color: c.text }}
                >
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: '#94a3b8' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: c.text }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
