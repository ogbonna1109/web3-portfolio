import { useEffect, useState } from 'react'
import { personal } from '../data/portfolio'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section tracking
      const sections = links.map((l) => document.querySelector(l.href))
      const idx = sections.findLastIndex(
        (el) => el && el.getBoundingClientRect().top <= 120
      )
      setActive(idx >= 0 ? links[idx].href : '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(2,2,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={(e) => handleNav(e, '#hero')}
          className="font-mono font-bold text-lg neon-text tracking-wider"
          style={{ background: 'none', border: 'none', cursor: 'none' }}
        >
          {personal.handle || '0x_dev'}
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: active === l.href ? '#00f5ff' : '#64748b',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNav(e, '#contact')}
          className="btn-primary"
          style={{ padding: '8px 20px', fontSize: '13px' }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}
