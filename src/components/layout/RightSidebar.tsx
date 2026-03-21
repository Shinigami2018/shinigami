"use client";

import { useState, useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

function DecodedText({ original, target, trigger }: { original: string; target: string; trigger: boolean }) {
  const [text, setText] = useState(original);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let iteration = 0;
    const finalString = trigger ? target : original;
    
    clearInterval(intervalRef.current as NodeJS.Timeout);
    
    intervalRef.current = setInterval(() => {
      setText(() => {
        return finalString
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) {
              return finalString[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });
      
      if (iteration >= finalString.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }
      
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [trigger, original, target]);

  return (
    <div 
      className={`font-mono text-[13px] font-bold tracking-wider transition-all duration-300 ${
        trigger 
          ? "text-black [text-shadow:0_0_8px_rgba(255,255,255,1),0_0_15px_rgba(255,255,255,0.6)]" 
          : "text-archive-cyan"
      }`}
    >
      {text}
    </div>
  );
}

export function RightSidebar() {
  const { isOpen, setIsOpen } = useSidebar();
  const [cpuLoad, setCpuLoad] = useState(34.2);
  const [syncFreq, setSyncFreq] = useState(120.0);
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);
  const [isOpeningSequence, setIsOpeningSequence] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsOpeningSequence(true);
      const timer = setTimeout(() => {
        setIsOpeningSequence(false);
      }, 3000); // Hold the decoded name for 3 seconds then revert
      return () => clearTimeout(timer);
    } else {
      setIsOpeningSequence(false);
    }
  }, [isOpen]);

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
        <div 
          className="h-24 px-6 flex flex-row items-center gap-4 border-b border-archive-border shrink-0 cursor-pointer group hover:bg-archive-cyan/5 transition-colors"
          onMouseEnter={() => setIsHoveringProfile(true)}
          onMouseLeave={() => setIsHoveringProfile(false)}
        >
          <div className="w-10 h-10 bg-archive-border flex items-center justify-center border border-archive-cyan/30 overflow-hidden relative glow-border glow-border-tl group-hover:border-archive-cyan transition-colors">
            <div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/bottts/svg?seed=Archivist01&backgroundColor=0d131a')] bg-cover opacity-80 mix-blend-screen group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div>
            <DecodedText original="SHINIGAMI_2018" target="SAMEEN ABRAR" trigger={isHoveringProfile || isOpeningSequence} />
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
            
            <div className="space-y-5 pt-2">
              {/* Item 1 */}
              <div className="flex items-center gap-4 group cursor-pointer transition-transform hover:-translate-y-0.5">
                 <div className="w-12 h-12 rounded-md bg-archive-black flex items-center justify-center shrink-0 border border-archive-cyan/10 shadow-[0_0_15px_rgba(0,240,255,0.05)] group-hover:border-archive-cyan/40 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-archive-cyan/50"></div>
                    <svg className="text-archive-cyan" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 12.09l-2.06-8.24A2 2 0 0 0 17.58 2H6.42a2 2 0 0 0-1.94 1.85l-2.06 8.24A4 4 0 0 0 6.3 16.5l1.62-1.62h8.16l1.62 1.62a4 4 0 0 0 3.88-4.41zM8 10H6V8h2v2zm7-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
                 </div>
                 <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-archive-mute uppercase tracking-widest mb-0.5">CURRENTLY_FOLLOWING</span>
                    <span className="font-mono text-xs text-archive-text tracking-wide group-hover:text-archive-cyan transition-colors">STARFIELD_EXPANSION_DEV</span>
                 </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4 group cursor-pointer transition-transform hover:-translate-y-0.5">
                 <div className="w-12 h-12 rounded-md bg-archive-black flex items-center justify-center shrink-0 border border-archive-cyan/10 shadow-[0_0_15px_rgba(0,240,255,0.05)] group-hover:border-archive-cyan/40 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-archive-cyan/50"></div>
                    <svg className="text-archive-cyan" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                 </div>
                 <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-archive-mute uppercase tracking-widest mb-0.5">TECH_STACK_UPDATE</span>
                    <span className="font-mono text-xs text-archive-text tracking-wide group-hover:text-archive-cyan transition-colors">RUST_FOR_KERNEL_DEV</span>
                 </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4 group cursor-pointer transition-transform hover:-translate-y-0.5">
                 <div className="w-12 h-12 rounded-md bg-archive-black flex items-center justify-center shrink-0 border border-archive-cyan/10 shadow-[0_0_15px_rgba(0,240,255,0.05)] group-hover:border-archive-cyan/40 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-archive-cyan/50"></div>
                    <svg className="text-archive-cyan" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="10" width="4" height="10" rx="1"></rect><rect x="10" y="4" width="4" height="16" rx="1"></rect><rect x="16" y="14" width="4" height="6" rx="1"></rect></svg>
                 </div>
                 <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-archive-mute uppercase tracking-widest mb-0.5">MONITORING_STATUS</span>
                    <span className="font-mono text-xs text-archive-text tracking-wide group-hover:text-archive-cyan transition-colors">LOCAL_SERVER_OPTIMAL</span>
                 </div>
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
