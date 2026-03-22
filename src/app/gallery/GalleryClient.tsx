"use client";

import { useState, useMemo } from "react";

export type MediaType = "VIDEO" | "IMAGE";

export type GalleryMedia = {
  id: string | number;
  title: string;
  type: MediaType;
  date: string;
  tag?: string;
  imgUrl: string;
  colSpan?: string;
  aspect?: string;
  extraClasses?: string;
  isCinematic?: boolean;
  videoUrl?: string; // e.g. youtube link
};

const FILTERS = ["ALL_CORES", "VIDEOS", "IMAGES"];
const SORTS = ["DESCENDING", "ASCENDING"];

export default function GalleryClient({ initialMedia }: { initialMedia: GalleryMedia[] }) {
  const [filterIdx, setFilterIdx] = useState(0);
  const [sortIdx, setSortIdx] = useState(0);

  const activeFilter = FILTERS[filterIdx];
  const activeSort = SORTS[sortIdx];

  const handleFilterClick = () => setFilterIdx((prev) => (prev + 1) % FILTERS.length);
  const handleSortClick = () => setSortIdx((prev) => (prev + 1) % SORTS.length);

  const filteredAndSortedMedia = useMemo(() => {
    let result = [...initialMedia];
    
    // Filter
    if (activeFilter === "VIDEOS") result = result.filter(m => m.type === "VIDEO");
    if (activeFilter === "IMAGES") result = result.filter(m => m.type === "IMAGE");
    
    // Sort
    result.sort((a, b) => {
      // DESCENDING -> Latest first
      return activeSort === "DESCENDING" 
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    
    return result;
  }, [initialMedia, activeFilter, activeSort]);

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
        
        <div className="flex gap-4 self-start md:self-auto select-none z-10">
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
           filteredAndSortedMedia.map((item, index) => {
             const CardComponent = item.videoUrl ? 'a' : 'div';
             const cardProps = item.videoUrl ? { href: item.videoUrl, target: "_blank", rel: "noopener noreferrer" } : {};
             
             return (
               <CardComponent 
                  key={`${item.id}-${activeFilter}-${activeSort}`} 
                  {...cardProps}
                  className={`${item.colSpan || ''} relative group border border-archive-border bg-archive-black overflow-hidden ${item.aspect || 'aspect-video md:aspect-auto md:h-[300px]'} block hover:border-archive-cyan/40 transition-colors cursor-pointer glow-border glow-border-tl`}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-archive-black/90 via-archive-black/20 to-transparent"></div>
                  
                  {item.tag && (
                    <div className="absolute top-4 right-4 bg-archive-black/50 backdrop-blur-md px-2 py-1 border border-archive-cyan/30 text-archive-cyan font-mono text-[11px] flex gap-1.5 items-center">
                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                       {item.tag}
                    </div>
                  )}

                  {/* Play Button Overlay for Videos */}
                  {item.type === "VIDEO" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className="w-14 h-14 rounded-full border border-archive-cyan/50 bg-archive-black/80 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-archive-cyan/20 transition-all shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-archive-cyan)" stroke="var(--color-archive-cyan)" strokeWidth="1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                       </div>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 pr-12">
                     <div className="font-mono text-sm text-white tracking-widest uppercase truncate font-bold group-hover:text-archive-cyan transition-colors">{item.title}</div>
                     <div className="font-mono text-[9px] text-archive-mute mt-1.5 uppercase flex items-center gap-2">
                        {item.type} <span className="text-archive-cyan/50">//</span> {item.date} 
                     </div>
                  </div>
               </CardComponent>
             )
           })
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
      </section>
    </div>
  );
}
