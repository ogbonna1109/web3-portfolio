import { useState, useEffect } from 'react'
import HeroCanvas from './HeroCanvas'
import ProfilePicture from './ProfilePicture'
import { personal } from '../data/portfolio'

const TYPING_TEXT = '> initialising portfolio.js'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  // Typing animation
  useEffect(() => {
    let i = 0
    const iv = setInterval(() => {
      if (i < TYPING_TEXT.length) {
        setTyped(TYPING_TEXT.slice(0, ++i))
      } else {
        clearInterval(iv)
      }
    }, 55)
    return () => clearInterval(iv)
  }, [])

  // Cursor blink
  useEffect(() => {
    const iv = setInterval(() => setShowCursor((c) => !c), 530)
    return () => clearInterval(iv)
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <HeroCanvas />

      {/* Radial glow behind hero text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(0,245,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left — text */}
          <div>
            {/* Typing line */}
            <p className="font-mono text-sm mb-5" style={{ color: 'rgba(0,245,255,0.7)' }}>
              {typed}
              <span style={{ opacity: showCursor ? 1 : 0 }}>█</span>
            </p>

            {/* Headline */}
            <h1
              className="font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(38px,5.5vw,72px)' }}
            >
              <span style={{ color: '#e2e8f0' }}>Hi, I'm </span>
              <span className="neon-text">{personal.name}</span>
            </h1>

            {/* Sub-title */}
            <p
              className="font-medium mb-4"
              style={{
                fontSize: 'clamp(15px,1.8vw,20px)',
                color: '#64748b',
                lineHeight: 1.5,
              }}
            >
              {personal.title}
            </p>

            {/* Description */}
            <p
              className="mb-10 max-w-xl"
              style={{ color: '#475569', fontSize: 16, lineHeight: 1.8 }}
            >
              {personal.tagline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <button
                className="btn-primary"
                onClick={() => scrollTo('projects')}
              >
                View Projects
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollTo('contact')}
              >
                Contact Me
              </button>
              {personal.resumeUrl && (
                <a
                  href={personal.resumeUrl}
                  download
                  className="btn-secondary"
                  style={{ borderColor: 'rgba(168,85,247,0.4)', color: '#a855f7' }}
                >
                  ↓ Download Resume
                </a>
              )}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              {personal.stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-bold neon-text"
                    style={{ fontSize: 28 }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#475569' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile picture */}
          <div className="hidden lg:flex">
            <ProfilePicture />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#334155' }}
      >
        <span className="font-mono text-xs">scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cyan-400/40 to-transparent" />
      </div>
    </section>
  )
}
