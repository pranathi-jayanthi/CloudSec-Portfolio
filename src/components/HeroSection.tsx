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
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main content */}
        <div className="space-y-6 flex flex-col items-center">
          {/* Profile Picture */}
          <div className="relative w-36 h-36 md:w-44 md:h-44">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-phosphor to-violet opacity-50 blur-md" />
            <img 
              src={profilePicture} 
              alt="Pranathi Jayanthi" 
              className="relative w-full h-full rounded-full object-cover border-2 border-phosphor/50"
            />
          </div>

          {/* Terminal header - now under picture */}
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <Terminal className="w-4 h-4 text-phosphor" />
            <span className="text-phosphor">~/</span>
            <span>portfolio</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-violet">init</span>
            <span className="terminal-cursor ml-1 w-2 h-4 bg-phosphor inline-block" />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient">Pranathi Jayanthi</span>
          </h1>
          
          {/* Bio */}
          <p className="text-base md:text-lg text-secondary-foreground max-w-2xl font-mono">
            <span className="text-phosphor">Exploring Cloud Security</span>
            <span className="text-muted-foreground"> | </span>
            <span>ISC2 Certified in Cybersecurity</span>
            <span className="text-muted-foreground"> | </span>
            <span className="text-violet">Cybersecurity Risk Assessor @HP Inc</span>
            <span className="text-muted-foreground"> | </span>
            <span>B. Tech CSE - AI ML Graduate @SRM AP</span>
            <span className="text-muted-foreground"> | </span>
            <span className="text-phosphor">Cybersecurity</span>
            <span className="text-muted-foreground"> | </span>
            <span className="text-violet">AI ML</span>
            <span className="text-muted-foreground"> | </span>
            <span>Web Development</span>
          </p>

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
