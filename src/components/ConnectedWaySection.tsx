import { useState } from 'react'
import GoqiiAppPhoneMockup from './GoqiiAppPhoneMockup'

export default function ConnectedWaySection() {
  const [activeMobileTab, setActiveMobileTab] = useState<number>(0)

  const handleCtaClick = () => {
    const target = document.getElementById('plans') || document.getElementById('contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="introducing-goqii"
      className="w-full bg-[#FAFCFB] py-14 sm:py-20 xl:py-24 relative overflow-hidden select-none border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Ambient background soft light glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] lg:w-[1200px] h-[600px] bg-gradient-to-r from-teal-50/50 via-emerald-50/40 to-sky-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 1. TOP HEADER & INTRO NARRATIVE                                   */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-3.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
            INTRODUCING GOQii
          </div>
        </div>

        {/* Headline matching website typography */}
        <div className="relative text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            Meet a more connected way
          </h2>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#f05a28] tracking-tight leading-tight mt-1 sm:mt-1.5">
            to manage your health.
          </h2>

          {/* Accent Bar */}
          <div className="w-10 h-1 bg-[#f05a28] rounded-full mx-auto my-3.5" />

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            GOQii brings together the information, guidance, and everyday actions that help you build better health.
          </p>
        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 2. DESKTOP STAGE: MOBILE IN CENTER WITH CARDS ARRANGED AROUND IT   */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 xl:mt-16 relative z-10">
        
        {/* Connector Lines Layer behind Phone and Cards */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1400 700" fill="none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="orbit-center-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00684a" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#f05a28" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            {/* Connector Path 1: Card 01 (Top-Left) -> Center Phone */}
            <path
              d="M 440 160 C 530 160, 540 210, 565 240"
              stroke="#008080"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="opacity-60"
            />
            <circle cx="440" cy="160" r="4.5" fill="#008080" />
            <circle cx="565" cy="240" r="4.5" fill="#008080" />

            {/* Connector Path 2: Card 02 (Bottom-Left) -> Center Phone */}
            <path
              d="M 440 450 C 530 450, 540 400, 565 370"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="opacity-60"
            />
            <circle cx="440" cy="450" r="4.5" fill="#2563eb" />
            <circle cx="565" cy="370" r="4.5" fill="#2563eb" />

            {/* Connector Path 3: Center Phone -> Card 03 (Top-Right) */}
            <path
              d="M 835 240 C 860 210, 870 160, 960 160"
              stroke="#f05a28"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="opacity-60"
            />
            <circle cx="835" cy="240" r="4.5" fill="#f05a28" />
            <circle cx="960" cy="160" r="4.5" fill="#f05a28" />

            {/* Connector Path 4: Center Phone -> Card 04 (Bottom-Right) */}
            <path
              d="M 835 370 C 860 400, 870 450, 960 450"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="opacity-60"
            />
            <circle cx="835" cy="370" r="4.5" fill="#8b5cf6" />
            <circle cx="960" cy="450" r="4.5" fill="#8b5cf6" />
          </svg>
        </div>

        {/* 3-Column Radial Layout: Left Cards | Central Mobile Phone | Right Cards */}
        <div className="relative z-10 flex items-center justify-between gap-6 xl:gap-8">

          {/* ════════════════════════════════════════════════════════════ */}
          {/* LEFT COLUMN: 01 DATA & 02 INSIGHT                          */}
          {/* ════════════════════════════════════════════════════════════ */}
          <div className="w-[330px] xl:w-[360px] flex flex-col gap-8 flex-shrink-0">

            {/* CARD 01: DATA */}
            <div className="bg-white rounded-3xl p-5 xl:p-6 border border-teal-100/90 shadow-[0_8px_24px_rgba(0,128,128,0.06)] hover:shadow-lg transition-all duration-300 relative group">
              {/* Dot Anchor on Right */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-teal-50 border-2 border-[#008080] shadow-xs flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#008080]" />
              </div>

              {/* Step Badge & Title */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-6 h-6 rounded-full bg-[#008080] text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                  01
                </div>
                <span className="text-xs font-bold text-[#008080] tracking-wider uppercase">DATA</span>
                <span className="text-xs text-slate-400 font-medium">·</span>
                <span className="text-xs font-semibold text-slate-800">Know what&apos;s happening.</span>
              </div>

              {/* Visual Preview Box: Smartband + Live Metrics */}
              <div className="bg-teal-50/60 rounded-2xl p-3 border border-teal-100/70 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex flex-col items-center justify-center shadow-xs">
                    <span className="text-[8px] font-bold leading-none">10:08</span>
                    <span className="text-[7px] text-emerald-400 font-medium leading-none mt-0.5">68 bpm</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">8,432 steps</span>
                    <span className="text-[10px] text-slate-500 font-medium">Wearables · Apps · Labs</span>
                  </div>
                </div>
                <div className="bg-white px-2 py-1 rounded-lg border border-teal-200/80 shadow-2xs text-[9px] font-bold text-[#008080]">
                  Live Sync
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Your daily health data from wearables, apps, reports and more gathered continuously in one place.
              </p>
            </div>

            {/* CARD 02: INSIGHT */}
            <div className="bg-white rounded-3xl p-5 xl:p-6 border border-blue-100/90 shadow-[0_8px_24px_rgba(37,99,235,0.06)] hover:shadow-lg transition-all duration-300 relative group">
              {/* Dot Anchor on Right */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-50 border-2 border-[#2563eb] shadow-xs flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
              </div>

              {/* Step Badge & Title */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-6 h-6 rounded-full bg-[#2563eb] text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                  02
                </div>
                <span className="text-xs font-bold text-[#2563eb] tracking-wider uppercase">INSIGHT</span>
                <span className="text-xs text-slate-400 font-medium">·</span>
                <span className="text-xs font-semibold text-slate-800">Understand what it means.</span>
              </div>

              {/* Visual Preview Box: Sleep, Resting HR, Stress */}
              <div className="bg-blue-50/60 rounded-2xl p-3 border border-blue-100/70 mb-3 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-slate-700 text-[11px]">
                    <span>🌙</span> Sleep Quality
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                    Improving
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-slate-700 text-[11px]">
                    <span>❤️</span> Resting Heart Rate
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                    In range (64 bpm)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-slate-700 text-[11px]">
                    <span>🧘</span> Stress Level
                  </span>
                  <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded-md">
                    Manage better
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Turn complex numbers into simple, clear explanations of what your body is experiencing.
              </p>
            </div>

          </div>

          {/* ════════════════════════════════════════════════════════════ */}
          {/* CENTER: SMARTPHONE MOCKUP RUNNING GOQii APP (ETHAN MILLER) */}
          {/* ════════════════════════════════════════════════════════════ */}
          <div className="w-[315px] xl:w-[335px] flex flex-col items-center flex-shrink-0">
            <GoqiiAppPhoneMockup className="w-full h-[620px] xl:h-[650px]" />
          </div>

          {/* ════════════════════════════════════════════════════════════ */}
          {/* RIGHT COLUMN: 03 ACTION & 04 HABITS                        */}
          {/* ════════════════════════════════════════════════════════════ */}
          <div className="w-[330px] xl:w-[360px] flex flex-col gap-8 flex-shrink-0">

            {/* CARD 03: ACTION */}
            <div className="bg-white rounded-3xl p-5 xl:p-6 border border-orange-100/90 shadow-[0_8px_24px_rgba(240,90,40,0.06)] hover:shadow-lg transition-all duration-300 relative group">
              {/* Dot Anchor on Left */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-50 border-2 border-[#f05a28] shadow-xs flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f05a28]" />
              </div>

              {/* Step Badge & Title */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-6 h-6 rounded-full bg-[#f05a28] text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                  03
                </div>
                <span className="text-xs font-bold text-[#f05a28] tracking-wider uppercase">ACTION</span>
                <span className="text-xs text-slate-400 font-medium">·</span>
                <span className="text-xs font-semibold text-slate-800">Know what to do next.</span>
              </div>

              {/* Visual Preview Box: Daily Actions */}
              <div className="bg-orange-50/60 rounded-2xl p-3 border border-orange-100/70 mb-3 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] font-bold">✓</span>
                  <span className="text-[11px] font-medium">Go for a 30 min walk</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-orange-100 text-[#f05a28] flex items-center justify-center text-[9px] font-bold">○</span>
                  <span className="text-[11px] font-medium">Eat a balanced lunch</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-[9px] font-bold">○</span>
                  <span className="text-[11px] font-medium">5-min guided breathwork</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Get simple, personalised actions you can follow today to build steady, sustainable progress.
              </p>
            </div>

            {/* CARD 04: HABITS */}
            <div className="bg-white rounded-3xl p-5 xl:p-6 border border-purple-100/90 shadow-[0_8px_24px_rgba(139,92,246,0.06)] hover:shadow-lg transition-all duration-300 relative group">
              {/* Dot Anchor on Left */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-50 border-2 border-[#8b5cf6] shadow-xs flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
              </div>

              {/* Step Badge & Title */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-6 h-6 rounded-full bg-[#8b5cf6] text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                  04
                </div>
                <span className="text-xs font-bold text-[#8b5cf6] tracking-wider uppercase">HABITS</span>
                <span className="text-xs text-slate-400 font-medium">·</span>
                <span className="text-xs font-semibold text-slate-800">Turn action into behaviour.</span>
              </div>

              {/* Visual Preview Box: Routine building & Streak */}
              <div className="bg-purple-50/60 rounded-2xl p-3 border border-purple-100/70 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#8b5cf6] shadow-2xs">
                    <img
                      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&auto=format&fit=crop&q=80"
                      alt="Mindfulness habits"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">18-Day Streak</span>
                    <span className="text-[10px] text-purple-700 font-medium">Daily Habits Active</span>
                  </div>
                </div>
                <div className="bg-white px-2 py-1 rounded-lg border border-purple-200/80 shadow-2xs text-[9px] font-bold text-[#8b5cf6]">
                  🔥 Consistent
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Build healthier habits with continuous encouragement, gentle behavioral nudges and coach support.
              </p>
            </div>

          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* 05 OUTCOMES CARD & CTA (Spanning Center Below Mobile)        */}
        {/* ════════════════════════════════════════════════════════════ */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-5 xl:p-6 border border-emerald-100/90 shadow-[0_12px_28px_rgba(16,185,129,0.08)] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#10b981] text-white text-xs font-bold flex items-center justify-center shadow-xs flex-shrink-0">
                05
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-xs font-bold text-[#10b981] tracking-wider uppercase">OUTCOMES</span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs font-bold text-slate-900">See your health improve.</span>
                </div>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  More energy · Better sleep · Lower resting heart rate · A healthier you.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleCtaClick}
              className="flex-shrink-0 px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer flex items-center gap-2"
              style={{ background: '#f05a28' }}
            >
              <span>Start Your Health Journey</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

          </div>

          <div className="text-center mt-3.5">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#f05a28] uppercase">
              TRACK &bull; UNDERSTAND &bull; ACT &bull; IMPROVE
            </span>
          </div>
        </div>

        {/* ── FOOTER ROW: Bottom-Left Tagline + Bottom-Right Tagline ── */}
        <div className="mt-10 pt-6 flex items-center justify-between border-t border-slate-200/80">
          
          {/* Bottom-Left Brand Note */}
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f05a28] animate-pulse" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              CONNECTED TODAY FOR A HEALTHIER TOMORROW
            </span>
          </div>

          {/* Bottom-Right Tagline */}
          <div className="text-right">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#f05a28] uppercase block">
              MORE THAN DATA. A HEALTHIER YOU.
            </span>
          </div>

        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 3. MOBILE & TABLET VIEW (< lg)                                    */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden max-w-md mx-auto px-4 mt-8 relative z-10">
        
        {/* Central Mobile Phone Mockup for Mobile View */}
        <div className="w-full max-w-[310px] mx-auto mb-6">
          <GoqiiAppPhoneMockup className="w-full h-[580px]" />
        </div>

        {/* Mobile Tabs */}
        <div className="flex items-center justify-between gap-1 mb-4 p-1 rounded-2xl bg-slate-100 overflow-x-auto">
          {['01 DATA', '02 INSIGHT', '03 ACTION', '04 HABITS', '05 OUTCOMES'].map((tab, idx) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveMobileTab(idx)}
              className={`flex-1 min-w-[62px] py-1.5 rounded-xl text-[9px] font-bold transition-all ${
                activeMobileTab === idx
                  ? 'bg-[#f05a28] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile Tab Content Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-md mb-6">
          {activeMobileTab === 0 && (
            <div>
              <span className="text-xs font-bold text-[#008080] tracking-wider uppercase mb-1 block">01 DATA</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">Know what&apos;s happening.</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Your daily health data from wearables, apps, reports and more gathered continuously in one place.
              </p>
              <div className="p-2.5 bg-teal-50 rounded-xl text-xs font-bold text-teal-900 flex justify-around">
                <span>⌚ 10:08 AM</span>
                <span>👣 8,432 Steps</span>
                <span>❤️ 68 bpm</span>
              </div>
            </div>
          )}

          {activeMobileTab === 1 && (
            <div>
              <span className="text-xs font-bold text-[#2563eb] tracking-wider uppercase mb-1 block">02 INSIGHT</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">Understand what it means.</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Turn complex numbers into simple, clear explanations of what your body is experiencing.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="p-2 bg-slate-50 rounded-lg flex justify-between">
                  <span>🌙 Sleep Quality</span>
                  <span className="text-emerald-600 font-bold">Improving</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg flex justify-between">
                  <span>❤️ Resting Heart Rate</span>
                  <span className="text-emerald-600 font-bold">In range</span>
                </div>
              </div>
            </div>
          )}

          {activeMobileTab === 2 && (
            <div>
              <span className="text-xs font-bold text-[#f05a28] tracking-wider uppercase mb-1 block">03 ACTION</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">Know what to do next.</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Get simple, personalised actions you can follow today to build steady, sustainable progress.
              </p>
              <div className="space-y-1 text-xs text-slate-700">
                <div className="p-2 bg-orange-50 rounded-lg">🏃 Go for a 30 min walk</div>
                <div className="p-2 bg-emerald-50 rounded-lg">🥗 Eat a balanced lunch</div>
              </div>
            </div>
          )}

          {activeMobileTab === 3 && (
            <div>
              <span className="text-xs font-bold text-[#8b5cf6] tracking-wider uppercase mb-1 block">04 HABITS</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">Turn action into everyday behaviour.</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Build healthier habits with continuous encouragement, gentle behavioral nudges and coach support.
              </p>
              <div className="p-2 bg-purple-50 rounded-lg text-xs font-bold text-purple-900 text-center">
                🔥 18-Day Streak Active
              </div>
            </div>
          )}

          {activeMobileTab === 4 && (
            <div>
              <span className="text-xs font-bold text-[#10b981] tracking-wider uppercase mb-1 block">05 OUTCOMES</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">See your health improve.</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                More energy · Better sleep · Lower resting heart rate · A healthier you.
              </p>
              <div className="p-2 bg-emerald-50 rounded-lg text-xs font-bold text-emerald-900 text-center">
                ⚡ Vitality · 😴 Deep Sleep · ❤️ Stronger Cardio
              </div>
            </div>
          )}
        </div>

        {/* Mobile CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleCtaClick}
            className="w-full py-3.5 rounded-full text-xs font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            style={{ background: '#f05a28' }}
          >
            <span>Start Your Health Journey</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <span className="text-xs font-semibold tracking-[0.2em] text-[#f05a28] uppercase mt-3 block">
            TRACK &bull; UNDERSTAND &bull; ACT &bull; IMPROVE
          </span>
        </div>

      </div>

    </section>
  )
}
