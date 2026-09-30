import React, { useState } from 'react';
import { 
  Layers, Smartphone, Monitor, BrainCircuit, Blocks, CreditCard, 
  ShieldCheck, CheckCircle2, ChevronLeft, Award, Lock, Server 
} from 'lucide-react';
import { SYSTEM_ARCHITECTURE_LAYERS } from '../../data/mockData';

export const ArchitectureDiagramScreen: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(1);

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>الشكل (1) وال работа 6.1: المكونات الخمسة للبنية التقنية المقترحة</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          المعمارية التقنية الخماسية لمنصة «ريادي» (TRL 4-5)
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          بنية متكاملة من 5 طبقات مستقلة تجمع بين واجهات الويب والهاتف للمتعاملين الثلاثة، ومحرك الذكاء الاصطناعي، وسلسلة كتل مرخصة، وبوابات الدفع الجزائرية، مع طبقة حماية سيبرانية ومصادقة ثنائية غير قابلة للاختراق.
        </p>
      </div>

      {/* Visual Architectural Diagram Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Layer Stack (Figure 1 as interactive blocks) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700 px-1">
            <span>مخطط الطبقات التقنية الخمس (انقر لاستعراض التفاصيل):</span>
            <span className="font-mono text-emerald-800 font-bold">الشكل (1)</span>
          </div>

          {[
            {
              num: 1,
              title: '1. واجهة المستخدم (تطبيق ويب وهاتف)',
              subtitle: 'للمبتكرين والممولين والمرافقين مع روبوت دردشة ذكي',
              icon: Monitor,
              color: 'emerald'
            },
            {
              num: 2,
              title: '2. محرك الذكاء الاصطناعي للحوكمة',
              subtitle: 'وحدات تنبؤية وتحليلية وتوليدية وتفاعلية تدعم لجنة الاعتماد',
              icon: BrainCircuit,
              color: 'slate'
            },
            {
              num: 3,
              title: '3. البلوك تشين والعقود الذكية',
              subtitle: 'سلسلة كتل مرخصة تسجل التمويالت وتوزع الأرباح آلياً وتتيح التتبع',
              icon: Blocks,
              color: 'emerald'
            },
            {
              num: 4,
              title: '4. بوابات الدفع الوطنية',
              subtitle: 'قنوات الدفع الإلكتروني بالدينار (الذهبية، CIB، محافظ الهاتف، والمغتربين)',
              icon: CreditCard,
              color: 'slate'
            },
            {
              num: 5,
              title: '5. نظام الأمان والامتثال السيبراني',
              subtitle: 'تشفير مستقل، مصادقة ثنائية، وسجلات تدقيق غير قابلة للتعديل',
              icon: Lock,
              color: 'emerald'
            }
          ].map((layer) => {
            const Icon = layer.icon;
            const isSelected = selectedLayer === layer.num;
            return (
              <button
                key={layer.num}
                onClick={() => setSelectedLayer(layer.num)}
                className={`w-full p-4 rounded-xl border text-right transition-all flex items-center justify-between group ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/80 shadow-xs ring-1 ring-emerald-500'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm ${
                    isSelected ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {layer.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {layer.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronLeft className={`w-4 h-4 transition-transform ${
                  isSelected ? 'text-emerald-700 -translate-x-1' : 'text-slate-300'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Selected Layer Deep-Dive View */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs text-emerald-700 font-semibold font-mono">
                  الطبقة المحددة: {selectedLayer} من 5
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {SYSTEM_ARCHITECTURE_LAYERS[selectedLayer - 1].title}
                </h3>
              </div>
              <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-1 rounded font-mono">
                TRL 4-5
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {SYSTEM_ARCHITECTURE_LAYERS[selectedLayer - 1].description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-800">المكونات الفرعية والآليات التنفيذية:</span>
              <div className="space-y-2">
                {SYSTEM_ARCHITECTURE_LAYERS[selectedLayer - 1].components.map((comp, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cybersecurity & TRL Compliance Callout */}
          <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>مستوى الجاهزية التكنولوجية والأمن السيبراني (القسم 6.2 و 6.3):</span>
            </div>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              تشفير TLS 1.3 لنقل البيانات وتشفير المعاملات التخزينية، مصادقة ثنائية إلزامية، وفحص أمني دوري للعقود الذكية قبل النشر لحماية أموال المستثمرين وخصوصية المبتكرين.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
