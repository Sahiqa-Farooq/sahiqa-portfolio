import React from 'react';
import { WRITING_APPROACH, WRITER_PROFILE } from '../data/portfolioData';
import { Feather, BookOpen, Compass, CheckCircle2, Search, Laptop } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const tools = [
    { label: 'Writing & Collaboration', value: 'Google Docs & Notion' },
    { label: 'Grammar & Tone Check', value: 'Grammarly & Hemingway Editor' },
    { label: 'SEO Research & Intent', value: 'Keyword Research & Search Intent Mapping' },
    { label: 'E-Commerce Platforms', value: 'Shopify, WordPress & WooCommerce' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#e2e8f0] bg-[#f0f3ff] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
                alt="Research notes, notebook, and writing setup"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="p-5 bg-white border-t border-[#e2e8f0]">
                <div className="text-xs font-display font-bold uppercase tracking-wider text-[#0051d5] mb-1">
                  Writing Philosophy
                </div>
                <p className="font-serif italic text-xs text-[#50616b] leading-relaxed">
                  “Writing for the web is about answering the reader’s question quickly, clearly, and memorably without wasting their time.”
                </p>
              </div>
            </div>

            {/* Tools & Workflow Mini-Card */}
            <div className="p-5 rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
              <div className="flex items-center gap-2 text-xs font-display font-bold text-[#111c2d]">
                <Laptop className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>Writing & Research Workflow</span>
              </div>
              <dl className="divide-y divide-[#e2e8f0]/80 text-xs">
                {tools.map((item, i) => (
                  <div key={i} className="py-2 flex justify-between gap-3">
                    <dt className="text-[#6e7980] font-sans">{item.label}</dt>
                    <dd className="font-serif text-[#111c2d] text-right font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e0f2fe] text-[#0284c7] border border-[#38bdf8]/40">
              <Compass className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#111c2d] tracking-tight">
              Creating content that informs, engages, and converts.
            </h2>

            <div className="space-y-4 font-serif text-base sm:text-lg text-[#3e484f] leading-relaxed">
              <p>
                Hello! I am <strong>{WRITER_PROFILE.name}</strong>, a professional <strong>Content Writer</strong> with over one year of experience specializing in e-commerce content and digital writing.
              </p>
              <p>
                My focus centers on three key pillars: <strong>clear writing</strong>, <strong>thorough research</strong>, and <strong>SEO-friendly structuring</strong>. Whether I’m writing detailed product descriptions for an online store, drafting a comprehensive buyer’s guide, or creating an informational blog post, I ensure every piece is tailored to what your audience is actively searching for.
              </p>
              <p>
                I take pride in diving into project briefs, understanding brand guidelines, and communicating openly throughout the entire writing and editing process. My goal is always to deliver clean, engaging, and publication-ready copy that supports your business objectives.
              </p>
            </div>

            {/* Practical highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#f0f3ff] border border-[#dee8ff]">
                <CheckCircle2 className="w-4 h-4 text-[#2563eb] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111c2d]">Over 1 Year Experience</div>
                  <div className="text-[#50616b]">E-commerce copy & digital content creation</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#f0f3ff] border border-[#dee8ff]">
                <CheckCircle2 className="w-4 h-4 text-[#2563eb] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111c2d]">SEO & Audience Focused</div>
                  <div className="text-[#50616b]">Natural keyword usage & readable formatting</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Writing Process (3 Steps) */}
        <div className="pt-12 border-t border-[#e2e8f0]">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111c2d]">
              My Writing Process
            </h3>
            <p className="font-serif text-sm sm:text-base text-[#50616b]">
              How I approach every project to deliver consistent, high-quality results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WRITING_APPROACH.map((step) => (
              <div
                key={step.number}
                className="bg-[#f8fafc] p-6 sm:p-7 rounded-3xl border border-[#e2e8f0] relative space-y-3 hover:border-[#bae6fd] transition-colors"
              >
                <div className="font-display font-bold text-3xl sm:text-4xl text-[#38bdf8]/60">
                  {step.number}
                </div>
                <h4 className="font-display font-bold text-lg text-[#111c2d]">
                  {step.title}
                </h4>
                <p className="font-serif text-sm text-[#3e484f] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
