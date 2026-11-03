/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { VercelGuideModal } from './components/VercelGuideModal';
import { WritingSample } from './types';
import { Sparkles, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('samples');
  const [selectedSample, setSelectedSample] = useState<WritingSample | null>(null);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [showVercelBanner, setShowVercelBanner] = useState<boolean>(true);

  // ScrollSpy for active nav section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['samples', 'skills', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectSample = (sample: WritingSample) => {
    setSelectedSample(sample);
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#111c2d] selection:bg-[#c4e7ff] selection:text-[#001e2c] flex flex-col font-serif">
      
      {/* Beginner Vercel Announcement Pill Banner */}
      {showVercelBanner && (
        <aside 
          aria-label="Beginner deployment guide" 
          className="bg-gradient-to-r from-[#2563eb] to-[#0284c7] text-white text-xs py-2 px-4 text-center relative z-50 flex items-center justify-center gap-2 font-display"
        >
          <Sparkles className="w-3.5 h-3.5 flex-shrink-0 animate-pulse text-[#7bd0ff]" />
          <span>
            <strong>Beginner Guide:</strong> Want to publish this website on Vercel without installing VS Code?
          </span>
          <button
            onClick={() => setIsDeployGuideOpen(true)}
            className="underline font-bold hover:text-[#c4e7ff] transition-colors ml-1"
          >
            Click here for step-by-step instructions
          </button>
          <button
            onClick={() => setShowVercelBanner(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors ml-2"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* Floating Reader Bar Navigation */}
      <Navbar
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('samples')}
          onReadBio={() => scrollToSection('about')}
        />

        {/* Selected Writing Samples */}
        <CaseStudies onSelectSample={handleSelectSample} />

        {/* Dedicated Skills Section */}
        <SkillsSection />

        {/* Services (Blog Writing, Article Writing, Product Descriptions, Website Content, SEO Content) */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* About Sahiqa Farooq (Real background, research, SEO-friendly content) */}
        <AboutSection />

        {/* Contact Section with User Input Validation */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* Footer & Colophon */}
      <Footer onOpenDeployGuide={() => setIsDeployGuideOpen(true)} />

      {/* Writing Sample Modal Reader */}
      <ArticleReaderModal
        sample={selectedSample}
        onClose={() => setSelectedSample(null)}
        onSelectServiceForInquiry={(service) => {
          setPreselectedService(service);
          scrollToSection('contact');
        }}
      />

      {/* Beginner Vercel Deployment Modal */}
      <VercelGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
