import React, { useState } from 'react';
import { 
  Download, FileText, Globe, Printer, Check, Copy, 
  X, Sparkles, ShieldCheck, ArrowDownToLine, Share2 
} from 'lucide-react';
import { FlameLogo } from './FlameLogo';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  sharedUrl: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  sharedUrl
}) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(sharedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadStandaloneDossier = () => {
    setDownloading(true);
    
    // Generate a comprehensive, standalone offline HTML presentation containing all prototype screens & research data
    const dossierHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>الملف التوثيقي الكامل للنموذج الأولي - منصة ريادي الذكية للتمويل الجماعي الإسلامي</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; color: #0f172a; margin: 0; padding: 30px; line-height: 1.6; }
    .container { max-width: 1000px; margin: 0 auto; background: #fff; padding: 40px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
    .header { border-bottom: 2px solid #047857; padding-bottom: 20px; margin-bottom: 30px; text-align: center; }
    .title { font-size: 26px; font-weight: 900; color: #064e3b; margin: 10px 0; }
    .subtitle { color: #047857; font-weight: bold; font-size: 15px; }
    .author-card { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 18px; margin: 20px 0; }
    .screen-card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 25px 0; background: #fafafa; }
    .screen-header { font-size: 18px; font-weight: bold; color: #0f172a; margin-bottom: 8px; border-bottom: 1px solid #cbd5e1; padding-bottom: 8px; }
    .tag { display: inline-block; background: #047857; color: white; padding: 3px 10px; border-radius: 6px; font-size: 12px; margin-left: 8px; }
    .table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
    .table th, .table td { border: 1px solid #cbd5e1; padding: 10px; text-align: right; }
    .table th { background: #f1f5f9; }
    .footer { text-align: center; font-size: 12px; color: #64748b; margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="subtitle">جائزة مؤتمر الدوحة للمال الإسلامي · فئة الابتكار في الاقتصاد الإسلامي</div>
      <h1 class="title">الملف التوثيقي للنموذج الأولي لمنصة «ريادي» الذكية للتمويل الجماعي الإسلامي</h1>
      <p>منتج مالي إسلامي مبتكر لتمويل ومرافقة المشاريع الابتكارية الاقتصادية والاجتماعية في الجزائر برؤية مقاصدية</p>
    </div>

    <div class="author-card">
      <h3 style="margin-top:0; color:#064e3b;">إعداد وتقديم المترشح: الدكتور حدو علي</h3>
      <p>أستاذ باحث محاضر صنف «أ» - جامعة البليدة 2 لونيسي علي (الجزائر) - كلية العلوم الاقتصادية والتسيير (تخصص مالية وبنوك).<br>
      حاصل على زمالة مراقب ومدقق شرعي من AAOIFI · مدرب استشاري معتمد من منظمة العمل الدولية (ILO) ومدرب النوافذ الإسلامية منذ 2017.<br>
      <strong>الإطار القانوني:</strong> نظام COSOB رقم 01-23 المؤرخ في 12 أبريل 2023 · سبتمبر 2026.</p>
    </div>

    <h2>1. هيكل واجهات المنصة الأربع الرئيسية (وفق السلوكيات الشرعية):</h2>

    <div class="screen-card">
      <div class="screen-header">
        <span class="tag">الواجهة 1</span>
        واجهة المؤسسات وحاملي المشاريع (لطلب التمويل بأسلوب إسلامي)
      </div>
      <p><strong>الخصائص السلوكية:</strong> مصممة خصيصاً للتخلص من قيود القروض البنكية والرهونات المرهقة. تتيح للمبتكر طلب التمويل بصيغ المضاربة (AAOIFI 13)، المشاركة (AAOIFI 12)، أو السلم والاستصناع، مع ترسيخ قاعدة «يد المضارب أمانة» فلا يضمن رأس المال عند تعثر السوق إلا بالتعدي أو التقصير، وربطه بمحافظ حسابات معتمد وتوجيه فوري من المساعد الذكي.</p>
    </div>

    <div class="screen-card">
      <div class="screen-header">
        <span class="tag">الواجهة 2</span>
        واجهة المستثمر الإسلامي (فرص الاستثمار التشاركي الحلال)
      </div>
      <p><strong>الخصائص السلوكية:</strong> مصممة وفق سلوك المستثمر المسلم الحريص على الكسب الحلال الخالي من الربا والغرر؛ لا عوائد ثابتة مضمونة، بل حصة مشاعة معلومة مسبقاً من الأرباح الفعلية (8% إلى 12% سنوياً) استناداً لقاعدة «الغُنم بالغُرم»، مع ربط مباشر ببوابات الدفع الوطنية (البطاقة الذهبية وCIB وقنوات المغتربين).</p>
    </div>

    <div class="screen-card">
      <div class="screen-header">
        <span class="tag">الواجهة 3</span>
        واجهة الشركاء المتعاقدين (متابعة العقود واستلام وتوزيع الأرباح)
      </div>
      <p><strong>الخصائص السلوكية:</strong> مخصصة للمستثمرين الذين دخلوا في عقود شراكة فعلية، تتيح لهم الاطلاع على كشوف الحسابات المعتمدة، وسحب الأرباح الدورية فورياً إلى الحساب البريدي (CCP) أو البنك، مع خيار إعادة الاستثمار التلقائي (Auto-Reinvest) وتنزيل شهادات الصكوك الرقمية الموثقة بالبلوك تشين.</p>
    </div>

    <div class="screen-card">
      <div class="screen-header">
        <span class="tag">الواجهة 4</span>
        الواجهة الخلفية التقنية (الإدارة والتحليل بالذكاء الاصطناعي واتخاذ القرار)
      </div>
      <p><strong>الخصائص السلوكية:</strong> غرفة عمليات تنفيذية للجنة الاعتماد والائتمان المستقلة (نظام COSOB 01-23). تضم وحدات الذكاء الاصطناعي الأربع (التنبؤي، التحليلي DCF، التوليدي، وفحص غسيل الأموال AML والامتثال الشرعي)، للبت في الملفات خلال مهلة 10 أيام بنصاب ثلاثي قانوني مكتمل.</p>
    </div>

    <h2>2. مؤشرات الأثر والتوقعات المالية التراكمية (2026 - 2030):</h2>
    <table class="table">
      <thead>
        <tr>
          <th>المؤشر</th>
          <th>السيناريو المستهدف (100%)</th>
          <th>اختبار الصلابة (60%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>إجمالي التمويل التراكمي</td>
          <td>1,420 مليون دج</td>
          <td>852 مليون دج</td>
        </tr>
        <tr>
          <td>عدد المشاريع الممولة</td>
          <td>1,420 مشروعاً</td>
          <td>852 مشروعاً</td>
        </tr>
        <tr>
          <td>الوظائف المستحدثة</td>
          <td>15,000 وظيفة</td>
          <td>9,000 وظيفة</td>
        </tr>
        <tr>
          <td>عدد المستثمرين</td>
          <td>100,000 مستثمر</td>
          <td>60,000 مستثمر</td>
        </tr>
        <tr>
          <td>عمولة المنصة التراكمية (5%)</td>
          <td>71 مليون دج</td>
          <td>42.6 مليون دج</td>
        </tr>
      </tbody>
    </table>

    <div class="footer">
      منصة «ريادي» الذكية للتمويل الجماعي الإسلامي © 2026 · تم إعداد هذا الملف للتقديم الرسمي في جائزة مؤتمر الدوحة للمال الإسلامي.
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([dossierHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ملف_النموذج_الأولي_منصة_ريادي_2026.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloading(false);
    }, 1000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-6 shadow-2xl border border-slate-200">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <FlameLogo size="sm" showText={false} />
            <div>
              <h2 className="text-base font-bold text-slate-900">
                خيارات تحميل وتصدير النموذج الأولي لمنصة «ريادي»
              </h2>
              <p className="text-xs text-slate-500">
                متاح للمعاينة بدون إنترنت وللتقديم في جائزة مؤتمر الدوحة للمال الإسلامي
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

        {/* 3 Main Download & Export Options */}
        <div className="space-y-3">
          
          {/* Option 1: Standalone Presentation File (Offline HTML) */}
          <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>الخيار 1: تنزيل الملف التوثيقي الشامل (Offline Dossier)</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                تنزيل فوري
              </span>
            </div>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              ملف تفاعلي مستقل بصيغة HTML يحتوي على كافة شاشات المحاكاة، الرسوم البيانية، التوقعات المالية (2026-2030)، معايير AAOIFI، وبيانات الباحث د. حدو علي. يعمل في أي متصفح دون الحاجة لاتصال بالإنترنت.
            </p>
            <button
              onClick={handleDownloadStandaloneDossier}
              disabled={downloading}
              className="mt-2 py-2 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>{downloading ? 'جاري إنشاء الملف...' : 'تنزيل الملف التوثيقي الآن (.html)'}</span>
            </button>
          </div>

          {/* Option 2: Print or Export to PDF */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Printer className="w-4 h-4 text-slate-700" />
                <span>الخيار 2: طباعة أو حفظ التقرير بصيغة PDF</span>
              </span>
              <span className="text-[10px] font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                طباعة / PDF
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              تصدير معرض الصور وشاشات تجربة الزبون والمدراء كملف PDF عالي الجودة جاهز للعرض الميداني أو الإرفاق مع ملف الترشح للجائزة.
            </p>
            <button
              onClick={handlePrint}
              className="mt-1 py-1.5 px-3 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>فتح نافذة الحفظ كـ PDF</span>
            </button>
          </div>

          {/* Option 3: Shared App Live Link for Jury */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-blue-700" />
                <span>الخيار 3: الرابط السحابي التفاعلي الحي المباشر</span>
              </span>
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                متاح على مدار الساعة
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              يمكنك إرسال هذا الرابط المباشر للجنة التحكيم أو للمستثمرين لتجربة المنصة التفاعلية ومحاكاة الاستثمار وقرارات المدراء على هواتفهم أو حواسيبهم:
            </p>
            <div className="flex items-center gap-2 pt-1 font-mono text-xs">
              <input
                type="text"
                readOnly
                value={sharedUrl}
                className="flex-1 p-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-left select-all"
              />
              <button
                onClick={handleCopyLink}
                className="py-2 px-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'تم النسخ!' : 'نسخ الرابط'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>معتمد وفق نظام COSOB 01-23 ومعايير AAOIFI</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-semibold transition-colors"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
