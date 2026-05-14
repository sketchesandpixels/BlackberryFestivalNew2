import { motion, useScroll, useTransform } from "motion/react";
import { COLORS } from "../constants";
import { Button } from "@/components/ui/button";
import { DeltaLogo } from "./DeltaLogo.png";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const shadow = useTransform(
    scrollY,
    [0, 100],
    ["0 4px 20px rgba(0, 0, 0, 0.0)", "0 10px 40px rgba(45, 10, 78, 0.1)"]
  );

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
      <motion.nav
        style={{ boxShadow: shadow }}
        className="backdrop-blur-xl bg-white/95 border border-white rounded-[2rem] px-5 py-3 flex items-center justify-between w-full max-w-5xl pointer-events-auto transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        <div className="flex items-center gap-3 cursor-pointer group px-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <DeltaLogo className="w-8 h-8 sm:w-10 sm:h-10 -mt-1" />
          <div className="flex flex-col leading-none relative">
            <span className="text-[8px] font-black uppercase tracking-[0.3em] absolute -top-1.5 -right-1" style={{ color: COLORS.crimson }}>Inaugural</span>
            <span className="text-xl font-script" style={{ color: COLORS.purple }}>Blackberry</span>
            <span className="text-lg font-display font-black uppercase tracking-tighter -mt-1" style={{ color: COLORS.crimson }}>Festival</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-6">
          <button
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer"
            style={{ color: COLORS.purple }}
          >
            Vendors
          </button>
          <button
            onClick={() => document.getElementById('hotel')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer hidden sm:block"
            style={{ color: COLORS.purple }}
          >
            Hotel
          </button>
          <button
            onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer hidden sm:block"
            style={{ color: COLORS.purple }}
          >
            Schedule
          </button>
          <Button
            onClick={() => document.getElementById('contest')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full font-black px-6 py-5 text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
            style={{ backgroundColor: COLORS.crimson, color: "white" }}
          >
            Enter Pie Contest
          </Button>
        </div>
      </motion.nav>
    </div>
  );
};
