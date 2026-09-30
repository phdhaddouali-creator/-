import React, { useState } from 'react';
import { Header } from './components/Header';
import { PrototypeViewer } from './components/PrototypeViewer';
import { FinancialProjections } from './components/FinancialProjections';
import { ShariaFrameworkModal } from './components/ShariaFrameworkModal';
import { DownloadModal } from './components/DownloadModal';
import { PrototypeScreenId } from './types';
import { Award, ChevronDown } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<PrototypeScreenId>('funding_seeker');
  const [isShariaModalOpen, setIsShariaModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [showResearchInfo, setShowResearchInfo] = useState(false);

  const sharedAppUrl = "https://ais-pre-fk3v4gc6rgnnkwcupixjpa-769848788679.europe-west2.run.app";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Cairo',sans-serif]">
      {/* Top Header conforming strictly to the Top Bar Contract */}
      <Header
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        onOpenShariaModal={() => setIsShariaModalOpen(true)}
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
      />

      {/* Academic Attribution Banner */}
      <div className="bg-emerald-900 text-white text-xs py-2 px-4 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span className="font-semibold text-emerald-200">
              جائزة مؤتمر الدوحة للمال الإسلامي · فئة الابتكار في الاقتصاد الإسلامي:
            </span>
            <span className="text-white font-bold">
              منصة «ريادي» الذكية للتمويل الجماعي الإسلامي في الجزائر برؤية مقاصدية
            </span>
          </div>
          
          <button
            onClick={() => setShowResearchInfo(!showResearchInfo)}
            className="text-[11px] text-emerald-200 hover:text-white underline decoration-emerald-400 flex items-center gap-1 focus:outline-none"
          >
            <span>بيانات الباحث والورقة العلمية (د. حدو علي)</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${showResearchInfo ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Collapsible Research Context Drawer */}
      {showResearchInfo && (
        <div className="bg-emerald-950 text-white py-4 px-6 border-b border-emerald-800 text-xs">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <span className="text-emerald-400 font-bold">إعداد وتقديم المترشح:</span>
              <p className="text-slate-200">
                الدكتور حدو علي · أستاذ باحث محاضر صنف «أ» بجامعة البليدة 2 لونيسي علي (الجزائر).
              </p>
              <p className="text-[11px] text-slate-400">
                كلية العلوم الاقتصادية والتجارية وعلوم التسيير - تخصص مالية وبنوك.
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-emerald-400 font-bold">المؤهلات الشرعية والمهنية:</span>
              <p className="text-slate-200">
                حاصل على شهادة الزمالة مراقب ومدقق شرعي من AAOIFI.
              </p>
              <p className="text-[11px] text-slate-400">
                مدرب استشاري معتمد من منظمة العمل الدولية (ILO) ومدرب النوافذ المصرفية الإسلامية منذ 2017.
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-emerald-400 font-bold">الإطار القانوني والتاريخ:</span>
              <p className="text-slate-200">
                نظام COSOB رقم 01-23 المؤرخ في 12 أبريل 2023 للمستشارين الاستثماريين.
              </p>
              <p className="text-[11px] text-slate-400">
                سبتمبر 2026 · مستوى الجاهزية التكنولوجية TRL 4-5.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Core Customer & Management View */}
        <PrototypeViewer
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
        />

        {/* Financial projections and stress test */}
        <FinancialProjections />

      </main>

      {/* Clean Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            منصة «ريادي» الذكية للتمويل الجماعي الإسلامي © 2026. نموذج أولي مستند لبحث الدكتور حدو علي.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>معايير AAOIFI رقم 12، 13، 19، 23</span>
            <span aria-hidden="true">·</span>
            <span>نظام COSOB 01-23</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsDownloadModalOpen(true)}
              className="text-emerald-700 hover:underline font-bold"
            >
              تحميل الملف التوثيقي
            </button>
          </div>
        </div>
      </footer>

      {/* Sharia Framework Modal */}
      <ShariaFrameworkModal
        isOpen={isShariaModalOpen}
        onClose={() => setIsShariaModalOpen(false)}
      />

      {/* Download Prototype Dossier Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        sharedUrl={sharedAppUrl}
      />
    </div>
  );
}
