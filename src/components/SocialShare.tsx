import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { COLORS } from '../constants';

export const SocialShare = () => {
  const shareUrl = "https://blackberryfestivalpraireview.com";
  const shareText = "Join me at the Inaugural Blackberry Festival 2026! Music, food, culture, and endless vibes.";

  const handleShare = (platform: string) => {
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    } else if (platform === 'instagram') {
      // Instagram doesn't have a direct share URL scheme for web browsers
      alert("Follow us and share our posts on Instagram @BlackberryFest!");
    }
  };

  return (
    <div className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 group pointer-events-auto">
      {/* Container Background (hover effect) */}
      <div className="absolute inset-y-0 -left-6 right-0 bg-white/80 backdrop-blur-md rounded-r-3xl -z-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 transition-transform duration-300 translate-x-[-120%] group-hover:translate-x-0" />
      
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleShare('facebook')}
        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-shadow"
        aria-label="Share on Facebook"
      >
        <Facebook size={22} fill="currentColor" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1 }}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleShare('twitter')}
        className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:shadow-slate-900/30 transition-shadow"
        aria-label="Share on X (Twitter)"
      >
        <Twitter size={22} fill="currentColor" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleShare('instagram')}
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:shadow-rose-500/30 transition-shadow"
        aria-label="Share on Instagram"
      >
        <Instagram size={24} />
      </motion.button>
    </div>
  );
};
