import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Feather, Search, BookOpen, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#2563eb]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#2563eb]" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#2563eb]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#2563eb]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#2563eb]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#2563eb]" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white border-y border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e0f2fe] text-[#0284c7] border border-[#38bdf8]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Professional Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#111c2d] tracking-tight">
            Key skills & areas of expertise.
          </h2>
          <p className="font-serif text-base sm:text-lg text-[#3e484f] leading-relaxed">
            A balanced skill set combining creative narrative ability with analytical search optimization, disciplined research, and clear client communication.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((skill, index) => (
            <div
              key={skill.id}
              className={`p-6 sm:p-7 rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#bae6fd] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 ${
                index === 0 || index === 1 ? 'border-[#d0ebfd]' : ''
              }`}
            >
              <div className="space-y-3">
                {/* Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#e0f2fe] flex items-center justify-center border border-[#38bdf8]/30">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-full bg-white text-[#50616b] border border-[#e2e8f0]">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="font-display font-bold text-xl text-[#111c2d]">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="font-serif text-sm text-[#3e484f] leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-3 border-t border-[#e2e8f0]/70 space-y-1.5">
                <div className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#6e7980]">
                  Core Capabilities
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-xs font-sans bg-white text-[#2563eb] border border-[#e2e8f0]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Bonus Summary Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#f0f3ff] border border-[#dee8ff] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#2563eb] text-white flex items-center justify-center font-bold text-sm">
                1+
              </div>
              <h3 className="font-display font-bold text-xl text-[#111c2d]">
                Practical Experience
              </h3>
              <p className="font-serif text-sm text-[#3e484f] leading-relaxed">
                Over a year of dedicated writing experience across diverse e-commerce niches and digital content channels, consistently focused on clarity, SEO performance, and audience connection.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-display font-bold text-[#2563eb] hover:underline"
              >
                Discuss a writing project →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
