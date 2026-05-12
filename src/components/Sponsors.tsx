/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { COLORS } from "../constants";

const SPONSORS = [
  "Prairie View 4B Economic Development",
  "Starbucks", "Brand Name  It ",
  "HEB"
];

export const Sponsors = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="sponsors">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4 block">Partnership</span>
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight text-slate-900 uppercase">
            Fueling the <span className="text-rose-600">Community</span>
          </h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {SPONSORS.map((sponsor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group"
            >
              <span 
                className="text-lg md:text-xl font-display font-black text-center uppercase tracking-tighter group-hover:scale-110 transition-transform duration-500"
                style={{ color: COLORS.purple }}
              >
                {sponsor}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 z-0" />
    </section>
  );
};
