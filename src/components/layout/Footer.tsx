export function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-archive-border flex flex-col items-center justify-center text-center mt-8 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-archive-cyan"></div>
      <div className="font-mono text-archive-cyan font-bold tracking-[0.3em] text-sm mb-8">THE_VAULT</div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-mono text-xs text-archive-mute mb-8 tracking-widest uppercase">
        <a href="https://github.com/Shinigami2018" target="_blank" rel="noopener noreferrer" className="hover:text-archive-text hover:underline underline-offset-4 transition-all">GITHUB</a>
        <a href="https://www.linkedin.com/in/sameen-abrar" target="_blank" rel="noopener noreferrer" className="hover:text-archive-text hover:underline underline-offset-4 transition-all">LINKEDIN</a>
        <a href="https://www.youtube.com/@samonhunt2018" target="_blank" rel="noopener noreferrer" className="hover:text-archive-text hover:underline underline-offset-4 transition-all">YOUTUBE</a>
        <a href="https://www.instagram.com/apurbo2018/" target="_blank" rel="noopener noreferrer" className="hover:text-archive-text hover:underline underline-offset-4 transition-all">INSTAGRAM</a>
        <a href="https://mail.google.com/mail/?view=cm&to=sameenpcc2018@gmail.com&su=Portfolio%20Inquiry" target="_blank" rel="noopener noreferrer" className="hover:text-archive-text hover:underline underline-offset-4 transition-all">CONTACT</a>
      </div>
      <div className="font-mono text-[10px] text-archive-mute/50 tracking-[0.2em]">
        © 2026 THE_VAULT // shinigami
      </div>
    </footer>
  )
}
