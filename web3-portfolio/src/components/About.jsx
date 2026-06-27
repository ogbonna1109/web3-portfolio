import { useScrollFade } from '../hooks/useScrollFade'

const highlights = [
  {
    icon: '🔗',
    title: 'Smart Contract Specialist',
    desc: 'Writing and auditing Solidity contracts for DeFi, NFTs, and DAOs with security-first thinking.',
  },
  {
    icon: '⚡',
    title: 'Full Stack Web3 Builder',
    desc: 'Connecting blockchain logic to beautiful, performant React frontends using ethers.js and wagmi.',
  },
  {
    icon: '🛡️',
    title: 'Security Minded',
    desc: 'Every line is written with attack vectors in mind. Reentrancy, overflow, and front-running — handled.',
  },
]

export default function About() {
  const ref = useScrollFade()

  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6">
      <div ref={ref} className="fade-up">
        <span className="section-badge">About Me</span>
        <h2
          className="font-bold mb-14"
          style={{ fontSize: 'clamp(26px,3vw,42px)' }}
        >
          The <span className="neon-text">story</span> behind the code
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text column */}
          <div className="space-y-5">
            <p style={{ color: '#94a3b8', lineHeight: 1.85, fontSize: 16 }}>
              I started my career as a traditional software engineer — writing APIs,
              shipping frontends, solving real-world problems with code. Then I discovered
              blockchain, and everything changed.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.85, fontSize: 16 }}>
                I moved into Web3 because I believe decentralisation is the most significant
                shift in software since the internet itself. The idea that code can replace
                trust, that ownership can live on-chain, that anyone anywhere can participate
                in open financial systems — that pulled me in completely.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.85, fontSize: 16 }}>
                Today I bring both worlds together — the engineering discipline of a
                seasoned developer and the on-chain intuition of a{' '}
                <strong style={{ color: '#a855f7' }}>dedicated Web3 builder</strong>.
                Clean contracts. Secure code. Frontends people actually enjoy using.
            </p>

            {/* Divider */}
            <div
              className="pt-4 mt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="font-mono text-xs mb-3" style={{ color: '#334155' }}>
                // quick facts
              </p>
              <ul className="space-y-2">
                {[
                  '🔁 Software engineer turned Web3 builder',
                  '🌍 Based in Nigeria — working globally',
                  '📚 Currently exploring ERC-4337 & account abstraction',
                  '🎯 Open to freelance & full-time roles',
                ].map((fact) => (
                  <li
                    key={fact}
                    className="text-sm"
                    style={{ color: '#475569' }}
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights column */}
          <div className="flex flex-col gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="glass-card p-6 transition-all duration-300 hover:border-cyan-400/30"
              >
                <div className="text-2xl mb-3">{h.icon}</div>
                <h3 className="font-semibold mb-2" style={{ fontSize: 16 }}>
                  {h.title}
                </h3>
                <p className="text-sm" style={{ color: '#475569', lineHeight: 1.7 }}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
