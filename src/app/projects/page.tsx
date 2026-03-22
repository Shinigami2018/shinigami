import Link from 'next/link';
import { fetchGitHubRepos, type GitHubRepo } from '@/lib/github';

export const revalidate = 3600; // Revalidate every hour

export default async function Projects() {
  const repos = await fetchGitHubRepos('Shinigami2018');

  return (
    <div className="flex flex-col gap-16 font-sans animate-in fade-in duration-700">
      {/* Header */}
      <header className="border-b border-archive-border pb-6 pt-4">
        <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-3 flex items-center gap-3">
            <div className="h-px w-12 bg-archive-cyan/50"></div>
            PROJECT_PORTFOLIO
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">ENGINEERING_&_DEVELOPMENT</h1>
        <p className="text-archive-mute mt-4 max-w-2xl text-sm leading-relaxed">
           A comprehensive repository of systems engineering, security auditing, and autonomous
           exploration research. <span className="text-archive-cyan italic">Updated 04.24 // Archive Status: Validated.</span>
        </p>
      </header>

      {/* Featured Project */}
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-8 group relative border border-archive-border bg-[#0a0e14] glow-border glow-border-tl">
          <div className="h-[400px] w-full bg-archive-black relative overflow-hidden border-b border-archive-border">
             <div className="absolute top-4 left-4 z-10 bg-archive-cyan/20 px-2 py-1 font-mono text-[11px] text-archive-cyan backdrop-blur-sm border border-archive-cyan/30">MODEL_V4.2</div>
             <div className="absolute bottom-4 right-4 z-10 text-right flex flex-col items-end gap-1">
                <span className="font-mono text-xs text-archive-cyan bg-black/60 px-2 py-1 backdrop-blur-md">COORD: 18.2°N 77.5°E</span>
                <span className="font-mono text-xs text-[#00ff88] bg-black/60 px-2 py-1 backdrop-blur-md">STATUS: ACTIVE</span>
             </div>
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485637701894-09ad422f6de6?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center md:grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 mix-blend-screen scale-100 group-hover:scale-105"></div>
          </div>
          <div className="p-6">
             <h2 className="text-2xl font-bold uppercase tracking-wide text-white group-hover:text-archive-cyan transition-colors">AUTONOMOUS_NAV_UNIT</h2>
          </div>
        </div>

        <div className="xl:col-span-4 flex flex-col gap-6">
          <div className="border border-archive-border bg-archive-gray p-6 flex-1 glow-border glow-border-tr">
             <h3 className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-6">ENGINEERING_SPECIFICATIONS</h3>
             <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between border-b border-archive-border/50 pb-2">
                   <span className="text-archive-mute text-xs">ARCHITECTURE</span>
                   <span className="text-white">Neural-Link Core</span>
                </div>
                <div className="flex justify-between border-b border-archive-border/50 pb-2">
                   <span className="text-archive-mute text-xs">PAYLOAD</span>
                   <span className="text-white">Spectroscopic Array</span>
                </div>
                <div className="flex justify-between border-b border-archive-border/50 pb-2">
                   <span className="text-archive-mute text-xs">TERRAIN LOGIC</span>
                   <span className="text-white">Adaptive Heuristic V3</span>
                </div>
                <div className="flex justify-between pb-2">
                   <span className="text-archive-mute text-xs">LATENCY</span>
                   <span className="text-white">24ms (Local)</span>
                </div>
             </div>
          </div>
          
          <div className="border border-archive-border bg-archive-gray p-6 relative">
             <p className="text-sm text-archive-mute leading-relaxed mb-6">
               Developed a decentralized navigation system for deep-space telemetry modules. This project involved rigorous stress testing of obstacle avoidance algorithms in simulated extraterrestrial terrain.
             </p>
             <Link href="#" className="font-mono text-xs text-archive-cyan hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors">
                VIEW_TECHNICAL_DOCS <span>→</span>
             </Link>
          </div>
        </div>
      </section>

      {/* ── Dynamic GitHub Projects Grid ─────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xl font-bold uppercase tracking-wide">TECHNICAL_PROJECTS</h2>
           <div className="flex-1 h-px bg-archive-border"></div>
        </div>
        
        {repos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-archive-border text-center bg-archive-black/30">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-archive-mute)" strokeWidth="1.5" className="mb-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <p className="font-mono text-xs text-archive-mute uppercase tracking-widest mb-2">NO_REPOSITORIES_FOUND</p>
            <p className="text-archive-mute text-sm max-w-md">The GitHub API fetch returned zero results. Check your connectivity or API token limits.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {repos.map((repo: GitHubRepo) => (
                <a 
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-archive-border bg-archive-black/60 p-6 hover:bg-archive-gray hover:border-archive-cyan/40 transition-all group flex flex-col min-h-[240px] relative glow-border glow-border-br"
                >
                  <div className="flex justify-between items-start mb-5">
                     <span className="font-mono text-[10px] text-archive-mute/60 uppercase tracking-widest flex items-center gap-2">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                       {new Date(repo.updated_at).toLocaleDateString()}
                     </span>
                     {repo.stargazers_count > 0 && (
                        <span className="font-mono text-[10px] text-archive-cyan flex items-center gap-1 bg-archive-cyan/10 px-1.5 py-0.5 border border-archive-cyan/20">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                          {repo.stargazers_count}
                        </span>
                     )}
                  </div>
                  <h3 className="text-lg font-bold uppercase mb-3 group-hover:text-archive-cyan transition-colors leading-tight break-words">
                    {repo.name.replace(/-/g, '_')}
                  </h3>
                  <p className="text-xs text-archive-mute leading-relaxed mb-6 flex-1 line-clamp-3">
                    {repo.description || "No description provided for this technical repository."}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                     {repo.languages?.map(lang => (
                       <span key={lang} className="font-mono text-[9px] font-bold text-archive-black bg-archive-cyan px-1.5 py-0.5 uppercase tracking-widest">
                         {lang}
                       </span>
                     ))}
                     {repo.topics?.slice(0, 3).map((topic) => (
                       <span key={topic} className="font-mono text-[9px] bg-archive-black border border-archive-border px-1.5 py-0.5 text-archive-mute uppercase tracking-widest">
                         {topic}
                       </span>
                     ))}
                  </div>
                </a>
             ))}
          </div>
        )}
      </section>

      {/* Timeline */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-8 mb-16">
         <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">CAREER_MILESTONES</h2>
            <p className="text-sm text-archive-mute mb-8 leading-relaxed">
              A historical overview of architectural achievements, security research breakthroughs, and technical leadership within the industry.
            </p>
            <div className="border border-archive-border bg-archive-black/50 p-5 glow-border glow-border-tl hidden md:block">
               <div className="font-mono text-[11px] text-archive-cyan uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-archive-cyan animate-pulse"></div> LIVE PERFORMANCE METRICS
               </div>
               <div className="space-y-2 font-mono text-[11px] text-archive-mute/80">
                  <div className="flex gap-2"><span>&gt;</span> <span>LAST_SYNC: 04.24.2024</span></div>
                  <div className="flex gap-2"><span>&gt;</span> <span>SUCCESS_RATE: 94.2%</span></div>
                  <div className="flex gap-2"><span>&gt;</span> <span>COMPLIANCE_SCORE: AAA+</span></div>
               </div>
            </div>
         </div>
         <div className="md:col-span-8 lg:col-span-9 relative">
            <div className="absolute left-[7px] top-2 bottom-6 w-px bg-archive-border"></div>
            
            <div className="space-y-12">
               {/* Timeline Item 1 */}
               <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full border-2 border-archive-cyan bg-archive-black z-10 shadow-[0_0_10px_rgba(0,240,255,0.4)]"></div>
                  <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-1 shadow-archive-cyan">Q1 2024 // INDUSTRY_RECOGNITION</div>
                  <h3 className="text-xl font-bold uppercase mb-3">FIRST PLACE: DEF_CON CTF FINALS</h3>
                  <p className="text-sm text-archive-mute leading-relaxed max-w-2xl">
                    Led the offensive security division in a 48-hour continuous technical challenge, successfully identifying and securing critical system vulnerabilities in record time.
                  </p>
               </div>
               
               {/* Timeline Item 2 */}
               <div className="relative pl-10">
                  <div className="absolute left-[3px] top-1.5 w-[9px] h-[9px] rounded-full border-2 border-archive-border bg-archive-black z-10"></div>
                  <div className="font-mono text-xs text-archive-mute uppercase tracking-widest mb-1">Q4 2023 // SYSTEMS_ARCHITECTURE</div>
                  <h3 className="text-xl font-bold uppercase mb-3 text-white/90">NEURAL ARCHIVE V2.0 DEPLOYMENT</h3>
                  <p className="text-sm text-archive-mute leading-relaxed max-w-2xl">
                    Managed the full-cycle migration of 4TB of architectural documentation to a high-availability decentralized storage network with zero downtime.
                  </p>
               </div>
               
               {/* Timeline Item 3 */}
               <div className="relative pl-10">
                  <div className="absolute left-[3px] top-1.5 w-[9px] h-[9px] rounded-full border-2 border-archive-border bg-archive-black z-10"></div>
                  <div className="font-mono text-xs text-archive-mute uppercase tracking-widest mb-1">Q2 2022 // AUTONOMOUS_SYSTEMS</div>
                  <h3 className="text-xl font-bold uppercase mb-3 text-white/90">NAVIGATION LOGIC VALIDATION</h3>
                  <p className="text-sm text-archive-mute leading-relaxed max-w-2xl">
                    Final validation of phase 3 field tests for autonomous telemetry modules, achieving unparalleled path precision in complex, non-deterministic environments.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
