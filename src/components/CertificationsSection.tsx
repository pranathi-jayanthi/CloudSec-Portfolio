import React from 'react';
import { ShieldCheck, Cloud, Code, CheckCircle, Loader2 } from 'lucide-react';

const certifications = [
  {
    icon: ShieldCheck, // Restored Shield for left boxes
    title: "ISC2 Certified in Cybersecurity",
    date: "Dec 2025",
    status: "completed" as const,
    category: "Cybersecurity Credential",
  },
  {
    icon: ShieldCheck, // Restored Shield for left boxes
    title: "Introduction to Cloud & Cloud Security",
    date: "Jan 2026",
    status: "completed" as const,
    category: "Udemy Courses",
  },
  {
    icon: Cloud,
    title: "AWS Certified Cloud Practitioner",
    date: "In Progress",
    status: "in-progress" as const,
    category: "Cloud Certification",
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
            Skill<span className="text-gradient"> Alignment</span>
          </h2>
        </div>

        {/* 2-column Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Certifications */}
          <div className="flex flex-col gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex-1">
                <CertCard cert={cert} />
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Technical & Strategic Narrative */}
          <div className="flex flex-col gap-6">
            
            {/* Box 4: Python Refresh */}
            <div className="gradient-border flex-1 p-6 card-hover flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Restored bg filling */}
                  <div className="p-2 bg-phosphor/10 rounded-lg">
                    <Code className="w-5 h-5 text-phosphor" />
                  </div>
                  <div className="font-bold text-sm uppercase tracking-tight">Python Refresh</div>
                </div>
                {/* Right side circular check */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-phosphor" />
                </div>
              </div>
              <div className="text-xs font-mono text-muted-foreground leading-relaxed">
                Leveraged the year-end shutdown as a technical sprint to brush up and re-align my four years 
                of B.Tech Python foundation with Cloud Security automation. Familiarized myself with Boto3.
              </div>
            </div>

            {/* Box 5: TPRM Advantage */}
            <div className="gradient-border flex-1 p-6 card-hover flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Restored bg filling and ShieldCheck icon */}
                  <div className="p-2 bg-phosphor/10 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-phosphor" />
                  </div>
                  <div className="font-bold text-sm uppercase tracking-tight">Cybersecurity Edge</div>
                </div>
                {/* Right side circular check */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-phosphor" />
                </div>
              </div>
              <div className="text-xs font-mono text-muted-foreground leading-relaxed">
                <ul className="space-y-3">
    <li className="flex gap-2">
      <span className="text-phosphor">→</span>
      <span>I was new to Cybersecurity before joining HP.</span>
    </li>
    <li className="flex gap-2">
      <span className="text-phosphor">→</span>
      <span>But one year experience as Cybersecurity Risk Assessor, helped me build a solid foundation in cyber.</span>
    </li>
    <li className="flex gap-2">
      <span className="text-phosphor">→</span>
      <span>Although TPRM is a GRC role, it gave me a risk-aware lens which I can utilize in Cloud Security.</span>
    </li>
    <li className="flex gap-2">
      <span className="text-phosphor">→</span>
      <span>The security controls I learned to evaluate third-party vendors helped me understand various aspects of cybersecurity.</span>
    </li>
    <li className="flex gap-2">
      <span className="text-phosphor">→</span>
      <span>Now I know what is Least Privilege, IAM, RBAC, ZeroTrust etc.</span>
    </li>
  </ul>
              </div>
            </div>

          </div> {/* End Right Column */}
        </div> {/* End Grid */}
      </div>
    </section>
  );
};

const CertCard = ({ cert }: { cert: typeof certifications[0] }) => {
  const Icon = cert.icon;
  const isCompleted = cert.status === 'completed';
  
  return (
    <div className="gradient-border card-hover h-full">
      <div className="p-4 flex items-center gap-4 h-full">
        {/* Left Icon with bg filling */}
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

        {/* Right Status Icon with filling removed for progress circle as requested */}
        <div className="w-8 h-8 flex items-center justify-center">
          {isCompleted ? (
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-phosphor" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full border flex items-center justify-center">
              <Loader2 className="w-4 h-4 text-violet animate-spin" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;