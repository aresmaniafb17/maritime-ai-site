import React, { useState } from 'react';
import { ArrowRight, Play, ShieldCheck, Compass, Anchor, Ship } from 'lucide-react';

interface HeroProps {
  onExploreApps: () => void;
  onOpenDemo: (appId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreApps, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'gangway' | 'offshorePtw' | 'collision'>('gangway');

  const previews = {
    gangway: {
      title: 'MaritLog Gangway & Visitor Management',
      status: 'Active Port Operations',
      badge: 'VISITOR LOG SYSTEM',
      tag: 'VISITOR MANAGEMENT KIOSK',
      screenshotUrl: '/src/assets/images/visitor_kiosk_pass_ui_1791931797248.jpg',
      appId: 'maritlog-gangway',
      steps: [
        { label: 'Bunkering Contractor Sign-in', detail: 'Shell Marine Barge · Verified' },
        { label: 'Port State Control Clearance', detail: 'Paris MoU Officer · Fast-Tracked' },
        { label: 'Emergency Muster Roll', detail: '38 Souls Onboard · Synchronized' }
      ]
    },
    offshorePtw: {
      title: 'SeaPermit Permit to Work (PTW) AI',
      status: 'Deck & Tank Operations',
      badge: 'PERMIT TO WORK SYSTEM',
      tag: 'PERMIT TO WORK (PTW) SYSTEM',
      screenshotUrl: '/src/assets/images/ptw_permit_dashboard_ui_1791931797633.jpg',
      appId: 'seapermit-ptw',
      steps: [
        { label: 'Ballast Tank 3 Entry', detail: 'Gas Test: O2 20.9%, 0% LEL · Pass' },
        { label: 'Main Deck Hot Work (Welding)', detail: 'Fire Watch Deployed · Active' },
        { label: 'SIMOPS Conflict Resolution', detail: 'Zero Mooring Overlap · Cleared' }
      ]
    },
    collision: {
      title: 'BridgeWatch Collision & AIS AI',
      status: 'ECDIS Integration',
      badge: 'COLREGs Advisory Active',
      tag: 'VESSEL BRIDGE TELEMETRY',
      screenshotUrl: '/src/assets/images/maritime_vessel_ai_bridge_1791937346616.jpg',
      appId: 'bridgewatch-collision',
      steps: [
        { label: 'AIS Target Tracking', detail: '512 Vessel Vectors Monitored' },
        { label: 'Critical CPA Alert (Crossing)', detail: 'Target IMO 9418291 · CPA 0.12 nm' },
        { label: 'Automated Course Advisory', detail: 'Alter Course Starboard 23°' }
      ]
    }
  };

  const currentPreview = previews[activeTab];

  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 bg-[#FFFFFF]">
      {/* Subtle maritime light blue and terracotta ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-[#1E3A8A]/10 via-[#C84B31]/8 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition & CTAs in Deep Navy & Terracotta */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Kicker in Terracotta & Ocean Blue */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#C84B31] tracking-wider uppercase">
              <span>Maritime AI Software Solutions</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[#1E3A8A]">Google AI Studio Powered</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">IMO & ISPS Aligned</span>
            </div>

            {/* Strong Headline in Deep Navy Blue (#0F172A) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#0F172A] tracking-tight leading-[1.12] [text-wrap:balance]">
              Intelligent Maritime Tools, Vessel Analytics & Offshore Process Automation
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Equip commercial vessels and offshore platforms with proprietary intelligent software. Automate digital gangway visitor logs, authorize hazardous deck permits (Hot Work & Tank Entry), parse Bills of Lading, and navigate with real-time AIS collision avoidance.
            </p>

            {/* Unboxed Editorial Specs */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <Ship className="w-4 h-4 text-[#C84B31]" />
                <span>100% Offline Bridge Resilience</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#1E3A8A]" />
                <span>Sub-100ms COLREGs Calculation</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero-Data Retention Architecture</span>
              </span>
            </div>

            {/* Primary Action Buttons in Terracotta Red */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onExploreApps}
                className="px-6 py-3 text-sm font-bold text-white bg-[#C84B31] hover:bg-[#B33E26] active:scale-[0.98] rounded-lg transition-all shadow-lg shadow-[#C84B31]/25 flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>View AI Tools</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="px-6 py-3 text-sm font-bold text-[#C84B31] hover:text-[#B33E26] bg-[#FFF5F2] hover:bg-[#FFEBE5] border border-[#C84B31]/40 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Get in Touch</span>
              </a>

              <button
                onClick={() => onOpenDemo('maritlog-gangway')}
                className="px-4 py-3 text-sm font-semibold text-[#1E3A8A] hover:text-[#0F172A] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#C84B31] fill-[#C84B31]" />
                <span>Launch Interactive Demo</span>
              </button>
            </div>

            {/* Social Proof / Claim-to-Proof Adjacency */}
            <div className="pt-5 border-t border-slate-200 flex items-center gap-6 text-xs text-slate-500">
              <div>
                <span className="font-extrabold text-[#0F172A] text-base font-mono tabular-nums">100%</span>
                <span className="ml-1 text-slate-600">ISPS Security Logged</span>
              </div>
              <span className="text-slate-300">|</span>
              <div>
                <span className="font-extrabold text-[#0F172A] text-base font-mono tabular-nums">4.2 min</span>
                <span className="ml-1 text-slate-600">Offshore PTW Approval</span>
              </div>
              <span className="text-slate-300">|</span>
              <div>
                <span className="font-extrabold text-[#0F172A] text-base font-mono tabular-nums">5.2%</span>
                <span className="ml-1 text-slate-600">Avg Fuel Saved (CII)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Visual Preview Card with Subtle Light Blue Borders & Terracotta Highlights */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl border-2 border-sky-100 bg-white overflow-hidden shadow-xl relative group">
              
              {/* Media Container with Real Application Screenshots */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  key={activeTab}
                  src={currentPreview.screenshotUrl}
                  alt={currentPreview.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Visual badge in Terracotta */}
                <div className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-mono font-bold text-white bg-[#C84B31] backdrop-blur-md rounded shadow-sm">
                  {currentPreview.tag}
                </div>

                {/* Live System Indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0B192C]/90 backdrop-blur-md border border-white/10 text-[11px] text-white font-medium shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{currentPreview.title}</span>
                </div>
              </div>

              {/* Interactive Teaser Control */}
              <div className="p-4 sm:p-5 space-y-4 bg-white border-t border-sky-50">
                
                {/* Interactive Segmented Control */}
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setActiveTab('gangway')}
                    className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === 'gangway'
                        ? 'bg-white text-[#C84B31] shadow-xs'
                        : 'text-slate-600 hover:text-[#0F172A]'
                    }`}
                  >
                    Visitor Management
                  </button>
                  <button
                    onClick={() => setActiveTab('offshorePtw')}
                    className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === 'offshorePtw'
                        ? 'bg-white text-[#C84B31] shadow-xs'
                        : 'text-slate-600 hover:text-[#0F172A]'
                    }`}
                  >
                    Permit to Work (PTW)
                  </button>
                  <button
                    onClick={() => setActiveTab('collision')}
                    className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === 'collision'
                        ? 'bg-white text-[#C84B31] shadow-xs'
                        : 'text-slate-600 hover:text-[#0F172A]'
                    }`}
                  >
                    Bridge AIS AI
                  </button>
                </div>

                {/* Active Preview Data */}
                <div className="space-y-2.5 bg-slate-50 p-3.5 rounded-xl border border-sky-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0F172A]">{currentPreview.title}</span>
                    <span className="font-mono text-[#C84B31] font-bold text-[11px]">{currentPreview.badge}</span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {currentPreview.steps.map((st, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[11px] text-slate-600">
                        <span className="text-slate-500">{st.label}</span>
                        <span className="font-mono text-[#0F172A] font-semibold">{st.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button inside preview */}
                <button
                  onClick={() => onOpenDemo(activeTab === 'gangway' ? 'maritlog-gangway' : activeTab === 'offshorePtw' ? 'seapermit-ptw' : 'bridgewatch-collision')}
                  className="w-full py-2.5 px-3 text-xs font-bold text-white bg-[#C84B31] hover:bg-[#B33E26] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#C84B31]/20"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Simulation in Sandbox</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
