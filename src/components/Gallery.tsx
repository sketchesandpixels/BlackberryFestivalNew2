import { motion } from "motion/react";
import { COLORS } from "../constants";

const images = [
  {
    url: "https://images.unsplash.com/photo-1459749411177-04218006d996?w=800&auto=format&fit=crop",
    alt: "Live local music"
  },
  {
    url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop",
    alt: "Gourmet festival food"
  },
  {
    url: "blackberry_festival_food_vibe.jpeg",
    alt: "Summer evening vibes"
  },
  {
    url: "blackfestival_music.png",
    alt: "Festival night highlights"
  },
  {
    url: "https://images.unsplash.com/photo-1490424660416-359912d314b3?w=800&auto=format&fit=crop",
    alt: "Artisan marketplace"
  },
  {
    url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop",
    alt: "Community harvest"
  },
  {
    url: "https://images.unsplash.com/photo-1464366400600-71ebb90ffbd4?w=800&auto=format&fit=crop",
    alt: "Joyful celebrations"
  },
  {
    url: "Blackberry_Festival_Prairie_View.jpeg",
    alt: "Midnight Berries"
  }
];

export const Gallery = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="gallery">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4 block">Vibe Check</span>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-[0.9] text-slate-900 uppercase">
            The Golden <br/> <span className="text-rose-600">Moments</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[5rem] overflow-hidden shadow-2xl mb-6 transition-transform duration-500 group-hover:scale-[0.98]">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 text-center">{img.alt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
