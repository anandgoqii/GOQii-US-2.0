interface GoqiiAppPhoneMockupProps {
  className?: string
  scale?: number
}

export default function GoqiiAppPhoneMockup({ className = '', scale = 1 }: GoqiiAppPhoneMockupProps) {
  const ethanAvatar = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80'
  const doctorAvatar = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80'

  return (
    <div
      className={`relative rounded-[48px] bg-slate-900 p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.38)] border-4 border-slate-800 select-none ${className}`}
      style={{ transform: scale !== 1 ? `scale(${scale})` : undefined, transformOrigin: 'top center' }}
    >
      {/* Outer Phone Bezel Shine */}
      <div className="relative w-full h-full rounded-[38px] bg-white overflow-hidden border border-slate-200/80 shadow-inner flex flex-col justify-between">
        
        {/* ── 1. PHONE TOP BAR & DYNAMIC ISLAND ── */}
        <div className="relative bg-white pt-2.5 px-4 pb-1 z-30">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-40 flex items-center justify-end pr-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-indigo-950" />
            </div>
          </div>

          {/* Real Status Bar Info */}
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-900">
            {/* Left: Time & Notifications */}
            <div className="flex items-center gap-1">
              <span className="font-bold text-[11px] tracking-tight">2:47</span>
              {/* WhatsApp icon */}
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[7px] leading-none ml-1">
                💬
              </div>
              {/* Community icon */}
              <div className="w-3 h-3 text-slate-700 flex items-center justify-center text-[8px] leading-none">
                👥
              </div>
              <span className="text-slate-500 text-[8px] font-bold">···</span>
            </div>

            {/* Right: Network & Battery */}
            <div className="flex items-center gap-1 text-[9px] text-slate-700 font-medium">
              <span className="text-[7.5px] font-bold tracking-tight">4G+</span>
              <span className="text-[7px] font-semibold bg-slate-200 px-0.5 rounded-xs leading-tight">VoLTE</span>
              <span className="text-[7px] font-semibold bg-slate-200 px-0.5 rounded-xs leading-tight">VoLTE</span>
              {/* Signal Bars SVG */}
              <svg className="w-3 h-2.5 text-slate-800" viewBox="0 0 12 10" fill="currentColor">
                <rect x="0" y="7" width="2" height="3" rx="0.5" />
                <rect x="3" y="5" width="2" height="5" rx="0.5" />
                <rect x="6" y="3" width="2" height="7" rx="0.5" />
                <rect x="9" y="1" width="2" height="9" rx="0.5" />
              </svg>
              {/* Battery */}
              <div className="flex items-center">
                <div className="w-5 h-2.5 border border-slate-700 rounded-xs flex items-center justify-center text-[7px] font-bold text-slate-800 px-0.5">
                  37
                </div>
                <div className="w-0.5 h-1 bg-slate-700 rounded-r-xs" />
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. APP SCROLLABLE CONTENT AREA ── */}
        <div className="flex-1 overflow-y-auto px-3.5 pt-1.5 pb-2 scrollbar-none bg-[#fbfcfd]">
          
          {/* Header Row: User Info & Doctor / Coach / Device Buttons */}
          <div className="flex items-center justify-between pb-2.5">
            {/* User Avatar + Name + Elite Insure */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-100 shadow-2xs flex-shrink-0">
                <img
                  src={ethanAvatar}
                  alt="Ethan Miller"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-slate-900 leading-tight">Ethan Miller</h4>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="inline-flex items-center gap-0.5 px-1 py-0.2 rounded-xs bg-blue-50 border border-blue-200 text-[8px] font-extrabold text-[#1d4ed8]">
                    <span>&gt;&gt;&gt;</span>
                    <span>ELITE</span>
                  </div>
                  <span className="text-[8px] font-semibold text-slate-500 flex items-center gap-0.5">
                    <span className="text-amber-500">🛡️</span> Insure*
                  </span>
                </div>
              </div>
            </div>

            {/* Doctor, Coach, Smartwatch Icons */}
            <div className="flex items-center gap-2">
              {/* Doctor */}
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-rose-100 shadow-2xs relative">
                  <img
                    src={doctorAvatar}
                    alt="Doctor"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-rose-500 rounded-full text-white text-[6px] font-bold flex items-center justify-center">
                    +
                  </div>
                </div>
                <span className="text-[7.5px] text-slate-600 font-medium mt-0.5">Doctor</span>
              </div>

              {/* Coach */}
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 text-xs shadow-2xs">
                  👤
                </div>
                <span className="text-[7.5px] text-slate-600 font-medium mt-0.5">Coach</span>
              </div>

              {/* Smartwatch Button */}
              <div className="w-7 h-7 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284c7] text-xs shadow-2xs">
                ⌚
              </div>
            </div>
          </div>

          {/* Date Selector Row */}
          <div className="flex items-center justify-between py-1.5 px-1 mb-2">
            <div className="text-slate-600 text-xs">📅</div>
            <span className="text-xs font-semibold text-slate-400">8</span>
            <div className="px-3 py-1 rounded-full bg-[#18263f] text-white text-[11px] font-bold shadow-xs">
              Today, 9 Jun
            </div>
            <span className="text-xs font-semibold text-slate-400">10</span>
            <span className="text-xs font-semibold text-slate-400">11</span>
          </div>

          {/* Ethan Miller GOQii Age & Health ID Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#eaf2fd] via-[#f0f5fc] to-[#e6effa] p-2.5 border border-blue-100/80 shadow-2xs mb-2.5">
            <div className="flex items-center justify-between gap-1.5">
              {/* Left Avatar + 5 LAC Shield */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-xs">
                  <img
                    src={ethanAvatar}
                    alt="Ethan Miller"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Shield Badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-[#0f2d59] text-white text-[6.5px] font-bold py-0.2 text-center flex items-center justify-center gap-0.5 leading-none">
                    <span>🛡️ 5 LAC</span>
                  </div>
                </div>
                <span className="text-[7px] font-bold text-slate-700 mt-1 whitespace-nowrap">
                  I am Protected
                </span>
              </div>

              {/* Center Info */}
              <div className="flex-1 min-w-0 pl-1">
                <h5 className="text-xs font-bold text-slate-900 leading-tight">Ethan Miller</h5>
                <div className="flex items-center gap-1 my-0.5">
                  <span className="text-[9px] text-slate-600 font-medium">GOQii Age :</span>
                  <span className="text-[8px] text-emerald-600 font-bold">▼</span>
                  <span className="px-1.5 py-0.2 rounded-md bg-[#6b46c1] text-white text-[8.5px] font-bold">
                    32y 18d
                  </span>
                </div>
                <p className="text-[8.5px] text-slate-600 leading-tight truncate">
                  I follow a healthy lifestyle.
                </p>
              </div>

              {/* Right Elite SAFE Card */}
              <div className="bg-[#24529c] text-white rounded-xl p-1.5 flex items-stretch gap-1.5 shadow-xs flex-shrink-0">
                {/* SAFE stacked letters */}
                <div className="flex flex-col gap-0.5 justify-between">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#ef4444] text-white text-[6px] font-black flex items-center justify-center">S</span>
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#f97316] text-white text-[6px] font-black flex items-center justify-center">A</span>
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#22c55e] text-white text-[6px] font-black flex items-center justify-center">F</span>
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#3b82f6] text-white text-[6px] font-black flex items-center justify-center">E</span>
                </div>
                {/* Elite + Days */}
                <div className="flex flex-col justify-between items-center text-center pl-0.5 pr-1">
                  <span className="text-[8px] font-extrabold tracking-wider leading-none">ELITE</span>
                  <span className="text-xs">🏃</span>
                  <span className="text-[8.5px] font-bold leading-none">58 <span className="text-[6.5px] font-normal">days</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Vitals Grid (2 rows of 4 cards = 8 metrics) */}
          <div className="grid grid-cols-4 gap-1.5 mb-1.5">
            {/* Heart Rate */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Heart Rate</span>
              <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-[10px] my-0.5">
                ❤️
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">72</span>
              <span className="text-[7px] text-slate-400 leading-none">bpm</span>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Activity</span>
              <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-[10px] my-0.5">
                🔥
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">350</span>
              <span className="text-[7px] text-slate-400 leading-none">kcal</span>
            </div>

            {/* Calories */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Calories</span>
              <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center text-[10px] my-0.5">
                ⚡
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">1,250</span>
              <span className="text-[7px] text-slate-400 leading-none">kcal</span>
            </div>

            {/* Body Weight */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Body Weight</span>
              <div className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-[10px] my-0.5">
                ⚖️
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">70.5</span>
              <span className="text-[7px] text-slate-400 leading-none">kg</span>
            </div>

            {/* Body Fat */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Body Fat</span>
              <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-[9px] font-bold my-0.5">
                %
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">18.6</span>
              <span className="text-[7px] text-slate-400 leading-none">%</span>
            </div>

            {/* Muscle Mass */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Muscle Mass</span>
              <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-[10px] my-0.5">
                💪
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">52.3</span>
              <span className="text-[7px] text-slate-400 leading-none">kg</span>
            </div>

            {/* BMI */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">BMI</span>
              <div className="w-5 h-5 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center text-[10px] my-0.5">
                🧍
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">22.4</span>
              <span className="text-[7px] text-emerald-600 font-semibold leading-none">Normal</span>
            </div>

            {/* Resting HR */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Resting HR</span>
              <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center text-[10px] my-0.5">
                💤
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">56</span>
              <span className="text-[7px] text-slate-400 leading-none">bpm</span>
            </div>
          </div>

          {/* Timestamp */}
          <div className="flex items-center justify-center gap-1 text-[8.5px] text-slate-400 my-1">
            <span>🕒</span>
            <span>Updated at 02:29 PM</span>
          </div>

          {/* Activity Trackers (2x2 grid: Steps, Hydration, Sleep, Food) */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            {/* Steps */}
            <div className="bg-white rounded-2xl p-2.5 border border-slate-100/90 shadow-2xs flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-700 self-start">Steps</span>
              <div className="relative w-16 h-16 my-1 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="#f1f5f9" strokeWidth="4" fill="none" />
                  <circle cx="32" cy="32" r="26" stroke="#f59e0b" strokeWidth="4" fill="none" strokeDasharray="163" strokeDashoffset="120" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-amber-500 text-sm">
                  👣
                </div>
              </div>
              <span className="text-[9px] font-medium text-slate-600">
                <span className="font-bold text-slate-900">0</span> of 5,000
              </span>
            </div>

            {/* Hydration */}
            <div className="bg-white rounded-2xl p-2.5 border border-slate-100/90 shadow-2xs flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-700 self-start">Hydration</span>
              <div className="relative w-16 h-16 my-1 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="#f1f5f9" strokeWidth="4" fill="none" />
                  <circle cx="32" cy="32" r="26" stroke="#0ea5e9" strokeWidth="4" fill="none" strokeDasharray="163" strokeDashoffset="140" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sky-500 text-sm">
                  💧
                </div>
              </div>
              <span className="text-[9px] font-medium text-slate-600">
                <span className="font-bold text-slate-900">0.0L</span> of 3.0L
              </span>
            </div>

            {/* Sleep */}
            <div className="bg-white rounded-2xl p-2.5 border border-slate-100/90 shadow-2xs flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-700 self-start">Sleep</span>
              <div className="relative w-16 h-16 my-1 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="#f1f5f9" strokeWidth="4" fill="none" />
                  <circle cx="32" cy="32" r="26" stroke="#6366f1" strokeWidth="4" fill="none" strokeDasharray="163" strokeDashoffset="80" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-indigo-500 text-sm">
                  🌙
                </div>
              </div>
              <span className="text-[9px] font-medium text-slate-600">
                <span className="font-bold text-slate-900">7h 20m</span> logged
              </span>
            </div>

            {/* Food */}
            <div className="bg-white rounded-2xl p-2.5 border border-slate-100/90 shadow-2xs flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-700 self-start">Food</span>
              <div className="relative w-16 h-16 my-1 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="#f1f5f9" strokeWidth="4" fill="none" />
                  <circle cx="32" cy="32" r="26" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="163" strokeDashoffset="90" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-rose-500 text-sm">
                  🍽️
                </div>
              </div>
              <span className="text-[9px] font-medium text-slate-600">
                <span className="font-bold text-slate-900">3 meals</span> logged
              </span>
            </div>
          </div>

        </div>

        {/* ── 3. BOTTOM APP NAVIGATION BAR & HOME INDICATOR ── */}
        <div className="bg-white/95 backdrop-blur-md border-t border-slate-100 px-3 pt-1.5 pb-1 z-30">
          <div className="flex items-center justify-between text-slate-400">
            {/* Home */}
            <div className="flex flex-col items-center text-slate-900">
              <span className="text-xs">🏠</span>
              <span className="text-[7.5px] font-bold mt-0.5">Home</span>
              <div className="w-4 h-0.5 bg-slate-900 rounded-full mt-0.5" />
            </div>

            {/* Play */}
            <div className="flex flex-col items-center hover:text-slate-600">
              <span className="text-xs">▶️</span>
              <span className="text-[7.5px] font-medium mt-0.5">Play</span>
            </div>

            {/* Center + Action Button */}
            <div className="relative -top-2">
              <div className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-800 text-base font-light shadow-md flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform">
                +
              </div>
            </div>

            {/* Arena */}
            <div className="flex flex-col items-center hover:text-slate-600">
              <span className="text-xs">🌐</span>
              <span className="text-[7.5px] font-medium mt-0.5">Arena</span>
            </div>

            {/* Store */}
            <div className="flex flex-col items-center hover:text-slate-600">
              <span className="text-xs">🛒</span>
              <span className="text-[7.5px] font-medium mt-0.5">Store</span>
            </div>
          </div>

          {/* iPhone Home Swipe Bar */}
          <div className="pt-2 pb-0.5 flex justify-center">
            <div className="w-28 h-1 bg-black rounded-full" />
          </div>
        </div>

      </div>
    </div>
  )
}
