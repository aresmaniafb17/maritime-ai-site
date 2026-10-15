import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/appsData';
import { PricingPlan } from '../types';
import { Check, Shield, CreditCard, Key, ArrowRight, X, Anchor } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'lifetime'>('monthly');
  const [checkoutPlan, setCheckoutPlan] = useState<PricingPlan | null>(null);
  const [checkoutEmail, setCheckoutEmail] = useState('');
  const [vesselName, setVesselName] = useState('');
  const [checkoutPaymentMethod, setCheckoutPaymentMethod] = useState<'card' | 'wire' | 'lc'>('card');
  const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);
  const [licenseSuccessKey, setLicenseSuccessKey] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  const handleStartCheckout = (plan: PricingPlan) => {
    setCheckoutPlan(plan);
    setLicenseSuccessKey(null);
  };

  const handleCompletePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutEmail || !checkoutEmail.includes('@')) return;

    setIsProcessingCheckout(true);
    setTimeout(() => {
      setIsProcessingCheckout(false);
      const generatedKey = `MARIT-${checkoutPlan?.id.substring(0, 5).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`;
      setLicenseSuccessKey(generatedKey);
    }, 1100);
  };

  const handleCopyKey = () => {
    if (licenseSuccessKey) {
      navigator.clipboard.writeText(licenseSuccessKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FFFFFF] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="text-xs font-bold text-[#C84B31] tracking-wider uppercase">
            Commercial Fleet Licensing & Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight leading-tight [text-wrap:balance]">
            Transparent Fleet Pricing with Subscription & Perpetual Licenses
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Scale across single vessels or global commercial fleets. Choose between predictable monthly cloud operations or permanent on-premise shipboard licenses.
          </p>

          {/* Billing Cycle Toggle in Terracotta & Light Blue */}
          <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 mt-4 shadow-inner">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              Monthly Fleet Subscription
            </button>
            <button
              onClick={() => setBillingCycle('lifetime')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'lifetime'
                  ? 'bg-[#C84B31] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              <span>Perpetual Vessel License</span>
              <span className={`text-[10px] uppercase font-mono px-1 py-0.5 rounded ${billingCycle === 'lifetime' ? 'bg-[#9E3520] text-white' : 'bg-slate-200 text-slate-700'}`}>
                One-Time
              </span>
            </button>
          </div>
        </div>

        {/* Clean Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceLifetime;
            const periodLabel = billingCycle === 'monthly' ? '/month per vessel' : 'one-time perpetual';

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.featured
                    ? 'bg-white border-2 border-[#C84B31] shadow-xl ring-2 ring-[#C84B31]/10'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Featured indicator in Terracotta */}
                {plan.featured && (
                  <div className="text-[11px] font-bold text-[#C84B31] tracking-wider uppercase mb-2">
                    Recommended for Commercial Fleets
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price display with Tabular Numerals */}
                  <div className="pt-2 pb-1 border-b border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-extrabold text-[#0F172A] font-mono tabular-nums">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {periodLabel}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#C84B31] font-bold mt-1">
                      {plan.limits}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold text-[#0F172A]">
                      Included vessel capabilities:
                    </div>
                    {plan.features.map((feat: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary CTA button in Terracotta Red */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleStartCheckout(plan)}
                    className="w-full py-2.5 px-4 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md bg-[#C84B31] hover:bg-[#B33E26] text-white shadow-[#C84B31]/20"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    Includes 100% offline shipboard database & satellite sync
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Maritime Compliance Guarantee Bar */}
        <div className="mt-14 max-w-4xl mx-auto p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 shadow-sm">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#C84B31] shrink-0" />
            <span>
              All plans include IMO SOLAS Chapter IX (ISM Code) compliance warranties, zero data retention, and satellite offline failover.
            </span>
          </div>
          <a
            href="#compliance"
            className="text-[#C84B31] hover:text-[#B33E26] font-bold whitespace-nowrap"
          >
            Review IMO Standards
          </a>
        </div>

      </div>

      {/* Interactive Checkout Modal */}
      {checkoutPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div
            className="w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#C84B31]" />
                <h3 className="text-sm font-bold text-[#0F172A]">
                  Fleet License Activation: {checkoutPlan.name}
                </h3>
              </div>
              <button
                onClick={() => setCheckoutPlan(null)}
                className="text-slate-400 hover:text-[#0F172A] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {licenseSuccessKey ? (
                /* Success State with License Key */
                <div className="space-y-5 text-center py-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                    <Key className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0F172A]">
                      Vessel License Key Generated
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Installation package and bridge setup guide dispatched to{' '}
                      <span className="text-[#0F172A] font-mono font-bold">{checkoutEmail}</span>.
                    </p>
                  </div>

                  {/* Generated License Key box */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3">
                    <code className="text-xs font-mono text-[#0F172A] font-bold tracking-wider">
                      {licenseSuccessKey}
                    </code>
                    <button
                      onClick={handleCopyKey}
                      className="px-2.5 py-1 text-xs font-bold bg-white hover:bg-slate-100 text-[#0F172A] rounded-md border border-slate-300 shadow-xs transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {copiedKey ? <Check className="w-3 h-3 text-emerald-600" /> : null}
                      <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="text-xs text-slate-600 text-left bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                    <div className="font-bold text-[#0F172A]">Vessel Deployment Guide:</div>
                    <div>1. Enter key in shipboard gateway at <code>http://vessel.local:8080</code></div>
                    <div>2. Connect gangway tablets via shipboard Wi-Fi / LAN</div>
                    <div>3. Configure satellite sync interval (default: 15 min)</div>
                  </div>

                  <button
                    onClick={() => setCheckoutPlan(null)}
                    className="w-full py-2.5 text-xs font-bold bg-[#C84B31] hover:bg-[#B33E26] text-white rounded-lg transition-colors cursor-pointer shadow-md"
                  >
                    Close & Enter Fleet Portal
                  </button>
                </div>
              ) : (
                /* Order Form */
                <form onSubmit={handleCompletePurchase} className="space-y-4">
                  {/* Order Summary box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Selected Tier:</span>
                      <span className="text-[#0F172A] font-bold">{checkoutPlan.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Billing Term:</span>
                      <span className="text-[#C84B31] font-bold capitalize">{billingCycle}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-200 text-[#0F172A] font-bold">
                      <span>Total Amount Due:</span>
                      <span className="font-mono text-base tabular-nums">
                        ${billingCycle === 'monthly' ? checkoutPlan.priceMonthly : checkoutPlan.priceLifetime} USD
                      </span>
                    </div>
                  </div>

                  {/* Vessel Name / IMO */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A] block">
                      Vessel Name / IMO Number:
                    </label>
                    <input
                      type="text"
                      required
                      value={vesselName}
                      onChange={(e) => setVesselName(e.target.value)}
                      placeholder="e.g. M/V Ocean Star (IMO 9821422)"
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#C84B31]"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A] block">
                      Fleet Operator / Commercial Work Email:
                    </label>
                    <input
                      type="email"
                      required
                      value={checkoutEmail}
                      onChange={(e) => setCheckoutEmail(e.target.value)}
                      placeholder="superintendent@shipping.com"
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#C84B31]"
                    />
                  </div>

                  {/* Payment Method Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A] block">
                      Settlement Gateway:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setCheckoutPaymentMethod('card')}
                        className={`p-2 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          checkoutPaymentMethod === 'card'
                            ? 'bg-white border-[#C84B31] text-[#C84B31] shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        Corporate Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setCheckoutPaymentMethod('wire')}
                        className={`p-2 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          checkoutPaymentMethod === 'wire'
                            ? 'bg-white border-[#C84B31] text-[#C84B31] shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        Bank Wire
                      </button>
                      <button
                        type="button"
                        onClick={() => setCheckoutPaymentMethod('lc')}
                        className={`p-2 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          checkoutPaymentMethod === 'lc'
                            ? 'bg-white border-[#C84B31] text-[#C84B31] shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        Letter of Credit
                      </button>
                    </div>
                  </div>

                  {/* Submit Button in Terracotta */}
                  <button
                    type="submit"
                    disabled={isProcessingCheckout}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-[#C84B31] hover:bg-[#B33E26] text-white transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer shadow-lg shadow-[#C84B31]/25"
                  >
                    {isProcessingCheckout ? (
                      <span>Provisioning maritime license...</span>
                    ) : (
                      <>
                        <span>Authorize Fleet License (${billingCycle === 'monthly' ? checkoutPlan.priceMonthly : checkoutPlan.priceLifetime})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
