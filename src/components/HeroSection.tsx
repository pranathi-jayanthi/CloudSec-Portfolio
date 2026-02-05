import { Terminal, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-phosphor/10 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-6 font-mono text-sm text-muted-foreground">
          <Terminal className="w-4 h-4 text-phosphor" />
          <span className="text-phosphor">~/</span>
          <span>portfolio</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-violet">init</span>
          <span className="terminal-cursor ml-1 w-2 h-4 bg-phosphor inline-block" />
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient">Pranathi Jayanthi</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
            <span className="px-3 py-1.5 bg-phosphor/10 border border-phosphor/30 rounded-md text-phosphor">
              Cybersecurity @ HP
            </span>
            <span className="px-3 py-1.5 bg-violet/10 border border-violet/30 rounded-md text-violet">
              B.Tech AI & ML Graduate
            </span>
          </div>

          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl leading-relaxed">
            Started in Cybersecurity through TPRM, where I developed a{' '}
            <span className="text-phosphor font-medium">risk-first mindset</span>. Now, I'm getting back 
            to my roots in code—applying my Python background to{' '}
            <span className="text-violet font-medium">Cloud Security</span> and{' '}
            <span className="text-violet font-medium">AWS</span>.{' '}
            <span className="text-muted-foreground italic">No hype, just hands-on learning and implementation.</span>
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 pt-6 border-t border-border/50">
            <Stat label="Years in Tech" value="4+" accent="phosphor" />
            <Stat label="National Wins" value="3" accent="violet" />
            <Stat label="B.Tech CGPA" value="9.01" accent="phosphor" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-mono text-xs">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-phosphor/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value, accent }: { label: string; value: string; accent: 'phosphor' | 'violet' }) => (
  <div className="flex flex-col">
    <span className={`text-3xl font-bold font-mono ${accent === 'phosphor' ? 'text-phosphor' : 'text-violet'}`}>
      {value}
    </span>
    <span className="text-sm text-muted-foreground">{label}</span>
  </div>
);

export default HeroSection;
