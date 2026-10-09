import React, { useState } from 'react';

interface Milestone {
  id: string;
  step: string;
  period: string;
  title: string;
  subtitle: string;
  desc: string;
  theme: {
    badgeBg: string;
    badgeText: string;
    border: string;
    accent: string;
    iconBg: string;
    iconColor: string;
  };
  details: {
    highlight: string;
    stats?: string;
    statsLabel?: string;
    takeaway: string;
  };
}

const MILESTONES: Milestone[] = [
  {
    id: '01',
    step: '01 — 2014',
    period: '2014',
    title: 'GOQii Begins',
    subtitle: 'The Founding Vision',
    desc: 'A vision to make preventive healthcare proactive and personal.',
    theme: {
      badgeBg: 'bg-orange-50',
      badgeText: 'text-[#f05a28]',
      border: 'border-orange-200/80',
      accent: '#f05a28',
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-[#f05a28]',
    },
    details: {
      highlight: 'Pioneering Human-in-the-Loop Digital Health',
      stats: '1st',
      statsLabel: 'Connected Health Ecosystem with Human Coaches',
      takeaway: 'Disrupted the traditional reactive care model by uniting continuous tracking with live human coaches and behavioral nudges.',
    },
  },
  {
    id: '02',
    step: '02 — The Evolution',
    period: 'The Evolution',
    title: 'Smart Health Ecosystem',
    subtitle: 'Integrated Intelligence',
    desc: 'Technology, coaching, data, and motivation come together.',
    theme: {
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-600',
      border: 'border-blue-200/80',
      accent: '#3b82f6',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-600',
    },
    details: {
      highlight: 'Diagnostic Innovation & Qualcomm Tricorder XPRIZE Finalist',
      stats: 'Global Finalist',
      statsLabel: 'Qualcomm Tricorder XPRIZE (Sanjeevini)',
      takeaway: 'Selected as a global finalist in the Qualcomm Tricorder XPRIZE competition with Sanjeevini, developing pioneering non-invasive mobile diagnostic and health telemetry concepts that helped inform GOQii’s integrated health intelligence platform.',
    },
  },
  {
    id: '03',
    step: '03 — Global Impact',
    period: 'Global Impact',
    title: 'Health at Scale',
    subtitle: 'Population Health & Institutional Programs',
    desc: 'Expanding health engagement across populations and organizations.',
    theme: {
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-700',
      border: 'border-emerald-200/80',
      accent: '#10b981',
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-600',
    },
    details: {
      highlight: 'Enterprise & Population Health Programs',
      stats: 'Scale',
      statsLabel: 'Population Health Deployments',
      takeaway: 'Partnered across health plans, large employers, and international healthcare partners with focus on sustained engagement and preventive lifestyle adherence.',
    },
  },
  {
    id: '04',
    step: '04 — Today',
    period: 'Today',
    title: 'GOQii USA',
    subtitle: 'The Next Generation of US Healthcare',
    desc: 'Bringing a decade of experience to the future of US healthcare.',
    theme: {
      badgeBg: 'bg-amber-50',
      badgeText: 'text-[#f05a28]',
      border: 'border-orange-300',
      accent: '#f05a28',
      iconBg: 'bg-[#f05a28]/15',
      iconColor: 'text-[#f05a28]',
    },
    details: {
      highlight: 'Empowering US Payers, Providers & Employers',
      stats: '10+ Yrs',
      statsLabel: 'Of Proven Behavioral & Engagement Expertise',
      takeaway: 'Bridging healthcare gaps with AI-driven Dynamic Motivation tailored to the complex needs of American health plans, providers, and self-insured employers.',
    },
  },
];

const PILLARS = [
  { label: 'PREVENTION', desc: 'Proactive early care', color: '#10b981' },
  { label: 'ENGAGEMENT', desc: 'Daily sustained habits', color: '#3b82f6' },
  { label: 'INTELLIGENCE', desc: 'AI-driven motivation', color: '#8b5cf6' },
  { label: 'IMPACT', desc: 'Measurable health outcomes', color: '#f05a28' },
];

interface OurStorySectionProps {
  onOpenPartnerModal?: () => void;
}

export default function OurStorySection({ onOpenPartnerModal }: OurStorySectionProps) {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone>(MILESTONES[3]);

  return (
    <section
      id="our-story"
      className="w-full bg-gradient-to-b from-white via-[#fafbfe] to-white py-18 sm:py-24 border-b border-slate-100 relative overflow-hidden"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Subtle Background Geometric & Ambient Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-100/25 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* ── TOP SECTION: Story Header & Two-Column Narrative ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16 lg:mb-20">
          
          {/* Left Column: Eyebrow + Main Heading + Key Lead Quote */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#f05a28] text-xs font-bold uppercase tracking-wider mb-4 w-fit shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
              OUR STORY
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight mb-6">
              From a Bold Idea to a{' '}
              <span className="text-[#f05a28]">Global Health Movement.</span>
            </h2>

            {/* Lead Callout Card with subtle border accent */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(11,25,44,0.04)] relative">
              <div className="w-1 h-12 bg-gradient-to-b from-[#f05a28] to-amber-400 rounded-full absolute left-0 top-6" />
              <p className="text-sm sm:text-[15px] font-medium text-slate-800 leading-relaxed pl-2">
                &ldquo;What began in 2014 with a simple belief—that healthcare should help people stay healthy, not just treat them when they are sick—has evolved into a connected health ecosystem built around prevention, motivation, and action.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 pl-2">
                <span className="font-semibold text-slate-700">Founded by Vishal Gondal</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  10+ Years of Innovation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Evolution Concept Card */}
          <div className="lg:col-span-7 flex flex-col gap-5 pt-2">
            <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-xs">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-5">
                Founded by <strong className="text-slate-900 font-semibold">Vishal Gondal</strong>, GOQii set out to make preventive health more personal and actionable. Over the years, we brought together technology, health data, behavioral science, expert coaching, and incentives to help people make healthier choices—and sustain them.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Today, GOQii is taking that experience forward in the <strong className="text-slate-900 font-semibold">United States</strong>, combining our proven health engagement expertise with the needs of a new generation of healthcare organizations, payers, employers, and communities.
              </p>

              {/* Evolution Flow Strip (PREVENTION → ENGAGEMENT → INTELLIGENCE → IMPACT) */}
              <div className="mt-6 pt-6 border-t border-slate-200/80">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    The GOQii Evolution Pathway
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                    Continuous Health Momentum
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {PILLARS.map((pillar, idx) => (
                    <div
                      key={pillar.label}
                      className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-2xs flex flex-col justify-between group hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-slate-400">
                          0{idx + 1}
                        </span>
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: pillar.color }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs font-bold tracking-tight mb-0.5"
                          style={{ color: pillar.color }}
                        >
                          {pillar.label}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          {pillar.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── TIMELINE CONTAINER: Horizontal Connected Journey (Desktop) / Vertical (Mobile) ── */}
        <div className="mb-16 lg:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28]" />
                FOUR DEFINING MILESTONES
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
                A Decade of Continuous Breakthroughs
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-normal">
              Click or hover any milestone to view journey details
            </span>
          </div>

          {/* Desktop Connected Horizontal Track */}
          <div className="relative">
            {/* Background Connecting Dotted Line for Desktop */}
            <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-0.5 border-t-2 border-dashed border-slate-200 pointer-events-none z-0" />
            
            {/* Active connecting highlight */}
            <div
              className="hidden lg:block absolute top-[52px] left-[6%] h-0.5 bg-gradient-to-r from-orange-400 via-blue-400 to-[#f05a28] transition-all duration-500 pointer-events-none z-0"
              style={{
                width:
                  selectedMilestone.id === '01'
                    ? '10%'
                    : selectedMilestone.id === '02'
                    ? '38%'
                    : selectedMilestone.id === '03'
                    ? '66%'
                    : '88%',
              }}
            />

            {/* Grid of 4 Milestone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10">
              {MILESTONES.map((item, index) => {
                const isSelected = selectedMilestone.id === item.id;
                const isToday = item.id === '04';

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedMilestone(item)}
                    onMouseEnter={() => setSelectedMilestone(item)}
                    className={`rounded-3xl p-6 sm:p-7 cursor-pointer transition-all duration-300 flex flex-col justify-between relative group ${
                      isSelected
                        ? isToday
                          ? 'bg-white border-2 border-[#f05a28] shadow-[0_12px_32px_rgba(240,90,40,0.12)] -translate-y-1.5'
                          : 'bg-white border-2 border-slate-800 shadow-[0_12px_28px_rgba(11,25,44,0.08)] -translate-y-1.5'
                        : isToday
                        ? 'bg-gradient-to-b from-orange-50/40 via-white to-white border border-orange-200/90 shadow-sm hover:-translate-y-1 hover:shadow-md'
                        : 'bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 hover:-translate-y-1 hover:shadow-md'
                    }`}
                  >
                    {/* Top Step & Timeline Node Marker */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                            isToday
                              ? 'bg-orange-50 text-[#f05a28] border border-orange-200'
                              : item.theme.badgeBg + ' ' + item.theme.badgeText
                          }`}
                        >
                          {item.step}
                        </span>

                        {isToday && (
                          <span className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-[#f05a28] bg-orange-100/70 px-2 py-0.5 rounded-md animate-pulse">
                            ACTIVE CHAPTER
                          </span>
                        )}
                      </div>

                      {/* Timeline Central Node Icon Badge */}
                      <div className="flex items-center gap-3 my-2">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base transition-all duration-300 shadow-2xs ${
                            isSelected
                              ? 'bg-[#f05a28] text-white scale-110 shadow-md'
                              : isToday
                              ? 'bg-orange-50 text-[#f05a28] border border-orange-200'
                              : 'bg-slate-50 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {index === 0 && (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                          )}
                          {index === 3 && (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                          )}
                        </div>

                        <div>
                          <span className="text-xs font-semibold text-slate-400 block leading-tight">
                            {item.period}
                          </span>
                          <h4 className="text-lg sm:text-xl font-semibold text-slate-900 leading-tight">
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      {/* Accent divider line */}
                      <div
                        className="w-8 h-0.5 rounded-full my-3.5 transition-all duration-300"
                        style={{
                          backgroundColor: isSelected ? '#f05a28' : '#cbd5e1',
                          width: isSelected ? '40px' : '24px',
                        }}
                      />

                      {/* 1-2 line description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    {/* Interactive bottom pill indicator */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-700 transition-colors">
                        {isSelected ? 'Viewing Milestone' : 'Click to inspect'}
                      </span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform ${
                          isSelected
                            ? 'bg-[#f05a28] text-white scale-105'
                            : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Active Milestone Spotlight Box ── */}
          <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#f05a28] flex items-center justify-center flex-shrink-0 border border-orange-100/80 shadow-2xs mt-1">
                <span className="text-base font-bold">{selectedMilestone.id}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#f05a28] uppercase tracking-wider">
                    {selectedMilestone.step}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-semibold text-slate-700">
                    {selectedMilestone.details.highlight}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {selectedMilestone.details.takeaway}
                </p>
              </div>
            </div>

            {selectedMilestone.details.stats && (
              <div className="bg-slate-50 rounded-2xl px-6 py-4 border border-slate-200/70 flex flex-col items-center justify-center text-center flex-shrink-0 w-full md:w-auto">
                <span className="text-2xl sm:text-3xl font-black text-[#0B192C] leading-none mb-1">
                  {selectedMilestone.details.stats}
                </span>
                <span className="text-[11px] font-medium text-slate-500 max-w-[150px] leading-tight">
                  {selectedMilestone.details.statsLabel}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── CLOSING STATEMENT & CTA ── */}
        <div className="bg-gradient-to-br from-[#0B192C] via-[#0E223D] to-[#121E36] rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#f05a28]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
            
            {/* Distinct 3-Stage Pill Sequence */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
              <span className="text-xs sm:text-sm font-semibold text-emerald-400">From Prevention</span>
              <span className="text-white/40 text-xs">→</span>
              <span className="text-xs sm:text-sm font-semibold text-blue-300">To Engagement</span>
              <span className="text-white/40 text-xs">→</span>
              <span className="text-xs sm:text-sm font-semibold text-[#f05a28]">To Impact</span>
            </div>

            {/* Visually Prominent Headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-snug max-w-3xl mb-4">
              From Prevention. To Engagement. To Impact.
            </h3>

            {/* Core Mission Quote */}
            <p className="text-base sm:text-lg lg:text-xl font-normal text-slate-200 leading-relaxed max-w-2xl mb-8">
              &ldquo;A decade of experience. One enduring mission: make healthier action easier to start—and easier to sustain.&rdquo;
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  if (onOpenPartnerModal) {
                    onOpenPartnerModal();
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="px-9 py-4 rounded-full text-sm font-bold text-white transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg cursor-pointer flex items-center gap-2 group"
                style={{ background: '#f05a28' }}
              >
                <span>Partner with US</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
