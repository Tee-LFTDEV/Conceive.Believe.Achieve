import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setLoading(true);
    // Mock Stripe payment
    setTimeout(() => {
      localStorage.setItem('isPaid', 'true');
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-50">
          <div className="bg-purple-600 p-8 text-center text-white relative">
            <Sparkles className="absolute top-4 right-4 text-purple-200 h-6 w-6" />
            <h2 className="text-3xl font-bold mb-2">365 Days of Resilience</h2>
            <p className="text-purple-100">Unlock your full year of training</p>
            <div className="mt-6 inline-flex items-baseline gap-1">
              <span className="text-sm font-medium opacity-80">$</span>
              <span className="text-5xl font-bold text-white">1</span>
              <span className="text-sm font-medium opacity-80">AUD / year</span>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <ul className="space-y-4">
              {[
                "Daily mindset quote & mantra",
                "Personalized micro-action plans",
                "Streak & achievement badges",
                "Parent approval layer for safety",
                "Australian sport elite coaching"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="bg-purple-100 rounded-full p-1">
                    <Check className="h-3 w-3 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-purple-100"
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <CreditCard size={20} />
                    Secure Checkout
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-400">
              <ShieldCheck size={16} />
              <span className="text-xs font-medium uppercase tracking-widest">Encrypted & Secure</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400">
          By continuing, you agree to our Terms and support <br/>
          <strong>Intercept Group Australia Pty Ltd</strong>
        </p>
      </motion.div>
    </div>
  );
};

export default PaymentPage;
