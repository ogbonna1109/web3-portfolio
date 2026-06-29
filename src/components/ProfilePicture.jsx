import { personal } from '../data/portfolio'

export default function ProfilePicture() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Spinning gradient ring */}
      <div
        className="p-[3px] rounded-full animate-spin-slow"
        style={{
          background: 'linear-gradient(135deg, #00f5ff, #a855f7, #39ff14, #00f5ff)',
          backgroundSize: '200% 200%',
        }}
      >
        <div
          className="w-44 h-44 rounded-full overflow-hidden flex items-center justify-center"
          style={{ background: '#08081c', border: '2px solid rgba(0,245,255,0.08)' }}
        >
          {personal.profileImage ? (
            /* ── YOUR PHOTO GOES HERE ─────────────────────────────
               Set `profileImage` in src/data/portfolio.js to:
               - A URL:  'https://yoursite.com/photo.jpg'
               - A local path (put file in /public/):  '/profile.jpg'
            ────────────────────────────────────────────────────── */
            <img
              src={personal.profileImage}
              alt={personal.name}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Placeholder shown when profileImage is null */
            <div className="flex flex-col items-center gap-2 p-4 text-center">
              <span style={{ fontSize: 40 }}>👤</span>
              <span className="font-mono text-[10px] leading-snug" style={{ color: '#334155' }}>
                Add your photo<br />
                <span style={{ color: '#00f5ff' }}>data/portfolio.js</span>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Name + handle */}
      <div className="text-center">
        <p className="font-semibold text-sm" style={{ color: '#e2e8f0' }}>
          {personal.name}
        </p>
        <p className="font-mono text-xs mt-0.5" style={{ color: '#00f5ff' }}>
          {personal.handle}
        </p>
      </div>

      {/* Availability badge */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono"
        style={{
          background: personal.available
            ? 'rgba(57,255,20,0.07)'
            : 'rgba(255,100,100,0.07)',
          border: `1px solid ${personal.available ? 'rgba(57,255,20,0.2)' : 'rgba(255,100,100,0.2)'}`,
          color: personal.available ? '#39ff14' : '#ff6464',
        }}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{
            background: personal.available ? '#39ff14' : '#ff6464',
            boxShadow: `0 0 8px ${personal.available ? '#39ff14' : '#ff6464'}`,
          }}
        />
        {personal.available ? 'Available for hire' : 'Currently booked'}
      </div>

      {/* Location */}
      <p className="font-mono text-xs" style={{ color: '#334155' }}>
        Based in {personal.location}
      </p>
    </div>
  )
}
