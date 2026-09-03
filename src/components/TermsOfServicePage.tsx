import React from 'react';

interface TermsOfServicePageProps {
  onBack: () => void;
  onNavigateToPrivacy?: () => void;
}

const AGE_RESTRICTIONS_DATA = [
  {
    label: 'All Users 13–17',
    value: 'Parental permission is strictly required; parent or guardian is fully bound by these Terms.',
  },
  {
    label: 'India DPDP Sec. 9',
    value: 'Verifiable parental consent is mandatory via the consent flow before account activation. Tracking or profiling is strictly prohibited.',
  },
  {
    label: 'USA COPPA',
    value: 'Children under 13 are not permitted to use any service; dedicated COPPA deletion request process applies.',
  },
  {
    label: 'EU GDPR Art. 8',
    value: 'Verification conforms to country-specific age of digital consent (typically 13–16).',
  },
  {
    label: 'Minor Safety Commitment',
    value: 'Advertising of any kind is permanently disabled for all users verified under the age of 18.',
  },
];

const CONNECTED_PLATFORMS_RESTRICTIONS = [
  {
    title: 'Apple HealthKit Restrictions',
    desc: 'Data access is solely limited to fitness/health insights. HealthKit data will never be sold to third parties, used for advertising, or utilized beyond disclosed privacy scopes per App Store Review Guidelines §5.1.3.',
  },
  {
    title: 'Google Health Connect Restrictions',
    desc: 'Google Health Connect integration is bound strictly to service delivery and personal progress metrics, per Google Health Connect Permission Policy guidelines.',
  },
  {
    title: 'Retention After Disconnection',
    desc: 'Imported health data is retained for 3 months after platform disconnection and then permanently purged, unless an immediate erasure request is issued.',
  },
];

const DPDP_RIGHTS_DATA = [
  {
    title: 'Right to Access (30 Days)',
    desc: 'Request and view a comprehensive, secure copy of all personal details collected.',
  },
  {
    title: 'Right to Correction (30 Days)',
    desc: 'Submit corrections to fix inaccurate, outdated, or incomplete details in our workspace.',
  },
  {
    title: 'Right to Erasure (30 Days)',
    desc: 'Request deletion of user records within 30 days of consent withdrawal, subject to statutory limits.',
  },
  {
    title: 'Data Portability (30 Days)',
    desc: 'Download activity registries in standardized JSON or CSV format via user settings panels.',
  },
  {
    title: 'Right to Nominate (DPDP Sec. 13)',
    desc: 'Nominate a representative in writing to exercise your data rights in the event of incapacity or death.',
  },
  {
    title: 'Right to Grievance Redressal',
    desc: 'Escalate grievances directly to our appointed Grievance Officer, or to the Data Protection Board of India.',
  },
];

const MINOR_PROTECTION_BULLETS = [
  'No advertising of any kind displayed on minor sessions',
  'No commercial data sharing with external brokers or third-party networks',
  'No behavioral and commercial profiling or automated ad targeting',
  'HealthKit and Health Connect data utilized exclusively for core service delivery',
  'Parental deletion rights actioned within 30 days (5 business days for COPPA/USA)',
  "Full parental access. Requests should be submitted to privacy@goqii.com subject 'Minor Account Request'",
];

export default function TermsOfServicePage({
  onBack,
  onNavigateToPrivacy,
}: TermsOfServicePageProps) {
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
            <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
            <span className="text-[12px] font-semibold text-slate-500">
              GOQii Legal Services
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        {/* Header Block */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#f05a28] text-[11px] font-bold tracking-widest uppercase mb-4">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>GOQii Legal Services Grid</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            TERMS OF SERVICE
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-200/80 px-2.5 py-1 rounded-md">
              Last Updated: May 2026 | Version 2.0 | Minimum age: 13+
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-700 font-bold leading-relaxed mb-6">
            We, GOQii (collectively used to refer to GOQii Inc., GOQii Technologies
            Pvt. Ltd. and its affiliates, successors and assigns) bring to you a
            digital health and fitness subscription service that combines
            one-on-one mobile personal coaching and fitness tracking technology to
            help you shift to a healthier lifestyle and reach your goals.
          </p>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-xs space-y-3">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              These Terms of Service along with the Privacy Policy govern your
              access to and use of the Services. By accessing and using any of the
              Services, you agree to be bound by these Terms. If you do not agree,
              please do not access or use the Services.
            </p>
            <p className="text-sm sm:text-base text-slate-900 font-semibold leading-relaxed">
              We may revise these Terms at any time. We will notify you of any
              material changes via email or in-app notification at least 30 days
              before the revised Terms take effect. If you do not agree to the
              revised Terms, you must stop using the Services before they take
              effect.
            </p>
          </div>
        </div>

        {/* ── Policy Sections ── */}
        <div className="space-y-8">
          {/* Section 1: Your Use of Services */}
          <section
            id="use-of-services"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-6"
          >
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f05a28] border border-orange-100 flex items-center justify-center shrink-0">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Your Use of Services
              </h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Age Restrictions & Minor Protections
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AGE_RESTRICTIONS_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors"
                  >
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      {item.label}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-100">
              <h3 className="text-xs font-bold tracking-widest text-[#f05a28] uppercase">
                Registration Requirements
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Once you purchase GOQii Services, you may learn more about the
                Services via information available on the Platform, including the
                FAQs available at{' '}
                <a
                  href="https://goqiisupport.zendesk.com/hc/en-us"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f05a28] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  goqiisupport.zendesk.com
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                .
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In order to register, you may be required to provide:{' '}
                <span className="font-semibold text-slate-800">
                  full name, email address, account credentials (hashed password),
                  gender, profile picture, contact details, address, date of
                  birth, height, weight, dietary information, fitness and
                  exercise details, medical history and conditions, and medication
                  details.
                </span>{' '}
                You are responsible for maintaining the accuracy and completeness
                of this information.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You may register through your existing email accounts. Your email
                address constitutes your username. You are responsible for
                maintaining the confidentiality of your username and password.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200/70 rounded-2xl p-4 flex gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
              <svg
                className="w-5 h-5 text-amber-600 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <span className="font-bold">Account Verification:</span> GOQii
                reserves the right to verify your age at registration and at any
                point during your use. Accounts found in breach of these age
                requirements will be suspended. Parents or guardians who become
                aware of an unauthorised minor account should contact{' '}
                <a
                  href="mailto:privacy@goqii.com"
                  className="font-bold underline text-amber-950 hover:text-[#f05a28]"
                >
                  privacy@goqii.com
                </a>{' '}
                immediately.
              </div>
            </div>
          </section>

          {/* Section 2: Your Privacy Rights */}
          <section
            id="privacy-rights"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Your Privacy Rights
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Your personal data collected through your use of the Services is
              processed in accordance with our Privacy Policy (available at{' '}
              <a
                href="#privacy"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateToPrivacy) onNavigateToPrivacy();
                  else window.location.hash = 'privacy';
                }}
                className="text-[#f05a28] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                goqii.com/privacypolicy
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              ).
            </p>

            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal bg-slate-50 border border-slate-100 p-4 sm:p-5 rounded-xl">
              Under applicable data protection law, including the{' '}
              <span className="font-bold text-slate-900">
                Digital Personal Data Protection Act 2023
              </span>
              , you have the right to access, correct, erase, and port your
              personal data; to withdraw consent; to nominate another individual
              to exercise your rights; and to raise grievances with our Grievance
              Officer. Please refer to our Privacy Policy for full details and
              contact information.
            </div>
          </section>

          {/* Section 3: Connected Health Platforms */}
          <section
            id="connected-platforms"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-6"
          >
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Connected Health Platforms
              </h2>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              By connecting{' '}
              <span className="font-bold text-slate-900">
                Apple Health, Google Fit, or Google Health Connect
              </span>{' '}
              to GOQii, you grant permission to read and/or write specified
              health data types (steps, heart rate, sleep, activity, body
              measurements, and related metrics) to provide personalized
              coaching and wellness insights.
            </p>

            <div className="space-y-4">
              {CONNECTED_PLATFORMS_RESTRICTIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-[#f05a28] pl-4 space-y-1"
                >
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-slate-700 uppercase">
                How to Disconnect
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] font-semibold text-slate-600">
                <div className="p-3 bg-white rounded-xl border border-slate-100">
                  <span className="text-slate-900 block font-bold text-xs mb-1">
                    Apple Health
                  </span>
                  iPhone Settings &gt; Health &gt; Data Access &amp; Devices &gt;
                  GOQii
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-100">
                  <span className="text-slate-900 block font-bold text-xs mb-1">
                    Google Fit / Health Connect
                  </span>
                  Android Settings &gt; Health Connect &gt; App permissions &gt;
                  GOQii
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-100">
                  <span className="text-slate-900 block font-bold text-xs mb-1">
                    GOQii App
                  </span>
                  Settings &gt; Privacy &gt; Connected Platforms
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed italic">
              * Disconnecting stops future data sync but does not auto-delete data
              already imported (which is stored for 3 months). To request
              immediate erasure of your data, please follow the data erasure
              request process described in our Privacy Policy. For minors under
              18, explicit parental consent must be configured via registration
              flow or Connected Platforms Settings.
            </p>
          </section>

          {/* Section 4: We Do Not Provide Medical Advice */}
          <section
            id="no-medical-advice"
            className="bg-rose-50/40 border border-rose-200/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-5"
          >
            <div className="flex items-center gap-3.5 border-b border-rose-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-rose-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-rose-950 tracking-tight">
                We Do Not Provide Medical Advice
              </h2>
            </div>

            <div className="space-y-3 text-slate-700">
              <p className="text-sm font-semibold text-rose-950 leading-relaxed">
                The Services provided by GOQii, including information provided
                through personalised coaching services, does not constitute
                medical advice of any kind. Nothing on the Platform should be
                construed as an attempt to offer or render a medical opinion, or
                otherwise engage in the practice of medicine.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You should consult with your physician before making any changes
                to your diet or exercise programme. GOQii is not responsible for
                any medical or mental health problems you may face as a result of
                accessing or using the Services.
              </p>
            </div>

            <div className="bg-white border border-rose-100 p-4 sm:p-5 rounded-xl space-y-1">
              <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block">
                HIPAA Notice for US Users
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                If you are a user in the United States and your health
                information constitutes Protected Health Information (PHI) under
                HIPAA, your PHI is handled in accordance with our HIPAA Notice of
                Privacy Practices, available by contacting{' '}
                <a
                  href="mailto:privacy@goqii.com"
                  className="text-rose-600 font-semibold underline hover:text-rose-800"
                >
                  privacy@goqii.com
                </a>{' '}
                or writing to our Grievance Officer. GOQii complies with
                applicable HIPAA requirements in its role as a business associate
                of covered entities.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-rose-50/70 border border-rose-100 rounded-xl">
              <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider block mb-1">
                For Users Under 18
              </span>
              <p className="text-xs text-rose-900 leading-relaxed">
                Parents and guardians should actively supervise their minor's use
                of the Services and consult a qualified medical professional
                before acting on any health recommendations made to their minor
                child through the platform. Coaching guidance provided to minor
                users is general wellness and fitness information only and is not
                a substitute for professional paediatric or adolescent medical
                care.
              </p>
            </div>
          </section>

          {/* Section 5: Modifications to Services and Data */}
          <section
            id="modifications-services"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-4">
              Modifications to Services and Data
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              The Services may change over time as we add more features. We may
              modify, suspend or discontinue, temporarily or permanently, the
              Services (or a part of the Services) from time to time.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If we intend to discontinue a material feature or the entire
              Service, we will provide{' '}
              <span className="font-bold text-slate-900">
                at least 30 days' prior notice
              </span>{' '}
              and maintain data export functionality throughout that period.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200/70 rounded-xl text-xs sm:text-sm font-semibold text-slate-700">
              💡 Data Export Check: You may export your personal data at any time
              via Settings &gt; Privacy &gt; Download My Data. GOQii takes
              reasonable steps to maintain data integrity and availability.
            </div>
          </section>

          {/* Section 6: User Content */}
          <section
            id="user-content"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-4">
              User Content
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              You are solely responsible for all information, data, text,
              photographs, and other materials (
              <span className="font-bold text-slate-900">User Content</span>)
              that you upload, transmit, or post on the Platform. You agree not
              to use the Services to post any content that is unlawful,
              threatening, spam, or that contains software viruses.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              You grant GOQii a non-exclusive, worldwide, royalty-free licence to
              use, copy, display, reproduce, modify, adapt, and distribute the
              User Content you post on the Platform solely for the purpose of
              operating, providing, and improving the Services. This licence
              terminates when you delete your User Content or close your
              account, except to the extent GOQii is required by law to retain
              it.
            </p>
            <div className="p-4 sm:p-5 bg-orange-50/50 rounded-2xl border border-orange-100 text-xs sm:text-sm text-slate-700 space-y-2">
              <span className="font-bold text-[#f05a28] block uppercase tracking-wider text-xs">
                Health &amp; Minor Protection Standards
              </span>
              <p className="leading-relaxed">
                GOQii will not use your health data or sensitive personal data
                in User Content for advertising or commercial profiling without
                your separate explicit consent.
              </p>
              <p className="font-semibold text-slate-900 leading-relaxed">
                For users under 18: the licence granted to GOQii does not permit
                GOQii to use the personal data or health data of users under 18
                for advertising, marketing, or commercial profiling, regardless
                of any general consent granted at registration.
              </p>
            </div>
          </section>

          {/* Section 7: Data Protection & DPDP Compliance */}
          <section
            id="dpdp-compliance"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-6"
          >
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Data Protection &amp; DPDP Compliance
              </h2>
            </div>

            <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl space-y-2">
              <span className="text-[10px] bg-[#f05a28] font-bold text-white px-2.5 py-1 rounded-md uppercase tracking-wider">
                India Fiduciary Status
              </span>
              <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-200">
                GOQii Technologies Private Limited acts as a{' '}
                <span className="text-[#f05a28] font-bold">Data Fiduciary</span>{' '}
                under the Digital Personal Data Protection Act, 2023 (DPDP Act) in
                respect of personal data of Indian residents processed through the
                Services.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900">
                Data Principal Rights &amp; SLAs (Response within 30 days)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {DPDP_RIGHTS_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50/50"
                  >
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 bg-[#f05a28] rounded-full" />
                      {item.title}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50/30 space-y-3">
              <span className="text-xs font-bold text-slate-700 block uppercase tracking-widest">
                Key Data Retention Periods
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-slate-600 font-medium">
                <div className="p-2.5 border border-slate-200/70 bg-white rounded-lg">
                  Profile Data: 3 months post-deletion
                </div>
                <div className="p-2.5 border border-slate-200/70 bg-white rounded-lg">
                  Health Data: 3 months post-deletion
                </div>
                <div className="p-2.5 border border-slate-200/70 bg-white rounded-lg">
                  Sync Channels: 3 months post-revocation
                </div>
                <div className="p-2.5 border border-slate-200/70 bg-white rounded-lg">
                  Coach Chats: 1 year period
                </div>
                <div className="p-2.5 border border-slate-200/70 bg-white rounded-lg">
                  Consent &amp; Audit Trails: 7 years
                </div>
                <div className="p-2.5 border border-slate-200/70 bg-white rounded-lg">
                  Support Ticketing Logs: 2 years
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-medium pt-1">
                For users under 18: personal data is deleted within 30 days of a
                parental/guardian deletion request or account closure, with no
                retention beyond strict necessity.
              </p>
            </div>

            <div className="bg-[#f8fafc] border border-slate-200/80 p-5 rounded-2xl space-y-3">
              <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                Breach Notification Protocols
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In the event of a personal data breach likely to affect your
                rights, GOQii will notify the Data Protection Board of India
                (DPBI) as required under DPDP Sec. 17, and notify CERT-In within 6
                hours per CERT-In Directions 2022. If US Protected Health
                Information is involved, we will notify the U.S. Department of
                Health and Human Services (HHS) under HIPAA.
              </p>
              <div>
                <span className="text-[11px] bg-red-50 text-red-700 px-3 py-1.5 rounded-lg border border-red-100 font-semibold inline-block">
                  Security Incident Reporting: security@goqii.com
                </span>
              </div>
            </div>
          </section>

          {/* Section 8: Children's Data & Minor User Protections */}
          <section
            id="childrens-data"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-5"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-5">
              Children's Data &amp; Minor User Protections
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              As a responsible health partner, GOQii enforces 6 bullet-point
              protection commitments for all identified minor accounts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-2">
              {MINOR_PROTECTION_BULLETS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3.5 bg-emerald-50/40 border border-emerald-100/70 rounded-xl"
                >
                  <div className="p-1 bg-emerald-100 text-emerald-700 rounded-md shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5"
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
                  </div>
                  <span className="text-xs text-slate-700 font-semibold leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 font-medium">
              * Note: Parental deletion rights are completed within 30 days (5
              business days for COPPA/USA). Address inquiries to{' '}
              <a
                href="mailto:privacy@goqii.com"
                className="text-[#f05a28] font-semibold hover:underline"
              >
                privacy@goqii.com
              </a>
              .
            </p>
          </section>

          {/* Section 9: Cancellation and Return Policy */}
          <section
            id="cancel-refund-policy"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-6"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-5">
              Cancellation and Return Policy
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-amber-400 pl-4 space-y-1">
                <h4 className="text-sm font-bold text-slate-900">
                  7-Day Cancel &amp; Return
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  You may return your GOQii physical device inside 7 days from
                  delivery dispatch by triggering a "Cancel Order" via the app.
                  Only unused, unopened items in pristine initial packaging can be
                  returned.
                </p>
              </div>

              <div className="border-l-4 border-indigo-400 pl-4 space-y-1">
                <h4 className="text-sm font-bold text-slate-900">
                  Subscription Cancellation Rules
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  You may configure cancellation at any point via Subscription
                  Settings or emailing{' '}
                  <a
                    href="mailto:renewals@goqii.com"
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    renewals@goqii.com
                  </a>
                  . Access continues through paid periods. For annual packages
                  cancelled inside 30 days (with zero utilized human coaching
                  sessions), a pro-rata refund (minus a 10% administration
                  charge) will process inside 14 working days.
                </p>
              </div>

              <div className="border-l-4 border-rose-400 pl-4 space-y-1">
                <h4 className="text-sm font-bold text-slate-900">
                  Parental Subscription Override
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  A parent or guardian of a user under 18 may trigger termination
                  of minor subscriptions and full data erasure at any time via{' '}
                  <a
                    href="mailto:renewals@goqii.com"
                    className="text-rose-600 font-semibold hover:underline"
                  >
                    renewals@goqii.com
                  </a>
                  . Erasures are finished within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: General Operations & Clauses */}
          <section
            id="miscellaneous-legal"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-6"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-5">
              General Operations &amp; Clauses
            </h2>
            <div className="space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest block">
                  Strict Doctor Policy
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  GOQii services connect you with GOQii Doctors (General
                  Practitioners) to aid on routine lifestyle and metabolic
                  concerns. GOQii Health is NOT clinical diagnostics. No formal
                  medical diagnosis, specialist treatment, or prescription
                  medications can be offered. See physical clinical physicians in
                  person for formal assessments.
                </p>
              </div>

              <div className="space-y-1 border-t border-slate-100 pt-4">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest block">
                  Interest-Based Advertisement
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We will not share health, clinical, biomarker, Apple HealthKit
                  or Google Health Connect data with external advertisers. General
                  interest-based advertising uses strictly non-sensitive
                  parameters and requires your direct authorization preferences
                  via Settings panel. Users under 18 have advertising permanently
                  disabled.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-slate-50/60 border border-slate-100 text-xs text-slate-600">
                  <span className="font-bold text-slate-900 block mb-1 text-xs">
                    Indemnity
                  </span>
                  You agree to defend, indemnify and hold harmless GOQii from
                  any losses, liabilities, damages, or attorneys' fees arising out
                  of violation of these Terms of use.
                </div>
                <div className="p-4 rounded-xl bg-slate-50/60 border border-slate-100 text-xs text-slate-600">
                  <span className="font-bold text-slate-900 block mb-1 text-xs">
                    Warranty Details
                  </span>
                  We cover manufacturing defects for 1 year or your active
                  subscription length (whichever ends earlier). Does not apply to
                  bands, physical straps or personal loss.
                </div>
              </div>
            </div>
          </section>

          {/* Section 11: Disputes & Governing Jurisdiction */}
          <section
            id="disputes-resolution"
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <h2 className="text-xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-4">
              Disputes &amp; Governing Jurisdiction
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              These Terms are governed by the laws of India, including the
              Information Technology Act 2000, the Digital Personal Data
              Protection Act 2023, and the Consumer Protection Act 2019.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600">
              <div className="p-3.5 border border-slate-100 bg-slate-50/50 rounded-xl">
                <span className="text-slate-900 font-bold block mb-1">
                  1. Friendly Discussion
                </span>
                Contact support@goqii.com to seek initial friendly, informal
                resolution.
              </div>
              <div className="p-3.5 border border-slate-100 bg-slate-50/50 rounded-xl">
                <span className="text-slate-900 font-bold block mb-1">
                  2. Online Dispute
                </span>
                Refer unresolved cases to online dispute resolution via NCH portal
                (consumerhelpline.gov.in).
              </div>
              <div className="p-3.5 border border-slate-100 bg-slate-50/50 rounded-xl">
                <span className="text-slate-900 font-bold block mb-1">
                  3. Courts of Mumbai
                </span>
                Unresolved litigation is governed under exclusive jurisdiction in
                Mumbai, India.
              </div>
            </div>
          </section>

          {/* Need Clarification Contact Box */}
          <section className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-md space-y-2">
                <div className="flex items-center gap-2 text-[#f05a28] text-xs font-bold uppercase tracking-widest">
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
                  <span>Corporate Legal</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Need clarification?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  For formal compliance alerts, renewals inquiry, or diagnostic
                  legal documentation, contact our corporate compliance services:
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-[240px] tracking-wide shrink-0 font-medium">
                <a
                  href="mailto:support@goqii.com"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/15 hover:border-white/30 hover:bg-white/15 text-[#f05a28] font-bold text-xs uppercase transition-colors"
                >
                  <svg
                    className="w-4 h-4"
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
                <a
                  href="mailto:renewals@goqii.com"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/15 hover:border-white/30 hover:bg-white/15 text-slate-200 font-semibold text-xs uppercase transition-colors"
                >
                  <svg
                    className="w-4 h-4"
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
                  renewals@goqii.com
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-400 font-normal">
              If any provision of these Terms is held to be invalid or
              unenforceable, that provision will be limited to the minimum
              extent necessary, and the remaining provisions will remain in full
              force and effect.
            </div>
          </section>
        </div>

        {/* Back to top & Return buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-[#f05a28] transition-colors text-xs font-bold cursor-pointer"
          >
            <svg
              className="w-4 h-4"
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

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to top</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
