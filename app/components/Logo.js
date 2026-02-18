export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="nav-logo-icon">
      <circle cx="52" cy="42" r="30" fill="url(#logoGrad)" opacity="0.9" />
      <ellipse cx="45" cy="38" rx="16" ry="22" fill="rgba(255,255,255,0.12)" />
      <line x1="32" y1="52" x2="72" y2="34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <text x="50" y="88" textAnchor="middle" fill="url(#logoGrad)" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="22">K&amp;B</text>
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5a623" />
          <stop offset="100%" stopColor="#e8742a" />
        </linearGradient>
      </defs>
    </svg>
  )
}
