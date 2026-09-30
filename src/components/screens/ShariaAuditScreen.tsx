import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, Scale, Users, Building, Award } from 'lucide-react';
import { AAOIFI_STANDARDS } from '../../data/mockData';

export const ShariaAuditScreen: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white p-6 sm:p-8 rounded-2xl border border-emerald-800/50 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
          <Scale className="w-4 h-4 text-emerald-400" />
          <span>الحوكمة الشرعية المستقلة وتوطين المؤسسات المهنية (القسمان 4 و9)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          هيئة رقابة شرعية مستقلة ومرافقة مهنية من مكاتب التدقيق
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          تعتمد المنصة عقود المشاركة والمضاربة والقرض الحسن من هيئة رقابة شرعية مستقلة من 3 أعضاء متخصصين في فقه المعاملات المالية بالاستناد لمعايير AAOIFI ونظام COSOB رقم 01-23.
        </p>
      </div>

      {/* Institutional Localization Grid (Table 4 from the paper) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              توطين المؤسسات والكفاءات المرتبطة بالمنصة (تقديرات بحلول 2030)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              فتح سوق جديدة لخدمات التمويل التشاركي وتوطين 220 إلى 400 جهة مهنية
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            الجدول (4) من الملف
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-700">المحاسبون ومحافظو الحسابات</div>
            <div className="text-2xl font-black text-emerald-800 font-mono">120 - 200</div>
            <div className="text-[11px] text-slate-500">
              اعتمادهم لمرافقة إعداد الملفات ودراسات الجدوى وتقارير المتابعة الدورية.
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-700">مكاتب المرافقة وتطوير الأعمال</div>
            <div className="text-2xl font-black text-emerald-800 font-mono">60 - 100</div>
            <div className="text-[11px] text-slate-500">
              الرقابة الميدانية المستمرة ورفع تقارير الأداء الفعلي للممولين.
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-700">الجهات الشريكة والنوافذ الإسلامية</div>
            <div className="text-2xl font-black text-emerald-800 font-mono">40 - 100</div>
            <div className="text-[11px] text-slate-500">
              نوافذ الصيرفة الإسلامية بالبنوك وشركات التأمين التكافلي.
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-700">كفاءات الرقابة الشرعية والتقنية</div>
            <div className="text-2xl font-black text-emerald-800 font-mono">20 - 35</div>
            <div className="text-[11px] text-slate-500">
              فقهاء المعاملات، مدققون شرعيون معتمدون، وخبراء أمن سيبراني.
            </div>
          </div>
        </div>
      </div>

      {/* Sharia Standards Detailed Table (Table 2 from the paper) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            <h2 className="text-base font-bold text-slate-900">
              المرجعيات الشرعية والضوابط العقدية (معايير AAOIFI)
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 font-mono">الجدول (2)</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-right">
            <thead>
              <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <th className="p-3">المعيار المرجعي (AAOIFI)</th>
                <th className="p-3">استخدامه في منصة ريادي</th>
                <th className="p-3">الضابط الأساسي والقاعدة المقاصدية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {AAOIFI_STANDARDS.map((std) => (
                <tr key={std.number} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-3 font-semibold text-slate-900">{std.name}</td>
                  <td className="p-3 text-emerald-800 font-medium">{std.scope}</td>
                  <td className="p-3 leading-relaxed">{std.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
