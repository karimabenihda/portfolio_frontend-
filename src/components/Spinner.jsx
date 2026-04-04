"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  { text: 'print("Hello World")', lang: "python" },
  { text: 'console.log("Hello World")', lang: "javascript" },
  { text: 'printf("Hello World");', lang: "c" },
  { text: 'System.out.println("Hello World");', lang: "java" },
  { text: '<?php echo "Hello World"; ?>', lang: "php" },
];

const Spinner = ({ onComplete }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 400); // Slightly slower for better readability
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(finalTimer);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0B0A13]"
    >
      <div className="relative flex flex-col items-center px-4">
        {/* Animated code snippet */}
        <div className="h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-center space-x-3"
            >
              {/* Language Tag */}
              <span className="hidden md:block px-2 py-1 text-[10px] uppercase tracking-widest text-[#CC00FF] border border-[#CC00FF]/30 rounded font-bold">
                {greetings[index].lang}
              </span>
              
              <h1 className="text-2xl md:text-5xl font-mono font-bold text-[#E0A7FF] tracking-tight">
                {greetings[index].text}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="mt-12 w-64 h-[1px] bg-white/10 overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${((index + 1) / greetings.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-[#CC00FF] via-[#E0A7FF] to-[#CC00FF]"
          />
          {/* Glowing tip */}
          <motion.div 
             animate={{ left: `${((index + 1) / greetings.length) * 100}%` }}
             className="absolute top-0 w-8 h-full bg-white/20 blur-sm -translate-x-full"
          />
        </div>
        
        {/* Ambient glow */}
        <div className="absolute -z-10 w-[300px] h-[300px] bg-[#CC00FF]/5 blur-[100px] rounded-full" />
      </div>
    </motion.div>
  );
};

export default Spinner;
