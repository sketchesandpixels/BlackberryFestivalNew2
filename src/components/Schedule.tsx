import { motion } from "motion/react";
import { COLORS } from "../constants";
import { Clock, MapPin, Music, Utensils, Star, Ticket } from "lucide-react";

const SCHEDULE_DATA = [
  {
    time: "10:00 AM",
    title: "Gates Open & Marketplace",
    location: "Main Festival Grounds",
    description: "Kick off the day with fresh local produce, artisan crafts, and endless blackberry treats.",
    icon: Utensils,
    color: COLORS.purple
  },
  {
    time: "11:30 AM",
    title: "Blackberry Pie Contest Judging",
    location: "The Culinary Tent",
    description: "Watch local legends battle it out for the title of Best Blackberry Pie.",
    icon: Star,
    color: COLORS.crimson
  },
  {
    time: "1:00 PM",
    title: "Local High School(s) Entertainment",
    location: "Main Stage",
    description: "Grab a spot on the grass and enjoy local talent.",
    icon: Music,
    color: "#eab308" // yellow-500
  },
  {
    time: "3:00 PM",
    title: "Family Fun & Large Games",
    location: "The Kids Zone",
    description: "Bound House and games for the whole family.",
    icon: Ticket,
    color: "#3b82f6" // blue-500
  },
  {
    time: "5:30 PM",
    title: "Brown Sugar Concert & Vibes",
    location: "Main Stage",
    description: "The energy goes up as our evening headliners take the stage.",
    icon: Music,
    color: COLORS.purple
  },
  {
    time: "8:00 - 10:00 PM",
    title: "B.I.G. Headline Concert & Vibes",
    location: "Main Stage",
    description: "B.I.G is the live high energy bands headlines and closes the Inaugural Blackberry Festival..",
    icon: Star,
    color: COLORS.crimson
  }
];

export const Schedule = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden" id="schedule">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4 block">Timeline</span>
              <h2 className="text-6xl md:text-7xl font-display font-black mb-8 leading-[0.9] text-slate-900 uppercase">
                The Day's <br/> <span className="text-purple-600">Flow</span>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                Twelve hours of pure festival energy. Plan your day around our curated highlights and live bands.
              </p>
              <div className="h-1 w-20 bg-slate-900" />
            </motion.div>
          </div>

          <div className="flex-1 space-y-12">
            {SCHEDULE_DATA.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex items-start gap-8"
              >
                <div className="text-4xl md:text-6xl font-display font-black text-slate-200 group-hover:text-purple-100 transition-colors shrink-0 tabular-nums">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <div className="pt-2 md:pt-4 border-t border-slate-200 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <span className="text-sm font-black uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full w-fit">
                      {item.time}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                      <MapPin size={12} /> {item.location}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
