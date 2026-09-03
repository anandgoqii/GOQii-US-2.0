import React from 'react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

const RETENTION_DATA = [
  {
    type: 'Personal data of users under 18',
    period: 'Deleted within 30 days of parental/guardian deletion request or account closure',
    rationale: 'Enhanced protection for minor users; no retention beyond strict necessity',
  },
  {
    type: 'User profile data',
    period: '3 months after account deletion',
    rationale: 'Account recovery & pending issue resolution',
  },
  {
    type: 'Health & activity data (steps, sleep, heart rate, logs, labs)',
    period: '3 months after account deletion or last activity',
    rationale: 'Continuity of care',
  },
  {
    type: 'Apple HealthKit data (read/synced from Apple Health)',
    period: '3 months after account deletion or revocation of HealthKit permission',
    rationale: 'Same as health data; deleted on permission revocation',
  },
  {
    type: 'Google Fit / Health Connect data (read/synced)',
    period: '3 months after account deletion or revocation of Health Connect permission',
    rationale: 'Same as health data; deleted on permission revocation',
  },
  {
    type: 'Coach / health professional chats',
    period: '1 year after last interaction',
    rationale: 'Quality audits, service history',
  },
  {
    type: 'Device & app metadata',
    period: '6 months',
    rationale: 'Diagnostics, engagement metrics',
  },
  {
    type: 'Consent logs & audit trails',
    period: '7 years',
    rationale: 'Legal & compliance traceability',
  },
  {
    type: 'Support tickets',
    period: '2 years',
    rationale: 'Historical support context',
  },
  {
    type: 'Communication logs (in-app, WhatsApp)',
    period: '6 months',
    rationale: 'Operational analysis',
  },
];

export default function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  return (
    <div
      className="w-full bg-[#f8fafc] text-slate-900 selection:bg-[#f05a28]/20 min-h-screen pt-4 sm:pt-6"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Sub-header / Breadcrumb Bar ── */}
      <div className="bg-white border-y border-slate-100/90 shadow-2xs mb-8 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
            <span className="text-[12px] font-semibold text-slate-600">
              DPDP Act 2023 &bull; HIPAA &bull; GDPR Ready
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Header Block */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#f05a28] text-[11px] font-bold tracking-widest uppercase mb-3">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
            <span>Legal &amp; Compliance Center</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            PRIVACY POLICY
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold text-slate-600">
            <span className="bg-slate-200/70 text-slate-800 px-3 py-1 rounded-full">
              Last updated: May 2026
            </span>
            <span className="bg-orange-100/70 text-orange-900 border border-orange-200/60 px-3 py-1 rounded-full">
              Version 2.0
            </span>
            <span className="bg-emerald-100/70 text-emerald-900 border border-emerald-200/60 px-3 py-1 rounded-full">
              Minimum age: 13+
            </span>
          </div>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* 1. Our Policy */}
          <section
            id="our-policy"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f05a28] border border-orange-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Our Policy
              </h2>
            </div>
            <p>
              We, GOQii (collectively used to refer to GOQii Inc., GOQii Technologies Pvt. Ltd. and its affiliates, successors and assigns) bring to you a digital health and fitness subscription service that combines one-on-one mobile personal coaching and fitness tracking technology to help you shift to a healthier lifestyle and reach your goals. While fitness trackers and apps are useful tools, they are missing the elements of on-going engagement, motivation and accountability. GOQii solves this by connecting your activity tracker or smart watch to a professional health and fitness coach of your choice via the “GOQii App” (available on iOS and Android) and a wearable GOQii fitness band (&quot;GOQii Tracker&quot;). You can read more about GOQii and our product at website goqii.com (together with the GOQii App is hereby referred to as the &quot;Platform&quot;). For ease of reading and clarity, the Platform, the GOQii App and the GOQii Tracker are collectively referred to as the &quot;Services&quot;. Your use of the Platform and Services are governed by the Terms of Use and other policies of GOQii.
            </p>
            <p>
              We know that the privacy of your personal data is very important to you. This Privacy Policy sets forth GOQii’s policy with respect to information including personally identifiable data (&quot;Personal Data&quot;) and other information that is collected from Platform visitors and users.
            </p>
          </section>

          {/* 2. Notice under the Digital Personal Data Protection Act, 2023 (DPDP Act) */}
          <section
            id="dpdp-notice"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.002A11.959 11.959 0 0112 2.714z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Notice under the Digital Personal Data Protection Act, 2023 (DPDP Act)
              </h2>
            </div>
            <p>
              GOQii Technologies Pvt. Ltd. processes your personal data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-800">
              <li>Providing personalised health coaching, fitness tracking, and wellness services;</li>
              <li>Operating and improving our platform;</li>
              <li>Communicating with you about your account and services;</li>
              <li>Complying with legal obligations.</li>
            </ul>
            <p>
              The categories of personal data we collect are described in the &apos;Information We Collect&apos; section below. You have the right to access, correct, erase, and port your personal data; to withdraw consent; to nominate another individual to exercise your rights; and to raise grievances as described in this policy. To exercise any of these rights, please contact our Grievance Officer whose details are provided at the end of this policy.
            </p>
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-sm">
              <strong>Age Gate:</strong> GOQii is accessible to users aged 13 and above. Users under 18 (or under 13 in the USA) are subject to additional protections and parental consent requirements described in the Children&apos;s and Minor Users Data section.
            </div>
          </section>

          {/* 3. Information We Collect */}
          <section
            id="information-we-collect"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Information We Collect
              </h2>
            </div>
            <p>
              We collect Personal Data from you when you voluntarily provide such information, such as when you register for access to GOQii Services, use the GOQii Tracker, post information or comments, respond to surveys, or allow us to access your location information. The kinds of Personal Data we collect include: <strong>full name, email address, account credentials (hashed password), gender, profile picture, contact details, address, date of birth, height, weight, diet and digestive information, fitness and exercise details, medical history and conditions, and medication details</strong>.
            </p>
            <p>
              By voluntarily providing us with Personal Data, you are consenting to our use of it in accordance with this Privacy Policy. If you provide Personal Data to us, you acknowledge and agree that such Personal Data may be transferred from your current location to the offices and servers of GOQii and the authorised third parties referred to herein, located worldwide, subject to the safeguards described in the &apos;International Transfer&apos; section.
            </p>
          </section>

          {/* 4. Lawful Basis for Processing */}
          <section
            id="lawful-basis"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Lawful Basis for Processing
              </h2>
            </div>
            <p>We process your personal data on the following bases:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-sm mb-1">1. Consent</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  For health data, sensitive personal data, and optional features such as AI skin analysis, location tracking, Apple HealthKit / Google Fit integration, and data sharing with insurance or wellness partners. For users under 18, consent must be provided by a parent or guardian.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-sm mb-1">2. Contractual Necessity</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  For account registration, service delivery, and personalized coaching.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-sm mb-1">3. Legitimate Interests</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  For fraud prevention, service security, and aggregate platform analytics.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-sm mb-1">4. Legal Obligation</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  For compliance with applicable law, regulatory reporting, and statutory guidelines.
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 pt-1">
              For health and sensitive personal data (fitness metrics, medical history, biometric data, HealthKit data, Health Connect data), we rely exclusively on your explicit consent.
            </p>
          </section>

          {/* 5. Location Information & 6. Your Choices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section
              id="location-information"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f05a28]" />
                <span>Location Information</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our Service collects and uses your precise location data (via the GPS on your mobile device or your GOQii Band). This data is strictly collected to enable core app functionality, such as tracking your outdoor activities, calculating distance, and providing localized health insights. We use this location information in conjunction with your Personal Data to provide these services.
              </p>
            </section>

            <section
              id="your-choices"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Your Choices</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You can use the Platform without providing any Personal Data. If you choose not to provide any Personal Data, you may not be able to use certain GOQii Services.
              </p>
            </section>
          </div>

          {/* 7. Apple Health (HealthKit) and Google Fit / Google Health Connect Data */}
          <section
            id="healthkit-healthconnect"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Apple Health (HealthKit) and Google Fit / Google Health Connect Data
              </h2>
            </div>
            <p>
              GOQii integrates with Apple Health (HealthKit) on iOS and Google Fit / Google Health Connect on Android. If you choose to connect these platforms, the following applies:
            </p>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Data types accessed</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                With your permission, GOQii may read and/or write the following health data types from Apple Health or Google Health Connect:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800 pl-4 list-disc">
                <li>Steps, distance, and active energy burned</li>
                <li>Heart rate, resting heart rate, and heart rate variability</li>
                <li>Sleep analysis and sleep duration</li>
                <li>Body weight, height, and BMI</li>
                <li>Blood glucose and blood pressure (where entered by user)</li>
                <li>Workout and activity sessions</li>
              </ul>
              <p className="text-xs text-slate-500 pt-1">
                We request only the minimum data types necessary to provide your coaching and wellness service. You can see the exact permissions requested at the time of connection.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-base">How we use this data</h3>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>To provide personalised health coaching, activity tracking, and wellness insights within the Services.</li>
                <li>To correlate wearable data with your coaching goals.</li>
                <li>To display your health trends and progress within the GOQii app.</li>
                <li>For users under 18, health platform integrations require explicit parental or guardian consent in addition to the user&apos;s own consent, and data is used solely for service delivery — never for any commercial purpose.</li>
              </ul>
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200/70 text-red-900 text-xs sm:text-sm font-semibold">
                We do NOT use Apple HealthKit data or Google Health Connect data for advertising purposes. We do NOT sell this data to third parties. We do NOT share this data with third parties for advertising or marketing purposes.
              </div>
            </div>

            {/* Apple Specific */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">
                Apple HealthKit — specific restrictions (required by Apple App Store §5.1.3)
              </h3>
              <ul className="list-disc pl-6 text-xs sm:text-sm text-slate-700 space-y-1">
                <li>Data read from Apple HealthKit will not be used for advertising, sold to data brokers, or shared with third parties for any advertising or marketing purpose.</li>
                <li>HealthKit data will not be used for any purpose not described in this Privacy Policy.</li>
                <li>HealthKit data will only be shared with third parties when necessary to provide or improve health or fitness features, with your explicit consent, or as required by law.</li>
                <li>GOQii complies with all Apple HealthKit developer guidelines and the Apple Developer Program License Agreement.</li>
              </ul>
            </div>

            {/* Google Specific */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">
                Google Health Connect — specific disclosures (required by Google Health Connect Permission Policy)
              </h3>
              <ul className="list-disc pl-6 text-xs sm:text-sm text-slate-700 space-y-1">
                <li>GOQii&apos;s use of Google Health Connect data is limited to providing and improving the health and fitness features within the Services.</li>
                <li>Health Connect data is not used for advertising, profiling, or any purpose unrelated to health and fitness services.</li>
                <li>
                  GOQii complies with the Google Health Connect Permission Policy (
                  <a
                    href="https://developer.android.com/health-and-fitness/guides/health-connect/develop/permissions-and-data-types"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f05a28] underline font-medium"
                  >
                    Google Health Connect Documentation
                  </a>
                  ).
                </li>
              </ul>
            </div>

            {/* How to connect / disconnect */}
            <div className="p-5 rounded-2xl bg-slate-100/70 border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">How to connect or disconnect</h3>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-1 font-mono">
                <li>&bull; Apple Health: iPhone Settings &gt; Health &gt; Data Access &amp; Devices &gt; GOQii</li>
                <li>&bull; Google Fit / Health Connect: Android Settings &gt; Health Connect &gt; App permissions &gt; GOQii</li>
                <li>&bull; GOQii App: Settings &gt; Privacy &gt; Connected Platforms &gt; Disconnect</li>
              </ul>
              <p className="text-xs text-slate-600 pt-1">
                Disconnecting a health platform stops future data sync. Data already imported will be retained for 3 months after disconnection and then deleted, unless you request earlier deletion via the data erasure process described in &apos;Your Data Principal Rights&apos;.
              </p>
            </div>
          </section>

          {/* 8. Non-Identifiable Data (Cookies) */}
          <section
            id="cookies"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Non-Identifiable Data (Cookies)
              </h2>
            </div>
            <p>
              When you interact with GOQii through the Platform, we receive and store certain non-identifiable information using technologies such as cookies, web beacons, and device identifiers. We use cookies and similar technologies as follows:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Strictly necessary cookies</h3>
                <p className="text-xs text-slate-600">Required for the Platform to function. Cannot be disabled.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Analytics cookies</h3>
                <p className="text-xs text-slate-600">Help us understand how users interact with our Platform (e.g., pages visited, session duration). Optional.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Preference cookies</h3>
                <p className="text-xs text-slate-600">Remember your settings and preferences. Optional.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Marketing cookies</h3>
                <p className="text-xs text-slate-600">Deliver relevant content. We do not use marketing cookies to target you with health-related advertisements without your explicit consent.</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              You may manage your cookie preferences at any time via the cookie settings link in the footer of our website or under Settings &gt; Privacy in the GOQii app. We endeavour to honour Do Not Track (DNT) browser signals for optional tracking technologies.
            </p>
          </section>

          {/* 9. Data Retention and Deletion (Table) */}
          <section
            id="data-retention"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Data Retention and Deletion
              </h2>
            </div>
            <p>
              GOQii retains your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. The following retention periods apply:
            </p>

            {/* Responsive Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100/90 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4">Data Type</th>
                    <th className="py-3.5 px-4">Retention Period</th>
                    <th className="py-3.5 px-4">Rationale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-normal">
                  {RETENTION_DATA.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                      <td className="py-3 px-4 font-semibold text-slate-900">{row.type}</td>
                      <td className="py-3 px-4 text-[#f05a28] font-medium">{row.period}</td>
                      <td className="py-3 px-4 text-slate-600">{row.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              After the applicable retention period, data is securely deleted using <strong>NIST 800-88</strong> compliant methods. You may request early deletion of your data as described in the &apos;Your Data Principal Rights&apos; section below.
            </p>
          </section>

          {/* 10. Use of TrueDepth API for AI Skin Analysis */}
          <section
            id="truedepth-api"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Use of TrueDepth API for AI Skin Analysis
              </h2>
            </div>
            <p>
              Our Skin Wellness Assessment (Skinalyze) feature uses your device&apos;s TrueDepth camera API. We handle this data with the following principles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">On-Device Processing</span>
                <p className="text-xs sm:text-sm text-slate-600">All TrueDepth camera data is processed in real time on your device only. Raw TrueDepth scan data is NEVER transmitted to or stored on GOQii&apos;s servers.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">AI Analysis Results</span>
                <p className="text-xs sm:text-sm text-slate-600">AI-generated skin analysis results (e.g., numeric scores, identified conditions) are NOT stored by default.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">User-Saved Results</span>
                <p className="text-xs sm:text-sm text-slate-600">If you explicitly choose to save your results by tapping &apos;Save Results&apos;, only the analysis output (not the underlying facial scan) is stored securely in your profile. Saved results are retained for 6 months or until you delete them, whichever is earlier. Delete via Settings &gt; Health Data &gt; Skin Analysis.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block">No Advertising Use</span>
                <p className="text-xs sm:text-sm text-slate-600">TrueDepth data is never used for facial recognition, user identification, advertising, or marketing.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block">No Third-Party Sharing</span>
                <p className="text-xs sm:text-sm text-slate-600">TrueDepth data is never shared with any third parties, even in anonymised or aggregated form.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 block">No Model Training</span>
                <p className="text-xs sm:text-sm text-slate-600">TrueDepth data is never used to train AI models or for analytics beyond real-time on-device analysis.</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              GOQii complies with all Apple TrueDepth API privacy requirements.
            </p>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold">
              The AI skin analysis (Skinalyze) feature using the TrueDepth camera is available only to users aged 18 and above. This feature is automatically disabled for accounts where the registered age is under 18.
            </div>
          </section>

          {/* 11. Our Use of Your Personal Data and Other Information */}
          <section
            id="use-of-data"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Our Use of Your Personal Data and Other Information
              </h2>
            </div>
            <p>
              GOQii uses the Personal Data you provide in a manner consistent with this Privacy Policy. If you provide Personal Data for a certain reason, we may use the Personal Data in connection with the reason for which it was provided. GOQii and its Related Companies may use your Personal Data to help us improve the content and functionality of the Platform, better understand our users, and improve GOQii Services.
            </p>
            <p>
              Email communications we send you will contain instructions permitting you to opt out of receiving future communications. SMS/IVR communications can be opted out by writing to{' '}
              <a href="mailto:support@goqii.com" className="text-[#f05a28] underline font-semibold">
                support@goqii.com
              </a>
              .
            </p>
            <p>
              GOQii limits the collection, use, and disclosure of health information and Protected Health Information (PHI) to the minimum necessary to accomplish the intended purpose of each specific use or disclosure. We do not use your health data for targeted advertising without your explicit, separate consent.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Additional restrictions for users under 18:</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                GOQii does not use the personal data or health data of users under 18 for:
              </p>
              <ul className="list-disc pl-6 text-xs sm:text-sm text-slate-700 space-y-1">
                <li>targeted or behavioural advertising;</li>
                <li>sale or sharing with data brokers or advertising networks;</li>
                <li>profiling for commercial purposes;</li>
                <li>any purpose beyond direct delivery of coaching and wellness services.</li>
              </ul>
              <p className="text-xs text-slate-600 pt-1">
                HealthKit and Health Connect data of users under 18 is never shared with third parties without explicit parental/guardian consent.
              </p>
            </div>
          </section>

          {/* 12. Our Disclosure of Your Personal Data and Other Information */}
          <section
            id="disclosure"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f05a28] border border-orange-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Our Disclosure of Your Personal Data and Other Information
              </h2>
            </div>
            <p>
              GOQii is not in the business of selling your information. There are, however, certain circumstances in which we may share your Personal Data with certain third parties:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Business Transfers</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganisation, dissolution or similar event, Personal Data may be part of the transferred assets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Related Companies</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  We may share your Personal Data with our Related Companies for purposes consistent with this Privacy Policy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Data Processors and Sub-processors</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  We share your Personal Data with the following categories of third-party service providers who process data on our behalf under written Data Processing Agreements:
                </p>
                <ul className="list-disc pl-6 text-xs sm:text-sm text-slate-700 space-y-1">
                  <li><strong>Cloud infrastructure:</strong> Amazon Web Services (AWS) — hosting and storage under a HIPAA Business Associate Addendum.</li>
                  <li><strong>Health platform integrations:</strong> Apple (HealthKit) and Google (Health Connect) — subject to platform-specific restrictions described above.</li>
                  <li><strong>Diagnostics and health partners:</strong> e.g. Thyrocare Technologies Ltd., Max Hospitals — only with your prior explicit consent.</li>
                  <li><strong>Insurance partners:</strong> Only when you have specifically authorised this before purchasing a product.</li>
                  <li><strong>Analytics and product improvement:</strong> Using aggregated or pseudonymised data only.</li>
                  <li><strong>Customer support tools.</strong></li>
                </ul>
                <p className="text-xs text-slate-500 pt-1">
                  All processors are contractually required to protect your data, process it only on our instructions, and comply with applicable data protection laws including the DPDP Act 2023. We will notify you of material changes to our processor list.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm">Legal Requirements</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  GOQii may disclose your Personal Data if required to do so by law or in the good faith belief that such action is necessary to:
                </p>
                <ul className="list-disc pl-6 text-xs sm:text-sm text-slate-700 space-y-1">
                  <li>comply with a legal obligation,</li>
                  <li>protect and defend the rights or property of GOQii,</li>
                  <li>act in urgent circumstances to protect personal safety,</li>
                  <li>protect against legal liability.</li>
                </ul>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              We do not share the personal data of users under 18 with insurance partners, analytics companies, or wellness partners for commercial purposes without fresh, explicit parental/guardian consent for each specific third party.
            </p>
          </section>

          {/* 13. Children's Data & 14. Parental and Guardian Rights */}
          <section
            id="childrens-data"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 border border-pink-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Children&apos;s Data
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">India DPDP Sec. 9</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Users 13–17 need verifiable parental consent, no tracking or profiling;</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">USA COPPA</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Under-13 not permitted, 5-day deletion response SLA;</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">EU GDPR Art. 8</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Country-specific age gates (13–16);</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Universal Under-18 Safeguards</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Universal under-18 protections for all users regardless of location (no ads, no profiling, no commercial sharing, data minimisation, TrueDepth/Skinalyze disabled for under-18).</p>
              </div>
            </div>

            {/* Parental Rights */}
            <div id="parental-rights" className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200/80 space-y-2.5">
              <h3 className="text-base font-bold text-orange-950">Parental and Guardian Rights</h3>
              <p className="text-xs sm:text-sm text-slate-700">
                &apos;Parental and Guardian Rights&apos; listing: review data, request correction/deletion, withdraw consent (including health platform integrations), object to commercial use, request portable copy. Response SLA: <strong>15 days</strong> (faster than standard 30 days).
              </p>
              <p className="text-xs sm:text-sm text-slate-700">
                Contact: <a href="mailto:privacy@goqii.com" className="text-[#f05a28] font-bold underline">privacy@goqii.com</a> with subject &apos;Minor Account Request&apos;.
              </p>
            </div>
          </section>

          {/* 15. Exclusions */}
          <section
            id="exclusions"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3"
          >
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Exclusions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              This Privacy Policy does not apply to any Personal Data collected by GOQii other than Personal Data collected through the Services. General product feedback, feature suggestions, and non-personal unsolicited information you share with GOQii may be used by GOQii without obligation of confidentiality or compensation. However, any personal data, health data, or sensitive personal data you include in such communications remains subject to this Privacy Policy and applicable data protection law, and will not be treated as freely usable non-confidential information.
            </p>
          </section>

          {/* 16. Links To Other Web Sites & 17. Social Media */}
          <div id="links-and-social" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Links To Other Web Sites
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This Privacy Policy applies only to the Platform and to the services provided. Our Platform may contain links to other web sites not operated or controlled by GOQii (Third Party Sites). The policies and procedures we describe here do not apply to those Third Party Sites. We suggest contacting those sites directly for information on their privacy policies.
              </p>
            </section>

            <section className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Social Media
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                GOQii may allow you to access certain Social Media Services (such as Facebook and Twitter) through the Platform. When you add Social Media Service accounts to GOQii Services or log in using your Social Media Services account, we will collect relevant information necessary to enable the Platform to access that Social Media Service. The manner in which Social Media Services use, store and disclose your information is governed by the policies of those Social Media Services.
              </p>
            </section>
          </div>

          {/* 18. Advertising */}
          <section
            id="advertising"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3"
          >
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Advertising
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              GOQii may display third-party advertisements on the Platform and via the Services. GOQii will not share your health data, medical history, biometric data, HealthKit data, Health Connect data, or sensitive personal data with advertisers for targeting purposes. Any interest-based advertising using your non-sensitive activity data will be disclosed in this Privacy Policy and subject to your consent preferences manageable via Settings &gt; Privacy &gt; Advertising.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 font-semibold">
              For users under 18: no advertising of any kind — interest-based or contextual — will be served. Accounts identified as belonging to users under 18 have all advertising disabled by default and this cannot be changed.
            </div>
          </section>

          {/* 19. Security & Data Breach Notification */}
          <section
            id="security-breach"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.002A11.959 11.959 0 0112 2.714z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Security &amp; Data Breach Notification
              </h2>
            </div>
            <p>
              GOQii takes reasonable steps to protect the Personal Data provided via the Platform and the Services from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. We have adopted reasonable security practices and procedures as further described in our information security policy. While we implement robust security measures, no system is completely immune to security incidents. In the event of a personal data breach affecting your rights and freedoms, we will notify you and, where required, relevant regulatory authorities in accordance with applicable law. Our liability for data breaches resulting from our failure to maintain reasonable security measures will not be excluded or limited to the extent prohibited by applicable law.
            </p>

            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-2">
              <h3 className="font-bold text-rose-950 text-sm">Data Breach Notification SLAs</h3>
              <ul className="list-disc pl-6 text-xs sm:text-sm text-rose-900 space-y-1">
                <li><strong>User notification:</strong> within 72 hours;</li>
                <li><strong>DPBI notification:</strong> under DPDP Sec. 17;</li>
                <li><strong>CERT-In notification:</strong> within 6 hours per CERT-In Directions 2022;</li>
                <li><strong>HHS notification:</strong> for HIPAA breaches.</li>
              </ul>
              <p className="text-xs text-rose-950 pt-1 font-semibold">
                Contact: <a href="mailto:security@goqii.com" className="underline">security@goqii.com</a>
              </p>
            </div>
          </section>

          {/* 20. Your Data Principal Rights */}
          <section
            id="data-principal-rights"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f05a28] border border-orange-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Your Data Principal Rights
              </h2>
            </div>
            <p>
              Under applicable data protection laws including the DPDP Act 2023 and GDPR, you have the following rights:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Right to Access</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Request a copy of the personal data we hold about you. We will respond within 30 days.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Right to Correction</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Request correction of inaccurate or incomplete personal data within 30 days.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Right to Erasure</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Request deletion of your personal data. Where processing is based on consent, we will delete within 30 days of consent withdrawal, subject to legal retention obligations.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Right to Withdraw Consent</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Withdraw consent for any processing based on consent at any time, including HealthKit and Health Connect data access. Withdrawal does not affect lawfulness of prior processing.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Right to Data Portability</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Request your personal data in a machine-readable format (JSON or CSV) within 30 days. Use Settings &gt; Privacy &gt; Download My Data.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Right to Grievance Redressal</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">If dissatisfied, you may raise a grievance with our Grievance Officer and escalate to the Data Protection Board of India.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 sm:col-span-2">
                <h3 className="font-bold text-slate-900 text-sm">Right to Nominate (DPDP Sec. 13)</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">You may nominate another individual to exercise your data rights in the event of your death or incapacity. Submit nominee details to grievance@goqii.com.</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              To exercise any right, contact us via in-app <strong>Settings &gt; Privacy</strong>, or email{' '}
              <a href="mailto:privacy@goqii.com" className="text-[#f05a28] font-bold underline">
                privacy@goqii.com
              </a>
              . We will respond within 30 days. If we deny a request, we will provide written reasons and inform you of your right to escalate to the Data Protection Board of India.
            </p>
          </section>

          {/* 21. International Transfer & 22. Other Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section
              id="international-transfer"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                International Transfer
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your personal data may be transferred to and processed in the following countries: India (GOQii Technologies Pvt. Ltd. headquarters) and the United States (Amazon Web Services infrastructure, GOQii Inc.). For transfers of personal data outside India, we rely on the following safeguards:
              </p>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-1">
                <li>Standard Contractual Clauses (SCCs) for GDPR-covered transfers;</li>
                <li>The AWS Business Associate Addendum and Data Processing Addendum for health data;</li>
                <li>Contractual protections consistent with DPDP Act 2023 requirements.</li>
              </ul>
              <p className="text-xs text-slate-500 pt-1">
                We do not transfer your personal data to countries restricted by the Government of India under the DPDP Act. By using our Services, you consent to these transfers under the safeguards described above.
              </p>
            </section>

            <section
              id="other-terms"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Other Terms and Conditions &amp; Policy Changes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your access to and use of this Platform is subject to the Terms of Service at{' '}
                <a href="https://goqii.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#f05a28] underline font-semibold">
                  goqii.com/terms
                </a>
                .
              </p>
              <h3 className="text-sm font-bold text-slate-900 pt-2">Changes to GOQii&apos;s Privacy Policy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                GOQii reserves the right to update or modify this Privacy Policy at any time. For material changes, we will notify you via email or in-app notification at least 30 days before the changes take effect. Your continued use of the Platform after that notice period constitutes acceptance of the revised Privacy Policy. The current version number and last updated date are stated at the top of this policy.
              </p>
            </section>
          </div>

          {/* 23. HIPAA Notice of Privacy Practices */}
          <section
            id="hipaa-notice"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                HIPAA Notice of Privacy Practices
              </h2>
            </div>
            <p>
              If you are a user in the United States and your health information constitutes Protected Health Information (PHI) under HIPAA, you have additional rights including: the right to request restrictions on uses and disclosures of your PHI; request confidential communications; receive an accounting of disclosures of your PHI; and file a complaint with the U.S. Department of Health and Human Services (HHS). A full HIPAA Notice of Privacy Practices is available by contacting{' '}
              <a href="mailto:privacy@goqii.com" className="text-[#f05a28] underline font-semibold">
                privacy@goqii.com
              </a>{' '}
              or by writing to our Grievance Officer at the address provided below.
            </p>
          </section>

          {/* 24. Grievance Officer */}
          <section
            id="grievance-officer"
            className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white border border-white/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Grievance Officer
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              In accordance with the Information Technology Act, 2000, the IT (Intermediary Guidelines) Rules, 2011, and the Digital Personal Data Protection Act, 2023, GOQii has designated a Grievance Officer for data privacy matters:
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-3">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Name</span>
                <span className="text-base font-bold text-white">Pravin Shelki</span>
                <span className="text-xs text-slate-400 ml-2">(or such other person as may be designated by GOQii from time to time)</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Designation</span>
                <span className="text-sm font-semibold text-slate-200">Data Protection Officer &amp; Privacy Officer</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Organisation</span>
                <span className="text-sm font-semibold text-slate-200">GOQii Technologies Private Limited</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Address</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  101, Satyam Towers, Sanghavi Corporate Park,<br />
                  Off BKSD Marg, Deonar, Govandi East,<br />
                  Mumbai 400 088, Maharashtra, India
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Email:</span>
                  <a href="mailto:grievance@goqii.com" className="text-[#f05a28] font-bold hover:underline text-xs sm:text-sm">
                    grievance@goqii.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Phone:</span>
                  <a href="tel:+918419940404" className="text-slate-200 hover:text-white font-semibold text-xs sm:text-sm">
                    +91 84199 40404
                  </a>
                  <span className="text-[11px] text-slate-400">(Mon–Sat 10 AM–7 PM)</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              You may also raise concerns via the in-app Help &amp; Support section. We will acknowledge your grievance within <strong>48 hours</strong> and endeavour to resolve it within <strong>30 days</strong>. If unresolved to your satisfaction, you may escalate to the Data Protection Board of India or seek other remedies under applicable law.
            </p>
          </section>

          {/* 25. Contacting Us */}
          <section
            id="contacting-us"
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f05a28] border border-orange-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Contacting Us
              </h2>
            </div>
            <p>
              Please feel free to contact us if you have any questions about GOQii&apos;s Privacy Policy or our information practices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">General privacy queries</span>
                  <span className="text-sm font-semibold text-slate-800">For privacy questions and data requests</span>
                </div>
                <a href="mailto:privacy@goqii.com" className="mt-3 text-xs sm:text-sm font-bold text-[#f05a28] hover:underline">
                  privacy@goqii.com &rarr;
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Data Protection Officer (GDPR)</span>
                  <span className="text-sm font-semibold text-slate-800">For EU/UK GDPR-specific inquiries</span>
                </div>
                <a href="mailto:dpo@goqii.com" className="mt-3 text-xs sm:text-sm font-bold text-[#f05a28] hover:underline">
                  dpo@goqii.com &rarr;
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Grievance (DPDP / IT Rules)</span>
                  <span className="text-sm font-semibold text-slate-800">Formal complaints &amp; statutory grievances</span>
                </div>
                <a href="mailto:grievance@goqii.com" className="mt-3 text-xs sm:text-sm font-bold text-[#f05a28] hover:underline">
                  grievance@goqii.com &rarr;
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Security Incidents</span>
                  <span className="text-sm font-semibold text-slate-800">Report vulnerabilities &amp; potential breaches</span>
                </div>
                <a href="mailto:security@goqii.com" className="mt-3 text-xs sm:text-sm font-bold text-[#f05a28] hover:underline">
                  security@goqii.com &rarr;
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 font-mono">
              In-app: Settings &gt; Privacy &gt; Contact Us
            </div>
          </section>
        </div>

        {/* ── Return Button at bottom ── */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 hover:text-[#f05a28] hover:border-[#f05a28] text-xs font-bold rounded-full transition-all cursor-pointer shadow-xs"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <span>Return to GOQii Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}
