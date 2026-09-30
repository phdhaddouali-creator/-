import React from 'react';
import { 
  TrendingUp, Rocket, FileSpreadsheet, BrainCircuit, 
  HeartHandshake, CreditCard, ArrowLeft, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { PrototypeScreenId } from '../types';

interface ServicesSectionProps {
  onNavigate: (screen: PrototypeScreenId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const services = [
    {
      id: 'investment',
      targetScreen: 'marketplace' as PrototypeScreenId,
      badge: 'للمستثمرين والمدخرين',
      icon: TrendingUp,
      title: 'الاستثمار التشاركي الإسلامي (المشاركة والمضاربة)',
      description: 'استثمر مدخراتك في مشاريع ابتكارية حقيقية بأرباح مشاعة متوقعة بين 8% و12% سنوياً، متوافقة 100% مع معايير AAOIFI رقم 12 و13، دون ربا أو مديونية مشروطة.',
      features: ['توزيع عادل للأرباح وفق قاعدة الغُنم بالغُرم', 'دفع فوري بالدينار والبطاقة الذهبية و CIB', 'تقارير دورية معتمدة من محافظي الحسابات'],
      actionText: 'استكشف المشاريع وابدأ الاستثمار',
      color: 'emerald'
    },
    {
      id: 'funding',
      targetScreen: 'entrepreneur' as PrototypeScreenId,
      badge: 'لأصحاب المشاريع والشركات الناشئة',
      icon: Rocket,
      title: 'تمويل المشاريع الابتكارية والناشئة',
      description: 'احصل على تمويل بديل للقروض والرهون البنكية لحاملي علامة «مشروع مبتكر» والقرار 1275، مع إطلاق حملة اكتتاب لمدة 30 يوماً وتوزيع أرباح مؤمن عبر البلوك تشين.',
      features: ['لا شروط رهن أو كفالات عينية مرهقة', 'مرافقة مهنية لإعداد دراسة الجدوى ومخطط العمل', 'مساعد ذكي (AI Chatbot) للإرشاد الفوري'],
      actionText: 'قدّم طلب تمويل مشروعك',
      color: 'emerald'
    },
    {
      id: 'accompaniment',
      targetScreen: 'sharia_audit' as PrototypeScreenId,
      badge: 'للمحاسبين ومحافظي الحسابات',
      icon: FileSpreadsheet,
      title: 'المرافقة المحاسبية والتدقيق المالي المستمر',
      description: 'توطين شبكة مهنية تضم 220 إلى 400 جهة محاسبية وتدقيقية لمراجعة القوائم المالية، ومراقبة مسار الإنفاق الفعلي للمشاريع لحماية أموال الممولين من مخاطر التعثر.',
      features: ['اعتماد تقارير دورية لكل مشروع ممول', 'مطابقة معايير النظام المحاسبي المالي الجزائري', 'إيداع إلكتروني مباشر للتقارير على المنصة'],
      actionText: 'بوابة المحاسبين والرقابة',
      color: 'slate'
    },
    {
      id: 'ai_governance',
      targetScreen: 'manager_console' as PrototypeScreenId,
      badge: 'لجنة الاعتماد والائتمان COSOB',
      icon: BrainCircuit,
      title: 'التحليل الائتماني والرقابة الشرعية بالذكاء الاصطناعي',
      description: 'محرك ذكي يفحص ملفات الجدوى والتدفقات النقدية المخصومة (DCF)، ويتأكد من خلو النشاط من المحرمات وشبهات غسيل الأموال، لمساعدة لجنة الاعتماد في البت خلال 10 أيام.',
      features: ['تحليل تنبؤي باحتمالات النجاح ومخاطر السوق', 'فحص الامتثال الشرعي ومكافحة غسيل الأموال (AML)', 'لوحة تحكم تنفيذية لإصدار قرارات الاعتماد أو الرفض'],
      actionText: 'لوحة قرارات لجنة الاعتماد',
      color: 'slate'
    },
    {
      id: 'social',
      targetScreen: 'marketplace' as PrototypeScreenId,
      badge: 'للتكافل والمشاريع المجتمعية',
      icon: HeartHandshake,
      title: 'التمويل الاجتماعي (القرض الحسن والتبرع الوقفي)',
      description: 'مسار مخصص لتمويل المشاريع ذات الأثر البيئي والاجتماعي المباشر، مثل منصات التعليم الوقفي، دعم صغار الفلاحين، وتمكين الأسر المحتاجة لتصبح أسراً منتجة.',
      features: ['إحياء سنة القرض الحسن دون أي زيادة مشروطة', 'إعفاء المستفيد من أي ضمان في حال التعثر غير المتعمد', 'امتثال لمعيار AAOIFI 19 ومذكرة حوكمة الوقف GS 13'],
      actionText: 'استكشف مشاريع الأثر الاجتماعي',
      color: 'emerald'
    },
    {
      id: 'smart_contracts',
      targetScreen: 'customer_portfolio' as PrototypeScreenId,
      badge: 'للشفافية وإدارة الأرباح',
      icon: CreditCard,
      title: 'المحفظة الذكية وتوزيع الأرباح الآلي',
      description: 'سلسلة كتل مرخصة (Permissioned Blockchain) تسجل الاكتتابات وتوزع الأرباح تلقائياً إلى محافظ المستثمرين، مع خيار إعادة الاستثمار التلقائي بنقرة واحدة.',
      features: ['توزيع فوري للأرباح إلى الحساب البنكي أو البريدي CCP', 'صكوك رقمية موثقة برقم الكتلة والهاش المشفر', 'إعادة تدوير الأرباح في مشاريع جديدة لتراكم العائد'],
      actionText: 'افتح محفظتي الاستثمارية',
      color: 'emerald'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
          خدمات منصة «ريادي» للتمويل الجماعي الإسلامي في الجزائر
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          منظومة متكاملة لتمويل ومرافقة الاقتصاد الحقيقي
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          نربط بين حاملي المشاريع الابتكارية، صغار المدخرين، ومحافظي الحسابات المعتمدين، تحت إشراف هيئة رقابة شرعية مستقلة ونظام COSOB رقم 01-23.
        </p>
      </div>

      {/* Grid of 6 Clean Professional Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {service.description}
                  </p>
                </div>

                {/* Features Checkpoints */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate(service.targetScreen)}
                  className="w-full py-2.5 px-4 bg-slate-50 hover:bg-emerald-700 text-slate-700 hover:text-white font-bold text-xs rounded-xl border border-slate-200 hover:border-emerald-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>{service.actionText}</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
