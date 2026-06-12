export interface DailySet {
  id: string;
  day: number;
  quote: {
    text: string;
    author: string;
    sport?: string;
    attribution?: string;
  };
  mantra: string;
  micro_action: {
    task: string;
    category: string;
  };
}

export interface UserProgress {
  userId: string;
  currentDay: number;
  streak: number;
  totalDays: number;
  habits: {
    hydration: boolean;
    fruit: boolean;
    manners: boolean;
    kindness: boolean;
    pbFocus: boolean;
  };
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'child' | 'parent';
  parentId?: string;
  isPaid: boolean;
}
