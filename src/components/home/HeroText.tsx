"use client";

import { useState, useEffect } from "react";

const words = [
  "CS_MAJOR.",
  "DEVELOPER.",
  "POLYMATH.",
  "VISIONARY."
];

export function HeroText() {
  const [index, setIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Stop rotation after the array is fully traversed once
    if (index >= words.length - 1) return;

    // Add exactly 2.5s of extra delay for the *very first* word ONLY if the browser tab just hard-loaded 
    // This perfectly compensates for the time spent behind the Terminal Loading Screen!
    const isFirstHardLoad = index === 0 && typeof window !== "undefined" && performance.now() < 3000;
    const delay = isFirstHardLoad ? 5100 : 2500;

    const timeout = setTimeout(() => {
      setIsGlitching(true); // Start glitch transition
      
      // Swap the word while rapidly glitching
      setTimeout(() => {
        setIndex((prev) => prev + 1);
        
        // Finalize glitch and settle on new word
        setTimeout(() => {
           setIsGlitching(false);
        }, 150);
      }, 200); 
    }, delay);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[140px] md:min-h-[180px] mb-4">
      <h1 className="text-4xl md:text-5xl font-light tracking-[0.25em] uppercase text-archive-mute mb-2 md:mb-4">
        MEET THE
      </h1>
      <h2 
        className={`text-6xl md:text-8xl font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-archive-cyan to-[#00aaff] italic filter drop-shadow-[0_0_20px_rgba(0,240,255,0.3)] ${isGlitching ? 'glitch-effect opacity-80' : 'opacity-100 transition-opacity duration-300'}`}
      >
        {words[index]}
      </h2>
    </div>
  );
}
