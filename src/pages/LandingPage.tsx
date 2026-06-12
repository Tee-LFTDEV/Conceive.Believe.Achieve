import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, CheckCircle2, ShieldCheck, Trophy, Smartphone, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Hero Section */}
      <header className="w-full bg-white border-b border-gray-100 py-12 px-6 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <div className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            For Athletes Aged 8-18
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Conceive. Believe. <br />
            <span className="text-purple-600">Achieve.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Build unshakeable resilience and mental strength with our 365-day gamified mindset trainer. Used by Australia's next generation of champions.
          </p>
          <button 
            onClick={() => navigate('/login')}
            className="bg-purple-600 hover:bg-purple-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-xl shadow-purple-100 transition-all transform hover:scale-105"
          >
            Start for $1 AUD/Year
          </button>
        </motion.div>
      </header>

      {/* Value Proposition */}
      <section className="max-w-5xl w-full py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
          <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Quote className="text-purple-600 h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-3">Daily Set of 3</h3>
          <p className="text-gray-600">A mindset quote, a powerful mantra, and a micro-action plan delivered every single morning.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Trophy className="text-green-600 h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-3">Elite Coaching</h3>
          <p className="text-gray-600">Drawn from the wisdom of world-class coaches across Golf, Basketball, Soccer, Netball, and more.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="text-blue-600 h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-3">Parent Approved</h3>
          <p className="text-gray-600">Full parent preview layer ensures content is age-appropriate and supports your family values.</p>
        </div>
      </section>

      {/* Testimonials/Samples Section */}
      <section className="w-full bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-black mb-4">Sample Daily Training</h2>
          <p className="text-gray-600">Here's a sneak peek of what you'll get every single morning.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sample 1: Michael Jordan */}
          <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-50">
            <div className="flex items-center gap-2 mb-4 text-purple-600">
              <Quote size={20} />
              <span className="font-bold text-sm uppercase tracking-widest">Day 1</span>
            </div>
            <p className="text-gray-800 font-medium mb-6 italic">"I've failed over and over and over again in my life. And that is why I succeed."</p>
            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-purple-400 uppercase mb-1">Mantra</p>
              <p className="font-bold text-purple-700">"Fail forward."</p>
            </div>
          </motion.div>

          {/* Sample 2: Kobe Bryant */}
          <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-50">
            <div className="flex items-center gap-2 mb-4 text-purple-600">
              <Quote size={20} />
              <span className="font-bold text-sm uppercase tracking-widest">Day 3</span>
            </div>
            <p className="text-gray-800 font-medium mb-6 italic">"What I'm doing right now, I'm chasing perfection."</p>
            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-purple-400 uppercase mb-1">Mantra</p>
              <p className="font-bold text-purple-700">"Chase your best."</p>
            </div>
          </motion.div>

          {/* Sample 3: Teamwork */}
          <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-50">
            <div className="flex items-center gap-2 mb-4 text-purple-600">
              <Quote size={20} />
              <span className="font-bold text-sm uppercase tracking-widest">Day 4</span>
            </div>
            <p className="text-gray-800 font-medium mb-6 italic">"Talent wins games, but teamwork and intelligence wins championships."</p>
            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-purple-400 uppercase mb-1">Mantra</p>
              <p className="font-bold text-purple-700">"Team first."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16">What Parents & Coaches Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Sparkles key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">"My 10-year-old son actually looks forward to his 'Mantra of the Day'. It's started some amazing conversations about resilience after his soccer matches."</p>
              <p className="font-bold">— Sarah, Parent in Brisbane</p>
            </div>
            <div className="space-y-4">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Sparkles key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">"As a netball coach, I've seen a real shift in my squad's attitude toward mistakes. They 'Fail Forward' now instead of getting down on themselves."</p>
              <p className="font-bold">— Coach Mike, Sydney Academies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-8 leading-tight">Training the Mind <br />Alongside the Body</h2>
            <ul className="space-y-4">
              {[
                "365 Days of Positive Messaging",
                "Hydration & Nutrition Tracking",
                "Kindness & Manners Challenges",
                "Personal Best (PB) Focus",
                "Earn Achievement Badges",
                "No Unauthorized Data Used"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span className="font-bold text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 rounded-[3rem] p-4 aspect-[9/16] relative overflow-hidden shadow-2xl border-8 border-gray-900">
             <div className="absolute inset-0 bg-purple-600 flex flex-col items-center justify-center text-white p-8">
                <Sparkles className="h-12 w-12 mb-4 text-purple-200" />
                <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">Today's Mantra</p>
                <p className="text-2xl font-bold text-center italic">"Fail forward. Every mistake is a lesson learned."</p>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-purple-600 rounded-[3rem] p-12 md:p-20 text-white max-w-4xl"
        >
          <h2 className="text-4xl font-black mb-6">Join 250,000+ Young Athletes</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-lg mx-auto">Build the resilience you need to succeed in sport and life for less than the price of a chocolate bar.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-left">
              <p className="text-5xl font-black">$1 AUD</p>
              <p className="text-purple-200 font-bold">Per Year / No Upsells</p>
            </div>
            <button 
              onClick={() => navigate('/login')}
              className="bg-white text-purple-600 text-xl font-bold px-12 py-5 rounded-2xl shadow-xl transition-all transform hover:scale-105"
            >
              Get Started Now
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 py-12 px-6 text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black mb-2">Conceive. Believe. Achieve.</h4>
            <p className="text-gray-400">© Intercept Group Australia Pty Ltd.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://tiktok.com" className="hover:text-purple-400 transition-colors"><Smartphone size={24} /></a>
            <a href="https://instagram.com" className="hover:text-purple-400 transition-colors"><Smartphone size={24} /></a>
            <a href="mailto:support@interceptgroup.com.au" className="hover:text-purple-400 transition-colors"><Send size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
