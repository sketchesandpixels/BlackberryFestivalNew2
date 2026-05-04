import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { COLORS } from "../constants";

export const RegistrationForm = () => {
  return (
    <section id="register" className="py-32 bg-slate-900 border-t border-white/5" style={{ backgroundColor: "#0f172a" }}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-4 block">Marketplace</span>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-[0.9] text-white uppercase">
            Become a <br/> <span className="text-purple-400">Vendor</span>
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            Showcase your brand to thousands of festival-goers. We are looking for unique food, crafts, and retail partners to join our harvest.
          </p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
            <CardContent className="p-8 md:p-20 text-center">
              <div className="flex flex-col items-center max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl font-display font-black mb-4 text-slate-900 uppercase">Vendor Applications Now Open</h3>
                <p className="text-slate-600 text-lg mb-12 font-medium">
                  We've streamlined our application process. Click the button below to visit our secure registration portal and complete your vendor application.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-12">
                   {["Food & Beverage", "Artisan & Craft", "Community/Non-profit", "Retail & Boutique"].map((type) => (
                     <div key={type} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm font-black uppercase tracking-widest text-slate-500 flex items-center justify-center">
                       {type}
                     </div>
                   ))}
                </div>

                <motion.a 
                  href="https://www.zeffy.com/en-US/ticketing/blackberry-festival-vendor-sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-12 h-20 text-xl tracking-widest uppercase font-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all rounded-full w-full sm:w-auto"
                  style={{ backgroundColor: COLORS.crimson, color: "white" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply to be a Vendor
                </motion.a>
                
                <p className="mt-8 text-slate-500 text-sm uppercase tracking-widest font-bold">
                  Payments are handled securely through Zeffy.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
