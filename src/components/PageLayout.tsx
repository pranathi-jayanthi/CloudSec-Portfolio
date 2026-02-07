import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      <Header />
      
      {/* Main content with top padding for fixed header */}
      <main className="relative z-10 pt-16">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
