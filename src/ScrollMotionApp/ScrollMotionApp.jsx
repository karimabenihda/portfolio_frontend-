"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const experiences = [
  { 
    type: "EDUCATION",
    title: "Digital Development Diploma - DTS",
    institution: "OFPPT Ait Melloul",
    date: "2023 - 2025",
    description: "Full-Stack Web Option. Focused on modern web architectures and system design."
  },
  { 
    type: "INTERN",
    title: "Arabic and Quran Platform",
    institution: "DeveloppeurInformatique.ma",
    date: "Mar 2025 – May 2025",
    description: "Built responsive UIs using React and Tailwind CSS, focusing on accessibility."
  },
  { 
    type: "INTERN",
    title: "Cash-on-Delivery Sales Platform",
    institution: "Technopeck",
    date: "July 2025 – Sep 2025",
    description: "Developed secure landing pages and optimized database queries using Laravel."
  },
  { 
    type: "BOOTCAMP",
    title: "AI Certification",
    institution: "Simplon Maghreb",
    date: "Sep 2025 - Mar 2026",
    description: "Specialized in AI-driven development, focusing on Python and MLOps workflows."
  },
  { 
    type: "FREELANCE",
    title: "Fullstack & AI Developer",
    institution: "ZHAcamedy",
    date: "Mar 2026 - Apr 2026",
    description: "Architected high-performance UI components for the Vantery SaaS platform."
  },
  { 
    type: "FREELANCE",
    title: "Fullstack & AI Developer",
    institution: "DISIS MAROC",
    date: "Apr 2026 - May 2026",
    description: "Redesigned e-commerce infrastructure for improved performance and UX conversion."
  },
];

export default function ScrollMotionApp() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const markers = gsap.utils.toArray(".marker");
      const box = document.querySelector(".motion-box");
      
      // Calculate coordinates relative to the container
      const points = markers.map((marker) => ({
        x: marker.offsetLeft + marker.offsetWidth / 2 - box.offsetWidth / 2,
        y: marker.offsetTop + marker.offsetHeight / 2 - box.offsetHeight / 2,
      }));

      gsap.to(box, {
        scrollTrigger: {
          trigger: ".journey-container",
          start: "top 20%",
          end: "bottom 80%",
          scrub: 1.5, // Smoother follow
        },
        motionPath: {
          path: points,
          curviness: 1.5,
          autoRotate: true,
        },
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="journey-container relative py-32 bg-[#050505] text-white overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#5227FF] to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#5227FF] to-transparent" />
      </div>

      <header className="text-center mb-32 relative z-10">
        <span className="text-[#5227FF] font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Chronicles</span>
        <h2 className="font-bartle text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
          My Journey
        </h2>
      </header>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* THE INNOVATIVE TRACKER (PIN) */}
        <div className="motion-box absolute z-50 pointer-events-none flex items-center justify-center w-12 h-12">
          <div className="absolute w-14 h-14 border border-[#5227FF]/20 rounded-full animate-[spin_6s_linear_infinite]" />
          <div className="absolute w-10 h-10 border border-[#5227FF]/40 rounded-full animate-ping opacity-20" />
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#5227FF] rounded-full blur-xl opacity-40 scale-150" />
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5227FF" strokeWidth="2.5" className="drop-shadow-[0_0_15px_#5227FF]">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
        </div>

        {/* TIMELINE ITEMS */}
        <div className="flex flex-col gap-32 relative">
          {/* Central Path (Visual Only) */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/5 hidden md:block" />

          {experiences.map((item, i) => (
            <div 
              key={i} 
              className={`flex flex-col md:flex-row items-center w-full ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Card Content */}
              <div className="w-full md:w-[42%] group">
                <div className="relative p-8 bg-[#0D0D0D] border border-white/5 rounded-2xl hover:border-[#5227FF]/40 transition-all duration-700 hover:shadow-[0_0_60px_rgba(82,39,255,0.1)]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#5227FF] bg-[#5227FF]/10 px-3 py-1 rounded-sm uppercase">
                      {item.type}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest">{item.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
                    {item.institution}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed font-light italic">
                    "{item.description}"
                  </p>
                </div>
              </div>

              {/* Dynamic Marker Stop */}
              <div className="marker relative my-12 md:my-0 w-3 h-3 rounded-full bg-white/10 z-10 mx-auto transition-transform duration-500 group-hover:scale-150">
                 <div className="absolute inset-0 bg-[#5227FF] rounded-full blur-sm opacity-0 group-hover:opacity-100" />
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-[42%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}