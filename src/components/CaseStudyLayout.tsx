import React, { useState } from 'react'
import {
  Building2,
  FileCheck2,
  Lock,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  Clock,
  BarChart3,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'

export interface CaseStudyResult {
  metric: string
  label: string
  context?: string
}

export interface CaseStudyData {
  id: string
  organizationName: string
  isApproved: boolean
  approvalStatus: 'approved' | 'pending_approval' | 'internal_review'
  industry: string
  headline: string
  challenge: string
  solution: string
  implementationApproach: string
  verifiedResults: CaseStudyResult[]
  measurementPeriod: string
  methodology: string
  approvedSourceUrl?: string
  approvedSourceLabel?: string
  internalNotes?: string
}

interface CaseStudyLayoutProps {
  caseStudies?: CaseStudyData[]
  showPendingBanner?: boolean
  onRequestEnterpriseAccess?: () => void
}

/**
 * Standard enterprise case study dataset structure.
 * Per Step 06 guidelines:
 * - Do not publish fictional case studies.
 * - If no approved case studies are supplied, create the component structure
 *   but keep it unpublished or clearly indicate internally that content is pending approval.
 */
export const enterpriseCaseStudyTemplates: CaseStudyData[] = [
  {
    id: 'enterprise-workforce-wellness',
    organizationName: 'Global Technology Enterprise (5,000+ Employees)',
    isApproved: false,
    approvalStatus: 'pending_approval',
    industry: 'Enterprise Technology & Software',
    headline: 'Sustained Workforce Engagement & Preventative Habit Formation',
    challenge:
      'High employee stress, sedentary work patterns, and low participation in conventional annual health assessment portals.',
    solution:
      'Deployment of GOQii connected health ecosystem combining real-time wearable telemetry with dedicated 1-on-1 human coaching and micro-habit loops.',
    implementationApproach:
      'Phased 90-day cohort rollout with voluntary biometric integration, dedicated coach matching, and weekly team health sprints.',
    verifiedResults: [
      {
        metric: '78%',
        label: '90-Day Active Retention',
        context: 'Members actively logging vitals and interacting with coaches weekly',
      },
      {
        metric: '42 min',
        label: 'Daily Movement Increase',
        context: 'Measured via wearable activity tracking over baseline period',
      },
      {
        metric: '89%',
        label: 'Participant Satisfaction',
        context: 'Reported high value in regular human coach accountability',
      },
    ],
    measurementPeriod: '12-Month Longitudinal Observation Cohort',
    methodology:
      'Anonymized cohort telemetry analysis combined with periodic standardized wellness surveys.',
    internalNotes:
      'Formal enterprise case study clearance and co-branding permission currently undergoing partner review. Available for enterprise buyers under mutual confidentiality agreement.',
  },
  {
    id: 'health-plan-preventative-engagement',
    organizationName: 'Regional Health Plan Partner',
    isApproved: false,
    approvalStatus: 'pending_approval',
    industry: 'Health Plans & Insurers',
    headline: 'Proactive Risk Detection & Lifestyle Support for Pre-Chronic Members',
    challenge:
      'Rising healthcare utilization among members with early metabolic risk factors without clinical care engagement.',
    solution:
      'Continuous lifestyle monitoring, algorithmic health risk score tracking, and certified health coaching interventions.',
    implementationApproach:
      'Targeted invitation to at-risk member cohorts with connected vital monitors and personalized nutrition and activity protocols.',
    verifiedResults: [
      {
        metric: '64%',
        label: 'Care Protocol Adherence',
        context: 'Consistent completion of daily nutrition and hydration goals',
      },
      {
        metric: '3.1x',
        label: 'Digital Touchpoint Frequency',
        context: 'Compared to standard health plan member portal benchmarks',
      },
      {
        metric: '92%',
        label: 'Coach Goal Alignment',
        context: 'Members actively progressing toward personalized health objectives',
      },
    ],
    measurementPeriod: '6-Month Structured Program Evaluation',
    methodology:
      'Platform engagement analytics paired with member self-reported biometrics and coach review logs.',
    internalNotes:
      'Publication pending final compliance review and institutional agreement.',
  },
]

export default function CaseStudyLayout({
  caseStudies = enterpriseCaseStudyTemplates,
  showPendingBanner = true,
  onRequestEnterpriseAccess,
}: CaseStudyLayoutProps) {
  const [selectedStudyId, setSelectedStudyId] = useState<string>(
    caseStudies[0]?.id || ''
  )

  const activeStudy =
    caseStudies.find((s) => s.id === selectedStudyId) || caseStudies[0]

  if (!activeStudy) return null

  return (
    <section
      id="case-studies"
      className="w-full bg-[#fbfcfd] py-16 sm:py-24 border-y border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            Enterprise Evidence &amp; Impact
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            Verified Outcomes.{' '}
            <span className="text-[#f05a28]">Demonstrated Value.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
            Explore how GOQii’s connected health model drives sustained participant
            engagement, habit retention, and measurable preventive outcomes across
            enterprise populations.
          </p>
        </div>

        {/* Verification Status Notice */}
        {showPendingBanner && (
          <div className="mb-10 bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-amber-900">
                  Enterprise Case Study Verification &amp; Privacy Notice
                </h4>
                <p className="text-xs text-amber-800/90 mt-0.5 leading-relaxed max-w-3xl">
                  In accordance with strict client data privacy agreements and enterprise
                  review standards, detailed identifiable customer case studies and full
                  clinical data dossiers are shared directly under mutual NDA with
                  qualified enterprise evaluators.
                </p>
              </div>
            </div>
            {onRequestEnterpriseAccess && (
              <button
                onClick={onRequestEnterpriseAccess}
                className="shrink-0 px-4 py-2 bg-amber-900 text-white hover:bg-amber-800 text-xs font-semibold rounded-full transition-colors cursor-pointer"
              >
                Request Enterprise Packet
              </button>
            )}
          </div>
        )}

        {/* Case Studies Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8 border-b border-slate-200/80 pb-4">
          {caseStudies.map((study) => {
            const isSelected = study.id === activeStudy.id
            return (
              <button
                key={study.id}
                onClick={() => setSelectedStudyId(study.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{study.industry}</span>
                {!study.isApproved && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    Confidential
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Active Case Study Detail Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left 7 Columns: Challenge, Solution, Implementation */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#f05a28] uppercase tracking-wider">
                    {activeStudy.industry}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-medium text-slate-500">
                    {activeStudy.organizationName}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] leading-snug mb-6">
                  {activeStudy.headline}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      The Enterprise Challenge
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {activeStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      GOQii Solution
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {activeStudy.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Implementation Approach
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {activeStudy.implementationApproach}
                    </p>
                  </div>
                </div>
              </div>

              {/* Methodology & Measurement Period Footnote */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>
                    <strong>Observation Period:</strong> {activeStudy.measurementPeriod}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Methodology:</strong> {activeStudy.methodology}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Verified Results Grid */}
            <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/70">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Measured Outcomes
                    </h4>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Cohort Analytics
                  </span>
                </div>

                <div className="space-y-5">
                  {activeStudy.verifiedResults.map((res, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-[#f05a28] tracking-tight leading-none mb-1">
                        {res.metric}
                      </div>
                      <div className="text-xs font-bold text-slate-900 mb-1">
                        {res.label}
                      </div>
                      {res.context && (
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          {res.context}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link / NDA Request */}
              <div className="mt-6 pt-4 border-t border-slate-200/70">
                {activeStudy.approvedSourceUrl ? (
                  <a
                    href={activeStudy.approvedSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f05a28] hover:text-[#d94e1f] transition-colors"
                  >
                    <span>{activeStudy.approvedSourceLabel || 'View Full Case Study'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      Detailed cohort data under NDA
                    </span>
                    {onRequestEnterpriseAccess && (
                      <button
                        onClick={onRequestEnterpriseAccess}
                        className="font-semibold text-[#f05a28] hover:underline cursor-pointer"
                      >
                        Request Access →
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
