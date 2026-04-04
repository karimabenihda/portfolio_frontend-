"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#F8F8F8] overflow-hidden flex flex-col items-center justify-between py-12 px-6 md:px-12 lg:px-20">
      
      {/* Background Huge Text - Layered behind person */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.h1 
          className="text-[25vw] md:text-[22vw] lg:text-[400px] font-black text-blue-600 leading-none tracking-tighter select-none opacity-100 z-0"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          DESIGNER
        </motion.h1>
      </div>

      <div className="max-w-[1400px] mx-auto w-full h-full flex flex-col items-center relative z-10">
        
        {/* Top Text - "I'm ui/ux" */}
        <motion.div
           initial={{ opacity: 0, y: -40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 1 }}
           className="relative mt-8 z-30 flex items-center gap-10 md:gap-16 pointer-events-none"
        >
           <span className="text-7xl md:text-8xl lg:text-[140px] font-playfair italic text-black leading-none py-1">I'm</span>
           <span className="text-7xl md:text-8xl lg:text-[140px] font-playfair italic text-black leading-none py-1">ui/ux</span>
        </motion.div>

        {/* Central Person Image */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] flex justify-center items-center pointer-events-none z-10">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[4/5] md:aspect-square flex justify-center"
            >
              <Image
                src="/assets/hero-new.png"
                alt="Professional Portrait"
                width={800}
                height={800}
                className="object-contain grayscale contrast-[1.1] brightness-[1.05]"
                priority
              />
            </motion.div>
        </div>

        {/* Bottom Contact Button - Positioned over the shirt area */}
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-40">
           <motion.button 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1.2, duration: 0.8 }}
             whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
             whileTap={{ scale: 0.95 }}
             className="bg-blue-600 text-white font-bold py-5 px-16 rounded-full text-xl tracking-[0.2em] shadow-[0_20px_50px_rgba(37,99,235,0.3)] pointer-events-auto uppercase"
           >
             LET'S CHAT
           </motion.button>
        </div>

        {/* Bottom Layout - Footer of Hero */}
        <div className="mt-auto w-full flex flex-col md:flex-row justify-between items-end gap-8 z-30 pb-4">
          
          {/* Left Info Box */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="max-w-[320px] text-left"
          >
             <div className="w-16 h-[2px] bg-black mb-6" />
             <p className="text-sm md:text-base font-black text-black leading-tight tracking-[0.1em] uppercase">
               SPECIALIZED IN WEB DESIGN,<br />
               UX/UI WEBFLOW, AND FRONT<br />
               END DEVELOPMENT.
             </p>
          </motion.div>

          {/* Right Text Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="max-w-[340px] text-right"
          >
             <p className="text-sm md:text-[15px] font-medium text-gray-600 leading-relaxed text-balance">
               Build a credible, conversion-focused website that shows your ideal client exactly how you can help them.
             </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
