import { AIApp, PricingPlan } from '../types';

export const AI_APPS: AIApp[] = [
  {
    id: 'maritlog-gangway',
    name: 'MaritLog Vessel Access & Visitor Log',
    tagline: 'Digital Gangway Access Control, ISPS Security Code & Emergency Muster Roll',
    category: 'Vessel Operations',
    version: 'v4.1 Marine',
    screenshotUrl: '/src/assets/images/visitor_kiosk_pass_ui_1791931797248.jpg',
    description:
      'Replaces paper gangway visitor books with a high-durability tablet system. Automatically logs port officials, bunkering contractors, pilots, and crew with ISPS maritime security clearance and real-time bridge headcount.',
    capabilities: [
      'Touchscreen gangway check-in with ID photo & digital signature capture',
      'ISPS Security Levels (1, 2, 3) automated protocol enforcement',
      'One-tap Emergency Abandon-Ship Muster Roll synced with bridge ECDIS'
    ],
    metrics: { label: 'Boarding Speed', value: '28s per visitor' },
    demoPresets: [
      {
        title: 'Bunkering Contractor Gangway Sign-in (Port of Rotterdam)',
        inputLabel: 'Boarding Personnel & Contractor Data',
        defaultInput: 'Visitor: Mark Davies. Contractor: Shell Marine Bunkering. Purpose: Fuel Bunkering Barge Operations. Deck Contact: Chief Officer Sarah Chen. ISPS Level: 1.',
        sampleResponse: {
          summary: 'Contractor gangway pass issued under ISPS Code Level 1. Safety briefing completed, digital badge generated, and Chief Officer alerted via shipboard intercom & mobile app.',
          metrics: {
            'ISPS Compliance': 'Level 1 Verified',
            'Headcount Status': 'Active Onboard (Gangway Logged)',
            'Muster Station': 'Assigned Station Bravo'
          },
          structuredData: {
            passNumber: 'GW-2026-ROT-0892',
            vesselName: 'M/V Ocean Harmony (IMO 9824012)',
            visitorName: 'Mark Davies (Shell Marine)',
            embarkationTime: '17:24 UTC',
            escortOfficer: 'Chief Officer Sarah Chen',
            ppeVerified: ['Lifevest', 'Safety Helmet', 'Steel-toe Boots', 'H2S Gas Detector']
          },
          insights: [
            'All combustible transfer permits verified with Engine Control Room (ECR).',
            'Contractor added to real-time Emergency Evacuation Muster List.',
            'Badge scheduled for automated deactivation at 22:00 UTC.'
          ]
        }
      },
      {
        title: 'Port State Control (PSC) Officer Fast-Track',
        inputLabel: 'Maritime Authority Clearance Query',
        defaultInput: 'Official: Capt. Erik Lindqvist. Authority: Paris MoU Port State Control. Inspection Type: Expanded ISM & Marpol Compliance Survey.',
        sampleResponse: {
          summary: 'Port State Control inspector cleared with priority clearance. Ship security alert disabled for authorized audit team; master credentials presented.',
          metrics: {
            'Security Status': 'Authorized PSC Inspector',
            'Time to Clear': '12 seconds',
            'Badge Type': 'Official Escorted Pass'
          },
          structuredData: {
            inspectorId: 'PSC-PARIS-MOU-449',
            badgeCategory: 'Maritime Regulatory Authority',
            assignedLiaison: 'Master & Ship Security Officer (SSO)'
          },
          insights: [
            'Automated PSC inspection binder pre-populated with statutory certificates.',
            'Bridge notified of official boarding party arrival.'
          ]
        }
      }
    ]
  },
  {
    id: 'seapermit-ptw',
    name: 'SeaPermit Operational Safety AI',
    tagline: 'Offshore Hazardous Work Approvals, Deck Hot Work & Confined Tank Entry',
    category: 'Offshore Safety',
    version: 'v3.9 Offshore',
    screenshotUrl: '/src/assets/images/ptw_permit_dashboard_ui_1791931797633.jpg',
    description:
      'Engineered for offshore energy platforms, FPSOs, and commercial vessels. Automates hazardous Hot Work (welding/cutting on deck), Confined Space ballast tank entry, and electrical energy isolation (LOTO).',
    capabilities: [
      'Multi-tier marine sign-offs: Requester, Chief Engineer, and Master',
      'SIMOPS conflict prevention (e.g. crane lifts conflicting with deck welding)',
      'Direct integration with marine atmospheric multi-gas sensors'
    ],
    metrics: { label: 'Permit Turnaround', value: '4.2 min avg' },
    demoPresets: [
      {
        title: 'Ballast Tank 3 Confined Space Entry & Inert Gas Purge',
        inputLabel: 'Permit Specifications & Vessel Space',
        defaultInput: 'Permit PTW-OFF-0841: Internal ballast tank 3 inspection. Tank de-ballasted, gas freed, mechanical LOTO locked on valve BV-104. Team: 2 motormen.',
        sampleResponse: {
          summary: 'Confined space entry authorized. Multi-gas test confirmed safe: O2 20.9%, LEL 0%, H2S 0ppm, CO 0ppm. Standby crew and retrieval tripod active on deck.',
          metrics: {
            'Atmosphere Status': 'Safe for Entry (Pass)',
            'Standby Watch': 'Dedicated Rescuer Stationed',
            'Chief Eng Approval': 'Signed & Verified'
          },
          structuredData: {
            permitId: 'PTW-OFF-0841',
            location: 'Double Bottom Ballast Tank 3 Port',
            gasReadings: {
              oxygen: '20.9% (Range 20.8% - 21.0%)',
              flammableHydrocarbons: '0% LEL (Threshold < 1%)',
              hydrogenSulfide: '0.0 ppm (Threshold < 5 ppm)',
              carbonMonoxide: '0 ppm (Threshold < 25 ppm)'
            },
            energyIsolationTag: 'LOTO-BALLAST-BV104-APPLIED',
            continuousVentilation: 'Running (Explosion-proof fan 2,000 CFM)'
          },
          insights: [
            'Calibrated four-gas detector serial verified within 30-day bump test window.',
            'Permit valid for maximum 4 hours with mandatory hourly re-testing.',
            'Entry team equipped with emergency escape breathing apparatus (EEBD).'
          ]
        }
      },
      {
        title: 'Main Deck Hot Work (Welding Heavy Sea Fastenings)',
        inputLabel: 'Deck Hot Work Query',
        defaultInput: 'Permit PTW-OFF-0842: Structural welding of cargo sea-fastening brackets on starboard main deck. Duration: 08:00 - 14:00. Requester: Certified Fitter.',
        sampleResponse: {
          summary: 'Hot Work Permit authorized by Master. 15-meter spark boundary cleared, combustible fuel lines isolated, and dedicated continuous fire watch deployed.',
          metrics: {
            'Permit Status': 'Active & Monitored',
            'Fire Watch': '1 Assigned (Post-work 60m)',
            'Weather Clearance': 'Sea State 2 (Safe)'
          },
          structuredData: {
            permitId: 'PTW-OFF-0842',
            zone: 'Starboard Main Cargo Deck Frame 48',
            fireExtinguishersStaged: '2x 50kg Dry Powder + Charged Fire Hose',
            masterApproval: 'Authorized by Capt. Vance (07:50 UTC)'
          },
          insights: [
            'Deck scuppers plugged to prevent spark discharge into bilge lines.',
            'Zero SIMOPS conflict with forward mooring operations.'
          ]
        }
      }
    ]
  },
  {
    id: 'navidoc-cargo',
    name: 'NaviDoc Maritime Document Processor AI',
    tagline: 'Multimodal Bill of Lading Extraction, IMDG Hazmat & Port Customs OCR',
    category: 'Logistics & Cargo',
    version: 'v3.2 Cloud',
    screenshotUrl: '/src/assets/images/maritime_cargo_port_logistics_1791937346378.jpg',
    description:
      'Leverages Google AI Studio multimodal vision to ingest complex shipping contracts, marine Bills of Lading, dangerous goods declarations (IMDG), and stowage manifests into validated JSON.',
    capabilities: [
      'Sub-second table & unstructured manifest OCR with 99.8% precision',
      'Automated IMDG dangerous goods segregation and stowage code checks',
      'Instant port customs declaration schema export for EDI & API'
    ],
    metrics: { label: 'Extraction Precision', value: '99.8%' },
    demoPresets: [
      {
        title: 'IMDG Class 3 Flammable Liquid Cargo Manifest Audit',
        inputLabel: 'Shipping Bill of Lading Data',
        defaultInput: 'Container MSCU8912401: 48 drums of UN 1993 Flammable Liquids N.O.S., Flashpoint 24°C, Gross Weight 9,840 kg. Port of Loading: Hamburg, Port of Discharge: Dubai.',
        sampleResponse: {
          summary: 'Extracted dangerous goods manifest. Validated against IMO IMDG Code 2026. Required on-deck stowage segregation verified away from living quarters.',
          metrics: {
            'IMDG Code Check': 'Compliant (Class 3)',
            'Stowage Category': 'Category B (On Deck)',
            'Processing Latency': '0.72 seconds'
          },
          structuredData: {
            containerNumber: 'MSCU8912401',
            unNumber: 'UN 1993',
            properShippingName: 'FLAMMABLE LIQUID, N.O.S. (ETHANOL SOLUTION)',
            packingGroup: 'PG III',
            flashpointCelsius: 24,
            emergencySchedule: 'EmS F-E, S-E'
          },
          insights: [
            'Complies with SOLAS Chapter VII dangerous goods regulation.',
            'Stowage allocation locked to Bay 14, On Deck Tier 82 away from heat sources.',
            'Automated customs pack generated for Dubai Port Authority.'
          ]
        }
      }
    ]
  },
  {
    id: 'bridgewatch-collision',
    name: 'BridgeWatch Collision & AIS Spatial Intelligence',
    tagline: 'Real-Time AIS Tracking, COLREGs Decision Support & Route Optimization',
    category: 'Telemetry & Navigation',
    version: 'v2.8 Bridge',
    screenshotUrl: '/src/assets/images/maritime_vessel_ai_bridge_1791937346616.jpg',
    description:
      'Connects directly to shipboard NMEA / AIS data streams. Computes Closest Point of Approach (CPA), evaluates COLREGs collision avoidance maneuvers, and recommends fuel-efficient routes.',
    capabilities: [
      'Sub-second CPA & TCPA collision threat detection across 500+ AIS targets',
      'COLREGs Rule 14 (Head-on) and Rule 15 (Crossing) automated course advisory',
      'Dynamic weather routing saving 4-8% fuel consumption per voyage'
    ],
    metrics: { label: 'Collision Evaluation', value: '< 100ms' },
    demoPresets: [
      {
        title: 'Singapore Strait Dense Traffic CPA Collision Risk Analysis',
        inputLabel: 'Bridge AIS Target Vector Query',
        defaultInput: 'Own Ship: Course 092°, Speed 14.2 knots. Target Vessel IMO 9418291: Bearing 045°, Distance 2.1 nm, Course 210°, Speed 16.5 knots. Crossing situation.',
        sampleResponse: {
          summary: 'Critical Collision Alert: Target vessel is give-way under COLREGs Rule 15, but has not altered course. Projected CPA: 0.12 nautical miles in 4.8 minutes.',
          metrics: {
            'Projected CPA': '0.12 nm (CRITICAL)',
            'Time to CPA': '4.8 minutes',
            'COLREGs Recommendation': 'Alter course starboard to 115°'
          },
          structuredData: {
            ownShipVector: '{ heading: 92, speedKts: 14.2 }',
            targetVessel: 'M/T Polaris Star (Crude Tanker)',
            colregsStatus: 'Crossing Situation (Target is Give-Way)',
            recommendedAction: 'Sound 5 short blasts on ship whistle & alter course 23° Starboard'
          },
          insights: [
            'Alert flagged on Officer of the Watch (OOW) console.',
            'ECDIS anti-collision safety zone barrier projected.',
            'Automatic radar plotting aid (ARPA) vector lock engaged.'
          ]
        }
      }
    ]
  },
  {
    id: 'safemarine-audit',
    name: 'SafeMarine HSE & Gas Inspection Audit',
    tagline: 'Atmospheric Gas Testing Logs, Environmental Safety & Master Signatures',
    category: 'Offshore Safety',
    version: 'v2.6 Cloud',
    screenshotUrl: '/src/assets/images/safety_audit_compliance_ui_1791931797565.jpg',
    description:
      'Field inspection portal for marine atmospheric gas testing (O2, LEL, CO, H2S), safety checklist audits, equipment calibration logs, and biometric/touchpad Master signatures.',
    capabilities: [
      'Direct wireless atmospheric gas detector logging (BLE & Satellite)',
      'Touchscreen Master & Chief Engineer digital signature canvas',
      'SOLAS and ISO 45001 automated compliance audit reports'
    ],
    metrics: { label: 'Audit Accuracy', value: '100% Traceable' },
    demoPresets: [
      {
        title: 'Daily Engine Room & Machinery Safety Audit',
        inputLabel: 'Vessel Inspection Checklist Readings',
        defaultInput: 'Inspection: Engine Room Lower Platform. Gas levels: O2 20.9%, LEL 0%, CO 0ppm, H2S 0ppm. Bilge levels nominal, quick-closing fuel valves tested, fire doors closed.',
        sampleResponse: {
          summary: 'Daily machinery space safety audit completed with 100% pass rate. Emergency fuel trip valves verified, atmospheric readings nominal, Chief Engineer signed.',
          metrics: {
            'Audit Summary': 'Pass (All Safe)',
            'Checklist Score': '6/6 Verified',
            'Officer Sign-off': 'Signed by Chief Eng (17:28 UTC)'
          },
          structuredData: {
            inspectionId: 'MAR-AUD-2026-991',
            inspector: 'Chief Engineer Arthur Pendelton',
            verifiedChecklists: [
              'Atmospheric Gas: 20.9% O2, 0% LEL (PASS)',
              'Quick Closing Fuel Valves: Operational (PASS)',
              'Emergency Fire Pump: Tested & Primed (PASS)',
              'Bilge Water Alarms: Nominal (PASS)'
            ]
          },
          insights: [
            'Zero fuel oil misting or high-pressure spray leaks detected.',
            'Chief Engineer digital signature cryptographically hashed and timestamped.',
            'Compliance record synchronized to shore-based fleet operations center.'
          ]
        }
      }
    ]
  },
  {
    id: 'seacii-telemetry',
    name: 'SeaCII Vessel Telemetry & Engine Optimization AI',
    tagline: 'Predictive Main Engine Telemetry, Fuel Optimization & IMO Carbon Rating',
    category: 'Telemetry & Navigation',
    version: 'v2.1',
    description:
      'Monitors real-time shaft power, fuel mass flowmeters, and hull resistance to forecast IMO Carbon Intensity Indicator (CII) ratings and recommend optimal engine RPM.',
    capabilities: [
      'High-frequency main engine torque and specific fuel oil consumption (SFOC) models',
      'Real-time IMO CII rating prediction (Grades A through E)',
      'Automated hull fouling frictional resistance alerts'
    ],
    metrics: { label: 'Fuel Reduction', value: '5.2% avg' },
    demoPresets: [
      {
        title: 'Capesize Bulk Carrier CII Grade A Optimization',
        inputLabel: 'Voyage Telemetry Parameters',
        defaultInput: 'Vessel: 180,000 DWT Capesize. Voyage: Newcastle to Qingdao. Current Speed: 12.8 kts, Fuel Flow: 34.2 MT/day. Target: Maintain CII Grade A.',
        sampleResponse: {
          summary: 'AI recommended speed reduction to 11.9 knots across current favorable current vector. Reduces fuel burn by 3.8 MT/day while meeting charter arrival window.',
          metrics: {
            'Projected CII Grade': 'Grade A (Superior)',
            'Daily Fuel Saving': '3.8 Metric Tons / day',
            'Voyage CO2 Abatement': '- 58.2 Tons CO2'
          },
          structuredData: {
            vesselClass: 'Capesize Bulk Carrier',
            currentCiiRating: '0.84 (Threshold < 0.90 for Grade A)',
            recommendedRpm: '64.5 RPM (Derate 4%)',
            estimatedArrivalDelta: '+ 4.2 Hours (Within Charterer Window)'
          },
          insights: [
            'Kuroshio current velocity model provides +1.2 knots assisted drift.',
            'Prevents CII compliance penalty for the 2026 reporting calendar year.'
          ]
        }
      }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'single-vessel',
    name: 'Vessel / Single App License',
    tagline: 'Ideal for individual cargo ships, offshore supply vessels, or tug fleets.',
    priceMonthly: 149,
    priceLifetime: 990,
    limits: '1 Vessel & 1 Gangway Kiosk tablet',
    ctaText: 'Deploy Single Vessel',
    features: [
      'Full MaritLog Vessel Access & Visitor Check-In software',
      'SeaPermit Operational Safety Module (Hot Work & Tank Entry)',
      'Offline-first shipboard database with satellite auto-sync',
      'STCW & ISPS compliant digital log archives',
      'Email support with 6-hour maritime response SLA'
    ]
  },
  {
    id: 'fleet-operator',
    name: 'Fleet Operator Plan',
    tagline: 'The complete intelligent automation suite for commercial fleet management.',
    priceMonthly: 389,
    priceLifetime: 2490,
    featured: true,
    limits: 'Up to 5 Vessels & Unlimited Kiosks',
    ctaText: 'Deploy Fleet Solution',
    features: [
      'All 6 Maritime AI software applications included',
      'NaviDoc Document Processor & IMDG Dangerous Goods OCR',
      'BridgeWatch AIS Collision & Weather Routing Advisory',
      'Live Shore-Side Fleet Operations Dashboard',
      'Custom domain CNAME (e.g. fleet.yourshipping.com)',
      'Direct phone & WhatsApp hotline with 1-hour SLA'
    ]
  },
  {
    id: 'enterprise-offshore',
    name: 'Custom Enterprise',
    tagline: 'For global shipping lines, energy operators, and drilling contractors.',
    priceMonthly: 890,
    priceLifetime: 5800,
    limits: 'Unlimited Vessels, Offshore Platforms & Kiosks',
    ctaText: 'Request Enterprise Rollout',
    features: [
      'Unlimited vessels, FPSOs, and offshore platform deployments',
      'Direct NMEA 0183 & NMEA 2000 marine bus hardware bridges',
      'Dedicated private cloud VPC or on-premise vessel server',
      'IMO, SOLAS, ISM Code, and ISO 45001 legal compliance audit pack',
      'Custom ERP connectors (SAP, DNV Veracity, Veson IMOS)',
      '24/7 dedicated Master Mariner and technical support engineer'
    ]
  }
];
