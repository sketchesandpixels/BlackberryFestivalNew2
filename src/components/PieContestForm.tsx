import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { COLORS } from "../constants";

export const PieContestForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission for the demo
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <section id="contest" className="py-24 bg-[#E5DDF0]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-16 rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100"
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-purple-100 text-purple-600 shadow-inner text-4xl">
              🥧
            </div>
            <h2 className="text-4xl font-display font-black mb-4" style={{ color: COLORS.purple }}>Entry Confirmed!</h2>
            <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">
              We can't wait to taste your creation! Your entry into the Inaugural Blackberry Cobbler & Pie Contest has been received. See you at the festival!
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="px-10 py-6 text-lg tracking-widest uppercase font-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all rounded-full"
              style={{ backgroundColor: COLORS.purple, color: "white" }}
            >
              Submit Another Entry
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contest" className="py-32 relative overflow-hidden bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col xl:flex-row gap-20 items-center">
        
        {/* Left Side: Header & Form */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4 block">Competition</span>
              <h2 className="text-6xl md:text-8xl font-display font-black mb-8 leading-[0.85] text-slate-900 uppercase">
                The Great <br/> <span className="text-rose-600">Bake-off</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Think your family recipe is the best? Prove it! Enter our first-ever baking competition and showcase your blackberry masterpiece to our panel of judges.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="participantName" className="text-xs uppercase tracking-widest font-black text-slate-400">Full Name</Label>
                  <Input id="participantName" name="participantName" placeholder="Your Name" required className="h-16 text-lg border-x-0 border-t-0 border-b-2 border-slate-200 rounded-none bg-transparent focus-visible:border-rose-600 focus-visible:ring-0 px-0 placeholder:text-slate-300 font-display font-bold" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="dessertName" className="text-xs uppercase tracking-widest font-black text-slate-400">Dessert Name</Label>
                  <Input id="dessertName" name="dessertName" placeholder="Grandma's Cobbler" required className="h-16 text-lg border-x-0 border-t-0 border-b-2 border-slate-200 rounded-none bg-transparent focus-visible:border-rose-600 focus-visible:ring-0 px-0 placeholder:text-slate-300 font-display font-bold" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="category" className="text-xs uppercase tracking-widest font-black text-slate-400">Category</Label>
                <select id="category" name="category" required className="w-full h-16 text-lg border-x-0 border-t-0 border-b-2 border-slate-200 rounded-none bg-transparent focus:border-rose-600 transition-all outline-none cursor-pointer font-display font-bold">
                  <option value="">Select Category</option>
                  <option value="Fruit Pie">Traditional Fruit Pie</option>
                  <option value="Cobbler">Cobbler / Crisp</option>
                  <option value="Alternative">Alternative (GF/Vegan)</option>
                </select>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-20 text-xl tracking-[0.2em] uppercase font-black shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-70 rounded-full"
                style={{ backgroundColor: COLORS.purple, color: "white" }}
              >
                {isLoading ? "Submitting..." : "Enter Competition"}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Right Side: Image with floating text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="relative aspect-square rounded-[10rem] overflow-hidden shadow-2xl">
            <img 
              src="/blackberry_pie.jpeg" 
              alt="Blackberry Pie" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay"></div>
          </div>
          <div className="absolute -bottom-10 -right-10 bg-rose-600 text-white p-12 rounded-full w-48 h-48 flex items-center justify-center text-center font-display font-black uppercase text-xl leading-none shadow-xl transform rotate-12">
            Win a<br/>Blue<br/>Ribbon
          </div>
        </motion.div>

      </div>
    </section>
  );
};
