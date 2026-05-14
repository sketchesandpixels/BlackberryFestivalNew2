import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '../constants';

const PROMO_IMAGES = [
  "https://images.unsplash.com/photo-1545696563964-b86e8ea3c483?w=1600&auto=format&fit=crop", // Carnival wheel
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&auto=format&fit=crop", // Concert
  "https://images.unsplash.com/photo-1596485802113-14c13a0da238?w=1600&auto=format&fit=crop", // Blackberries
  "https://images.unsplash.com/photo-1508997449629-af0837f59798?w=1600&auto=format&fit=crop"  // Community Food
];

export const PromoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simulated video playback using a cinematic image reel
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % PROMO_IMAGES.length);
      }, 3500); // Crossfade every 3.5 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden text-white" id="promo">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Subtle background static noise or pattern could go here */}
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-black mb-4 tracking-tight text-white">
              Experience the Magic
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
              Watch our promotional reel showcasing the electric atmosphere, community love, and unforgettable memories of the Blackberry Festival.
            </p>
          </motion.div>
        </div>

        {/* Video Player Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] bg-black border border-slate-800 group"
        >
          <AnimatePresence mode="popLayout">
            {isPlaying ? (
              <motion.img
                key={`playing-${currentIndex}`}
                src={PROMO_IMAGES[currentIndex]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <motion.img
                key="poster"
                src="https://images.unsplash.com/photo-1464366400600-71ebb90ffbd4?w=1600&auto=format&fit=crop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] blur-[2px]"
              />
            )}
          </AnimatePresence>

          {/* Player Controls & Overlay */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${isPlaying ? 'opacity-0 hover:opacity-100 bg-black/40' : 'opacity-100 bg-black/60'}`}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-2xl backdrop-blur-md border border-white/20"
              style={{ backgroundColor: isPlaying ? 'rgba(255,255,255,0.1)' : COLORS.crimson }}
            >
              {isPlaying ? (
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                </svg>
              ) : (
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <p className="text-white mt-6 font-bold tracking-[0.2em] uppercase text-sm">
              {isPlaying ? 'Pause Reel' : 'Watch Promo Reel'}
            </p>
          </div>

          {/* Simulated Progress Bar */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-800">
              <motion.div 
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
