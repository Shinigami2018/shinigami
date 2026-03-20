"use client";

import { useState, useEffect } from "react";

const words = [
  "ENGINEER.",
  "ARCHIVIST.",
  "DEVELOPER.",
  "SYSTEMS_ADMIN."
];

export function HeroText() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400); // Wait for fade out
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[140px] md:min-h-[180px] mb-4">
      <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-archive-mute mb-2 md:mb-4">
        MEET THE
      </h1>
      <h2 
        className={`text-5xl md:text-7xl font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-archive-cyan to-[#00aaff] italic transition-all duration-400 ease-in-out transform filter drop-shadow-[0_0_20px_rgba(0,240,255,0.3)] ${fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
      >
        {words[index]}
      </h2>
    </div>
  );
}
