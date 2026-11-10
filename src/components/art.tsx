// Inline SVG: the speeding taco van, speed lines, a star. No images.

export function Van({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 240" role="img" aria-label="El Taco Veloz taco van">
      <g className="v-lines" stroke="currentColor" strokeLinecap="round" strokeWidth="7" fill="none">
        <path d="M10 92 H92" opacity=".9" />
        <path d="M34 118 H108" opacity=".7" />
        <path d="M2 144 H84" opacity=".9" />
        <path d="M44 170 H112" opacity=".6" />
      </g>
      <g className="v-van">
        {/* taco on the roof */}
        <g transform="translate(236 20) rotate(-6)">
          <path d="M0 44 a62 62 0 0 1 124 0 Z" fill="#f4a21f" stroke="#1a0d10" strokeWidth="5" strokeLinejoin="round" />
          <path d="M10 44 a52 52 0 0 1 104 0" fill="none" stroke="#c9741a" strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round" />
          <path d="M8 44 q8 -22 22 -18 q6 -16 20 -10 q10 -14 22 -4 q12 -10 22 2 q14 -4 16 14 q10 4 6 16 Z" fill="#6fae3a" stroke="#1a0d10" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="40" cy="34" r="5" fill="#d9381e" />
          <circle cx="78" cy="30" r="5" fill="#d9381e" />
          <circle cx="98" cy="38" r="4" fill="#fff4e2" />
        </g>
        {/* body */}
        <path d="M120 100 q0 -30 30 -30 h210 q26 0 42 22 l34 46 q10 12 10 28 v22 q0 10 -10 10 H130 q-10 0 -10 -10 Z" fill="#4a1220" stroke="#1a0d10" strokeWidth="6" strokeLinejoin="round" />
        {/* windshield */}
        <path d="M400 92 q-10 -14 -26 -16 H340 v50 h108 Z" fill="#cfe9ef" stroke="#1a0d10" strokeWidth="5" strokeLinejoin="round" />
        <path d="M348 84 l-18 40" stroke="#fff" strokeWidth="4" opacity=".6" strokeLinecap="round" />
        {/* stripe */}
        <path d="M120 150 H462" stroke="#f47a1f" strokeWidth="9" />
        <path d="M120 166 H462" stroke="#fff4e2" strokeWidth="4" />
        {/* lettering */}
        <g transform="skewX(-10)" fontFamily="var(--f-display)" fontWeight="900">
          <text x="170" y="110" fontSize="20" fill="#fff4e2" letterSpacing="3">EL</text>
          <text x="206" y="134" fontSize="58" fill="#f47a1f" stroke="#fff4e2" strokeWidth="2" letterSpacing="1" paintOrder="stroke">TACO</text>
          <text x="190" y="146" fontSize="0" fill="none" />
        </g>
        <text x="248" y="188" fontFamily="var(--f-display)" fontWeight="900" fontSize="20" fill="#fff4e2" letterSpacing="7" transform="skewX(-10)" style={{ transformOrigin: "248px 188px" }}>VELOZ</text>
        {/* headlight + bumper */}
        <circle cx="452" cy="158" r="8" fill="#ffd25e" stroke="#1a0d10" strokeWidth="4" />
        <rect x="116" y="196" width="352" height="8" rx="4" fill="#1a0d10" />
        {/* wheels */}
        {[190, 396].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="206" r="30" fill="#1a0d10" />
            <g className="v-wheel" style={{ transformOrigin: `${cx}px 206px` }}>
              <circle cx={cx} cy="206" r="15" fill="#d8cdbb" />
              <path d={`M${cx} 192 V220 M${cx - 14} 206 H${cx + 14}`} stroke="#8a7d6a" strokeWidth="4" />
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 8.8l7.1-.7z" fill="currentColor" />
    </svg>
  );
}
