import React, { useState } from 'react';
import { 
  Wallet, TrendingUp, ArrowDownLeft, ArrowUpRight, ShieldCheck, 
  Coins, CheckCircle2, FileText, RefreshCw, Calendar, CreditCard, 
  Building2, Sparkles, Download, Clock 
} from 'lucide-react';

export const ActivePartnerInterface: React.FC = () => {
  const [partnerBalanceDZD, setPartnerBalanceDZD] = useState<number>(340000);
  const [withdrawableProfitDZD, setWithdrawableProfitDZD] = useState<number>(42800);
  const [autoReinvest, setAutoReinvest] = useState<boolean>(true);
  const [withdrawalSuccess, setWithdrawalSuccess] = useState<boolean>(false);

  const activePartnerships = [
    {
      contractId: 'SHR-DZ-2026-0041',
      projectTitle: 'مزرعة الواحات للزراعة المائية والطاقة الشمسية',
      wilaya: 'ورقلة',
      contractType: 'مشاركة متناقصة (AAOIFI 12)',
      investedAmount: 150000,
      currentShareValue: 168200,
      totalProfitReceived: 18200,
      annualReturn: '12.1%',
      nextDistributionDate: '15 أكتوبر 2026',
      auditor: 'مكتب أ. بوزيان (محافظ حسابات)',
      blockchainTx: '0x8f2a...c4e1'
    },
    {
      contractId: 'SHR-DZ-2026-0038',
      projectTitle: 'تعاونية تدوير البلاستيك إلى مواد بناء خضراء',
      wilaya: 'الجزائر العاصمة',
      contractType: 'مشاركة (AAOIFI 12)',
      investedAmount: 100000,
      currentShareValue: 114600,
      totalProfitReceived: 14600,
      annualReturn: '14.6%',
      nextDistributionDate: '01 نوفمبر 2026',
      auditor: 'مكتب النخبة للتدقيق المحاسبي',
      blockchainTx: '0x4e7b...9a12'
    },
    {
      contractId: 'SHR-DZ-2026-0029',
      projectTitle: 'شبكة «شفاء» للعيادات المتنقلة والرعاية المنزلية',
      wilaya: 'البليدة',
      contractType: 'مضاربة شرعية (AAOIFI 13)',
      investedAmount: 90000,
      currentShareValue: 100000,
      totalProfitReceived: 10000,
      annualReturn: '11.1%',
      nextDistributionDate: '20 نوفمبر 2026',
      auditor: 'مكتب الأطلس للاستشارات المالية',
      blockchainTx: '0x1c9d...5f88'
    }
  ];

  const distributionHistory = [
    {
      id: 'dist-03',
      date: '30 جوان 2026',
      project: 'مزرعة الواحات الذكية',
      amountDZD: 9100,
      quarter: 'أرباح الربع الثاني 2026',
      channel: 'إيداع بريد الجزائر (CCP)',
      status: 'تم الاستلام'
    },
    {
      id: 'dist-02',
      date: '31 مارس 2026',
      project: 'تعاونية تدوير البلاستيك',
      amountDZD: 7300,
      quarter: 'أرباح الربع الأول 2026',
      channel: 'إعادة استثمار تلقائي (Auto-Reinvest)',
      status: 'أعيد استثمارها'
    },
    {
      id: 'dist-01',
      date: '31 ديسمبر 2025',
      project: 'عيادات شفاء المتنقلة',
      amountDZD: 5000,
      quarter: 'أرباح الربع الرابع 2025',
      channel: 'تحويل بنكي CIB',
      status: 'تم الاستلام'
    }
  ];

  const handleWithdrawal = () => {
    setWithdrawalSuccess(true);
    setTimeout(() => {
      setWithdrawalSuccess(false);
      setWithdrawableProfitDZD(0);
    }, 3000);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Interface Identity Banner */}
      <div className="bg-gradient-to-l from-emerald-950 via-slate-900 to-emerald-900 text-white p-6 sm:p-8 rounded-2xl border border-emerald-700/40 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
          <Wallet className="w-3.5 h-3.5" />
          <span>الواجهة الثالثة: بوابة الشركاء المستثمرين (متابعة العقود واستلام توزيع الأرباح)</span>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              مرحباً بك شريكنا العزيز: أموالك تثمر وأرباحك تُوزع بشفافية وبانتظام
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              هذه الواجهة مخصصة للمستثمرين الذين دخلوا في عقود شراكة فعلية (المشاركة والمضاربة). تتيح لك متابعة أداء مشاريعك، الاطلاع على تقارير محافظي الحسابات المعتمدة، وسحب أرباحك الدورية فورياً إلى حسابك البريدي (CCP) أو البنكي.
            </p>
          </div>

          {/* Quick Balance & Claim Action Card */}
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-right space-y-3 shrink-0 w-full sm:w-auto">
            <div className="text-xs text-emerald-200">الأرباح المتاحة للسحب الفوري الآن:</div>
            <div className="text-3xl font-black text-white font-mono tabular-nums">
              {withdrawableProfitDZD.toLocaleString()} دج
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleWithdrawal}
                disabled={withdrawableProfitDZD === 0}
                className="py-2 px-4 bg-emerald-400 hover:bg-emerald-300 disabled:bg-slate-700 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <ArrowDownLeft className="w-4 h-4" />
                <span>سحب الأرباح إلى الحساب (CCP)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {withdrawalSuccess && (
        <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-xl text-xs text-emerald-900 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>
            تم إرسال أمر تحويل مبلغ <strong>42,800 دج</strong> بنجاح إلى حسابك البريدي الجاري (CCP) عبر بوابات الدفع الوطنية!
          </span>
        </div>
      )}

      {/* KPI Financial Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">إجمالي رأس المال المشارك به</span>
          <div className="text-xl font-bold text-slate-900 font-mono tabular-nums">
            {partnerBalanceDZD.toLocaleString()} دج
          </div>
          <div className="text-[11px] text-emerald-700 font-semibold">في 3 مشاريع إنتاجية</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">إجمالي الأرباح التراكمية المحصلة</span>
          <div className="text-xl font-bold text-emerald-700 font-mono tabular-nums">
            +42,800 دج
          </div>
          <div className="text-[11px] text-slate-500 font-mono">متوسط عائد سنوي 12.6%</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">الأثر المجتمعي والتنموي</span>
          <div className="text-xl font-bold text-slate-900 font-mono tabular-nums">
            7 وظائف دائمة
          </div>
          <div className="text-[11px] text-emerald-700 font-semibold">مستحدثة في ولايات الوطن</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">إعادة الاستثمار التلقائي</span>
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-bold text-emerald-800">
              {autoReinvest ? 'مفعل (Auto)' : 'معطل'}
            </span>
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

      {/* Active Partnership Contracts List */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              عقود الشراكة الجارية الموثقة في دفتر أستاذ البلوك تشين
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              كل عقد مسجل بشفافية تامة ومصادق عليه من الهيئة الشرعية ومحافظ الحسابات
            </p>
          </div>
          <span className="text-xs text-emerald-800 font-semibold font-mono bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            3 عقود تشاركية نشطة
          </span>
        </div>

        <div className="space-y-3">
          {activePartnerships.map((partner) => (
            <div
              key={partner.contractId}
              className="p-4 bg-slate-50 hover:bg-slate-100/70 transition-colors rounded-xl border border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
            >
              <div className="space-y-1 max-w-md">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">{partner.projectTitle}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                    {partner.contractType}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  معرف العقد: {partner.contractId} · ولاية {partner.wilaya} · Tx: {partner.blockchainTx}
                </div>
                <div className="text-[11px] text-slate-600">
                  المرافق المعتمد: <strong>{partner.auditor}</strong>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap items-center gap-5 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-slate-400 block">رأس المال المشارك:</span>
                  <strong className="text-slate-800">{partner.investedAmount.toLocaleString()} دج</strong>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block">القيمة التقديرية للحصة:</span>
                  <strong className="text-emerald-700">{partner.currentShareValue.toLocaleString()} دج</strong>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block">الأرباح المستلمة:</span>
                  <strong className="text-emerald-700">+{partner.totalProfitReceived.toLocaleString()} دج</strong>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block">تاريخ التوزيع القادم:</span>
                  <strong className="text-slate-800">{partner.nextDistributionDate}</strong>
                </div>

                <button className="py-1.5 px-3 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors">
                  <Download className="w-3.5 h-3.5 text-emerald-700" />
                  <span>شهادة الصك الذكي</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profit Distribution Payout Ledger History */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-emerald-700" />
            <h2 className="text-base font-bold text-slate-900">
              سجل استلام وتوزيع الأرباح الدورية (التحويلات الفعلية)
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">تحويلات موثقة</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-right">
            <thead>
              <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <th className="p-3">تاريخ التوزيع</th>
                <th className="p-3">المشروع الاستثماري</th>
                <th className="p-3">الدورة المحاسبية</th>
                <th className="p-3">مبلغ الربح المستلم</th>
                <th className="p-3">قناة التحويل الوطنية</th>
                <th className="p-3">حالة العملية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600 font-mono">
              {distributionHistory.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-3 font-semibold text-slate-900">{item.date}</td>
                  <td className="p-3 font-bold text-slate-800">{item.project}</td>
                  <td className="p-3 text-slate-500">{item.quarter}</td>
                  <td className="p-3 text-emerald-800 font-black font-mono">
                    +{item.amountDZD.toLocaleString()} دج
                  </td>
                  <td className="p-3 text-slate-700">{item.channel}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px] border border-emerald-200">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
