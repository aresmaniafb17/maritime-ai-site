import React, { useState, useEffect } from 'react';
import { AI_APPS } from '../data/appsData';
import { X, Play, Copy, Check, RefreshCw, Anchor, CheckCircle2, Compass, Ship } from 'lucide-react';

interface InteractiveDemoModalProps {
  initialAppId?: string;
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (planId?: string) => void;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({
  initialAppId,
  isOpen,
  onClose,
  onSelectPlan,
}) => {
  const [selectedAppId, setSelectedAppId] = useState<string>(initialAppId || AI_APPS[0].id);
  const [activePresetIndex, setActivePresetIndex] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>('');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executionPhase, setExecutionPhase] = useState<string>('');
  const [result, setResult] = useState<any | null>(null);
  const [copiedJSON, setCopiedJSON] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'output' | 'apiCode'>('output');
  const [codeLanguage, setCodeLanguage] = useState<'typescript' | 'curl' | 'python'>('typescript');

  const currentApp = AI_APPS.find((a) => a.id === selectedAppId) || AI_APPS[0];

  useEffect(() => {
    if (initialAppId) {
      setSelectedAppId(initialAppId);
    }
  }, [initialAppId]);

  useEffect(() => {
    const preset = currentApp.demoPresets[activePresetIndex] || currentApp.demoPresets[0];
    if (preset) {
      setCustomInput(preset.defaultInput);
      setResult(preset.sampleResponse);
    }
  }, [selectedAppId, activePresetIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPreset = currentApp.demoPresets[activePresetIndex] || currentApp.demoPresets[0];

  const handleExecute = () => {
    setIsExecuting(true);
    setResult(null);

    const phases = [
      'Ingesting shipboard telemetry & sensor stream...',
      'Evaluating IMO / ISPS regulatory safety rules...',
      'Computing neural AIS trajectory & collision vectors...',
      'Validating cryptographic Master sign-off hash...',
      'Maritime authorization & deliverable synthesized.'
    ];

    let step = 0;
    setExecutionPhase(phases[0]);

    const interval = setInterval(() => {
      step++;
      if (step < phases.length) {
        setExecutionPhase(phases[step]);
      } else {
        clearInterval(interval);
        setIsExecuting(false);
        setResult(currentPreset.sampleResponse);
      }
    }, 280);
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(JSON.stringify(result.structuredData, null, 2));
    setCopiedJSON(true);
    setTimeout(() => setCopiedJSON(false), 2000);
  };

  const codeSnippets = {
    typescript: `// Maritime AI SDK Integration (TypeScript)
import { MaritimeAIClient } from '@maritime-ai/sdk';

const client = new MaritimeAIClient({
  apiKey: process.env.MARITIME_AI_KEY,
  vesselImo: '9824012'
});

async function runGangwaySignCheck() {
  const pass = await client.gangway.createPass({
    visitorName: 'Mark Davies',
    contractor: 'Shell Marine Bunkering',
    ispsLevel: 1,
    escortOfficer: 'Chief Officer Sarah Chen'
  });

  console.log('Gangway Pass Authorized:', pass.passNumber);
}`,
    curl: `curl -X POST "https://api.maritimeaisolutions.com.tr/v1/gangway/checkin" \\
  -H "Authorization: Bearer $MARITIME_AI_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "vesselImo": "9824012",
    "visitor": "Mark Davies",
    "company": "Shell Marine",
    "ispsCode": 1
  }'`,
    python: `import requests
import os

headers = {
    "Authorization": f"Bearer {os.getenv('MARITIME_AI_KEY')}",
    "Content-Type": "application/json"
}

payload = {
    "vesselImo": "9824012",
    "workType": "BALLAST_TANK_ENTRY",
    "gasTest": {"o2": 20.9, "lel": 0.0, "h2s": 0.0}
}

response = requests.post("https://api.maritimeaisolutions.com.tr/v1/permits/issue", json=payload, headers=headers)
print("Permit Authorized:", response.json())`
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-5xl bg-[#0B192C] border border-[#162E4E] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-5 py-4 border-b border-[#162E4E] flex items-center justify-between gap-4 bg-[#07101E]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C84B31]/15 border border-[#C84B31]/40 flex items-center justify-center">
              <Anchor className="w-4 h-4 text-[#E05A47]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  Interactive Vessel Simulator: {currentApp.name}
                </h3>
                <span className="text-[11px] font-mono text-[#E05A47] font-semibold hidden sm:inline">
                  {currentApp.version}
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                {currentApp.tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onSelectPlan('fleet-operator');
              }}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#C84B31] hover:bg-[#B33E26] rounded-md transition-colors hidden sm:block shadow-sm cursor-pointer"
            >
              Deploy on Vessel
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#162E4E] transition-colors cursor-pointer"
              aria-label="Close Sandbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal App Switcher Ribbon */}
        <div className="px-5 py-2.5 border-b border-[#162E4E] bg-[#07101E]/90 overflow-x-auto flex items-center gap-1.5 scrollbar-none">
          <span className="text-xs font-medium text-slate-400 mr-2 shrink-0 hidden md:inline">
            Select Software:
          </span>
          {AI_APPS.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                setSelectedAppId(app.id);
                setActivePresetIndex(0);
              }}
              className={`px-3 py-1 text-xs font-bold rounded-md whitespace-nowrap transition-all cursor-pointer ${
                selectedAppId === app.id
                  ? 'bg-[#162E4E] text-[#FFA394] border border-[#C84B31]/50 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-[#0E233D]'
              }`}
            >
              {app.name}
            </button>
          ))}
        </div>

        {/* Modal Body: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1 divide-y lg:divide-y-0 lg:divide-x divide-[#162E4E]">
          
          {/* Left Column (5 cols): Input & Preset Controls */}
          <div className="lg:col-span-5 p-5 sm:p-6 space-y-5 bg-[#0B192C]">
            
            {/* Presets Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200 block">
                Select Maritime Scenario:
              </label>
              <div className="space-y-1.5">
                {currentApp.demoPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePresetIndex(idx)}
                    className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
                      activePresetIndex === idx
                        ? 'bg-[#162E4E] border-[#C84B31] text-white shadow-sm'
                        : 'bg-[#07101E]/80 border-[#162E4E] text-slate-400 hover:text-white hover:bg-[#07101E]'
                    }`}
                  >
                    <div className="font-bold text-slate-200">{preset.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Payload Editor */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-200">
                  {currentPreset.inputLabel}:
                </label>
                <button
                  onClick={() => setCustomInput(currentPreset.defaultInput)}
                  className="text-[11px] text-[#E05A47] hover:text-[#FFA394] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Input</span>
                </button>
              </div>

              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                rows={5}
                className="w-full bg-[#07101E] border border-[#162E4E] rounded-xl p-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-[#C84B31] transition-colors leading-relaxed resize-none"
                placeholder="Enter maritime telemetry, permit context, or cargo data..."
              />
            </div>

            {/* Invariants & Capabilities */}
            <div className="p-3 bg-[#07101E] rounded-xl border border-[#162E4E] space-y-1 text-xs text-slate-400">
              <div className="font-bold text-slate-300 mb-1">Enforced Maritime Standards:</div>
              <div>• IMO SOLAS Chapter IX (ISM Code) Conformance</div>
              <div>• ISPS Security Protocol & Muster Roll Sync</div>
              <div>• SHA-256 Satellite UTC Cryptographic Audit Hash</div>
            </div>

            {/* Execution Trigger Button */}
            <button
              onClick={handleExecute}
              disabled={isExecuting}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                isExecuting
                  ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                  : 'bg-[#C84B31] hover:bg-[#B33E26] text-white shadow-[#C84B31]/20'
              }`}
            >
              {isExecuting ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>{executionPhase}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Run Live Vessel Simulation</span>
                </>
              )}
            </button>
          </div>

          {/* Right Column (7 cols): Output Console & API Code */}
          <div className="lg:col-span-7 flex flex-col bg-[#07101E]">
            
            {/* Tab header */}
            <div className="px-5 py-3 border-b border-[#162E4E] flex items-center justify-between gap-4 bg-[#0B192C]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('output')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'output'
                      ? 'bg-[#162E4E] text-[#FFA394] shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Synthesized Vessel Output
                </button>
                <button
                  onClick={() => setActiveTab('apiCode')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'apiCode'
                      ? 'bg-[#162E4E] text-[#FFA394] shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  API & NMEA Code
                </button>
              </div>

              {activeTab === 'output' && result && (
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-[#07101E] rounded-md border border-[#162E4E] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedJSON ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedJSON ? 'Copied' : 'Copy JSON'}</span>
                </button>
              )}

              {activeTab === 'apiCode' && (
                <div className="flex items-center gap-1 text-[11px]">
                  {(['typescript', 'curl', 'python'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setCodeLanguage(lang)}
                      className={`px-2 py-0.5 rounded capitalize transition-colors cursor-pointer ${
                        codeLanguage === lang
                          ? 'bg-[#C84B31] text-white font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Output Canvas Area */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
              {isExecuting ? (
                <div className="h-64 flex flex-col items-center justify-center space-y-3 text-center">
                  <div className="w-8 h-8 border-3 border-[#C84B31] border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs text-white font-mono font-semibold">{executionPhase}</p>
                  <p className="text-[11px] text-slate-400">Processing shipboard ECDIS & sensor telemetry...</p>
                </div>
              ) : activeTab === 'output' ? (
                result ? (
                  <div className="space-y-4">
                    {/* Executive Summary */}
                    <div className="p-4 rounded-xl bg-[#0B192C] border border-[#162E4E] space-y-1.5">
                      <div className="text-xs font-bold text-[#E05A47] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Vessel Authorization Summary</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {result.summary}
                      </p>
                    </div>

                    {/* Telemetry Metrics strip */}
                    {result.metrics && (
                      <div className="grid grid-cols-3 gap-2 p-3 bg-[#0B192C] rounded-xl border border-[#162E4E]">
                        {Object.entries(result.metrics).map(([key, val]) => (
                          <div key={key} className="text-center sm:text-left">
                            <div className="text-[10px] text-slate-400 truncate">{key}</div>
                            <div className="text-xs font-bold text-white font-mono tabular-nums">{String(val)}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Strategic Insights */}
                    {result.insights && result.insights.length > 0 && (
                      <div className="space-y-1.5">
                        <div className="text-xs font-bold text-slate-400">Actionable Maritime Directives:</div>
                        <div className="space-y-1">
                          {result.insights.map((ins: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                              <span className="text-[#E05A47] font-bold">›</span>
                              <span>{ins}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Raw Structured JSON Viewer */}
                    <div className="space-y-1.5">
                      <div className="text-xs font-bold text-slate-400">Validated Vessel Payload (JSON):</div>
                      <pre className="p-4 rounded-xl bg-[#040911] text-cyan-300 font-mono text-[11px] leading-relaxed overflow-x-auto max-h-56 border border-[#162E4E]">
                        {JSON.stringify(result.structuredData, null, 2)}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="h-64 flex flex-col items-center justify-center text-slate-500 text-xs">
                    Click "Run Live Vessel Simulation" to synthesize output.
                  </div>
                )
              ) : (
                /* API Snippet View */
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Google AI Studio & Vessel API Integration</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(codeSnippets[codeLanguage]);
                        setCopiedJSON(true);
                        setTimeout(() => setCopiedJSON(false), 2000);
                      }}
                      className="text-[#E05A47] hover:text-[#FFA394] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedJSON ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedJSON ? 'Copied code' : 'Copy snippet'}</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#040911] text-slate-200 font-mono text-xs leading-relaxed overflow-x-auto max-h-80 border border-[#162E4E]">
                    {codeSnippets[codeLanguage]}
                  </pre>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-[#162E4E] bg-[#07101E] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span>SOLAS Chapter IX Compliant</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>Immutable Satellite Hash</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-slate-400 hover:text-white font-semibold transition-colors cursor-pointer"
            >
              Dismiss
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectPlan('fleet-operator');
              }}
              className="px-4 py-1.5 font-bold text-white bg-[#C84B31] hover:bg-[#B33E26] rounded-md transition-colors cursor-pointer shadow-sm"
            >
              Order Fleet License
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
