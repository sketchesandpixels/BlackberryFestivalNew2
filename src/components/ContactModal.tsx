import { motion, AnimatePresence } from "motion/react";
import { X, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { COLORS } from "../constants";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
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
            className="relative w-full max-w-4xl bg-white rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-4 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-900"
            >
              <X size={24} />
            </button>

            {/* Left Side: Visual/Branding */}
            <div className="md:w-1/3 bg-slate-900 p-12 flex flex-col justify-between relative overflow-hidden text-white">
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 block mb-2">Get in touch</span>
                <h2 className="text-4xl font-display font-black uppercase leading-none tracking-tighter">Contact<br/><span style={{ color: COLORS.purple }}>Us</span></h2>
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all"><Instagram size={20} /></a>
                  <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all"><Facebook size={20} /></a>
                  <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all"><Twitter size={20} /></a>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: COLORS.purple }} />
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: COLORS.crimson }} />
            </div>

            {/* Right Side: Info */}
            <div className="md:w-2/3 p-12 md:p-20 bg-white">
              <div className="grid grid-cols-1 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="p-4 bg-slate-50 rounded-2xl text-slate-900 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</p>
                      <a href="mailto:info@blackberryfestivalprairieview.com" className="text-xl md:text-2xl font-display font-bold text-slate-900 hover:text-purple-600 transition-colors break-all">
                        info@blackberryfestivalprairieview.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="p-4 bg-slate-50 rounded-2xl text-slate-900 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Location</p>
                      <p className="text-xl md:text-2xl font-display font-bold text-slate-900">
                        44500 US Business Prairie View, Texas 77484<br/>
                        Blackberry Festival
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="p-4 bg-slate-50 rounded-2xl text-slate-900 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Inquiries</p>
                      <p className="text-xl md:text-2xl font-display font-bold text-slate-900">
                        For Event Support Only
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <p className="text-sm text-slate-500 leading-relaxed italic">
                    "We're here to help make your festival experience as sweet as a ripe blackberry. Reach out with any questions about vendor applications, contest entries, or general attendance."
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
