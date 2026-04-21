"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import About from "@/components/About";
import Dock from "@/scrollMac/ScrollMac";
import Footer from "../footer/footer";
import Project from "@/projects/Projet";
import ScrollMotionApp from "../ScrollMotionApp/ScrollMotionApp"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

 useEffect(() => {
  const smoother = ScrollSmoother.create({
    wrapper: wrapperRef.current,
    content: contentRef.current,
    smooth: 1.5,
    effects: true,
    normalizeScroll: true,
  });

  // ✅ Tell ALL ScrollTriggers to use the smooth scroller
  ScrollTrigger.defaults({
    scroller: "#smooth-content",
  });

  return () => {
    smoother.kill();
  };
}, []);

  return (
    <>
       <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          <main className="flex flex-col w-full relative">
            <Hero />
            <Ticker />
            <ScrollMotionApp/>
            <Services />
            <About />
            <Project/>
            {/* Footer */}
            <footer className="bg-dark-bg py-12 px-6 border-t border-white/5 pb-32">
             <Footer/>
            </footer>
          </main>
        </div>
      </div>
      <Dock />
    </>
  );
}
