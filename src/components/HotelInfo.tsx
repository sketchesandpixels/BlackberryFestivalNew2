/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { FESTIVAL_INFO, COLORS } from "../constants";
import { Hotel, ExternalLink, Calendar, Info } from "lucide-react";

export const HotelInfo = () => {
  if (!FESTIVAL_INFO.hotel) return null;

  const { name, rate, deadline, link } = FESTIVAL_INFO.hotel;

  return (
    <section id="hotel" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-purple-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-rose-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-rose-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Accommodations</span>
          <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tight mb-6">
            Stay in <span style={{ color: COLORS.purple }}>Comfort</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            We've partnered with local hotels to provide special group rates for our festival attendees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] border border-slate-100 p-8 md:p-12 overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-2xl">
                  <Hotel className="w-8 h-8 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{name}</h3>
                  <p className="text-slate-600 font-medium">Special Event Rate: <span className="text-purple-700 font-black">{rate}</span></p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <Calendar className="w-5 h-5 text-rose-600" />
                  <span className="font-medium text-sm">Booking Deadline: <strong className="text-rose-600 font-bold">{deadline}</strong></span>
                </div>
                <div className="flex items-start gap-3 text-slate-500 bg-rose-50/50 p-4 rounded-2xl border border-rose-100">
                  <Info className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs leading-relaxed">
                    Today is the final day to secure this special rate! Rooms are subject to availability, so we recommend booking as soon as possible.
                  </p>
                </div>
              </div>

              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-5 rounded-full text-base font-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all bg-purple-900 text-white"
              >
                Book Your Group Rate
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                alt="Hotel room illustration" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
