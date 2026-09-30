import React, { useState } from 'react';
import { 
  ShieldCheck, AlertCircle, CheckCircle2, XCircle, FileSpreadsheet, 
  BrainCircuit, Users, TrendingUp, Clock, Scale, SlidersHorizontal, 
  ChevronRight, Check, X, ArrowUpRight, BarChart3, Filter 
} from 'lucide-react';
import { PROTOTYPE_PROJECTS } from '../../data/mockData';

export const ManagerDecisionConsoleScreen: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('prj-01');
  const [decisionNotes, setDecisionNotes] = useState<string>('');
  const [committeeDecisions, setCommitteeDecisions] = useState<{ [key: string]: 'approved' | 'rejected' | 'pending' | 'amendment' }>({
    'prj-01': 'approved',
    'prj-02': 'pending',
    'prj-03': 'pending'
  });
  const [activeTab, setActiveTab] = useState<'pending' | 'portfolio' | 'audit_log'>('pending');

  const selectedProject = PROTOTYPE_PROJECTS.find(p => p.id === selectedProjectId) || PROTOTYPE_PROJECTS[0];

  const handleMakeDecision = (status: 'approved' | 'rejected' | 'amendment') => {
    setCommitteeDecisions(prev => ({
      ...prev,
      [selectedProjectId]: status
    }));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner - Management & Decision Console */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>لوحة تحكم المدراء ولجنة الاعتماد والائتمان (Credit & Sharia Committee)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            نظام اتخاذ القرارات والتحليل الاستثماري والشرعي (نظام COSOB 01-23)
          </h1>
          <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
            البت في ملفات التمويل التشاركي خلال أجل أقصاه 10 أيام. تشمل اللجنة: ممثل الهيئة الشرعية، خبير التدقيق المحاسبي، ومدير المخاطر والائتمان.
          </p>
        </div>

        {/* Committee Active Quorum */}
        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 text-xs space-y-1.5 text-right">
          <div className="text-[11px] text-slate-400">النصاب القانوني للجنة:</div>
          <div className="font-bold text-emerald-300 flex items-center gap-1.5 justify-end">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>مكتمل (3 من 3 أعضاء حاضرين)</span>
          </div>
          <div className="text-[10px] text-slate-400">
            د. حدو علي (مراقب شرعي AAOIFI) · أ. بوزيان (محافظ حسابات) · م. بن سعيد (مخاطر)
          </div>
        </div>
      </div>

      {/* Console Sub-navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
            activeTab === 'pending'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-slate-100'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>ملفات قيد القرار (أجل 10 أيام)</span>
        </button>
        <button
          onClick={() => setActiveTab('portfolio')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
            activeTab === 'portfolio'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-slate-100'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>مؤشرات المحفظة والسيولة الحية</span>
        </button>
        <button
          onClick={() => setActiveTab('audit_log')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
            activeTab === 'audit_log'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-slate-100'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>سجل الحوكمة والرقابة الدورية</span>
        </button>
      </div>

      {activeTab === 'pending' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Application Queue (30%) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>قائمة المشاريع المعروضة للبت:</span>
              <span className="text-[11px] text-emerald-800 font-mono">3 مشاريع جاهزة</span>
            </div>

            <div className="space-y-2.5">
              {[
                { 
                  id: 'prj-01', 
                  title: 'مزرعة الواحات الذكية', 
                  sector: 'الاقتصاد الأخضر', 
                  wilaya: 'ورقلة', 
                  amount: '8.5 مليون دج',
                  daysLeft: 2,
                  status: committeeDecisions['prj-01'],
                  aiScore: 94
                },
                { 
                  id: 'prj-02', 
                  title: 'منصة شفاء للعيادات المتنقلة', 
                  sector: 'الصحة والصيدلة', 
                  wilaya: 'البليدة', 
                  amount: '6.0 مليون دج',
                  daysLeft: 5,
                  status: committeeDecisions['prj-02'],
                  aiScore: 91
                },
                { 
                  id: 'prj-03', 
                  title: 'تدوير البلاستيك لمواد البناء', 
                  sector: 'الفلاحة والبيئة', 
                  wilaya: 'الجزائر العاصمة', 
                  amount: '12.0 مليون دج',
                  daysLeft: 8,
                  status: committeeDecisions['prj-03'],
                  aiScore: 96
                }
              ].map((item) => {
                const isSelected = selectedProjectId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProjectId(item.id)}
                    className={`w-full p-3.5 rounded-xl border text-right transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 shadow-xs ring-1 ring-emerald-500'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[11px] text-slate-500">{item.wilaya} · {item.sector}</span>
                        <h4 className="text-xs font-bold text-slate-900 mt-0.5">{item.title}</h4>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                        item.status === 'approved' 
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : item.status === 'amendment'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {item.status === 'approved' && 'تم الاعتماد'}
                        {item.status === 'rejected' && 'مرفوض معلل'}
                        {item.status === 'amendment' && 'مطلوب تعديل'}
                        {item.status === 'pending' && `متبقي ${item.daysLeft} أيام`}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-600 mt-3 pt-2 border-t border-slate-100 font-mono">
                      <span>المبلغ: {item.amount}</span>
                      <span className="text-emerald-700 font-bold">جدارة الذكاء: {item.aiScore}/100</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Regulatory reminder callout */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <span className="font-bold text-slate-800">محددات المادة 14 (COSOB 01-23):</span>
              <p className="leading-relaxed">
                في حال الرفض، يلزم النظام إرفاق تقرير مفصل ومعلل يبين أسباب التحفظ المحاسبي أو الشرعي، ويحق لصاحب المشروع إعادة التقديم بعد تصحيح النقاط.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Decision Workspace (70%) */}
          <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            
            {/* Project Header & Meta */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs text-emerald-700 font-semibold font-mono">
                  معرف الملف: {selectedProject.id} · ولاية {selectedProject.wilaya}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  صاحب المشروع: {selectedProject.founder} · قطاع: {selectedProject.sector}
                </p>
              </div>

              <div className="text-left font-mono">
                <div className="text-xs text-slate-500">التمويل المطلوب</div>
                <div className="text-lg font-black text-emerald-800">
                  {(selectedProject.fundingGoalDZD / 1000000).toFixed(2)} مليون دج
                </div>
              </div>
            </div>

            {/* Tri-Partite Assessment Grid (AI, Certified Accountant, Sharia Board) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Pillar 1: AI Predictive Engine */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <BrainCircuit className="w-3.5 h-3.5 text-emerald-700" />
                    <span>فحص الذكاء التنبؤي</span>
                  </span>
                  <span className="text-xs font-bold text-emerald-700 font-mono">
                    {selectedProject.aiFeasibilityScore}%
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 space-y-1">
                  <div>احتمال التعثر: <strong className="text-emerald-700">3.8%</strong></div>
                  <div>تقييم DCF للتدفقات: <strong className="text-slate-800">إيجابي</strong></div>
                  <div>فحص مكافحة غسيل الأموال: <strong className="text-emerald-700">سليم (Clean)</strong></div>
                </div>
              </div>

              {/* Pillar 2: Certified Accountant (محافظ الحسابات) */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700" />
                    <span>محافظ الحسابات</span>
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                    معتمد
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 space-y-1">
                  <div>المكتب: <strong>عبد الرحمن بوزيان</strong></div>
                  <div>الميزانية الافتتاحية: <strong>مطابقة</strong></div>
                  <div>الجدوى المالية: <strong>11.5% عائد سنوي</strong></div>
                </div>
              </div>

              {/* Pillar 3: Sharia Board (هيئة الرقابة الشرعية) */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-emerald-700" />
                    <span>الهيئة الشرعية</span>
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                    مطابق
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 space-y-1">
                  <div>المعيار: <strong>{selectedProject.aaoifiStandard.split(' ')[0]} {selectedProject.aaoifiStandard.split(' ')[1]}</strong></div>
                  <div>نسبة الربح المشاعة: <strong className="font-mono">{selectedProject.profitSharingRatio}</strong></div>
                  <div>تطبيق: <strong>الغُنم بالغُرم دون ضمان</strong></div>
                </div>
              </div>

            </div>

            {/* Committee Voting Members Status */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-slate-800">أصوات أعضاء لجنة الاعتماد الرسمية:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-800">رئيس اللجنة ومدير الاستثمار</div>
                    <div className="text-[10px] text-slate-500">القرار الفني والتجاري</div>
                  </div>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    <span>موافق</span>
                  </span>
                </div>

                <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-800">ممثل الهيئة الشرعية المستقلة</div>
                    <div className="text-[10px] text-slate-500">مدقق معتمد AAOIFI</div>
                  </div>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    <span>موافق</span>
                  </span>
                </div>

                <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-800">محافظ الحسابات المشرف</div>
                    <div className="text-[10px] text-slate-500">مصاف المحاسبين الجزائري</div>
                  </div>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    <span>موافق</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Decision Notes & Action Execution */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-xs font-semibold text-slate-700">
                ملاحظات وتوصيات قرار اللجنة (تدرج في العقد الذكي وتقرير COSOB):
              </label>
              <textarea
                value={decisionNotes}
                onChange={(e) => setDecisionNotes(e.target.value)}
                placeholder="تأكيد التزام صاحب المشروع بتقديم تقارير ربع سنوية لمحافظ الحسابات، وتحديد نسبة التخارج التدريجي في صيغة المشاركة المتناقصة..."
                rows={2}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleMakeDecision('approved')}
                  className="py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>المصادقة والاعتماد النهائي (طرح الحملة لـ 30 يوماً)</span>
                </button>

                <button
                  onClick={() => handleMakeDecision('amendment')}
                  className="py-2.5 px-3.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-semibold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>طلب استكمال أو تعديل نسبة الربح</span>
                </button>

                <button
                  onClick={() => handleMakeDecision('rejected')}
                  className="py-2.5 px-3.5 bg-red-50 hover:bg-red-100 text-red-900 border border-red-200 font-semibold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <XCircle className="w-4 h-4 text-red-700" />
                  <span>رفض معلل بتقرير تحفظ مفصل</span>
                </button>
              </div>

              {committeeDecisions[selectedProjectId] === 'approved' && (
                <div className="p-3 bg-emerald-100/60 border border-emerald-300 rounded-xl text-xs text-emerald-900 flex items-center gap-2">
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

      {/* Portfolio & Liquidity Tab */}
      {activeTab === 'portfolio' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <span className="text-xs text-slate-500 font-medium">معدل التعثر الفعلي للمشاريع</span>
            <div className="text-3xl font-black text-emerald-800 font-mono">0.8%</div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              أقل بكثير من المعدل التقديري الحذر (5%) بفضل المرافقة الإلزامية من مكاتب المحاسبة.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <span className="text-xs text-slate-500 font-medium">متوسط العائد السنوي المحقق للممولين</span>
            <div className="text-3xl font-black text-emerald-800 font-mono">10.4%</div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              ضمن النطاق المستهدف المحدد في ملف الدكتور حدو علي (من 8% إلى 12% سنوياً).
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <span className="text-xs text-slate-500 font-medium">سيولة المحفظة الاحتياطية</span>
            <div className="text-3xl font-black text-slate-900 font-mono">18.5%</div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              محتفظ بها في حسابات بنكية إسلامية لتلبية طلبات التخارج وتسوية العمليات.
            </p>
          </div>
        </div>
      )}

      {/* Audit Log Tab */}
      {activeTab === 'audit_log' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-xs font-bold text-slate-800">سجل قرارات لجنة الاعتماد المسجل على البلوك تشين (غير قابل للتعديل):</h3>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
              <div>
                <span className="font-bold text-slate-900">اعتماد ملف مزرعة الواحات الذكية</span>
                <span className="text-[10px] text-slate-500 mr-2">قرار رقم CD-2026-084</span>
              </div>
              <span className="text-emerald-700 font-bold">مصدق بالأغلبية (3/3)</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
              <div>
                <span className="font-bold text-slate-900">اعتماد مصنع تدوير البلاستيك</span>
                <span className="text-[10px] text-slate-500 mr-2">قرار رقم CD-2026-083</span>
              </div>
              <span className="text-emerald-700 font-bold">مصدق بالأغلبية (3/3)</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
