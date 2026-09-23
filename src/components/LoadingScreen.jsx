import { useEffect, useState } from 'react'

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [step, setStep] = useState(0)

  const steps = [
    'Connecting to blockchain...',
    'Loading smart contracts...',
    'Syncing Web3 modules...',
    'Initialising portfolio...',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(onDone, 300)
          return 100
        }
        if (p >= 75) setStep(3)
        else if (p >= 50) setStep(2)
        else if (p >= 25) setStep(1)
        return p + 2
      })
    }, 30)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[9000] flex flex-col items-center justify-center"
      style={{ background: '#020208' }}
    >
      {/* Hex logo */}
      <div className="relative mb-10">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <defs>
            <linearGradient id="hex-g" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <polygon
            points="40,4 74,22 74,58 40,76 6,58 6,22"
            fill="none"
            stroke="url(#hex-g)"
            strokeWidth="2"
            opacity="0.6"
          />
          <polygon
            points="40,14 65,28 65,52 40,66 15,52 15,28"
            fill="url(#hex-g)"
            opacity="0.1"
          />
          <text
            x="40"
            y="46"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="16"
            fontWeight="600"
            fill="url(#hex-g)"
          >
            W3
          </text>
        </svg>
        {/* Orbit ring */}
        <div
          className="absolute inset-[-8px] rounded-full border border-cyan-400/20 animate-spin"
          style={{ animationDuration: '3s' }}
        />
      </div>

      <p
        className="font-mono text-sm mb-6"
        style={{ color: '#00f5ff', minHeight: '20px' }}
      >
        {steps[step]}
      </p>

      {/* Progress track */}
      <div
        className="relative w-64 h-[2px] rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-75"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #00f5ff, #a855f7)',
            boxShadow: '0 0 12px rgba(0,245,255,0.6)',
          }}
        />
      </div>

      <p className="font-mono text-xs mt-4" style={{ color: '#334155' }}>
        {progress}%
      </p>
    </div>
  )
}
