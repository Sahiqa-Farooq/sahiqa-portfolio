import React, { useState } from 'react';
import { Feather, ArrowUp, Send, Check } from 'lucide-react';
import { WRITER_PROFILE } from '../data/portfolioData';

interface FooterProps {
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeployGuide }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111c2d] text-white pt-16 pb-12 border-t border-[#263143]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#263143]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] border border-[#38bdf8]/30">
                <Feather className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                {WRITER_PROFILE.name}
              </span>
            </div>
            <p className="font-serif text-sm text-[#cbd5e1] leading-relaxed max-w-sm">
              Professional Content Writer with over one year of experience in e-commerce, SEO writing, articles, product descriptions, and digital content.
            </p>
            <div className="text-xs font-sans text-[#7bd0ff]">
              Direct Contact: {WRITER_PROFILE.email}
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-display font-bold tracking-wider uppercase text-[#7bd0ff]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-display">
              <li>
                <a href="#samples" className="text-[#cbd5e1] hover:text-white transition-colors">
                  Writing Samples
                </a>
              </li>
              <li>
                <a href="#skills" className="text-[#cbd5e1] hover:text-white transition-colors">
                  Skills & Expertise
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#cbd5e1] hover:text-white transition-colors">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#cbd5e1] hover:text-white transition-colors">
                  About Sahiqa
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#cbd5e1] hover:text-white transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Info */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-display font-bold tracking-wider uppercase text-[#7bd0ff]">
              Work Inquiries
            </div>
            <p className="font-serif text-xs text-[#cbd5e1] leading-relaxed">
              Looking for a dependable content writer for your blog, online store, or business website? Let's connect.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-display font-bold bg-[#38bdf8] text-[#004965] hover:bg-[#7bd0ff] transition-colors"
              >
                Send a Message
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-[#6e7980]">
          <div>
            © {new Date().getFullYear()} {WRITER_PROFILE.name} · Content Writer Portfolio.
          </div>

          <div className="flex items-center gap-4 font-sans text-xs">
            <button
              onClick={onOpenDeployGuide}
              className="text-[#7bd0ff] hover:underline"
            >
              Vercel Deployment Guide
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#cbd5e1] hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
