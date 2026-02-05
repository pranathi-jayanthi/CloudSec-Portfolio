import { Code2, Shield, Brain, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "AWS Security Automation",
    subtitle: "Python + AWS Integration",
    description: "Demonstrating Python-AWS integration after a year of governance-focused work. Building automated security workflows and compliance monitoring.",
    tags: ["Python", "AWS", "Lambda", "CloudWatch"],
    icon: Code2,
    status: "In Progress",
    accent: "phosphor" as const,
  },
  {
    id: 2,
    title: "Android Armour",
    subtitle: "AI-Driven Security Framework",
    description: "Scalable AI-driven mobile security framework using FastAPI and AWS. Real-time threat detection with ML-powered analysis.",
    tags: ["FastAPI", "AWS", "TensorFlow", "Android"],
    icon: Shield,
    status: "Active",
    accent: "violet" as const,
  },
  {
    id: 3,
    title: "MRI Anomaly Detection",
    subtitle: "Medical AI Implementation",
    description: "High-level Python implementation using Diffusion Models for medical imaging data. Detecting anomalies in MRI scans with state-of-the-art accuracy.",
    tags: ["Python", "Diffusion Models", "PyTorch", "Medical AI"],
    icon: Brain,
    status: "Completed",
    accent: "phosphor" as const,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-phosphor rounded-full animate-pulse" />
            <span className="font-mono text-sm text-phosphor uppercase tracking-wider">Active Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Proof of <span className="text-gradient">Concept</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Technical projects demonstrating Python expertise applied to security and AI domains.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const Icon = project.icon;
  const accentColor = project.accent === 'phosphor' ? 'phosphor' : 'violet';
  
  return (
    <div className="gradient-border card-hover group">
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg bg-${accentColor}/10 border border-${accentColor}/20`}>
            <Icon className={`w-5 h-5 text-${accentColor}`} />
          </div>
          <span className={`font-mono text-xs px-2 py-1 rounded bg-${accentColor}/10 text-${accentColor}`}>
            {project.status}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1 group-hover:text-phosphor transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-violet font-mono mb-3">{project.subtitle}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="font-mono text-xs px-2 py-1 bg-secondary/50 rounded text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4">
          <button className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-phosphor transition-colors">
            <Github className="w-4 h-4" />
            <span>Code</span>
          </button>
          <button className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-violet transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span>Demo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
