import React from 'react';
import { PlatformInterfaceId } from '../types';
import { FundingSeekerInterface } from './interfaces/FundingSeekerInterface';
import { ShariaInvestorInterface } from './interfaces/ShariaInvestorInterface';
import { ActivePartnerInterface } from './interfaces/ActivePartnerInterface';
import { ManagementAIInterface } from './interfaces/ManagementAIInterface';
import { Rocket, Coins, Wallet, BrainCircuit } from 'lucide-react';

interface PrototypeViewerProps {
  activeScreen: PlatformInterfaceId;
  setActiveScreen: (screen: PlatformInterfaceId) => void;
}

export const PrototypeViewer: React.FC<PrototypeViewerProps> = ({
  activeScreen,
  setActiveScreen,
}) => {
  // Exactly the 4 main interfaces requested by the user
  const interfaces = [
    {
      id: 'funding_seeker' as PlatformInterfaceId,
      number: 'الواجهة 1',
      title: 'طلب التمويل للمؤسسات',
      desc: 'حاملو المشاريع وفق سلوك التمويل الإسلامي (مضاربة/مشاركة/سلم)',
      icon: Rocket
    },
    {
      id: 'sharia_investor' as PlatformInterfaceId,
      number: 'الواجهة 2',
      title: 'المستثمر الإسلامي',
      desc: 'استكشاف فرص حلال بالربح المشاع دون ربا ودفع بالذهبية',
      icon: Coins
    },
    {
      id: 'active_partner' as PlatformInterfaceId,
      number: 'الواجهة 3',
      title: 'الشركاء وتوزيع الأرباح',
      desc: 'عقود الشراكة القائمة واستلام وتدوير الأرباح الدورية بالدينار',
      icon: Wallet
    },
    {
      id: 'management_ai' as PlatformInterfaceId,
      number: 'الواجهة 4',
      title: 'الإدارة وقرارات الـ AI',
      desc: 'الواجهة الخلفية: التحليل التنبؤي ولجنة الاعتماد COSOB',
      icon: BrainCircuit
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* 4 Distinct Cards Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {interfaces.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveScreen(item.id)}
              className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between ${
                isActive
                  ? 'bg-emerald-900 text-white border-emerald-700 shadow-md ring-2 ring-emerald-500'
                  : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between w-full">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${
                  isActive ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-100 text-slate-600'
                }`}>
                  {item.number}
                </span>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  isActive ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-3">
                <h3 className={`text-sm font-black leading-tight ${
                  isActive ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-[11px] leading-relaxed mt-1 ${
                  isActive ? 'text-emerald-200' : 'text-slate-500'
                }`}>
                  {item.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Render the Active Interface */}
      <div className="transition-opacity duration-200">
        {activeScreen === 'funding_seeker' && <FundingSeekerInterface />}
        {activeScreen === 'sharia_investor' && (
          <ShariaInvestorInterface onInvestSuccess={() => setActiveScreen('active_partner')} />
        )}
        {activeScreen === 'active_partner' && <ActivePartnerInterface />}
        {activeScreen === 'management_ai' && <ManagementAIInterface />}
      </div>

    </div>
  );
};
