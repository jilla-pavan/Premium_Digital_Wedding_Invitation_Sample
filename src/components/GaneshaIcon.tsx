export default function GaneshaIcon({ size = 90 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-glowPulse drop-shadow-[0_0_12px_rgba(201,153,42,0.6)]">
      {/* Body */}
      <ellipse cx="60" cy="80" rx="30" ry="32" fill="#C9992A" />
      {/* Head */}
      <ellipse cx="60" cy="47" rx="20" ry="20" fill="#C9992A" />
      {/* Left ear */}
      <ellipse cx="36" cy="38" rx="10" ry="16" fill="#C9992A" transform="rotate(-15 36 38)" />
      <ellipse cx="36" cy="38" rx="6"  ry="10" fill="#b07d18" transform="rotate(-15 36 38)" />
      {/* Right ear */}
      <ellipse cx="84" cy="38" rx="10" ry="16" fill="#C9992A" transform="rotate(15 84 38)" />
      <ellipse cx="84" cy="38" rx="6"  ry="10" fill="#b07d18" transform="rotate(15 84 38)" />
      {/* Trunk */}
      <path d="M55 62 Q45 75 42 90 Q48 96 50 90 Q54 78 60 72" stroke="#7B1C1C" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* Trunk curl */}
      <path d="M42 90 Q36 96 42 100 Q50 104 50 96" stroke="#7B1C1C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="50" cy="44" r="3.5" fill="white" />
      <circle cx="70" cy="44" r="3.5" fill="white" />
      <circle cx="51" cy="45" r="1.8" fill="#1a0800" />
      <circle cx="71" cy="45" r="1.8" fill="#1a0800" />
      {/* Tilak */}
      <ellipse cx="60" cy="37" rx="4" ry="5" fill="#7B1C1C" opacity="0.8" />
      <line x1="60" y1="30" x2="60" y2="34" stroke="#f0d080" strokeWidth="1.5" />
      {/* Necklace */}
      <path d="M42 68 Q60 76 78 68" stroke="#f0d080" strokeWidth="1.5" fill="none" />
      {/* Belly dot */}
      <circle cx="60" cy="83" r="5" fill="#7B1C1C" opacity="0.5" />
      {/* Crown */}
      <path d="M47 29 L50 20 L56 27 L60 16 L64 27 L70 20 L73 29" stroke="#f0d080" strokeWidth="2" fill="none" strokeLinejoin="round" />
      {/* Modak (sweet) in trunk hand */}
      <circle cx="42" cy="100" r="5" fill="#f0d080" />
      <path d="M39 98 Q42 95 45 98" stroke="#C9992A" strokeWidth="1" fill="none" />
    </svg>
  )
}
