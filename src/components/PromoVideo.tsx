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
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="youtube-player"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/nz8ihlDLlro?si=A5iFdNyw4pkGsCCo&autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </motion.div>
            ) : (
              <motion.div key="poster-container" className="absolute inset-0">
                <motion.img
                  src="https://images.unsplash.com/photo-1464366400600-71ebb90ffbd4?w=1600&auto=format&fit=crop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[30%] blur-[2px]"
                />
                
                {/* Player Controls & Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 bg-black/40">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-2xl backdrop-blur-md border border-white/20"
                    style={{ backgroundColor: COLORS.crimson }}
                  >
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <p className="text-white mt-6 font-bold tracking-[0.2em] uppercase text-sm">
                    Watch Promo Reel
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
