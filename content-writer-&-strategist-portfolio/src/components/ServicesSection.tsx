import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { Check, ArrowRight, Clock, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#f9f9ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e0f2fe] text-[#0284c7] border border-[#38bdf8]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Content Writing Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#111c2d] tracking-tight">
            Services tailored to your needs.
          </h2>
          <p className="font-serif text-base sm:text-lg text-[#3e484f] leading-relaxed">
            From e-commerce product listings to search-optimized articles and website copy, here are the core writing services I provide.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {SERVICES_DATA.map((service, index) => {
            const isFeatured = !!service.badge;
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-white border-2 border-[#2563eb] shadow-lg shadow-[#2563eb]/5'
                    : 'bg-white border border-[#e2e8f0] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Badge if featured */}
                {service.badge && (
                  <div className="absolute -top-3.5 left-6 px-3.5 py-0.5 rounded-full text-xs font-display font-bold bg-[#2563eb] text-white shadow-xs">
                    {service.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#111c2d] leading-snug">
                      {service.title}
                    </h3>
                    <p className="font-serif text-sm text-[#3e484f] mt-1.5 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs font-serif text-[#50616b] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-[#f1f5f9]">
                    <div className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#6e7980]">
                      What You Receive
                    </div>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#3e484f] leading-snug font-serif">
                          <Check className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-[#f1f5f9]">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className={`w-full py-2.5 px-4 rounded-full text-xs font-display font-bold transition-all flex items-center justify-center gap-1.5 ${
                      isFeatured
                        ? 'bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-xs'
                        : 'bg-[#e0f2fe] text-[#2563eb] hover:bg-[#d0ebfd] border border-[#38bdf8]/40'
                    }`}
                  >
                    <span>Request {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flexible Project Banner */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-white border border-[#e2e8f0] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-base text-[#111c2d]">
              Have a custom project or ongoing content needs?
            </h4>
            <p className="font-serif text-xs sm:text-sm text-[#50616b]">
              I am open to one-off content assignments as well as regular weekly or monthly writing support.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Content Project')}
            className="flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-display font-semibold bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-colors"
          >
            Get a Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
};
