import { useEffect, useRef } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import { skills } from '../data/portfolio'

function SkillCard({ skill }) {
  const barRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    // Set width to 0 initially
    bar.style.width = '0%'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          bar.style.width = `${skill.level}%`
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(bar)
    return () => observer.disconnect()
  }, [skill.level])

  return (
    <div
      className="group rounded-xl p-5 text-center transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(0,245,255,0.05)'
        e.currentTarget.style.borderColor = 'rgba(0,245,255,0.35)'
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)'
        e.currentTarget.style.boxShadow = '0 0 24px rgba(0,245,255,0.12)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = ''
      }}
    >
      <div
        className="mb-3 transition-all duration-300 group-hover:[filter:drop-shadow(0_0_8px_#00f5ff)]"
        style={{ fontSize: 36 }}
      >
        {skill.icon}
      </div>
      <div className="font-semibold text-sm mb-2">{skill.name}</div>
      <div className="progress-bar">
        <div
          ref={barRef}
          className="progress-fill"
          style={{ width: '0%' }}
        />
      </div>
      <div
        className="font-mono text-[10px] mt-2"
        style={{ color: '#334155' }}
      >
        {skill.level}%
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useScrollFade()

  return (
    <section
      id="skills"
      className="py-28"
      style={{ background: 'rgba(255,255,255,0.01)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="fade-up">
          <span className="section-badge">Skills</span>
          <h2
            className="font-bold mb-14"
            style={{ fontSize: 'clamp(26px,3vw,42px)' }}
          >
            My <span className="neon-text">tech stack</span>
          </h2>

          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            }}
          >
            {skills.map((s) => (
              <SkillCard key={s.name} skill={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
