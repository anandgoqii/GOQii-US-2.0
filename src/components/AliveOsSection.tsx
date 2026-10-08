import { useState } from 'react'
import {
  Radar,
  LineChart,
  Navigation,
  Lightbulb,
  Zap,
  Repeat,
  Sparkles,
  ArrowRight
} from 'lucide-react'

export default function AliveOsSection() {
  const [activeStage, setActiveStage] = useState<'detect' | 'predict' | 'guide'>('detect')

  const architectureSteps = [
    {
      id: 'detect',
      step: '01',
      title: 'DETECT',
      subtitle: 'Continuous health signals',
      description: 'Gathers continuous biometric telemetry, wearable streams, diagnostic lab markers, and daily self-reported habits.',
      icon: Radar,
      color: '#008080',
      signals: ['Vitals & resting HR', 'Sleep architecture', 'Activity & steps', 'Diagnostic labs'],
    },
    {
      id: 'predict',
      step: '02',
      title: 'PREDICT',
      subtitle: 'Pattern & risk modeling',
      description: 'Synthesizes multimodal data to uncover subtle risk indicators and health trends before they manifest into clinical conditions.',
      icon: LineChart,
      color: '#3b82f6',
      signals: ['Metabolic trends', 'Cardiovascular strain', 'Recovery deficit', 'Habit friction'],
    },
    {
      id: 'guide',
      step: '03',
      title: 'GUIDE',
      subtitle: 'Contextual interventions',
      description: 'Generates timely, individualized recommendations and empowers certified health coaches with actionable clinical insights.',
      icon: Navigation,
      color: '#f05a28',
      signals: ['Coach briefings', 'Daily micro-goals', 'Habit reminders', 'Preventive care alerts'],
    },
  ]

  const neurocodingLoop = [
    {
      step: '01',
      label: 'INSIGHT',
      icon: Lightbulb,
      desc: 'Clear understanding of body signals & current state',
      color: '#008080',
    },
    {
      step: '02',
      label: 'ACTION',
      icon: Zap,
      desc: 'Achievable daily micro-step guided by coach',
      color: '#3b82f6',
    },
    {
      step: '03',
      label: 'FEEDBACK',
      icon: Sparkles,
      desc: 'Real-time encouragement and validation',
      color: '#f05a28',
    },
    {
      step: '04',
      label: 'HABIT',
      icon: Repeat,
      desc: 'Automated lifestyle routine sustained over time',
      color: '#8b5cf6',
    },
  ]

  return (
    <section
      id="alive-os"
      className="w-full bg-[#F8FAFC] py-16 sm:py-20 xl:py-28 relative overflow-hidden select-none border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Background ambient light */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 1. ALIVE O.S. CORE ARCHITECTURE: DETECT → PREDICT → GUIDE          */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
            THE INTELLIGENCE LAYER
          </div>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            The intelligence behind the journey.
          </h2>

          <div className="w-10 h-1 bg-[#f05a28] rounded-full mx-auto my-3.5" />

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            ALIVE O.S. is the central engine powering GOQii — continually translating multimodal health telemetry into early detection and personalized guidance.
          </p>
        </div>

        {/* 3-Part Architecture Cards: DETECT → PREDICT → GUIDE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20 sm:mb-28">
          {architectureSteps.map((step, idx) => {
            const Icon = step.icon
            const isSelected = activeStage === step.id
            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStage(step.id as any)}
                className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#f05a28] shadow-lg -translate-y-1'
                    : 'border-slate-200/80 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[11px] font-bold px-2.5 py-1 rounded-md text-white tracking-wider"
                      style={{ background: step.color }}
                    >
                      STAGE {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-3.5">
                    {step.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {step.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      KEY CAPABILITIES
                    </span>
                    {step.signals.map((sig) => (
                      <div key={sig} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
                        <span>{sig}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>Architecture node {idx + 1}/3</span>
                  {idx < 2 && <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden md:block" />}
                </div>
              </div>
            )
          })}
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 2. BEHAVIORAL NEUROCODING: TURNING INSIGHT INTO ACTION             */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div id="neurocoding" className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-sm max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f05a28] mb-2 block">
              BEHAVIORAL NEUROCODING
            </span>

            <h3 className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-3">
              Turning insight into action.
            </h3>

            <div className="w-8 h-1 bg-[#f05a28] rounded-full mx-auto my-3" />

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              A behavior-change layer designed to help turn health insights into consistent daily actions.
            </p>
          </div>

          {/* Visual Closed Habit Loop: INSIGHT → ACTION → FEEDBACK → HABIT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {neurocodingLoop.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:border-[#f05a28] hover:shadow-md transition-all relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        LOOP {item.step}
                      </span>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                        style={{ background: item.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                      {item.label}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                    <span>Closed-loop reinforcement</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Loop Bottom Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
            <span>
              Rooted in dynamic motivation and validated behavioral science.
            </span>
            <span className="font-semibold text-slate-700">
              INSIGHT → ACTION → FEEDBACK → HABIT
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
