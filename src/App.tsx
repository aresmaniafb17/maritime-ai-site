import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesBento } from './components/FeaturesBento';
import { AppShowcase } from './components/AppShowcase';
import { InteractiveDemoModal } from './components/InteractiveDemoModal';
import { Pricing } from './components/Pricing';
import { ComplianceHub } from './components/ComplianceHub';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedDemoAppId, setSelectedDemoAppId] = useState<string>('nexusflow-studio');
  const [isComplianceModalOpen, setIsComplianceModalOpen] = useState(false);

  const handleOpenDemo = (appId?: string) => {
    if (appId) {
      setSelectedDemoAppId(appId);
    }
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  const handleOpenComplianceModal = () => {
    setIsComplianceModalOpen(true);
  };

  const handleCloseComplianceModal = () => {
    setIsComplianceModalOpen(false);
  };

  const handleExploreApps = () => {
    const el = document.getElementById('apps');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planId?: string) => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-[#C84B31]/20 selection:text-[#C84B31]">
      {/* Sticky Navigation */}
      <Navbar
        onOpenCompliance={handleOpenComplianceModal}
        onOpenDemo={handleOpenDemo}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreApps={handleExploreApps}
          onOpenDemo={handleOpenDemo}
        />

        {/* Applications Showcase & Catalog */}
        <AppShowcase
          onOpenDemo={handleOpenDemo}
          onSelectPlan={handleSelectPlan}
        />

        {/* Platform Capabilities & Bento Architecture */}
        <FeaturesBento
          onOpenCompliance={handleOpenComplianceModal}
          onExploreApps={handleExploreApps}
        />

        {/* Pricing & Commercial Licensing */}
        <Pricing
          onSelectPlan={handleSelectPlan}
        />

        {/* In-Page Compliance & Legal Hub */}
        <ComplianceHub />

        {/* Contact & Business Email Desk */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer
        onOpenCompliance={handleOpenComplianceModal}
        onOpenDemo={handleOpenDemo}
      />

      {/* Interactive Live Demo Sandbox Modal */}
      <InteractiveDemoModal
        initialAppId={selectedDemoAppId}
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        onSelectPlan={handleSelectPlan}
      />

      {/* Dedicated Compliance Full Modal Overlay */}
      {isComplianceModalOpen && (
        <ComplianceHub
          isModal={true}
          onClose={handleCloseComplianceModal}
        />
      )}
    </div>
  );
}
