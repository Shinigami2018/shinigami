export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px w-12 bg-archive-cyan/50"></div>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-archive-text">About<span className="text-archive-cyan">_</span>Me</h1>
      </div>
      
      <div className="border border-archive-border bg-archive-black/40 p-8 backdrop-blur-sm font-mono text-archive-mute">
        {/* The user can add their blank page content here */}
        <div className="animate-pulse flex items-center gap-3">
          <div className="w-2 h-4 bg-archive-cyan"></div>
          Awaiting input sequence...
        </div>
      </div>
    </div>
  );
}
