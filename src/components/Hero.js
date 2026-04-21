"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "500", label: "HAPPY CLIENT", suffix: "+" },
    { value: "125", label: "PROJECT DONE", suffix: "+" },
    { value: "450", label: "MEDIA FEATURES", suffix: "+" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-dark-bg overflow-hidden flex flex-col justify-center pt-24 pb-12 px-6 overflow-x-hidden">
      {/* Background Decorative Element & Glows */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 border border-primary-purple/10 rounded-full animate-pulse" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Content - Stats */}
        <div className="lg:col-span-3 flex flex-col justify-center gap-12 text-white order-2 lg:order-1">
          <div className="flex -space-x-1 mb-4 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-dark-bg bg-primary-purple/20 overflow-hidden">
                <div className="w-full h-full bg-center bg-cover bg-primary-purple/20" />
              </div>
            ))}
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-dark-bg bg-primary-purple text-black font-bold text-[10px] shadow-[0_0_10px_rgba(224,167,255,0.5)]">
              +5k
            </div>
          </div>
          <p className="text-[10px] leading-tight font-bold opacity-80 max-w-[120px] uppercase tracking-widest mb-12">
            THE EXPERT TEAM WORKS & CREATIVITY TO EVERY PROJECT.
          </p>

          <div className="flex flex-col gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex flex-col"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black text-white">{stat.value}</span>
                  <span className="text-primary-purple text-2xl font-bold">{stat.suffix}</span>
                </div>
                <span className="text-[10px] font-bold opacity-70 tracking-[0.2em]">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Center - Big Text & Hero Image */}
        <div className="lg:col-span-6 relative flex flex-col items-center order-1 lg:order-2">
          {/* Background Text */}
          <h1 className="z-0 pointer-events-none select-none text-[15vw] lg:text-[180px] font-black text-primary-purple/20 leading-[0.8] tracking-tighter flex flex-col items-center drop-shadow-[0_0_30px_rgba(224,167,255,0.1)]">
            <span>CREATIVE</span>
            <span className="relative">
               AGENCY
               <span className="absolute -inset-1 text-transparent font-black stroke-white/5 stroke-1 lg:stroke-2" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>AGENCY</span>
            </span>
          </h1>

          {/* Hero Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[100%] md:w-[120%] h-full z-10 pointer-events-none flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-square md:aspect-auto md:h-full flex justify-center"
            >
              <Image
                src="/assets/hero.png"
                style="width: auto,height:auto"
                alt="Representative"
                width={700}
                height={700}
                className="object-contain drop-shadow-[0_0_50px_rgba(204,0,255,0.2)]"
                priority
              />
              
              {/* Floating Element - Star */}
              <div className="absolute top-[20%] right-[10%] w-12 h-12 md:w-20 md:h-20 bg-primary-purple rounded-full flex items-center justify-center p-2 animate-bounce shadow-[0_0_20px_rgba(224,167,255,0.6)]">
                <Star className="text-black fill-black w-full h-full" strokeWidth={1} />
              </div>

               {/* Floating Element - Info Box */}
               <div className="hidden md:flex absolute bottom-[15%] right-[0%] w-56 flex-col gap-2 pointer-events-auto p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl">
                 <p className="text-[8px] text-white/70 leading-relaxed font-bold tracking-widest uppercase">
                    Lorem ipsum dolor sit amet consectetur elit elit tellus luctus nec ullamcorper matti.
                 </p>
                 <button className="self-start flex items-center gap-2 px-3 py-1 bg-white hover:bg-primary-purple text-black text-[8px] font-black rounded-sm transition-colors uppercase tracking-widest group">
                    GET STARTED <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                 </button>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Right Content - Extra space or small elements */}
        <div className="lg:col-span-3 flex flex-col items-end gap-12 order-3">
           {/* Decorative elements or spacer */}
           <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-primary-purple/30 flex items-center justify-center shadow-[0_0_20px_rgba(224,167,255,0.1)]">
              <div className="w-2 h-2 rounded-full bg-primary-purple shadow-[0_0_10px_rgba(224,167,255,0.8)]" />
           </div>
        </div>
      </div>
    </section>
  );
}
