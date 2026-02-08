import { Award, Users, Trophy, Star, Medal, Rocket } from 'lucide-react';

const recognitions = [
  {
    icon: Award,
    title: "HP Intern Fair Winner",
    subtitle: "Judge's Choice: Special Mention Prize",
    description: "Won Judge's Choice - Special Mention Prize at HP India's First Ever Intern Fair for innovative project showcase.",
    highlight: "Special Mention",
    accent: "phosphor" as const,
  },
  {
    icon: Users,
    title: "Alumni Panelist",
    subtitle: "For HP Intern Batch 2026",
    description: "Honored to be selected as one of only six alumni, out of a pool 160+ alumni, to join the alumni panel for 2026 intern batch.",
    highlight: "Top 4%",
    accent: "violet" as const,
  },

  {
    icon: Trophy,
    title: "SIH Winner",
    subtitle: "Smart India Hackathon",
    description: "Our team won 1st Prize at Smart India Hackathon, a national-level hackathon conducted by Govt of India along with a cash prize of ₹1,00,000.",
    highlight: "First Prize",
    accent: "phosphor" as const,
  },
  {
    icon: Rocket,
    title: "Pitch Deck Finalist",
    subtitle: "IIT Madras E-Summit'24",
    description: "Finalist at prestigious IIT Madras E-Summit'24 Pitch Deck contest. Also, winner of multiple pitching contests at SRM AP with cash prizes.",
    highlight: "Finalist",
    accent: "violet" as const,
  },
  {
    icon: Users,
    title: "Innovator Square Lead",
    subtitle: "Entrepreneurship Cell @ SRM AP",
    description: "Led and managed a thriving community - Innovator Square with 100+ members, focused on innovation and entrepreneurship.",
    highlight: "Leadership",
    accent: "phosphor" as const,
  },
  {
    icon: Medal,
    title: "4x Medalist",
    subtitle: "Sports",
    description: "Won a gold, two silver and a bronze medal at the Interschool Championship and National Sports Day events conducted by SRM University, AP!",
    highlight: "4 Medals",
    accent: "violet" as const,
  },
];

const RecognitionSection = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-phosphor/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <Star className="w-4 h-4 text-violet" />
            <span className="font-mono text-sm text-violet uppercase tracking-wider">Achievements & Extracurriculars</span>
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
