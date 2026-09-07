import { HeroText } from '@/components/home/HeroText';

const TRANSMISSION_LINKS = [
  {
    id: "github",
    label: "GITHUB",
    identifier: "@Shinigami2018",
    description: "Open-source repositories, system software, robotics tooling, and algorithmic experiments.",
    href: "https://github.com/Shinigami2018",
    badge: "CORE_REPOSITORY",
    status: "ONLINE",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    label: "YOUTUBE",
    identifier: "@samonhunt2018",
    description: "Visual transmissions, devlogs, technical walkthroughs, and creative media productions.",
    href: "https://www.youtube.com/@samonhunt2018",
    badge: "BROADCAST_FEED",
    status: "TRANSMITTING",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    identifier: "Sameen Abrar",
    description: "Professional background, verified engineering credentials, industry contacts, and achievements.",
    href: "https://www.linkedin.com/in/sameen-abrar",
    badge: "CAREER_UPLINK",
    status: "CONNECTED",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "INSTAGRAM",
    identifier: "@apurbo2018",
    description: "Daily dispatches, behind-the-scenes snapshots, photography, and personal chronicles.",
    href: "https://www.instagram.com/apurbo2018/",
    badge: "VISUAL_LOGS",
    status: "ACTIVE",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "DIRECT_TRANSMISSION",
    identifier: "sameenabrar121@gmail.com",
    description: "Direct email terminal for project inquiries, technical collaboration, speaking, and consulting.",
    href: "https://mail.google.com/mail/?view=cm&to=sameenabrar121@gmail.com&su=Portfolio%20Inquiry",
    badge: "COMMS_PORT",
    status: "READY",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

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
          Specializing in Software Engineering, Open-Source Intelligence, and Space Robotics.
        </p>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="scroll-mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 bg-[#0a0f16]/60 -mx-4 sm:-mx-8 lg:-mx-20 px-4 sm:px-8 lg:px-20 py-12 md:py-16 border-y border-archive-border backdrop-blur-sm relative mt-4 md:mt-0"
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-archive-cyan/50 to-transparent"></div>
        <div className="md:col-span-4 relative group max-w-[240px] sm:max-w-xs md:max-w-none mx-auto md:mx-0 w-full">
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-10 uppercase tracking-wide leading-tight text-left">
            Engineering the Interface Between
            <br />
            <span className="text-archive-cyan/80">Software and Hardware Systems</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-archive-border bg-archive-black/50 hover:bg-archive-gray/80 transition-all hover:border-archive-cyan/40 group relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-archive-cyan/0 group-hover:bg-archive-cyan transition-colors"></div>
              <div className="font-mono text-xs text-archive-cyan mb-3 flex items-center gap-2 tracking-wider">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                SECURITY_INTELLIGENCE
              </div>
              <p className="text-sm text-archive-mute leading-relaxed font-mono">
                <span className="text-white font-semibold">Vice President</span> & Mentor Committee Lead, <span className="text-white font-semibold">OSINT Instructor</span> at <span className="text-white font-semibold">MIST Cyber Security Club</span>. Champion at <span className="text-white font-semibold">Responsible AI Summit 2026</span> for autonomous sentry defense systems.
              </p>
            </div>
            <div className="p-5 border border-archive-border bg-archive-black/50 hover:bg-archive-gray/80 transition-all hover:border-archive-cyan/40 group relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-archive-cyan/0 group-hover:bg-archive-cyan transition-colors"></div>
              <div className="font-mono text-xs text-archive-cyan mb-3 flex items-center gap-2 tracking-wider">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5-4 5-4l3 3"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 4-5 4-5l-3-3"></path>
                </svg>
                SPACE_ROBOTICS
              </div>
              <p className="text-sm text-archive-mute leading-relaxed font-mono">
                <span className="text-white font-semibold">Team Lead</span> (ex-Communication Subteam Lead) for <span className="text-white font-semibold">MIST Mars Rover Society</span>. 2x Global Top-15 Finalist at <span className="text-white font-semibold">University Rover Challenge (URC, USA)</span>, placing 11th worldwide in 2026.
              </p>
            </div>
            <div className="p-5 border border-archive-border bg-archive-black/50 hover:bg-archive-gray/80 transition-all hover:border-archive-cyan/40 group relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-archive-cyan/0 group-hover:bg-archive-cyan transition-colors"></div>
              <div className="font-mono text-xs text-archive-cyan mb-3 flex items-center gap-2 tracking-wider">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
                COMPUTER_SCIENCE
              </div>
              <p className="text-sm text-archive-mute leading-relaxed font-mono">
                <span className="text-white font-semibold">CSE Undergraduate</span> at MIST. Specializing in{" "}
                <span className="text-white font-semibold">systems architecture</span>,{" "}
                <span className="text-white font-semibold">networking</span>,{" "}
                <span className="text-white font-semibold">embedded hardware</span> (Teensy, ESP32), and{" "}
                <span className="text-white font-semibold">operating systems</span>.
              </p>
            </div>
            <div className="p-5 border border-archive-border bg-archive-black/50 hover:bg-archive-gray/80 transition-all hover:border-archive-cyan/40 group relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-archive-cyan/0 group-hover:bg-archive-cyan transition-colors"></div>
              <div className="font-mono text-xs text-archive-cyan mb-3 flex items-center gap-2 tracking-wider">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                SOFTWARE_ENGINEERING
              </div>
              <p className="text-sm text-archive-mute leading-relaxed font-mono">
                Architecting distributed full-stack systems using <span className="text-white font-semibold">Node.js</span>, <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Next.js</span>, and <span className="text-white font-semibold">relational & NoSQL databases</span> (MySQL, MongoDB, OracleDB).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-mt-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 pb-4 relative gap-4">
          <div className="absolute bottom-0 left-0 w-full h-px bg-archive-border"></div>
          <div className="absolute bottom-0 left-0 w-32 h-[2px] bg-archive-cyan"></div>
          <div>
            <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-archive-cyan shadow-[0_0_8px_#00f0ff] animate-pulse"></span>
              ACADEMIC_RECORDS // INSTITUTIONAL_CREDENTIALS
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white">
              EDUCATION & BACKGROUND
            </h2>
          </div>
          <div className="font-mono text-xs text-archive-mute tracking-wider flex items-center gap-2 self-start sm:self-end bg-archive-cyan/5 px-3 py-1.5 border border-archive-cyan/20">
            <span className="w-1.5 h-1.5 rounded-full bg-archive-cyan"></span>
            VERIFIED_ACADEMICS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MIST */}
          <div className="group border border-archive-border hover:border-archive-cyan/70 transition-all duration-300 bg-[#0a0e14]/90 hover:bg-[#0f1722] p-6 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-archive-border group-hover:bg-archive-cyan transition-colors duration-300"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-archive-cyan/20 group-hover:border-archive-cyan transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-archive-cyan/20 group-hover:border-archive-cyan transition-colors"></div>

            <div>
              <div className="flex justify-between items-start gap-2 mb-3 pb-3 border-b border-archive-border/50">
                <span className="font-mono text-[11px] text-archive-cyan bg-archive-cyan/10 border border-archive-cyan/30 px-2 py-0.5 uppercase tracking-wider">
                  UNDERGRADUATE
                </span>
                <span className="font-mono text-[11px] text-archive-mute">
                  2023 – PRESENT
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-archive-cyan transition-colors leading-snug mb-1">
                Military Institute of Science and Technology
              </h3>
              <div className="text-sm text-archive-cyan/90 font-mono mb-2">
                BSc in Computer Science and Engineering
              </div>
              <div className="font-mono text-xs text-archive-mute flex items-center gap-2 mb-4">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Dhaka, Bangladesh
              </div>
            </div>

            <div className="pt-3 border-t border-archive-border/30 flex items-center justify-between font-mono text-xs">
              <span className="text-archive-mute">MERIT_INDEX:</span>
              <span className="text-archive-cyan font-bold bg-archive-cyan/10 px-2 py-0.5 border border-archive-cyan/20">
                CGPA 3.39 / 4.00
              </span>
            </div>
          </div>

          {/* Pabna Cadet College - HSC */}
          <div className="group border border-archive-border hover:border-archive-cyan/70 transition-all duration-300 bg-[#0a0e14]/90 hover:bg-[#0f1722] p-6 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-archive-border group-hover:bg-archive-cyan transition-colors duration-300"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-archive-cyan/20 group-hover:border-archive-cyan transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-archive-cyan/20 group-hover:border-archive-cyan transition-colors"></div>

            <div>
              <div className="flex justify-between items-start gap-2 mb-3 pb-3 border-b border-archive-border/50">
                <span className="font-mono text-[11px] text-green-400 bg-green-500/10 border border-green-500/30 px-2 py-0.5 uppercase tracking-wider">
                  HIGHER SECONDARY (HSC)
                </span>
                <span className="font-mono text-[11px] text-archive-mute">
                  CLASS OF 2022
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-archive-cyan transition-colors leading-snug mb-1">
                Pabna Cadet College
              </h3>
              <div className="text-sm text-archive-cyan/90 font-mono mb-2">
                Higher Secondary Certificate (Science)
              </div>
              <div className="font-mono text-xs text-archive-mute flex items-center gap-2 mb-4">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Pabna, Bangladesh
              </div>
            </div>

            <div className="pt-3 border-t border-archive-border/30 flex items-center justify-between font-mono text-xs">
              <span className="text-archive-mute">MERIT_INDEX:</span>
              <span className="text-green-400 font-bold bg-green-500/10 px-2 py-0.5 border border-green-500/20">
                GPA 5.00 / 5.00
              </span>
            </div>
          </div>

          {/* Pabna Cadet College - SSC */}
          <div className="group border border-archive-border hover:border-archive-cyan/70 transition-all duration-300 bg-[#0a0e14]/90 hover:bg-[#0f1722] p-6 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-archive-border group-hover:bg-archive-cyan transition-colors duration-300"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-archive-cyan/20 group-hover:border-archive-cyan transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-archive-cyan/20 group-hover:border-archive-cyan transition-colors"></div>

            <div>
              <div className="flex justify-between items-start gap-2 mb-3 pb-3 border-b border-archive-border/50">
                <span className="font-mono text-[11px] text-green-400 bg-green-500/10 border border-green-500/30 px-2 py-0.5 uppercase tracking-wider">
                  SECONDARY SCHOOL (SSC)
                </span>
                <span className="font-mono text-[11px] text-archive-mute">
                  CLASS OF 2020
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-archive-cyan transition-colors leading-snug mb-1">
                Pabna Cadet College
              </h3>
              <div className="text-sm text-archive-cyan/90 font-mono mb-2">
                Secondary School Certificate (Science)
              </div>
              <div className="font-mono text-xs text-archive-mute flex items-center gap-2 mb-4">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Pabna, Bangladesh
              </div>
            </div>

            <div className="pt-3 border-t border-archive-border/30 flex items-center justify-between font-mono text-xs">
              <span className="text-archive-mute">MERIT_INDEX:</span>
              <span className="text-green-400 font-bold bg-green-500/10 px-2 py-0.5 border border-green-500/20">
                GPA 5.00 / 5.00
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Links & Channels Section */}
      <section id="links" className="scroll-mt-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 pb-4 relative gap-4">
          <div className="absolute bottom-0 left-0 w-full h-px bg-archive-border"></div>
          <div className="absolute bottom-0 left-0 w-32 h-[2px] bg-archive-cyan"></div>
          <div>
            <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-archive-cyan shadow-[0_0_8px_#00f0ff] animate-pulse"></span>
              TRANSMISSION_CHANNELS // EXTERNAL_NODES
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white">
              CONNECT & FOLLOW
            </h2>
          </div>
          <div className="font-mono text-xs text-archive-mute tracking-wider flex items-center gap-2 self-start sm:self-end bg-archive-cyan/5 px-3 py-1.5 border border-archive-cyan/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75"></span>
            STATUS: ACTIVE_DISPATCH
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRANSMISSION_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group border border-archive-border hover:border-archive-cyan/70 transition-all duration-300 bg-[#0a0e14]/90 hover:bg-[#0f1722] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] ${
                link.id === 'contact' ? 'md:col-span-2' : ''
              }`}
            >
              {/* Animated hover gradient line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-archive-border group-hover:bg-archive-cyan transition-colors duration-300"></div>

              {/* Corner HUD accents */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-archive-cyan/20 group-hover:border-archive-cyan transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-archive-cyan/20 group-hover:border-archive-cyan transition-colors duration-300"></div>

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-5 gap-4 pb-4 border-b border-archive-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded bg-archive-black flex items-center justify-center text-archive-cyan group-hover:text-white group-hover:bg-archive-cyan/20 border border-archive-cyan/20 group-hover:border-archive-cyan/60 transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-archive-cyan transition-colors duration-300">
                        {link.label}
                      </h3>
                      <span className="font-mono text-xs text-archive-mute tracking-wider group-hover:text-archive-text transition-colors">
                        {link.identifier}
                      </span>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] text-archive-cyan bg-archive-cyan/10 border border-archive-cyan/30 px-2.5 py-1 uppercase tracking-wider shrink-0 hidden sm:block">
                    {link.badge}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-archive-mute leading-relaxed font-mono mb-6 group-hover:text-archive-text/90 transition-colors">
                  {link.description}
                </p>
              </div>

              {/* Footer action */}
              <div className="flex items-center justify-between pt-4 border-t border-archive-border/30 mt-auto font-mono text-xs">
                <div className="flex items-center gap-2 text-archive-mute">
                  <span className="w-1.5 h-1.5 rounded-full bg-archive-cyan/70 shadow-[0_0_6px_#00f0ff]"></span>
                  <span className="tracking-widest uppercase text-[11px]">{link.status}</span>
                </div>
                <div className="flex items-center gap-2 text-archive-cyan font-semibold tracking-widest uppercase group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>OPEN_CHANNEL</span>
                  <span className="text-base leading-none">↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

