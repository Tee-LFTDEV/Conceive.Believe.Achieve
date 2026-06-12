import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { cn } from '../utils/cn';

const HomePage: React.FC = () => {
  const { currentSet, isLoading, nextDay, prevDay, isActionCompleted, completeAction } = useAppContext();

  if (isLoading || !currentSet) {
    return <div className="flex items-center justify-center h-64">Loading your daily mindset...</div>;
  }

  return (
    <div className="space-y-8">
      <section className="flex items-center justify-between">
        <button 
          onClick={prevDay}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          disabled={currentSet.day === 1}
        >
          <ChevronLeft className={currentSet.day === 1 ? "text-gray-300" : "text-gray-600"} />
        </button>
        <div className="text-center">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-1">Day {currentSet.day} of 365</h2>
          <h3 className="text-2xl font-bold text-gray-900">Your Daily Mindset</h3>
        </div>
        <button 
          onClick={nextDay}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="text-gray-600" />
        </button>
      </section>

      {/* Quote Card */}
      <motion.div 
        key={`quote-${currentSet.day}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-3xl p-8 shadow-sm border border-purple-50 relative overflow-hidden"
      >
        <Quote className="absolute -top-4 -left-4 text-purple-100 h-24 w-24 -z-0" />
        <div className="relative z-10">
          <p className="text-xl font-medium text-gray-800 mb-4 leading-relaxed">
            "{currentSet.quote.text}"
          </p>
          <cite className="text-purple-600 font-bold not-italic">— {currentSet.quote.author}</cite>
          {currentSet.quote.attribution && (
            <p className="text-[10px] text-gray-400 mt-2">{currentSet.quote.attribution}</p>
          )}
        </div>
      </motion.div>

      {/* Mantra Card */}
      <motion.div 
        key={`mantra-${currentSet.day}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-purple-600 rounded-3xl p-8 shadow-md text-white text-center"
      >
        <Sparkles className="mx-auto mb-4 h-8 w-8 text-purple-200" />
        <p className="text-xs font-bold uppercase tracking-widest mb-2 text-purple-200">Daily Mantra</p>
        <p className="text-2xl font-bold italic">"{currentSet.mantra}"</p>
      </motion.div>

      {/* Micro-Action Card */}
      <motion.div 
        key={`action-${currentSet.day}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-8 shadow-sm border border-green-50"
      >
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-2xl">
            <CheckCircle2 className="text-green-600 h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1 text-green-600">Micro-Action</p>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{currentSet.micro_action.category}</h4>
            <p className="text-gray-600 leading-relaxed">{currentSet.micro_action.task}</p>
          </div>
        </div>
        <button 
          onClick={completeAction}
          disabled={isActionCompleted}
          className={cn(
            "w-full mt-6 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2",
            isActionCompleted 
              ? "bg-green-100 text-green-700 cursor-default" 
              : "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-100"
          )}
        >
          {isActionCompleted ? (
            <>
              <CheckCircle2 size={20} />
              Completed for Today
            </>
          ) : (
            "Mark as Completed"
          )}
        </button>
      </motion.div>
    </div>
  );
};

export default HomePage;
