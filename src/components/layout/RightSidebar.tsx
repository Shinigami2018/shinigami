"use client";

import { useState } from "react";

export function RightSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (Visible when closed) */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-archive-black border-y border-l border-archive-cyan text-archive-cyan font-mono text-[10px] py-4 px-2 hover:bg-archive-cyan/20 transition-all flex flex-col items-center gap-3 shadow-[0_0_15px_rgba(0,240,255,0.15)] ${isOpen ? 'translate-x-full' : 'translate-x-0'} duration-300 ease-in-out`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        <span style={{ writingMode: 'vertical-rl' }} className="rotate-180 uppercase tracking-widest">CONSOLE</span>
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside 
        className={`fixed right-0 top-0 bottom-0 w-80 border-l border-archive-border flex flex-col bg-archive-black z-50 transition-transform duration-300 ease-in-out shadow-[-10px_0_30px_rgba(0,0,0,0.8)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 -left-12 bg-archive-black border border-archive-border p-2 text-archive-mute hover:text-archive-cyan hover:border-archive-cyan transition-colors z-50 bg-opacity-90 backdrop-blur-md"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        {/* User profile */}
        <div className="h-24 px-6 flex flex-row items-center gap-4 border-b border-archive-border shrink-0">
          <div className="w-10 h-10 bg-archive-border flex items-center justify-center border border-archive-cyan/30 overflow-hidden relative glow-border glow-border-tl">
            <div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/bottts/svg?seed=Archivist01&backgroundColor=0d131a')] bg-cover opacity-80 mix-blend-screen"></div>
          </div>
          <div>
            <div className="font-mono text-xs font-bold text-archive-cyan tracking-wider">ARCHIVIST_01</div>
            <div className="font-mono text-[10px] text-archive-cyan/70 mt-0.5 flex items-center gap-1.5">
               <span className="w-1.5 h-1.5 rounded-full bg-archive-cyan animate-pulse"></span>
               STATUS: ONLINE
            </div>
          </div>
        </div>
        
        {/* Metrics & Content */}
        <div className="flex-1 p-6 space-y-12 overflow-y-auto hidden-scrollbar">
          {/* System metrics */}
          <div className="space-y-4">
            <div className="font-mono text-[10px] text-archive-mute uppercase tracking-widest border-b border-archive-border/50 pb-2">System_Metrics</div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-1.5">
                  <span className="text-archive-mute">CPU_LOAD</span>
                  <span className="text-archive-text">34.2%</span>
                </div>
                <div className="h-1 bg-archive-border w-full relative">
                  <div className="absolute top-0 left-0 h-full bg-archive-cyan w-[34.2%] transition-all duration-1000"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-1.5">
                  <span className="text-archive-mute">SYNC_FREQ</span>
                  <span className="text-archive-text">120 THZ</span>
                </div>
                <div className="h-1 bg-archive-border w-full relative">
                  <div className="absolute top-0 left-0 h-full bg-archive-cyan w-full opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Live feed */}
          <div className="space-y-4">
            <div className="font-mono text-[10px] text-archive-mute uppercase tracking-widest border-b border-archive-border/50 pb-2">Live_Feed</div>
            <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-0 before:w-px before:bg-archive-border">
              {/* Thread item */}
              <div className="relative pl-6">
                 <div className="absolute left-[7px] top-1.5 w-1.5 h-1.5 bg-archive-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
                 <div className="font-mono text-[9px] text-archive-mute tracking-wider">NOW_PLAYING</div>
                 <div className="text-xs text-archive-text font-mono mt-1 glow-border glow-border-tl p-2 bg-archive-gray border border-archive-cyan/20">DEEP_CORE_LOGS_04</div>
              </div>
              {/* Thread item */}
              <div className="relative pl-6">
                 <div className="absolute left-[7px] top-1.5 w-1.5 h-1.5 bg-archive-mute opacity-50"></div>
                 <div className="font-mono text-[9px] text-archive-mute uppercase tracking-wider">New upload detected</div>
                 <div className="text-[11px] text-archive-mute font-sans mt-1">NEURAL_LINK_V5.RAW</div>
                 <div className="font-mono text-[8px] text-archive-mute/40 mt-1">14:22:01</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer / Connect Button */}
        <div className="p-6 border-t border-archive-border bg-archive-black z-10 shrink-0">
          <button className="w-full py-3 bg-archive-cyan/5 border border-archive-cyan/40 text-archive-cyan font-mono text-xs uppercase tracking-widest hover:bg-archive-cyan/20 hover:border-archive-cyan transition-all shadow-[0_0_15px_rgba(0,240,255,0.05)] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            Stay Connected
          </button>
        </div>
      </aside>
    </>
  );
}
