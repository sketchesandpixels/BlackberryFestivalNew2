/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { FESTIVAL_INFO, COLORS } from "../constants";
import { Calendar, Clock, MapPin } from "lucide-react";

export const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      label: "Date",
      value: FESTIVAL_INFO.date,
    },
    {
      icon: Clock,
      label: "Time",
      value: FESTIVAL_INFO.time,
    },
    {
      icon: MapPin,
      label: "Location",
      value: FESTIVAL_INFO.location,
    },
  ];

  return (
    <section id="details" className="py-20 bg-slate-900 border-b border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {details.map((detail, idx) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 p-5 rounded-full bg-white/5 border border-white/10 group-hover:bg-rose-600/10 group-hover:border-rose-600/20 transition-all duration-500">
                  <Icon className="w-8 h-8 text-rose-600" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-2 block">
                  {detail.label}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight">
                  {detail.value}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
