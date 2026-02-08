import { GraduationCap, TrendingUp } from 'lucide-react';

const academics = [
  {
    level: "10th Standard",
    score: "10/10",
    label: "CGPA",
    institution: "CBSE",
  },
  {
    level: "12th Standard",
    score: "96.1%",
    label: "Percentage",
    institution: "CBSE",
  },
  {
    level: "B.Tech CSE AI ML",
    score: "9.01",
    label: "CGPA",
    institution: "Graduate",
  },
];

const AcademicsSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet/10 rounded-full blur-[128px]" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-phosphor" />
            <span className="font-mono text-sm text-phosphor uppercase tracking-wider">Educational Foundation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Academic <span className="text-gradient">Performance</span>
          </h2>
        </div>

        {/* Academic journey */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-phosphor via-violet to-phosphor opacity-30 hidden md:block" />
          
          <div className="grid md:grid-cols-3 gap-6">
            {academics.map((item, index) => (
              <AcademicCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Trend indicator */}
        <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground">
          <TrendingUp className="w-4 h-4 text-phosphor" />
          <span className="font-mono text-sm">Consistent performance across all levels</span>
        </div>
      </div>
    </section>
  );
};

const AcademicCard = ({ item, index }: { item: typeof academics[0]; index: number }) => {
  const accents = ['phosphor', 'violet', 'phosphor'] as const;
  const accent = accents[index];
  
  return (
    <div className="gradient-border card-hover text-center relative z-10">
      <div className="p-8">
        {/* Score */}
        <div className={`text-5xl font-bold font-mono mb-2 ${
          accent === 'phosphor' ? 'text-phosphor glow-text' : 'text-violet'
        }`}>
          {item.score}
        </div>
        <div className="text-sm font-mono text-muted-foreground mb-4">{item.label}</div>
        
        {/* Level */}
        <h3 className="text-lg font-semibold mb-1">{item.level}</h3>
        <span className={`text-xs font-mono px-2 py-1 rounded ${
          accent === 'phosphor' ? 'bg-phosphor/10 text-phosphor' : 'bg-violet/10 text-violet'
        }`}>
          {item.institution}
        </span>
      </div>
    </div>
  );
};

export default AcademicsSection;
