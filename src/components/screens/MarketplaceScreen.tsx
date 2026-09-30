import React, { useState } from 'react';
import { 
  Building2, Users, TrendingUp, ShieldCheck, HeartHandshake, 
  Leaf, Cpu, Stethoscope, Sparkles, CheckCircle2, CreditCard,
  Search, SlidersHorizontal, ArrowUpRight, Award, Info
} from 'lucide-react';
import { PROTOTYPE_PROJECTS } from '../../data/mockData';
import { Project, ContractType, TrackType } from '../../types';

interface MarketplaceScreenProps {
  onSelectProjectForContract?: (project: Project) => void;
  onOpenEntrepreneurPortal?: () => void;
}

export const MarketplaceScreen: React.FC<MarketplaceScreenProps> = ({
  onSelectProjectForContract,
  onOpenEntrepreneurPortal
}) => {
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeInvestmentModal, setActiveInvestmentModal] = useState<Project | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<number>(50000);
  const [paymentMethod, setPaymentMethod] = useState<'edahabia' | 'cib' | 'diaspora'>('edahabia');
  const [investmentSuccess, setInvestmentSuccess] = useState(false);

  const filteredProjects = PROTOTYPE_PROJECTS.filter((p) => {
    if (selectedTrack !== 'all' && p.track !== selectedTrack) return false;
    if (selectedSector !== 'all' && p.sector !== selectedSector) return false;
    if (searchQuery && !p.title.includes(searchQuery) && !p.wilaya.includes(searchQuery) && !p.tagline.includes(searchQuery)) return false;
    return true;
  });

  const handleSimulateInvest = (e: React.FormEvent) => {
    e.preventDefault();
    setInvestmentSuccess(true);
    setTimeout(() => {
      setInvestmentSuccess(false);
      setActiveInvestmentModal(null);
    }, 2500);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner / Platform Summary */}
      <div className="bg-gradient-to-l from-emerald-900 via-emerald-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg border border-emerald-700/40">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-semibold border border-emerald-400/30">
            <Award className="w-3.5 h-3.5 text-emerald-300" />
            <span>نظام COSOB 01-23 الجزائري · معايير AAOIFI الشرعية الدولية</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            استثمر في مشاريع ابتكارية جزائرية واعدة برؤية مقاصدية عادلة
          </h1>
          
          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            المنصة الذكية الأولى في الجزائر لدمج التمويل التشاركي (المشاركة والمضاربة) مع مرافقة مهنية معتمدة من محافظي الحسابات وتوزيع الأرباح عبر البلوك تشين، استناداً لقاعدة «الغُنم بالغُرم».
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-xs text-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>لا فوائد ولا مديونية</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>تقارير رقابة شرعية دورية</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>دفع بالدينار الجزائري وبطاقة الذهبية</span>
            </div>
          </div>
        </div>

        {/* Decorative Watermark / Geometric Motif */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
          <div className="w-64 h-64 border-8 border-emerald-400 rounded-full flex items-center justify-center">
            <Building2 className="w-36 h-36" />
          </div>
        </div>
      </div>

      {/* Quick KPI Bar from Dr Haddou Ali's Research */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-slate-500 text-xs font-medium">التمويل المستهدف (2026-2030)</div>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono tabular-nums">1,420 مليون دج</div>
          <div className="text-[11px] text-emerald-600 mt-0.5">في الاقتصاد الحقيقي المنتج</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-slate-500 text-xs font-medium">المشاريع المستهدفة</div>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono tabular-nums">1,420 مشروعاً</div>
          <div className="text-[11px] text-slate-500 mt-0.5">من علامات الابتكار الوطنية</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-slate-500 text-xs font-medium">فرص العمل المتوقعة</div>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono tabular-nums">15,000 وظيفة</div>
          <div className="text-[11px] text-emerald-600 mt-0.5">لخفض بطالة الشباب</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-slate-500 text-xs font-medium">المستثمرون بحلول 2030</div>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono tabular-nums">100,000 مستثمر</div>
          <div className="text-[11px] text-slate-500 mt-0.5">تعزيز الشمول المالي</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Tracks Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              onClick={() => setSelectedTrack('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedTrack === 'all'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              كافة المسارات ({PROTOTYPE_PROJECTS.length})
            </button>
            <button
              onClick={() => setSelectedTrack('investment')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedTrack === 'investment'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              مسار الاستثمار (مشاركة ومضاربة)
            </button>
            <button
              onClick={() => setSelectedTrack('social')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedTrack === 'social'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              المسار الاجتماعي (قرض حسن وتبرع)
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث باسم المشروع، الولاية أو القطاع..."
              className="w-full pl-3 pr-9 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Sector Filter Chips */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500 overflow-x-auto pb-1">
          <span className="font-semibold text-slate-700 whitespace-nowrap">القطاعات:</span>
          {[
            { id: 'all', label: 'الكل' },
            { id: 'green_tech', label: 'الاقتصاد الأخضر والبيئة' },
            { id: 'health_pharma', label: 'الصحة والصناعة الصيدلانية' },
            { id: 'agritech', label: 'الفلاحة الذكية والأمن الغذائي' },
            { id: 'digital_economy', label: 'الاقتصاد الرقمي' },
            { id: 'social_empowerment', label: 'المقاولة الاجتماعية والتمكين' }
          ].map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSector(sec.id)}
              className={`px-2.5 py-1 rounded text-xs transition-colors whitespace-nowrap ${
                selectedSector === sec.id
                  ? 'bg-emerald-100 text-emerald-800 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const progressPercent = Math.min(100, Math.round((project.raisedDZD / project.fundingGoalDZD) * 100));
          return (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Card Header & Metadata */}
              <div className="p-5 space-y-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs text-emerald-700 font-semibold">
                      {project.wilaya} · {project.founder}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <span className={`text-[11px] px-2 py-0.5 rounded font-medium ${
                    project.track === 'investment' 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                      : 'bg-blue-50 text-blue-800 border border-blue-200'
                  }`}>
                    {project.contract === 'musharaka' && 'مشاركة'}
                    {project.contract === 'mudaraba' && 'مضاربة'}
                    {project.contract === 'qard_hasan' && 'قرض حسن'}
                    {project.contract === 'donation' && 'تبرع وقفي'}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>

                {/* Sharia compliance & Contract terms */}
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-xs space-y-1">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-500">صيغة العقد الشرعي:</span>
                    <span className="font-semibold text-slate-800">{project.aaoifiStandard}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-500">قسمة الربح:</span>
                    <span className="font-mono text-emerald-700 font-semibold">{project.profitSharingRatio}</span>
                  </div>
                </div>

                {/* Progress bar & Funding details */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 font-mono tabular-nums">
                      {(project.raisedDZD / 1000000).toFixed(2)} مليون دج
                    </span>
                    <span className="text-slate-500 font-mono tabular-nums">
                      من أصل {(project.fundingGoalDZD / 1000000).toFixed(2)} مليون دج
                    </span>
                  </div>

                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        progressPercent >= 100 ? 'bg-emerald-600' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="font-semibold text-emerald-700">{progressPercent}% مكتمل</span>
                    <span>{project.investorsCount} مساهماً</span>
                    <span>متبقي {project.daysLeft} يوماً</span>
                  </div>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>معتمد من هيئة الرقابة</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveInvestmentModal(project)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors flex items-center gap-1"
                  >
                    <span>{project.track === 'investment' ? 'استثمر الآن' : 'ساهم الآن'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulated Investment Modal */}
      {activeInvestmentModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs text-emerald-700 font-semibold">
                  محاكاة الاكتتاب في التمويل الجماعي التشاركي
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {activeInvestmentModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveInvestmentModal(null)}
                className="text-slate-400 hover:text-slate-600 p-1 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {investmentSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-900">تم تسجيل الاكتتاب وإصدار العقد الذكي بنجاح!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  تم توثيق المساهمة بمبلغ <span className="font-bold text-emerald-700">{investmentAmount.toLocaleString()} دج</span> عبر دفتر أستاذ البلوك تشين المشفر. سيتم إيداع الأرباح بحسابكم تلقائياً وفق عقد {activeInvestmentModal.contract === 'musharaka' ? 'المشاركة' : 'المضاربة'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSimulateInvest} className="space-y-4">
                <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-xs space-y-1.5 text-emerald-900">
                  <div className="font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>ضوابط الحوكمة الشرعية وفق {activeInvestmentModal.aaoifiStandard}:</span>
                  </div>
                  <p className="text-emerald-800 text-[11px] leading-relaxed">
                    نسبة اقتسام الأرباح المعلنة: <span className="font-bold font-mono">{activeInvestmentModal.profitSharingRatio}</span>. لا يضمن صاحب المشروع رأس المال إلا في حال التعدي أو التفريط (قاعدة أمانة المضارب والشريك).
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    مبلغ المساهمة بالدينار الجزائري (DZD):
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={1000}
                      step={5000}
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="w-full px-3 py-2 text-sm font-bold font-mono text-slate-900 border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-semibold">
                      دج
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {[10000, 25000, 50000, 100000].map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => setInvestmentAmount(amt)}
                        className="text-[11px] px-2 py-1 bg-slate-100 text-slate-700 rounded hover:bg-slate-200 transition-colors"
                      >
                        {amt.toLocaleString()} دج
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment Gateway Options */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    بوابة الدفع الإلكتروني الوطنية:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('edahabia')}
                      className={`p-2.5 rounded-lg border text-xs text-center transition-all ${
                        paymentMethod === 'edahabia'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 mx-auto mb-1 text-emerald-700" />
                      <span>البطاقة الذهبية</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cib')}
                      className={`p-2.5 rounded-lg border text-xs text-center transition-all ${
                        paymentMethod === 'cib'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      <Building2 className="w-4 h-4 mx-auto mb-1 text-slate-700" />
                      <span>بطاقة CIB البنكية</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('diaspora')}
                      className={`p-2.5 rounded-lg border text-xs text-center transition-all ${
                        paymentMethod === 'diaspora'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      <Users className="w-4 h-4 mx-auto mb-1 text-blue-700" />
                      <span>تحويل المغتربين</span>
                    </button>
                  </div>
                </div>

                {/* Summary Box */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1 font-mono">
                  <div className="flex justify-between text-slate-600">
                    <span>مبلغ الاستثمار:</span>
                    <span className="font-bold text-slate-900">{investmentAmount.toLocaleString()} دج</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>رسوم المنصة (أجر وكالة 0% على الممول):</span>
                    <span className="text-emerald-700 font-bold">0.00 دج</span>
                  </div>
                  <div className="flex justify-between text-slate-600 pt-1 border-t border-slate-200">
                    <span>العائد السنوي المتوقع التقديري:</span>
                    <span className="font-bold text-emerald-800">{activeInvestmentModal.expectedReturnRate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    تأكيد الاكتتاب وتوقيع العقد الذكي
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveInvestmentModal(null)}
                    className="py-2.5 px-4 border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs rounded-xl transition-colors"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
