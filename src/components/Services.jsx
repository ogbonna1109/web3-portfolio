import { useScrollFade } from '../hooks/useScrollFade'
import { services } from '../data/portfolio'

export default function Services() {
  const ref = useScrollFade()

  return (
    <section
      id="services"
      className="py-28"
      style={{ background: 'rgba(255,255,255,0.01)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="fade-up">
          <span className="section-badge">Services</span>
          <h2
            className="font-bold mb-14"
            style={{ fontSize: 'clamp(26px,3vw,42px)' }}
          >
            What I can <span className="neon-text">build for you</span>
          </h2>

          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-7 transition-all duration-300"
                style={{
                  background: s.highlight
                    ? 'rgba(0,245,255,0.04)'
                    : 'rgba(255,255,255,0.02)',
                  border: s.highlight
                    ? '1px solid rgba(0,245,255,0.2)'
                    : '1px solid rgba(255,255,255,0.06)',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(168,85,247,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(168,85,247,0.35)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = s.highlight
                    ? 'rgba(0,245,255,0.04)'
                    : 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.borderColor = s.highlight
                    ? 'rgba(0,245,255,0.2)'
                    : 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.transform = ''
                }}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold mb-3" style={{ fontSize: 17 }}>
                  {s.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: '#475569', lineHeight: 1.75 }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
