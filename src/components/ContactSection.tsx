import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Clock, ShieldCheck, CheckCircle2, Anchor, Ship } from 'lucide-react';
import { AI_APPS } from '../data/appsData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    vesselImo: '',
    appInterest: 'maritlog-gangway',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketSuccess, setTicketSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const businessEmails = [
    { label: 'General & Fleet Inquiries', address: 'info@maritimeaisolutions.com.tr' },
    { label: 'Commercial Fleet Licensing & Sales', address: 'sales@maritimeaisolutions.com.tr' },
    { label: '24/7 Maritime Support Hotline', address: 'support@maritimeaisolutions.com.tr' },
  ];

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedEmail(address);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please provide a valid commercial or fleet work email.');
      return;
    }
    if (!formData.company.trim()) {
      setErrorMessage('Please provide your shipping company or vessel operator name.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please describe your vessel or fleet requirements (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const ticketId = `#MARIT-${Math.floor(10000 + Math.random() * 90000)}`;
      setTicketSuccess(ticketId);
    }, 900);
  };

  const handleReset = () => {
    setTicketSuccess(null);
    setFormData({
      name: '',
      email: '',
      company: '',
      vesselImo: '',
      appInterest: 'maritlog-gangway',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-bold text-[#C84B31] tracking-wider uppercase">
            Fleet Operations & Technical Support
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight leading-tight [text-wrap:balance]">
            Connect with Our Maritime AI Solutions Architects
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Discuss shipboard deployments, gangway touchscreen tablet setups, bridge ECDIS integration, and volume fleet rollout discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (5 cols): Custom Domain Business Emails */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#F8FAFC] p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C84B31] uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Verified Maritime Domain Endpoints</span>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Reach out directly to our dedicated maritime engineering and sales desks:
              </p>

              <div className="space-y-3">
                {businessEmails.map((item) => (
                  <div
                    key={item.address}
                    className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3 group hover:border-[#C84B31]/50 transition-colors shadow-xs"
                  >
                    <div>
                      <div className="text-[11px] text-slate-500">{item.label}</div>
                      <div className="font-mono text-xs font-bold text-[#0F172A] select-all">
                        {item.address}
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(item.address)}
                      className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-[#0F172A] border border-slate-200 transition-colors cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail === item.address ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Service Level Agreement */}
              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold">
                  <Clock className="w-4 h-4 text-[#C84B31]" />
                  <span>Guaranteed 2-Hour Maritime Response SLA</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  All fleet inquiries are triaged by Master Mariners and maritime telemetry systems engineers.
                </p>
              </div>

              <div className="pt-2 text-xs text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>DKIM, SPF & DMARC Enforced on Domain</span>
              </div>
            </div>

            {/* Custom Domain Note */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-600 space-y-1.5 shadow-xs">
              <div className="font-bold text-[#0F172A] flex items-center gap-2">
                <Anchor className="w-4 h-4 text-[#C84B31]" />
                <span>Custom Domain Fleet Portal Gateway:</span>
              </div>
              <div>Web Portal: <code className="text-[#C84B31] font-bold font-mono">maritimeaisolutions.com.tr</code></div>
              <div>Marine Satellite Gateway: <code className="text-slate-700 font-mono text-[11px]">vsat.maritimeaisolutions.com.tr</code></div>
            </div>

          </div>

          {/* Right Column (7 cols): Functional Contact Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm relative">
            
            {ticketSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    Maritime Deployment Ticket Generated
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your request has been routed to our Maritime Solutions team. A dedicated Marine Systems Engineer will follow up within 2 hours.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 max-w-sm mx-auto font-mono text-xs text-[#0F172A] space-y-1 shadow-xs">
                  <div className="text-slate-400 text-[10px] uppercase font-sans">Support Ticket Reference</div>
                  <div className="text-base font-extrabold text-[#C84B31]">{ticketSuccess}</div>
                  <div className="text-[11px] text-slate-500 font-sans">Copy saved to {formData.email}</div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 text-xs font-bold text-slate-700 hover:text-[#0F172A] bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                    Request Software Demo or Fleet Quote
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Please provide your vessel, platform, or shore-side operations details:
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Full Name <span className="text-[#C84B31]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Capt. James Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Business Email <span className="text-[#C84B31]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. operations@bluehorizon.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Vessel / Company Name <span className="text-[#C84B31]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ocean Harmony Tankers / Maersk"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      IMO Number or Fleet Size (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. IMO 9824012 (or 12 Vessels)"
                      value={formData.vesselImo}
                      onChange={(e) => setFormData({ ...formData, vesselImo: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Primary Software Solution
                  </label>
                  <select
                    value={formData.appInterest}
                    onChange={(e) => setFormData({ ...formData, appInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-[#0F172A] focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31] transition-all"
                  >
                    {AI_APPS.map((app) => (
                      <option key={app.id} value={app.id}>
                        {app.name} ({app.category})
                      </option>
                    ))}
                    <option value="complete-suite">Complete Maritime Fleet Suite (All Apps)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Operational Requirements / Message <span className="text-[#C84B31]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your vessel types, gangway tablet requirements, permit to work workflows, or current ECDIS integration needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm font-bold text-white bg-[#C84B31] hover:bg-[#B33E26] active:scale-[0.99] rounded-xl transition-all shadow-md shadow-[#C84B31]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Dispatch Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
