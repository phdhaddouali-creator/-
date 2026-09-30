import React, { useState } from 'react';
import { 
  Rocket, ShieldCheck, CheckCircle2, HelpCircle, FileText, 
  Send, Bot, Scale, Building2, AlertCircle, Sparkles, ArrowLeft, 
  Coins, FileCheck2, Clock 
} from 'lucide-react';
import { WORKFLOW_STAGES } from '../../data/mockData';

export const FundingSeekerInterface: React.FC = () => {
  const [selectedContract, setSelectedContract] = useState<'mudaraba' | 'musharaka' | 'qard_hasan' | 'salam'>('mudaraba');
  const [fundingAmountDZD, setFundingAmountDZD] = useState<number>(6500000);
  const [projectRatio, setProjectRatio] = useState<number>(60); // 60% for founder, 40% for investors
  const [wilaya, setWilaya] = useState<string>('البليدة');
  const [projectTitle, setProjectTitle] = useState<string>('منظومة الري الذكي والطاقة الشمسية لمزارع متيجة');
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  // Sharia AI Assistant for Entrepreneurs
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'ai',
      text: 'مرحباً بك يا رائد الأعمال! أنا مرشدك الذكي لمنصة «ريادي». نحن لا نطلب رهونات عقارية ولا نفرض فوائد ربوية؛ تمويلنا قائم على الشراكة والمخاطرة المشروعة وفق معايير AAOIFI ونظام COSOB 01-23. كيف يمكنني مساعدتك في صياغة طلب التمويل؟'
    }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const query = userInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: query }]);
    setUserInput('');

    setTimeout(() => {
      let reply = 'وفق أحكام الشريعة الإسلامية، يشاركك الممولون في الربح الفعلي بنسبة شائعة (كـ 60% لك و 40% للمستثمرين). لا يوجد عائد ثابت مشروط لأن اشتراط عائد محدد من الربا المحرم إجماعاً.';
      if (query.includes('ضمان') || query.includes('خسارة')) {
        reply = 'وفق معيار AAOIFI رقم 13، يدك كمضارب أو شريك هي «يد أمانة»، ولا تضمن خسارة رأس المال في حال الركود أو الخسارة غير المقصودة، بل يتحمل المستثمر خسارته في ماله وأنت في جهدك، إلا إذا ثبت التعدي أو التقصير المتعمد.';
      } else if (query.includes('محاسب') || query.includes('تدقيق')) {
        reply = 'المنصة تربطك بمحافظ حسابات معتمد محلياً في ولايتك لمساعدتك في إعداد الميزانية التقديرية ودراسة الجدوى، ويتم سداد أتعابه ضمن نفقات المشروع المعتمدة دون إرهاق ميزانيتك الأولية.';
      } else if (query.includes('وقت') || query.includes('أجل')) {
        reply = 'تلتزم لجنة الاعتماد بموجب المادة 14 من نظام COSOB 01-23 بالبت في طلبك خلال أجل أقصاه 10 أيام عمل من تاريخ إيداع الملف.';
      }
      setChatMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionSuccess(true);
    setTimeout(() => setSubmissionSuccess(false), 5000);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Interface Identity Banner */}
      <div className="bg-gradient-to-l from-emerald-950 via-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-2xl border border-emerald-800/40 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
          <Rocket className="w-3.5 h-3.5" />
          <span>الواجهة الأولى: بوابة المؤسسات وحاملي المشاريع (طالبو التمويل)</span>
        </div>

        <div className="max-w-3xl space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            تمويل تشاركي إسلامي حقيقي لمشروعك: بدون فوائد، وبدون رهون عينية مرهقة
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            صُممت هذه الواجهة خصيصاً لتلائم سلوك وتطلعات رواد الأعمال الجزائريين الباحثين عن تمويل نزيه يحترم الشريعة الإسلامية، ويتبنى قاعدة «الغُنم بالغُرم»، ويمنحك شريكاً حقيقياً يتقاسم معك المخاطرة والنجاح، مع مرافقة مهنية معتمدة من محافظي الحسابات.
          </p>
        </div>

        {/* 4 Islamic Behavioral Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1">
            <div className="font-bold text-emerald-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>لا مديونية ولا فوائد ربوية</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              المستثمر شريك في رأس المال وليس مقرضاً بفائدة تثقل كاهل مشروعك.
            </p>
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1">
            <div className="font-bold text-emerald-300 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-emerald-400" />
              <span>يد المضارب أمانة (AAOIFI 13)</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              لا تضمن رأس المال عند تعثر السوق إلا في حال التعدي أو التقصير المثبت.
            </p>
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1">
            <div className="font-bold text-emerald-300 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>مرافقة محاسبية وليست تعجيزية</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              محافظ حسابات معتمد يساعدك في ضبط المخطط المالي ومتابعة النمو.
            </p>
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1">
            <div className="font-bold text-emerald-300 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>قرار رسمي في 10 أيام</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              بت فوري من لجنة الاعتماد وفق الإطار التنظيمي لنظام COSOB رقم 01-23.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Application Form & Live AI Assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Right Pane: Islamic Financing Application Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">
              استمارة طلب التمويل التشاركي وتحديد صيغة العقد الشرعي
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              اختر صيغة التعاقد الإسلامية التي تلائم طبيعة مؤسستك الابتكارية
            </p>
          </div>

          {/* Sharia Contract Mode Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800">
              صيغة العقد الإسلامي المرغوبة:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {[
                { id: 'mudaraba', title: 'المضاربة', standard: 'معيار AAOIFI 13', desc: 'رأس المال من الممول والعمل منك' },
                { id: 'musharaka', title: 'المشاركة', standard: 'معيار AAOIFI 12', desc: 'مساهمة مشتركة في المال والإدارة' },
                { id: 'salam', title: 'السلم والاستصناع', standard: 'تمويل دورات الإنتاج', desc: 'للمصانع والورش الإنتاجية' },
                { id: 'qard_hasan', title: 'القرض الحسن', standard: 'معيار AAOIFI 19', desc: 'للمشاريع الاجتماعية والبيئية' }
              ].map((contract) => (
                <button
                  key={contract.id}
                  type="button"
                  onClick={() => setSelectedContract(contract.id as any)}
                  className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between ${
                    selectedContract === contract.id
                      ? 'border-emerald-700 bg-emerald-50/80 ring-1 ring-emerald-600 shadow-xs'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <span className="font-bold text-slate-900 block">{contract.title}</span>
                    <span className="text-[10px] text-emerald-800 font-semibold font-mono block mt-0.5">
                      {contract.standard}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-2 block leading-tight">
                    {contract.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmitForm} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                اسم المشروع الابتكاري / المؤسسة الناشئة:
              </label>
              <input
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  الولاية الجزائرية لمقر المشروع:
                </label>
                <select
                  value={wilaya}
                  onChange={(e) => setWilaya(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                >
                  {['البليدة', 'الجزائر العاصمة', 'ورقلة', 'وهران', 'قسنطينة', 'سطيف', 'عنابة', 'تلمسان', 'باتنة', 'بسكرة', 'أدرار'].map((w) => (
                    <option key={w} value={w}>{w}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  مبلغ التمويل المطلوب بالدينار الجزائري (DZD):
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step={100000}
                    value={fundingAmountDZD}
                    onChange={(e) => setFundingAmountDZD(Number(e.target.value))}
                    className="w-full px-3 py-2 font-mono font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">دج</span>
                </div>
              </div>
            </div>

            {/* Profit-Sharing Ratio Slider (Crucial for Islamic Behavior) */}
            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-emerald-950">
                  اقتراح نسبة اقتسام الأرباح الشائعة المعلنة (قاعدة العدالة التعاقدية):
                </span>
                <span className="font-mono font-bold text-emerald-800">
                  {projectRatio}% للمشروع / {100 - projectRatio}% للمستثمرين
                </span>
              </div>
              <input
                type="range"
                min={30}
                max={85}
                step={5}
                value={projectRatio}
                onChange={(e) => setProjectRatio(Number(e.target.value))}
                className="w-full accent-emerald-700 cursor-pointer"
              />
              <p className="text-[11px] text-emerald-800 leading-relaxed">
                وفق معيار AAOIFI رقم 13، يُحدد اقتسام الربح بنسبة شائعة (كـ 60% للمضارب مقابل إدارته وابتكاره، و40% لرب المال مقابل رأس ماله)، ولا يُجعل مبلغ مقطوع ثابت لأي طرف.
              </p>
            </div>

            {/* Assigned Certified Accountant */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <div>
                  <div className="font-bold text-slate-800">محافظ الحسابات المعتمد المخصص لولايتك:</div>
                  <div className="text-[11px] text-slate-500">
                    مكتب الأستاذ عبد الرحمن بوزيان (مصاف المحاسبين المعتمدين - البليدة والوسط)
                  </div>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold shrink-0">
                مرافقة مجانية حتى الاعتماد
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-xs"
            >
              <Send className="w-4 h-4" />
              <span>إرسال الملف إلى لجنة الاعتماد (مهلة قرار 10 أيام بموجب COSOB 01-23)</span>
            </button>
          </form>

          {submissionSuccess && (
            <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-xl text-xs text-emerald-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>تم إيداع ملفك بنجاح وسُجّل في سجل COSOB الاستثماري!</span>
              </div>
              <p className="text-[11px] text-emerald-800">
                سيقوم محافظ الحسابات بمراجعة المخطط المالي وإحالته إلى لجنة الاعتماد، وستتلقى القرار النهائي في أجل أقصاه 10 أيام عمل.
              </p>
            </div>
          )}
        </div>

        {/* Left Pane: Interactive Sharia AI Chatbot & 7 Stages (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Sharia Advisor Chatbot */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between h-[390px]">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">المستشار الشرعي والمحاسبي الذكي</h3>
                    <p className="text-[10px] text-emerald-700">توجيه فوري لمطابقة معايير AAOIFI</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  24/7 AI Advisor
                </span>
              </div>

              {/* Chat messages */}
              <div className="space-y-2.5 overflow-y-auto max-h-[240px] pr-1 pl-1 text-xs">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[88%] p-2.5 rounded-xl leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-emerald-700 text-white rounded-br-xs'
                          : 'bg-slate-100 text-slate-800 rounded-bl-xs border border-slate-200 text-[11px]'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSendChat} className="pt-2 border-t border-slate-100 flex items-center gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="اسأل عن ضمان رأس المال، شروط المضاربة، أتعاب المحاسب..."
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

          {/* Quick Workflow Stages Summary */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
            <span className="font-bold text-slate-800 block">
              مسار طلب التمويل في 7 محطات (نظام 01-23):
            </span>
            <div className="space-y-1.5 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>1. إيداع الطلب ودراسة الجدوى بإشراف محافظ الحسابات</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>2. الفحص التنبؤي الآلي وقرار لجنة الاعتماد (في 10 أيام)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>3. إطلاق حملة التمويل (30 يوماً) وتوزيع الأرباح عبر البلوك تشين</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
