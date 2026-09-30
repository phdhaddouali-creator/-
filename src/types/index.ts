export type TrackType = 'investment' | 'social';
export type ContractType = 'musharaka' | 'mudaraba' | 'qard_hasan' | 'donation';
export type SectorType = 'green_tech' | 'health_pharma' | 'agritech' | 'digital_economy' | 'social_empowerment';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  founder: string;
  wilaya: string;
  sector: SectorType;
  track: TrackType;
  contract: ContractType;
  fundingGoalDZD: number;
  raisedDZD: number;
  investorsCount: number;
  expectedReturnRate?: string;
  profitSharingRatio?: string; // e.g. "60% مضارب / 40% ممول"
  daysLeft: number;
  stage: string;
  aaoifiStandard: string;
  aiFeasibilityScore: number;
  shariaComplianceStatus: 'approved' | 'in_review';
  jobsExpected: number;
  description: string;
  keyFeatures: string[];
}

// Exactly the 4 main interfaces requested by the user
export type PlatformInterfaceId =
  | 'funding_seeker'   // الواجهة الأولى: المؤسسات وحاملي المشاريع (طلب تمويل إسلامي)
  | 'sharia_investor'  // الواجهة الثانية: المستثمرون الباحثون عن استثمار إسلامي
  | 'active_partner'   // الواجهة الثالثة: الشركاء المتعاقدون واستلام وتوزيع الأرباح
  | 'management_ai';   // الواجهة الرابعة: الإدارة الخلفية والتحليل بالذكاء الاصطناعي والقرار

export type PrototypeScreenId = PlatformInterfaceId;

export interface FinancialYearData {
  year: number;
  fundedProjects: number;
  totalFundingMlnDZD: number;
  commissionMlnDZD: number;
  investorsCount: number;
  jobsCreated: number;
}
