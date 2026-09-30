import React, { useState } from 'react';
import { 
  Download, Printer, ArrowRight, Eye, CheckCircle2, ShieldCheck, 
  Smartphone, Monitor, Sparkles, Building, Coins, Award, Briefcase, 
  Wallet, BrainCircuit, Layers, Scale, Check, Clock, TrendingUp 
} from 'lucide-react';
import { PrototypeScreenId } from '../types';
import { FlameLogo } from './FlameLogo';

interface ImageGalleryExporterProps {
  onBackToSimulator: () => void;
  onSelectScreen: (screenId: PrototypeScreenId) => void;
}

export const ImageGalleryExporter: React.FC<ImageGalleryExporterProps> = ({
  onBackToSimulator,
  onSelectScreen
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'customer' | 'management' | 'tech'>('all');

  const prototypeCards = [
    {
      id: 'customer_portfolio' as PrototypeScreenId,
      screenNumber: 'الصورة 01',
      categoryType: 'customer',
      pageRef: 'الصفحة 4 و 11 (القسمان 4 و 9.3)',
      title: 'تجربة المستخدم (الزبون): محفظة المستثمر الذكية وتتبع الأرباح',
      subtitle: 'Customer / Investor Experience & Real-Time Portfolio',
      description: 'واجهة متقدمة للمستثمر تتيح إدارة المحفظة التشاركية، ومتابعة الأرباح المستحقة بنسبة مشاعة (8-12% سنوياً)، وتتبع الأثر التنموي (عدد الوظائف المستحدثة)، مع ميزة إعادة الاستثمار التلقائي وسحب الأرباح عبر البطاقة الذهبية وCIB.',
      visualMockup: (
        <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <FlameLogo size="sm" showText={false} />
              <span className="text-xs font-bold text-white">محفظة المستثمر التشاركي</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">DZD · الرصيد: 340,000 دج</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-slate-800/80 p-2 rounded border border-slate-700">
              <span className="text-slate-400 block">الأرباح التراكمية:</span>
              <span className="text-emerald-400 font-bold font-mono text-xs">+42,800 دج</span>
            </div>
            <div className="bg-slate-800/80 p-2 rounded border border-slate-700">
              <span className="text-slate-400 block">الأثر المقاصدي:</span>
              <span className="text-white font-bold font-mono text-xs">7 وظائف جديدة</span>
            </div>
          </div>
          <div className="bg-emerald-950/60 p-2 rounded border border-emerald-800/60 text-[10px] flex items-center justify-between text-emerald-200">
            <span>مزرعة الواحات (مشاركة 12%)</span>
            <span className="font-bold text-emerald-400 font-mono">+18,200 دج أرباح</span>
          </div>
        </div>
      ),
      highlights: [
        'تجربة رقمية يسيرة لصغار المدخرين والمغتربين لتعزيز الشمول المالي (65% بلا حساب حالياً)',
        'تطبيق مباشر لقاعدة «الغُنم بالغُرم» الشرعية دون عوائد ربوية مشروطة',
        'شهادة الصك الذكي ودفتر أستاذ البلوك تشين لكل اكتتاب'
      ]
    },
    {
      id: 'manager_console' as PrototypeScreenId,
      screenNumber: 'الصورة 02',
      categoryType: 'management',
      pageRef: 'الصفحة 6 و 7 (القسمان 5 و 6.1)',
      title: 'تجربة المدراء: لوحة اتخاذ القرارات ولجنة الاعتماد والائتمان',
      subtitle: 'Executive Management & Committee Decision-Making Console',
      description: 'لوحة قيادة تنفيذية لأعضاء لجنة الاعتماد (رئيس اللجنة، مراقب شرعي، ومحافظ حسابات) تفحص ملفات المشاريع وتبت فيها خلال أجل 10 أيام وفق نظام COSOB 01-23، مدعومة بمؤشرات الذكاء الاصطناعي التنبؤي وفحص غسيل الأموال.',
      visualMockup: (
        <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-emerald-400">لجنة الاعتماد والائتمان COSOB</span>
            <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded font-mono">نصاب 3/3 مكتمل</span>
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div className="bg-slate-800 p-2 rounded flex justify-between items-center border border-slate-700">
              <span>مشروع الواحات (ورقلة): 8.5 م.دج</span>
              <span className="text-emerald-400 font-bold">مصادق عليه ✓</span>
            </div>
            <div className="bg-slate-800 p-2 rounded flex justify-between items-center border border-slate-700">
              <span>عيادات شفاء (البليدة): 6.0 م.دج</span>
              <span className="text-amber-400 font-bold">متبقي 5 أيام للقرار</span>
            </div>
          </div>
          <div className="p-2 bg-emerald-900/40 rounded border border-emerald-700/60 text-[10px] text-emerald-200">
            مؤشر الجدارة التنبؤي للذكاء: 94% · فحص AML: سليم
          </div>
        </div>
      ),
      highlights: [
        'إدارة دورة القرار التنفيذي في أجل أقصاه 10 أيام مع توثيق أسباب التحفظ',
        'تكامل ثلاثي الأركان: (الذكاء الاصطناعي + محافظ الحسابات + الهيئة الشرعية)',
        'متابعة حية للسيولة الاحتياطية (18.5%) ونسبة التعثر المنخفضة (0.8%)'
      ]
    },
    {
      id: 'marketplace' as PrototypeScreenId,
      screenNumber: 'الصورة 03',
      categoryType: 'customer',
      pageRef: 'الصفحة 4 و 8 (القسمان 4 و 7)',
      title: 'واجهة استعراض المشاريع الاستثمارية والاجتماعية',
      subtitle: 'Islamic Participatory Crowdfunding Marketplace',
      description: 'سوق المشاريع الابتكارية المتاحة للاكتتاب بالدينار الجزائري، مصنفة وفق مسار الاستثمار (المشاركة والمضاربة) والمسار الاجتماعي (القرض الحسن والتبرع)، مع مؤشرات الإنجاز ونسب توزيع الأرباح وفق معايير AAOIFI.',
      visualMockup: (
        <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-white">استكشاف المشاريع الاستثمارية</span>
            <span className="text-[10px] text-emerald-400">1,420 م.دج مستهدفة</span>
          </div>
          <div className="p-2.5 bg-slate-800/80 rounded border border-slate-700 space-y-1.5 text-[10px]">
            <div className="flex justify-between font-bold">
              <span className="text-white">تدوير البلاستيك لمواد البناء</span>
              <span className="text-emerald-400">مشاركة (معيار 12)</span>
            </div>
            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[88%]" />
            </div>
            <div className="flex justify-between text-slate-400 text-[9px] font-mono">
              <span>تم جمع 10.5 م.دج (88%)</span>
              <span>عائد متوقع 11-14%</span>
            </div>
          </div>
          <div className="text-[10px] text-slate-400 flex items-center justify-between">
            <span>دفع بالذهبية وCIB</span>
            <span className="text-emerald-300 font-bold">معتمد شرعياً ✓</span>
          </div>
        </div>
      ),
      highlights: [
        'معاينة مؤشرات التمويل بالدينار الجزائري وحصص اقتسام الربح',
        'تغطية قطاعات حيوية: الاقتصاد الأخضر، الصيدلة، الفلاحة، والاقتصاد الرقمي',
        'ربط ببوابات الدفع الوطنية وقنوات المغتربين الجزائريين'
      ]
    },
    {
      id: 'entrepreneur' as PrototypeScreenId,
      screenNumber: 'الصورة 04',
      categoryType: 'customer',
      pageRef: 'الصفحة 6 (القسم 5)',
      title: 'بوابة المبتكر والمساعد الذكي التفاعلي (AI Chatbot)',
      subtitle: 'Entrepreneur Onboarding & AI Advisory Chatbot',
      description: 'واجهة خاصة لحاملي المشاريع والشركات الناشئة لرفع مخطط العمل ودراسة الجدوى ومتابعة المراحل السبع المعتمدة، مع روبوت دردشة ذكي للإرشاد الشرعي والمحاسبي الفوري.',
      visualMockup: (
        <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-white">المساعد الذكي (AI Chatbot)</span>
            <span className="text-[10px] text-emerald-400">مرحلة 2 من 7</span>
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div className="bg-slate-800 p-2 rounded text-slate-300 leading-relaxed border border-slate-700">
              «في صيغة المضاربة لا تضمن رأس المال إلا بالتعدي أو التقصير، وقسمة الربح تكون شائعة معلنة مسبقاً.»
            </div>
            <div className="p-2 bg-emerald-950/70 border border-emerald-800/70 rounded text-emerald-200">
              محافظ الحسابات المشرف: أ. عبد الرحمن بوزيان (معتمد)
            </div>
          </div>
          <div className="text-[9px] text-slate-400 flex justify-between">
            <span>قرار اللجنة في أجل 10 أيام</span>
            <span className="text-emerald-400 font-bold">جاهزية التقديم 100%</span>
          </div>
        </div>
      ),
      highlights: [
        'تجسيد المراحل السبع المعتمدة في نظام COSOB 01-23',
        'مساعد ذكي يوجه المبتكر لاختيار الصيغة التعاقدية الشرعية الأنسب',
        'مرافقة مهنية إلزامية من محافظي الحسابات المعتمدين محلياً'
      ]
    },
    {
      id: 'blockchain' as PrototypeScreenId,
      screenNumber: 'الصورة 05',
      categoryType: 'tech',
      pageRef: 'الصفحة 4 و 7 (القسمان 4 و 6.1)',
      title: 'منظومة العقود الذكية وتوزيع الأرباح الآلي بالبلوك تشين',
      subtitle: 'Permissioned Blockchain & Automated Profit Smart Contracts',
      description: 'سلسلة كتل مرخصة تسجل عقود المشاركة والمضاربة، وتوزع الأرباح تلقائياً للمستثمرين فور مصادقة محافظ الحسابات، مع دفتر أستاذ مشفر غير قابل للتعديل.',
      visualMockup: (
        <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-emerald-400">العقد الذكي: توزيع الأرباح</span>
            <span className="text-[10px] font-mono text-slate-400">Block #10842</span>
          </div>
          <div className="p-2 bg-slate-800 rounded border border-slate-700 text-[10px] space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-400">الربح المحقق للدورة:</span>
              <span className="font-bold text-white font-mono">1,800,000 دج</span>
            </div>
            <div className="flex justify-between text-emerald-400 font-bold font-mono">
              <span>حصة المستثمرين (40%):</span>
              <span>720,000 دج</span>
            </div>
          </div>
          <div className="text-[9px] text-slate-400 flex justify-between font-mono">
            <span>TxHash: 0x7f9a8...3b2c1</span>
            <span className="text-emerald-400">تم التوزيع آلياً ✓</span>
          </div>
        </div>
      ),
      highlights: [
        'توزيع آلي دون تدخل بشري فور اعتماد القوائم المالية',
        'تشفير متقدم للمعامالت ومصادقة ثنائية إلزامية 2FA',
        'ربط فوري بقنوات الدفع بالدينار (الذهبية و CIB)'
      ]
    },
    {
      id: 'architecture' as PrototypeScreenId,
      screenNumber: 'الصورة 06',
      categoryType: 'tech',
      pageRef: 'الصفحة 7 (الشكل 1)',
      title: 'المعمارية التقنية الخماسية لمنصة ريادي (الشكل 1)',
      subtitle: '5-Layer Modular Architecture & TRL 4-5 Readiness',
      description: 'المخطط الهندسي للمكونات الخمسة للبنية التقنية: واجهة المستخدم، محرك الذكاء الاصطناعي، البلوك تشين، بوابات الدفع الوطنية، ونظام الأمان السيبراني المستقل.',
      visualMockup: (
        <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-2 font-sans text-[10px]">
          <div className="bg-emerald-900/50 p-1.5 rounded border border-emerald-700 text-center font-bold text-emerald-200">
            1. واجهة المستخدم (تطبيق ويب وهاتف مع Chatbot)
          </div>
          <div className="bg-slate-800 p-1.5 rounded border border-slate-700 text-center text-slate-300">
            2. محرك الذكاء الاصطناعي للحوكمة (تنبؤي وتحليلي)
          </div>
          <div className="bg-emerald-900/50 p-1.5 rounded border border-emerald-700 text-center font-bold text-emerald-200">
            3. البلوك تشين والعقود الذكية لتوزيع الأرباح
          </div>
          <div className="bg-slate-800 p-1.5 rounded border border-slate-700 text-center text-slate-300">
            4. بوابات الدفع الوطنية (الذهبية، CIB، والمغتربين)
          </div>
          <div className="bg-slate-800 p-1.5 rounded border border-slate-700 text-center text-slate-300">
            5. نظام الأمان والامتثال والتحقق من الهوية (KYC/AML)
          </div>
        </div>
      ),
      highlights: [
        'توثيق مباشر للشكل رقم (1) من ورقة الدكتور حدو علي',
        'مستوى الجاهزية التكنولوجية TRL 4-5 نحو TRL 8-9 للتشغيل',
        'هندسة متوافقة مع متطلبات أمن المعلومات والسيادة الرقمية'
      ]
    }
  ];

  const filteredCards = prototypeCards.filter(card => {
    if (activeFilter === 'all') return true;
    return card.categoryType === activeFilter;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 pb-16 print:p-0">
      
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs print:hidden">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToSimulator}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة للمحاكي التفاعلي</span>
          </button>
          <div>
            <h1 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FlameLogo size="sm" showText={false} />
              <span>معرض صور النموذج الأولي: تجربة الزبون والمدراء</span>
            </h1>
            <p className="text-xs text-slate-500">
              نماذج بصرية فائقة الاحترافية للمستثمرين وأعضاء لجنة الاعتماد (د. حدو علي - 2026)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة أو تصدير PDF للمؤتمر</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs for the Images Showcase */}
      <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-slate-200 shadow-xs text-xs font-semibold print:hidden">
        <span className="text-slate-500 px-2">تصنيف الصور:</span>
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            activeFilter === 'all' ? 'bg-emerald-800 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          كافة الصور ({prototypeCards.length})
        </button>
        <button
          onClick={() => setActiveFilter('customer')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            activeFilter === 'customer' ? 'bg-emerald-800 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          تجربة الزبون والمستثمر (Customer UX)
        </button>
        <button
          onClick={() => setActiveFilter('management')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            activeFilter === 'management' ? 'bg-emerald-800 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          تجربة المدراء والقرارات (Management Console)
        </button>
        <button
          onClick={() => setActiveFilter('tech')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            activeFilter === 'tech' ? 'bg-emerald-800 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          المعمارية والبلوك تشين (Tech & Smart Contracts)
        </button>
      </div>

      {/* Grid of the 6 High-Fidelity Prototype Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
          >
            {/* Visual Screen Preview Header with Real Graphic UI Simulation */}
            <div className="p-4 bg-slate-950 text-white space-y-3">
              <div className="flex items-center justify-between text-[11px] text-emerald-400 font-mono">
                <span className="font-bold flex items-center gap-1.5">
                  <FlameLogo size="sm" showText={false} />
                  <span>{card.screenNumber}</span>
                </span>
                <span className="text-slate-400">مرجع البحث: {card.pageRef}</span>
              </div>

              {/* Render High-Fidelity UI Mockup Inside Header */}
              {card.visualMockup}

              <div>
                <h3 className="text-sm font-bold text-white mt-1 leading-snug">
                  {card.title}
                </h3>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {card.subtitle}
                </div>
              </div>
            </div>

            {/* Description & Scientific Highlights */}
            <div className="p-5 space-y-4 flex-1">
              <p className="text-xs text-slate-600 leading-relaxed">
                {card.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-800">أبرز مواصفات الواجهة:</span>
                {card.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">نظام COSOB 01-23</span>
              <button
                onClick={() => {
                  onSelectScreen(card.id);
                  onBackToSimulator();
                }}
                className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>تشغيل الواجهة التفاعلية</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Award Assessment Conformity Note */}
      <div className="p-6 bg-gradient-to-r from-emerald-950 to-slate-900 text-white rounded-2xl border border-emerald-700/50 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
          <Award className="w-4 h-4" />
          <span>مطابقة معايير تقييم جائزة مؤتمر الدوحة للمال الإسلامي (الجدول 10)</span>
        </div>
        <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
          «تجمع منصة ريادي بين سلاسة تجربة المستخدم لصغار المدخرين، ودقة لوحة اتخاذ القرار للمدراء، مع الامتثال التام لمعايير AAOIFI الشرعية وتوطين من 220 إلى 400 جهة محاسبية وتمويلية في الجزائر لتمويل 1,420 مشروعاً ابتكارياً بقيمة 1,420 مليون دج.»
        </p>
      </div>

    </div>
  );
};
