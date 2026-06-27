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
              I'm a passionate Web3 developer with{' '}
              <strong style={{ color: '#00f5ff' }}>1+ year of hands-on experience</strong>{' '}
              building decentralised applications that bridge the gap between traditional web
              and blockchain technology.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.85, fontSize: 16 }}>
              My journey started with a deep curiosity about how smart contracts could
              reshape finance, ownership, and trust on the internet. Since then I've been
              obsessed with building secure, user-friendly dApps that real people actually use.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.85, fontSize: 16 }}>
              I specialise in{' '}
              <strong style={{ color: '#a855f7' }}>Solidity smart contracts</strong>,
              React-based Web3 frontends, and DeFi integrations. I write clean, well-tested
              code with a relentless focus on security and UX.
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
                  '🌍 Based in Nigeria — working globally',
                  '📚 Currently exploring ERC-4337 & AA wallets',
                  '🎯 Open to freelance & full-time roles',
                  '☕ Powered by coffee and on-chain dreams',
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
