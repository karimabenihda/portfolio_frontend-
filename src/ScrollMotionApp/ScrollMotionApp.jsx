"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin"; // Import TextPlugin

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

const experiences = [
  { branch: "main", command: "git init DTS Diploma", title: "Education: DTS Digital Development", institution: "OFPPT: ISTA Ait Melloul", date: "Sep 2023 - Jun 2025", hash: "a7b2c91cfb5320cb92e045a988aaa633f92", desc: "Initialized project: Digital Development Diploma. Full-Stack Web Option." },
  { branch: "feature", command: "git checkout -b feat/arabic-quran-platform", title: "Front-end Internship", institution: "DeveloppeurInformatique.ma", date: "March 2025 – May 2025 ", hash: "4f8e12a656b84f47b58eb1ada5490703ab26", desc: "Designed and developed modern, responsive UIs using React and Tailwind CSS to enhance user experience." },
  { branch: "feature", command: "git commit -m 'Add COD Sales Platform'", title: "Front-end Internship", institution: "Technopeck", date: "July 2025 – September 2025", hash: "9d1s3k0b5320cb92e045a988aaa633f92a1", desc: "Developing a responsive and secure landing page in Laravel Blade, enhancing usability and improving user engagement." },
  { branch: "main", command: "git merge feat/ai-certification", title: "AI Certification Bootcamp", institution: "Simplon Maghreb", date: "Sep 2025 - March 2026", hash: "v8n2m5qcfb5320cb92e045a988aaa633f92z", desc: "Merging web development expertise with MLOps & AI technologies, including machine learning, deep learning, and NLP, to build innovative solutions." },
  { branch: "feature", command: "git checkout -b feat/saas-scaling", title: "Freelance Fullstack Developer", institution: "ZHAcamedy", date: "Mon Apr 05 2024", hash: "z0p4l1w656b84f47b58eb1ada5490703ab26", desc: "Developing high-performance UI components for Vantery SaaS." },
  { branch: "main", command: "git tag -a v1.0.0", title: "E-commerce Redesign", institution: "DISIS MAROC", date: "Thu Apr 24 2026", hash: "r6t9u2ycfb5320cb92e045a988aaa633f92b", desc: "Final infrastructure redesign and e-commerce optimization." },
];

export default function GitGraphJourney() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = useRef(-1);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const markers = gsap.utils.toArray(".marker");
      const box = document.querySelector(".motion-box");
      
      const points = markers.map((marker) => ({
        x: marker.offsetLeft + marker.offsetWidth / 2 - box.offsetWidth / 2,
        y: marker.offsetTop + marker.offsetHeight / 2 - box.offsetHeight / 2,
      }));

      gsap.to(box, {
        scrollTrigger: {
          trigger: ".journey-container",
          start: "top 10%",
          end: "bottom 90%",
          scrub: 1,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (experiences.length - 1));
            setActiveIndex(index);

            // Typing Trigger: Only run if we moved to a NEW index
            if (index !== lastIndex.current) {
              lastIndex.current = index;
              const targetElement = document.querySelector(`#command-${index}`);
              if (targetElement) {
                gsap.to(targetElement, {
                  duration: 0.5,
                  text: experiences[index].command,
                  ease: "none",
                });
              }
            }
          }
        },
        motionPath: { path: points, curviness: 1.2 },
        ease: "none",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="journey-container relative bg-[#0a0a0a] text-[#f8f8f2] overflow-hidden font-mono">
      
      {/* Header: Mac Terminal Style */}
      <header className="max-w-3xl !mx-auto !mb-12 relative z-10 !px-4">
        <div className="bg-[#2d2d2d] rounded-t-lg !p-3 flex items-center gap-2 border-b border-black/20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[11px] text-gray-400 mx-auto">karimabenihda — zsh — 80×24</div>
        </div>
        <div className="bg-[#1e1e1e] !p-6 rounded-b-lg shadow-2xl border border-white/5">
          <span className="text-[#a6e22e]">[karima@portfolio-MacBook-Air]</span>
          <span className="text-white !ml-2">% git log --oneline --graph</span>
        </div>
      </header>


      <div className="relative max-w-6xl !mx-auto !px-6">
        
        {/* Pink Pointer */}
        <div className="motion-box absolute z-50 pointer-events-none w-10 h-10 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#ff79c6] rounded-full shadow-[0_0_15px_#ff79c6]" />
          <div className="absolute inset-0 bg-[#ff79c6]/20 rounded-full animate-ping" />
        </div>

        <div className="flex flex-col   relative">
          {experiences.map((item, i) => (
            <div key={i} className={`flex items-center w-full ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              
              <div className="w-full md:w-[46%]">
                <div className={`
                  relative transition-all duration-500 rounded-lg overflow-hidden border
                  ${i === activeIndex 
                    ? "bg-[#1e1e1e] border-white/20 shadow-2xl scale-100 opacity-100" 
                    : "bg-transparent border-transparent opacity-10 blur-[2px] scale-95"}
                `}>
                  {/* The Typing Command Line */}
                  <div className="bg-[#2d2d2d]/50 !px-4 !py-2 text-[12px] flex items-center gap-2 border-b border-white/5 font-bold">
                     <span className="text-[#a6e22e]">➜</span>
                     <span className="text-[#66d9ef]">~/{item.branch}</span>
                     <span className="text-white/90">
                        $<span id={`command-${i}`} className="!ml-1 border-r-2 border-[#ff79c6] !pr-1">
                           {/* GSAP will type the text here */}
                        </span>
                     </span>
                  </div>

                  {/* Terminal Output (The Result) */}
                  <div className={`!p-5 text-[13px] leading-relaxed transition-opacity duration-1000 ${i === activeIndex ? "opacity-100" : "opacity-0"}`}>
                    <div className="flex flex-wrap gap-2 !mb-1">
                      <span className="text-[#f1fa8c]">commit {item.hash.substring(0, 7)}</span>
                      <span className="text-[#66d9ef] font-bold">(HEAD -&gt; <span className="text-[#ff79c6]">{item.branch}</span>)</span>
                    </div>
                    
                    <div className="text-[#f8f8f2] !mb-4 !pl-1 opacity-80">
                      <p>Author: Karima Ben Ihda &lt;dev@karima.ai&gt;</p>
                      <p>Date: {item.date}</p>
                    </div>
                    
                    <div className="!pl-6 border-l border-white/10 !mb-2">
                      <h3 className="text-[#a6e22e] font-bold text-base !mb-1">{item.title}</h3>
                      <p className="text-gray-400 italic text-[11px] !mb-2">{item.institution}</p>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marker (Node) */}
              <div className={`marker relative w-5 h-5 rounded-full z-10 mx-auto transition-all duration-700
                ${item.branch === "main" ? "-translate-x-8" : "translate-x-8"}
                ${i === activeIndex 
                  ? "bg-[#ff79c6] border-4 border-white shadow-[0_0_20px_#ff79c6]" 
                  : "bg-[#333] border-2 border-white/10"}
              `} />

              <div className="hidden md:block w-[46%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}