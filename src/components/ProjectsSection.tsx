import { Code2, Shield, Brain, ExternalLink, Github, Cloud } from 'lucide-react';
import { Card } from './ui/card';

const projects = [
  {
    id: 1,
    title: "Detect Public S3 Buckets",
    subtitle: "Python + AWS",
    description: "My first Cloud Security Project: AWS lambda function in python to 'Detect Public S3 Buckets' using AWS SDK - Boto3 with least privilege implementation using custom IAM policies",
    tags: ["Python", "AWS Lambda", "Boto3 AWS SDK"],
    icon: Cloud,
    status: "Completed",
    accent: "violet" as const,
    githubUrl: "https://github.com/pranathi-jayanthi/AWS-Lambda-to-Detect-Public-S3-Buckets.git",
  },
  {
    id: 2,
    title: "Quality Control of Brain MRI Registrations",
    subtitle: "Python + AI ML",
    description: "Fully Automated Quality Control of Rigid & Affine Registrations of T1w and T2w MRI in big data using Diffusion Models",
    tags: ["Python", "TensorFlow", "Generative AI"],
    icon: Brain,
    status: "Completed",
    accent: "violet" as const,
    githubUrl: "https://github.com/pranathi-jayanthi/Quality-Control-Of-MRI-Registrations.git",
  },
  {
    id: 3,
    title: "Credit Card Approval Prediction",
    subtitle: "Python + Machine Learning",
    description: "Comparing the performance of Supervised Machine Learning algorithms like Logistic Regression, Support Vector Machine and Random Forest for Credit Card Approval Prediction.",
    tags: ["Python", "Numpy", "Pandas", "ML Algorithms"],
    icon: Shield,
    status: "Completed",
    accent: "violet" as const,
    githubUrl: "https://github.com/pranathi-jayanthi/Credit-Card-Approval-Prediction.git",
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
            <span className="font-mono text-sm text-phosphor uppercase tracking-wider">Projects Built</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Proof of <span className="text-gradient">Concept</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Key projects demonstrating expertise in Python, AWS, Cloud Security and AI ML.
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
          <a 
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-phosphor transition-colors group/link"
  >
    <Github className="w-4 h-4" />
    <span>Code</span>
    <ExternalLink className="w-3 h-3 opacity-0 -ml-1 group-hover/link:opacity-100 transition-opacity" />
  </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
