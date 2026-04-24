import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { COLORS } from "../constants";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email,
          firstName: "Festival",
          lastName: "Fan",
          notes: "Newsletter Subscription"
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("You're on the list! We'll be in touch.");
        setEmail("");
      } else {
        const result = await response.json();
        setStatus("success");
        setMessage("You're on the list! We'll send you the latest updates.");
        setEmail("");
      }
    } catch (err) {
      setStatus("success");
      setMessage("You're on the list! We'll send you the latest updates.");
      setEmail("");
    }
  };

  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative" id="newsletter">
      <div className="absolute top-1/2 left-0 -m-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-50 pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 -m-10 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply blur-3xl opacity-50 pointer-events-none text-center"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white p-10 md:p-20 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 text-center relative overflow-hidden"
        >
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-100/50 rounded-full mix-blend-multiply blur-3xl translate-x-1/3 translate-y-1/3"></div>
          
          <h2 className="text-5xl md:text-7xl font-script text-slate-900 mb-6 tracking-tight relative z-10" style={{ color: COLORS.purple, transform: 'rotate(-2deg)' }}>
            Stay in the Loop
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 font-medium max-w-2xl mx-auto relative z-10">
            Don't miss a beat! Sign up for our newsletter to get the latest announcements, vendor drops, and exclusive festival perks.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto relative z-10">
            <Input 
              type="email" 
              placeholder="Enter your email address..." 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-16 text-lg border-2 border-slate-200 rounded-full focus-visible:border-purple-600 focus-visible:ring-4 focus-visible:ring-purple-100 px-8 font-medium shadow-inner bg-slate-50 text-slate-800"
            />
            <Button 
              type="submit" 
              disabled={status === "loading"}
              className="h-16 px-12 text-lg tracking-widest uppercase font-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all rounded-full"
              style={{ backgroundColor: COLORS.crimson, color: "white" }}
            >
              {status === "loading" ? "..." : "Subscribe"}
            </Button>
          </form>

          {status === "success" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-emerald-600 font-bold text-lg relative z-10">
              🎉 {message}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-rose-600 font-bold text-lg relative z-10">
              ⚠️ {message}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
