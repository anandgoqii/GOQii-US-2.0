import { useState } from 'react'

const heroPhoto = 'https://images.unsplash.com/photo-1683110534724-42b900154a34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b21lbiUyMGZpdG5lc3MlMjBjb2FjaGluZyUyMG91dGRvb3IlMjB3YWxrJTIwaGVhbHRoJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzg2MDIxMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080'
const coachAvatar = 'https://images.unsplash.com/photo-1561973027-6bdfea7b3324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80&h=80&fit=crop&auto=format'
const manPhonePhoto = 'https://images.unsplash.com/photo-1673214846284-f1a66bb402ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80'
const womanFitnessPhoto = 'https://images.unsplash.com/photo-1480179087180-d9f0ec044897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80'

const partnerPhotos = {
  employers: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  payers: 'https://images.unsplash.com/photo-1686771416282-3888ddaf249b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  providers: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  pharma: 'https://images.unsplash.com/photo-1486825586573-7131f7991bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  government: 'https://images.unsplash.com/photo-1594581979864-36977b15d0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
}
const runnersBg = 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=80'
const lindaPhoto = 'https://images.unsplash.com/photo-1758600432948-5cec2a3fecb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80'
const handsPhoto = 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80'

const navLinks = [
  { label: 'Solutions', hasDropdown: true },
  { label: 'Platform', hasDropdown: true },
  { label: 'Who We Serve', hasDropdown: true },
  { label: 'Resources', hasDropdown: true },
  { label: 'About Us', hasDropdown: true },
]

const activityBars = [
  { day: 'M', height: 45, active: false },
  { day: 'T', height: 70, active: false },
  { day: 'W', height: 55, active: false },
  { day: 'T', height: 90, active: true },
  { day: 'F', height: 60, active: false },
  { day: 'S', height: 35, active: false },
  { day: 'S', height: 25, active: false },
]

function GoqiiLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid grid-cols-2 gap-0.5 w-7 h-7">
        <div className="bg-red-500 rounded-sm" />
        <div className="bg-yellow-400 rounded-sm" />
        <div className="bg-blue-500 rounded-sm" />
        <div className="bg-green-500 rounded-sm" />
      </div>
      <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-2xl font-bold text-gray-900 tracking-tight">
        GO<span className="text-gray-900">Q</span>ii
      </span>
      <span className="text-xs font-semibold text-gray-500 tracking-widest mt-1">USA</span>
    </div>
  )
}

function HealthScoreCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 w-52">
      <p className="text-xs font-semibold text-gray-500 mb-2">GOQii Health Score</p>
      <div className="flex items-end gap-2 mb-1">
        <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-5xl font-extrabold text-gray-900 leading-none">78</span>
        <span className="text-sm text-gray-400 mb-1">/100</span>
        <span className="text-sm font-semibold text-green-600 mb-1">Good</span>
      </div>
      <p className="text-xs text-gray-400 mb-3">Good</p>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500" style={{ width: '78%' }} />
      </div>
    </div>
  )
}

function ActivityCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 w-52">
      <p className="text-xs font-semibold text-gray-500 mb-2">Today's Activity</p>
      <div className="flex items-end gap-1 mb-1">
        <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-3xl font-extrabold text-gray-900 leading-none">7,246</span>
      </div>
      <p className="text-xs text-gray-400 mb-4">Steps</p>
      <div className="flex items-end gap-1 h-14">
        {activityBars.map((bar, i) => (
          <div key={i} className="flex flex-col items-center gap-1 flex-1">
            <div
              className="w-full rounded-sm"
              style={{
                height: `${bar.height}%`,
                background: bar.active ? '#f05a28' : '#e5e7eb',
              }}
            />
            <span className="text-[9px] text-gray-400">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CoachCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 w-52">
      <p className="text-xs font-semibold text-gray-500 mb-3">Coach Message</p>
      <div className="flex items-start gap-3">
        <img
          src={coachAvatar}
          alt="Health coach"
          className="w-9 h-9 rounded-full object-cover flex-shrink-0"
        />
        <p className="text-sm text-gray-700 leading-relaxed">
          Great job! Keep building momentum.
        </p>
      </div>
    </div>
  )
}

function MobilePhoneMockup() {
  return (
    <div className="relative w-[300px] xl:w-[320px]">
      {/* Outer Phone Frame */}
      <div className="bg-slate-900 rounded-[2.8rem] p-2.5 shadow-2xl relative border-[4px] border-slate-800 select-none">
        {/* Physical Buttons */}
        <div className="absolute -left-[7px] top-20 w-[3px] h-8 bg-slate-700 rounded-l-md" />
        <div className="absolute -left-[7px] top-32 w-[3px] h-8 bg-slate-700 rounded-l-md" />
        <div className="absolute -right-[7px] top-24 w-[3px] h-12 bg-slate-700 rounded-r-md" />

        {/* Screen Enclosure */}
        <div className="bg-white rounded-[2.3rem] overflow-hidden text-slate-900 font-sans shadow-inner border border-gray-100 flex flex-col justify-between pt-3 pb-2 px-3.5 min-h-[580px] relative">
          
          {/* Dynamic Island / Top Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-end px-2 gap-1">
            <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
          </div>

          <div>
            {/* Status Bar */}
            <div className="flex justify-between items-center px-1.5 pt-1 pb-3 text-slate-900 z-10 relative">
              <span className="text-[11px] font-bold tracking-tight">Focus</span>
              <div className="flex gap-1.5 items-center">
                {/* Signal bars */}
                <svg className="w-3 h-3 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="16" width="3" height="5" rx="0.5" />
                  <rect x="7" y="12" width="3" height="9" rx="0.5" />
                  <rect x="12" y="8" width="3" height="13" rx="0.5" />
                  <rect x="17" y="4" width="3" height="17" rx="0.5" />
                </svg>
                {/* Wifi */}
                <svg className="w-3 h-3 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 18c-.8 0-1.5.7-1.5 1.5S11.2 21 12 21s1.5-.7 1.5-1.5S12.8 18 12 18zm-4.2-2.8c2.3-2.3 6.1-2.3 8.4 0l1.4-1.4c-3.1-3.1-8.1-3.1-11.2 0l1.4 1.4zm-2.8-2.8c3.9-3.9 10.1-3.9 14 0l1.4-1.4c-4.7-4.7-12.1-4.7-16.8 0l1.4 1.4z"/>
                </svg>
                {/* Battery */}
                <svg className="w-3.5 h-3.5 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <rect x="20" y="10" width="2" height="4" rx="0.5" fill="currentColor" />
                  <rect x="4" y="9" width="10" height="6" rx="1" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Top Greeting Header */}
            <div className="flex justify-between items-start mb-4 mt-1 px-1">
              <div>
                <p className="text-[13px] font-bold text-slate-900 tracking-tight">Hello, Jessica</p>
                <p className="text-[13px] font-bold text-slate-800 leading-tight mt-0.5 max-w-[145px]">
                  Let's achieve your health goals
                </p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                {/* Top right green circle badge */}
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300/80 flex items-center justify-center text-emerald-600 shadow-2xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                {/* Badge 0 circle */}
                <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs flex items-center justify-center border border-emerald-200/90 shadow-2xs">
                  0
                </div>
              </div>
            </div>

            {/* Today's Progress Card */}
            <div className="mb-3.5">
              <div className="flex justify-between items-center mb-1.5 px-1">
                <span className="text-xs font-bold text-slate-900">Today's Progress</span>
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                </svg>
              </div>

              <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3">
                  {/* Gauge Ring Left */}
                  <div className="relative w-22 h-22 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      {/* Background track */}
                      <circle cx="50" cy="50" r="38" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                      {/* Gradient Arc: Green top right, Orange bottom left */}
                      <circle
                        cx="50" cy="50" r="38"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="180 238"
                        strokeDashoffset="0"
                      />
                      <circle
                        cx="50" cy="50" r="38"
                        fill="none"
                        stroke="#f05a28"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="60 238"
                        strokeDashoffset="-120"
                      />
                    </svg>

                    {/* Top Green indicator button */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-white" />
                    </div>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-1">
                      <span className="text-xl font-extrabold text-slate-900 leading-none tracking-tight">78</span>
                      <span className="text-[8px] font-semibold text-slate-500 mt-0.5 tracking-tight">GOQii Score</span>
                    </div>
                  </div>

                  {/* Stats Right */}
                  <div className="flex flex-col justify-center gap-3 flex-1 pl-1">
                    <div>
                      <p className="text-lg font-black text-slate-900 leading-none tracking-tight">7,246</p>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Steps</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-lg font-black text-slate-900 leading-none tracking-tight">0</span>
                        {/* Karma Icon */}
                        <div className="w-4 h-4 rounded-full border border-slate-700 flex items-center justify-center text-[9px] font-bold text-slate-800">
                          Q
                        </div>
                      </div>
                      <p className="text-[9px] text-slate-400 font-semibold mt-0.5">Total 0s Karma</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Tasks Banner inside card */}
                <div className="bg-amber-50/90 rounded-xl px-2.5 py-2 flex items-center gap-2 border border-amber-100/80 mt-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 shadow-2xs">
                    J
                  </div>
                  <span className="text-[11px] font-bold text-slate-800">4 Tasks Completed</span>
                </div>
              </div>
            </div>

            {/* Upcoming Section */}
            <div>
              <div className="flex justify-between items-center mb-1.5 px-1">
                <span className="text-xs font-bold text-slate-900">Upcoming</span>
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                </svg>
              </div>

              <div className="flex flex-col gap-2">
                {/* Upcoming Item 1 */}
                <div className="bg-white rounded-xl p-2.5 flex items-center justify-between border border-slate-100 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900 leading-snug">Coaching Call</p>
                      <p className="text-[9px] text-slate-400 font-medium">6:30 PM • 20 min</p>
                    </div>
                  </div>
                  <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                  </svg>
                </div>

                {/* Upcoming Item 2 */}
                <div className="bg-white rounded-xl p-2.5 flex items-center justify-between border border-slate-100 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 1 9 3.603a8.256 8.256 0 0 1 6.362 1.611Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900 leading-snug">Walk 20 mins</p>
                      <p className="text-[9px] text-slate-400 font-medium">5:00 PM</p>
                    </div>
                  </div>
                  <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="w-24 h-1 bg-slate-900 rounded-full mx-auto mt-2 mb-0.5" />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* ── Navbar ── */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-8 xl:px-16 h-16 flex items-center justify-between">
          <GoqiiLogo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.label}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: '#f05a28' }}
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-8 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <button key={link.label} className="text-left text-sm font-medium text-gray-700">
                {link.label}
              </button>
            ))}
            <button className="w-full py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: '#f05a28' }}>
              Get in Touch
            </button>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden bg-white" style={{ minHeight: 'calc(100vh - 64px)' }}>
        {/* Background hero photo — full bleed, right-weighted */}
        <div className="absolute inset-0">
          <img
            src={heroPhoto}
            alt="Two women walking outdoors during fitness coaching session"
            className="absolute top-0 right-0 h-full object-cover object-top"
            style={{ width: '65%' }}
          />
          {/* Fade gradient left → photo */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, #ffffff 28%, rgba(255,255,255,0.92) 42%, rgba(255,255,255,0.3) 58%, transparent 72%)'
          }} />
        </div>

        {/* Content grid */}
        <div className="relative z-10 max-w-[1920px] mx-auto px-8 xl:px-16 grid grid-cols-12 gap-6 py-16 xl:py-24 items-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
          {/* Left: headline + copy + CTAs */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
            <h1 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              We Transform Health.{' '}
              <span style={{ color: '#f05a28' }}>Dynamic Motivation</span>{' '}
              Powers the Change.
            </h1>

            <p className="text-base xl:text-lg text-gray-600 leading-relaxed max-w-md">
              GOQii's AI-powered platform combines human coaching, personalized insights and smart incentives to drive sustained behavior change and measurable outcomes.
            </p>

            {/* Stat */}
            <div className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3 max-w-sm border border-gray-100">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#fff3ee' }}>
                <svg className="w-5 h-5" style={{ color: '#f05a28' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-xl font-extrabold text-gray-900">90% </span>
                  of enterprise members report high satisfaction with GOQii
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">Source: Internal Analysis of Enterprise Programs</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-md"
                style={{ background: '#f05a28' }}
              >
                Request a Demo
              </button>
              <button className="px-7 py-3.5 rounded-full text-sm font-semibold text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all">
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Spacer — photo lives in the background */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-5" />

          {/* Right: floating metric cards */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 items-end">
            <HealthScoreCard />
            <ActivityCard />
            <CoachCard />
          </div>
        </div>
      </section>

      {/* ── Section 2: More Information. Less Action. ── */}
      <section className="w-full bg-white overflow-hidden">
        <div className="max-w-[1920px] mx-auto grid grid-cols-12">
          {/* Left photo with overlaid problem pills */}
          <div className="col-span-12 lg:col-span-5 relative min-h-[480px]">
            <img
              src={manPhonePhoto}
              alt="Man sitting on couch looking at phone"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Problem pills */}
            <div className="absolute inset-0 flex flex-col justify-center gap-3 pl-10 xl:pl-16 pr-8">
              {[
                'Too much information',
                'Lack of motivation',
                'Inconsistent action',
                'No sustained results',
              ].map(label => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-2.5 shadow-lg w-fit"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right copy + icon grid */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center px-10 xl:px-20 py-16">
            <h2 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
              More Information. Less Action.
            </h2>
            <h2 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-4xl xl:text-5xl font-extrabold leading-tight mb-6">
              <span style={{ color: '#f05a28' }}>The Missing Link? Motivation.</span>
            </h2>
            <p className="text-base xl:text-lg text-gray-600 leading-relaxed max-w-xl mb-10">
              People know what to do, but struggle to do it consistently. GOQii bridges that gap with Dynamic Motivation—our proprietary approach that turns intent into action and action into lasting change.
            </p>

            {/* 4 icon columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                    </svg>
                  ),
                  label: 'Overwhelmed by Information',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                  ),
                  label: 'Lack of Personal Motivation',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  ),
                  label: 'Inconsistent Action',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                  ),
                  label: 'Short-term Results',
                },
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-xl border border-gray-200 flex items-center justify-center bg-gray-50">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-700 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: GOQii Adapts to You ── */}
      <section className="w-full bg-gray-50 py-16 xl:py-24 overflow-hidden">
        {/* Centered heading */}
        <div className="max-w-[1920px] mx-auto px-8 xl:px-16 text-center mb-14">
          <h2 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
            GOQii Adapts to You.
          </h2>
          <h2 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-4xl xl:text-5xl font-extrabold leading-tight mt-1">
            <span style={{ color: '#f05a28' }}>Because One-Size Health Doesn't Work.</span>
          </h2>
        </div>

        <div className="max-w-[1920px] mx-auto px-8 xl:px-16 grid grid-cols-12 gap-8 items-start">
          {/* Left woman photo */}
          <div className="col-span-12 lg:col-span-3 rounded-2xl overflow-hidden h-[520px]">
            <img
              src={womanFitnessPhoto}
              alt="Woman running with fitness tracker outdoors"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Center phone mockup */}
          <div className="col-span-12 lg:col-span-3 flex items-center justify-center">
            <MobilePhoneMockup />
          </div>

          {/* Right: 3 feature columns */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#e8f8ef' }}>
                <svg className="w-6 h-6" style={{ color: '#2ecc71' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-lg font-bold text-gray-900 mb-2">Intelligent Health Engagement</h3>
                <p className="text-sm text-gray-600 leading-relaxed">AI-powered nudges and personalized insights keep members engaged every day.</p>
              </div>
              {/* Mini card */}
              <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
                <p className="text-[10px] font-semibold text-gray-500 mb-2">Health Insights</p>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#fff3ee' }}>
                    <svg className="w-3.5 h-3.5" style={{ color: '#f05a28' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">High Stress Detected</p>
                    <p className="text-[10px] text-gray-500">Try 5 min breathing exercises</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#fff3ee' }}>
                <svg className="w-6 h-6" style={{ color: '#f05a28' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-lg font-bold text-gray-900 mb-2">Adaptive Coaching & Health Tracking</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Human coaches + smart tracking create plans that adapt to each individual's needs.</p>
              </div>
              {/* Mini card */}
              <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <img src={coachAvatar} alt="Coach Melanie" className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-xs font-bold text-gray-800">Your Coach</p>
                    <p className="text-[10px] text-gray-500">Melanie, Health Coach</p>
                  </div>
                </div>
                <p className="text-xs text-gray-700 mt-1">Great progress! Let's keep moving towards your goal.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#eef3ff' }}>
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h3m5 4v6m-5-6v6m-1-6v1m7-1v1" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-lg font-bold text-gray-900 mb-2">Incentives & Progress Reinforcement</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Rewards and recognition reinforce healthy habits and long-term adherence.</p>
              </div>
              {/* Mini card */}
              <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500">You earned</p>
                    <p style={{ fontFamily: 'Manrope, sans-serif', color: '#f05a28' }} className="text-2xl font-extrabold leading-none">250</p>
                    <p className="text-[10px] font-semibold text-gray-600">GOQii Points</p>
                  </div>
                  <span className="text-2xl ml-auto">🏆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Designed to Adapt. Built to Deliver. ── */}
      <section className="w-full bg-white py-16 xl:py-24">
        <div className="max-w-[1920px] mx-auto px-8 xl:px-16 grid grid-cols-12 gap-12 items-center">

          {/* Left: copy + 4 pillars */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-7">
            <div>
              <h2 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
                Designed to Adapt.
              </h2>
              <h2 style={{ fontFamily: 'Manrope, sans-serif', color: '#f05a28' }} className="text-4xl xl:text-5xl font-extrabold leading-tight">
                Built to Deliver.
              </h2>
            </div>
            <p className="text-base xl:text-lg text-gray-600 leading-relaxed max-w-lg">
              GOQii's AI-powered platform integrates coaching, technology, and motivation to drive engagement and deliver measurable health outcomes.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  ),
                  label: 'AI + Human Intelligence',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                    </svg>
                  ),
                  label: 'Behavior Change Science',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  label: 'Secure & Scalable Infrastructure',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  ),
                  label: 'Seamless Integrations',
                },
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold text-gray-700 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Enterprise dashboard mockup */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Dashboard topbar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-3">
                  {/* mini GOQii logo */}
                  <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                    <div className="bg-red-500 rounded-[1px]" />
                    <div className="bg-yellow-400 rounded-[1px]" />
                    <div className="bg-blue-500 rounded-[1px]" />
                    <div className="bg-green-500 rounded-[1px]" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">GOQii Enterprise Dashboard</span>
                </div>
                <button className="text-xs font-medium text-gray-500 border border-gray-200 rounded-md px-3 py-1 hover:bg-gray-100 transition-colors">
                  Export
                </button>
              </div>

              {/* Sidebar + content */}
              <div className="flex">
                {/* Sidebar icons */}
                <div className="hidden xl:flex flex-col items-center gap-5 px-3 py-5 border-r border-gray-100 bg-gray-50">
                  {[
                    <path key="a" strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />,
                    <path key="b" strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
                    <path key="c" strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />,
                    <path key="d" strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />,
                  ].map((pathEl, i) => (
                    <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        {pathEl}
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Main dashboard content */}
                <div className="flex-1 p-5">
                  <p className="text-sm font-semibold text-gray-800 mb-4">Welcome back, Admin</p>

                  {/* KPI tiles */}
                  <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-5">
                    {[
                      { label: 'Active Members', value: '23,456', delta: '+12%', positive: true },
                      { label: 'Engagement Score', value: '82%', delta: '+9%', positive: true },
                      { label: 'Health Risk Score', value: '2.4', delta: '-0.4', positive: true },
                      { label: 'Program Completion', value: '76%', delta: '+10%', positive: true },
                    ].map(kpi => (
                      <div key={kpi.label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                        <p className="text-[10px] text-gray-500 mb-1">{kpi.label}</p>
                        <div className="flex items-end gap-2">
                          <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-xl font-extrabold text-gray-900">{kpi.value}</span>
                          <span className="text-xs font-semibold text-green-600 mb-0.5">{kpi.delta}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Charts row */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {/* Donut chart */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <p className="text-xs font-semibold text-gray-700 mb-3">Health Risk Distribution</p>
                      <div className="flex items-center gap-5">
                        {/* SVG donut */}
                        <div className="relative flex-shrink-0">
                          <svg viewBox="0 0 80 80" className="w-24 h-24 -rotate-90">
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                            {/* High Risk 20% */}
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#f87171" strokeWidth="12"
                              strokeDasharray={`${20 * 1.759} ${100 * 1.759}`} strokeDashoffset="0" />
                            {/* Moderate Risk 32% */}
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#fb923c" strokeWidth="12"
                              strokeDasharray={`${32 * 1.759} ${100 * 1.759}`} strokeDashoffset={`${-20 * 1.759}`} />
                            {/* Low Risk 48% */}
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#4ade80" strokeWidth="12"
                              strokeDasharray={`${48 * 1.759} ${100 * 1.759}`} strokeDashoffset={`${-(20 + 32) * 1.759}`} />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-sm font-extrabold text-gray-900 leading-none">23,456</span>
                            <span className="text-[8px] text-gray-400">Total Members</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {[
                            { color: '#4ade80', label: 'Low Risk', pct: '48%' },
                            { color: '#fb923c', label: 'Moderate Risk', pct: '32%' },
                            { color: '#f87171', label: 'High Risk', pct: '20%' },
                          ].map(item => (
                            <div key={item.label} className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                              <span className="text-[11px] text-gray-600">{item.label}</span>
                              <span className="text-[11px] font-semibold text-gray-800 ml-auto pl-2">{item.pct}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Top Health Goals */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold text-gray-700">Top Health Goals</p>
                        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-3">
                        {[
                          { label: 'Weight Management', pct: 62 },
                          { label: 'Increase Activity', pct: 46 },
                          { label: 'Reduce Stress', pct: 41 },
                          { label: 'Better Sleep', pct: 36 },
                        ].map(goal => (
                          <div key={goal.label} className="flex items-center gap-3">
                            <span className="text-[11px] text-gray-600 w-36 flex-shrink-0">{goal.label}</span>
                            <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full rounded-full bg-green-400" style={{ width: `${goal.pct}%` }} />
                            </div>
                            <span className="text-[11px] font-semibold text-gray-700 w-7 text-right">{goal.pct}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: We Partner Across the Health Ecosystem ── */}
      <section className="w-full bg-gray-50 py-16 xl:py-24">
        <div className="max-w-[1920px] mx-auto px-8 xl:px-16">
          <h2 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-4xl xl:text-5xl font-extrabold text-gray-900 text-center mb-12">
            We Partner Across the{' '}
            <span style={{ color: '#f05a28' }}>Health Ecosystem</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                photo: partnerPhotos.employers,
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                iconBg: '#f05a28',
                title: 'Employers',
                desc: 'Improve employee health, productivity, and reduce healthcare costs.',
              },
              {
                photo: partnerPhotos.payers,
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                iconBg: '#6366f1',
                title: 'Payers',
                desc: 'Drive member engagement and better health outcomes at scale.',
              },
              {
                photo: partnerPhotos.providers,
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                ),
                iconBg: '#2ecc71',
                title: 'Providers',
                desc: 'Extend care, improve adherence and patient outcomes.',
              },
              {
                photo: partnerPhotos.pharma,
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                iconBg: '#ec4899',
                title: 'Pharma & Clinical Research',
                desc: 'Accelerate trials, improve patient recruitment and retention.',
              },
              {
                photo: partnerPhotos.government,
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                ),
                iconBg: '#3b82f6',
                title: 'Governments & Public Sector',
                desc: 'Build healthier communities and nations.',
              },
            ].map(card => (
              <div key={card.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-lg transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={card.photo}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Icon badge */}
                  <div
                    className="absolute bottom-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: card.iconBg }}
                  >
                    {card.icon}
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h3 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-base font-bold text-gray-900">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Real Results. Real Change. ── */}
      <section className="w-full relative overflow-hidden" style={{ minHeight: '360px' }}>
        {/* Background photo */}
        <img
          src={runnersBg}
          alt="People running outdoors at sunset"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,20,0.92) 45%, rgba(10,10,20,0.55) 75%, rgba(10,10,20,0.2) 100%)' }} />

        <div className="relative z-10 max-w-[1920px] mx-auto px-8 xl:px-16 py-16 xl:py-24">
          {/* Heading */}
          <div className="mb-10">
            <h2 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-4xl xl:text-5xl font-extrabold text-white leading-tight">
              Real Results. Real Change.
            </h2>
            <p className="text-base text-gray-300 mt-2">Proven outcomes across populations and programs.</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { value: '3.5M+', label: 'Lives Impacted' },
              { value: '500+', label: 'Enterprise Clients' },
              { value: '85%', label: 'Engagement Rate' },
              { value: '28%', label: 'Reduction in Healthcare Costs' },
              { value: '60%', label: 'Reduction in High Health Risk' },
              { value: '2.6X', label: 'ROI for Employers' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(240,90,40,0.2)' }}>
                    <svg className="w-4 h-4" style={{ color: '#f05a28' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                </div>
                <span style={{ fontFamily: 'Manrope, sans-serif', color: '#f05a28' }} className="text-4xl xl:text-5xl font-extrabold leading-none">{stat.value}</span>
                <span className="text-sm text-gray-300 leading-snug mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Trusted by Global Organizations ── */}
      <section className="w-full bg-white py-12 border-y border-gray-100">
        <div className="max-w-[1920px] mx-auto px-8 xl:px-16">
          <p className="text-center text-sm font-semibold text-gray-500 tracking-wide mb-8">
            Trusted by Global Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 xl:gap-16">
            {/* Google */}
            <svg viewBox="0 0 272 92" className="h-8 w-auto" aria-label="Google">
              <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
              <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
              <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
              <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
              <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
              <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65H35.29z" fill="#4285F4"/>
            </svg>

            {/* Cigna wordmark */}
            <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-2xl font-extrabold tracking-tight text-blue-700">cigna.</span>

            {/* UNICEF */}
            <div className="flex flex-col items-center leading-none">
              <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-xl font-black text-blue-600 tracking-widest">UNICEF</span>
              <span className="text-[9px] font-semibold text-blue-500 tracking-widest mt-0.5">for every child</span>
            </div>

            {/* Bain */}
            <div className="flex items-center gap-1">
              <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-xl font-black text-gray-900 tracking-tight">BAIN</span>
              <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#f05a28' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: '#f05a28' }} />
              </div>
              <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-[10px] font-bold text-gray-900 leading-tight">& COMPANY</span>
            </div>

            {/* Deloitte */}
            <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-2xl font-black text-gray-900 tracking-tight">Deloitte.</span>

            {/* UnitedHealth */}
            <div className="flex flex-col items-center leading-none">
              <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-sm font-black text-blue-800 tracking-tight">UNITEDHEALTH</span>
              <span style={{ fontFamily: 'Manrope, sans-serif' }} className="text-sm font-black text-blue-800 tracking-tight">GROUP</span>
            </div>

            {/* T-Mobile */}
            <span style={{ fontFamily: 'Manrope, sans-serif', color: '#e20074' }} className="text-2xl font-black tracking-tight">
              T·Mobile
            </span>
          </div>
        </div>
      </section>

      {/* ── Section 8: Real People. Real Stories. Real Impact. ── */}
      <section className="w-full bg-white py-16 xl:py-20">
        <div className="max-w-[1920px] mx-auto px-8 xl:px-16 grid grid-cols-12 gap-8 items-stretch">

          {/* Left: headline + copy + CTA */}
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-center gap-5">
            <div>
              <h2 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
                Real People.<br />Real Stories.<br />
                <span style={{ color: '#f05a28' }}>Real Impact.</span>
              </h2>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              From individuals to organizations, GOQii empowers healthier lives and stronger communities.
            </p>
            <button className="w-fit px-6 py-3 rounded-full text-sm font-semibold text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all">
              View Success Stories
            </button>
          </div>

          {/* Center: Linda photo */}
          <div className="col-span-12 lg:col-span-3 rounded-2xl overflow-hidden min-h-[340px]">
            <img
              src={lindaPhoto}
              alt="Linda R., GOQii Member"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Center-right: quote card */}
          <div className="col-span-12 lg:col-span-3 flex items-center">
            <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col justify-between border border-gray-100">
              <div>
                <svg className="w-10 h-10 mb-4" style={{ color: '#f05a28' }} fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z"/>
                </svg>
                <p className="text-xl xl:text-2xl font-semibold text-gray-800 leading-relaxed">
                  My coach keeps me accountable. GOQii has become a part of my everyday life.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-gray-200">
                <p style={{ fontFamily: 'Manrope, sans-serif' }} className="text-base font-bold text-gray-900">Linda R.</p>
                <p className="text-sm text-gray-500">GOQii Member</p>
              </div>
            </div>
          </div>

          {/* Right: CTA card with hands photo */}
          <div className="col-span-12 lg:col-span-3 relative rounded-2xl overflow-hidden min-h-[340px]">
            <img
              src={handsPhoto}
              alt="Diverse team joining hands in partnership"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%)' }} />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full gap-4">
              <h3 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-2xl xl:text-3xl font-extrabold text-white leading-snug">
                Let's Shape the Future of Health, Together.
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Partner with GOQii to drive meaningful, measurable and sustainable change.
              </p>
              <button
                className="w-fit px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
                style={{ background: '#f05a28' }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full bg-white border-t border-gray-100 pt-14 pb-8">
        <div className="max-w-[1920px] mx-auto px-8 xl:px-16">
          <div className="grid grid-cols-12 gap-10 mb-12">

            {/* Brand column */}
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-5">
              <GoqiiLogo />
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                GOQii's mission is to make health a daily habit for every individual.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-4">
                {[
                  { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                  { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                  { label: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z' },
                  { label: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
                ].map(s => (
                  <button key={s.label} aria-label={s.label} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-800 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.path} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {[
              {
                heading: 'Solutions',
                links: ['Employer Solutions', 'Payer Solutions', 'Provider Solutions', 'Pharma Solutions', 'Government Solutions'],
              },
              {
                heading: 'Platform',
                links: ['Overview', 'GOQii App', 'AI & Analytics', 'Integrations', 'Security'],
              },
              {
                heading: 'Resources',
                links: ['Case Studies', 'Whitepapers', 'Blogs', 'Webinars', 'Newsroom'],
              },
              {
                heading: 'Company',
                links: ['About Us', 'Careers', 'Leadership', 'Contact Us'],
              },
            ].map(col => (
              <div key={col.heading} className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-3">
                <h4 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-sm font-bold text-gray-900">{col.heading}</h4>
                <ul className="flex flex-col gap-2">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Get in touch column */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col gap-4">
              <h4 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-sm font-bold text-gray-900">Get in Touch</h4>
              <div className="flex flex-col gap-2.5">
                <a href="tel:+18774637644" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors group">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  US: +1-877-463-7644
                </a>
                <a href="mailto:info@goqii.com" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors group">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  info@goqii.com
                </a>
              </div>
              <button
                className="mt-2 w-fit px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-md"
                style={{ background: '#f05a28' }}
              >
                Request a Demo
              </button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400">© 2026 GOQii USA. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                <a key={item} href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
