"use client";

import { useState, useEffect } from "react";

const BOOT_LOGS = [
  "ESTABLISHING SECURE HANDSHAKE_...",
  "BYPASSING FIREWALL PROTOCOLS_...",
  "LOADING CORE ASSETS // FRAGMENT_1_...",
  "LOADING CORE ASSETS // FRAGMENT_2_...",
  "DECRYPTING ARCHIVAL METADATA_...",
  "SYNCHRONIZING SYSTEM CLOCK_...",
  "MOUNTING UI MODULES [OK]",
  "SYSTEMS ONLINE."
];

export function LoadingScreen() {
  const [isMounted, setIsMounted] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    
    // Type out the logs sequentially
    const logInterval = setInterval(() => {
      if (currentIndex < BOOT_LOGS.length) {
        setLogs(prev => [...prev, BOOT_LOGS[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(logInterval);
        // Start fade out sequence once finished
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => setIsMounted(false), 800); // Unmount after fade finishes
        }, 500);
      }
    }, 200); // 200ms per new log line

    // Artificial Progress bar math
    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
           clearInterval(progressInterval);
           return 100;
        }
        return p + Math.floor(Math.random() * 20) + 5;
      });
    }, 150);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // Prevent rendering at all if already skipped
  if (!isMounted) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#06090e] flex flex-col justify-end p-8 md:p-16 font-mono transition-opacity duration-700 ease-in-out ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-60 z-0"></div>

      <div className="absolute top-8 left-8 text-[10px] md:text-xs text-archive-mute animate-pulse tracking-widest uppercase z-10">
        ARCHIVE_OS v2.0 // TERMINAL // ROOT_ACCESS
      </div>
      
      <div className="flex flex-col gap-2 mb-10 max-w-2xl z-10">
        {logs.map((log, i) => (
          <div key={i} className={`text-xs md:text-sm tracking-widest uppercase ${i === BOOT_LOGS.length - 1 ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-sm md:text-base mt-2' : 'text-archive-cyan drop-shadow-[0_0_5px_rgba(0,240,255,0.3)]'} animate-in fade-in slide-in-from-bottom-2 duration-200`}>
            <span className="text-archive-mute mr-3 opacity-60">{'>'}</span> {log}
          </div>
        ))}
        {/* Blinking cursor block simulating working state */}
        {logs.length < BOOT_LOGS.length && (
          <div className="text-archive-cyan text-xs md:text-sm animate-pulse tracking-widest mt-1">
             <span className="text-archive-mute mr-3 opacity-60">{'>'}</span> <span className="w-2.5 h-4 bg-archive-cyan inline-block align-middle shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
          </div>
        )}
      </div>

      <div className="w-full max-w-md z-10 mt-4 md:mt-8">
        <div className="flex justify-between font-mono text-[10px] md:text-xs text-archive-cyan mb-3 tracking-widest uppercase">
           <span>SYSTEM_BOOTSTRAP</span>
           <span>{Math.min(progress, 100)}%</span>
        </div>
        <div className="w-full h-px md:h-[2px] bg-archive-border overflow-hidden relative">
           <div 
             className="absolute top-0 left-0 h-full bg-archive-cyan transition-all duration-150 shadow-[0_0_15px_rgba(0,240,255,0.8)]"
             style={{ width: `${Math.min(progress, 100)}%` }}
           ></div>
        </div>
      </div>
    </div>
  );
}
