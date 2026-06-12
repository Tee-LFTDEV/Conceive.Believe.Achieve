import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Users, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const CLUBS = {
  'hills-basketball': {
    name: 'Hills Basketball Association',
    users: '500+',
    code: 'HILLS-CBA-2026',
    color: 'bg-orange-600',
    accent: 'text-orange-600',
    light: 'bg-orange-50',
    logo: '🏀'
  },
  'bayside-soccer': {
    name: 'Bayside Soccer Academy',
    users: '300',
    code: 'BAYSIDE-SOCCER-CBA',
    color: 'bg-blue-600',
    accent: 'text-blue-600',
    light: 'bg-blue-50',
    logo: '⚽'
  },
  'west-coast-softball': {
    name: 'West Coast Softball',
    users: '80',
    code: 'WEST-COAST-SOFTBALL-2026',
    color: 'bg-yellow-600',
    accent: 'text-yellow-600',
    light: 'bg-yellow-50',
    logo: '🥎'
  }
};

const ClubLandingPage: React.FC = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const navigate = useNavigate();
  const club = CLUBS[clubId as keyof typeof CLUBS];

  if (!club) {
    return <div className="min-h-screen flex items-center justify-center">Club not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Hero */}
      <header className={`w-full ${club.color} py-16 px-6 text-center text-white`}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-6xl mb-6">{club.logo}</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{club.name}</h1>
          <p className="text-xl opacity-90 mb-8 font-medium">
            Official Resilience & Mindset Partner of {club.name}
          </p>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 inline-block">
            <p className="text-sm font-bold uppercase tracking-widest mb-2">Member Exclusive Access</p>
            <button 
              onClick={() => navigate(`/login?code=${club.code}`)}
              className="bg-white text-gray-900 text-lg font-black px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
            >
              Claim Your Access <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Why for Clubs */}
      <section className="max-w-5xl w-full py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className={`${club.light} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
            <Trophy className={`${club.accent} h-7 w-7`} />
          </div>
          <h3 className="text-xl font-bold mb-3">Performance</h3>
          <p className="text-gray-600">Train your mind to handle pressure situations and bounce back from losses faster.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className={`${club.light} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
            <Users className={`${club.accent} h-7 w-7`} />
          </div>
          <h3 className="text-xl font-bold mb-3">Culture</h3>
          <p className="text-gray-600">Build a unified culture of resilience and kindness across the entire association.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className={`${club.light} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
            <ShieldCheck className={`${club.accent} h-7 w-7`} />
          </div>
          <h3 className="text-xl font-bold mb-3">Parent Trust</h3>
          <p className="text-gray-600">Give parents peace of mind with our built-in safety layers and age-tested content.</p>
        </div>
      </section>

      {/* Features */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "365 Days of Mindset Quotes & Mantras",
              "Personal Best (PB) Daily Tracking",
              "Hydration & Nutrition Habits",
              "Kindness & Manners Challenges",
              "Achievement Badges & Streaks",
              "Parent Approval Dashboard"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0" />
                <span className="font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Footer */}
      <footer className="w-full bg-gray-900 py-12 px-6 text-white text-center">
        <p className="text-gray-400 mb-4">Partnering with Australian Sport Elite</p>
        <h4 className="text-2xl font-black mb-6">Conceive. Believe. Achieve.</h4>
        <div className="w-16 h-1 bg-white/20 mx-auto"></div>
      </footer>
    </div>
  );
};

export default ClubLandingPage;
