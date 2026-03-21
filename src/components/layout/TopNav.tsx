"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from '@/contexts/SidebarContext';

export function TopNav() {
  const pathname = usePathname();
  const { toggleSidebar, isOpen } = useSidebar();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'BLOG', href: '/blog' },
    { name: 'ABOUT ME', href: '/about' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-24 flex items-center justify-between px-8 lg:px-12 z-40 bg-archive-black/60 backdrop-blur-md border-b border-archive-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all">
      <div className="font-mono text-archive-cyan font-bold tracking-widest text-lg md:text-xl drop-shadow-[0_0_10px_rgba(0,240,255,0.2)]">
        THE_NEURAL_ARCHIVE
      </div>
      <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-archive-mute">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name}
              href={link.href} 
              className={`transition-colors border-b-2 pb-1 ${
                isActive 
                  ? 'text-archive-cyan border-archive-cyan animate-pulse [animation-duration:2s] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]' 
                  : 'border-transparent hover:text-archive-cyan hover:border-archive-cyan'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        
        {/* Console / Terminal Toggle Button */}
        <button 
          onClick={toggleSidebar}
          title="Open System Console"
          className={`w-10 h-10 border transition-all flex items-center justify-center ml-4 shadow-[0_0_10px_rgba(0,240,255,0.1)] ${
            isOpen 
              ? 'bg-archive-cyan text-archive-black border-archive-cyan' 
              : 'border-archive-cyan text-archive-cyan hover:bg-archive-cyan hover:text-archive-black'
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </button>
      </nav>
      {/* Mobile nav toggle placeholder */}
      <div className="md:hidden text-archive-cyan flex items-center gap-4">
        <button onClick={toggleSidebar} className="border border-archive-cyan p-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </div>
    </header>
  );
}
