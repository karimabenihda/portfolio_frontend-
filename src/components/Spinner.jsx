"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AdvancedCodeTerminal from "@/components/AdvancedCodeTerminal";

const Spinner = ({ onComplete }) => {
  const [showTerminal, setShowTerminal] = useState(false);
  
  // Progress states for each dependency
  const [fastapi, setFastapi] = useState(0);
  const [uvicorn, setUvicorn] = useState(0);
  const [mlops, setMlops] = useState(0);

  useEffect(() => {
    setShowTerminal(true);

    const runSequence = async () => {
      const animate = async (setter) => {
        for (let i = 0; i <= 100; i += 10) {
          setter(i);
          await new Promise(r => setTimeout(r, 60 + Math.random() * 40));
        }
        setter(100); 
      };

      await animate(setFastapi);
      await animate(setUvicorn);
      await animate(setMlops);
    };

    runSequence();
  }, []);

  const renderAttractiveBar = (p, label, color = "#FF2D55") => {
    const isFinished = p >= 100;
    const segments = 20;
    const filled = Math.floor((p / 100) * segments);
    
    const statusText = isFinished 
      ? `<span style="color: #50FA7B">✔ Done (100%)</span>` 
      : `<span style="color: #8BE9FD; font-size: 10px;">(Installing... ${p}%)</span>`;

    const bar = `<span style="color: ${color}">${"━".repeat(filled)}</span><span style="color: #444">${"━".repeat(segments - filled)}</span>`;
    
    return `
      <div style="font-family: 'Menlo', monospace; margin-bottom: 12px; width: 100%;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
           <span style="color: #F1FA8C;">${label}</span>
           ${statusText}
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="font-size: 14px; letter-spacing: -1px; white-space: nowrap;">${bar}</div>
          <div style="display: flex; gap: 8px; font-size: 11px; white-space: nowrap;">
            <span style="color: #50FA7B;">${isFinished ? '120.5' : (p * 1.2).toFixed(1)}/120.5 MB</span>
            <span style="color: #FF5F56;">${isFinished ? '0.0' : (Math.random() * 2 + 1).toFixed(1)}MB/s</span>
            <span style="color: #8BE9FD;">${isFinished ? '0:00:00' : '0:00:0' + Math.max(0, 4 - Math.floor(p/25))}</span>
          </div>
        </div>
      </div>
    `;
  };

  const terminalLines = [
    { code: "sh init_system.sh", output: "<span style='color: #50FA7B'>✔ System core initialized</span>" },
    { 
      code: "pip install fastapi", 
      output: renderAttractiveBar(fastapi, "Fetching fastapi-v0.109.tar.gz") 
    },
    ...(fastapi >= 100 ? [{ 
      code: "pip install uvicorn", 
      output: renderAttractiveBar(uvicorn, "Downloading uvicorn-runtime") 
    }] : []),
    ...(uvicorn >= 100 ? [{ 
      code: "pip install mlops-tools", 
      output: renderAttractiveBar(mlops, "Processing mlops-platform-assets") 
    }] : []),
    ...(mlops >= 100 ? [{ 
      code: "python main.py", 
      output: "<span style='color: #8BE9FD'>✨ Environment Ready. Launching Karima's Portfolio...</span>" 
    }] : [])
  ];

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0B0A13] !p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#1e1e2e]/90 backdrop-blur-2xl shadow-2xl">
          <div className="flex items-center !px-4 !py-3 bg-[#1e1e2e] border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 text-center !pr-10">
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">karima@terminal — zsh</span>
            </div>
          </div>

          <div className="!p-2">
            <AdvancedCodeTerminal
              lines={terminalLines}
              prompt="karima@portfolio ~ % "
              typingSpeed={60}
              pauseAfterLine={100}
              className="!bg-transparent !border-none"
              onComplete={() => {
                if (mlops >= 100) setTimeout(onComplete, 1000);
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Spinner;