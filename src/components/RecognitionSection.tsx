import { Award, Users, Trophy, Star } from 'lucide-react';

const recognitions = [
  {
    icon: Users,
    title: "Alumni Panelist",
    subtitle: "HP Intern Batch 2026",
    description: "Selected as 1 of only 6 alumni out of 160+ for mentoring the incoming intern batch.",
    highlight: "Top 4%",
    accent: "phosphor" as const,
  },
  {
    icon: Award,
    title: "Judge's Choice",
    subtitle: "HP India Intern Fair",
    description: "Special Mention Prize at HP India's First Ever Intern Fair for innovative project showcase.",
    highlight: "1st Edition",
    accent: "violet" as const,
  },
  {
    icon: Trophy,
    title: "SIH Winner",
    subtitle: "Smart India Hackathon",
    description: "1st Prize at Smart India Hackathon—India's largest national-level hackathon competition.",
    highlight: "National Level",
    accent: "phosphor" as const,
  },
];

const RecognitionSection = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-phosphor/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-secondary/50 rounded-full">
            <Star className="w-4 h-4 text-violet" />
            <span className="font-mono text-sm text-violet uppercase tracking-wider">Recognition @ HP</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Internal <span className="text-gradient">High-Performance</span>
          </h2>
        </div>

        {/* Recognition cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {recognitions.map((item, index) => (
            <RecognitionCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RecognitionCard = ({ item, index }: { item: typeof recognitions[0]; index: number }) => {
  const Icon = item.icon;
  const isPhosphor = item.accent === 'phosphor';
  
  return (
    <div 
      className="gradient-border card-hover relative overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Highlight badge */}
      <div className={`absolute top-4 right-4 font-mono text-xs px-2 py-1 rounded ${
        isPhosphor ? 'bg-phosphor/20 text-phosphor' : 'bg-violet/20 text-violet'
      }`}>
        {item.highlight}
      </div>

      <div className="p-6">
        {/* Icon */}
        <div className={`inline-flex p-4 rounded-xl mb-4 ${
          isPhosphor ? 'bg-phosphor/10 glow-phosphor' : 'bg-violet/10 glow-violet'
        }`}>
          <Icon className={`w-6 h-6 ${isPhosphor ? 'text-phosphor' : 'text-violet'}`} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
        <p className={`text-sm font-mono mb-3 ${isPhosphor ? 'text-phosphor' : 'text-violet'}`}>
          {item.subtitle}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default RecognitionSection;
