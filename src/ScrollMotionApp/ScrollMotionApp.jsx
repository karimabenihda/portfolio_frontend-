"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./ScrollMotionApp.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin);

const containers = [
  { className: "initial",  style: { left: "60%", top: "5%"  } },
  { className: "second",   style: { left: "10%", top: "25%" } },
  { className: "third",    style: { right: "10%", top: "45%" } },
  { className: "fourth",   style: { left: "20%", top: "65%" } },
  { className: "fifth",    style: { left: "60%", top: "80%" } },
  { className: "sixth",    style: { left: "15%", top: "95%" } },
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
  trigger: ".container.initial",
  start: "clamp(top center)",
  endTrigger: ".gsap-final",
  end: "clamp(top center)",
  scrub: 1,
  scroller: "#smooth-wrapper",  
  markers: true,  
},
      });

      tl.to(".box", {
        duration: 1,
        ease: "none",
        motionPath: {
          path: points,
          curviness: 1.5,
        },
      });
    });
  }

  useEffect(() => {
    const timer = setTimeout(createTimeline, 200);
    window.addEventListener("resize", createTimeline);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", createTimeline);
      if (ctxRef.current) ctxRef.current.revert();
    };
  }, []);

  return (
    <section className="scroll-motion-section">
      <div className="spacer">scroll down</div>

      <div className="main">
        {containers.map(({ className, style }, i) => (
          <div key={i} className={`container ${className}`} style={style}>
            {className === "initial"
              ? <div className="box" />
              : <div className="marker" />
            }
          </div>
        ))}
      </div>

      <div className="gsap-final spacer" />
    </section>
  );
}