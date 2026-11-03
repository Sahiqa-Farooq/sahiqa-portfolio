import React from 'react';
import { ArrowRight, CheckCircle2, Search, ShoppingBag, Feather } from 'lucide-react';
import { WRITER_PROFILE } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onReadBio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onReadBio }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#e0f2fe]/60 via-[#f0f3ff]/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Subtext, Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability & Title Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#e0f2fe] text-[#0284c7] border border-[#38bdf8]/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Content Writing & E-Commerce Projects</span>
            </div>

            {/* Display Hero Title */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] text-[#111c2d] tracking-[-0.03em]">
              Hi, I’m <span className="text-[#2563eb]">{WRITER_PROFILE.name}</span>.<br />
              I craft clear, engaging, and <span className="underline decoration-[#38bdf8]/60 underline-offset-4">SEO-friendly</span> digital content.
            </h1>

            {/* Subhead / Lead paragraph in Literata */}
            <p className="font-serif text-lg sm:text-xl text-[#3e484f] leading-relaxed max-w-2xl">
              I am a <strong>Content Writer</strong> with over one year of experience in e-commerce and digital content writing. I specialize in researching topics deeply, creating reader-focused blog posts and articles, writing persuasive product descriptions, and producing clean website copy that connects with customers.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary button */}
              <button
                onClick={onExploreWork}
                className="px-6 py-3.5 rounded-full text-sm font-display font-bold bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-sm hover:shadow-[#2563eb]/25 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Explore Writing Samples</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary / Soft sky button */}
              <button
                onClick={onReadBio}
                className="px-6 py-3.5 rounded-full text-sm font-display font-semibold bg-[#e0f2fe] text-[#2563eb] hover:bg-[#d0ebfd] border border-[#38bdf8]/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>About Me & Skills</span>
              </button>
            </div>

            {/* Genuine highlights strip */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-serif text-[#50616b]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2563eb]" />
                <span>1+ Year E-Commerce & Digital Experience</span>
              </span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2563eb]" />
                <span>In-Depth Research & SEO Focus</span>
              </span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2563eb]" />
                <span>Clear & Prompt Communication</span>
              </span>
            </div>
          </div>

          {/* Right Column: Profile Overview Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Soft decorative background frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#38bdf8]/20 to-[#2563eb]/10 rounded-3xl blur-xl opacity-70 transform rotate-1" />

              {/* Elevated Card */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
                
                {/* Visual writer photo / desk illustration */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#e7eeff] mb-5 border border-[#dee8ff]">
                  <img
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
                    alt="Content writer desk with laptop and research notes"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-display font-semibold text-[#111c2d] shadow-xs border border-[#cbd5e1]/60">
                    ✍️ Writing Clean & Engaging Copy
                  </div>
                </div>

                {/* Writer Creed / Focus */}
                <div className="space-y-3">
                  <div className="text-xs font-display font-semibold uppercase tracking-wider text-[#0051d5]">
                    Writing Philosophy
                  </div>
                  <p className="font-serif italic text-base text-[#111c2d] leading-relaxed">
                    “Great content balances reader value with clear purpose—answering questions, informing decisions, and inspiring action.”
                  </p>
                  
                  {/* Real strengths pills */}
                  <div className="pt-3 border-t border-[#e2e8f0] flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-display font-medium bg-[#f0f3ff] text-[#0051d5]">
                      E-Commerce Writing
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-display font-medium bg-[#f0f3ff] text-[#0051d5]">
                      SEO Strategy
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-display font-medium bg-[#f0f3ff] text-[#0051d5]">
                      Blog & Article Creation
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-display font-medium bg-[#f0f3ff] text-[#0051d5]">
                      Editing & Proofreading
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Core Competencies Ribbon */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[#e2e8f0]/80">
          <p className="text-center text-xs font-display font-semibold tracking-wider uppercase text-[#6e7980] mb-6">
            Core Content Formats & Writing Specialties
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            {[
              'Blog Writing',
              'Article Writing',
              'Product Descriptions',
              'Website Content',
              'SEO Content',
            ].map((service) => (
              <div
                key={service}
                className="p-3 rounded-2xl bg-white border border-[#e2e8f0] text-xs font-display font-semibold text-[#111c2d] shadow-xs hover:border-[#38bdf8] transition-colors"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
