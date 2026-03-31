"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./footer.css";

gsap.registerPlugin(ScrollTrigger);

const DOWN = "M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z";
const CENTER = "M0-0.3C0-0.3,464,0,1139,0s1139-0.3,1139-0.3V683H0V-0.3z";

export default function Footer() {
  const pathRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const footer = footerRef.current;

    const trigger = ScrollTrigger.create({
      trigger: footer,
      start: "top bottom",
      toggleActions: "play pause resume reverse",
      onEnter: (self) => {
        const velocity = Math.abs(self.getVelocity());
        const variation = velocity / 10000;

        gsap.fromTo(
          path,
          { attr: { d: DOWN } },
          {
            duration: 2,
            attr: { d: CENTER },
            ease: `elastic.out(${1 + variation}, ${0.5 - variation})`,
            overwrite: true,
          }
        );
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={footerRef} className="footer">
        <svg
          ref={null}
          preserveAspectRatio="none"
          id="footer-img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2278 683"
          style={{ display: "block", width: "100%" }}
        >
          <defs>
            <linearGradient
              id="grad-1"
              x1="0"
              y1="0"
              x2="2278"
              y2="683"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.2" stopColor="#fec5fb" />
              <stop offset="0.8" stopColor="#00bae2" />
            </linearGradient>
          </defs>
          <path
            ref={pathRef}
            id="bouncy-path"
            fill="url(#grad-1)"
            d={DOWN}
          />
        </svg>
      </div>
  );
}