"use client";

import { useState, useEffect } from "react";
import { useSidebar } from "@/contexts/SidebarContext";

export function RightSidebar() {
  const { isOpen, setIsOpen } = useSidebar();
  const [cpuLoad, setCpuLoad] = useState(34.2);
  const [syncFreq, setSyncFreq] = useState(120.0);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCpuLoad(prev => {
        let newLoad = prev + (Math.random() * 12 - 5);
        if (newLoad > 92) return 85 + Math.random() * 5;
        if (newLoad < 18) return 22 + Math.random() * 5;
        return Number(newLoad.toFixed(1));
      });

      setSyncFreq(prev => {
        let newFreq = prev + (Math.random() * 6 - 3);
        if (newFreq > 132) return 125 + Math.random() * 3;
        if (newFreq < 108) return 112 + Math.random() * 3;
        return Number(newFreq.toFixed(1));
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <>
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
        {/* User profile */}
        <div className="h-24 px-6 flex flex-row items-center gap-4 border-b border-archive-border shrink-0">
          <div className="w-10 h-10 bg-archive-border flex items-center justify-center border border-archive-cyan/30 overflow-hidden relative glow-border glow-border-tl">
            <div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/bottts/svg?seed=Archivist01&backgroundColor=0d131a')] bg-cover opacity-80 mix-blend-screen"></div>
          </div>
          <div>
            <div className="font-mono text-xs font-bold text-archive-cyan tracking-wider">SHINIGAMI_2018</div>
            <div className="font-mono text-xs text-green-400/80 mt-0.5 flex items-center gap-1.5">
               <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
               STATUS: ONLINE
            </div>
          </div>
        </div>
        
        {/* Metrics & Content */}
        <div className="flex-1 p-6 space-y-12 overflow-y-auto hidden-scrollbar">
          {/* System metrics */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-archive-mute uppercase tracking-widest border-b border-archive-border/50 pb-2">System_Metrics</div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-mono text-xs mb-1.5">
                  <span className="text-archive-mute">CPU_LOAD</span>
                  <span className="text-archive-text">{cpuLoad.toFixed(1)}%</span>
                </div>
                <div className="h-1 bg-archive-border w-full relative">
                  <div 
                    className="absolute top-0 left-0 h-full bg-archive-cyan transition-all duration-1000 ease-in-out"
                    style={{ width: `${cpuLoad}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-xs mb-1.5">
                  <span className="text-archive-mute">SYNC_FREQ</span>
                  <span className="text-archive-text">{syncFreq.toFixed(1)} THZ</span>
                </div>
                <div className="h-1 bg-archive-border w-full relative">
                  <div 
                    className="absolute top-0 left-0 h-full bg-archive-cyan opacity-80 transition-all duration-1000 ease-in-out"
                    style={{ width: `${(syncFreq / 140) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Live feed */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-archive-mute uppercase tracking-widest border-b border-archive-border/50 pb-2">Live_Feed</div>
            <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-0 before:w-px before:bg-archive-border">
              {/* Thread item */}
              <div className="relative pl-6">
                 <div className="absolute left-[7px] top-1.5 w-1.5 h-1.5 bg-archive-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
                 <div className="font-mono text-[11px] text-archive-mute tracking-wider">NOW_PLAYING</div>
                 <div className="text-xs text-archive-text font-mono mt-1 glow-border glow-border-tl p-2 bg-archive-gray border border-archive-cyan/20">DEEP_CORE_LOGS_04</div>
              </div>
              {/* Thread item */}
              <div className="relative pl-6">
                 <div className="absolute left-[7px] top-1.5 w-1.5 h-1.5 bg-archive-mute opacity-50"></div>
                 <div className="font-mono text-[11px] text-archive-mute uppercase tracking-wider">New upload detected</div>
                 <div className="text-[11px] text-archive-mute font-sans mt-1">NEURAL_LINK_V5.RAW</div>
                 <div className="font-mono text-[10px] text-archive-mute/40 mt-1">14:22:01</div>
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
