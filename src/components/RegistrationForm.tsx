import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { COLORS } from "../constants";

export const RegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      vendorType: formData.get("vendorType"),
      businessName: formData.get("businessName"),
      contactName: formData.get("contactName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      notes: formData.get("notes"),
    };

    // Split name for Mailchimp
    const nameParts = (data.contactName as string).split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          firstName,
          lastName,
          phone: data.phone,
          notes: `Business: ${data.businessName}, Type: ${data.vendorType}. Notes: ${data.notes}`,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-24 bg-[#E0F2E5]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-16 rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100"
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-green-100 text-green-600 shadow-inner">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-display font-black mb-4" style={{ color: COLORS.purple }}>Application Received!</h2>
            <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">
              Thank you for your interest in the Summer 2026 Blackberry Festival. Our team will review your vendor application and contact you shortly with the sweetest news.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="px-10 py-6 text-lg tracking-widest uppercase font-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all rounded-full"
              style={{ backgroundColor: COLORS.purple, color: "white" }}
            >
              Submit Another
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-32 bg-slate-900 border-t border-white/5" style={{ backgroundColor: "#0f172a" }}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-4 block">Marketplace</span>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-[0.9] text-white uppercase">
            Become a <br/> <span className="text-purple-400">Vendor</span>
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            Showcase your brand to thousands of festival-goers. Space is limited, so apply today to secure your spot in the harvest.
          </p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
            <CardContent className="p-8 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 font-medium rounded-2xl">
                    {error}
                  </div>
                )}
                
                <div className="space-y-3">
                  <Label htmlFor="vendorType" className="text-sm uppercase tracking-widest font-bold" style={{ color: COLORS.purple }}>Vendor Type *</Label>
                  <select id="vendorType" name="vendorType" required className="w-full h-16 text-lg border-2 border-slate-200 rounded-2xl focus:border-purple-600 focus:ring-4 focus:ring-purple-100 p-4 bg-slate-50 transition-all outline-none cursor-pointer text-slate-800">
                    <option value="">Select a category</option>
                    <option value="Food/Beverage">Food & Beverage</option>
                    <option value="Artisan/Craft">Artisan & Craft</option>
                    <option value="Community/Non-profit">Community & Non-profit</option>
                    <option value="Retail/Boutique">Retail & Boutique</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="businessName" className="text-sm uppercase tracking-widest font-bold" style={{ color: COLORS.purple }}>Business Name *</Label>
                    <Input id="businessName" name="businessName" placeholder="Your Business" required className="h-16 text-lg border-2 border-slate-200 rounded-2xl bg-slate-50 focus-visible:border-purple-600 focus-visible:ring-4 focus-visible:ring-purple-100 px-5 text-slate-800" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="contactName" className="text-sm uppercase tracking-widest font-bold" style={{ color: COLORS.purple }}>Contact Name *</Label>
                    <Input id="contactName" name="contactName" placeholder="Full Name" required className="h-16 text-lg border-2 border-slate-200 rounded-2xl bg-slate-50 focus-visible:border-purple-600 focus-visible:ring-4 focus-visible:ring-purple-100 px-5 text-slate-800" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm uppercase tracking-widest font-bold" style={{ color: COLORS.purple }}>Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="hello@example.com" required className="h-16 text-lg border-2 border-slate-200 rounded-2xl bg-slate-50 focus-visible:border-purple-600 focus-visible:ring-4 focus-visible:ring-purple-100 px-5 text-slate-800" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-sm uppercase tracking-widest font-bold" style={{ color: COLORS.purple }}>Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required className="h-16 text-lg border-2 border-slate-200 rounded-2xl bg-slate-50 focus-visible:border-purple-600 focus-visible:ring-4 focus-visible:ring-purple-100 px-5 text-slate-800" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="notes" className="text-sm uppercase tracking-widest font-bold" style={{ color: COLORS.purple }}>Products/Items to be Sold</Label>
                  <Textarea 
                    id="notes" 
                    name="notes"
                    placeholder="Briefly describe what you'll be selling..." 
                    className="min-h-[140px] text-lg border-2 border-slate-200 rounded-2xl bg-slate-50 focus-visible:border-purple-600 focus-visible:ring-4 focus-visible:ring-purple-100 p-5 text-slate-800 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full h-20 text-xl tracking-widest uppercase font-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-70 rounded-full mt-8"
                  style={{ backgroundColor: COLORS.crimson, color: "white" }}
                >
                  {isLoading ? "Submitting Application..." : "Submit Application"}
                </Button>
                
                <p className="text-center text-slate-500 text-sm uppercase tracking-widest font-bold pt-4">
                  Submission does not guarantee a vendor spot. All vendors are subject to approval.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
