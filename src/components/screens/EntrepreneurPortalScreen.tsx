import React, { useState } from 'react';
import { 
  FileText, UploadCloud, Bot, CheckCircle2, AlertCircle, Clock, 
  Send, ShieldAlert, Sparkles, Building, Briefcase, FileCheck2 
} from 'lucide-react';
import { WORKFLOW_STAGES } from '../../data/mockData';

export const EntrepreneurPortalScreen: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);
  const [projectTitle, setProjectTitle] = useState('مشروع روبوت تنظيف الألواح الشمسية في الجنوب');
  const [targetAmount, setTargetAmount] = useState('7500000');
  const [selectedContract, setSelectedContract] = useState('musharaka');
  const [accountantStatus, setAccountantStatus] = useState('verified');
  
  // Interactive Chatbot State
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'ai',
      text: 'أهلاً بك يا ريادي! أنا المساعد الذكي لمنصة «ريادي». أساعدك في إعداد ملف التمويل التشاركي المتوافق مع الشريعة ومعايير AAOIFI ونظام COSOB 01-23. هل تريد اختيار صيغة العقد الأنسب لمشروعك؟'
    },
    {
      sender: 'user',
      text: 'ما الفرق بين المشاركة والمضاربة لمشروعي التقني الناشئ؟'
    },
    {
      sender: 'ai',
      text: 'في عقد «المضاربة» (معيار AAOIFI 13): يقدم الممولون رأس المال بالكامل، وأنت تقدم الجهد والخبرة كـ«مضارب»، ويقتسم الربح بنسبة شائعة متفق عليها (مثلاً 60% لك و40% للمستثمرين)، ولا تضمن رأس المال إلا بالتعدي أو التقصير. أما في «المشاركة» (معيار 12): يساهم الطرفان في رأس المال والإدارة وتكون الخسارة بقدر الحصص.'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputMessage('');

    setTimeout(() => {
      let reply = 'شكراً لسؤالك. وفق ضوابط الهيئة الشرعية، يتم فحص النموذج المالي مع مكتب المحاسبة المعتمد لضمان خلوه من شبهات الربا أو الغرر، مع تحديد نسبة الربح المتوقعة بدقة.';
      if (userText.includes('ضمان') || userText.includes('خسارة')) {
        reply = 'وفق قاعدة «الغُنم بالغُرم» الشرعية، لا يجوز شرعاً اشتراط ضمان رأس المال على المبتكر في صيغتي المشاركة والمضاربة. يد المبتكر يد أمانة، وهذا ما يميز منصة ريادي عن القروض البنكية التقليدية.';
      } else if (userText.includes('محاسب') || userText.includes('تدقيق')) {
        reply = 'المنصة تربطك بشبكة من محافظي الحسابات المعتمدين بالجزائر لمراجعة دراسة الجدوى والميزانية التقديرية قبل عرض الملف على لجنة الاعتماد.';
      } else if (userText.includes('قرار') || userText.includes('وقت')) {
        reply = 'وفق نظام COSOB 01-23، تفصل لجنة الاعتماد في ملفكم خلال أجل أقصاه 10 أيام عمل بعد اكتمال التحليل الآلي التنبؤي.';
      }
      setChatMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <Sparkles className="w-4 h-4" />
          <span>بوابة أصحاب المشاريع والشركات الناشئة (المبتكرون)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          رحلة تمويل ومرافقة مشروعك الابتكاري في 7 مراحل متكاملة
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          وفق متطلبات نظام COSOB رقم 01-23 المؤرخ في 12 أبريل 2023. نحول فكرتك الابتكارية من مجرد مخطط عمل إلى مشروع ممول ومرافق مهنياً من مكاتب المحاسبة والتدقيق.
        </p>
      </div>

      {/* 7-Step Workflow Visualization (Section 5 from the paper) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">
            المراحل التنفيذية لدورة التمويل التشاركي (نظام COSOB 01-23)
          </h2>
          <span className="text-xs text-slate-500 font-mono">المرحلة الحالية: 2 من 7</span>
        </div>

        {/* Horizontal steps pipeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {WORKFLOW_STAGES.map((s) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between h-32 ${
                activeStep === s.step
                  ? 'border-emerald-600 bg-emerald-50/70 ring-1 ring-emerald-500'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
              }`}
            >
              <div>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  activeStep === s.step ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  مرحلة {s.step}
                </span>
                <div className="text-xs font-bold text-slate-900 mt-2 line-clamp-2 leading-tight">
                  {s.title.split('. ')[1]}
                </div>
              </div>
              <div className="text-[10px] text-slate-500 line-clamp-2">
                {s.desc}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Step Explanation Card */}
        <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
          <div className="font-bold flex items-center gap-2 text-emerald-900">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>تفاصيل {WORKFLOW_STAGES[activeStep - 1].title}:</span>
          </div>
          <p className="text-emerald-800 leading-relaxed">
            {WORKFLOW_STAGES[activeStep - 1].desc}
          </p>
        </div>
      </div>

      {/* Main Grid: Application Form (Right) & AI Chatbot Companion (Left) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form: Submission Details */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                استمارة إيداع ملف المشروع ودراسة الجدوى
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                تُفحص الوثائق آلياً بالذكاء الاصطناعي وبإشراف محافظ حسابات معتمد
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 font-medium">
              قيد المراجعة الأولية
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                اسم المشروع الابتكاري / المؤسسة الناشئة:
              </label>
              <input
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  مبلغ التمويل المطلوب (دج):
                </label>
                <input
                  type="text"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-mono font-bold bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  صيغة العقد المقترحة:
                </label>
                <select
                  value={selectedContract}
                  onChange={(e) => setSelectedContract(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="musharaka">مشاركة (المعيار الشرعي 12)</option>
                  <option value="mudaraba">مضاربة (المعيار الشرعي 13)</option>
                  <option value="qard_hasan">قرض حسن - للمشاريع الاجتماعية (معيار 19)</option>
                  <option value="donation">تبرع وقفي تكافلي</option>
                </select>
              </div>
            </div>

            {/* Accountant Supervision Status */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-emerald-700" />
                  <span>محافظ الحسابات المشرف على الملف:</span>
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  تم التعيين والاعتماد
                </span>
              </div>
              <p className="text-[11px] text-slate-600">
                مكتب الأستاذ عبد الرحمن بوزيان (محافظ حسابات معتمد بالمنظمة الوطنية لمصاف المحاسبين - البليدة). راجع المخطط المالي ومطابقة الأرقام المحاسبية.
              </p>
            </div>

            {/* Uploaded Documents */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-700">الملفات المرفقة:</div>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-700">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>دراسة الجدوى الاقتصادية والمخطط المالي (Business_Plan_v2.pdf)</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-medium">تم التحليل الآلي 100%</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-700">
                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                    <span>شهادة علامة "مشروع مبتكر" أو مؤسسة ناشئة (Label_Innovant.pdf)</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-medium">ساري المفعول</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>إرسال التقرير النهائي للجنة الاعتماد (قرار خلال 10 أيام)</span>
              </button>
            </div>
          </div>
        </div>

        {/* AI Chatbot Companion for the Entrepreneur (Section 5 & 6) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between h-[540px]">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">المساعد الذكي لمنصة ريادي (AI Chatbot)</h3>
                  <p className="text-[11px] text-emerald-700">إرشاد شرعي ومحاسبي فوري</p>
                </div>
              </div>
              <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded font-mono">
                الذكاء التفاعلي
              </span>
            </div>

            {/* Chat Messages Log */}
            <div className="space-y-3 overflow-y-auto max-h-[350px] pr-1 pl-1">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-emerald-700 text-white rounded-br-xs'
                        : 'bg-slate-100 text-slate-800 rounded-bl-xs border border-slate-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="pt-3 border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="اطرح سؤالاً حول شروط التمويل أو معايير AAOIFI..."
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="p-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
