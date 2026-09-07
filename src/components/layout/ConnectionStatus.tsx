"use client";

import { useEffect, useState, useRef } from "react";

export function ConnectionStatus() {
  const [fps, setFps] = useState(60);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Fluctuate FPS between 54 and 60 while scrolling
      const randomFps = Math.floor(Math.random() * (60 - 54 + 1) + 54);
      setFps(randomFps);
      
      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Return to a stable 60fps shortly after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        setFps(60);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div className="fixed bottom-3 left-3 sm:bottom-6 sm:left-6 z-40 bg-[#05070a]/90 backdrop-blur-md border border-[#1a2533] py-2 px-3 sm:py-2.5 sm:px-4 flex items-center gap-2.5 sm:gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.5)] scale-90 sm:scale-100 origin-bottom-left">
      <div 
        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full animate-pulse transition-colors duration-100 ${
           fps < 58 
            ? 'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]' 
            : 'bg-[#00ddaa] shadow-[0_0_8px_rgba(0,221,170,0.6)]'
        }`}
      ></div>
      <div className="font-mono text-[10px] sm:text-[11px] text-archive-mute uppercase tracking-[0.15em] w-[150px] sm:w-[170px]">
        CONNECTION_SECURE // {fps}FPS
      </div>
    </div>
  );
}
