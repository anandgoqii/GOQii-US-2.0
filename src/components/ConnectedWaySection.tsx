import { useState } from 'react'
import GoqiiAppPhoneMockup from './GoqiiAppPhoneMockup'
import {
  Activity,
  Brain,
  Compass,
  Zap,
  TrendingUp,
  Apple,
  Dumbbell,
  Smile,
  CheckCircle2,
  CalendarCheck,
  UserCheck
} from 'lucide-react'

interface ConnectedWaySectionProps {
  onRequestDemo?: () => void
}

export default function ConnectedWaySection({ onRequestDemo }: ConnectedWaySectionProps) {
  const [activeStage, setActiveStage] = useState<number>(0)
  const [activeCategory, setActiveCategory] = useState<string>('coaching')

  const progressionSteps = [
    { label: 'DATA', icon: Activity, desc: 'Continuous telemetry' },
    { label: 'INTELLIGENCE', icon: Brain, desc: 'ALIVE O.S. modeling' },
    { label: 'GUIDANCE', icon: Compass, desc: 'Expert coaching' },
    { label: 'ACTION', icon: Zap, desc: 'Daily habit triggers' },
    { label: 'OUTCOMES', icon: TrendingUp, desc: 'Measurable health' },
  ]

  const stages = [
    {
      badge: 'STAGE 01',
      title: 'UNDERSTAND',
      subtitle: 'Health data & diagnostics',
      description: 'Continuous synthesis of wearable telemetry, clinical diagnostics, health risk assessments, and lifestyle habits into a unified biometric baseline.',
      color: '#008080',
      tag: 'Continuous Capture',
    },
    {
      badge: 'STAGE 02',
      title: 'PERSONALIZE',
      subtitle: 'AI + health intelligence + experts',
      description: 'The ALIVE O.S. engine pairs algorithmic intelligence with certified healthcare coaches to create hyper-personalized daily micro-goals for every individual.',
      color: '#3b82f6',
      tag: 'Dynamic Intelligence',
    },
    {
      badge: 'STAGE 03',
      title: 'ACT',
      subtitle: 'Guidance + engagement + behavior change',
      description: 'Human-in-the-loop coaching, behavioral neurocoding, and real-time encouragement transform passive health telemetry into sustained daily action.',
      color: '#f05a28',
      tag: 'Sustained Action',
    },
  ]

  const engagementPillars = [
    {
      id: 'coaching',
      label: 'Coaching',
      icon: UserCheck,
      desc: '1-on-1 human guidance and empathy',
    },
    {
      id: 'nutrition',
      label: 'Nutrition',
      icon: Apple,
      desc: 'Smart meal logging and balanced diet insights',
    },
    {
      id: 'fitness',
      label: 'Fitness',
      icon: Dumbbell,
      desc: 'Activity tracking tailored to personal stamina',
    },
    {
      id: 'mental',
      label: 'Mental Health',
      icon: Smile,
      desc: 'Stress reduction and restorative breathwork',
    },
    {
      id: 'actions',
      label: 'Daily Actions',
      icon: CheckCircle2,
      desc: 'Micro-habits designed for busy daily schedules',
    },
    {
      id: 'progress',
      label: 'Progress',
      icon: CalendarCheck,
      desc: 'Visual trendlines and habit streak validation',
    },
  ]

  return (
    <section
      id="introducing-goqii"
      className="w-full bg-[#FAFCFB] py-16 sm:py-20 xl:py-28 relative overflow-hidden select-none border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] lg:w-[1200px] h-[500px] bg-gradient-to-r from-teal-50/40 via-orange-50/30 to-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 1. CORE PLATFORM: ONE CONNECTED HEALTH PLATFORM                    */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
            THE CONNECTED PLATFORM
          </div>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            One connected health platform.
          </h2>

          <div className="w-10 h-1 bg-[#f05a28] rounded-full mx-auto my-3.5" />

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            GOQii brings health data, intelligence, expert guidance and action together.
          </p>
        </div>

        {/* ── Visual Progression Pipeline: DATA → INTELLIGENCE → GUIDANCE → ACTION → OUTCOMES ── */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-24">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <div className="text-center mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                THE CONTINUOUS VALUE CHAIN
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {progressionSteps.map((step, idx) => {
                const IconComponent = step.icon
                return (
                  <div key={step.label} className="flex flex-col items-center text-center relative group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-3 group-hover:scale-105 group-hover:border-[#f05a28] group-hover:text-[#f05a28] group-hover:bg-orange-50/50 transition-all shadow-2xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-900 tracking-wider">
                      {step.label}
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                      {step.desc}
                    </span>

                    {/* Desktop Right Arrow Connector */}
                    {idx < progressionSteps.length - 1 && (
                      <div className="hidden md:block absolute -right-2 top-7 text-slate-300 font-bold pointer-events-none">
                        →
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 2. HOW GOQii WORKS: FROM HEALTH SIGNALS TO MEANINGFUL ACTION       */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f05a28] mb-2 block">
              HOW IT WORKS
            </span>
            <h3 className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-slate-900 tracking-tight">
              From health signals to meaningful action.
            </h3>
            <div className="w-8 h-1 bg-[#f05a28] rounded-full mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stages.map((stage, idx) => (
              <div
                key={stage.title}
                onMouseEnter={() => setActiveStage(idx)}
                className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  activeStage === idx
                    ? 'border-[#f05a28] shadow-lg -translate-y-1'
                    : 'border-slate-200/80 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[11px] font-bold px-2.5 py-1 rounded-md text-white tracking-wider"
                      style={{ background: stage.color }}
                    >
                      {stage.badge}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {stage.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 tracking-tight mb-1">
                    {stage.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 mb-3.5">
                    {stage.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: stage.color }} />
                  <span className="text-[11px] font-semibold text-slate-700">
                    Step {idx + 1} of 3
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 3. ENGAGEMENT: HEALTH ENGAGEMENT THAT FITS REAL LIFE                */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div id="engagement" className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Column: Narrative answering "Will people actually use it?" */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f05a28] mb-2 block">
                SUSTAINED PARTICIPATION
              </span>

              <h3 className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-3">
                Health engagement that fits real life.
              </h3>

              <div className="w-8 h-1 bg-[#f05a28] rounded-full my-3" />

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                The defining question for enterprise health leaders is simple: <strong>Will people actually use it?</strong>
                <br />
                GOQii is architected around human connection, micro-habits, and proactive coach guidance — eliminating the drop-off typical of generic wellness tools.
              </p>

              {/* 6 Core Engagement Elements */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4 mb-8">
                {engagementPillars.map((p) => {
                  const Icon = p.icon
                  const isSelected = activeCategory === p.id
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActiveCategory(p.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#f05a28] bg-orange-50/40 text-slate-900 shadow-2xs'
                          : 'border-slate-100 bg-slate-50/60 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#f05a28]' : 'text-slate-500'}`} />
                        <span className="text-xs font-bold">{p.label}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-tight">
                        {p.desc}
                      </p>
                    </button>
                  )
                })}
              </div>

              {onRequestDemo && (
                <div>
                  <button
                    type="button"
                    onClick={onRequestDemo}
                    className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer inline-flex items-center gap-2 bg-[#f05a28] hover:bg-[#d94e1f]"
                  >
                    <span>Request a Demo</span>
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Mobile Experience Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[340px] drop-shadow-xl">
                <GoqiiAppPhoneMockup className="w-full h-[620px]" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
