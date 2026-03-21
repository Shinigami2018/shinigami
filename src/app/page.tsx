import Link from 'next/link';
import { HeroText } from '@/components/home/HeroText';
import { InitiateDiveButton } from '@/components/home/InitiateDiveButton';

export default function Home() {
   return (
      <div className="flex flex-col gap-24 font-sans animate-in fade-in duration-1000">
         {/* Hero Section */}
         <section className="relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)] pb-12">
            <div className="inline-block px-4 py-1.5 border border-archive-cyan/30 text-archive-cyan font-mono text-xs uppercase tracking-[0.2em] mb-8 bg-archive-cyan/5 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
               System_Status: Optimized
            </div>
            <HeroText />
            <p className="max-w-2xl text-archive-mute text-base md:text-lg leading-relaxed mt-8 font-mono tracking-wide">
               CSE Undergraduate at Military Institute of Science & Technology.
               <br />
               Specializing in Software Engineering, Open-Source Intelligence, and Aerospace Robotics.
            </p>

            {/* INITIATE DIVE */}
            <InitiateDiveButton />
         </section>

         {/* About Me Section */}
         <section id="about" className="scroll-mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 bg-[#0a0f16]/60 -mx-8 lg:-mx-20 px-8 lg:px-20 py-16 border-y border-archive-border backdrop-blur-sm relative mt-8 md:mt-0">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-archive-cyan/50 to-transparent"></div>
            <div className="md:col-span-4 relative group">
               <div className="aspect-square bg-archive-border relative overflow-hidden border border-archive-cyan/30 p-1">
                  <div
                     className="absolute inset-1 bg-cover bg-center opacity-60 grayscale contrast-125 group-hover:opacity-100 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
                     style={{ backgroundImage: "url('/about_me.jpg')" }}
                  ></div>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-archive-cyan"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-archive-cyan"></div>
               </div>
            </div>
            <div className="md:col-span-8 flex flex-col justify-center">
               <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-archive-cyan/50"></div>
                  ABOUT_ME
               </div>
               <h2 className="text-3xl font-bold mb-10 uppercase tracking-wide leading-tight">Engineering the Interface Between<br /><span className="text-archive-cyan/80">Software and Hardware Systems</span></h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 border border-archive-border bg-archive-black/50 hover:bg-archive-gray/80 transition-all hover:border-archive-cyan/40 group relative overflow-hidden">
                     <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-archive-cyan/0 group-hover:bg-archive-cyan transition-colors"></div>
                     <div className="font-mono text-xs text-archive-cyan mb-3 flex items-center gap-2 tracking-wider">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        SECURITY_INTELLIGENCE
                     </div>
                     <p className="text-sm text-archive-mute leading-relaxed font-mono"><span className="text-white font-semibold">OSINT Instructor</span> & Problem Setter at <span className="text-white font-semibold">MIST Cyber Security Club</span>. Designing educational <span className="text-white font-semibold">cyber-attack exercises</span> and threat paradigms.</p>
                  </div>
                  <div className="p-5 border border-archive-border bg-archive-black/50 hover:bg-archive-gray/80 transition-all hover:border-archive-cyan/40 group relative overflow-hidden">
                     <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-archive-cyan/0 group-hover:bg-archive-cyan transition-colors"></div>
                     <div className="font-mono text-xs text-archive-cyan mb-3 flex items-center gap-2 tracking-wider">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5-4 5-4l3 3"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 4-5 4-5l-3-3"></path></svg>
                        SPACE_ROBOTICS
                     </div>
                     <p className="text-sm text-archive-mute leading-relaxed font-mono"><span className="text-white font-semibold">Communication Subteam Lead</span> for <span className="text-white font-semibold">MIST Mars Rover Society</span>. Focusing on seamless <span className="text-white font-semibold">long distance communication</span> between the rover and the base station.</p>
                  </div>
                  <div className="p-5 border border-archive-border bg-archive-black/50 hover:bg-archive-gray/80 transition-all hover:border-archive-cyan/40 group relative overflow-hidden">
                     <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-archive-cyan/0 group-hover:bg-archive-cyan transition-colors"></div>
                     <div className="font-mono text-xs text-archive-cyan mb-3 flex items-center gap-2 tracking-wider">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                        COMPUTER_SCIENCE
                     </div>
                     <p className="text-sm text-archive-mute leading-relaxed font-mono"><span className="text-white font-semibold">CSE Undergraduate</span> at MIST. Specializing in <span className="text-white font-semibold">low-level hardware</span>, <span className="text-white font-semibold">systems architecture</span>, <span className="text-white font-semibold">operating systems</span>, and <span className="text-white font-semibold">networking</span>.</p>
                  </div>
                  <div className="p-5 border border-archive-border bg-archive-black/50 hover:bg-archive-gray/80 transition-all hover:border-archive-cyan/40 group relative overflow-hidden">
                     <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-archive-cyan/0 group-hover:bg-archive-cyan transition-colors"></div>
                     <div className="font-mono text-xs text-archive-cyan mb-3 flex items-center gap-2 tracking-wider">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        SOFTWARE_ENGINEERING
                     </div>
                     <p className="text-sm text-archive-mute leading-relaxed font-mono">Building highly <span className="text-white font-semibold">scalable architectures</span> using <span className="text-white font-semibold">Node.js</span>, <span className="text-white font-semibold">React</span>, and <span className="text-white font-semibold">MySQL</span>. Experienced in <span className="text-white font-semibold">REST API development</span> and <span className="text-white font-semibold">relational databases</span>.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Featured Projects */}
         <section>
            <div className="flex justify-between items-end mb-10 pb-4 relative">
               <div className="absolute bottom-0 left-0 w-full h-px bg-archive-border"></div>
               <div className="absolute bottom-0 left-0 w-32 h-[2px] bg-archive-cyan"></div>
               <div>
                  <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-2">FEATURED_PROJECTS</div>
                  <h2 className="text-3xl font-bold uppercase tracking-wide">TECHNICAL_REPOSITORY</h2>
               </div>
               <Link href="/projects" className="font-mono text-xs text-archive-cyan hover:text-white transition-colors hidden sm:flex items-center gap-2 tracking-widest uppercase bg-archive-cyan/10 px-4 py-2 border border-archive-cyan/30">
                  EXPLORE_FULL_CATALOG <span className="text-lg leading-none">→</span>
               </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Card 1 */}
               <div className="group border border-archive-border hover:border-archive-cyan/60 transition-all bg-[#0a0e14] flex flex-col h-full relative glow-border glow-border-tl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <div className="h-64 bg-archive-black relative overflow-hidden border-b border-archive-border">
                     <div className="absolute top-4 left-4 z-10 bg-black/60 px-2 py-1 border border-archive-cyan/40 font-mono text-[11px] text-archive-cyan backdrop-blur-md">DESIGN_MOCKUP</div>
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-70 mix-blend-screen"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col relative">
                     <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-archive-cyan transition-colors">ARES_TELEMETRY_V4</h3>
                        <span className="font-mono text-xs text-archive-mute mt-1 border border-archive-border px-1.5 py-0.5">2024.03</span>
                     </div>
                     <p className="text-sm text-archive-mute mb-8 flex-1 leading-relaxed">
                        High-latency telemetry dashboard designed for planetary rovers, prioritizing data integrity across interplanetary distances.
                     </p>
                     <div className="flex gap-3 mt-auto">
                        <span className="bg-archive-cyan/10 border border-archive-cyan/30 px-2 py-1 text-[11px] font-mono text-archive-text uppercase">REACT</span>
                        <span className="bg-archive-gray border border-archive-border px-2 py-1 text-[11px] font-mono text-archive-mute uppercase">GRAPHQL</span>
                        <span className="bg-archive-gray border border-archive-border px-2 py-1 text-[11px] font-mono text-archive-mute uppercase">THREE.JS</span>
                     </div>
                  </div>
               </div>

               {/* Card 2 */}
               <div className="group border border-archive-border hover:border-archive-cyan/60 transition-all bg-[#0a0e14] flex flex-col h-full relative glow-border glow-border-tl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <div className="h-64 bg-archive-black relative overflow-hidden border-b border-archive-border">
                     <div className="absolute top-4 left-4 z-10 bg-archive-cyan/20 px-2 py-1 border border-archive-cyan/40 font-mono text-[11px] text-archive-cyan backdrop-blur-md">PRODUCTION_READY</div>
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-70 mix-blend-screen"></div>
                     <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-archive-cyan rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                        <span className="text-archive-cyan leading-none font-bold">→</span>
                     </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col relative">
                     <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-archive-cyan transition-colors">NEURAL_SENTINEL_AI</h3>
                        <span className="font-mono text-xs text-archive-mute mt-1 border border-archive-border px-1.5 py-0.5">2023.11</span>
                     </div>
                     <p className="text-sm text-archive-mute mb-8 flex-1 leading-relaxed">
                        Real-time heuristic packet analysis tool for identifying network threats using transformer-based models. Automated mitigation protocols.
                     </p>
                     <div className="flex gap-3 mt-auto">
                        <span className="bg-archive-cyan/10 border border-archive-cyan/30 px-2 py-1 text-[11px] font-mono text-archive-text uppercase">RUST</span>
                        <span className="bg-archive-gray border border-archive-border px-2 py-1 text-[11px] font-mono text-archive-mute uppercase">PYTORCH</span>
                        <span className="bg-archive-gray border border-archive-border px-2 py-1 text-[11px] font-mono text-archive-mute uppercase">ONNX</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Milestones */}
         <section className="mb-8">
            <div className="text-center mb-12">
               <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-2">PROFESSIONAL_ACHIEVEMENTS</div>
               <h2 className="text-3xl font-bold uppercase tracking-wide">NOTABLE_MILESTONES</h2>
            </div>

            <div className="flex flex-col gap-3 max-w-4xl mx-auto">
               {[
                  { year: "2024", id: "01", title: "GLOBAL_CTF_FINALIST_2024", subtitle: "DEFCON_QUALIFIER // SECURITY_EXCELLENCE", verified: true },
                  { year: "2023", id: "02", title: "DEAN'S_LIST_EXCELLENCE", subtitle: "COMPUTER_SCIENCE // ACADEMIC_RECORD", verified: true },
                  { year: "2022", id: "03", title: "ENGINEERING_LEAD_ROLE", subtitle: "ROBOTICS_CHALLENGE // SYSTEMS_ARCHITECTURE", verified: true }
               ].map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 bg-archive-gray/40 border border-archive-border hover:border-archive-cyan/40 hover:bg-archive-gray/80 transition-all group relative overflow-hidden">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-archive-border group-hover:bg-archive-cyan transition-colors"></div>
                     <div className="flex items-center gap-6 mb-4 sm:mb-0">
                        <div className="font-mono text-4xl md:text-5xl text-archive-border group-hover:text-archive-cyan/20 transition-colors font-bold ml-2">{item.id}</div>
                        <div>
                           <h3 className="text-base md:text-lg font-bold tracking-wide text-white">{item.title}</h3>
                           <div className="font-mono text-[11px] md:text-xs text-archive-mute mt-1">{item.subtitle}</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-2 px-3 py-1.5 bg-archive-cyan/5 border border-archive-cyan/20 self-start sm:self-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-archive-cyan shadow-[0_0_8px_#00f0ff] animate-pulse"></div>
                        <span className="font-mono text-[11px] text-archive-cyan uppercase tracking-widest">Verified_Credential</span>
                     </div>
                  </div>
               ))}
            </div>
          </section>
       </div>
    );
}
