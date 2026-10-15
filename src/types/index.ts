export interface AIApp {
  id: string;
  name: string;
  tagline: string;
  category: 'Vessel Operations' | 'Offshore Safety' | 'Logistics & Cargo' | 'Telemetry & Navigation';
  description: string;
  version: string;
  screenshotUrl?: string;
  capabilities: string[];
  metrics: { label: string; value: string };
  demoPresets: {
    title: string;
    inputLabel: string;
    defaultInput: string;
    options?: string[];
    sampleResponse: {
      summary: string;
      metrics?: Record<string, string>;
      structuredData: Record<string, any>;
      insights: string[];
    };
  }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceLifetime: number;
  featured?: boolean;
  features: string[];
  limits: string;
  ctaText: string;
}

export interface ComplianceSection {
  id: string;
  title: string;
  badge: string;
  effectiveDate: string;
  content: {
    sectionHeading: string;
    paragraphs: string[];
  }[];
}
