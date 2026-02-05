import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/50 relative">
      {/* Gradient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-phosphor/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-gradient">Let's Connect</span>
            </h3>
            <p className="text-sm text-muted-foreground font-mono">
              Open to opportunities in Cloud Security & Technical Roles
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <SocialLink icon={Github} href="#" label="GitHub" />
            <SocialLink icon={Linkedin} href="#" label="LinkedIn" />
            <SocialLink icon={Mail} href="#" label="Email" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-phosphor">$</span> echo "Built with passion & precision"
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 Pranathi Jayanthi
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, href, label }: { icon: typeof Github; href: string; label: string }) => (
  <a
    href={href}
    aria-label={label}
    className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-phosphor/50 
               hover:bg-phosphor/10 transition-all group"
  >
    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-phosphor transition-colors" />
  </a>
);

export default Footer;
