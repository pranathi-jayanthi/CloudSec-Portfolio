import { Medal, Users, Rocket } from 'lucide-react';

const activities = [
  {
    icon: Medal,
    category: "Athletics",
    title: "4-Time Medalist",
    description: "National Sports Day fitness and sports challenges. Consistent performance in physical competitions.",
    stats: "4 Medals",
    accent: "phosphor" as const,
  },
  {
    icon: Users,
    category: "Leadership",
    title: "Innovator Square Lead",
    description: "Led and managed a thriving community of 100+ members focused on innovation and entrepreneurship.",
    stats: "100+ Members",
    accent: "violet" as const,
  },
  {
    icon: Rocket,
    category: "Competitions",
    title: "IIT Madras E-Summit '24",
    description: "Finalist at prestigious E-Summit and winner of multiple pitching contests at national level.",
    stats: "Finalist",
    accent: "phosphor" as const,
  },
];

const ExtracurricularsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-muted-foreground">{'<'}</span>
            <span className="font-mono text-sm text-violet uppercase tracking-wider">Beyond The Screen</span>
            <span className="font-mono text-sm text-muted-foreground">{'/>'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Extracurricular <span className="text-gradient">Impact</span>
          </h2>
        </div>

        {/* Activities grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ActivityCard = ({ activity }: { activity: typeof activities[0] }) => {
  const Icon = activity.icon;
  const isPhosphor = activity.accent === 'phosphor';
  
  return (
    <div className="gradient-border card-hover group">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${
            isPhosphor ? 'bg-phosphor/10' : 'bg-violet/10'
          } group-hover:scale-110 transition-transform`}>
            <Icon className={`w-6 h-6 ${isPhosphor ? 'text-phosphor' : 'text-violet'}`} />
          </div>
          <span className={`font-mono text-xs px-2 py-1 rounded ${
            isPhosphor ? 'bg-phosphor/20 text-phosphor' : 'bg-violet/20 text-violet'
          }`}>
            {activity.stats}
          </span>
        </div>

        {/* Content */}
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          {activity.category}
        </span>
        <h3 className="text-xl font-bold mt-1 mb-3 group-hover:text-phosphor transition-colors">
          {activity.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {activity.description}
        </p>
      </div>
    </div>
  );
};

export default ExtracurricularsSection;
