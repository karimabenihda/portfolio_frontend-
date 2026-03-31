"use client";
import { ArrowUpRight, Monitor, Send, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "BRAND BUILDING & STRATEGY.",
      icon: <Monitor size={48} className="text-primary-lime" />,
      desc: "Lorem ipsum dolor sit amet consectetur elit elit tellus luctus nec ullamcorper matti pulvinar dapibus leo.",
    },
    {
      title: "CREATIVE DIGITAL SOLUTION.",
      icon: <Send size={48} className="text-primary-lime" />,
      desc: "Lorem ipsum dolor sit amet consectetur elit elit tellus luctus nec ullamcorper matti pulvinar dapibus leo.",
      highlighted: true,
    },
    {
      title: "MARKETING & CAMPAIGN.",
      icon: <Megaphone size={48} className="text-primary-lime" />,
      desc: "Lorem ipsum dolor sit amet consectetur elit elit tellus luctus nec ullamcorper matti pulvinar dapibus leo.",
    },
  ];

  return (
    <section className="bg-dark-bg w-full py-24 md:py-40 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-[10%] left-[5%] w-8 h-8 md:w-12 md:h-12 bg-primary-purple/20 rotate-45 animate-pulse blur-xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 lg:gap-24 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 max-w-4xl">
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-4">
                <div className="w-10 md:w-14 h-[2px] bg-primary-purple" />
                <span className="text-primary-purple text-xs md:text-sm font-bold tracking-[0.3em] uppercase">WHAT WE DO</span>
             </div>
             <h2 className="text-white text-4xl md:text-7xl font-black leading-[1.1] tracking-tighter uppercase max-w-3xl">
                DESIGNING FOR SEAMLESS AND ENJOYABLE INTERACTIONS.
             </h2>
          </div>
          <button className="flex items-center gap-2 px-6 py-4 border border-white/10 text-white text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-primary-purple hover:text-black transition-all rounded-sm group">
            ALL SERVICES <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full mt-12 md:mt-24">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`group flex flex-col gap-6 md:gap-8 p-8 md:p-12 border ${
                service.highlighted 
                ? "border-primary-purple bg-primary-purple shadow-[0_0_40px_rgba(224,167,255,0.15)]" 
                : "border-white/5 bg-card-bg hover:border-primary-purple/50"
              } transition-all duration-500 rounded-sm cursor-pointer relative overflow-hidden`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform ${service.highlighted ? "bg-black/10" : "bg-white/5"}`}>
                  {service.highlighted 
                    ? <div className="text-black">{service.icon}</div>
                    : <div className="text-primary-purple">{service.icon}</div>
                  }
                </div>
                <div className={`w-10 h-10 md:w-12 md:h-12 border rounded-full flex items-center justify-center transition-colors ${service.highlighted ? "border-black/20 bg-black text-white" : "border-white/10 group-hover:bg-primary-purple group-hover:text-black group-hover:border-primary-purple"}`}>
                   <ArrowUpRight size={20} />
                </div>
              </div>
              
              <div className="flex flex-col gap-4 mt-8 md:mt-12">
                 <h3 className={`text-2xl md:text-4xl font-black leading-tight ${service.highlighted ? "text-black" : "text-white group-hover:text-primary-purple"} transition-colors uppercase`}>
                   {service.title}
                 </h3>
                 <p className={`text-sm md:text-md leading-relaxed font-bold tracking-wide ${service.highlighted ? "text-black/70" : "text-gray-mid group-hover:text-white/60"} transition-colors`}>
                   {service.desc}
                 </p>
              </div>

               {/* Hover visual effect for non-highlighted */}
               {!service.highlighted && (
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary-purple group-hover:w-full transition-all duration-700" />
               )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
