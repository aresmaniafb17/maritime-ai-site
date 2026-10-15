import React from 'react';
import { Anchor, ShieldCheck, Compass, Radio, ArrowRight, CheckCircle2, Ship } from 'lucide-react';

interface FeaturesBentoProps {
  onOpenCompliance: () => void;
  onExploreApps: () => void;
}

export const FeaturesBento: React.FC<FeaturesBentoProps> = ({ onOpenCompliance, onExploreApps }) => {
  return (
    <section id="features" className="py-20 md:py-28 border-t border-slate-200 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-bold text-[#C84B31] tracking-wider uppercase">
            Maritime-Grade Architecture & Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight leading-tight [text-wrap:balance]">
            Mission-Critical AI Automation Engineered for Open Oceans & Offshore Rigs
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From vessel gangways in congested commercial ports to offshore drilling platforms in extreme sea states, our applications run with 100% offline shipboard autonomy.
          </p>
        </div>

        {/* Asymmetric Bento Grid in Clean Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card 1 (Span 2): Offshore Platform Hazardous Permits with real visual */}
          <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="space-y-3 max-w-xl z-10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C84B31] uppercase">
                <Anchor className="w-4 h-4" />
                <span>01. Offshore & Marine Safety Permit to Work</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                Hazardous Hot Work, Ballast Tank Entry & SIMOPS Scheduling
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Coordinate complex marine work permits across deck, engine, and subsea teams. Multi-gas sensor integration monitors LEL and toxic gas thresholds in real-time, preventing fatal deck and confined space accidents.
              </p>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative aspect-[16/9]">
              <img
                src="/src/assets/images/offshore_platform_ptw_operations_1791937347284.jpg"
                alt="Offshore Platform Safety Inspection with digital permits and sensor telemetry"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-mono font-bold text-white bg-[#0F172A]/90 rounded border border-white/20 shadow-sm">
                OFFSHORE PLATFORM PTW OPERATIONS
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 z-10">
              <div className="flex items-center gap-4">
                <span className="font-bold text-[#0F172A]">Turnaround: 4.2 min avg</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Automatic Master Sign-Off & Lockout Padlock Log</span>
              </div>
              <button
                onClick={onExploreApps}
                className="text-[#C84B31] hover:text-[#B33E26] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
              >
                <span>View Marine Safety Modules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento Card 2: Multimodal Bill of Lading & IMDG Cargo OCR with real visual */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1E3A8A] uppercase">
                <Ship className="w-4 h-4" />
                <span>02. Intelligent Cargo Manifest OCR</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                Bill of Lading & IMDG Hazmat Parser
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ingest non-standard shipping documents, container manifests, and hazardous cargo declarations into validated JSON for instant customs clearance.
              </p>
            </div>

            <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] relative">
              <img
                src="/src/assets/images/maritime_cargo_port_logistics_1791937346378.jpg"
                alt="Smart Maritime Port Container Manifest Terminal Logistics"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">IMO IMDG 2026 Segregation Verified</span>
              <button
                onClick={onOpenCompliance}
                className="text-[#C84B31] hover:text-[#B33E26] font-bold cursor-pointer"
              >
                Read IMDG Standards
              </button>
            </div>
          </div>

          {/* Bento Card 3: 100% Offline Shipboard Resilience */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase">
                <Radio className="w-4 h-4" />
                <span>03. Offline Shipboard Architecture</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                Zero Cloud Dependence at Sea
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Local SQLite database and Edge AI container runs directly on shipboard bridge workstations or gangway tablets. Seamlessly queues satellite sync when Starlink or VSAT connection is available.
              </p>

              {/* Offline buffer illustration in light container */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-700 space-y-1.5">
                <div className="flex justify-between items-center text-[#0F172A] font-bold">
                  <span>Shipboard Edge Gateway</span>
                  <span className="text-emerald-700 bg-emerald-100 border border-emerald-300 px-1.5 py-0.5 rounded text-[10px]">LOCAL RUNTIME</span>
                </div>
                <div className="text-slate-500">Satellite Link: VSAT Ocean Region 3</div>
                <div className="text-emerald-700 font-semibold">Local Storage: 100% Offline Functional</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>SOLAS Chapter IV Aligned</span>
              <span className="font-bold text-[#0F172A]">Full Vessel Autonomy</span>
            </div>
          </div>

          {/* Bento Card 4 (Span 2): BridgeWatch AIS Collision & Weather Trajectory */}
          <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C84B31] uppercase">
                  <Compass className="w-4 h-4" />
                  <span>04. AIS Spatial Intelligence & COLREGs</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                  Sub-Second Collision Risk & Weather Routing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  BridgeWatch ingests NMEA-0183 / 2000 AIS feeds to calculate CPA/TCPA collision vectors, advise safe COLREGs collision avoidance course changes, and optimize voyage fuel burn to maintain IMO Carbon Intensity (CII) Grade A.
                </p>
                <div className="pt-2 flex items-center gap-3 text-xs text-slate-600">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>NMEA Bridge Interface Ready</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>4-8% Voyage Fuel Reduction</span>
                </div>
              </div>

              {/* Navigation Telemetry Dashboard widget */}
              <div className="bg-slate-50 p-4 rounded-xl border border-sky-100 space-y-2.5 text-xs">
                <div className="text-[#0F172A] font-bold pb-1 border-b border-slate-200 flex justify-between items-center">
                  <span>BridgeWatch Collision Matrix</span>
                  <span className="text-[#C84B31] bg-[#FFF5F2] font-mono px-2 py-0.5 rounded text-[10px] font-bold">CPA MONITORED</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Tracked AIS Targets:</span>
                  <span className="font-mono font-bold text-[#0F172A]">512 Vessels in Range</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Closest Point of Approach:</span>
                  <span className="font-mono font-bold text-[#C84B31]">0.85 nm (Target 2)</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">COLREGs Advisory Rule:</span>
                  <span className="font-mono text-[#1E3A8A] font-bold">Rule 14 (Head-on) Starboard</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Weather Current Drift:</span>
                  <span className="font-mono text-emerald-700 font-bold">+ 1.2 kts Assisted</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Integrates with Furuno, Sperry Marine, Raytheon Anschütz, and Transas ECDIS</span>
              <a href="#contact" className="text-[#C84B31] hover:text-[#B33E26] font-bold">
                Request Bridge Integration Kit
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
