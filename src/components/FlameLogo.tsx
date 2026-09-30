import React from 'react';

interface FlameLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
}

export const FlameLogo: React.FC<FlameLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-emerald-950'
}) => {
  const sizeMap = {
    sm: { icon: 28, text: 'text-base', sub: 'text-[10px]' },
    md: { icon: 36, text: 'text-lg', sub: 'text-xs' },
    lg: { icon: 48, text: 'text-2xl', sub: 'text-sm' },
    xl: { icon: 64, text: 'text-3xl', sub: 'text-base' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Flame Icon with Emerald and Gold Islamic Nuances */}
      <div 
        className="relative flex items-center justify-center shrink-0 drop-shadow-sm transition-transform hover:scale-105 duration-200"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Outer Flame Gradient: Deep Emerald to Vivid Mint */}
            <linearGradient id="emeraldFlame" x1="20" y1="95" x2="80" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="50%" stopColor="#047857" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            {/* Inner Flame Core: Radiant Gold to Amber (Knowledge & Innovation) */}
            <linearGradient id="goldenCore" x1="50" y1="90" x2="50" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="45%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Stylized Flame (representing Growth, Faith & Entrepreneurship) */}
          <path
            d="M50 5C44 22 34 32 25 46C15 62 18 78 28 88C35 95 44 98 50 98C56 98 65 95 72 88C82 78 85 62 75 46C66 32 56 22 50 5Z"
            fill="url(#emeraldFlame)"
          />

          {/* Dynamic flame crest curve */}
          <path
            d="M50 12C52 28 65 38 68 54C71 67 64 78 57 84C66 76 70 64 66 50C62 36 53 26 50 12Z"
            fill="#34d399"
            opacity="0.45"
          />

          {/* Inner Radiant Core Flame (The Torch of Islamic Innovation) */}
          <path
            d="M50 36C45 48 38 56 36 67C34 77 40 85 47 88C43 83 41 76 43 69C45 61 51 52 50 36Z"
            fill="url(#goldenCore)"
            filter="url(#softGlow)"
          />

          {/* Center Golden Spark / Star Motif */}
          <path
            d="M50 48L52.5 56.5L61 59L52.5 61.5L50 70L47.5 61.5L39 59L47.5 56.5L50 48Z"
            fill="#ffffff"
            opacity="0.95"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-right">
          <div className={`font-black tracking-tight leading-none ${currentSize.text} ${textColor}`}>
            <span>ريادي</span>
            <span className="text-emerald-600 mr-1.5 font-normal">Reyadi</span>
          </div>
          <div className={`text-slate-500 font-medium tracking-normal mt-0.5 ${currentSize.sub}`}>
            التمويل الجماعي الإسلامي
          </div>
        </div>
      )}
    </div>
  );
};
