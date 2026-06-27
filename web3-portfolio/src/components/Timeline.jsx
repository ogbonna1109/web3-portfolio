import { useScrollFade } from '../hooks/useScrollFade'
import { timeline } from '../data/portfolio'

export default function Timeline() {
  const ref = useScrollFade()

  return (
    <section id="timeline" className="py-28 max-w-6xl mx-auto px-6">
      <div ref={ref} className="fade-up">
        <span className="section-badge">Experience</span>
        <h2
          className="font-bold mb-14"
          style={{ fontSize: 'clamp(26px,3vw,42px)' }}
        >
          My Web3 <span className="neon-text">journey</span>
        </h2>

        <div className="relative pl-12">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-[2px]"
            style={{
              background:
                'linear-gradient(180deg,#00f5ff 0%,#a855f7 60%,transparent 100%)',
            }}
          />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 items-start">
                {/* Dot on the line */}
                <div
                  className="absolute -left-[29px] mt-1 w-3.5 h-3.5 rounded-full flex-shrink-0"
                  style={{
                    background: '#00f5ff',
                    border: '3px solid #020208',
                    boxShadow: '0 0 12px #00f5ff',
                  }}
                />

                <div className="glass-card flex-1 p-7">
                  <div
                    className="font-mono text-xs mb-3"
                    style={{ color: '#00f5ff' }}
                  >
                    {item.period}
                  </div>
                  <h3
                    className="font-semibold mb-3"
                    style={{ fontSize: 18 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: '#64748b', lineHeight: 1.75 }}
                  >
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
