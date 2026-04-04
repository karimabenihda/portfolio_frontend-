"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./ScrollMotionApp.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin);

// Helper to get current month & year
const getCurrentDate = () => {
    return new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
};

const containers = [
  { 
    className: "initial",  
    style: { left: "15%", top: "5%"  },
    type: "EDUCATION",
    title: "Digital Development Diploma",
    institution: "Specialized Institute of Applied Technology at Ait Melloul",
    date: "Sep 2023 - June 2025",
    description: "Full-Stack Web Option"
  },
  { 
    className: "second",   
    style: { right: "15%", top: "25%" },
    type: "EXPERIENCE",
    title: "Arabic and Quran Teaching Platform",
    institution: "DeveloppeurInformatique.ma",
    date: "March 2025 – May 2025",
    description: "Developed modern, responsive user interfaces as a front-end developer using React and Tailwind CSS."
  },
  { 
    className: "third",    
    style: { left: "15%", top: "45%" },
    type: "EXPERIENCE",
    title: "Cash-on-Delivery Sales Platform",
    institution: "Technopeck",
    date: "July 2025 – September 2025",
    description: "Contributed to developing a responsive and secure landing page in Laravel Blade, enhancing usability."
  },
  { 
    className: "fourth",   
    style: { right: "15%", top: "65%" },
    type: "EDUCATION",
    title: "Certification in Artificial Intelligence",
    institution: "Simplon Maghreb",
    date: "Sep 2025 - March 2026",
    description: "AI-driven development and implementation."
  },
  { 
    className: "fifth",    
    style: { left: "15%", top: "85%" },
    type: "EXPERIENCE",
    title: "Fullstack & AI Developer",
    institution: "ZHAcamedy",
    date: `March 2026 - ${getCurrentDate()}`,
    description: "Developing platform to help students study in USA and Canada."
  },
];

export default function ScrollMotionApp() {
  const ctxRef = useRef(null);

  function createTimeline() {
    if (ctxRef.current) ctxRef.current.revert();

    ctxRef.current = gsap.context(() => {
      const box = document.querySelector(".box");
      if (!box) return;

      const boxStartRect = box.getBoundingClientRect();
      const markers = gsap.utils.toArray(".container:not(.initial)");

      const points = markers.map((container) => {
        const marker = container.querySelector(".marker") || container;
        const r = marker.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - (boxStartRect.left + boxStartRect.width / 2),
          y: r.top + r.height / 2 - (boxStartRect.top + boxStartRect.height / 2),
        };
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-motion-section",
          start: "top center",
          endTrigger: ".gsap-final",
          end: "bottom center",
          scrub: 1,
          scroller: "#smooth-wrapper",  
          markers: false,  
        },
      });

      tl.to(".box", {
        duration: 1,
        ease: "none",
        motionPath: {
          path: points,
          curviness: 1,
        },
      });
    });
  }

  useEffect(() => {
    const timer = setTimeout(createTimeline, 300);
    window.addEventListener("resize", createTimeline);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", createTimeline);
      if (ctxRef.current) ctxRef.current.revert();
    };
  }, []);

  return (
    <section className="scroll-motion-section py-20">
      <div className="flex flex-col items-center mb-20">
         <h2 className="text-4xl font-bold text-[#E0A7FF] tracking-widest uppercase mb-2">My Journey</h2>
         <div className="w-24 h-1 bg-gradient-to-r from-[#CC00FF] to-[#E0A7FF]" />
      </div>

      <div className="main">
        {/* The Animated Box (Starts at the first container) */}
        <div className="box-container absolute z-30" style={containers[0].style}>
           <div className="box flex items-center justify-center p-2 w-16 h-16">
              <img 
                src="https://assets.codepen.io/16327/flair-26.png" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_#CC00FF]" 
                alt="Motion Path Marker"
              />
           </div>
        </div>

        {/* The Path Stops */}
        {containers.map(({ className, style, type, title, institution, date, description }, i) => (
          <div key={i} className={`container group ${className}`} style={style}>
             {/* The dot marker (only for non-initial stops) */}
             <div className="marker w-4 h-4 rounded-full bg-[#CC00FF] group-hover:scale-150 transition-all shadow-[0_0_10px_#CC00FF]" />
             
             {/* Content Box */}
             <div className={`absolute w-[280px] md:w-[400px] p-6 bg-[#1B1927]/90 backdrop-blur-xl rounded-2xl border border-white/5 group-hover:border-[#CC00FF]/40 transition-all duration-500 shadow-2xl ${
                style.left ? 'left-[120%] origin-left' : 'right-[120%] origin-right'
             }`}>
                <div className="flex items-center gap-2 mb-2">
                   <span className="px-2 py-0.5 rounded text-[8px] uppercase tracking-widest bg-[#CC00FF]/20 text-[#E0A7FF] font-bold">
                     {type}
                   </span>
                   <div className="text-[10px] text-[#8E8B9E] font-mono">{date}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-[#E0A7FF] transition-colors">{title}</h3>
                <h4 className="text-xs font-semibold text-[#8E8B9E]/80 mb-3">{institution}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">{description}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="gsap-final h-24" />
    </section>
  );
}