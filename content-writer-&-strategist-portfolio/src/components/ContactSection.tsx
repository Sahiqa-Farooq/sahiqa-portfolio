import React, { useState, useEffect } from 'react';
import { ContactFormData, FormValidationErrors } from '../types';
import { Mail, Send, Check, Copy, CheckCircle2, AlertCircle, Shield, Database, AlertTriangle } from 'lucide-react';
import { WRITER_PROFILE } from '../data/portfolioData';
import { saveContactMessage, isSupabaseConfigured } from '../lib/supabase';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    serviceType: '',
    timeline: '',
    budget: '',
    projectBrief: '',
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Blog Writing',
    'Article Writing',
    'Product Descriptions',
    'Website Content',
    'SEO Content',
    'Custom Content Project',
  ];

  const timelineOptions = [
    'Immediate (Within 1-2 weeks)',
    'Next 2-4 weeks',
    'Flexible / Ongoing monthly writing',
  ];

  const budgetOptions = [
    'Flexible / Open to discussion',
    'Under $250',
    '$250 – $500',
    '$500 – $1,000',
    '$1,000+',
  ];

  const validate = (data: ContactFormData): FormValidationErrors => {
    const errs: FormValidationErrors = {};
    
    // Name validation
    if (!data.fullName.trim()) {
      errs.fullName = 'Please enter your name.';
    } else if (data.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters long.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errs.email = 'Please provide an email address so I can reply.';
    } else if (!emailRegex.test(data.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g., name@example.com).';
    }

    // Service Type validation
    if (!data.serviceType) {
      errs.serviceType = 'Please select which writing service you need.';
    }

    // Timeline validation
    if (!data.timeline) {
      errs.timeline = 'Please select your estimated timeline.';
    }

    // Budget validation
    if (!data.budget) {
      errs.budget = 'Please select an approximate budget range.';
    }

    // Project Brief validation
    if (!data.projectBrief.trim()) {
      errs.projectBrief = 'Please share a brief description of your project or requirements.';
    } else if (data.projectBrief.trim().length < 15) {
      errs.projectBrief = 'Please provide a little more detail (at least 15 characters).';
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (serverError) {
      setServerError(null);
    }

    if (touched[name]) {
      const fieldErrors = validate({
        ...formData,
        [name]: value,
      });
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name as keyof FormValidationErrors],
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [field]: fieldErrors[field as keyof FormValidationErrors],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    setTouched({
      fullName: true,
      email: true,
      serviceType: true,
      timeline: true,
      budget: true,
      projectBrief: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // Package full details into the message column for Supabase table contact_messages (name, email, message)
      const combinedMessage = [
        formData.projectBrief.trim(),
        '',
        '--- Inquiry Meta ---',
        `Service: ${formData.serviceType}`,
        `Timeline: ${formData.timeline}`,
        `Budget: ${formData.budget}`,
      ].join('\n');

      try {
        const result = await saveContactMessage({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          message: combinedMessage,
        });

        if (result.success) {
          setIsSubmitted(true);
        } else {
          setServerError(result.error || 'Failed to submit form to Supabase. Please try again.');
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'An unexpected error occurred.';
        setServerError(message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const copyDirectEmail = () => {
    navigator.clipboard.writeText(WRITER_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setServerError(null);
    setFormData({
      fullName: '',
      email: '',
      serviceType: '',
      timeline: '',
      budget: '',
      projectBrief: '',
    });
    setErrors({});
    setTouched({});
  };

  const configured = isSupabaseConfigured();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-[#e2e8f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e0f2fe] text-[#0284c7] border border-[#38bdf8]/40">
            <Mail className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#111c2d] tracking-tight">
            Let’s discuss your content needs.
          </h2>
          <p className="font-serif text-base sm:text-lg text-[#3e484f] leading-relaxed">
            Need high-converting product descriptions, engaging blog posts, or clear website copy? Send a message below or email me directly.
          </p>

          {/* Direct email pill */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={copyDirectEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display font-medium bg-[#f0f3ff] text-[#0051d5] hover:bg-[#dee8ff] border border-[#dee8ff] transition-colors"
            >
              <span>Email: <strong>{WRITER_PROFILE.email}</strong></span>
              {copiedEmail ? (
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <Check className="w-3.5 h-3.5" /> Copied!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#6e7980]" />
              )}
            </button>

            {/* Supabase status indicator badge */}
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-sans font-medium border ${
                configured
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}
              title={configured ? 'Connected to Supabase contact_messages' : 'Supabase credentials not yet supplied in .env'}
            >
              <Database className="w-3 h-3" />
              <span>{configured ? 'Supabase Connected' : 'Supabase: Set .env credentials'}</span>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-3xl mx-auto bg-[#f9f9ff] rounded-3xl p-6 sm:p-10 border border-[#e2e8f0] shadow-sm">
          
          {isSubmitted ? (
            /* Success State */
            <div className="py-8 text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#e0f2fe] border border-[#38bdf8] flex items-center justify-center mx-auto text-[#0284c7]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111c2d]">
                  Message Saved to Database!
                </h3>
                <p className="font-serif text-base text-[#3e484f] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your message and project details have been successfully recorded in the Supabase database. Sahiqa Farooq will review it and get back to you promptly.
                </p>
              </div>

              {/* Submission recap */}
              <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] text-left text-xs font-serif max-w-md mx-auto space-y-2">
                <div className="font-sans font-bold text-[#111c2d] uppercase tracking-wider text-[11px] border-b border-[#f1f5f9] pb-1 flex items-center justify-between">
                  <span>Saved Record Details</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Saved to contact_messages
                  </span>
                </div>
                <div><strong className="font-sans text-[#50616b]">Name:</strong> {formData.fullName}</div>
                <div><strong className="font-sans text-[#50616b]">Email:</strong> {formData.email}</div>
                <div><strong className="font-sans text-[#50616b]">Service:</strong> {formData.serviceType}</div>
                <div><strong className="font-sans text-[#50616b]">Timeline:</strong> {formData.timeline}</div>
                <div><strong className="font-sans text-[#50616b]">Budget:</strong> {formData.budget}</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-full text-xs font-display font-semibold bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Server / Supabase Error Alert */}
              {serverError && (
                <div className="p-4 rounded-2xl bg-[#ffdad6]/60 border border-[#ba1a1a]/40 text-xs text-[#93000a] space-y-1.5">
                  <div className="flex items-center gap-2 font-bold font-display text-sm">
                    <AlertTriangle className="w-4 h-4 text-[#ba1a1a] flex-shrink-0" />
                    <span>Submission Issue</span>
                  </div>
                  <p className="font-serif leading-relaxed">
                    {serverError}
                  </p>
                  {!configured && (
                    <div className="mt-2 pt-2 border-t border-[#ba1a1a]/20 text-[11px] font-sans">
                      <strong>Tip for beginners:</strong> Open your project settings or <code>.env</code> file, and add your <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> from your Supabase Dashboard (Project Settings → API).
                    </div>
                  )}
                </div>
              )}

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-display font-semibold text-[#111c2d]">
                    Your Name <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={() => handleBlur('fullName')}
                    placeholder="e.g. Sarah Miller"
                    className={`w-full px-5 py-3 rounded-2xl bg-white border text-sm text-[#111c2d] placeholder:text-[#94a3b8] focus:outline-none transition-all ${
                      touched.fullName && errors.fullName
                        ? 'border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                        : 'border-[#cbd5e1] focus:border-[#38bdf8] focus:ring-3 focus:ring-[#38bdf8]/20'
                    }`}
                  />
                  {touched.fullName && errors.fullName && (
                    <p className="text-xs text-[#ba1a1a] flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-display font-semibold text-[#111c2d]">
                    Your Email Address <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    placeholder="sarah@example.com"
                    className={`w-full px-5 py-3 rounded-2xl bg-white border text-sm text-[#111c2d] placeholder:text-[#94a3b8] focus:outline-none transition-all ${
                      touched.email && errors.email
                        ? 'border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                        : 'border-[#cbd5e1] focus:border-[#38bdf8] focus:ring-3 focus:ring-[#38bdf8]/20'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-xs text-[#ba1a1a] flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label htmlFor="serviceType" className="block text-xs font-display font-semibold text-[#111c2d]">
                  Service Needed <span className="text-[#ba1a1a]">*</span>
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  onBlur={() => handleBlur('serviceType')}
                  className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#111c2d] focus:outline-none transition-all ${
                    touched.serviceType && errors.serviceType
                      ? 'border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                      : 'border-[#cbd5e1] focus:border-[#38bdf8] focus:ring-3 focus:ring-[#38bdf8]/20'
                  }`}
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {touched.serviceType && errors.serviceType && (
                  <p className="text-xs text-[#ba1a1a] flex items-center gap-1 font-sans">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.serviceType}
                  </p>
                )}
              </div>

              {/* Timeline & Budget Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Timeline */}
                <div className="space-y-1.5">
                  <label htmlFor="timeline" className="block text-xs font-display font-semibold text-[#111c2d]">
                    Estimated Timeline <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    onBlur={() => handleBlur('timeline')}
                    className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#111c2d] focus:outline-none transition-all ${
                      touched.timeline && errors.timeline
                        ? 'border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                        : 'border-[#cbd5e1] focus:border-[#38bdf8] focus:ring-3 focus:ring-[#38bdf8]/20'
                  }`}
                  >
                    <option value="">Select turnaround time...</option>
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {touched.timeline && errors.timeline && (
                    <p className="text-xs text-[#ba1a1a] flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.timeline}
                    </p>
                  )}
                </div>

                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label htmlFor="budget" className="block text-xs font-display font-semibold text-[#111c2d]">
                    Approximate Budget <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onBlur={() => handleBlur('budget')}
                    className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#111c2d] focus:outline-none transition-all ${
                      touched.budget && errors.budget
                        ? 'border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                        : 'border-[#cbd5e1] focus:border-[#38bdf8] focus:ring-3 focus:ring-[#38bdf8]/20'
                    }`}
                  >
                    <option value="">Select budget range...</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {touched.budget && errors.budget && (
                    <p className="text-xs text-[#ba1a1a] flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.budget}
                    </p>
                  )}
                </div>
              </div>

              {/* Project Brief / Notes */}
              <div className="space-y-1.5">
                <label htmlFor="projectBrief" className="block text-xs font-display font-semibold text-[#111c2d]">
                  Project Details or Message <span className="text-[#ba1a1a]">*</span>
                </label>
                <textarea
                  id="projectBrief"
                  name="projectBrief"
                  rows={4}
                  value={formData.projectBrief}
                  onChange={handleChange}
                  onBlur={() => handleBlur('projectBrief')}
                  placeholder="Tell me about your product, blog topic, or website requirements..."
                  className={`w-full px-5 py-3 rounded-2xl bg-white border text-sm text-[#111c2d] placeholder:text-[#94a3b8] focus:outline-none transition-all font-serif ${
                    touched.projectBrief && errors.projectBrief
                      ? 'border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                      : 'border-[#cbd5e1] focus:border-[#38bdf8] focus:ring-3 focus:ring-[#38bdf8]/20'
                  }`}
                />
                <div className="flex justify-between items-center text-xs">
                  {touched.projectBrief && errors.projectBrief ? (
                    <p className="text-[#ba1a1a] flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.projectBrief}
                    </p>
                  ) : (
                    <span className="text-[#6e7980]">Minimum 15 characters</span>
                  )}
                  <span className="text-[#6e7980]">
                    {formData.projectBrief.length} chars
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full text-sm font-display font-bold bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-sm hover:shadow-[#2563eb]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Saving to Supabase...</span>
                  ) : (
                    <>
                      <span>Send Project Details</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Assurance footnote */}
              <div className="flex items-center justify-center gap-2 text-xs font-serif text-[#6e7980] pt-1 text-center">
                <Shield className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>Your submission is saved directly to your Supabase contact_messages database.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
