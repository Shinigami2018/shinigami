export default function Gallery() {
  return (
    <div className="flex flex-col gap-10 font-sans animate-in fade-in duration-700">
      {/* Header */}
      <header className="border-b border-archive-border pb-6 pt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="font-mono text-[10px] text-archive-cyan uppercase tracking-widest mb-3 flex items-center gap-3">
              <div className="h-px w-12 bg-archive-cyan/50"></div>
              VISUAL_PORTFOLIO // MEDIA
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">VIDEOGRAPHY_&_VISUALS</h1>
        </div>
        
        <div className="flex gap-4 self-start md:self-auto">
           <div className="border border-archive-border bg-archive-gray px-4 py-2 font-mono text-[10px] text-archive-mute uppercase flex items-center gap-2 cursor-pointer hover:border-archive-cyan/50 transition-colors">
              <span className="text-archive-cyan/50">FILTER:</span> ALL_CORES
           </div>
           <div className="border border-archive-border bg-archive-gray px-4 py-2 font-mono text-[10px] text-archive-cyan uppercase flex items-center gap-2 cursor-pointer hover:border-archive-cyan/80 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.05)]">
              <span className="text-archive-mute">SORT:</span> CHRONOLOGICAL
           </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Large Item (Spans 2 cols) */}
         <div className="md:col-span-2 relative group border border-archive-border bg-archive-black overflow-hidden aspect-[16/9] md:aspect-auto h-64 md:h-[350px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-archive-black/80 via-transparent to-transparent"></div>
            <div className="absolute top-4 right-4 bg-archive-black/50 backdrop-blur-md px-2 py-1 border border-archive-cyan/30 text-archive-cyan font-mono text-[9px] flex gap-1.5 items-center">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
               4K_RENDER
            </div>
            <div className="absolute bottom-4 left-4">
               <div className="font-mono text-[10px] text-white tracking-widest uppercase">QUANTUM_FLUCTUATION_SIM.MOV</div>
            </div>
         </div>
         
         {/* Item */}
         <div className="relative group border border-archive-border bg-archive-black overflow-hidden h-64 md:h-[350px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592659762303-9008ce831f1f?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-archive-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
               <div className="font-mono text-[10px] text-white tracking-widest uppercase">HARDWARE_ARCHETYPE_01.EXR</div>
            </div>
         </div>
         
         {/* Item */}
         <div className="relative group border border-archive-border bg-archive-black overflow-hidden aspect-square md:aspect-auto md:h-[300px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 mix-blend-screen"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-archive-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
               <div className="font-mono text-[9px] text-white tracking-widest uppercase truncate max-w-[200px]">GLOBAL_INFRASTRUCTURE_VIS.MP4</div>
            </div>
         </div>
         
         {/* Item */}
         <div className="relative group border border-archive-border bg-archive-black overflow-hidden aspect-square md:aspect-auto md:h-[300px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 filter hue-rotate-180 mix-blend-color-dodge"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-archive-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
               <div className="font-mono text-[9px] text-white tracking-widest uppercase">NANO_STRUCTURE_STUDY.TIFF</div>
            </div>
         </div>
         
         {/* Item */}
         <div className="relative group border border-archive-border bg-archive-black overflow-hidden aspect-square md:aspect-auto md:h-[300px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-archive-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
               <div className="font-mono text-[9px] text-white tracking-widest uppercase">INTERFACE_ERGONOMICS_PC4</div>
            </div>
         </div>
         
         {/* Wide Item Bottom */}
         <div className="md:col-span-2 lg:col-span-3 relative group border border-archive-border bg-archive-black overflow-hidden h-64 lg:h-[400px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-90 transition-opacity duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-archive-black/90 via-archive-black/20 to-transparent"></div>
            
            {/* Play Button Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
               <div className="w-16 h-16 rounded-full border-2 border-archive-cyan bg-archive-black/50 backdrop-blur-sm flex items-center justify-center cursor-pointer group-hover:scale-110 group-hover:bg-archive-cyan/20 transition-all shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-archive-cyan)" stroke="var(--color-archive-cyan)" strokeWidth="1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
               </div>
               <div className="font-mono text-sm text-archive-text tracking-[0.3em] uppercase mt-6 drop-shadow-lg">CINEMATIC_REEL_MASTER_2024</div>
            </div>
         </div>
      </section>

      {/* Footer Stats Banner */}
      <section className="flex flex-col md:flex-row justify-between items-center bg-archive-gray border-y border-x-0 md:border-x md:border-archive-border py-6 px-8 mt-4 glow-border glow-border-tl glow-border-br relative">
         <div className="absolute left-0 top-0 bottom-0 w-1 bg-archive-cyan"></div>
         <div className="flex flex-wrap gap-12 w-full md:w-auto mb-6 md:mb-0">
            <div>
               <div className="font-mono text-[9px] text-archive-mute uppercase tracking-widest mb-1">MEDIA_COUNT</div>
               <div className="font-mono text-xl text-white font-bold">1,402_FILES</div>
            </div>
            <div>
               <div className="font-mono text-[9px] text-archive-mute uppercase tracking-widest mb-1">PRODUCTION_READY</div>
               <div className="font-mono text-xl text-archive-cyan font-bold">99.98%_STABLE</div>
            </div>
            <div>
               <div className="font-mono text-[9px] text-archive-mute uppercase tracking-widest mb-1">LAST_UPDATED</div>
               <div className="font-mono text-xl text-white font-bold">2024.05.22 // 14:00Z</div>
            </div>
         </div>
         <button className="w-full md:w-auto bg-archive-black border border-archive-border px-8 py-3 font-mono text-xs text-archive-mute uppercase tracking-widest hover:border-archive-cyan/50 hover:text-archive-cyan transition-colors">
            LOAD_MORE_ASSETS
         </button>
      </section>
    </div>
  );
}
