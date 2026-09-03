import React, { useState } from 'react';

interface ContactUsPageProps {
  onBack: () => void;
}

const OFFICES = [
  {
    id: 'us-hq',
    title: 'Headquarters',
    company: 'GOQii',
    addressLines: ['120, Wood Avenue South, Suite 300', 'Iselin, NJ 08830.'],
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    alt: 'Golden Gate Bridge - GOQii US Headquarters',
    tag: 'Global HQ',
  },
  {
    id: 'uk-office',
    title: 'UK Office',
    company: 'GOQii UK Limited',
    addressLines: ['29 West Way, Hove, England, BN3 8LS.'],
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    alt: 'Tower Bridge London - GOQii UK Office',
    tag: 'Europe & UK',
  },
  {
    id: 'india-office',
    title: 'India Office',
    company: 'GOQii Technologies Pvt. Ltd.',
    addressLines: ['101 Satyam Tower Govandi East', 'Mumbai 400088 India.'],
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    alt: 'Gateway of India Mumbai - GOQii India Office',
    tag: 'R&D & Asia Operations',
  },
];

const INQUIRY_TOPICS = [
  'General Inquiry',
  'Enterprise Wellness & Corporate Programs',
  'Personal Coaching & Preventive Health',
  'Healthcare & Insurance Partnerships',
  'Product, Device & App Support',
  'Press & Media',
];

export default function ContactUsPage({ onBack }: ContactUsPageProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [topic, setTopic] = useState(INQUIRY_TOPICS[0]);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setOrganization('');
    setTopic(INQUIRY_TOPICS[0]);
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <div
      className="w-full bg-[#f8fafc] text-slate-900 selection:bg-[#f05a28]/20 min-h-screen pt-4 sm:pt-6"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Sub-header / Breadcrumb Navigation Bar ── */}
      <div className="bg-white border-y border-slate-100/90 shadow-2xs mb-8 sm:mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
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
              Global Support &amp; Locations
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Title Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#f05a28] text-[11px] font-bold tracking-widest uppercase mb-3">
            <svg
              className="w-3.5 h-3.5 text-[#f05a28]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            CONTACT US
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Connect with our global offices or reach out to our dedicated healthcare and partnership specialists.
          </p>
        </div>

        {/* ── 3 Office Cards Grid (matching attached image) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {OFFICES.map((office) => (
            <div
              key={office.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-5 bg-slate-100">
                <img
                  src={office.image}
                  alt={office.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {office.tag}
                </span>
              </div>

              {/* Office Details */}
              <div className="flex-1 flex flex-col">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 tracking-tight">
                  {office.title}
                </h2>
                <p className="text-[15px] sm:text-base font-semibold text-slate-800 mb-2">
                  {office.company}
                </p>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-0.5">
                  {office.addressLines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Contact Form Section ── */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-extrabold text-[#f05a28] tracking-widest uppercase mb-2">
                Online Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Have questions regarding enterprise deployment, coaching programs, or integrations? Fill out the form below and our team will get back to you promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-8 sm:p-10 text-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <span className="font-semibold">{fullName}</span>. We have received your inquiry and will reach out to <span className="font-semibold">{email}</span> within 24 business hours.
                </p>
                <button
                  onClick={handleResetForm}
                  className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium flex items-center gap-2.5">
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                      Full Name <span className="text-[#f05a28]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f05a28]/30 focus:border-[#f05a28] transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                      Work / Personal Email <span className="text-[#f05a28]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f05a28]/30 focus:border-[#f05a28] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                      Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f05a28]/30 focus:border-[#f05a28] transition-all"
                    />
                  </div>

                  {/* Organization / Company */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                      Organization / Company <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Acme Health Corp"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f05a28]/30 focus:border-[#f05a28] transition-all"
                    />
                  </div>
                </div>

                {/* Topic / Inquiry Type */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f05a28]/30 focus:border-[#f05a28] transition-all"
                  >
                    {INQUIRY_TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Your Message <span className="text-[#f05a28]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your organization, program requirements, or questions..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f05a28]/30 focus:border-[#f05a28] transition-all resize-y"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-[#f05a28] focus:ring-[#f05a28] mt-0.5"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                    I agree that GOQii may store and process my information in accordance with the Privacy Policy to respond to my request.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#f05a28] hover:bg-[#d94e1f] text-white text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Additional Help & Support Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Customer &amp; App Support</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              Need assistance with your GOQii device, app tracking, or coach sessions?
            </p>
            <a
              href="mailto:support@goqii.com"
              className="text-xs font-semibold text-[#f05a28] hover:underline inline-flex items-center gap-1"
            >
              support@goqii.com &rarr;
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Corporate &amp; Enterprise</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              Custom workforce wellness, insurance risk stratification, and group plans.
            </p>
            <a
              href="mailto:enterprise@goqii.com"
              className="text-xs font-semibold text-[#f05a28] hover:underline inline-flex items-center gap-1"
            >
              enterprise@goqii.com &rarr;
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Press &amp; Media</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              For interviews, research publications, and press inquiries.
            </p>
            <a
              href="mailto:pr@goqii.com"
              className="text-xs font-semibold text-[#f05a28] hover:underline inline-flex items-center gap-1"
            >
              pr@goqii.com &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
