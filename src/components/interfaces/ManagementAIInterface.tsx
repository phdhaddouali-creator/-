import React, { useState } from 'react';
import { 
  BrainCircuit, ShieldCheck, CheckCircle2, XCircle, AlertCircle, 
  FileSpreadsheet, Scale, BarChart3, Clock, Check, Layers, 
  Database, RefreshCw, Lock, Terminal 
} from 'lucide-react';
import { PROTOTYPE_PROJECTS } from '../../data/mockData';

export const ManagementAIInterface: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('prj-01');
  const [decisionNotes, setDecisionNotes] = useState<string>('');
  const [decisionsState, setDecisionsState] = useState<{ [key: string]: 'approved' | 'rejected' | 'amendment' | 'pending' }>({
    'prj-01': 'approved',
    'prj-02': 'pending',
    'prj-03': 'pending'
  });
  const [activeConsoleTab, setActiveConsoleTab] = useState<'decision' | 'ai_modules' | 'blockchain_nodes'>('decision');

  const selectedProject = PROTOTYPE_PROJECTS.find(p => p.id === selectedProjectId) || PROTOTYPE_PROJECTS[0];

  const handleExecuteDecision = (type: 'approved' | 'rejected' | 'amendment') => {
    setDecisionsState(prev => ({
      ...prev,
      [selectedProjectId]: type
    }));
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Interface Identity Banner */}
      <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
          <BrainCircuit className="w-3.5 h-3.5 text-emerald-400" />
          <span>الواجهة الرابعة: الواجهة الخلفية التقنية للإدارة والتحليل بالذكاء الاصطناعي واتخاذ القرار</span>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              منظومة الحوكمة التقنية والتحليل التنبؤي واتخاذ قرارات الاعتماد
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              غرفة عمليات رقمية مخصصة للجنة الاعتماد والائتمان، تجمع بين التحليل التنبؤي للذكاء الاصطناعي، الرقابة الشرعية المستقلة، وتدقيق محافظي الحسابات للبت في ملفات التمويل خلال أجل أقصاه 10 أيام عملاً بنظام COSOB رقم 01-23.
            </p>
          </div>

          {/* Committee Quorum Status */}
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 shrink-0 text-right">
            <div className="text-[11px] text-slate-400">نصاب لجنة الاعتماد المكتمل:</div>
            <div className="text-emerald-400 font-bold flex items-center gap-1.5 justify-end">
              <CheckCircle2 className="w-4 h-4" />
              <span>3 / 3 أعضاء حاضرون ومصوتون</span>
            </div>
            <div className="text-[10px] text-slate-400">
              رئيس اللجنة · مدقق شرعي معتمد AAOIFI · محافظ حسابات معتمد
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Tabs for Technical Console */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveConsoleTab('decision')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 ${
            activeConsoleTab === 'decision'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-slate-100'
          }`}
        >
          <Scale className="w-3.5 h-3.5" />
          <span>ملفات قيد القرار والاعتماد (مهلة 10 أيام)</span>
        </button>
        <button
          onClick={() => setActiveConsoleTab('ai_modules')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 ${
            activeConsoleTab === 'ai_modules'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-slate-100'
          }`}
        >
          <BrainCircuit className="w-3.5 h-3.5" />
          <span>محرك وحدات الذكاء الاصطناعي الأربع (Table 3)</span>
        </button>
        <button
          onClick={() => setActiveConsoleTab('blockchain_nodes')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 ${
            activeConsoleTab === 'blockchain_nodes'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-slate-100'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>سجل كتل البلوك تشين والأمان السيبراني</span>
        </button>
      </div>

      {/* Main Tab 1: Decision Hub */}
      {activeConsoleTab === 'decision' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Applications Queue (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span>قائمة المشاريع المودعة حديثاً:</span>
              <span className="font-mono text-emerald-800">3 مشاريع جاهزة</span>
            </div>

            <div className="space-y-2.5">
              {[
                { id: 'prj-01', title: 'مزرعة الواحات للزراعة المائية', wilaya: 'ورقلة', amount: '8.5 م.دج', days: 2, score: 94 },
                { id: 'prj-02', title: 'منصة شفاء للعيادات المتنقلة', wilaya: 'البليدة', amount: '6.0 م.دج', days: 5, score: 91 },
                { id: 'prj-03', title: 'تعاونية تدوير البلاستيك', wilaya: 'الجزائر العاصمة', amount: '12.0 م.دج', days: 8, score: 96 }
              ].map((item) => {
                const isSelected = selectedProjectId === item.id;
                const status = decisionsState[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProjectId(item.id)}
                    className={`w-full p-3.5 rounded-xl border text-right transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-emerald-700 bg-emerald-50/80 shadow-xs ring-1 ring-emerald-600'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] text-slate-500 font-medium">{item.wilaya}</span>
                        <h4 className="text-xs font-bold text-slate-900 mt-0.5">{item.title}</h4>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                        status === 'approved' 
                          ? 'bg-emerald-100 text-emerald-800'
                          : status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : status === 'amendment'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {status === 'approved' && 'تم الاعتماد ✓'}
                        {status === 'rejected' && 'مرفوض معلل'}
                        {status === 'amendment' && 'مطلوب تعديل'}
                        {status === 'pending' && `متبقي ${item.days} أيام`}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-[11px] text-slate-600 mt-3 pt-2 border-t border-slate-100 font-mono">
                      <span>التمويل: {item.amount}</span>
                      <span className="text-emerald-700 font-bold">جدارة الذكاء: {item.score}%</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Decision Workspace (8 Cols) */}
          <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs text-emerald-800 font-bold font-mono">
                  الملف قيد المراجعة: {selectedProject.id} · ولاية {selectedProject.wilaya}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  صاحب المشروع: {selectedProject.founder} · العقد المقترح: {selectedProject.aaoifiStandard}
                </p>
              </div>

              <div className="text-left font-mono">
                <span className="text-[11px] text-slate-400 block">المبلغ المطلوب:</span>
                <strong className="text-base text-emerald-800">
                  {(selectedProject.fundingGoalDZD / 1000000).toFixed(2)} مليون دج
                </strong>
              </div>
            </div>

            {/* Tripartite Evaluation Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-800 flex items-center justify-between">
                  <span>1. الذكاء التنبؤي والمالي</span>
                  <span className="text-emerald-700 font-mono">{selectedProject.aiFeasibilityScore}%</span>
                </div>
                <div className="text-[11px] text-slate-600 space-y-1">
                  <div>احتمالية التعثر: <strong className="text-emerald-700">3.8% (منخفضة)</strong></div>
                  <div>التدفق النقدي DCF: <strong className="text-slate-800">إيجابي</strong></div>
                  <div>فحص مكافحة غسيل الأموال: <strong className="text-emerald-700">سليم 100%</strong></div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-800 flex items-center justify-between">
                  <span>2. تقرير محافظ الحسابات</span>
                  <span className="text-emerald-700 font-bold">معتمد</span>
                </div>
                <div className="text-[11px] text-slate-600 space-y-1">
                  <div>المكتب: <strong>عبد الرحمن بوزيان</strong></div>
                  <div>الميزانية الافتتاحية: <strong>مطابقة ومحققة</strong></div>
                  <div>سلامة التكاليف: <strong>مصدق عليها</strong></div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-800 flex items-center justify-between">
                  <span>3. الهيئة الشرعية المستقلة</span>
                  <span className="text-emerald-700 font-bold">مطابق</span>
                </div>
                <div className="text-[11px] text-slate-600 space-y-1">
                  <div>المعيار: <strong>{selectedProject.aaoifiStandard}</strong></div>
                  <div>القسمة: <strong className="font-mono">{selectedProject.profitSharingRatio}</strong></div>
                  <div>الشرط: <strong>الغُنم بالغُرم دون ضمان</strong></div>
                </div>
              </div>
            </div>

            {/* Committee Voting Members Status */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <span className="text-xs font-bold text-slate-800 block">
                أصوات أعضاء لجنة الاعتماد المعتمدين:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-slate-800">رئيس اللجنة ومدير الاستثمار</div>
                    <div className="text-[10px] text-slate-400">الجدوى الفنية والتجارية</div>
                  </div>
                  <span className="text-emerald-700 font-bold text-xs">موافق ✓</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-slate-800">مراقب شرعي مستقل (AAOIFI)</div>
                    <div className="text-[10px] text-slate-400">عدم تعارض النشاط مع الشريعة</div>
                  </div>
                  <span className="text-emerald-700 font-bold text-xs">موافق ✓</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-slate-800">محافظ الحسابات المشرف</div>
                    <div className="text-[10px] text-slate-400">مطابقة التنظيم المحاسبي</div>
                  </div>
                  <span className="text-emerald-700 font-bold text-xs">موافق ✓</span>
                </div>
              </div>
            </div>

            {/* Execution Actions */}
            <div className="space-y-3 pt-2 border-t border-slate-100 text-xs">
              <label className="block font-semibold text-slate-700">
                ملاحظات وتوصيات قرار اللجنة (تُدرج في تقرير COSOB والعقد الذكي):
              </label>
              <textarea
                value={decisionNotes}
                onChange={(e) => setDecisionNotes(e.target.value)}
                placeholder="التأكيد على تقديم تقارير ربع سنوية لمحافظ الحسابات، وتفعيل عقد المشاركة المتناقصة تدريجياً..."
                rows={2}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              />

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => handleExecuteDecision('approved')}
                  className="py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>المصادقة والاعتماد النهائي (إطلاق الحملة لـ 30 يوماً)</span>
                </button>

                <button
                  onClick={() => handleExecuteDecision('amendment')}
                  className="py-2.5 px-3.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-semibold rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>طلب استكمال أو تعديل النسبة</span>
                </button>

                <button
                  onClick={() => handleExecuteDecision('rejected')}
                  className="py-2.5 px-3.5 bg-red-50 hover:bg-red-100 text-red-900 border border-red-200 font-semibold rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <XCircle className="w-4 h-4 text-red-700" />
                  <span>الرفض المعلل مع التحفظ المفصل</span>
                </button>
              </div>

              {decisionsState[selectedProjectId] === 'approved' && (
                <div className="p-3 bg-emerald-100/70 border border-emerald-300 rounded-xl text-emerald-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    تم اعتماد المشروع رسمياً! تم تفعيل حملة التمويل التشاركي وتوليد معلمات العقد الذكي على سلسلة الكتل.
                  </span>
                </div>
              )}
            </div>

          </div>

        </div>
      )}

      {/* Tab 2: 4 AI Governance Modules */}
      {activeConsoleTab === 'ai_modules' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            {
              title: '1. الذكاء التنبؤي (Predictive AI)',
              app: 'دراسة المخاطر الائتمانية والتنبؤ باحتمال التعثر وجدوى التوقعات.',
              impact: 'توجيه التمويل بدقة وخفض نسب التعثر.',
              score: 'دقة النموذج: 91.4%'
            },
            {
              title: '2. الذكاء التحليلي (Analytical AI)',
              app: 'تشخيص وضعية المشاريع وأثرها البيئي وتقييم التدفقات (DCF).',
              impact: 'تحسين توزيع التمويل في المراحل التالية.',
              score: 'تحليل مالي آلي شامل'
            },
            {
              title: '3. الذكاء التوليدي (Generative AI)',
              app: 'إنشاء التقارير ومذكرات العرض للمستثمرين وملخصات التقييم التنفيذي.',
              impact: 'تمكين غير المتخصصين من قراءة البيانات ومتابعتها.',
              score: 'توليد تقرير في 3 ثوانٍ'
            },
            {
              title: '4. فحص الامتثال الشرعي ومكافحة الجريمة',
              app: 'فحص خلو النشاط من المحرمات والغرر وفحص شبهات غسيل الأموال (AML).',
              impact: 'حماية أموال المودعين والمستثمرين وترسيخ الثقة.',
              score: 'مطابقة 100% لـ AAOIFI و COSOB'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
              <div>
                <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                <p className="text-slate-600 mt-2 leading-relaxed text-[11px]">{item.app}</p>
                <div className="mt-2 text-emerald-800 font-medium text-[11px]">{item.impact}</div>
              </div>
              <div className="pt-3 border-t border-slate-100 font-mono text-[10px] text-emerald-700 font-bold">
                {item.score}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Blockchain Nodes & Ledger */}
      {activeConsoleTab === 'blockchain_nodes' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-700" />
              <h3 className="text-base font-bold text-slate-900">
                سلسلة الكتل المرخصة (Permissioned Blockchain) وعقد الأمان
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">TRL 4-5 · SHA-256</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
              <span>Block #10842 · Tx: 0x7f9a8...3b2c1</span>
              <span>توزيع أرباح الربع الثاني: 1,800,000 دج</span>
              <span className="text-emerald-700 font-bold">تم التنفيذ آلياً ✓</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
              <span>Block #10841 · Tx: 0x3a4b1...8c9d2</span>
              <span>اكتتاب شريك جديد: 50,000 دج (الذهبية)</span>
              <span className="text-emerald-700 font-bold">موثق ومسجل ✓</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
