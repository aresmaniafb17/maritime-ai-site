import React, { useState } from 'react';
import { AI_APPS } from '../data/appsData';
import { AIApp } from '../types';
import { Play, ArrowRight, Check, Anchor, Ship, Compass } from 'lucide-react';

interface AppShowcaseProps {
  onOpenDemo: (appId: string) => void;
  onSelectPlan: (planId?: string) => void;
}

export const AppShowcase: React.FC<AppShowcaseProps> = ({ onOpenDemo, onSelectPlan }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Vessel Operations', 'Offshore Safety', 'Logistics & Cargo', 'Telemetry & Navigation'];

  const filteredApps = selectedCategory === 'All'
    ? AI_APPS
    : AI_APPS.filter((app) => app.category === selectedCategory);

  return (
    <section id="apps" className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold text-[#C84B31] tracking-wider uppercase">
              Maritime AI Software Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight leading-tight [text-wrap:balance]">
              Specialized Maritime Web Applications for Commercial Fleets & Offshore Operations
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore our proprietary suite of marine software. Test real vessel scenarios—from gangway ISPS logging to deck Hot Work permits and AIS collision calculations—directly inside the interactive live sandbox.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Segmented Control on Light Slate) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl border border-slate-300 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C84B31] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Structured Light-Blue / Slate Application Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app: AIApp) => (
            <div
              key={app.id}
              className="rounded-2xl border border-sky-100 bg-white p-6 flex flex-col justify-between hover:border-[#C84B31]/60 hover:shadow-xl transition-all duration-200 group"
            >
              <div className="space-y-4">
                
                {/* Screenshot Thumbnail if available */}
                {app.screenshotUrl && (
                  <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-200 relative bg-slate-100">
                    <img
                      src={app.screenshotUrl}
                      alt={`${app.name} UI Preview`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-mono font-bold text-white bg-[#0F172A]/90 rounded border border-white/20 shadow-xs">
                      SYSTEM SCREENSHOT
                    </div>
                  </div>
                )}

                {/* Unboxed Metadata Line */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C84B31] font-bold">{app.category}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="font-mono text-slate-600">{app.version}</span>
                  </div>
                  <div className="font-mono text-[#1E3A8A] font-bold text-[11px] tabular-nums">
                    {app.metrics.value}
                  </div>
                </div>

                {/* App Name & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#C84B31] transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1 font-medium">
                    {app.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {app.description}
                </p>

                {/* Capabilities Checklist */}
                <div className="pt-2 space-y-2 border-t border-slate-100">
                  {app.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: "Launch App" / "Request Demo" */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2.5">
                <button
                  onClick={() => onOpenDemo(app.id)}
                  className="flex-1 py-2 px-3 text-xs font-bold text-[#0F172A] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3 h-3 text-[#C84B31] fill-[#C84B31]" />
                  <span>Launch App</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="py-2 px-3.5 text-xs font-bold text-white bg-[#C84B31] hover:bg-[#B33E26] rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer shadow-sm shadow-[#C84B31]/20"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Deployment Consultation Banner in Deep Blue Contrast */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-base font-extrabold text-[#0F172A] flex items-center gap-2 justify-center sm:justify-start">
              <Anchor className="w-5 h-5 text-[#C84B31]" />
              <span>Need Custom Fleet Onboarding, Bridge NMEA Integrations or Satellite Deployment?</span>
            </h4>
            <p className="text-xs text-slate-500">
              Our maritime software engineering team configures vessel server instances, ECDIS data gateways, and ERP connectors (DNV Veracity, Veson IMOS).
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 text-xs font-bold text-white bg-[#C84B31] hover:bg-[#B33E26] rounded-lg whitespace-nowrap transition-colors shadow-md shadow-[#C84B31]/20 cursor-pointer"
          >
            Consult Fleet Engineers
          </a>
        </div>

      </div>
    </section>
  );
};
