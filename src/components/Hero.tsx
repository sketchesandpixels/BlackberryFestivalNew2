import { motion } from "motion/react";
import { FESTIVAL_INFO, COLORS } from "../constants";

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-white">
      {/* Decorative blurred backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-[60vw] h-[60vw] rounded-full bg-purple-50 mix-blend-multiply filter blur-[120px] opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-[50vw] h-[50vw] rounded-full bg-rose-50 mix-blend-multiply filter blur-[120px] opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-slate-900 text-white text-xs font-black uppercase tracking-[0.3em] mb-4">
              May 16 2026 • Inaugural Event
            </span>
          </motion.div>

          <div className="relative mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="absolute -top-12 -left-32 sm:-top-16 sm:-left-55"
            >
              <img 
                src="/blackberries.webp" 
                alt="Fresh Blackberries" 
                className="w-40 sm:w-72 h-auto rounded-[3rem] rotate-12 drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 10 }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.3, delay: 0.1 }}
              className="absolute -bottom-16 -right-24 sm:-bottom-10 sm:-right-44"
            >
              <img 
                src="/blackberrieslogo.webp" 
                alt="Golden Hour" 
                className="w-32 sm:w-56 h-auto rounded-3xl -rotate-12 drop-shadow-xl"
              />
            </motion.div>

              <h1 className="relative z-10 flex flex-col items-center xl:items-start">
                <div className="relative inline-block">
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute -top-6 -right-6 text-sm font-black uppercase tracking-[0.4em]"
                    style={{ color: COLORS.crimson }}
                  >
                    Inaugural
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-[14vw] sm:text-[180px] font-script leading-none"
                    style={{ color: COLORS.purple }}
                  >
                    Blackberry
                  </motion.span>
                </div>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-[12vw] sm:text-[160px] font-display font-black leading-[0.7] uppercase tracking-tighter mt-2"
                  style={{ color: COLORS.crimson }}
                >
                  Festival
                </motion.span>
              </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mb-12 leading-relaxed"
          >
            Where culture meets the harvest. Join the <span className="font-bold text-slate-900 underline decoration-yellow-400 decoration-4 underline-offset-4">Prairie View Alumnae Chapter of Delta Sigma Theta Sorority, Inc. </span> for a day of music, heritage, and the sweetest berries of the season.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-6 rounded-full text-xl font-black bg-slate-900 text-white shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all uppercase tracking-widest"
            >
              Become a Vendor
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contest')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-6 rounded-full text-xl font-black border-4 border-slate-900 text-slate-900 transition-all uppercase tracking-widest"
            >
              Pie Contest
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom rail text */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="text-6xl font-display font-black uppercase tracking-[0.5em]"
        >
          PVAC DELTA SIGMA THETA • BLACKBERRY FESTIVAL 2026 • PVAC DELTA SIGMA THETA • BLACKBERRY FESTIVAL 2026 • PVAC DELTA SIGMA THETA • BLACKBERRY FESTIVAL 2026
        </motion.div>
      </div>
    </section>
  );
};

