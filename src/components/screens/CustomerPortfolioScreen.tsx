import React, { useState } from 'react';
import { 
  Wallet, TrendingUp, ArrowDownLeft, ArrowUpRight, ShieldCheck, 
  Coins, PieChart, RefreshCw, FileText, CheckCircle2, CreditCard, 
  Sparkles, Calendar, HeartHandshake, Eye 
} from 'lucide-react';
import { PROTOTYPE_PROJECTS } from '../../data/mockData';

export const CustomerPortfolioScreen: React.FC = () => {
  const [walletBalance, setWalletBalance] = useState<number>(340000);
  const [accumulatedProfit, setAccumulatedProfit] = useState<number>(42800);
  const [autoReinvest, setAutoReinvest] = useState<boolean>(true);
  const [showPayoutNotification, setShowPayoutNotification] = useState<boolean>(false);

  const activeInvestments = [
    {
      id: 'inv-01',
      title: 'مزرعة الواحات للزراعة المائية',
      wilaya: 'ورقلة',
      contractType: 'مشاركة (معيار 12)',
      investedAmount: 150000,
      currentValue: 168200,
      annualReturn: '12.1%',
      nextPayoutDate: '15 أكتوبر 2026',
      profitEarned: 18200,
      jobsSupported: 3
    },
    {
      id: 'inv-02',
      title: 'تعاونية تدوير البلاستيك لمواد البناء',
      wilaya: 'الجزائر العاصمة',
      contractType: 'مشاركة (معيار 12)',
      investedAmount: 100000,
      currentValue: 114600,
      annualReturn: '14.6%',
      nextPayoutDate: '01 نوفمبر 2026',
      profitEarned: 14600,
      jobsSupported: 2
    },
    {
      id: 'inv-03',
      title: 'منصة شفاء للعيادات المتنقلة',
      wilaya: 'البليدة',
      contractType: 'مضاربة (معيار 13)',
      investedAmount: 90000,
      currentValue: 100000,
      annualReturn: '11.1%',
      nextPayoutDate: '20 نوفمبر 2026',
      profitEarned: 10000,
      jobsSupported: 2
    }
  ];

  const handleSimulateClaimProfit = () => {
    setShowPayoutNotification(true);
    setTimeout(() => setShowPayoutNotification(false), 3000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner - Customer & Investor Experience */}
      <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white p-6 sm:p-8 rounded-2xl border border-emerald-700/50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>تجربة المستخدم: محفظة المستثمر التشاركي الذكية (Smart Investor Portal)</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-black text-white tracking-tight">
            أموالك تُبنى في الاقتصاد الحقيقي الجزائري وتنمو بشرع الله
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            متابعة حية ومؤمنة لاستثماراتك في مشاريع المشاركة والمضاربة، مع تحويل الأرباح تلقائياً إلى رصيدك بالدينار الجزائري وفق معايير AAOIFI ونظام COSOB 01-23.
          </p>
        </div>

        {/* Quick Action Widget */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-right space-y-3 shrink-0">
          <div className="text-xs text-emerald-200">الرصيد المتاح للتحويل أو الاستثمار:</div>
          <div className="text-2xl font-black text-white font-mono tabular-nums">
            {walletBalance.toLocaleString()} دج
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSimulateClaimProfit}
              className="py-1.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1"
            >
              <ArrowDownLeft className="w-3.5 h-3.5" />
              <span>سحب للحساب البنكي</span>
            </button>
            <button className="py-1.5 px-3 bg-white/20 hover:bg-white/30 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5" />
              <span>شحن بالذهبية</span>
            </button>
          </div>
        </div>
      </div>

      {showPayoutNotification && (
        <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-xl text-xs text-emerald-900 flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>تم إرسال أمر التحويل بنجاح لحسابكم البريدي الجاري (CCP) عبر بوابات الدفع الوطنية!</span>
        </div>
      )}

      {/* KPI Stats Row (Customer financial metrics) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">إجمالي رأس المال المستثمر</span>
          <div className="text-xl font-bold text-slate-900 font-mono tabular-nums">340,000 دج</div>
          <div className="text-[11px] text-emerald-700 font-semibold">موزعة على 3 مشاريع</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">الأرباح التراكمية المحصلة</span>
          <div className="text-xl font-bold text-emerald-700 font-mono tabular-nums">
            +{accumulatedProfit.toLocaleString()} دج
          </div>
          <div className="text-[11px] text-slate-500 font-mono">متوسط عائد 12.6% سنوياً</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">الأثر المقاصدي والتنموي</span>
          <div className="text-xl font-bold text-slate-900 font-mono tabular-nums">7 وظائف</div>
          <div className="text-[11px] text-emerald-700 font-semibold">خُلقت باستثماراتك</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">إعادة الاستثمار التلقائي</span>
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-bold text-emerald-800">{autoReinvest ? 'مفعل (Auto)' : 'معطل'}</span>
            <button
              onClick={() => setAutoReinvest(!autoReinvest)}
              className={`w-9 h-5 rounded-full transition-colors relative ${
                autoReinvest ? 'bg-emerald-600' : 'bg-slate-300'
              }`}
            >
              <span className={`w-3.5 h-3.5 bg-white rounded-full absolute top-0.5 transition-transform ${
                autoReinvest ? 'right-5' : 'right-1'
              }`} />
            </button>
          </div>
          <div className="text-[10px] text-slate-400">تراكم العائد داخل الاقتصاد الحقيقي</div>
        </div>
      </div>

      {/* Active Investments Grid */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              المشاريع التشاركية قيد التشغيل في محفظتك
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              متابعة دورية للقوائم المالية الصادرة عن محافظي الحسابات المعتمدين
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            العقود الذكية موثقة بالبلوك تشين
          </span>
        </div>

        <div className="space-y-3">
          {activeInvestments.map((inv) => (
            <div
              key={inv.id}
              className="p-4 bg-slate-50 hover:bg-slate-100/70 transition-colors rounded-xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">{inv.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                    {inv.contractType}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500">
                  ولاية {inv.wilaya} · التوزيع القادم: <span className="font-mono text-slate-700">{inv.nextPayoutDate}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] block">المبلغ المستثمر:</span>
                  <strong className="text-slate-800">{inv.investedAmount.toLocaleString()} دج</strong>
                </div>

                <div>
                  <span className="text-slate-400 text-[10px] block">القيمة التقديرية الحالية:</span>
                  <strong className="text-emerald-700">{inv.currentValue.toLocaleString()} دج</strong>
                </div>

                <div>
                  <span className="text-slate-400 text-[10px] block">الأرباح المحققة:</span>
                  <strong className="text-emerald-700">+{inv.profitEarned.toLocaleString()} دج</strong>
                </div>

                <div>
                  <span className="text-slate-400 text-[10px] block">العائد السنوي:</span>
                  <strong className="text-emerald-800">{inv.annualReturn}</strong>
                </div>

                <button className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-emerald-700" />
                  <span>شهادة الصك الذكي</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
