import { Users, Award, Heart, Music } from 'lucide-react';

const extracurriculars = [
  {
    id: 1,
    title: "Community Service",
    description: "Active volunteer in various community initiatives and social causes.",
    icon: Heart,
  },
  {
    id: 2,
    title: "Leadership Roles",
    description: "Held leadership positions in student organizations and clubs.",
    icon: Users,
  },
  {
    id: 3,
    title: "Achievements",
    description: "Participated in various competitions and won accolades.",
    icon: Award,
  },
  {
    id: 4,
    title: "Hobbies",
    description: "Passionate about music, art, and creative pursuits.",
    icon: Music,
  },
];

const ExtracurricularsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-phosphor rounded-full animate-pulse" />
            <span className="font-mono text-sm text-phosphor uppercase tracking-wider">Beyond Academics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Extracurricular <span className="text-gradient">Activities</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Activities and interests outside of academics that shape who I am.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {extracurriculars.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="gradient-border card-hover group">
                <div className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-violet/10 border border-violet/20">
                    <Icon className="w-5 h-5 text-violet" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-phosphor transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularsSection;
