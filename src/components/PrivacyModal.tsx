import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import { COLORS } from "../constants";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-4 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-900"
            >
              <X size={24} />
            </button>

            <div className="p-12 md:p-20 overflow-y-auto max-h-[85vh] custom-scrollbar">
              <div className="flex flex-col items-center text-center mb-16">
                <div className="p-5 bg-purple-50 text-purple-600 rounded-3xl mb-6">
                  <ShieldCheck size={40} />
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase leading-none tracking-tighter text-slate-900">
                  Privacy<br/><span style={{ color: COLORS.purple }}>Policy</span>
                </h2>
                <p className="mt-6 text-slate-400 font-black uppercase tracking-widest text-[10px]">Last Updated: May 2026</p>
              </div>

              <div className="prose prose-slate max-w-none space-y-12">
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Eye className="text-purple-600" size={20} />
                    <h3 className="text-xl font-display font-black uppercase tracking-tight text-slate-900">Information We Collect</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    When you register as a vendor, enter our baking contests, or sign up for our newsletter, we collect personal information such as your name, email address, phone number, and mailing address. This information is used solely for festival-related communications and logistics.
                  </p>
                </section>

                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Lock className="text-rose-600" size={20} />
                    <h3 className="text-xl font-display font-black uppercase tracking-tight text-slate-900">How We Use Your Data</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                    <li className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-rose-600 mt-2" />
                      <span className="text-sm font-medium text-slate-700">Processing contest entries & vendor applications</span>
                    </li>
                    <li className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-rose-600 mt-2" />
                      <span className="text-sm font-medium text-slate-700">Sending festival updates & newsletters</span>
                    </li>
                    <li className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-rose-600 mt-2" />
                      <span className="text-sm font-medium text-slate-700">Internal security & fraud prevention</span>
                    </li>
                    <li className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-rose-600 mt-2" />
                      <span className="text-sm font-medium text-slate-700">Compliance with legal obligations</span>
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FileText className="text-amber-600" size={20} />
                    <h3 className="text-xl font-display font-black uppercase tracking-tight text-slate-900">Third-Party Services</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We use Mailchimp for our newsletter services. Your email address and name are securely transferred to their platform to ensure reliable delivery of our communications. We do not sell or lease your personal information to third parties for marketing purposes.
                  </p>
                </section>

                <div className="pt-12 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                    Questions regarding our privacy practices can be sent to info@blackberryfestivalprairieview.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
