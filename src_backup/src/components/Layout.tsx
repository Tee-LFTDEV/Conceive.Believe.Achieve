import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white px-6 py-4 border-b border-gray-100 flex justify-between items-center sticky top-0 z-40">
        <h1 className="text-xl font-bold text-gray-900 m-0">CBA</h1>
        <div className="flex items-center gap-2">
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            🔥 5
          </span>
        </div>
      </header>
      <main className="px-6 py-6 max-w-lg mx-auto">
        {children}
      </main>
      <Navbar />
    </div>
  );
};

export default Layout;
