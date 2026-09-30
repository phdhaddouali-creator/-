import React, { useState } from 'react';
import { 
  FileCode, Layers, ShieldCheck, CheckCircle2, ArrowRightLeft, 
  Coins, Hash, RefreshCw, Lock, Sparkles, Building2, CreditCard 
} from 'lucide-react';

export const BlockchainContractsScreen: React.FC = () => {
  const [projectProfitDZD, setProjectProfitDZD] = useState<number>(1800000);
  const [sharingRatioProject, setSharingRatioProject] = useState<number>(60);
  const [sharingRatioInvestors, setSharingRatioInvestors] = useState<number>(40);
  const [reinvestPercentage, setReinvestPercentage] = useState<number>(30);
  const [smartContractExecuted, setSmartContractExecuted] = useState<boolean>(false);

  // Profit Distribution Math based on Al-Ghunm bil-Ghurm & AAOIFI Standards
  const totalInvestorProfit = (projectProfitDZD * sharingRatioInvestors) / 100;
  const projectManagerProfit = (projectProfitDZD * sharingRatioProject) / 100;
  const reinvestedAmount = (totalInvestorProfit * reinvestPercentage) / 100;
  const directPayoutAmount = totalInvestorProfit - reinvestedAmount;
  const sampleIndividualPayout = directPayoutAmount / 412; // 412 investors

  const handleExecuteSmartContract = () => {
    setSmartContractExecuted(true);
    setTimeout(() => {
      setSmartContractExecuted(false);
    }, 3500);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
          <Layers className="w-4 h-4" />
          <span>المكونان الثالث والرابع: البلوك تشين والعقود الذكية وبوابات الدفع الوطنية</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          سلسلة كتل مرخصة توزع الأرباح آلياً وتضمن شفافية التعاقد
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          تطبيقاً لقرار مجمع الفقه الإسلامي الدولي بشأن العقود الإلكترونية وقاعدة «المسلمون على شروطهم»: تبرم العقود في صيغ ذكية غير قابلة للتحريف، وتوزع الأرباح تلقائياً إلى المحافظ والحسابات البنكية بالدينار الجزائري (DZD).
        </p>
      </div>

      {/* Live Blockchain Smart Contract Ledger & Execution Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Profit Distribution Smart Contract Simulator */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                محاكي تنفيذ العقد الذكي لتوزيع الأرباح الدورية
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                توزيع آلي فوري إثر مصادقة محافظ الحسابات على القوائم المالية
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
              معيار AAOIFI 13 (المضاربة)
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                صافي الربح المحقق في الدورة المحاسبية (دج):
              </label>
              <input
                type="number"
                step={50000}
                value={projectProfitDZD}
                onChange={(e) => setProjectProfitDZD(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm font-mono font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 font-medium">حصة المضارب (المبتكر):</span>
                <div className="text-base font-bold text-slate-900 mt-1 font-mono">{sharingRatioProject}%</div>
                <div className="text-xs text-emerald-700 font-mono mt-0.5 font-bold">
                  {projectManagerProfit.toLocaleString()} دج
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 font-medium">حصة رب المال (الممولين):</span>
                <div className="text-base font-bold text-slate-900 mt-1 font-mono">{sharingRatioInvestors}%</div>
                <div className="text-xs text-emerald-700 font-mono mt-0.5 font-bold">
                  {totalInvestorProfit.toLocaleString()} دج
                </div>
              </div>
            </div>

            {/* Reinvestment Feature (Section 9.3: نشر روح المقاولاتية وإعادة تدوير الأرباح) */}
            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-950">
                  خيار إعادة الاستثمار التلقائي في مشاريع جديدة (Auto-Reinvest):
                </span>
                <span className="font-mono font-bold text-emerald-800">{reinvestPercentage}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={10}
                value={reinvestPercentage}
                onChange={(e) => setReinvestPercentage(Number(e.target.value))}
                className="w-full accent-emerald-700 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-emerald-800 pt-1">
                <span>توزيع نقدي مباشر: {directPayoutAmount.toLocaleString()} دج</span>
                <span>إعادة استثمار تراكمي: {reinvestedAmount.toLocaleString()} دج</span>
              </div>
            </div>

            {/* Smart contract call */}
            <button
              onClick={handleExecuteSmartContract}
              disabled={smartContractExecuted}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 ${
                smartContractExecuted
                  ? 'bg-emerald-600 text-white animate-pulse'
                  : 'bg-emerald-700 hover:bg-emerald-800 text-white'
              }`}
            >
              <RefreshCw className={`w-4 h-4 ${smartContractExecuted ? 'animate-spin' : ''}`} />
              <span>
                {smartContractExecuted 
                  ? 'جاري إطلاق المعاملة وتسجيلها على سلسلة الكتل...' 
                  : 'تشغيل وتوزيع الأرباح عبر العقد الذكي الآن'}
              </span>
            </button>

            {smartContractExecuted && (
              <div className="p-3 bg-emerald-100/70 border border-emerald-300 rounded-xl text-xs text-emerald-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>تم توزيع {totalInvestorProfit.toLocaleString()} دج بنجاح على 412 مستثمراً!</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-800">
                  TxHash: 0x7f9a8d4...3b2c1e · Block #10842 · Time: الآن
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: National Payment Gateways & Immutable Ledger */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Algerian Payment Channels (Section 6.1) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-700" />
              <span>بوابات الدفع الإلكتروني الوطنية (نظام 01-23)</span>
            </h3>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xs">
                    EP
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">البطاقة الذهبية (بريد الجزائر)</div>
                    <div className="text-[10px] text-slate-500">دفع واكتتاب فوري بدون رسوم</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">متصل</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-blue-500/10 text-blue-700 flex items-center justify-center font-bold text-xs">
                    CIB
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">البنوك الوطنية (GIE Monétique)</div>
                    <div className="text-[10px] text-slate-500">حسابات بنكية موطنة بالدينار</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">متصل</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-emerald-500/10 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    DZ
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">قنوات المغتربين الجزائريين</div>
                    <div className="text-[10px] text-slate-500">استقطاب رؤوس الأموال الوطنية بالخارج</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">مرخص</span>
              </div>
            </div>
          </div>

          {/* Ledger Proof & AAOIFI Compliance Badge */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-700" />
                <span>سجل المعاملات المشفر (Audit Ledger)</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500">SHA-256</span>
            </div>
            
            <div className="space-y-1.5 font-mono text-[11px] text-slate-600">
              <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                <span>Block #10841</span>
                <span>اكتتاب: 50,000 دج</span>
                <span className="text-emerald-700 font-bold">موثق</span>
              </div>
              <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                <span>Block #10840</span>
                <span>تخارج جزئي: 25,000 دج</span>
                <span className="text-emerald-700 font-bold">موثق</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
              سجلات التدقيق غير قابلة للتعديل أو الحذف، وتوفر إفصاحاً وشفافية كاملة وفق معايير المحاسبة الإسلامية AAOIFI.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
