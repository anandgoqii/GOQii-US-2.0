import React from 'react';

interface TrustCenterPageProps {
  onBack: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}

const PRIVACY_DATA_CONTROLS = [
  'Privacy-by-design product development',
  'Secure data handling practices',
  'Encryption of sensitive information',
  'Access controls and authentication safeguards',
  'Continuous monitoring and security reviews',
  'Responsible data governance policies',
];

const PLATFORM_SECURITY_CONTROLS = [
  'Data encryption in transit and at rest',
  'Role-based access management',
  'Infrastructure monitoring',
  'Secure cloud architecture',
  'Vulnerability assessments',
  'Security incident response procedures',
];

const COMPLIANCE_STANDARDS = [
  {
    name: 'HIPAA',
    desc: 'Health Insurance Portability and Accountability Act standards for protecting health information.',
  },
  {
    name: 'GDPR',
    desc: 'General Data Protection Regulation standards governing secure personal data of EU individuals.',
  },
  {
    name: 'SOC 2',
    desc: 'Rigorous standards for security, availability, processing integrity, confidentiality, and privacy.',
  },
  {
    name: 'ISO 27001',
    desc: 'International standard for managing information security systems.',
  },
  {
    name: 'ISO 9001',
    desc: 'Standard for quality management systems and operational efficiency.',
  },
  {
    name: 'ISO 13485',
    desc: 'Medical devices quality management systems standard.',
  },
  {
    name: 'CDSCO',
    desc: 'Central Drugs Standard Control Organisation alignment for clinical compliance.',
  },
  {
    name: 'Cyber Essentials',
    desc: 'UK government-backed scheme safeguarding against common cyber threats.',
  },
  {
    name: 'DPDPA Readiness',
    desc: 'Preparedness for the Digital Personal Data Protection Act to secure user privacy.',
  },
  {
    name: 'FDA Registered Class II',
    desc: 'Federal Drug Administration quality registration for eligible platform components.',
  },
];

const RESPONSIBLE_AI_PRINCIPLES = [
  'Human oversight',
  'Transparency',
  'Clinical relevance',
  'Privacy protection',
  'Bias awareness',
  'Continuous improvement',
];

const HEALTHCARE_ECOSYSTEM_ENTITIES = [
  'Health coaches',
  'Medical professionals',
  'Diagnostics partners',
  'Healthcare organizations',
  'Public health collaborators',
];

const TRANSPARENCY_COMMITMENTS = [
  'Clearly explain how data is used',
  'Communicate product capabilities responsibly',
  'Maintain transparent privacy practices',
  'Continuously improve security standards',
];

export default function TrustCenterPage({
  onBack,
  onNavigateToPrivacy,
  onNavigateToTerms,
}: TrustCenterPageProps) {
  return (
    <div
      className="w-full bg-[#f8fafc] text-slate-900 selection:bg-[#f05a28]/20 min-h-screen pt-4 sm:pt-6"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Sub-header / Breadcrumb Bar ── */}
      <div className="bg-white border-y border-slate-100/90 shadow-2xs mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-600 hover:text-[#f05a28] transition-colors cursor-pointer group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-slate-500 group-hover:text-[#f05a28]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
            <span className="text-[12px] font-semibold text-slate-500">
              GOQii Trust Center
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        {/* Header Block */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-[11px] font-bold tracking-widest uppercase mb-4">
            <svg
              className="w-3.5 h-3.5 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            <span>GOQii TRUST CENTER</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            TRUST CENTER
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed mb-6">
            Building trust through security, privacy, compliance, and responsible
            healthcare innovation.
          </p>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-xs">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At GOQii, trust is fundamental to everything we build. As a
              prevention-first health platform serving individuals, enterprises,
              insurers, healthcare providers, and public health systems, we are
              committed to protecting data, maintaining compliance, and operating
              with transparency.
            </p>
          </div>
        </div>

        {/* ── Content Sections ── */}
        <div className="space-y-8">
          {/* Section: Our Commitment */}
          <section
            id="commitment"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <div className="space-y-3 flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Our Commitment
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  GOQii combines healthcare, coaching, diagnostics, wearable
                  technology, and artificial intelligence into one connected
                  ecosystem.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We recognize that health information is deeply personal. Every
                  product, service, and technology decision is designed with
                  privacy, security, and responsible data stewardship at its core.
                </p>
              </div>
            </div>
          </section>

          {/* Grid: Privacy & Platform Security */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Privacy & Data Protection */}
            <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Privacy &amp; Data Protection
                  </h3>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm mb-5 leading-relaxed">
                  We are committed to protecting personal and sensitive health data
                  across all our services.
                </p>
                <ul className="space-y-3">
                  {PRIVACY_DATA_CONTROLS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-2.5 h-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-xs sm:text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Platform Security */}
            <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m5.482 1.255A9.002 9.002 0 0112 21a9.002 9.002 0 01-8.482-6m16.964-2a8.97 8.97 0 00-.982-3.805M3.518 13A8.97 8.97 0 014.5 9.195m15-1.99A9.003 9.003 0 0012 3a9.003 9.003 0 00-7.5 4.205"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Platform Security
                  </h3>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm mb-5 leading-relaxed">
                  Security is integrated throughout the GOQii ecosystem to secure
                  your critical platform logs and telemetry. Key controls include:
                </p>
                <ul className="space-y-3">
                  {PLATFORM_SECURITY_CONTROLS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-2.5 h-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-xs sm:text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Compliance & Certifications */}
          <section
            id="compliance"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Compliance &amp; Certifications
              </h2>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed mb-6">
              GOQii aligns with internationally recognized standards and
              healthcare compliance frameworks. Compliance requirements are
              continuously reviewed and strengthened as regulations evolve.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {COMPLIANCE_STANDARDS.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-slate-100 rounded-xl p-4 bg-slate-50/50 hover:bg-white hover:border-emerald-300/50 transition-all"
                >
                  <span className="inline-block text-xs font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md mb-2 border border-emerald-100/60">
                    {item.name}
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Grid: Responsible AI & Healthcare Clinical Responsibility */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Responsible AI */}
            <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 border border-pink-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Responsible AI
                  </h3>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm mb-5 leading-relaxed">
                  Artificial intelligence within GOQii is designed to support
                  prevention, engagement, coaching, and health decision-making:
                </p>
                <ul className="space-y-3 mb-5">
                  {RESPONSIBLE_AI_PRINCIPLES.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-2.5 h-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-xs sm:text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-slate-500 font-medium bg-slate-50 rounded-xl p-3 border border-slate-100 italic">
                * AI supports health outcomes but does not replace qualified medical
                professionals.
              </p>
            </div>

            {/* Card 2: Healthcare & Clinical Responsibility */}
            <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Healthcare &amp; Clinical Responsibility
                  </h3>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm mb-5 leading-relaxed">
                  GOQii combines technology with human expertise. Our ecosystem
                  links multiple clinical entities together:
                </p>
                <ul className="space-y-3 mb-5">
                  {HEALTHCARE_ECOSYSTEM_ENTITIES.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-2.5 h-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-xs sm:text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-slate-500 font-medium bg-slate-50 rounded-xl p-3 border border-slate-100 italic">
                * Clinical decisions should always be discussed with qualified
                healthcare providers.
              </p>
            </div>
          </div>

          {/* Section: Transparency */}
          <section
            id="transparency"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="space-y-3 flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Transparency
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We believe trust is earned through openness. We continuously
                  strive to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {TRANSPARENCY_COMMITMENTS.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <svg
                          className="w-2.5 h-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-xs sm:text-sm font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Trust & Security Team (Dark Accent Card) */}
          <section
            id="contact"
            className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-md space-y-3">
                <div className="flex items-center gap-2 text-[#f05a28] text-xs font-bold uppercase tracking-wider">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Reach out</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Trust &amp; Security Team
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  For security, compliance, privacy, or trust-related inquiries,
                  contact our specialized taskforce directly. We'll be glad to
                  help.
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-[240px]">
                <a
                  href="mailto:trust@goqii.com"
                  className="flex items-center gap-3 bg-white/10 border border-white/15 hover:border-white/30 px-4 py-3 rounded-xl text-slate-200 hover:text-white hover:bg-white/15 text-xs sm:text-sm transition-all font-semibold"
                >
                  <svg
                    className="w-4 h-4 text-[#f05a28]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  trust@goqii.com
                </a>
                <a
                  href="mailto:support@goqii.com"
                  className="flex items-center gap-3 bg-white/10 border border-white/15 hover:border-white/30 px-4 py-3 rounded-xl text-slate-200 hover:text-white hover:bg-white/15 text-xs sm:text-sm transition-all font-semibold"
                >
                  <svg
                    className="w-4 h-4 text-sky-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  support@goqii.com
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-400 font-medium">
              Together, we are building a prevention-first future for human health.
            </div>
          </section>
        </div>

        {/* Bottom Return Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-[#f05a28] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <span>Return to GOQii Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}
