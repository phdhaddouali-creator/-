import React from 'react';
import { ShieldCheck, Download, Rocket, Coins, Wallet, BrainCircuit } from 'lucide-react';
import { PlatformInterfaceId } from '../types';
import { FlameLogo } from './FlameLogo';

interface HeaderProps {
  activeScreen: PlatformInterfaceId;
  setActiveScreen: (screen: PlatformInterfaceId) => void;
  onOpenShariaModal: () => void;
  onOpenDownloadModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  setActiveScreen,
  onOpenShariaModal,
  onOpenDownloadModal,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Zone 1: Flame Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => setActiveScreen('sharia_investor')}
              className="text-right cursor-pointer hover:opacity-90 transition-opacity focus:outline-none"
            >
              <FlameLogo size="md" />
            </button>
          </div>

          {/* Zone 2: The Exact 4 Interfaces Requested */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-bold text-slate-600">
            {/* Interface 1 */}
            <button
              onClick={() => setActiveScreen('funding_seeker')}
              className={`transition-colors py-1 border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                activeScreen === 'funding_seeker'
                  ? 'border-emerald-600 text-emerald-800 font-extrabold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              <Rocket className="w-4 h-4 text-emerald-600" />
              <span>1. طلب التمويل (للمؤسسات)</span>
            </button>

            {/* Interface 2 */}
            <button
              onClick={() => setActiveScreen('sharia_investor')}
              className={`transition-colors py-1 border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                activeScreen === 'sharia_investor'
                  ? 'border-emerald-600 text-emerald-800 font-extrabold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              <Coins className="w-4 h-4 text-emerald-600" />
              <span>2. الاستثمار الإسلامي</span>
            </button>

            {/* Interface 3 */}
            <button
              onClick={() => setActiveScreen('active_partner')}
              className={`transition-colors py-1 border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                activeScreen === 'active_partner'
                  ? 'border-emerald-600 text-emerald-800 font-extrabold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              <Wallet className="w-4 h-4 text-emerald-600" />
              <span>3. الشركاء وتوزيع الأرباح</span>
            </button>

            {/* Interface 4 */}
            <button
              onClick={() => setActiveScreen('management_ai')}
              className={`transition-colors py-1 border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                activeScreen === 'management_ai'
                  ? 'border-emerald-600 text-emerald-800 font-extrabold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              <BrainCircuit className="w-4 h-4 text-emerald-600" />
              <span>4. الإدارة وتحليل الـ AI والقرار</span>
            </button>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Sharia Reference Button */}
            <button
              onClick={onOpenShariaModal}
              className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-300 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">معايير AAOIFI</span>
            </button>

            {/* Download Prototype Dossier Button */}
            <button
              onClick={onOpenDownloadModal}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>تحميل النموذج</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
