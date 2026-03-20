"use client";

import { useState, useMemo } from "react";

type MediaType = "VIDEO" | "IMAGE";

const MEDIA_CATALOG = [
  {
    id: 1,
    title: "QUANTUM_FLUCTUATION_SIM.MOV",
    type: "VIDEO" as MediaType,
    date: "2024.05.21",
    tag: "4K_RENDER",
    imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    aspect: "aspect-[16/9] md:aspect-auto h-64 md:h-[350px]"
  },
  {
    id: 2,
    title: "HARDWARE_ARCHETYPE_01.EXR",
    type: "IMAGE" as MediaType,
    date: "2024.04.12",
    imgUrl: "https://images.unsplash.com/photo-1592659762303-9008ce831f1f?q=80&w=800&auto=format&fit=crop",
    colSpan: "",
    aspect: "h-64 md:h-[350px]"
  },
  {
    id: 3,
    title: "GLOBAL_INFRASTRUCTURE_VIS.MP4",
    type: "VIDEO" as MediaType,
    date: "2024.03.08",
    imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    colSpan: "",
    aspect: "aspect-square md:aspect-auto md:h-[300px]",
    extraClasses: "mix-blend-screen opacity-70"
  },
  {
    id: 4,
    title: "NANO_STRUCTURE_STUDY.TIFF",
    type: "IMAGE" as MediaType,
    date: "2024.02.19",
    imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    colSpan: "",
    aspect: "aspect-square md:aspect-auto md:h-[300px]",
    extraClasses: "filter hue-rotate-180 mix-blend-color-dodge opacity-60"
  },
  {
    id: 5,
    title: "INTERFACE_ERGONOMICS_PC4",
    type: "IMAGE" as MediaType,
    date: "2024.01.05",
    imgUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    colSpan: "",
    aspect: "aspect-square md:aspect-auto md:h-[300px]",
    extraClasses: "grayscale group-hover:grayscale-0 opacity-60"
  },
  {
    id: 6,
    title: "CINEMATIC_REEL_MASTER_2024",
    type: "VIDEO" as MediaType,
    date: "2023.12.10",
    imgUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1600&auto=format&fit=crop",
    colSpan: "md:col-span-2 lg:col-span-3",
    aspect: "h-64 lg:h-[400px]",
    isCinematic: true,
    extraClasses: "opacity-60"
  }
];

const FILTERS = ["ALL_CORES", "VIDEOS", "IMAGES"];
const SORTS = ["DESCENDING", "ASCENDING"];

export default function Gallery() {
  const [filterIdx, setFilterIdx] = useState(0);
  const [sortIdx, setSortIdx] = useState(0);

  const activeFilter = FILTERS[filterIdx];
  const activeSort = SORTS[sortIdx];

  const handleFilterClick = () => setFilterIdx((prev) => (prev + 1) % FILTERS.length);
  const handleSortClick = () => setSortIdx((prev) => (prev + 1) % SORTS.length);

  const filteredAndSortedMedia = useMemo(() => {
    let result = [...MEDIA_CATALOG];
    
    // Filter
    if (activeFilter === "VIDEOS") result = result.filter(m => m.type === "VIDEO");
    if (activeFilter === "IMAGES") result = result.filter(m => m.type === "IMAGE");
    
    // Sort
    result.sort((a, b) => {
      // DESCENDING -> Latest first (2024 -> 2023)
      return activeSort === "DESCENDING" 
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    
    return result;
  }, [activeFilter, activeSort]);

  return (
    <div className="flex flex-col gap-10 font-sans animate-in fade-in duration-700">
      {/* Header */}
      <header className="border-b border-archive-border pb-6 pt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-3 flex items-center gap-3">
              <div className="h-px w-12 bg-archive-cyan/50"></div>
              VISUAL_PORTFOLIO // MEDIA
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">VIDEOGRAPHY_&_VISUALS</h1>
        </div>
        
        <div className="flex gap-4 self-start md:self-auto select-none">
           <div 
              onClick={handleFilterClick}
              className="border border-archive-border bg-archive-gray px-4 py-2 font-mono text-xs text-archive-mute uppercase flex items-center gap-2 cursor-pointer hover:border-archive-cyan/50 hover:text-white transition-colors"
           >
              <span className="text-archive-cyan/50">FILTER:</span> {activeFilter}
           </div>
           <div 
              onClick={handleSortClick}
              className="border border-archive-cyan/30 bg-archive-gray px-4 py-2 font-mono text-xs text-archive-cyan uppercase flex items-center gap-2 cursor-pointer hover:border-archive-cyan transition-colors shadow-[0_0_10px_rgba(0,240,255,0.05)]"
           >
              <span className="text-archive-mute">SORT:</span> {activeSort}
           </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
         <style>{`
           @keyframes popIn {
             from { opacity: 0; transform: scale(0.97) translateY(10px); filter: blur(2px); }
             to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
           }
         `}</style>
         {filteredAndSortedMedia.length === 0 ? (
           <div className="col-span-full py-20 text-center font-mono text-archive-mute">NO_MATCHING_RECORDS_FOUND</div>
         ) : (
           filteredAndSortedMedia.map((item, index) => (
             <div 
                key={`${item.id}-${activeFilter}-${activeSort}`} 
                className={`${item.colSpan} relative group border border-archive-border bg-archive-black overflow-hidden ${item.aspect}`}
                style={{ 
                  animation: 'popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: `${index * 60}ms`,
                  opacity: 0
                }}
             >
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 ${item.extraClasses || 'opacity-80'}`}
                  style={{ backgroundImage: `url('${item.imgUrl}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-archive-black/80 via-transparent to-transparent"></div>
                
                {item.tag && (
                  <div className="absolute top-4 right-4 bg-archive-black/50 backdrop-blur-md px-2 py-1 border border-archive-cyan/30 text-archive-cyan font-mono text-[11px] flex gap-1.5 items-center">
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                     {item.tag}
                  </div>
                )}

                {item.isCinematic && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                     <div className="w-16 h-16 rounded-full border-2 border-archive-cyan bg-archive-black/50 backdrop-blur-sm flex items-center justify-center cursor-pointer group-hover:scale-110 group-hover:bg-archive-cyan/20 transition-all shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-archive-cyan)" stroke="var(--color-archive-cyan)" strokeWidth="1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                     </div>
                  </div>
                )}

                <div className="absolute bottom-4 left-4">
                   <div className="font-mono text-xs text-white tracking-widest uppercase truncate max-w-[200px] md:max-w-full">{item.title}</div>
                   <div className="font-mono text-[9px] text-archive-cyan/70 mt-1 uppercase">{item.type} // {item.date}</div>
                </div>
             </div>
           ))
         )}
      </section>

      {/* Footer Stats Banner */}
      <section className="flex flex-col md:flex-row justify-between items-center bg-archive-gray border-y border-x-0 md:border-x md:border-archive-border py-6 px-8 mt-4 glow-border glow-border-tl glow-border-br relative">
         <div className="absolute left-0 top-0 bottom-0 w-1 bg-archive-cyan"></div>
         <div className="flex flex-wrap gap-12 w-full md:w-auto mb-6 md:mb-0">
            <div>
               <div className="font-mono text-[11px] text-archive-mute uppercase tracking-widest mb-1">MEDIA_COUNT</div>
               <div className="font-mono text-xl text-white font-bold">{filteredAndSortedMedia.length}_DISPLAYED</div>
            </div>
            <div>
               <div className="font-mono text-[11px] text-archive-mute uppercase tracking-widest mb-1">PRODUCTION_READY</div>
               <div className="font-mono text-xl text-archive-cyan font-bold">99.98%_STABLE</div>
            </div>
            <div>
               <div className="font-mono text-[11px] text-archive-mute uppercase tracking-widest mb-1">LAST_UPDATED</div>
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
