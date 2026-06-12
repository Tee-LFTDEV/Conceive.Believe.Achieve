import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Mail, Globe, Smartphone, Hash } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const VALID_CODES = [
  'HILLS-CBA-2026', 
  'BAYSIDE-SOCCER-CBA', 
  'WEST-COAST-SOFTBALL-2026',
  'NORTH-CBA',
  'QLDGOLF',
  'METRO-NETBALL-CBA',
  'MELB-GRAMMAR-CBA',
  'SYD-OLYMPIC-CBA'
];

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const codeParam = params.get('code');
    if (codeParam) {
      setCode(codeParam);
    }
  }, [location]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    localStorage.setItem('isAuthenticated', 'true');
    
    if (VALID_CODES.includes(code.toUpperCase())) {
      localStorage.setItem('isPaid', 'true');
    }
    
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center">
          <div className="bg-purple-600 w-20 h-20 rounded-3xl mx-auto flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-purple-200 mb-6">
            CBA
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Train your mind alongside your body.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
                Club/Discount Code (Optional)
              </label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="code"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  placeholder="e.g. CLUB-CODE-2026"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-purple-100"
            >
              <LogIn size={20} />
              Sign In
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 uppercase tracking-widest font-bold text-[10px]">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors">
              <Globe className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors">
              <Smartphone className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Apple</span>
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500">
          New here? <button className="text-purple-600 font-bold">Start your 365-day journey</button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
