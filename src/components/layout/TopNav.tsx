import Link from 'next/link';

export function TopNav() {
  return (
    <header className="absolute top-0 left-0 right-0 h-24 flex items-center justify-between px-8 lg:px-12 z-40">
      <div className="font-mono text-archive-cyan font-bold tracking-widest text-lg md:text-xl">
        THE_NEURAL_ARCHIVE
      </div>
      <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-archive-mute">
        <Link href="/" className="hover:text-archive-cyan transition-colors border-b-2 border-transparent hover:border-archive-cyan pb-1">HOME</Link>
        <Link href="/projects" className="hover:text-archive-cyan transition-colors border-b-2 border-transparent hover:border-archive-cyan pb-1">PROJECTS</Link>
        <Link href="/gallery" className="hover:text-archive-cyan transition-colors border-b-2 border-transparent hover:border-archive-cyan pb-1">GALLERY</Link>
        <Link href="/blog" className="hover:text-archive-cyan transition-colors border-b-2 border-transparent hover:border-archive-cyan pb-1">BLOG</Link>
        <Link href="#" className="hover:text-archive-cyan transition-colors border-b-2 border-transparent hover:border-archive-cyan pb-1">YOUTUBE</Link>
      </nav>
      {/* Mobile nav toggle placeholder */}
      <div className="md:hidden text-archive-cyan flex items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </div>
    </header>
  );
}
