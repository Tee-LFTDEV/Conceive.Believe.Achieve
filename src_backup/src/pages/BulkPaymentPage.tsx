import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Check, Building2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BulkPaymentPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [units, setUsers] = useState(100);
  const navigate = useNavigate();

  const handleBulkPayment = () => {
    setLoading(true);
    // Mock Stripe bulk payment
    setTimeout(() => {
      alert(`Success! You have purchased ${units} licenses. An email with your unique club code has been sent.`);
      setLoading(false);
      navigate('/landing');
    }, 2000);
  };

  const unitPrice = units >= 100 ? 0.75 : 1.00;
  const total = units * unitPrice;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          <div className="bg-gray-900 md:w-2/5 p-10 text-white flex flex-col justify-between">
            <div>
              <Building2 className="text-purple-400 h-10 w-10 mb-6" />
              <h2 className="text-3xl font-black mb-4">Bulk Licenses</h2>
              <p className="text-gray-400 font-medium">Equip your entire squad or association with the tools for resilience.</p>
            </div>
            <div className="mt-8 space-y-4">
               <div className="flex items-center gap-3">
                  <Check className="text-green-400 h-5 w-5" />
                  <span className="text-sm font-bold">Volume Discounts</span>
               </div>
               <div className="flex items-center gap-3">
                  <Check className="text-green-400 h-5 w-5" />
                  <span className="text-sm font-bold">Custom Club Code</span>
               </div>
               <div className="flex items-center gap-3">
                  <Check className="text-green-400 h-5 w-5" />
                  <span className="text-sm font-bold">Admin Dashboard</span>
               </div>
            </div>
          </div>

          <div className="md:w-3/5 p-10 space-y-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-widest">Number of Licenses</label>
              <input 
                type="range" 
                min="10" 
                max="1000" 
                step="10"
                value={units}
                onChange={(e) => setUsers(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600 mb-4"
              />
              <div className="flex justify-between items-center bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <span className="text-3xl font-black">{units} <span className="text-sm font-bold text-gray-400">Users</span></span>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 uppercase">Unit Price</p>
                  <p className="text-xl font-black text-purple-600">${unitPrice.toFixed(2)} AUD</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold">Total Investment</span>
                <span className="text-4xl font-black">${total.toLocaleString()} <span className="text-sm font-bold text-gray-400">AUD</span></span>
              </div>

              <button
                onClick={handleBulkPayment}
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-100"
              >
                {loading ? (
                  <div className="h-6 w-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <CreditCard size={22} />
                    Secure Bulk Checkout <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-400">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Encrypted & Secure Transaction</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BulkPaymentPage;
