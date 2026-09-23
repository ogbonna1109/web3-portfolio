import { useState } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import { personal } from '../data/portfolio'

// Social icon SVGs
const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14H7v-7h3v7zm-1.5-8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18 17h-3v-3.5c0-1-.75-1.5-1.5-1.5S12 12.5 12 13.5V17H9v-7h3v1.25c.5-.75 1.5-1.25 2.5-1.25 1.93 0 3.5 1.57 3.5 3.5V17z" />
  </svg>
)
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 1.2h3.4l-7.5 8.6 8.8 11.6H16l-5.4-7.1-6.2 7.1H1l8-9.2L.7 1.2h7.1l4.9 6.5zM17.6 19.3h1.9L6.5 3.2H4.4z" />
  </svg>
)
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)
const WhatsappIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
)
const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const socials = [
  { label: 'GitHub',    href: personal.social.github,    icon: <GithubIcon />,    color: '#e2e8f0' },
  { label: 'LinkedIn',  href: personal.social.linkedin,  icon: <LinkedinIcon />,  color: '#0ea5e9' },
  { label: 'X',         href: personal.social.twitter,   icon: <TwitterIcon />,   color: '#e2e8f0' },
  { label: 'Instagram', href: personal.social.instagram, icon: <InstagramIcon />, color: '#f43f5e' },
  { label: 'WhatsApp',  href: personal.social.whatsapp,  icon: <WhatsappIcon />,  color: '#22c55e' },
  { label: 'Email',     href: `mailto:${personal.email}`,icon: <EmailIcon />,     color: '#f97316' },
]

const projectTypes = [
  'Smart Contract Development',
  'dApp Development',
  'Web3 Frontend',
  'DeFi / NFT Project',
  'Blockchain Integration',
  'Other',
]

export default function Contact() {
  const ref = useScrollFade()
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire up to EmailJS, Resend, Formspree, etc.
    // For now we just show the success state
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', type: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="py-28"
      style={{ background: 'rgba(255,255,255,0.01)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className="fade-up">
          <span className="section-badge">Contact</span>
          <h2
            className="font-bold mb-3"
            style={{ fontSize: 'clamp(26px,3vw,42px)' }}
          >
            Let's <span className="neon-text">build something</span> amazing
          </h2>
          <p className="mb-14 text-base" style={{ color: '#475569' }}>
            Got a project? I'm open to freelance, contracts, and full-time roles.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap gap-4 mb-14 justify-center">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-250"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: s.color,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00f5ff'
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,255,0.25)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="glass-card p-10">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold text-lg mb-2 neon-text">Message sent!</h3>
                <p style={{ color: '#64748b' }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-semibold text-xl mb-8" style={{ color: '#e2e8f0' }}>
                  Send a message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-xs mb-2"
                      style={{ color: '#475569' }}
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="form-input"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-2"
                      style={{ color: '#475569' }}
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      className="form-input"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-xs mb-2"
                    style={{ color: '#475569' }}
                    htmlFor="type"
                  >
                    Project type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="form-input"
                    value={form.type}
                    onChange={handleChange}
                    style={{ background: '#0a0a1e' }}
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} style={{ background: '#0a0a1e' }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label
                    className="block text-xs mb-2"
                    style={{ color: '#475569' }}
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input resize-none"
                    rows={5}
                    placeholder="Tell me about your project…"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  style={{ padding: '16px', fontSize: 16 }}
                >
                  Let's Build Something Amazing 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
