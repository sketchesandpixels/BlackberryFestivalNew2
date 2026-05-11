import { COLORS } from "../constants";
import { Facebook, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenContact?: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer = ({ onOpenContact, onOpenPrivacy }: FooterProps) => {
  const shareUrl = "https://blackberryfestivalprairieview.com";
  
  return (
    <footer className="py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex flex-col items-center mb-12">
            <div className="flex flex-col items-center relative mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] absolute -top-3 -right-2" style={{ color: COLORS.crimson }}>Inaugural</span>
              <span className="text-6xl md:text-8xl font-script leading-none" style={{ color: COLORS.purple }}>Blackberry</span>
              <span className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter -mt-2" style={{ color: COLORS.crimson }}>Festival</span>
              <span className="text-xl font-display font-black tracking-[0.5em] mt-2 opacity-20">2026</span>
            </div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 block mt-4">Hosted by Delta Sigma Theta Sorority, Inc. of Prairie View Alumnae Chapter</span>
          </div>
          
          <div className="flex items-center justify-center gap-12 mb-16">
             <a href="https://www.facebook.com/profile.php?id=61589187458775" className="text-sm font-black uppercase tracking-widest hover:text-purple-600 transition-colors">Facebook</a>
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
          </div>
        </div>
      </div>
    </footer>
  );
};
