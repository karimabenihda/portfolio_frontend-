"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Target } from "lucide-react";

export default function About() {
  const points = [
    { icon: <Star size={20} className="text-primary-blue fill-primary-blue" />, text: "OVER 10 YEARS OF EXPERIENCE" },
    { icon: <Target size={20} className="text-primary-blue" />, text: "TRUSTED BY GLOBAL BRANDS" },
  ];

  const partners = [
    { name: "LOGO 1", icon: <CheckCircle2 size={16} /> },
    { name: "LOGO 2", icon: <CheckCircle2 size={16} /> },
    { name: "LOGO 3", icon: <CheckCircle2 size={16} /> },
    { name: "LOGO 4", icon: <CheckCircle2 size={16} /> },
  ];

  return (
    <section className="bg-[#0E0D19] w-full py-24 md:py-48 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left - Text Content */}
        <div className="flex flex-col gap-8 md:gap-12 relative z-10">
          <div className="flex items-center gap-4">
             <div className="w-10 md:w-14 h-[2px] bg-primary-purple" />
             <span className="text-primary-purple text-xs md:text-sm font-bold tracking-[0.3em] uppercase">WHO WE ARE</span>
          </div>

          <h2 className="text-white text-4xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase max-w-2xl">
            CREATIVITY MEETS STRATEGY.
          </h2>

          <p className="text-gray-mid text-sm md:text-lg leading-relaxed font-bold tracking-wide max-w-xl">
             With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience.
          </p>

          <div className="flex flex-col gap-6 mt-4 md:mt-8">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-4 text-white font-black text-sm md:text-md tracking-widest uppercase">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-primary-purple/20 rounded-full shadow-[0_0_15px_rgba(224,167,255,0.1)]">
                  <div className="text-primary-purple">{point.icon}</div>
                </div>
                {point.text}
              </div>
            ))}
          </div>

          {/* Partner logos placeholder marquee or strip */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-30 mt-12 md:mt-24 grayscale">
             {partners.map((p, idx) => (
               <div key={idx} className="flex items-center gap-2 font-black text-xs md:text-sm text-white tracking-tighter">
                  {p.icon} <span>PARTNER LOGO</span>
               </div>
             ))}
          </div>
        </div>

        {/* Right - Image & Progress Bars */}
        <div className="relative flex flex-col gap-12 md:gap-24">
           {/* Main Image */}
           <div className="relative rounded-2xl md:rounded-[40px] overflow-hidden group shadow-2xl">
              <Image 
                src="/assets/HOME.jfif" 
                alt="About us" 
                width={600} 
                height={800} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 border-[1px] border-white/10 rounded-2xl md:rounded-[40px]" />
           </div>

           {/* Floating Progress Bars */}
           <div className="absolute -bottom-10 lg:-bottom-20 -left-10 lg:-left-20 w-[90%] md:w-[110%] bg-card-bg p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-xl md:rounded-3xl flex flex-col gap-8 border border-white/5 z-20">
              <div className="flex flex-col gap-3">
                 <div className="flex justify-between items-center text-white font-black text-xs md:text-sm tracking-widest">
                    <span>SUCCESSFUL CAMPAIGNS</span>
                    <span className="text-primary-purple">95%</span>
                 </div>
                 <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary-purple shadow-[0_0_10px_rgba(224,167,255,0.5)]" 
                    />
                 </div>
              </div>

              <div className="flex flex-col gap-3">
                 <div className="flex justify-between items-center text-white font-black text-xs md:text-sm tracking-widest">
                    <span>STRATEGIC DESIGN</span>
                    <span className="text-accent-purple">85%</span>
                 </div>
                 <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-accent-purple shadow-[0_0_10px_rgba(204,0,255,0.5)]" 
                    />
                 </div>
              </div>

              <button className="self-start flex items-center gap-2 px-6 py-4 bg-primary-purple text-black text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-white transition-all rounded-sm group transform hover:scale-105 shadow-[0_0_20px_rgba(224,167,255,0.3)]">
                ABOUT US <CheckCircle2 size={14} className="ml-2" />
              </button>
           </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
