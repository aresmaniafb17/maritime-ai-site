import React, { useState } from 'react';
import { COMPLIANCE_SECTIONS } from '../data/complianceData';
import { ShieldCheck, FileText, CheckCircle2, Copy, Check, X, Anchor } from 'lucide-react';

interface ComplianceHubProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const ComplianceHub: React.FC<ComplianceHubProps> = ({ isModal = false, onClose }) => {
  const [activeDocId, setActiveDocId] = useState<string>('privacy-policy');
  const [copiedDoc, setCopiedDoc] = useState<boolean>(false);

  const currentDoc = COMPLIANCE_SECTIONS.find((d) => d.id === activeDocId) || COMPLIANCE_SECTIONS[0];

  const handleCopyText = () => {
    const fullText = `${currentDoc.title} (Effective: ${currentDoc.effectiveDate})\n\n` +
      currentDoc.content
        .map((c) => `${c.sectionHeading}\n` + c.paragraphs.join('\n\n'))
        .join('\n\n');

    navigator.clipboard.writeText(fullText);
    setCopiedDoc(true);
    setTimeout(() => setCopiedDoc(false), 2000);
  };

  const domainChecklist = [
    { title: 'IMO FAL.5 Electronic Certificates', desc: 'Compliant electronic logbooks and SHA-256 Master sign-offs', passed: true },
    { title: 'ISPS Code Part A & B Security', desc: 'Gangway visitor logging, escort tagging, and security level readiness', passed: true },
    { title: 'SOLAS Chapter IX (ISM Code)', desc: 'Safety management system audit trail with 7-year statutory retention', passed: true },
    { title: 'Seafarer GDPR Data Protection', desc: 'Encrypted crew PII & automated 90-day purge of temporary guest photos', passed: true },
    { title: 'Offline-First Vessel Server Cache', desc: 'Guarantees gangway muster access during oceanic satellite blackouts', passed: true },
    { title: 'Custom Fleet Domain CNAME Ready', desc: 'Configured for portal.maritimeaisolutions.com.tr with automated TLS 1.3', passed: true }
  ];

  const contentMarkup = (
    <div className="space-y-8">
      {/* Tab Navigation in Light Slate & Terracotta */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto max-w-full">
          {COMPLIANCE_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveDocId(sec.id)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeDocId === sec.id
                  ? 'bg-[#C84B31] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              {sec.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyText}
            className="px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-[#0F172A] bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {copiedDoc ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedDoc ? 'Copied Full Document' : 'Copy Policy Text'}</span>
          </button>
        </div>
      </div>

      {/* Main Document Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (8 cols): Document Body */}
        <div className="lg:col-span-8 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                {currentDoc.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                <span>Effective Date: {currentDoc.effectiveDate}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-[#C84B31] font-bold">{currentDoc.badge}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {currentDoc.content.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-sm font-bold text-[#0F172A] tracking-tight">
                  {sec.sectionHeading}
                </h4>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* DPO Contact footnote */}
          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>Maritime Legal & Class Entity: Maritime AI Software Solutions Ltd.</span>
            <span className="font-mono text-[#C84B31] font-semibold">compliance@maritimeaisolutions.com.tr</span>
          </div>
        </div>

        {/* Right Column (4 cols): Regulatory Standards & Audit Checklist */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#C84B31] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Fleet Deployment Checklist</span>
            </div>
            
            <h4 className="text-sm font-bold text-[#0F172A]">
              Vessel & Port State Audit Readiness
            </h4>

            <p className="text-xs text-slate-500 leading-relaxed">
              When activating Maritime AI on your fleet, these statutory requirements are satisfied out-of-the-box:
            </p>

            <div className="space-y-3 pt-2">
              {domainChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#0F172A]">{item.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Satisfies Paris MoU, Tokyo MoU, US Coast Guard (USCG), and Class (DNV, Lloyd's Register, ABS) audit standards.
            </div>
          </div>

          {/* Maritime Legal & DPA Desk Card */}
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200 space-y-2 text-xs">
            <div className="font-bold text-[#0F172A] flex items-center gap-2">
              <Anchor className="w-4 h-4 text-[#C84B31]" />
              <span>Designated Person Ashore (DPA)</span>
            </div>
            <p className="text-slate-600">
              For Port State authority inquiries, flag state certificate audits, or custom DPA addendums:
            </p>
            <div className="font-mono text-[#C84B31] text-[11px] font-semibold">
              dpa@maritimeaisolutions.com.tr
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <div
          className="w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto my-auto relative text-slate-900"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C84B31]" />
              <h2 className="text-lg font-bold text-[#0F172A]">Maritime Legal & Compliance Center</h2>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-[#0F172A] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close Compliance Modal"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {contentMarkup}
        </div>
      </div>
    );
  }

  return (
    <section id="compliance" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-bold text-[#C84B31] tracking-wider uppercase">
            Statutory Frameworks & Compliance Hub
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight leading-tight [text-wrap:balance]">
            IMO, SOLAS, ISPS & Maritime GDPR Compliance
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Statutory legal terms, electronic signature validity, and seafarer data privacy designed for immediate fleet deployment, flag state compliance, and port authority inspections.
          </p>
        </div>

        {contentMarkup}
      </div>
    </section>
  );
};
