import React, { useState } from 'react';
import { TrendingUp, Users, Briefcase, DollarSign, Sliders, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FINANCIAL_PROJECTIONS } from '../data/mockData';

export const FinancialProjections: React.FC = () => {
  const [stressTestMode, setStressTestMode] = useState<boolean>(false);

  const multiplier = stressTestMode ? 0.6 : 1.0;

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs text-emerald-700 font-semibold">
            الأثر التنموي والتوقعات المالية (2026 – 2030)
          </span>
          <h2 className="text-base font-bold text-slate-900 mt-0.5">
            المؤشرات المالية وفرص العمل واختبار الصلابة (الجداول 8 و 9 و 10)
          </h2>
        </div>

        {/* Stress test toggle */}
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <span className="text-xs text-slate-600 font-medium px-1">
            سيناريو التحقق:
          </span>
          <button
            onClick={() => setStressTestMode(false)}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
              !stressTestMode ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            السيناريو المستهدف (100%)
          </button>
          <button
            onClick={() => setStressTestMode(true)}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
              stressTestMode ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            اختبار الصلابة (60%)
          </button>
        </div>
      </div>

      {stressTestMode && (
        <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
          <strong>اختبار الصلابة (صفحة 13 من الملف):</strong> لو تحقق 60% فقط من المستهدفات، لتم تمويل نحو <strong>850 مشروعاً</strong> وخلق نحو <strong>9,000 وظيفة</strong>، وهو مستوى كافٍ جداً لقيام سوق مهنية وشرعية محلية وقاعدة مقاولين وأثر ملموس على تقليص البطالة.
        </div>
      )}

      {/* Aggregate KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-xs text-slate-500 font-medium">إجمالي التمويل التراكمي:</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono tabular-nums">
            {(1420 * multiplier).toFixed(0)} مليون دج
          </div>
          <div className="text-[11px] text-emerald-700 mt-0.5">في الاقتصاد الحقيقي</div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-xs text-slate-500 font-medium">المشاريع الممولة تراكمياً:</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono tabular-nums">
            {Math.round(1420 * multiplier).toLocaleString()} مشروع
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">معدل 11 وظيفة للمشروع</div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-xs text-slate-500 font-medium">الوظائف المستحدثة:</span>
          <div className="text-xl font-bold text-emerald-700 mt-1 font-mono tabular-nums">
            {Math.round(15000 * multiplier).toLocaleString()} وظيفة
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">مباشرة وغير مباشرة</div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-xs text-slate-500 font-medium">إيرادات عمولات المنصة (5%):</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono tabular-nums">
            {(71 * multiplier).toFixed(1)} مليون دج
          </div>
          <div className="text-[11px] text-emerald-700 mt-0.5">أجر وكالة وخدمة فعلية</div>
        </div>
      </div>

      {/* Projection Table */}
      <div className="overflow-x-auto border border-slate-200 rounded-xl">
        <table className="w-full text-xs text-right">
          <thead>
            <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <th className="p-3">السنة</th>
              <th className="p-3">المشاريع الممولة</th>
              <th className="p-3">إجمالي التمويل (مليون دج)</th>
              <th className="p-3">إيرادات العمولة (5%)</th>
              <th className="p-3">عدد المستثمرين</th>
              <th className="p-3">الوظائف المتوقعة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600 font-mono">
            {FINANCIAL_PROJECTIONS.map((row) => (
              <tr key={row.year} className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 font-bold text-slate-900">{row.year}</td>
                <td className="p-3">{Math.round(row.fundedProjects * multiplier)}</td>
                <td className="p-3 font-bold text-emerald-800">
                  {(row.totalFundingMlnDZD * multiplier).toFixed(1)} م.دج
                </td>
                <td className="p-3">{(row.commissionMlnDZD * multiplier).toFixed(1)} م.دج</td>
                <td className="p-3">{Math.round(row.investorsCount * multiplier).toLocaleString()}</td>
                <td className="p-3 text-emerald-700 font-bold">
                  {Math.round(row.jobsCreated * multiplier).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
