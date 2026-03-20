"use client";

import React from 'react';

export function InitiateDiveButton() {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      onClick={handleScroll} 
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group opacity-70 hover:opacity-100 transition-all duration-700 z-10"
      aria-label="Scroll down to About section"
    >
       <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-archive-mute group-hover:text-archive-cyan transition-colors duration-500 mb-6 drop-shadow-sm ml-2">
         INITIATE_DIVE
       </span>
       <div className="relative flex items-center justify-center">
         {/* Expanding outer ring on hover */}
         <div className="absolute inset-[-15px] rounded-full border border-archive-cyan/0 group-hover:border-archive-cyan/30 scale-50 group-hover:scale-100 transition-all duration-700 ease-out bg-archive-cyan/0 group-hover:bg-archive-cyan/5"></div>
         {/* Core animated chevron */}
         <svg className="text-archive-mute group-hover:text-archive-cyan transition-colors duration-500 animate-bounce drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v16M19 13l-7 7-7-7"/></svg>
       </div>
    </button>
  );
}
