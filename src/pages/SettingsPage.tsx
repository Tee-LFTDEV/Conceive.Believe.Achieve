import React, { useState } from 'react';
import { Shield, Eye, Bell, CreditCard, LogOut, ChevronRight, Check, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const SettingsPage: React.FC = () => {
  const { dailySets, parentSummaries, syncContent, isLoading } = useAppContext();
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  // Use real parent summaries if available, otherwise fallback to dailySets
  const nextWeekContent = parentSummaries.length > 0 
    ? parentSummaries.slice(0, 7) 
    : dailySets.slice(7, 14);

  return (
    <div className="space-y-8 pb-10">
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      </section>

      {!showPreview ? (
        <>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">Parental Controls</h3>
            <section className="bg-white rounded-3xl overflow-hidden border border-gray-50 shadow-sm">
              <button 
                onClick={() => setShowPreview(true)}
                className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors border-b border-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Eye className="text-blue-600 h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800">Content Preview</p>
                    <p className="text-xs text-gray-500">Review next week's content</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 h-5 w-5" />
              </button>
              <button className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-2 rounded-xl">
                    <Shield className="text-purple-600 h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800">Age Gating</p>
                    <p className="text-xs text-gray-500">Currently set to 8-12 years</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 h-5 w-5" />
              </button>
            </section>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">App Settings</h3>
            <section className="bg-white rounded-3xl overflow-hidden border border-gray-50 shadow-sm">
              <button className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-2 rounded-xl">
                    <Bell className="text-orange-600 h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800">Push Notifications</p>
                    <p className="text-xs text-gray-500">Reminders for daily habits</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 h-5 w-5" />
              </button>
              <button className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-xl">
                    <CreditCard className="text-green-600 h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800">Subscription</p>
                    <p className="text-xs text-gray-500">$1 AUD Annual Access - Active</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 h-5 w-5" />
              </button>
            </section>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">Admin</h3>
            <section className="bg-white rounded-3xl overflow-hidden border border-gray-50 shadow-sm">
              <button 
                onClick={syncContent}
                disabled={isLoading}
                className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-2 rounded-xl">
                    <RefreshCw className={cn("text-gray-600 h-5 w-5", isLoading && "animate-spin")} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800">Sync Content</p>
                    <p className="text-xs text-gray-500">
                      {isLoading ? "Syncing..." : "Import from content_calendar.json"}
                    </p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 h-5 w-5" />
              </button>
            </section>
          </div>

          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 p-5 text-red-500 font-bold hover:bg-red-50 rounded-3xl transition-colors mt-4"
          >
            <LogOut size={20} />
            Log Out
          </button>
        </>
      ) : (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 mb-2">
            <button 
              onClick={() => setShowPreview(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronRight className="rotate-180" />
            </button>
            <h3 className="text-lg font-bold">Upcoming Content Preview</h3>
          </div>
          
          <div className="space-y-4">
            {nextWeekContent.map((set) => (
              <div key={set.day} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-purple-600 uppercase">Day {set.day}</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Approved</span>
                  </div>
                </div>
                {set.summary ? (
                  <p className="text-sm font-medium text-gray-700 leading-relaxed">{set.summary}</p>
                ) : (
                  <>
                    <p className="text-sm font-medium text-gray-800 italic">"{set.quote?.text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="bg-green-50 px-2 py-1 rounded-lg">
                        <p className="text-[10px] font-bold text-green-700 uppercase">{set.micro_action?.category}</p>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{set.micro_action?.task}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <button 
            onClick={() => setShowPreview(false)}
            className="w-full bg-purple-600 text-white font-bold py-4 rounded-3xl shadow-lg shadow-purple-100 flex items-center justify-center gap-2"
          >
            <Check size={20} />
            Approve All Content
          </button>
        </motion.div>
      )}

      <p className="text-center text-xs text-gray-400 pt-4">
        Copyright © Intercept Group Australia Pty Ltd<br/>
        Public Domain Content with Full Attribution
      </p>
    </div>
  );
};

export default SettingsPage;
