export default function Blog() {
  return (
    <div className="flex flex-col gap-16 font-sans animate-in fade-in duration-700">
      {/* Header */}
      <header className="border-b border-archive-border pb-6 pt-4">
        <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-3 flex items-center gap-3">
            <div className="h-px w-12 bg-archive-cyan/50"></div>
            CONTENT_FEED // BLOG_&_MEDIA
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">INSIGHTS_&_PUBLICATIONS</h1>
        <p className="text-archive-mute mt-5 max-w-xl text-sm md:text-base leading-relaxed">
           Decentralized media stream. Accessing archived visual data and neural-encoded technical documentation from the deep-core repository.
        </p>
      </header>

      {/* Latest Videos Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-bold uppercase tracking-wide flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-archive-cyan flex items-center justify-center">
                 <div className="w-2 h-2 bg-archive-cyan rounded-full animate-pulse"></div>
              </div>
              LATEST_VIDEOS
           </h2>
           <span className="font-mono text-[11px] text-archive-mute uppercase tracking-widest hidden sm:block">CATALOG_ID: DX22P</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Video 1 */}
           <div className="group cursor-pointer">
              <div className="h-48 md:h-[220px] bg-archive-border relative overflow-hidden mb-4 border border-archive-border group-hover:border-archive-cyan/40 transition-colors glow-border glow-border-tl">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"></div>
                 {/* Play Icon */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded border border-archive-cyan/50 bg-archive-black/50 backdrop-blur-md flex items-center justify-center group-hover:bg-archive-cyan/20 transition-all group-hover:scale-110">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-archive-cyan)" stroke="var(--color-archive-cyan)" strokeWidth="1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                 </div>
                 {/* Duration Badge */}
                 <div className="absolute bottom-3 left-3 bg-black/80 font-mono text-[11px] text-white px-2 py-1 border border-archive-border">14:22 // 4K</div>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-2 group-hover:text-archive-cyan transition-colors">NEURAL_NETWORK_ARCHITECTURE_V4</h3>
              <p className="text-sm text-archive-mute leading-relaxed max-w-sm">
                Exploration of multi-layered synapse simulation within the latest archive construct.
              </p>
           </div>
           
           {/* Video 2 */}
           <div className="group cursor-pointer">
              <div className="h-48 md:h-[220px] bg-archive-border relative overflow-hidden mb-4 border border-archive-border group-hover:border-archive-cyan/40 transition-colors glow-border glow-border-tl">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 filter hue-rotate-180"></div>
                 {/* Play Icon */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded border border-archive-cyan/50 bg-archive-black/50 backdrop-blur-md flex items-center justify-center group-hover:bg-archive-cyan/20 transition-all group-hover:scale-110">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-archive-cyan)" stroke="var(--color-archive-cyan)" strokeWidth="1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                 </div>
                 {/* Duration Badge */}
                 <div className="absolute bottom-3 left-3 bg-black/80 font-mono text-[11px] text-white px-2 py-1 border border-archive-border">06:45 // 4K</div>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-2 group-hover:text-archive-cyan transition-colors">DEEP_SPACE_TELEMETRY_LOGGING</h3>
              <p className="text-sm text-archive-mute leading-relaxed max-w-sm">
                Deciphering raw radio bursts from the Orion Sector using the Neural Engine.
              </p>
           </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8 border-b border-archive-border pb-4">
           <h2 className="text-2xl font-bold uppercase tracking-wide flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-archive-cyan)" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              ARTICLES_&_RESOURCES
           </h2>
           <span className="font-mono text-[11px] text-archive-mute uppercase tracking-widest">ENTRIES: 124</span>
        </div>
        
        <div className="flex flex-col gap-0 border-y border-archive-border">
           {/* Article 1 */}
           <article className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-archive-border hover:bg-archive-gray/30 transition-colors group px-4 -mx-4">
              <div className="md:col-span-3 flex flex-col font-mono text-xs mt-1 space-y-1">
                 <span className="text-archive-cyan group-hover:text-white transition-colors">MAR_24_2024</span>
                 <span className="text-archive-mute">ARCHIVIST_01</span>
              </div>
              <div className="md:col-span-9">
                 <h3 className="text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-archive-cyan transition-colors">OPTIMIZING_LATENCY_IN_NEURAL_LINKS</h3>
                 <p className="text-archive-mute text-sm leading-relaxed mb-4 max-w-3xl">
                   To maintain high-fidelity data transfer between human consciousness and the archive, latency must remain below the 0.5ms threshold. This entry discusses the use of sub-atomic packet routing.
                 </p>
                 <button className="font-mono text-xs text-archive-cyan uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                    READ ARTICLE <span>→</span>
                 </button>
              </div>
           </article>
           
           {/* Article 2 */}
           <article className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-archive-border hover:bg-archive-gray/30 transition-colors group px-4 -mx-4">
              <div className="md:col-span-3 flex flex-col font-mono text-xs mt-1 space-y-1">
                 <span className="text-archive-cyan group-hover:text-white transition-colors">FEB_12_2024</span>
                 <span className="text-archive-mute">SYSTEM_BOT</span>
              </div>
              <div className="md:col-span-9">
                 <h3 className="text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-archive-cyan transition-colors">THE_ETHICS_OF_DATA_IMMORTALITY</h3>
                 <p className="text-archive-mute text-sm leading-relaxed mb-4 max-w-3xl">
                   When a mind is archived, who owns the resulting dataset? Exploring the legal and philosophical implications of the "Neural Preservation Act" of 2088.
                 </p>
                 <button className="font-mono text-xs text-archive-cyan uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                    READ ARTICLE <span>→</span>
                 </button>
              </div>
           </article>
           
           {/* Article 3 */}
           <article className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 hover:bg-archive-gray/30 transition-colors group px-4 -mx-4">
              <div className="md:col-span-3 flex flex-col font-mono text-xs mt-1 space-y-1">
                 <span className="text-archive-cyan group-hover:text-white transition-colors">JAN_30_2024</span>
                 <span className="text-archive-mute">ARCHIVIST_01</span>
              </div>
              <div className="md:col-span-9">
                 <h3 className="text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-archive-cyan transition-colors">GHOST_IN_THE_SERVER_FARM</h3>
                 <p className="text-archive-mute text-sm leading-relaxed mb-4 max-w-3xl">
                   Identifying anomalies within the cooling sectors of Node-7. We suspect unauthorized neural ghosting or leftover sentient fragments from previous upload attempts.
                 </p>
                 <button className="font-mono text-xs text-archive-cyan uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                    READ ARTICLE <span>→</span>
                 </button>
              </div>
           </article>
        </div>
      </section>
    </div>
  );
}
