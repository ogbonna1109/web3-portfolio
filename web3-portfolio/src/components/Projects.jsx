import { useRef } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import { projects } from '../data/portfolio'

function ProjectCard({ project }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -6
    const rotY = ((x - cx) / cx) * 6
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
  }

  return (
    <div
      ref={cardRef}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(10,10,25,0.9)',
        border: '1px solid rgba(255,255,255,0.07)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        cursor: 'default',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,245,255,0.35)'
        e.currentTarget.style.boxShadow = '0 0 40px rgba(0,245,255,0.08)'
      }}
    >
      {/* Hero image / emoji area */}
      <div
        className={`h-44 flex items-center justify-center text-5xl bg-gradient-to-br ${project.gradient}`}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {project.emoji}
        {project.featured && (
          <span
            className="absolute top-3 right-3 text-xs font-mono px-2 py-1 rounded"
            style={{
              background: 'rgba(0,245,255,0.15)',
              border: '1px solid rgba(0,245,255,0.3)',
              color: '#00f5ff',
            }}
          >
            Featured
          </span>
        )}
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px), linear-gradient(90deg,rgba(0,245,255,0.1) 1px,transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
        <p
          className="text-sm mb-5"
          style={{ color: '#475569', lineHeight: 1.7 }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-1 justify-center"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-200"
            style={{
              background:
                'linear-gradient(135deg,rgba(0,245,255,0.12),rgba(168,85,247,0.12))',
              border: '1px solid rgba(0,245,255,0.25)',
              color: '#00f5ff',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useScrollFade()

  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: 'rgba(255,255,255,0.01)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="fade-up">
          <span className="section-badge">Projects</span>
          <h2
            className="font-bold mb-14"
            style={{ fontSize: 'clamp(26px,3vw,42px)' }}
          >
            What I've <span className="neon-text">built</span>
          </h2>

          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            }}
          >
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
