import React, { createContext, useContext, useState, useEffect } from 'react';
import type { DailySet, UserProgress } from '../types';
import { getDailySets, getParentSummaries } from '../services/contentService';
import { mockDailySets } from '../services/mockData';

interface AppContextType {
  dailySets: DailySet[];
  parentSummaries: any[];
  currentSet: DailySet | null;
  progress: UserProgress;
  isLoading: boolean;
  isActionCompleted: boolean;
  completeAction: () => void;
  toggleHabit: (habitId: keyof UserProgress['habits']) => void;
  nextDay: () => void;
  prevDay: () => void;
  syncContent: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dailySets, setDailySets] = useState<DailySet[]>(mockDailySets);
  const [parentSummaries, setParentSummaries] = useState<any[]>([]);
  const [currentDay, setCurrentDay] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionCompleted, setIsActionCompleted] = useState(false);
  const [progress, setProgress] = useState<UserProgress>({
    userId: '1',
    currentDay: 1,
    streak: 5,
    totalDays: 42,
    habits: {
      hydration: false,
      fruit: false,
      manners: false,
      kindness: false,
      pbFocus: false
    },
    badges: []
  });

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      
      // Try to load from cache first
      const cached = localStorage.getItem('cachedDailySets');
      if (cached) {
        setDailySets(JSON.parse(cached));
        setIsLoading(false);
        return;
      }

      const sets = await getDailySets();
      if (sets.length > 0) {
        setDailySets(sets);
        localStorage.setItem('cachedDailySets', JSON.stringify(sets));
      }

      const summaries = await getParentSummaries();
      if (summaries.length > 0) {
        setParentSummaries(summaries);
      }
      setIsLoading(false);
    };
    loadContent();
  }, []);

  const currentSet = dailySets.find(s => s.day === currentDay) || dailySets[0] || null;

  const completeAction = () => {
    setIsActionCompleted(true);
    // Persist completion state for this day
    const completedDays = JSON.parse(localStorage.getItem('completedDays') || '{}');
    completedDays[currentDay] = true;
    localStorage.setItem('completedDays', JSON.stringify(completedDays));
  };

  useEffect(() => {
    const completedDays = JSON.parse(localStorage.getItem('completedDays') || '{}');
    setIsActionCompleted(!!completedDays[currentDay]);
  }, [currentDay]);

  const toggleHabit = (habitId: keyof UserProgress['habits']) => {
    setProgress(prev => ({
      ...prev,
      habits: {
        ...prev.habits,
        [habitId]: !prev.habits[habitId]
      }
    }));
  };

  const nextDay = () => {
    if (currentDay < dailySets.length) {
      setCurrentDay(prev => prev + 1);
    }
  };

  const prevDay = () => {
    if (currentDay > 1) {
      setCurrentDay(prev => prev - 1);
    }
  };

  const syncContent = async () => {
    setIsLoading(true);
    try {
      const sets = await getDailySets();
      if (sets.length > 0) {
        setDailySets(sets);
        localStorage.setItem('cachedDailySets', JSON.stringify(sets));
        alert('Content synced successfully!');
      }
    } catch (error) {
      console.error("Sync failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ 
      dailySets, 
      parentSummaries,
      currentSet, 
      progress, 
      isLoading,
      isActionCompleted,
      completeAction,
      toggleHabit,
      nextDay,
      prevDay,
      syncContent
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
