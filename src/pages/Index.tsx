import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import RecognitionSection from '@/components/RecognitionSection';
import CertificationsSection from '@/components/CertificationsSection';
import AcademicsSection from '@/components/AcademicsSection';
import ExtracurricularsSection from '@/components/ExtracurricularsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <RecognitionSection />
        <CertificationsSection />
        <AcademicsSection />
        <ExtracurricularsSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
