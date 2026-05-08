import { motion } from "motion/react";
import { COLORS } from "../constants";

const images = [
  {
    url: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&auto=format&fit=crop",
    alt: "Texas Bar-B-Que"
  },
  {
    url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop",
    alt: "Street Tacos"
  },
  {
    url: "blackberry_beverages.webp",
    alt: "Blackberry Beverages"
  },
  {
    url: "blackberrypie.webp",
    alt: "Famous Blackberry Pie"
  },
  {
    url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&auto=format&fit=crop",
    alt: "Live on Stage"
  },
  {
    url: "blackberry_festival_bounce_house.webp",
    alt: "Kids Zone Games"
  },
  {
    url: "blackberry festival houston sea moss queen in sea moss.webp",
    alt: "Blackberry Harvest Seamoss"
  },
  {
    url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
    alt: "Village Vibes"
  }
];

export const Gallery = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="gallery">
      {/* Background Text Element for Vibe */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
        <span className="text-[30vw] font-display font-black uppercase leading-none inline-block whitespace-nowrap">
          Vibes Vibes Vibes Vibes
        </span>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-rose-600 text-white px-8 py-4 mb-4 transform -rotate-2 shadow-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
              Food, Beverages & Fun
            </h2>
          </motion.div>
          <p className="text-xl font-display font-black uppercase tracking-widest text-slate-400">
            From Prairie View's Local Best
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`group relative overflow-hidden transition-all duration-500 flex items-center justify-center
                ${idx % 3 === 0 ? 'aspect-square md:col-span-2' : 'aspect-[3/4]'}
                ${idx % 2 === 0 ? 'md:mt-12' : ''}
              `}
            >
              <motion.div 
                variants={{
                  hover: { rotate: -2, scale: 1.05 },
                  tap: { rotate: -1, scale: 0.98 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-full relative overflow-hidden p-2 bg-white shadow-xl border border-slate-100"
              >
                <motion.img
                  variants={{
                    hover: { filter: 'grayscale(0)' },
                    tap: { filter: 'grayscale(0)' }
                  }}
                  initial={{ filter: 'grayscale(1)' }}
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <motion.div 
                  variants={{
                    hover: { y: 0, opacity: 1 },
                    tap: { y: 0, opacity: 1 }
                  }}
                  initial={{ y: 10, opacity: 0.8 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <span 
                    className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg"
                    style={{ backgroundColor: COLORS.purple }}
                  >
                    {img.alt}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
