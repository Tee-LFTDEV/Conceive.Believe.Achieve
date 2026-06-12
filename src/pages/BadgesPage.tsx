import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const badges = [
  { id: '1', name: 'Early Bird', description: 'Completed a micro-action before 8 AM', icon: '🌅', unlocked: true },
  { id: '2', name: '7 Day Streak', description: '7 days of resilience training', icon: '🔥', unlocked: true },
  { id: '3', name: 'Hydration Hero', description: 'Completed 5 hydration actions', icon: '💧', unlocked: false },
  { id: '4', name: 'Kindness King', description: 'Completed 3 kindness actions', icon: '🤝', unlocked: false },
];

const BadgesPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Your Achievements</h2>
        <p className="text-gray-600">Keep going to unlock more badges!</p>
      </section>

      <div className="grid grid-cols-2 gap-4">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-3xl border-2 text-center ${
              badge.unlocked 
                ? "bg-white border-purple-100 shadow-sm" 
                : "bg-gray-50 border-gray-100 opacity-60"
            }`}
          >
            <div className="text-4xl mb-3">{badge.icon}</div>
            <h4 className="font-bold text-gray-900 mb-1">{badge.name}</h4>
            <p className="text-xs text-gray-500">{badge.description}</p>
            {!badge.unlocked && (
              <div className="mt-3 inline-block bg-gray-200 rounded-full h-1 w-full overflow-hidden">
                <div className="bg-purple-500 h-full w-1/2"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="bg-purple-600 rounded-3xl p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <Trophy className="h-10 w-10 text-yellow-300" />
          <div>
            <h4 className="text-xl font-bold">Hall of Fame</h4>
            <p className="text-purple-200 text-sm">You are in the top 10% this week!</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span>Points to next rank</span>
            <span className="font-bold">450 / 500</span>
          </div>
          <div className="bg-purple-800 rounded-full h-2 w-full overflow-hidden">
            <div className="bg-yellow-400 h-full w-[90%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgesPage;
