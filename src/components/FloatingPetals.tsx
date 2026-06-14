const SYMBOLS = ['🌸', '🌺', '🪷', '✿', '❀', '🌼', '🌷', '🌸', '🌺', '🪷', '✿', '🌼']

export default function FloatingPetals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {SYMBOLS.map((sym, i) => (
        <span key={i} className={`petal petal-${i}`} style={{ opacity: 0.35 }}>
          {sym}
        </span>
      ))}
    </div>
  )
}
