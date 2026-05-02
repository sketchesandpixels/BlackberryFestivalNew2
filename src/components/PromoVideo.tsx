import { useState } from 'react';
import { motion } from 'framer-motion';

export const PromoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Extract the ID from your YouTube link (e.g., watch?v=dQw4w9WgXcQ -> dQw4w9WgXcQ)
  const youtubeVideoId = "XnOVZ04Uiz0"; 

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden text-white" id="promo">
      {/* Background static noise/gradient */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header Text */}
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
          className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-black shadow-2xl"
        >
          {!isPlaying ? (
            /* --- Custom Poster & Play Button (Shows before playing) --- */
            <>
              <motion.img
                src="blackberry festival band.jpeg"
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] blur-[2px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 transition-opacity duration-500 hover:bg-black/40">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-2xl backdrop-blur-sm bg-[crimson]"
                >
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <p className="text-white mt-6 font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">
                  Watch Promo Reel
                </p>
              </div>
            </>
          ) : (
            /* --- YouTube Iframe (Shows when playing) --- */
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </motion.div>
      </div>
    </section>
  );
};