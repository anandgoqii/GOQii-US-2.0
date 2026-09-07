import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  X,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  Compass,
  Smartphone,
  Watch,
  Users,
  HeartPulse,
  Award,
  ShoppingBag,
  UserCheck,
  ShieldCheck,
  HelpCircle,
  Check,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Phone,
  Mail,
  ExternalLink,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import {
  FAQ_ARTICLES,
  FAQ_CATEGORIES,
  POPULAR_SEARCHES,
  POPULAR_ARTICLE_IDS,
  FaqArticle,
  FaqCategory,
} from '../data/faqData';

interface FaqPageProps {
  onBack: () => void;
  onNavigateToContact?: () => void;
}

const CATEGORY_ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-[#f05a28]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#3b82f6]" />,
  Watch: <Watch className="w-5 h-5 text-[#2ecc71]" />,
  Users: <Users className="w-5 h-5 text-[#f59e0b]" />,
  HeartPulse: <HeartPulse className="w-5 h-5 text-[#ef4444]" />,
  Award: <Award className="w-5 h-5 text-[#8b5cf6]" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#ec4899]" />,
  UserCheck: <UserCheck className="w-5 h-5 text-[#06b6d4]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#10b981]" />,
};

export default function FaqPage({ onBack, onNavigateToContact }: FaqPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<FaqArticle | null>(null);
  const [expandedAccordionId, setExpandedAccordionId] = useState<string | null>(POPULAR_ARTICLE_IDS[0]);
  const [modalExpandedId, setModalExpandedId] = useState<string | null>(null);
  const [modalSearchTerm, setModalSearchTerm] = useState('');
  const [feedbackState, setFeedbackState] = useState<Record<string, 'yes' | 'no'>>({});

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCategory(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top when opening an article
  useEffect(() => {
    if (selectedArticle) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedArticle]);

  // Handle Feedback
  const handleFeedback = (articleId: string, type: 'yes' | 'no') => {
    setFeedbackState((prev) => ({ ...prev, [articleId]: type }));
  };

  // Filtered articles for global search
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const query = searchTerm.toLowerCase().trim();
    return FAQ_ARTICLES.filter((article) => {
      const matchTitle = article.title.toLowerCase().includes(query);
      const matchSummary = article.summary.toLowerCase().includes(query);
      const matchQueries = article.naturalQueries.some((q) => q.toLowerCase().includes(query));
      const matchCategory = article.category.toLowerCase().includes(query);
      const matchDevice = article.deviceTag?.toLowerCase().includes(query);
      const matchContent = article.content.some((c) => c.toLowerCase().includes(query));
      return matchTitle || matchSummary || matchQueries || matchCategory || matchDevice || matchContent;
    });
  }, [searchTerm]);

  // Filtered articles for category popup modal
  const modalArticles = useMemo(() => {
    if (!selectedCategory) return [];
    let items = FAQ_ARTICLES.filter((a) => a.categoryCode === selectedCategory.code);
    if (modalSearchTerm.trim()) {
      const q = modalSearchTerm.toLowerCase().trim();
      items = items.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.naturalQueries.some((query) => query.toLowerCase().includes(q)) ||
          a.content.some((c) => c.toLowerCase().includes(q))
      );
    }
    return items;
  }, [selectedCategory, modalSearchTerm]);

  // Popular questions articles
  const popularArticles = useMemo(() => {
    return POPULAR_ARTICLE_IDS.map((id) => FAQ_ARTICLES.find((a) => a.id === id)).filter(
      Boolean
    ) as FaqArticle[];
  }, []);

  const openCategoryModal = (cat: FaqCategory) => {
    setSelectedCategory(cat);
    setModalSearchTerm('');
    const firstArticle = FAQ_ARTICLES.find((a) => a.categoryCode === cat.code);
    setModalExpandedId(firstArticle ? firstArticle.id : null);
  };

  const handleContactClick = () => {
    setSelectedCategory(null);
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      const el = document.getElementById('section-final');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className="w-full bg-[#F8FAFB] text-[#0F172A] min-h-screen selection:bg-[#f05a28]/20"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Sub-header / Breadcrumb Bar ── */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-2xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={() => {
              if (selectedArticle) {
                setSelectedArticle(null);
              } else {
                onBack();
              }
            }}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-600 hover:text-[#f05a28] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-slate-500 group-hover:text-[#f05a28]" />
            <span>{selectedArticle ? 'Back to FAQs' : 'Back to Home'}</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span
              onClick={onBack}
              className="hover:text-slate-900 cursor-pointer transition-colors"
            >
              GOQii
            </span>
            <span>/</span>
            <span
              onClick={() => setSelectedArticle(null)}
              className={`cursor-pointer transition-colors ${
                selectedArticle ? 'hover:text-slate-900' : 'text-[#f05a28] font-bold'
              }`}
            >
              Help & FAQs
            </span>
            {selectedArticle && (
              <>
                <span>/</span>
                <span className="text-[#f05a28] font-bold truncate max-w-[160px] sm:max-w-xs">
                  {selectedArticle.category}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT: If article is selected, show Article View; else show full FAQ Dashboard ── */}
      {selectedArticle ? (
        /* ══════════ FULL ARTICLE READING VIEW ══════════ */
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-sm">
            {/* Back button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-[#f05a28] bg-[#f05a28]/10 px-4 py-2 rounded-full hover:bg-[#f05a28] hover:text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Help & FAQs
            </button>

            {/* Category & Device Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#f05a28] bg-[#f05a28]/10 px-3 py-1 rounded-full">
                {selectedArticle.category}
              </span>
              {selectedArticle.deviceTag && (
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                  {selectedArticle.deviceTag}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
              {selectedArticle.title}
            </h1>

            {/* Key Summary Box */}
            <div className="bg-[#F8FAFC] border-l-4 border-[#f05a28] rounded-r-2xl p-5 mb-8 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              <span className="font-bold text-slate-900 block mb-1">Summary:</span>
              {selectedArticle.summary}
            </div>

            {/* Detailed Content */}
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-[15px] border-b border-slate-100 pb-10 mb-8">
              {selectedArticle.content.map((para, idx) => {
                if (para.startsWith('•')) {
                  return (
                    <div key={idx} className="flex items-start gap-3 pl-2 sm:pl-4 py-1">
                      <span className="w-2 h-2 rounded-full bg-[#f05a28] shrink-0 mt-2" />
                      <p className="font-medium text-slate-800">{para.replace(/^•\s*/, '')}</p>
                    </div>
                  );
                }
                if (para.match(/^\d+\./)) {
                  return (
                    <div key={idx} className="bg-slate-50/80 rounded-xl p-4 border border-slate-100/90 pl-4 sm:pl-5">
                      <p className="font-semibold text-slate-900">{para}</p>
                    </div>
                  );
                }
                if (para.endsWith(':')) {
                  return (
                    <h3 key={idx} className="text-base sm:text-lg font-bold text-slate-900 pt-3">
                      {para}
                    </h3>
                  );
                }
                return <p key={idx}>{para}</p>;
              })}
            </div>

            {/* Feedback: Was this article helpful? */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-100 mb-10">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-0.5">
                  Was this article helpful?
                </h4>
                <p className="text-xs text-slate-500">
                  Your feedback helps us continuously improve GOQii support guides.
                </p>
              </div>

              {feedbackState[selectedArticle.id] ? (
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Thank you for your feedback!
                </span>
              ) : (
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => handleFeedback(selectedArticle.id, 'yes')}
                    className="px-4 py-2 rounded-full bg-white hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" /> Yes
                  </button>
                  <button
                    onClick={() => handleFeedback(selectedArticle.id, 'no')}
                    className="px-4 py-2 rounded-full bg-white hover:bg-red-50 hover:text-red-700 hover:border-red-300 border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                  >
                    <ThumbsDown className="w-3.5 h-3.5" /> No
                  </button>
                </div>
              )}
            </div>

            {/* Related Articles */}
            {selectedArticle.relatedIds && selectedArticle.relatedIds.length > 0 && (
              <div className="mb-8">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#f05a28]" />
                  Related Support Articles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedArticle.relatedIds.map((relId) => {
                    const relArticle = FAQ_ARTICLES.find((a) => a.id === relId);
                    if (!relArticle) return null;
                    return (
                      <div
                        key={relArticle.id}
                        onClick={() => setSelectedArticle(relArticle)}
                        className="p-4 rounded-2xl border border-slate-200/90 hover:border-[#f05a28] hover:bg-[#fff9f6] transition-all cursor-pointer group flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#f05a28] bg-[#f05a28]/10 px-2 py-0.5 rounded-full mb-2 inline-block">
                            {relArticle.category}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors line-clamp-2">
                            {relArticle.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                            {relArticle.summary}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-[#f05a28] mt-3 inline-flex items-center gap-1">
                          Read Guide <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Need More Help Footer Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0B132B] to-[#1E293B] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <h4 className="text-base sm:text-lg font-bold mb-1 text-white">
                  Still have questions?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Our customer care and device support specialists are ready to help.
                </p>
              </div>
              <button
                onClick={handleContactClick}
                className="bg-[#f05a28] hover:bg-[#d94e1f] text-white px-6 py-3 rounded-full text-xs font-bold shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                Contact Support Team
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* ══════════ MAIN FAQ DASHBOARD VIEW ══════════ */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* ── 1. Hero Search Section (GOQii 2.0 Navy Gradient) ── */}
          <div className="bg-gradient-to-b from-[#0B132B] via-[#0F172A] to-[#1E293B] text-white rounded-3xl p-8 sm:p-14 lg:p-16 mb-12 shadow-xl relative overflow-hidden text-center">
            {/* Subtle glow accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#f05a28]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#2ecc71]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-3xl relative z-10 mx-auto">
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#f05a28] bg-[#f05a28]/15 px-3.5 py-1.5 rounded-full mb-4 border border-[#f05a28]/20">
                GOQii HELP & FAQS
              </span>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-4 text-white">
                How can we help?
              </h1>

              <p className="text-sm sm:text-base text-slate-300 font-medium mb-8 leading-relaxed max-w-xl mx-auto">
                Find answers about your GOQii account, app, coaching, devices, orders, and more.
                Click any topic card to browse questions and instant solutions.
              </p>

              {/* Real-time Search Input */}
              <div className="relative max-w-2xl mx-auto mb-6">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search GOQii Help (e.g., My watch isn't syncing, Track order, Claim warranty)..."
                  className="w-full bg-white text-slate-900 placeholder-slate-400 pl-12 pr-12 py-4 rounded-2xl text-xs sm:text-sm font-medium shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#f05a28] transition-all"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-4 text-xs font-bold text-slate-400 hover:text-slate-900 cursor-pointer p-0.5"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Popular Search Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300">
                <span className="font-semibold text-slate-400 mr-1">Popular searches:</span>
                {POPULAR_SEARCHES.map((query) => (
                  <button
                    key={query}
                    onClick={() => setSearchTerm(query)}
                    className="bg-white/10 hover:bg-[#f05a28] hover:text-white px-3 py-1 rounded-full font-medium transition-all cursor-pointer text-[11px] backdrop-blur-xs"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── 2. Active Search Results Panel ── */}
          {searchTerm.trim() && (
            <div className="mb-14 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Search Results for &ldquo;{searchTerm}&rdquo;
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Found {searchResults.length} matching support guides
                  </p>
                </div>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-xs font-bold text-[#f05a28] hover:underline cursor-pointer"
                >
                  Reset Search
                </button>
              </div>

              {searchResults.length === 0 ? (
                <div className="py-12 text-center">
                  <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    No direct matching articles found
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 max-w-md mx-auto">
                    Try searching with simpler keywords like &ldquo;sync&rdquo;, &ldquo;battery&rdquo;, &ldquo;coach&rdquo;, or browse the topic directory below.
                  </p>
                  <button
                    onClick={handleContactClick}
                    className="bg-[#f05a28] hover:bg-[#d94e1f] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    Contact Support Team
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => setSelectedArticle(art)}
                      className="p-5 rounded-2xl bg-[#F8FAFB] hover:bg-[#fff9f6] border border-slate-200/80 hover:border-[#f05a28] transition-all cursor-pointer group flex flex-col justify-between shadow-2xs hover:shadow-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#f05a28] bg-[#f05a28]/10 px-2.5 py-0.5 rounded-full">
                            {art.category}
                          </span>
                          {art.deviceTag && (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              {art.deviceTag}
                            </span>
                          )}
                        </div>
                        <h4 className="text-[15px] font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug">
                          {art.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1.5 line-clamp-2">
                          {art.summary}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#f05a28] flex items-center gap-1">
                          Read Guide <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {art.content.length} steps
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── 3. Browse By Topic Directory (9 Categories) ── */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#f05a28] bg-[#f05a28]/10 px-3 py-1 rounded-full inline-block mb-2">
                  TOPIC DIRECTORY
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Browse By Topic
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Click any card to open a detailed questions & answers popup with step-by-step guides.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FAQ_CATEGORIES.map((cat) => {
                const articleCount = FAQ_ARTICLES.filter((a) => a.categoryCode === cat.code).length;
                return (
                  <div
                    key={cat.code}
                    onClick={() => openCategoryModal(cat)}
                    className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-[#f05a28]/80 transition-all duration-200 cursor-pointer group flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Top row: Code badge & Icon */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-black text-slate-400 tracking-wider">
                          {cat.code}
                        </span>
                        <div className="w-10 h-10 rounded-2xl bg-slate-50 group-hover:bg-[#f05a28]/10 flex items-center justify-center transition-colors">
                          {CATEGORY_ICON_MAP[cat.icon] || <HelpCircle className="w-5 h-5 text-[#f05a28]" />}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors mb-1.5">
                        {cat.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        {cat.description}
                      </p>

                      {/* Topic Highlights list */}
                      <div className="space-y-1.5 mb-6">
                        {cat.topics.slice(0, 4).map((topic, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#f05a28] transition-colors shrink-0" />
                            <span className="truncate">{topic}</span>
                          </div>
                        ))}
                        {cat.topics.length > 4 && (
                          <span className="text-[11px] font-semibold text-slate-400 block pt-0.5">
                            +{cat.topics.length - 4} more topics
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Footer CTA */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#f05a28]">
                      <span>{cat.cta}</span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {articleCount} {articleCount === 1 ? 'guide' : 'guides'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 4. Popular Questions / Quick Answers (Accordions) ── */}
          <div className="mb-16 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xs">
            <div className="mb-8">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#f05a28] bg-[#f05a28]/10 px-3 py-1 rounded-full inline-block mb-2">
                QUICK ANSWERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Popular Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Frequently asked queries from GOQii users, coaching members, and device owners.
              </p>
            </div>

            <div className="space-y-3">
              {popularArticles.map((article) => {
                const isExpanded = expandedAccordionId === article.id;
                return (
                  <div
                    key={article.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'border-[#f05a28]/80 bg-[#fffdfc] shadow-xs'
                        : 'border-slate-200/80 bg-white hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() =>
                        setExpandedAccordionId(isExpanded ? null : article.id)
                      }
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#f05a28] bg-[#f05a28]/10 px-2.5 py-0.5 rounded-full shrink-0">
                          {article.category}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {article.title}
                        </h3>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isExpanded ? 'bg-[#f05a28] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-6 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 space-y-3">
                        <p className="font-semibold text-slate-900 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                          {article.summary}
                        </p>

                        <div className="space-y-2 pt-1 pl-1">
                          {article.content.slice(0, 5).map((point, pIdx) => (
                            <p
                              key={pIdx}
                              className={
                                point.startsWith('•') || point.match(/^\d+\./)
                                  ? 'font-medium text-slate-800'
                                  : 'text-slate-600'
                              }
                            >
                              {point}
                            </p>
                          ))}
                        </div>

                        {/* Article Footer inside Accordion */}
                        <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <button
                            onClick={() => setSelectedArticle(article)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f05a28] hover:underline cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Open Full Answer & Diagnostic Guide →
                          </button>

                          {/* Quick Helpfulness Feedback */}
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-400">Helpful?</span>
                            {feedbackState[article.id] ? (
                              <span className="text-xs font-bold text-emerald-600">
                                Thanks!
                              </span>
                            ) : (
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => handleFeedback(article.id, 'yes')}
                                  className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 text-xs font-semibold cursor-pointer"
                                >
                                  Yes
                                </button>
                                <button
                                  onClick={() => handleFeedback(article.id, 'no')}
                                  className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-600 text-xs font-semibold cursor-pointer"
                                >
                                  No
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 5. Still Need Help? Support Channels Banner ── */}
          <div className="bg-gradient-to-br from-[#0B132B] via-[#0F172A] to-[#1E293B] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#f05a28] bg-[#f05a28]/15 px-3 py-1 rounded-full mb-3 border border-[#f05a28]/20">
                DIRECT ASSISTANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Still Need Help?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8 max-w-xl">
                Can&apos;t find what you are looking for? Our dedicated GOQii support team is available 24/7 to assist with your device, app sync, health tests, and subscription.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {/* Channel 1: In-App Chat */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs">
                  <div className="w-8 h-8 rounded-xl bg-[#2ecc71]/20 flex items-center justify-center text-[#2ecc71] mb-3">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    In-App Live Chat
                  </h4>
                  <p className="text-[11px] text-slate-300 mb-2">
                    Open GOQii App &rarr; Home &rarr; Support. Fastest resolution.
                  </p>
                  <span className="text-[10px] font-bold text-emerald-400">24/7 Available</span>
                </div>

                {/* Channel 2: Phone Helpline */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs">
                  <div className="w-8 h-8 rounded-xl bg-[#f05a28]/20 flex items-center justify-center text-[#f05a28] mb-3">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    Toll-Free Helpline
                  </h4>
                  <p className="text-[11px] text-slate-300 mb-2 font-mono">
                    1800-313-2288
                  </p>
                  <span className="text-[10px] font-bold text-slate-400">Mon–Sat (9 AM – 7 PM IST)</span>
                </div>

                {/* Channel 3: Email Support */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs">
                  <div className="w-8 h-8 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] mb-3">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    Email Desk
                  </h4>
                  <p className="text-[11px] text-slate-300 mb-2 font-mono">
                    support@goqii.com
                  </p>
                  <span className="text-[10px] font-bold text-slate-400">Replies in 24 hours</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleContactClick}
                  className="bg-[#f05a28] hover:bg-[#d94e1f] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg transition-all cursor-pointer"
                >
                  Contact Support Page
                </button>
                <button
                  onClick={onBack}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer"
                >
                  Return to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════ POPUP MODAL: CATEGORY DETAILS ══════════ */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop blur */}
          <div
            onClick={() => setSelectedCategory(null)}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0B132B] to-[#1E293B] text-white p-6 sm:p-8 flex items-start justify-between gap-4 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  {CATEGORY_ICON_MAP[selectedCategory.icon] || <HelpCircle className="w-6 h-6" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#f05a28] bg-[#f05a28]/20 px-2.5 py-0.5 rounded-full">
                      TOPIC {selectedCategory.code}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {selectedCategory.title}
                  </h2>
                  <p className="text-xs text-slate-300 font-normal mt-0.5">
                    {selectedCategory.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCategory(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Filter Bar */}
            <div className="p-4 sm:px-8 bg-slate-50 border-b border-slate-100 flex items-center gap-3 shrink-0">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={modalSearchTerm}
                  onChange={(e) => setModalSearchTerm(e.target.value)}
                  placeholder={`Search questions within ${selectedCategory.title}...`}
                  className="w-full bg-white text-slate-900 placeholder-slate-400 pl-9 pr-8 py-2 rounded-xl text-xs font-medium border border-slate-200 focus:outline-none focus:border-[#f05a28]"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                {modalSearchTerm && (
                  <button
                    onClick={() => setModalSearchTerm('')}
                    className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <span className="text-xs font-bold text-slate-400 whitespace-nowrap">
                {modalArticles.length} {modalArticles.length === 1 ? 'Article' : 'Articles'}
              </span>
            </div>

            {/* Modal Scrollable Questions List */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1 bg-[#F8FAFB]">
              {modalArticles.length === 0 ? (
                <div className="py-8 text-center text-slate-500">
                  <p className="text-xs">No questions matching &ldquo;{modalSearchTerm}&rdquo;</p>
                  <button
                    onClick={() => setModalSearchTerm('')}
                    className="text-xs font-bold text-[#f05a28] mt-2 underline cursor-pointer"
                  >
                    Clear Filter
                  </button>
                </div>
              ) : (
                modalArticles.map((art) => {
                  const isExpanded = modalExpandedId === art.id;
                  return (
                    <div
                      key={art.id}
                      className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isExpanded ? 'border-[#f05a28]/80 shadow-xs' : 'border-slate-200/90'
                      }`}
                    >
                      <button
                        onClick={() => setModalExpandedId(isExpanded ? null : art.id)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/60"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 leading-snug">
                            {art.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                            {art.summary}
                          </p>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                            isExpanded ? 'rotate-180 text-[#f05a28]' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="border-t border-slate-100 p-5 bg-slate-50/50 space-y-3 text-xs sm:text-sm text-slate-700">
                          <p className="font-semibold text-slate-900 bg-white p-3 rounded-xl border border-slate-200/80">
                            {art.summary}
                          </p>

                          <div className="space-y-2 pt-1 pl-1">
                            {art.content.map((point, pIdx) => (
                              <p
                                key={pIdx}
                                className={
                                  point.startsWith('•') || point.match(/^\d+\./)
                                    ? 'font-medium text-slate-800'
                                    : 'text-slate-600'
                                }
                              >
                                {point}
                              </p>
                            ))}
                          </div>

                          <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                            <button
                              onClick={() => {
                                setSelectedCategory(null);
                                setSelectedArticle(art);
                              }}
                              className="text-xs font-bold text-[#f05a28] hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              Open Full Guide Page →
                            </button>

                            {/* Helpfulness */}
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] text-slate-400">Helpful?</span>
                              {feedbackState[art.id] ? (
                                <span className="text-xs font-bold text-emerald-600">Saved!</span>
                              ) : (
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() => handleFeedback(art.id, 'yes')}
                                    className="px-2 py-0.5 rounded-full bg-white hover:bg-emerald-50 text-slate-600 text-xs font-semibold cursor-pointer border border-slate-200"
                                  >
                                    Yes
                                  </button>
                                  <button
                                    onClick={() => handleFeedback(art.id, 'no')}
                                    className="px-2 py-0.5 rounded-full bg-white hover:bg-red-50 text-slate-600 text-xs font-semibold cursor-pointer border border-slate-200"
                                  >
                                    No
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:px-8 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                Need more help? Our specialists are available 24/7.
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleContactClick}
                  className="px-4 py-2 rounded-full text-xs font-bold bg-[#f05a28] text-white hover:bg-[#d94e1f] transition-all cursor-pointer"
                >
                  Contact Support
                </button>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
