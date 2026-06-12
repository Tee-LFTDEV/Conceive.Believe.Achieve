import React from 'react';
import { GlassWater, Apple, Heart, MessageSquare, Target } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import type { UserProgress } from '../types';

const ProfilePage: React.FC = () => {
  const { progress, toggleHabit } = useAppContext();

  const habits = [
    { id: 'hydration' as keyof UserProgress['habits'], name: 'Hydration', icon: <GlassWater className="text-blue-500" />, completed: progress.habits.hydration },
    { id: 'fruit' as keyof UserProgress['habits'], name: 'Fruit Intake', icon: <Apple className="text-red-500" />, completed: progress.habits.fruit },
    { id: 'manners' as keyof UserProgress['habits'], name: 'Manners', icon: <MessageSquare className="text-yellow-500" />, completed: progress.habits.manners },
    { id: 'kindness' as keyof UserProgress['habits'], name: 'Kindness', icon: <Heart className="text-pink-500" />, completed: progress.habits.kindness },
    { id: 'pbFocus' as keyof UserProgress['habits'], name: 'Personal Best', icon: <Target className="text-green-500" />, completed: progress.habits.pbFocus },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
          👤
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Champion Athlete</h2>
        <p className="text-gray-500 text-sm">Member since June 2026</p>
      </section>

      <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50">
        <h3 className="text-lg font-bold mb-4">Daily Habits</h3>
        <div className="space-y-4">
          {habits.map((habit) => (
            <div key={habit.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                  {habit.icon}
                </div>
                <span className="font-medium text-gray-700">{habit.name}</span>
              </div>
              <button 
                onClick={() => toggleHabit(habit.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  habit.completed 
                    ? "bg-green-500 text-white shadow-lg shadow-green-200" 
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {habit.completed ? "✓" : "+"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-600 rounded-3xl p-6 text-white">
          <p className="text-xs font-bold uppercase opacity-80 mb-1">Total Days</p>
          <p className="text-3xl font-bold">{progress.totalDays}</p>
        </div>
        <div className="bg-orange-500 rounded-3xl p-6 text-white">
          <p className="text-xs font-bold uppercase opacity-80 mb-1">Current Streak</p>
          <p className="text-3xl font-bold">{progress.streak}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
