import React from 'react';
import { ShieldCheck, X, FileText, CheckCircle2, Scale, ExternalLink } from 'lucide-react';
import { AAOIFI_STANDARDS } from '../data/mockData';

interface ShariaFrameworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShariaFrameworkModal: React.FC<ShariaFrameworkModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 space-y-5 shadow-2xl border border-slate-200 max-h-[88vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                الإطار الشرعي والمقاصدي لمنصة «ريادي» (معايير AAOIFI)
              </h2>
              <p className="text-xs text-slate-500">
                القسم 4 والجدول 2 من الورقة العلمية للدكتور حدو علي
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 text-lg font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Maqasid Framework Summary */}
        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-xs space-y-2 text-emerald-950">
          <div className="font-bold flex items-center gap-2 text-emerald-900">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>الأساس الشرعي والمقاصدي للنموذج:</span>
          </div>
          <ul className="space-y-1 text-emerald-800 list-disc list-inside leading-relaxed text-[11px]">
            <li><strong>قاعدة «الغُنم بالغُرم»:</strong> يستحق الممول الربح لأنه يتحمل مخاطرة رأس المال دون ضمان، وهو ما يميز المشاركة والمضاربة عن الإقراض الربوي بفائدة.</li>
            <li><strong>أمانة المضارب:</strong> لا يضمن المبتكر رأس المال إلا في حال التعدي أو التفريط أو مخالفة الشروط المتفق عليها.</li>
            <li><strong>جواز الأجر على الوكالة والوساطة:</strong> عمولة المنصة (5%) أجر معلوم مقابل خدمة وساطة وتطوير تقني، لا فوائد مركبة ولا بيع دين.</li>
            <li><strong>جواز التعاقد بوسائل الاتصال الحديثة:</strong> استناداً لقرار مجمع الفقه الإسلامي الدولي، والذي عليه تُبنى العقود الذكية على البلوك تشين.</li>
          </ul>
        </div>

        {/* Standards List */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-800">
            المعايير المرجعية الصادرة عن هيئة المحاسبة والمراجعة للمؤسسات المالية الإسلامية (AAOIFI):
          </h3>
          <div className="space-y-2">
            {AAOIFI_STANDARDS.map((std) => (
              <div key={std.number} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{std.name}</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                    معتمد
                  </span>
                </div>
                <div className="text-[11px] text-emerald-800">نطاق الاستخدام: {std.scope}</div>
                <div className="text-[11px] text-slate-600 leading-relaxed">{std.rule}</div>
              </div>
            ))}
          </div>
        </div>

        {/* COSOB Regulation Notice */}
        <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
          <div className="font-bold text-slate-800">الإطار التنظيمي والقانوني الجزائري:</div>
          <p>
            تعمل المنصة في إطار النظام رقم 01-23 المؤرخ في 12 أبريل 2023 الصادر عن لجنة تنظيم عمليات البورصة ومراقبتها (COSOB)، المحدد لشروط اعتماد وممارسة ومراقبة مستشاري الاستثمار التساهمي، والمصادق عليه بقرار وزير المالية في 4 سبتمبر 2023.
          </p>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
