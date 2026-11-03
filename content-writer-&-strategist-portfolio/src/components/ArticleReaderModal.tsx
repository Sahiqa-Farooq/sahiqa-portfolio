import React from 'react';
import { X, Clock, Quote, BookOpen } from 'lucide-react';
import { WritingSample } from '../types';

interface ArticleReaderModalProps {
  sample: WritingSample | null;
  onClose: () => void;
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  sample,
  onClose,
  onSelectServiceForInquiry,
}) => {
  if (!sample) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#111c2d]/60 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl my-auto bg-white rounded-3xl shadow-2xl border border-[#e2e8f0] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#f8fafc] border-b border-[#e2e8f0]">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#50616b]">
            <BookOpen className="w-4 h-4 text-[#2563eb]" />
            <span>Writing Sample Showcase</span>
            <span aria-hidden="true">·</span>
            <span>{sample.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6e7980] hover:text-[#111c2d] hover:bg-[#e2e8f0] rounded-full transition-colors"
            aria-label="Close reader"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Reader Body */}
        <div className="overflow-y-auto px-6 sm:px-12 py-8 space-y-8">
          {/* Header metadata */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#50616b]">
              <span className="font-semibold text-[#2563eb]">
                {sample.contentType}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#6e7980]" />
                {sample.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#111c2d] leading-tight">
              {sample.title}
            </h1>

            {sample.subtitle && (
              <p className="text-base sm:text-lg font-serif text-[#3e484f] leading-relaxed italic border-l-2 border-[#38bdf8] pl-4">
                {sample.subtitle}
              </p>
            )}
          </div>

          {/* Lead Image */}
          {sample.image && (
            <div className="rounded-2xl overflow-hidden border border-[#e2e8f0] relative aspect-[16/9] max-h-72 w-full bg-[#f1f5f9]">
              <img
                src={sample.image}
                alt={sample.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Features Strip */}
          {sample.keyFeatures && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#f0f3ff] border border-[#dee8ff]">
              {sample.keyFeatures.map((feat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-lg font-bold font-display text-[#0051d5]">
                    {feat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#50616b] uppercase tracking-wider mt-0.5">
                    {feat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Prose Breakdown */}
          <div className="space-y-6 font-serif text-[#1e293b] text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#111c2d] mb-1.5 flex items-center gap-2">
                <span className="text-[#38bdf8] font-mono text-sm">01.</span> Content Objective
              </h3>
              <p className="text-[#3e484f]">{sample.fullStory.projectGoal}</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#111c2d] mb-1.5 flex items-center gap-2">
                <span className="text-[#38bdf8] font-mono text-sm">02.</span> Writing & SEO Approach
              </h3>
              <p className="text-[#3e484f]">{sample.fullStory.writingApproach}</p>
            </div>

            {/* Excerpt callout */}
            <div className="my-6 p-6 sm:p-7 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] relative">
              <Quote className="w-7 h-7 text-[#38bdf8]/50 mb-2" />
              <p className="text-base sm:text-lg font-serif text-[#111c2d] italic leading-relaxed">
                {sample.fullStory.sampleExcerpt}
              </p>
              <div className="mt-3 text-xs font-sans text-[#6e7980] font-medium">
                — Sample Excerpt from this piece
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#111c2d] mb-1.5 flex items-center gap-2">
                <span className="text-[#38bdf8] font-mono text-sm">03.</span> Deliverables Produced
              </h3>
              <p className="text-[#3e484f]">{sample.fullStory.deliverables}</p>
            </div>
          </div>

          {/* Tags */}
          {sample.tags && (
            <div className="pt-4 border-t border-[#e2e8f0] flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#6e7980] font-medium mr-1">Categories:</span>
              {sample.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#475569]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#f8fafc] border-t border-[#e2e8f0] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#6e7980]">
            Need similar content crafted for your website or store?
          </div>
          <div className="flex items-center gap-3">
            {onSelectServiceForInquiry && (
              <button
                onClick={() => {
                  onClose();
                  onSelectServiceForInquiry(sample.category);
                }}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all shadow-sm"
              >
                Inquire About Similar Content
              </button>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#e2e8f0] text-[#1e293b] hover:bg-[#cbd5e1] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
