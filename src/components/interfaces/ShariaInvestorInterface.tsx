import React, { useState } from 'react';
import { 
  Coins, ShieldCheck, CheckCircle2, TrendingUp, Search, 
  ArrowUpRight, CreditCard, Building2, Users, AlertCircle, 
  Sparkles, Filter, Info, HeartHandshake, Eye 
} from 'lucide-react';
import { PROTOTYPE_PROJECTS } from '../../data/mockData';
import { Project } from '../../types';

interface ShariaInvestorInterfaceProps {
  onInvestSuccess?: () => void;
}

export const ShariaInvestorInterface: React.FC<ShariaInvestorInterfaceProps> = ({
  onInvestSuccess
}) => {
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeInvestModal, setActiveInvestModal] = useState<Project | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<number>(50000);
  const [paymentChannel, setPaymentChannel] = useState<'edahabia' | 'cib' | 'diaspora'>('edahabia');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const filtered = PROTOTYPE_PROJECTS.filter((p) => {
    if (selectedTrack !== 'all' && p.track !== selectedTrack) return false;
    if (searchQuery && !p.title.includes(searchQuery) && !p.wilaya.includes(searchQuery)) return false;
    return true;
  });

  const handleConfirmInvestment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setActiveInvestModal(null);
      if (onInvestSuccess) onInvestSuccess();
    }, 2800);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Interface Identity Banner */}
      <div className="bg-gradient-to-l from-emerald-950 via-slate-900 to-emerald-900 text-white p-6 sm:p-8 rounded-2xl border border-emerald-700/40 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
          <Coins className="w-3.5 h-3.5" />
          <span>الواجهة الثانية: بوابة المستثمر الإسلامي (فرص الاستثمار التشاركي الحلال)</span>
        </div>

        <div className="max-w-3xl space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            استثمر أموالك بالحلال في الاقتصاد الحقيقي الجزائري دون ربا أو شبهة
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            صُممت هذه الواجهة لتلائم سلوك المستثمر المسلم الحريص على طيب المكسب: لا عوائد ثابتة مضمونة (لأن الثابت ربا)، بل حصة شائعة من الربح الفعلي وفق قاعدة «الغُنم بالغُرم»، في مشاريع إنتاجية مختارة ومراقبة من هيئة شرعية مستقلة ومحافظي حسابات معتمدين.
          </p>
        </div>

        {/* Sharia Principles Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1">
            <span className="font-bold text-emerald-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>معايير AAOIFI الدولية</span>
            </span>
            <p className="text-[11px] text-slate-300">
              عقود شركة ومضاربة (معايير 12 و 13) وقرض حسن (19) خالية تماماً من الفوائد المركبة.
            </p>
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1">
            <span className="font-bold text-emerald-300 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>ربح بنسبة مشاعة (8% - 12%)</span>
            </span>
            <p className="text-[11px] text-slate-300">
              تقتسم الأرباح الفعلية الناتجة عن الإنتاج والمبيعات دون التزام بربح مقطوع أو مجحف.
            </p>
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1">
            <span className="font-bold text-emerald-300 flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span>دفع وطني بالدينار (DZD)</span>
            </span>
            <p className="text-[11px] text-slate-300">
              اكتتاب آمن بالبطاقة الذهبية، CIB، أو عبر قنوات الجالية الجزائرية بالخارج.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Track Filter Tabs */}
        <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setSelectedTrack('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedTrack === 'all'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            كافة الفرص الاستثمارية ({PROTOTYPE_PROJECTS.length})
          </button>
          <button
            onClick={() => setSelectedTrack('investment')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedTrack === 'investment'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            مسار الاستثمار (مشاركة ومضاربة)
          </button>
          <button
            onClick={() => setSelectedTrack('social')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedTrack === 'social'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            المسار التكافلي والاجتماعي (قرض حسن وتبرع)
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث بالاسم، الولاية أو القطاع..."
            className="w-full pl-3 pr-9 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:outline-none"
          />
          <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Projects Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => {
          const progress = Math.min(100, Math.round((project.raisedDZD / project.fundingGoalDZD) * 100));
          return (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs text-emerald-800 font-bold">
                      {project.wilaya} · {project.founder}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-0.5 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                    project.track === 'investment' 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                      : 'bg-blue-50 text-blue-800 border border-blue-200'
                  }`}>
                    {project.contract === 'musharaka' && 'عقد مشاركة'}
                    {project.contract === 'mudaraba' && 'عقد مضاربة'}
                    {project.contract === 'qard_hasan' && 'قرض حسن'}
                    {project.contract === 'donation' && 'تبرع وقفي'}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>

                {/* Sharia Terms Box */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-700">
                    <span className="text-slate-500">الضابط الشرعي:</span>
                    <span className="font-semibold">{project.aaoifiStandard}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span className="text-slate-500">نسبة اقتسام الربح:</span>
                    <span className="font-mono text-emerald-800 font-bold">{project.profitSharingRatio}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span className="text-slate-500">العائد السنوي المتوقع:</span>
                    <span className="font-mono text-slate-900 font-bold">{project.expectedReturnRate}</span>
                  </div>
                </div>

                {/* Funding Progress Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold text-slate-900">
                      {(project.raisedDZD / 1000000).toFixed(2)} مليون دج
                    </span>
                    <span className="text-slate-500">
                      الهدف: {(project.fundingGoalDZD / 1000000).toFixed(2)} م.دج
                    </span>
                  </div>

                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-600 h-full rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span className="text-emerald-700 font-bold">{progress}% مكتمل</span>
                    <span>{project.investorsCount} شريكاً</span>
                    <span>متبقي {project.daysLeft} يوماً</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>معتمد من هيئة الرقابة</span>
                </span>

                <button
                  onClick={() => setActiveInvestModal(project)}
                  className="py-2 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <span>{project.track === 'investment' ? 'استثمر بالحلال' : 'ساهم تضامنياً'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Investment Modal */}
      {activeInvestModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs text-emerald-800 font-bold">
                  محاكاة الاكتتاب الشرعي المباشر
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  {activeInvestModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveInvestModal(null)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg p-1"
              >
                ✕
              </button>
            </div>

            {isSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-900">بارك الله لك في استثمارك الحلال!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  تم تسجيل مساهمتك بمبلغ <span className="font-bold text-emerald-800">{investmentAmount.toLocaleString()} دج</span> وإصدار الصك الذكي في دفتر أستاذ البلوك تشين. تم ربط استثمارك بـ «محفظتي الاستثمارية» لتلقي الأرباح الدورية فور اعتمادها.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConfirmInvestment} className="space-y-4 text-xs">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-emerald-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>تأصيل شرعي وفق {activeInvestModal.aaoifiStandard}:</span>
                  </span>
                  <p className="text-[11px] text-emerald-800 leading-relaxed">
                    نسبة اقتسام الربح: <strong className="font-mono">{activeInvestModal.profitSharingRatio}</strong>. لا يوجد ضمان لرأس المال ضد مخاطر السوق (عملاً بقاعدة الغُنم بالغُرم)، وتوزع الأرباح بعد مراجعة محافظ الحسابات المعتمد.
                  </p>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    مبلغ الاستثمار بالدينار الجزائري (DZD):
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step={5000}
                      min={1000}
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="w-full px-3 py-2 text-sm font-bold font-mono text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">دج</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {[10000, 25000, 50000, 100000].map((val) => (
                      <button
                        type="button"
                        key={val}
                        onClick={() => setInvestmentAmount(val)}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-[11px] font-mono font-semibold text-slate-700"
                      >
                        {val.toLocaleString()} دج
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    طريقة الدفع الوطنية المعتمدة:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentChannel('edahabia')}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        paymentChannel === 'edahabia'
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-600'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 mx-auto mb-1 text-emerald-700" />
                      <span>البطاقة الذهبية</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentChannel('cib')}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        paymentChannel === 'cib'
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-600'
                      }`}
                    >
                      <Building2 className="w-4 h-4 mx-auto mb-1 text-slate-700" />
                      <span>بطاقة CIB</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentChannel('diaspora')}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        paymentChannel === 'diaspora'
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-600'
                      }`}
                    >
                      <Users className="w-4 h-4 mx-auto mb-1 text-blue-700" />
                      <span>تحويل المغتربين</span>
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono space-y-1">
                  <div className="flex justify-between text-slate-600">
                    <span>مبلغ الاكتتاب:</span>
                    <strong className="text-slate-900">{investmentAmount.toLocaleString()} دج</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>العائد السنوي المتوقع (تقديري غير ملزم):</span>
                    <strong className="text-emerald-800">{activeInvestModal.expectedReturnRate}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-xs transition-colors"
                  >
                    توقيع العقد الذكي وتأكيد الاكتتاب
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveInvestModal(null)}
                    className="py-2.5 px-4 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
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
