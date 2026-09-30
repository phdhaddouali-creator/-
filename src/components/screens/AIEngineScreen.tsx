import React, { useState } from 'react';
import { 
  Cpu, TrendingUp, ShieldCheck, AlertTriangle, FileSpreadsheet, 
  BrainCircuit, Search, CheckCircle, BarChart3, HelpCircle 
} from 'lucide-react';

export const AIEngineScreen: React.FC = () => {
  const [selectedAuditModule, setSelectedAuditModule] = useState<'predictive' | 'analytical' | 'generative' | 'sharia'>('predictive');

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-emerald-900/60 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
          <BrainCircuit className="w-4 h-4 text-emerald-400" />
          <span>المكون الثاني: محرك الذكاء الاصطناعي للحوكمة الشرعية والمالية</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          تحليل تنبؤي وتحليلي وتوليدي يدعم قرارات لجنة الاعتماد
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          وفق القسم 6.1 والجدول 3 من ورقة الدكتور حدو علي: لا يصدر محرك الذكاء الاصطناعي قراراً نهائياً بمفرده، بل ينتج تقارير معمقة تفحص مخاطر الائتمان ومكافحة غسيل الأموال وتطابق النشاط مع أحكام الشريعة الإسلامية قبل عرضها على لجنة الاعتماد.
        </p>
      </div>

      {/* 4 AI Modules as shown in Table 3 of the paper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            id: 'predictive',
            title: '1. الذكاء التنبؤي',
            application: 'الدراسات الائتمانية ودراسة المخاطر، والتنبؤ باحتمالات الفشل وتحليل جدوى التوقعات.',
            impact: 'توجيه التمويل إلى حيث الحاجة الأمثل وخفض نسب التعثر.',
            metric: 'دقة نموذج التنبؤ: 91.4%'
          },
          {
            id: 'analytical',
            title: '2. الذكاء التحليلي',
            application: 'تشخيص وضعية المشاريع وأثرها البيئي، وتقييم التدفقات النقدية المخصومة (DCF).',
            impact: 'تحسين توزيع التمويل في المراحل ومواءمة خطط النمو.',
            metric: 'تحليل مالي آلي شامل'
          },
          {
            id: 'generative',
            title: '3. الذكاء التوليدي',
            application: 'إنشاء التقارير الدورية ومذكرات العرض للمستثمرين وملخصات التقييم التنفيذي.',
            impact: 'تمكين غير المتخصصين من قراءة ومتابعة تطور المشاريع.',
            metric: 'توليد تقرير في أقل من 3 ثوانٍ'
          },
          {
            id: 'sharia',
            title: '4. فحص الامتثال الشرعي',
            application: 'فحص خلو النشاط من المحرمات والغرر والربا، ومطابقة العقود لمعايير AAOIFI.',
            impact: 'حماية أموال المودعين والمستثمرين وترسيخ الثقة المقاصدية.',
            metric: 'مطابقة 100% لمعايير AAOIFI'
          }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedAuditModule(item.id as any)}
            className={`p-4 rounded-xl border text-right transition-all flex flex-col justify-between ${
              selectedAuditModule === item.id
                ? 'border-emerald-600 bg-emerald-50/70 shadow-xs ring-1 ring-emerald-500'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">{item.title}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                {item.application}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[10px] text-emerald-800 font-semibold font-mono">
              {item.metric}
            </div>
          </button>
        ))}
      </div>

      {/* Deep-dive Interactive Inspection Pane */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs text-emerald-700 font-semibold">
              المشروع قيد الفحص الآلي
            </span>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">
              مزرعة الواحات الذكية للزراعة المائية والطاقة الشمسية (ورقلة)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
              مؤشر الجدارة التقديري: 94 / 100
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Risk & Failure Probability */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">تحليل مخاطر المشروع (الذكاء التنبؤي)</span>
              <TrendingUp className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>احتمالية التعثر المالي في السنة الأولى:</span>
                <span className="font-bold text-emerald-700 font-mono">منخفضة جداً (4.2%)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>حساسية تغير أسعار الطاقة والمعدات:</span>
                <span className="font-semibold text-slate-800 font-mono">متوسطة (12%)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>كفاءة التدفق النقدي التشغيلي:</span>
                <span className="font-semibold text-emerald-700 font-mono">إيجابي من الشهر 4</span>
              </div>
            </div>
          </div>

          {/* Card 2: Sharia Audit Checklist */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">فحص الامتثال الشرعي التلقائي</span>
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>طبيعة النشاط زراعية غذائية مباحة شرعاً</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>صيغة العقد: مشاركة متناقصة معيار 12 AAOIFI</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>الربح محدد بنسبة مشاعة (65% / 35%) دون ضمان</span>
              </div>
            </div>
          </div>

          {/* Card 3: AML & Legal Compliance */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">مكافحة غسيل الأموال ونظام COSOB</span>
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>التحقق من الهوية الوطنية (KYC) للمؤسسين مكتمل</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>خلو الحسابات من أي شبهة تمويل غير قانوني</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>تطابق مع شروط المستشار الاستثماري نظام 01-23</span>
              </div>
            </div>
          </div>

        </div>

        {/* AI Generated Recommendation for the Credit Committee */}
        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-emerald-700" />
              <span>مذكرة التوصية الآلية المرفوعة للجنة الاعتماد المختصة (تقرير استشاري):</span>
            </span>
            <span className="text-[11px] font-mono text-emerald-800">تاريخ التوليد: اليوم</span>
          </div>
          <p className="text-xs text-emerald-900 leading-relaxed">
            «بناءً على نتائج فحص التدفقات النقدية المخصومة ومطابقة المخطط المحاسبي الصادر عن الأستاذ عبد الرحمن بوزيان، ومطابقة شروط معيار AAOIFI رقم 12، يوصي المحرك بإحالة الملف للاعتماد وطرحه لحملة تمويل بقيمة 8,500,000 دج لمدة 30 يوماً. ويبقى القرار النهائي للجنة الاعتماد في أجل أقصاه 10 أيام.»
          </p>
        </div>
      </div>
    </div>
  );
};
