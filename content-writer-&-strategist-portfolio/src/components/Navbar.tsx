import React, { useState, useEffect } from 'react';
import { Feather, Menu, X, Rocket, Send } from 'lucide-react';
import { WRITER_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenDeployGuide: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeployGuide, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Writing Samples', href: '#samples' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Floating Reader Bar container */}
        <nav 
          className={`w-full pointer-events-auto transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
            scrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-lg border-[#e0f2fe]/90 shadow-[#111c2d]/5' 
              : 'bg-white/85 backdrop-blur-md border-[#e2e8f0]/80 shadow-sm'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo / Writer Name */}
          <a 
            href="#"
            className="flex items-center gap-2.5 text-[#111c2d] hover:text-[#0051d5] transition-colors group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#2563eb] group-hover:scale-105 transition-transform border border-[#38bdf8]/40">
              <Feather className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-sm sm:text-base leading-none tracking-tight text-[#111c2d]">
                {WRITER_PROFILE.name}
              </span>
              <span className="text-[10px] sm:text-xs font-serif text-[#6e7980] leading-tight">
                {WRITER_PROFILE.title}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                    isActive
                      ? 'bg-[#e0f2fe] text-[#0284c7] font-bold'
                      : 'text-[#3e484f] hover:text-[#111c2d] hover:bg-[#f1f5f9]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Beginner Vercel Guide Trigger */}
            <button
              onClick={onOpenDeployGuide}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#f0f3ff] text-[#0051d5] hover:bg-[#dee8ff] border border-[#dee8ff] transition-colors"
              title="Learn how to preview and publish with Vercel for beginners"
            >
              <Rocket className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>Publish Guide</span>
            </button>

            {/* Contact Me CTA Button */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-display font-bold bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-sm hover:shadow-[#2563eb]/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get in Touch</span>
              <Send className="w-3 h-3 hidden sm:inline" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#3e484f] hover:text-[#111c2d] hover:bg-[#f1f5f9] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 mx-auto max-w-sm bg-white/95 backdrop-blur-md rounded-3xl p-5 border border-[#e2e8f0] shadow-xl animate-fade-in space-y-3">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-4 py-2.5 rounded-2xl text-sm font-display font-medium text-[#111c2d] hover:bg-[#f0f3ff] hover:text-[#0051d5] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-[#e2e8f0] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#f0f3ff] text-[#0051d5] border border-[#dee8ff]"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>Beginner Vercel Publishing Guide</span>
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
            >
              <span>Contact Sahiqa</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
