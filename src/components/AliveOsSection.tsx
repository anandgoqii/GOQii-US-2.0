import { useState } from 'react'
import womanRightAnglePhoto from '../assets/images/woman_right_angle_1788948332653.jpg'
import womanCenterPhoto from '../assets/images/woman_connected_center_1788948676381.jpg'

export default function AliveOsSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const outcomes = [
    {
      title: 'More Energy',
      color: '#10b981',
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Better Sleep',
      color: '#3b82f6',
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
    {
      title: 'Healthier Choices',
      color: '#f05a28',
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 0-3 1-3 2.5 0 .5.2 1 .5 1.5C6.5 7.5 4 10.5 4 14c0 4.4 3.6 7 8 7s8-2.6 8-7c0-3.5-2.5-6.5-5.5-7 .3-.5.5-1 .5-1.5C15 4 13.5 3 12 3z" />
        </svg>
      ),
    },
    {
      title: 'Lower Stress',
      color: '#8b5cf6',
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 2.5" />
        </svg>
      ),
    },
    {
      title: 'Stronger You',
      color: '#f43f5e',
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="alive-os"
      className="w-full bg-[#F8FAFC] py-16 xl:py-24 relative overflow-hidden select-none border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Subtle background ambient dot glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* CENTERED HEADER TOP WITH SUBTEXT                                  */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Pill */}
          <div className="flex justify-center mb-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
              ALIVE O.S. • THE INTELLIGENCE LAYER
            </div>
          </div>

          {/* Main Headline - Reduced by 10% from standard (30/36/48px -> 27/32/43px) */}
          <div className="relative text-center max-w-4xl mx-auto">
            <h2 className="text-[27px] sm:text-[32px] xl:text-[43px] font-semibold text-[#0B192C] tracking-tight leading-tight">
              The continuous intelligence system
            </h2>
            <h2 className="text-[27px] sm:text-[32px] xl:text-[43px] font-semibold text-[#f05a28] tracking-tight leading-tight mt-1 sm:mt-1.5">
              behind every health decision.
            </h2>

            {/* Accent Bar */}
            <div className="w-10 h-1 bg-[#f05a28] rounded-full mx-auto my-3.5" />

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              ALIVE O.S. is the central engine powering GOQii.
              <br className="hidden sm:inline" />
              {' '}By unifying biometrics, medical diagnostics, lifestyle telemetry, and coach feedback,
              <br className="hidden sm:inline" />
              {' '}it detects risks early and guides positive daily actions.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* ARCHITECTURE GRID: LEFT INTELLIGENCE PIPELINE + RIGHT HUMAN LAYER */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start max-w-7xl mx-auto">

          {/* ────────────────────────────────────────────────────────────── */}
          {/* 1. LEFT COLUMN: DATA INPUTS + ALIVE O.S. HUB + PIPELINE FLOW   */}
          {/* ────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center gap-2 sm:gap-2.5">

            {/* ── CARD 1: DATA INPUTS CONTAINER ── */}
            <div className="w-full bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200/80 relative z-20">
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase block text-center mb-3">
                DATA INPUTS
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 text-center">
                {/* 1. Wearables */}
                <div className="flex flex-col items-center p-2 rounded-xl bg-slate-50/60 sm:bg-transparent">
                  <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center text-sm mb-1.5 shadow-2xs">
                    ⌚
                  </div>
                  <span className="text-[11px] font-semibold text-slate-800 leading-tight block">Wearables</span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">Biometrics</span>
                </div>

                {/* 2. Labs & Diagnostics */}
                <div className="flex flex-col items-center p-2 rounded-xl bg-slate-50/60 sm:bg-transparent">
                  <div className="w-8 h-8 rounded-full bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center text-sm mb-1.5 shadow-2xs">
                    🧪
                  </div>
                  <span className="text-[11px] font-semibold text-slate-800 leading-tight block">Labs &amp; Tests</span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">Biomarkers</span>
                </div>

                {/* 3. Lifestyle Telemetry */}
                <div className="flex flex-col items-center p-2 rounded-xl bg-slate-50/60 sm:bg-transparent">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center text-sm mb-1.5 shadow-2xs">
                    📋
                  </div>
                  <span className="text-[11px] font-semibold text-slate-800 leading-tight block">Lifestyle</span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">Telemetry</span>
                </div>

                {/* 4. Coaching Inputs */}
                <div className="flex flex-col items-center p-2 rounded-xl bg-slate-50/60 sm:bg-transparent">
                  <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center text-sm mb-1.5 shadow-2xs">
                    👥
                  </div>
                  <span className="text-[11px] font-semibold text-slate-800 leading-tight block">Coaching</span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">Expert Input</span>
                </div>
              </div>

              {/* Connecting Flow Indicator */}
              <div className="hidden sm:flex justify-around px-8 -mb-5 mt-2 pointer-events-none text-teal-400">
                <svg className="w-6 h-5" viewBox="0 0 24 20" fill="none">
                  <path d="M 4 2 C 8 12, 16 16, 20 18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                  <polygon points="20,15 23,19 18,20" fill="currentColor" />
                </svg>
                <svg className="w-4 h-5" viewBox="0 0 16 20" fill="none">
                  <path d="M 8 2 L 8 16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                  <polygon points="5,14 8,18 11,14" fill="currentColor" />
                </svg>
                <svg className="w-4 h-5" viewBox="0 0 16 20" fill="none">
                  <path d="M 8 2 L 8 16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                  <polygon points="5,14 8,18 11,14" fill="currentColor" />
                </svg>
                <svg className="w-6 h-5" viewBox="0 0 24 20" fill="none">
                  <path d="M 20 2 C 16 12, 8 16, 4 18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                  <polygon points="4,15 1,19 6,20" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* ── CENTRAL ENGINE: ALIVE O.S. COMPACT HUB ── */}
            <div className="relative w-full my-2 flex items-center justify-center">
              
              {/* Soft Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 via-teal-100/30 to-orange-100/30 rounded-full blur-lg pointer-events-none" />
              
              {/* Refined Center Hub */}
              <div className="relative w-full max-w-[460px] rounded-2xl p-[1.5px] bg-gradient-to-r from-emerald-300 via-teal-300 to-orange-300 shadow-sm">
                <div className="w-full py-4 px-6 rounded-2xl bg-white flex flex-col items-center text-center">
                  
                  {/* 3 Connected GOQii Dots */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f05a28]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-wider leading-tight">
                    ALIVE O.S.
                  </h3>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#0d9488] uppercase mt-0.5">
                    INTELLIGENCE ENGINE
                  </span>
                  
                  <span className="text-[10px] font-medium text-slate-600 mt-1">
                    AI Models • Risk Algorithms • Clinical Rules
                  </span>
                  <span className="text-[8.5px] text-slate-400 mt-0.5">
                    Longitudinal health memory
                  </span>

                </div>
              </div>

            </div>

            {/* ── 3-STEP PIPELINE: 01 DETECT -> 02 PREDICT -> 03 GUIDE ── */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 my-1 items-stretch">
              
              {/* Step 01: DETECT */}
              <div
                onMouseEnter={() => setActiveStep(1)}
                onMouseLeave={() => setActiveStep(null)}
                className={`bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs flex flex-col items-start transition-all duration-200 relative ${
                  activeStep === 1 ? 'border-teal-400 scale-[1.02]' : ''
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">
                    📊
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600">01</span>
                </div>
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-tight block">
                  DETECT
                </span>
                <span className="text-[9px] text-slate-500 leading-tight mt-0.5">
                  Real-time signal tracking.
                </span>
                
                {/* Arrow Connector */}
                <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-300 text-xs font-bold z-10">
                  →
                </div>
              </div>

              {/* Step 02: PREDICT */}
              <div
                onMouseEnter={() => setActiveStep(2)}
                onMouseLeave={() => setActiveStep(null)}
                className={`bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs flex flex-col items-start transition-all duration-200 relative ${
                  activeStep === 2 ? 'border-blue-400 scale-[1.02]' : ''
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs">
                    📈
                  </div>
                  <span className="text-[9px] font-bold text-blue-600">02</span>
                </div>
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-tight block">
                  PREDICT
                </span>
                <span className="text-[9px] text-slate-500 leading-tight mt-0.5">
                  Risk &amp; trajectory forecast.
                </span>

                {/* Arrow Connector */}
                <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-300 text-xs font-bold z-10">
                  →
                </div>
              </div>

              {/* Step 03: GUIDE */}
              <div
                onMouseEnter={() => setActiveStep(3)}
                onMouseLeave={() => setActiveStep(null)}
                className={`bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs flex flex-col items-start transition-all duration-200 ${
                  activeStep === 3 ? 'border-orange-400 scale-[1.02]' : ''
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center text-xs">
                    🎯
                  </div>
                  <span className="text-[9px] font-bold text-orange-600">03</span>
                </div>
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-tight block">
                  GUIDE
                </span>
                <span className="text-[9px] text-slate-500 leading-tight mt-0.5">
                  Personalised coaching.
                </span>
              </div>

            </div>

            {/* ── BEHAVIORAL NEUROCODING MOTIVATION CONTAINER ── */}
            <div className="w-full mt-1 bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/80 shadow-2xs">
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold tracking-wider text-slate-700 uppercase block">
                  BEHAVIORAL NEUROCODING
                </span>
                <span className="text-[8.5px] text-slate-400">
                  Turns insights into daily habits
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-base flex-shrink-0 border border-purple-100">
                  🧠
                </div>

                {/* 4 Enablers */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 flex-1 text-center">
                  
                  <div className="bg-slate-50 rounded-lg py-1.5 px-2 border border-slate-100 flex flex-col items-center">
                    <span className="text-[9px] font-semibold text-slate-700">Coach</span>
                    <span className="text-[7.5px] text-slate-400">Accountability</span>
                  </div>

                  <div className="bg-slate-50 rounded-lg py-1.5 px-2 border border-slate-100 flex flex-col items-center">
                    <span className="text-[9px] font-semibold text-slate-700">Rewards</span>
                    <span className="text-[7.5px] text-slate-400">Positive loops</span>
                  </div>

                  <div className="bg-slate-50 rounded-lg py-1.5 px-2 border border-slate-100 flex flex-col items-center">
                    <span className="text-[9px] font-semibold text-slate-700">Feedback</span>
                    <span className="text-[7.5px] text-slate-400">Biometrics</span>
                  </div>

                  <div className="bg-slate-50 rounded-lg py-1.5 px-2 border border-slate-100 flex flex-col items-center">
                    <span className="text-[9px] font-semibold text-slate-700">Habits</span>
                    <span className="text-[7.5px] text-slate-400">Routines</span>
                  </div>

                </div>
              </div>

            </div>

            {/* ── DOWN CONNECTOR ARROW ── */}
            <div className="my-0.5 text-emerald-600 text-xs font-bold">
              ↓
            </div>

            {/* ── STAGE 04 • OUTCOME CONTAINER ── */}
            <div className="w-full bg-emerald-50/80 border border-emerald-200 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-2xs">
              <span className="text-[9px] sm:text-[9.5px] font-bold tracking-wider text-emerald-800 uppercase">
                STAGE 04 • OUTCOME
              </span>

              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                  💚
                </div>
                <span className="text-xs sm:text-sm font-semibold text-emerald-950">
                  Better Outcomes
                </span>
                <span className="text-[9px] text-emerald-700 hidden sm:inline">
                  — Lower risk. Longer, healthier lives.
                </span>
              </div>

              <span className="text-emerald-700 text-xs">
                📈
              </span>
            </div>

          </div>

          {/* ────────────────────────────────────────────────────────────── */}
          {/* 2. RIGHT COLUMN: PROPRIETARY ENGINE & THE WOMAN WITH OUTCOMES  */}
          {/* ────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start lg:pl-2 w-full">
            
            {/* Proprietary Engine Copy Card */}
            <div className="w-full bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs mb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#f05a28] uppercase block mb-1">
                PROPRIETARY ENGINE
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0B192C] leading-tight">
                Behavioral Neurocoding
              </h3>
              <span className="text-xs font-medium text-slate-500 block mt-0.5 mb-2">
                The Human Action Layer
              </span>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-3">
                Transforms continuous health data into lasting lifestyle changes through micro-habits and human coaching.
              </p>

              {/* 3 Key Principles */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Not just tracking.</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Not just coaching.</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <span className="text-[#f05a28] font-bold">✓</span>
                  <span>A system built to change behavior at scale.</span>
                </div>
              </div>
            </div>

            {/* ── WOMAN PHOTO WITH SLEEK OUTCOME PILL BADGES ── */}
            <div className="relative w-full h-[320px] sm:h-[350px] lg:h-[370px] rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-900">
              
              {/* Member Image positioned to right half so left has open scenic vista */}
              <img
                src={womanRightAnglePhoto || womanCenterPhoto}
                alt="GOQii Member Real Progress"
                className="w-full h-full object-cover object-[82%_20%]"
                referrerPolicy="no-referrer"
              />

              {/* Gradient vignette on left to ensure pill badges are crisp and high contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

              {/* Delicate Curved Energy Trail towards the outcome pills */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 300 350" fill="none">
                <path
                  d="M 160 340 C 130 260, 60 200, 40 50"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
              </svg>

              {/* 5 Vertical Outcome Pills placed on the OPEN LEFT side to never overlap the woman */}
              <div className="absolute left-2.5 sm:left-3.5 inset-y-3 sm:inset-y-4 flex flex-col justify-between py-1 z-20">
                {outcomes.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/95 backdrop-blur-md rounded-full py-1.5 px-3 border border-slate-200/90 shadow-md flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer self-start"
                  >
                    <div
                      className="w-5 h-5 rounded-full text-white flex items-center justify-center text-[9px] shadow-2xs flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-[10.5px] font-semibold text-slate-800 whitespace-nowrap pr-0.5">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
