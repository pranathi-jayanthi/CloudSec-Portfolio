import { Terminal, ChevronRight } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.png';

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
          {/* Profile Picture */}
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-phosphor to-violet opacity-50 blur-md" />
            <img 
              src={profilePicture} 
              alt="Pranathi Jayanthi" 
              className="relative w-full h-full rounded-full object-cover border-2 border-phosphor/50"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient">Pranathi Jayanthi</span>
          </h1>
          
          {/* Bio */}
          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl">
            Exploring Cloud Security | ISC2 CC | Cybersecurity Risk Assessor @HP Inc | Graduate @SRM AP | AI ML | Cybersecurity | Web Dev
          </p>

          <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
            <span className="px-3 py-1.5 bg-phosphor/10 border border-phosphor/30 rounded-md text-phosphor">
              Cybersecurity @ HP
            </span>
            <span className="px-3 py-1.5 bg-violet/10 border border-violet/30 rounded-md text-violet">
              B.Tech AI & ML Graduate
            </span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Started in Cybersecurity through TPRM, where I developed a{' '}
            <span className="text-phosphor font-medium">risk-first mindset</span>. Now, I'm getting back 
            to my roots in code—applying my Python background to{' '}
            <span className="text-violet font-medium">Cloud Security</span> and{' '}
            <span className="text-violet font-medium">AWS</span>.{' '}
            <span className="text-muted-foreground italic">No hype, just hands-on learning and implementation.</span>
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
