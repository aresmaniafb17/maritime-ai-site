import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Anchor } from 'lucide-react';

interface NavbarProps {
  onOpenCompliance: () => void;
  onOpenDemo: (appId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCompliance, onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Apps', href: '#apps' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Privacy', href: '#compliance', onClick: onOpenCompliance },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 border-b border-slate-200/90 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Sleek Maritime-AI Logo Placeholder */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-base sm:text-lg font-extrabold tracking-tight text-[#0F172A] hover:text-[#1E3A8A] transition-colors whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C84B31] to-[#1E3A8A] flex items-center justify-center p-0.5 shadow-sm group-hover:shadow-md transition-all">
            <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
              <Anchor className="w-4 h-4 text-[#C84B31] group-hover:rotate-12 transition-transform duration-200" />
            </div>
          </div>
          <span className="font-extrabold tracking-tight">Maritime AI Software Solutions</span>
        </a>

        {/* Zone 2: Blue Navigation Links (Clean single-line text with subtle hover) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#1E3A8A]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              className="hover:text-[#C84B31] transition-colors py-1 whitespace-nowrap shrink-0 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#C84B31] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Prominent CTA button in terracotta red ("Explore Solutions") */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenDemo('maritlog-gangway')}
            className="px-4 py-2 text-xs font-bold text-white bg-[#C84B31] hover:bg-[#B33E26] active:scale-[0.98] rounded-md transition-all shadow-md shadow-[#C84B31]/20 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Explore Solutions</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0F172A] hover:text-[#C84B31] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="px-3 py-2 text-sm font-semibold text-[#1E3A8A] hover:text-[#C84B31] hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo('maritlog-gangway');
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#C84B31] hover:bg-[#B33E26] rounded-md text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Explore Solutions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
