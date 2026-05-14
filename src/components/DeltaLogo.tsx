import { motion } from "motion/react";
import { COLORS } from "../constants";
import { useState } from "react";

export const DeltaLogo = ({ className = "w-16 h-16", showText = false }: { className?: string, showText?: boolean }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="relative w-full h-full flex items-center justify-center">
        {!imageError ? (
          <img
            src="/logo_pvac.png"
            alt="PVAC Logo"
            className="w-full h-full object-contain"
            onError={(e) => {
              console.log("Local logo not found, falling back to SVG");
              setImageError(true);
            }}
          />
        ) : (
          /* Enhanced Fallback Stylized SVG - PVAC Themed */
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="crimsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#800000" />
                <stop offset="100%" stopColor="#DC143C" />
              </linearGradient>
            </defs>
            {/* Main Delta Triangle */}
            <path d="M50 10L90 85H10L50 10Z" fill="white" stroke={COLORS.crimson} strokeWidth="3" />
            <path d="M50 20L80 78H20L50 20Z" stroke={COLORS.crimson} strokeWidth="1" opacity="0.4" />
            
            {/* Stylized Violet Flowers (Chapter flower) */}
            <g transform="translate(50, 58)">
              {/* Center Violet */}
              <g transform="scale(0.8)">
                {[0, 72, 144, 216, 288].map(deg => (
                  <path 
                    key={deg} 
                    d="M0 -8 C 5 -8, 8 -4, 0 0 C -8 -4, -5 -8, 0 -8" 
                    fill={COLORS.purple} 
                    transform={`rotate(${deg}) translate(0, 4)`} 
                  />
                ))}
                <circle r="1.5" fill="#FBBF24" />
              </g>
              {/* Side Violet 1 */}
              <g transform="translate(-15, -5) scale(0.6)">
                {[0, 72, 144, 216, 288].map(deg => (
                  <path 
                    key={deg} 
                    d="M0 -8 C 5 -8, 8 -4, 0 0 C -8 -4, -5 -8, 0 -8" 
                    fill={COLORS.purple} 
                    transform={`rotate(${deg + 15}) translate(0, 4)`} 
                  />
                ))}
                <circle r="1.2" fill="#FBBF24" />
              </g>
              {/* Side Violet 2 */}
              <g transform="translate(15, -5) scale(0.6)">
                {[0, 72, 144, 216, 288].map(deg => (
                  <path 
                    key={deg} 
                    d="M0 -8 C 5 -8, 8 -4, 0 0 C -8 -4, -5 -8, 0 -8" 
                    fill={COLORS.purple} 
                    transform={`rotate(${deg - 15}) translate(0, 4)`} 
                  />
                ))}
                <circle r="1.2" fill="#FBBF24" />
              </g>
            </g>

            {/* PVAC Lettering (Stylized) */}
            <text x="50" y="80" textAnchor="middle" fill={COLORS.crimson} fontSize="6" fontWeight="900" style={{ fontFamily: 'Outfit, sans-serif' }}>PRAIRIE VIEW</text>
          </svg>
        )}
      </div>
      {showText && (
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-center" style={{ color: COLORS.crimson }}>
            Delta Sigma Theta Sorority, Inc.
          </span>
          <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-slate-500 text-center">
            Prairie View Alumnae Chapter
          </span>
        </div>
      )}
    </div>
  );
};
