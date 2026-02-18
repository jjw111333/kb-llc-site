'use client'

export default function Particles() {
  const items = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 20}s`,
    dur: `${15 + Math.random() * 20}s`,
    size: `${3 + Math.random() * 5}px`,
    opacity: 0.1 + Math.random() * 0.15,
  }))

  return (
    <div className="particles">
      {items.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            '--p-left': p.left,
            '--p-delay': p.delay,
            '--p-dur': p.dur,
            '--p-size': p.size,
            '--p-opacity': p.opacity,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.dur,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  )
}
