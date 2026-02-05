import { ShieldCheck, Cloud, Code, Loader2 } from 'lucide-react';

const certifications = [
  {
    icon: ShieldCheck,
    title: "ISC2 Certified in Cybersecurity",
    date: "Dec 2025",
    status: "completed" as const,
    category: "Security",
  },
  {
    icon: Cloud,
    title: "Introduction to Cloud & Cloud Security",
    date: "Udemy",
    status: "completed" as const,
    category: "Cloud",
  },
  {
    icon: Cloud,
    title: "AWS Cloud Practitioner",
    date: "In Progress",
    status: "in-progress" as const,
    category: "Cloud",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-violet rounded-full animate-pulse" />
            <span className="font-mono text-sm text-violet uppercase tracking-wider">Current Momentum</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications & <span className="text-gradient">Learning</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications list */}
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <CertCard key={index} cert={cert} />
            ))}
          </div>

          {/* Python refresh note */}
          <div className="gradient-border h-fit">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-phosphor/10 rounded-lg">
                  <Code className="w-5 h-5 text-phosphor" />
                </div>
                <span className="font-mono text-sm text-phosphor">The Python Refresh</span>
              </div>
              
              <div className="space-y-4">
                <p className="text-secondary-foreground leading-relaxed">
                  Used the <span className="text-phosphor font-medium">Dec 2025 shutdown</span> to refresh 
                  4+ years of Python skills for technical security roles.
                </p>
                
                <div className="p-4 bg-secondary/50 rounded-lg font-mono text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <span className="text-phosphor">$</span>
                    <span>python --version</span>
                  </div>
                  <div className="text-foreground">Python 3.12.0</div>
                  <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                    <span className="text-phosphor">$</span>
                    <span>skills.refresh()</span>
                  </div>
                  <div className="text-phosphor mt-1">✓ AWS Integration</div>
                  <div className="text-phosphor">✓ Security Automation</div>
                  <div className="text-phosphor">✓ Cloud-Native Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CertCard = ({ cert }: { cert: typeof certifications[0] }) => {
  const Icon = cert.icon;
  const isCompleted = cert.status === 'completed';
  
  return (
    <div className="gradient-border card-hover">
      <div className="p-4 flex items-center gap-4">
        <div className={`p-3 rounded-lg ${isCompleted ? 'bg-phosphor/10' : 'bg-violet/10'}`}>
          <Icon className={`w-5 h-5 ${isCompleted ? 'text-phosphor' : 'text-violet'}`} />
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold">{cert.title}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-mono text-muted-foreground">{cert.category}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
          </div>
        </div>

        {isCompleted ? (
          <div className="w-8 h-8 rounded-full bg-phosphor/20 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-phosphor" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-violet/20 flex items-center justify-center">
            <Loader2 className="w-4 h-4 text-violet animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationsSection;
