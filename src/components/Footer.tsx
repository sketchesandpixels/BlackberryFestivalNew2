import { COLORS } from "../constants";
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { DeltaLogo } from "./DeltaLogo";

interface FooterProps {
  onOpenContact?: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer = ({ onOpenContact, onOpenPrivacy }: FooterProps) => {
  const shareUrl = "https://blackberryfestivalprairieview.com";
  const shareText = "Join me at the Inaugural Blackberry Festival 2026! Music, food, culture, and black excellence.";
  
  return (
    <footer className="py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex flex-col items-center mb-12">
            <DeltaLogo className="w-24 h-24 mb-10" showText />
            <div className="flex flex-col items-center relative mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] absolute -top-3 -right-2" style={{ color: COLORS.crimson }}>Inaugural</span>
              <span className="text-6xl md:text-8xl font-script leading-none" style={{ color: COLORS.purple }}>Blackberry</span>
              <span className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter -mt-2" style={{ color: COLORS.crimson }}>Festival</span>
              <span className="text-xl font-display font-black tracking-[0.5em] mt-2 opacity-20">2026</span>
            </div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 block mt-4">Hosted by Prairie View Alumnae Chapter of Delta Sigma Theta Sorority, Inc.</span>
          </div>
          
          <div className="flex items-center justify-center gap-12 mb-16">
             <a 
               href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-sm font-black uppercase tracking-widest hover:text-purple-600 transition-colors"
             >
               Facebook
             </a>
             <a 
               href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-sm font-black uppercase tracking-widest hover:text-purple-600 transition-colors"
             >
               Twitter
             </a>
             <a 
               href="https://instagram.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-sm font-black uppercase tracking-widest hover:text-purple-600 transition-colors"
             >
               Instagram
             </a>
             <a 
               href="https://tiktok.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-sm font-black uppercase tracking-widest hover:text-purple-600 transition-colors"
             >
               TikTok
             </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-slate-100 max-w-6xl mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
             © 2026 Delta Sigma Theta Sorority, Inc. of PVAC • Blackberry Festival, Prairie View
          </p>
          <div className="flex gap-10">
             <button 
               onClick={(e) => { e.preventDefault(); onOpenPrivacy?.(); }}
               className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors cursor-pointer outline-none"
             >
               Privacy Policy
             </button>
             <button 
               onClick={(e) => { e.preventDefault(); onOpenContact?.(); }}
               className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors cursor-pointer outline-none"
             >
               Contact Us
             </button>
             <a 
               href="/welcome_email.html"
               target="_blank"
               className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors cursor-pointer outline-none"
             >
               Welcome Email
             </a>
             <a 
               href="https://www.zeffy.com/en-US/ticketing/blackberry-festival-vendor-sign-up"
               target="_blank"
               rel="noopener noreferrer"
               className="text-xs font-black uppercase tracking-[0.2em] text-rose-600 hover:text-rose-500 transition-colors"
               style={{ fontWeight: 900 }}
             >
               Donate
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
