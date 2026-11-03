import React, { useState } from 'react';
import { WRITING_SAMPLES } from '../data/portfolioData';
import { WritingSample } from '../types';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';

interface CaseStudiesProps {
  onSelectSample: (sample: WritingSample) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectSample }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Product Descriptions',
    'SEO Blog Posts',
    'Website Content',
    'Article Writing',
  ];

  const filteredSamples = activeCategory === 'All'
    ? WRITING_SAMPLES
    : WRITING_SAMPLES.filter((item) => item.category === activeCategory);

  return (
    <section id="samples" className="py-16 sm:py-24 bg-[#f9f9ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e0f2fe] text-[#0284c7] border border-[#38bdf8]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Selected Writing Samples</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#111c2d] tracking-tight">
              Demonstrated writing samples across formats.
            </h2>
            <p className="font-serif text-base sm:text-lg text-[#3e484f] leading-relaxed">
              Explore sample writing pieces illustrating research depth, reader-friendly formatting, and clear tone across e-commerce product listings, SEO articles, and website copy.
            </p>
          </div>

          <div className="text-xs font-serif text-[#6e7980] self-start md:self-end">
            Showing {filteredSamples.length} of {WRITING_SAMPLES.length} samples
          </div>
        </div>

        {/* Category Filter Chips / Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 overflow-x-auto no-scrollbar">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`h-9 px-4 rounded-full text-xs font-display font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#e0f2fe] text-[#0284c7] border border-[#38bdf8] shadow-xs'
                    : 'bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] border border-transparent'
                }`}
              >
                <span>{category}</span>
                {category === 'All' && (
                  <span className="text-[10px] px-1.5 py-0.2 bg-white/80 rounded-full text-[#0284c7]">
                    {WRITING_SAMPLES.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Samples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSamples.map((sample) => (
            <article
              key={sample.id}
              onClick={() => onSelectSample(sample)}
              className="group bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8f0] hover:border-[#bae6fd] shadow-sm hover:shadow-xl hover:shadow-[#38bdf8]/10 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 relative"
            >
              <div className="space-y-5">
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#f0f3ff] border border-[#dee8ff]">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-display font-semibold text-[#0051d5] shadow-xs border border-[#cbd5e1]/40">
                    {sample.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#111c2d]/80 backdrop-blur-sm rounded-full text-[11px] font-sans font-medium text-white flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#38bdf8]" />
                    <span>{sample.readTime}</span>
                  </div>
                </div>

                {/* Content Type tag */}
                <div className="text-xs text-[#2563eb] font-semibold uppercase tracking-wider font-display">
                  {sample.contentType}
                </div>

                {/* Title in Bricolage Grotesque */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111c2d] leading-snug group-hover:text-[#0051d5] transition-colors">
                  {sample.title}
                </h3>

                {/* Excerpt in Literata */}
                <p className="font-serif text-[#3e484f] text-sm sm:text-base leading-relaxed line-clamp-3">
                  {sample.excerpt}
                </p>

                {/* Features Pills */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#f1f5f9]">
                  {sample.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="bg-[#f8fafc] p-2.5 rounded-xl border border-[#e2e8f0]/60">
                      <div className="font-display font-bold text-xs text-[#0051d5]">
                        {feat.value}
                      </div>
                      <div className="text-[10px] font-sans text-[#6e7980] truncate">
                        {feat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer action */}
              <div className="pt-6 mt-6 border-t border-[#e2e8f0]/80 flex items-center justify-between">
                <span className="text-xs font-display font-bold text-[#2563eb] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>View Sample & Excerpt</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
                <span className="text-xs font-serif text-[#6e7980]">
                  Click to inspect
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
