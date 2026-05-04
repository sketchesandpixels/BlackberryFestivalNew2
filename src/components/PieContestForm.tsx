import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { COLORS } from "../constants";

export const PieContestForm = () => {
  return (
    <section id="contest" className="py-32 relative overflow-hidden bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col xl:flex-row gap-20 items-center">
        
        {/* Left Side: Header & CTA */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="mb-12">
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
            <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-3xl">
                    🥧
                  </div>
                  
                  <h3 className="text-2xl font-display font-black mb-4 text-slate-900 uppercase">Entries Now Open</h3>
                  <p className="text-slate-600 mb-10 font-medium">
                    Register your pie or cobbler through our secure Zeffy portal to secure your spot in the competition.
                  </p>

                  <div className="grid grid-cols-2 gap-3 w-full mb-10">
                     {["Fruit Pie", "Cobbler/Crisp", "Traditional", "Creative"].map((type) => (
                       <div key={type} className="bg-white p-3 rounded-xl border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center justify-center">
                         {type}
                       </div>
                     ))}
                  </div>

                  <motion.a 
                    href="https://www.zeffy.com/en-US/ticketing/blackberry-festival-pie-competition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 h-18 text-lg tracking-widest uppercase font-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all rounded-full w-full"
                    style={{ backgroundColor: COLORS.purple, color: "white" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enter Competition
                  </motion.a>
                  
                  <p className="mt-6 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                    Secure checkout powered by Zeffy
                  </p>
                </div>
              </CardContent>
            </Card>
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
              src="blackberrypiecontest.webp" 
              alt="Blackberry Pie" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-rose-600 text-white p-12 rounded-full w-48 h-48 flex items-center justify-center text-center font-display font-black uppercase text-xl leading-none shadow-xl transform rotate-12">
            Win a<br/>Blue<br/>Ribbon
          </div>
        </motion.div>

      </div>

      {/* Rules Section */}
      <div className="container mx-auto px-4 max-w-7xl mt-32 border-t border-slate-100 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-rose-600 mb-4 block">Preparation</span>
          <h3 className="text-5xl md:text-6xl font-display font-black text-slate-900 uppercase">Competition Rules</h3>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto font-medium">Please read the following guidelines carefully before preparing your submission for the judges.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* General Rules */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-black">01</div>
              <h4 className="text-xl font-display font-black uppercase tracking-widest text-slate-900">General Rules</h4>
            </div>
            <ul className="space-y-6">
              <li className="group">
                <p className="text-xs font-black uppercase tracking-widest text-rose-600 mb-1">Entry Deadline</p>
                <p className="text-slate-700 leading-relaxed font-medium">Pies and cobblers (blackberry only) must be delivered 1 hour prior to the contest to be considered for judging. Late entries will be disqualified.</p>
              </li>
              <li className="group">
                <p className="text-xs font-black uppercase tracking-widest text-rose-600 mb-1">Anonymity</p>
                <p className="text-slate-700 leading-relaxed font-medium">Pies and cobblers will be judged anonymously, with your name kept from the judges until after the results are in.</p>
              </li>
              <li className="group">
                <p className="text-xs font-black uppercase tracking-widest text-rose-600 mb-1">Recipe Required</p>
                <p className="text-slate-700 leading-relaxed font-medium">A recipe or ingredients list is required with the entry.</p>
              </li>
              <li className="group">
                <p className="text-xs font-black uppercase tracking-widest text-rose-600 mb-1">Serving Size</p>
                <p className="text-slate-700 leading-relaxed font-medium">Competitors must bring enough to serve the judges which can be anywhere from 4 to 11 people.</p>
              </li>
            </ul>
          </motion.div>

          {/* Requirements & Judging Pies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-black">02</div>
              <h4 className="text-xl font-display font-black uppercase tracking-widest text-slate-900">Requirements</h4>
            </div>
            <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 mb-12">
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex gap-3">
                  <span className="text-purple-600">🥧</span>
                  <span><span className="font-black uppercase tracking-tighter">Pan:</span> Pies must be baked in a 9" disposable pan.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600">🥘</span>
                  <span><span className="font-black uppercase tracking-tighter">Bakeware:</span> Cobbler must be baked in disposable bakeware.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600">✨</span>
                  <span><span className="font-black uppercase tracking-tighter">Homemade:</span> Entries must be made from scratch. No store-bought allowed.</span>
                </li>
              </ul>
            </div>

            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2 text-center">
              <span className="h-px bg-slate-200 flex-1"></span>
              Judging Criteria (Pies)
              <span className="h-px bg-slate-200 flex-1"></span>
            </h4>
            <ul className="space-y-4">
              {['Taste and Flavor', 'Crust', 'Filling', 'Appearance', 'Creativity'].map((item) => (
                <li key={item} className="flex items-center justify-between text-slate-900 border-b border-slate-100 pb-2">
                  <span className="font-display font-bold">{item}</span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-purple-600">Scored</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Judging Cobblers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black">03</div>
              <h4 className="text-xl font-display font-black uppercase tracking-widest text-slate-900">Judging (Cobblers)</h4>
            </div>
            <ul className="space-y-8">
              <li className="flex gap-6">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl">👀</div>
                <div>
                  <h5 className="font-display font-black uppercase text-sm mb-1">Appearance</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">Judges will evaluate the overall look, neatness, and aesthetic appeal of your cobbler.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl">👃</div>
                <div>
                  <h5 className="font-display font-black uppercase text-sm mb-1">Flavor/Aroma</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">A key factor: consideration of pleasant taste, aftertaste, and the smell.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl">🦷</div>
                <div>
                  <h5 className="font-display font-black uppercase text-sm mb-1">Texture/Consistency</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">Judges will look for consistency in how evenly the cobbler is cooked/baked.</p>
                </div>
              </li>
            </ul>
            <div className="p-6 bg-blue-600 rounded-3xl text-white text-center shadow-xl shadow-blue-200">
              <p className="text-xs uppercase font-black tracking-widest mb-1 opacity-80">Serving Policy</p>
              <p className="text-sm font-medium leading-tight">Entries will not be returned and may be served to the public after judging.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
