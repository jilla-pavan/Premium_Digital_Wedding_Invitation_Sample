type Position = 'tl' | 'tr' | 'bl' | 'br'

const transforms: Record<Position, string> = {
  tl: '',
  tr: 'scaleX(-1)',
  bl: 'scaleY(-1)',
  br: 'scale(-1)',
}

export default function CornerDecor({ pos, size = 72 }: { pos: Position; size?: number }) {
  return (
    <div
      className="absolute pointer-events-none hidden sm:block"
      style={{
        width: size,
        height: size,
        top:    pos.startsWith('b') ? undefined : 16,
        bottom: pos.startsWith('b') ? 16 : undefined,
        left:   pos.endsWith('l') ? 16 : undefined,
        right:  pos.endsWith('r') ? 16 : undefined,
        transform: transforms[pos],
      }}
    >
      <svg viewBox="0 0 72 72" width={size} height={size}>
        <path d="M2 70L2 14Q2 2 14 2L70 2" stroke="#C9992A" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="14" r="4" fill="#C9992A" />
        {/* inner filigree lines */}
        <path d="M2 38Q20 26 32 2"  stroke="#C9992A" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M2 54Q30 38 44 2"  stroke="#C9992A" strokeWidth="0.5" fill="none" opacity="0.3" />
        {/* small diamond at corner */}
        <rect x="11" y="11" width="6" height="6" fill="none" stroke="#f0d080" strokeWidth="0.8" transform="rotate(45 14 14)" />
      </svg>
    </div>
  )
}
