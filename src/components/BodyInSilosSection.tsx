import { useState } from 'react'
import connectedWomanBg from '../assets/images/woman_right_angle_1788948332653.jpg'

interface HealthPillar {
  id: string
  title: string
  description: string
  color: string
  badgeBg: string
  image: string
}

const pillars: HealthPillar[] = [
  {
    id: 'movement',
    title: 'Movement',
    description: 'Regular activity builds strength, improves mood and keeps you healthy longer.',
    color: '#f05a28',
    badgeBg: 'bg-[#f05a28]',
    image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    description: 'What you eat influences your metabolism and overall health.',
    color: '#10b981',
    badgeBg: 'bg-[#10b981]',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'sleep',
    title: 'Sleep',
    description: "A good night's sleep fuels your energy, focus and mood.",
    color: '#3b82f6',
    badgeBg: 'bg-[#3b82f6]',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'stress',
    title: 'Stress',
    description: 'Your mental well-being impacts recovery, hormones and overall balance.',
    color: '#f43f5e',
    badgeBg: 'bg-[#f43f5e]',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'data',
    title: 'Your Data',
    description: 'Brings it all together to show the bigger picture and help you make better decisions.',
    color: '#8b5cf6',
    badgeBg: 'bg-[#8b5cf6]',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=300&auto=format&fit=crop&q=80',
  },
]

export default function BodyInSilosSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null)

  return (
    <section
      className="w-full relative min-h-[720px] lg:min-h-[820px] xl:min-h-[860px] bg-slate-50 overflow-hidden select-none"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 1. FULL-WIDTH BACKGROUND IMAGE & OVERLAYS                        */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {/* Background photo of the woman on the right side of the frame */}
        <img
          src={connectedWomanBg}
          alt="Connected health background"
          className="w-full h-full object-cover object-[80%_25%] sm:object-[82%_25%] lg:object-[84%_25%] xl:object-[85%_25%]"
          referrerPolicy="no-referrer"
        />

        {/* Clean left-side gradient fade so text on left is super crisp and legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-35% sm:via-white/90 lg:via-white/80 to-transparent w-full lg:w-[48%] pointer-events-none" />

        {/* Soft edge blending top & bottom */}
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 2. SECTION CONTAINER & LEFT COLUMN (THE REALIZATION NARRATIVE)    */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 min-h-[720px] lg:min-h-[820px] xl:min-h-[860px] flex items-center">
        
        {/* Left narrative content block */}
        <div className="w-full lg:w-[42%] xl:w-[38%] py-12 lg:py-16 flex flex-col justify-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-3.5 self-start shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
            THE REALIZATION
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl xl:text-[2.65rem] font-semibold text-[#0B192C] tracking-tight leading-tight">
            Your body doesn&apos;t work
          </h2>
          <h2 className="text-3xl sm:text-4xl xl:text-[2.65rem] font-semibold text-[#f05a28] tracking-tight leading-tight mt-1 sm:mt-1.5">
            in silos.
          </h2>

          {/* Accent Bar */}
          <div className="w-10 h-1 bg-[#f05a28] rounded-full my-3.5" />

          {/* Narrative copy */}
          <div className="space-y-2 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md">
            <p>Every part of your health is connected.</p>
            <p>When one area changes, it affects the others.</p>
            <p>That&apos;s why looking at just one metric isn&apos;t enough.</p>
          </div>

          {/* Punchline */}
          <p className="mt-5 text-base sm:text-lg font-semibold text-slate-900 leading-snug max-w-md">
            So your health journey should connect them too.
          </p>

          {/* Sub-divider & Tagline matching website style */}
          <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col gap-1">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#f05a28] uppercase">
              DIFFERENT PIECES &bull; ONE CONNECTED YOU
            </span>
          </div>

          {/* A Healthier You Badge matching website style */}
          <div className="mt-4 inline-flex items-center gap-3 self-start px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f05a28] animate-pulse" />
            <div className="text-[11px] font-semibold text-slate-600 tracking-wider uppercase leading-tight">
              A HEALTHIER YOU &bull; A BRIGHTER TOMORROW
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 3. DESKTOP ORBIT SYSTEM: CIRCLE & CARDS DIRECTLY AROUND THE GIRL  */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* Centered directly over the woman on the right side of the section */}
      <div className="hidden lg:block absolute right-2 xl:right-10 2xl:right-20 top-[49%] -translate-y-1/2 w-[720px] h-[720px] pointer-events-none z-20">
        
        {/* SVG ORBIT CIRCLE & CONNECTING SPOKES */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 720 720"
          fill="none"
        >
          {/* Main Orbit Circle (dashed ring around the girl) */}
          <circle
            cx="360"
            cy="360"
            r="230"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeDasharray="6 6"
            strokeOpacity="0.9"
            className="filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.18)]"
          />

          {/* Secondary subtle halo ring */}
          <circle
            cx="360"
            cy="360"
            r="270"
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="4 8"
            strokeOpacity="0.4"
          />

          {/* Radial connector lines from central emblem to each pillar node */}
          {/* Sleep (Top) */}
          <line x1="360" y1="360" x2="360" y2="130" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
          {/* Nutrition (Upper-Left) */}
          <line x1="360" y1="360" x2="175" y2="230" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
          {/* Movement (Lower-Left) */}
          <line x1="360" y1="360" x2="175" y2="490" stroke="#f05a28" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
          {/* Stress (Upper-Right) */}
          <line x1="360" y1="360" x2="545" y2="230" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
          {/* Data (Lower-Right) */}
          <line x1="360" y1="360" x2="545" y2="490" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />

          {/* Colored Node Dots positioned along the orbit ring */}
          <circle cx="360" cy="130" r="4.5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="175" cy="230" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="175" cy="490" r="4.5" fill="#f05a28" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="545" cy="230" r="4.5" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="545" cy="490" r="4.5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="1.5" />

          {/* Intermediate decorative colorful orbit dots */}
          <circle cx="270" cy="145" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="1" />
          <circle cx="450" cy="145" r="3" fill="#f43f5e" stroke="#ffffff" strokeWidth="1" />
          <circle cx="130" cy="360" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="1" />
          <circle cx="590" cy="360" r="3" fill="#8b5cf6" stroke="#ffffff" strokeWidth="1" />
        </svg>

        {/* ── CENTRAL EMBLEM: "Your Health Connected" (Positioned on the girl's chest) ── */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="relative w-28 h-28 rounded-full border border-dashed border-white/90 flex flex-col items-center justify-center backdrop-blur-[4px] bg-slate-900/30 shadow-[0_0_30px_rgba(255,255,255,0.45)] transition-transform hover:scale-105 duration-300">
            {/* 4 Cardinal Dots */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-xs" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-xs" />
            <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-xs" />
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-xs" />
            
            {/* Text inside emblem */}
            <div className="text-center text-white px-2">
              <span className="block text-[12px] font-medium tracking-wide drop-shadow-md leading-tight">Your</span>
              <span className="block text-[13px] font-semibold tracking-wide drop-shadow-md leading-tight">Health</span>
              <span className="inline-block text-[11px] font-bold tracking-wide text-[#f05a28] bg-white/95 px-2 py-0.5 rounded-full mt-0.5 shadow-xs">
                Connected
              </span>
            </div>
          </div>
        </div>

        {/* ── 1. MOVEMENT PILLAR (Lower-Left) ── */}
        <div
          className="absolute left-[18px] top-[460px] pointer-events-auto flex items-start gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer"
          onMouseEnter={() => setActiveNode('movement')}
          onMouseLeave={() => setActiveNode(null)}
        >
          {/* Photo & Badge */}
          <div className="relative flex-shrink-0">
            <img
              src={pillars[0].image}
              alt="Movement"
              className={`w-14 h-14 rounded-full object-cover border-2 shadow-lg transition-all duration-300 ${
                activeNode === 'movement' ? 'border-[#f05a28] ring-4 ring-[#f05a28]/30 scale-105' : 'border-white'
              }`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#f05a28] text-white flex items-center justify-center shadow-md">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          {/* White Content Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-white/90 w-[170px]">
            <div className="text-[12.5px] font-semibold text-slate-900 leading-tight">Movement</div>
            <p className="text-[10px] text-slate-600 font-normal leading-snug mt-0.5">
              Regular activity builds strength, improves mood and keeps you healthy longer.
            </p>
          </div>
        </div>

        {/* ── 2. NUTRITION PILLAR (Upper-Left) ── */}
        <div
          className="absolute left-[18px] top-[145px] pointer-events-auto flex flex-col items-start gap-1.5 transition-all duration-300 hover:scale-105 cursor-pointer"
          onMouseEnter={() => setActiveNode('nutrition')}
          onMouseLeave={() => setActiveNode(null)}
        >
          {/* Photo & Badge */}
          <div className="relative flex-shrink-0 self-center">
            <img
              src={pillars[1].image}
              alt="Nutrition"
              className={`w-14 h-14 rounded-full object-cover border-2 shadow-lg transition-all duration-300 ${
                activeNode === 'nutrition' ? 'border-[#10b981] ring-4 ring-[#10b981]/30 scale-105' : 'border-white'
              }`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#10b981] text-white flex items-center justify-center shadow-md">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
          </div>

          {/* White Content Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-white/90 w-[170px]">
            <div className="text-[12.5px] font-semibold text-slate-900 leading-tight">Nutrition</div>
            <p className="text-[10px] text-slate-600 font-normal leading-snug mt-0.5">
              What you eat influences your metabolism and overall health.
            </p>
          </div>
        </div>

        {/* ── 3. SLEEP PILLAR (Top-Center) ── */}
        <div
          className="absolute left-[270px] top-[12px] pointer-events-auto flex items-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer"
          onMouseEnter={() => setActiveNode('sleep')}
          onMouseLeave={() => setActiveNode(null)}
        >
          {/* Photo & Badge */}
          <div className="relative flex-shrink-0">
            <img
              src={pillars[2].image}
              alt="Sleep"
              className={`w-14 h-14 rounded-full object-cover border-2 shadow-lg transition-all duration-300 ${
                activeNode === 'sleep' ? 'border-[#3b82f6] ring-4 ring-[#3b82f6]/30 scale-105' : 'border-white'
              }`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shadow-md">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </div>
          </div>

          {/* White Content Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-white/90 w-[175px]">
            <div className="text-[12.5px] font-semibold text-slate-900 leading-tight">Sleep</div>
            <p className="text-[10px] text-slate-600 font-normal leading-snug mt-0.5">
              A good night&apos;s sleep fuels your energy, focus and mood.
            </p>
          </div>
        </div>

        {/* ── 4. STRESS PILLAR (Upper-Right) ── */}
        <div
          className="absolute left-[510px] top-[145px] pointer-events-auto flex items-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer"
          onMouseEnter={() => setActiveNode('stress')}
          onMouseLeave={() => setActiveNode(null)}
        >
          {/* Photo & Badge */}
          <div className="relative flex-shrink-0">
            <img
              src={pillars[3].image}
              alt="Stress"
              className={`w-14 h-14 rounded-full object-cover border-2 shadow-lg transition-all duration-300 ${
                activeNode === 'stress' ? 'border-[#f43f5e] ring-4 ring-[#f43f5e]/30 scale-105' : 'border-white'
              }`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#f43f5e] text-white flex items-center justify-center shadow-md">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.508 1.333 1.508 2.316V18" />
              </svg>
            </div>
          </div>

          {/* White Content Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-white/90 w-[175px]">
            <div className="text-[12.5px] font-semibold text-slate-900 leading-tight">Stress</div>
            <p className="text-[10px] text-slate-600 font-normal leading-snug mt-0.5">
              Your mental well-being impacts recovery, hormones and overall balance.
            </p>
          </div>
        </div>

        {/* ── 5. YOUR DATA PILLAR (Lower-Right) ── */}
        <div
          className="absolute left-[510px] top-[460px] pointer-events-auto flex items-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer"
          onMouseEnter={() => setActiveNode('data')}
          onMouseLeave={() => setActiveNode(null)}
        >
          {/* Photo & Badge */}
          <div className="relative flex-shrink-0">
            <img
              src={pillars[4].image}
              alt="Your Data"
              className={`w-14 h-14 rounded-full object-cover border-2 shadow-lg transition-all duration-300 ${
                activeNode === 'data' ? 'border-[#8b5cf6] ring-4 ring-[#8b5cf6]/30 scale-105' : 'border-white'
              }`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center shadow-md">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
          </div>

          {/* White Content Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-white/90 w-[175px]">
            <div className="text-[12.5px] font-semibold text-slate-900 leading-tight">Your Data</div>
            <p className="text-[10px] text-slate-600 font-normal leading-snug mt-0.5">
              Brings it all together to show the bigger picture and help you make better decisions.
            </p>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 4. BOTTOM-RIGHT CALLOUT PEBBLE (Matching Website Style)          */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block absolute bottom-6 right-8 z-20 pointer-events-none">
        <div className="relative bg-white/95 backdrop-blur-md px-5 py-4 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-slate-200/90 max-w-[280px]">
          <div className="flex items-start gap-3">
            <div className="w-1 h-10 bg-[#f05a28] rounded-full flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-slate-900 text-xs sm:text-sm font-semibold leading-snug">
                So your health journey should connect them too.
              </p>
              <span className="text-[10px] font-semibold text-[#f05a28] uppercase tracking-wider block mt-1">
                GOQii CONNECTED HEALTH
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 5. MOBILE & TABLET FALLBACK (< lg)                                */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden relative z-10 px-4 pb-12">
        <div className="bg-white/95 backdrop-blur-md p-4 rounded-3xl border border-slate-200/90 shadow-lg">
          
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-[#0B192C]">Connected Health Ecosystem</span>
            <span className="text-[11px] font-bold text-[#f05a28] uppercase tracking-wider">5 Pillars</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/80 border border-slate-100"
              >
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-10 h-10 rounded-full object-cover border border-white shadow-2xs flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-xs font-semibold text-slate-900 block" style={{ color: pillar.color }}>
                    {pillar.title}
                  </span>
                  <p className="text-[10px] text-slate-600 leading-snug">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom punchline on mobile */}
          <div className="mt-3 pt-2 text-center border-t border-slate-100">
            <p className="text-xs font-medium text-slate-800">
              So your health journey should connect them too.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
