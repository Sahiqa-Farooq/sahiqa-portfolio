import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Terminal, Globe, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface VercelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelGuideModal: React.FC<VercelGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111c2d]/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-[#e2e8f0] p-6 sm:p-8"
        role="dialog"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#e2e8f0]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e0f2fe] text-[#0284c7] border border-[#38bdf8]/40 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Beginner Friendly Guide</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold font-display text-[#111c2d]">
              How to Preview & Publish on Vercel
            </h2>
            <p className="text-sm sm:text-base font-serif text-[#3e484f] mt-1">
              No VS Code or coding tools required! You can deploy this entire portfolio live to the web in under 3 minutes directly through your web browser.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6e7980] hover:text-[#111c2d] hover:bg-[#f1f5f9] rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className="py-6 space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold text-[#111c2d] text-base flex items-center gap-2">
                Preview your site instantly in AI Studio
              </h3>
              <p className="text-sm font-serif text-[#3e484f] leading-relaxed">
                You are already looking at your live preview right inside this browser window! Every interaction, scroll, filter, and contact form submission works in real-time. Try toggling mobile view or resizing your browser to test responsiveness.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold text-[#111c2d] text-base flex items-center gap-2">
                Push or Export to GitHub (Browser Only)
              </h3>
              <p className="text-sm font-serif text-[#3e484f] leading-relaxed">
                If you have a free GitHub account (<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] underline">github.com</a>), you can export or link your AI Studio workspace to a new GitHub repository with one click.
              </p>
              <div className="text-xs text-[#50616b] bg-white p-3 rounded-xl border border-[#cbd5e1]">
                <strong>Alternative Option:</strong> You can download the project files as a ZIP, go to GitHub, create a new repo called <code className="bg-[#f1f5f9] px-1.5 py-0.5 rounded text-[#2563eb]">my-writer-portfolio</code>, and drag-and-drop the files right in your browser.
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold text-[#111c2d] text-base flex items-center gap-2">
                Deploy with Vercel (100% Free Forever)
              </h3>
              <p className="text-sm font-serif text-[#3e484f] leading-relaxed">
                Vercel is the easiest, most reliable cloud host for modern web apps. Here is the exact zero-code workflow:
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-[#3e484f] pl-1">
                <li>Go to <a href="https://vercel.com/signup" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-semibold underline">vercel.com/signup</a> and click <strong>"Continue with GitHub"</strong>.</li>
                <li>On your Vercel Dashboard, click <strong>"Add New..." → "Project"</strong>.</li>
                <li>Find your <code className="bg-[#f1f5f9] px-1 py-0.5 rounded text-[#2563eb]">my-writer-portfolio</code> repository and click <strong>"Import"</strong>.</li>
                <li>Vercel automatically detects Vite + React. Keep all defaults as they are!</li>
                <li>Click the blue <strong>"Deploy"</strong> button.</li>
              </ol>
              <div className="p-3 bg-[#e0f2fe]/60 border border-[#38bdf8]/50 rounded-xl text-xs text-[#0284c7] flex items-center gap-2 mt-2">
                <ShieldCheck className="w-4 h-4 flex-shrink-0 text-[#0284c7]" />
                <span>That’s it! Within 45 seconds, Vercel gives you a free live URL (e.g. <code>https://my-writer-portfolio.vercel.app</code>) with free SSL HTTPS security.</span>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-sm">
              4
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold text-[#111c2d] text-base flex items-center gap-2">
                Connect your Custom Domain (Optional)
              </h3>
              <p className="text-sm font-serif text-[#3e484f] leading-relaxed">
                Want your own name like <code>elenavance.com</code>? In your Vercel Project Dashboard, go to <strong>Settings → Domains</strong>, type your domain, and follow the simple 2 DNS records shown.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#e2e8f0]">
          <div className="text-xs text-[#6e7980] flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-[#2563eb]" />
            <span>Built with standard React + Vite + Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all shadow-sm w-full sm:w-auto"
            >
              <span>Open Vercel New Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#f1f5f9] text-[#1e293b] hover:bg-[#e2e8f0] transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
