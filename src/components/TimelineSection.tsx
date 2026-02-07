import { Briefcase, GraduationCap } from 'lucide-react';

const timelineItems = [
  {
    period: "2021 - 2025",
    title: "B.Tech CSE, AI & ML",
    description: "Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning",
    type: "education" as const,
  },
  {
    period: "Jan 2025 - June 2025",
    title: "HP Internship",
    role: "Cybersecurity Risk Assessor",
    description: "Third-Party Risk Management and security assessments",
    type: "work" as const,
  },
  {
    period: "July 2025 - Present",
    title: "HP Full-Time",
    role: "Cybersecurity Risk Assessor",
    description: "Continuing risk assessment and security governance",
    type: "work" as const,
    current: true,
  },
];

const TimelineSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-phosphor/5 rounded-full blur-[100px]" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-4 h-4 text-phosphor" />
            <span className="font-mono text-sm text-phosphor uppercase tracking-wider">Journey</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Career <span className="text-gradient">Timeline</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-phosphor via-violet to-phosphor/30" />
          
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ 
  item, 
  index 
}: { 
  item: typeof timelineItems[0]; 
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const Icon = item.type === 'education' ? GraduationCap : Briefcase;
  const accentColor = item.type === 'education' ? 'violet' : 'phosphor';
  
  return (
    <div className={`relative flex items-center gap-6 ${
      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
    }`}>
      {/* Timeline node */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          item.current 
            ? 'bg-phosphor glow-phosphor' 
            : accentColor === 'phosphor' 
              ? 'bg-phosphor/20 border border-phosphor/50' 
              : 'bg-violet/20 border border-violet/50'
        }`}>
          <Icon className={`w-4 h-4 ${item.current ? 'text-background' : accentColor === 'phosphor' ? 'text-phosphor' : 'text-violet'}`} />
        </div>
      </div>

      {/* Content card */}
      <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
        isEven ? 'md:pr-8' : 'md:pl-8'
      }`}>
        <div className={`gradient-border card-hover p-5 ${item.current ? 'glow-phosphor' : ''}`}>
          {/* Period badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
            item.current 
              ? 'bg-phosphor/20 text-phosphor border border-phosphor/30' 
              : accentColor === 'phosphor'
                ? 'bg-phosphor/10 text-phosphor'
                : 'bg-violet/10 text-violet'
          }`}>
            {item.current && <span className="w-1.5 h-1.5 bg-phosphor rounded-full animate-pulse" />}
            {item.period}
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
          
          {/* Role if exists */}
          {item.role && (
            <p className={`text-sm font-mono mb-2 ${
              accentColor === 'phosphor' ? 'text-phosphor' : 'text-violet'
            }`}>
              {item.role}
            </p>
          )}
          
          {/* Description */}
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
};

export default TimelineSection;
