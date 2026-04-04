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
import Spinner from "@/components/Spinner";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isLoading) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });

    ScrollTrigger.defaults({
      scroller: "#smooth-content",
    });

    // Refresh ScrollTrigger after a short delay to ensure layout is settled
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      smoother.kill();
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Spinner key="spinner" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        style={{
          visibility: isLoading ? "hidden" : "visible",
          height: isLoading ? "100vh" : "auto",
          overflow: isLoading ? "hidden" : "visible"
        }}
      >
        {/* <Navbar /> */}
        <div id="smooth-wrapper" ref={wrapperRef}>
          <div id="smooth-content" ref={contentRef}>
            <main className="flex flex-col w-full relative">
              <Hero />
              <Ticker />
              <ScrollMotionApp />
              <Services />
              <About />
              <Project />
              {/* Footer */}
              <footer className="bg-dark-bg py-12 px-6 border-t border-white/5 pb-32">
                <Footer />
              </footer>
            </main>
          </div>
        </div>
        <Dock />
      </motion.div>
    </>
  );
}
