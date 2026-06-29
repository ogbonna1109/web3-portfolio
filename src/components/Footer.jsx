import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer
      className="py-12 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="neon-text font-bold text-lg font-mono mb-1">
              {personal.handle}
            </div>
            <p className="text-sm" style={{ color: '#334155' }}>
              Building the decentralised future 🚀
            </p>
          </div>

          {/* Nav links */}
          <div className="flex gap-6 text-sm" style={{ color: '#475569' }}>
            {['about', 'skills', 'projects', 'services', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="capitalize transition-colors duration-200 hover:text-cyan-400"
                style={{ background: 'none', border: 'none', cursor: 'none', color: 'inherit', fontFamily: 'inherit' }}
              >
                {id}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs font-mono" style={{ color: '#1e293b' }}>
            © {year} {personal.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
