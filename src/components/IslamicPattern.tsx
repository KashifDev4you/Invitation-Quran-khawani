import React from 'react';

/**
 * 8-Pointed Islamic Star (Rub el Hizb) SVG Icon
 */
export const IslamicStar: React.FC<{ className?: string; size?: number }> = ({
  className = 'text-[#D6B66C]',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`inline-block shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path d="M12 2L14.7 6.4L19.7 4.3L19.6 9.7L24 12L19.6 14.3L19.7 19.7L14.7 17.6L12 22L9.3 17.6L4.3 19.7L4.4 14.3L0 12L4.4 9.7L4.3 4.3L9.3 6.4L12 2Z" />
    <circle cx="12" cy="12" r="3" fill="#0B382D" />
  </svg>
);

/**
 * Islamic Hanging Lantern (Fanoos) with gentle swaying/glowing effect
 */
export const HangingLantern: React.FC<{
  className?: string;
  delay?: number;
  glow?: boolean;
}> = ({ className = '', glow = true }) => (
  <div className={`relative pointer-events-none select-none ${className}`}>
    <svg
      width="44"
      height="110"
      viewBox="0 0 44 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      {/* Chain */}
      <line x1="22" y1="0" x2="22" y2="35" stroke="#D6B66C" strokeWidth="1.5" strokeDasharray="2 3" />
      {/* Top Cap */}
      <path d="M15 35H29L26 40H18L15 35Z" fill="#D6B66C" />
      <path d="M17 40C17 38 27 38 27 40L31 46H13L17 40Z" fill="#B38F46" />
      {/* Glass Body */}
      <path
        d="M13 46L8 66L14 84H30L36 66L31 46H13Z"
        fill="rgba(214, 182, 108, 0.25)"
        stroke="#D6B66C"
        strokeWidth="1.5"
      />
      {/* Inner Flame Glow */}
      <circle cx="22" cy="65" r="7" fill={glow ? '#FFEBB7' : '#D6B66C'} opacity="0.85" />
      <circle cx="22" cy="65" r="3.5" fill="#FFFFFF" />
      {/* Bottom Cap and Tassel */}
      <path d="M14 84L18 89H26L30 84H14Z" fill="#B38F46" />
      <circle cx="22" cy="92" r="2.5" fill="#D6B66C" />
      <line x1="22" y1="94" x2="22" y2="108" stroke="#D6B66C" strokeWidth="1.5" />
      <circle cx="22" cy="108" r="1.5" fill="#D6B66C" />
    </svg>
    {glow && (
      <div className="absolute top-[52px] left-[10px] w-6 h-6 bg-[#D6B66C]/40 rounded-full blur-md animate-pulse" />
    )}
  </div>
);

/**
 * Islamic Architectural Mihrab Arch SVG Outline
 */
export const MihrabArch: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full max-w-[360px] mx-auto ${className}`}
  >
    <path
      d="M20 120 V55 Q20 30 50 25 Q120 15 190 2 Q197 0 200 0 Q203 0 210 2 Q280 15 350 25 Q380 30 380 55 V120"
      stroke="#D6B66C"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M32 120 V58 Q32 38 60 34 Q125 24 192 10 Q198 8 200 8 Q202 8 208 10 Q275 24 340 34 Q368 38 368 58 V120"
      stroke="#D6B66C"
      strokeWidth="0.8"
      strokeDasharray="3 3"
      fill="none"
    />
  </svg>
);

/**
 * Ornamental Corner Ornament
 */
export const IslamicCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = 'text-[#D6B66C]' }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${rotationClass} ${className} pointer-events-none select-none`}
    >
      <path
        d="M2 42V14C2 7.37258 7.37258 2 14 2H42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 42V17C7 11.4772 11.4772 7 17 7H42"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 3"
      />
      <circle cx="14" cy="14" r="3" fill="currentColor" />
      <circle cx="25" cy="7" r="1.5" fill="currentColor" />
      <circle cx="7" cy="25" r="1.5" fill="currentColor" />
    </svg>
  );
};

/**
 * Delicate Golden Background Dust Particles
 */
export const FloatingGoldDust: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(14)].map((_, i) => {
        const top = (i * 7 + 5) % 95;
        const left = (i * 13 + 8) % 92;
        const size = (i % 3) + 2;
        const duration = 6 + (i % 5) * 2;
        const delay = (i % 4) * 1.2;

        return (
          <span
            key={i}
            className="absolute rounded-full bg-[#D6B66C]/40 animate-pulse"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              boxShadow: '0 0 6px rgba(214, 182, 108, 0.6)',
            }}
          />
        );
      })}
    </div>
  );
};
