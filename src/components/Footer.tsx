import React from 'react';
import { Anchor, ArrowUpRight, ShieldCheck, Compass } from 'lucide-react';

interface FooterProps {
  onOpenCompliance: () => void;
  onOpenDemo: (appId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCompliance, onOpenDemo }) => {
  return (
    <footer className="bg-[#040911] border-t border-[#162E4E] text-xs text-slate-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-extrabold text-sm">
              <div className="w-6 h-6 rounded bg-[#C84B31] flex items-center justify-center p-0.5 shadow-sm">
                <Anchor className="w-3.5 h-3.5 text-white" />
              </div>
              <span>Maritime AI Solutions</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Next-generation AI & smart automation for maritime and offshore operations created via Google AI Studio. Engineered for high-throughput commercial shipping and offshore rigs.
            </p>
            <div className="text-[11px] text-[#FFA394] font-medium">
              Verified Host Domain: <span className="text-white font-mono font-bold">maritimeaisolutions.com.tr</span>
            </div>
            {/* Social Media Placeholders */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#contact"
                className="w-7 h-7 rounded-lg bg-[#0E233D] hover:bg-[#C84B31] border border-[#162E4E] hover:border-[#C84B31] flex items-center justify-center text-slate-300 hover:text-white transition-all"
                title="LinkedIn Fleet Network"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.72a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z"/></svg>
              </a>
              <a
                href="#contact"
                className="w-7 h-7 rounded-lg bg-[#0E233D] hover:bg-[#C84B31] border border-[#162E4E] hover:border-[#C84B31] flex items-center justify-center text-slate-300 hover:text-white transition-all"
                title="X / Twitter Maritime Updates"
                aria-label="X Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="#contact"
                className="w-7 h-7 rounded-lg bg-[#0E233D] hover:bg-[#C84B31] border border-[#162E4E] hover:border-[#C84B31] flex items-center justify-center text-slate-300 hover:text-white transition-all"
                title="GitHub Maritime SDK & Repositories"
                aria-label="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Maritime AI Systems */}
          <div className="space-y-2.5">
            <div className="font-bold text-white">Maritime AI Suite</div>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button
                  onClick={() => onOpenDemo('maritlog-gangway')}
                  className="hover:text-[#FFA394] transition-colors text-left cursor-pointer"
                >
                  MaritLog Gangway & Muster AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDemo('seapermit-ptw')}
                  className="hover:text-[#FFA394] transition-colors text-left cursor-pointer"
                >
                  SeaPermit Offshore Work Permit (PTW)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDemo('navidoc-cargo')}
                  className="hover:text-[#FFA394] transition-colors text-left cursor-pointer"
                >
                  NaviDoc Bill of Lading & IMDG
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDemo('bridgewatch-collision')}
                  className="hover:text-[#FFA394] transition-colors text-left cursor-pointer"
                >
                  BridgeWatch AIS Collision Avoidance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDemo('safemarine-audit')}
                  className="hover:text-[#FFA394] transition-colors text-left cursor-pointer"
                >
                  SafeMarine Gas & HSE Audit
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Fleet Operations */}
          <div className="space-y-2.5">
            <div className="font-bold text-white">Fleet Operations</div>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#features" className="hover:text-[#FFA394] transition-colors">Core Architecture</a></li>
              <li><a href="#features" className="hover:text-[#FFA394] transition-colors">Offline Vessel Server</a></li>
              <li><a href="#pricing" className="hover:text-[#FFA394] transition-colors">Fleet Licensing Plans</a></li>
              <li><a href="#contact" className="hover:text-[#FFA394] transition-colors">Contact Fleet Operations</a></li>
              <li>
                <a
                  href="https://aistudio.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFA394] transition-colors inline-flex items-center gap-1"
                >
                  <span>Google AI Studio Platform</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Compliance & Legal */}
          <div className="space-y-2.5">
            <div className="font-bold text-white">Compliance & Class Standards</div>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button
                  onClick={onOpenCompliance}
                  className="hover:text-[#FFA394] transition-colors text-left cursor-pointer"
                >
                  Seafarer Privacy & GDPR Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCompliance}
                  className="hover:text-[#FFA394] transition-colors text-left cursor-pointer"
                >
                  Commercial Fleet License
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCompliance}
                  className="hover:text-[#FFA394] transition-colors text-left cursor-pointer"
                >
                  IMO SOLAS & ISPS Security
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCompliance}
                  className="hover:text-[#FFA394] transition-colors text-left cursor-pointer"
                >
                  Port State Audit Checklist
                </button>
              </li>
              <li>
                <a href="mailto:dpa@maritimeaisolutions.com.tr" className="text-[#FFA394] hover:text-white font-mono text-[11px] font-semibold">
                  dpa@maritimeaisolutions.com.tr
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Unboxed Status */}
        <div className="pt-8 border-t border-[#162E4E] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Maritime AI Software Solutions Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium text-slate-300">IMO FAL.5 Electronic Certificates</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="font-medium text-slate-300">ISPS Part A & B Aligned</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="font-medium text-slate-300">SOLAS Chapter IX ISM Audited</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
