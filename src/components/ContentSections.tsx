import { motion } from "motion/react";
import { FESTIVAL_INFO, COLORS } from "../constants";
import { Button } from "@/components/ui/button";

const Section = ({ 
  title, 
  content, 
  image, 
  reverse = false, 
  bgColor = "bg-white",
  accentColor = COLORS.purple,
  imageAlt = "Festival activity",
  ctaText = "Learn More"
}: { 
  title: string; 
  content: string; 
  image: string; 
  reverse?: boolean; 
  bgColor?: string;
  accentColor?: string;
  imageAlt?: string;
  ctaText?: string;
}) => {
  return (
    <section className={`py-32 ${bgColor} overflow-hidden`} id="info">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left relative"
          >
            <div className="absolute -inset-10 -z-10 mix-blend-multiply opacity-20 select-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-64 h-64 mx-auto lg:mx-0 blur-3xl opacity-50" style={{ fill: accentColor }}>
                    <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.8C87.4,-34.5,90.1,-20.1,89.6,-6C89.1,8,85.5,21.7,78.2,33.1C70.9,44.5,60,53.6,48.2,61.6C36.4,69.6,23.7,76.5,8.8,80.1C-6.1,83.7,-23.1,84,-36.8,77.7C-50.5,71.4,-61,58.5,-70.6,45.2C-80.2,31.9,-88.9,18.2,-89.4,3.9C-89.9,-10.3,-82.3,-25.1,-73.4,-38.4C-64.4,-51.7,-54.1,-63.5,-41.5,-71.4C-28.9,-79.3,-14.5,-83.4,0.8,-84.6C16.1,-85.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6 leading-tight tracking-tight relative z-10" style={{ color: accentColor }}>
              {title}
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium relative z-10">
              {content}
            </p>
            <Button 
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-6 rounded-full text-sm uppercase tracking-widest font-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              style={{ backgroundColor: accentColor, color: "white" }}
            >
              {ctaText}
            </Button>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative w-full"
          >
            <div className={`relative rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] aspect-[4/3] ${reverse ? '-rotate-2 group-hover:rotate-0' : 'rotate-2 group-hover:rotate-0'} transition-transform duration-700 bg-white border border-slate-100 p-2 group`}>
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                <img 
                  src={image} 
                  alt={imageAlt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ContentSections = () => {
  return (
    <div className="bg-white">
      <Section 
        title="About the Festival"
        content="The Inaugural Blackberry Festival is more than just a celebration of the harvest; it is a movement of culture, community, and connection. Hosted by the Prairie View Alumnae Chapter of Delta Sigma Theta Sorority, Inc., we invite you to experience the rich heritage of our region through the lens of one of its most beloved fruits."
        image="/aboutblackberryfestival.jpeg"
        imageAlt="Fresh ripe blackberries on the bush"
        accentColor={COLORS.purple}
        bgColor="bg-white"
        ctaText="Become a Vendor"
      />
      
      <div className="h-px bg-slate-100 max-w-7xl mx-auto" />

      <Section 
        title="Vibes & Heritage"
        content="From the rhythmic beats of live local bands to the competitive spirit of our famous Pie Contest, every moment is curated to spark joy. Wander through our artisan marketplace, indulge in gourmet food trucks, and create lasting memories with the whole family in our dedicated fun zones."
        image="/blackberry-crowd.webp"
        imageAlt="Festival crowd"
        reverse={true}
        accentColor={COLORS.crimson}
        bgColor="bg-white"
        ctaText="Enter Pie Contest"
      />
    </div>
  );
};
