import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Award, User, Settings } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50">
      <NavLink 
        to="/" 
        className={({ isActive }) => cn(
          "flex flex-col items-center gap-1",
          isActive ? "text-purple-600" : "text-gray-500"
        )}
      >
        <Home size={24} />
        <span className="text-xs font-medium">Home</span>
      </NavLink>
      <NavLink 
        to="/badges" 
        className={({ isActive }) => cn(
          "flex flex-col items-center gap-1",
          isActive ? "text-purple-600" : "text-gray-500"
        )}
      >
        <Award size={24} />
        <span className="text-xs font-medium">Badges</span>
      </NavLink>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => cn(
          "flex flex-col items-center gap-1",
          isActive ? "text-purple-600" : "text-gray-500"
        )}
      >
        <User size={24} />
        <span className="text-xs font-medium">Profile</span>
      </NavLink>
      <NavLink 
        to="/settings" 
        className={({ isActive }) => cn(
          "flex flex-col items-center gap-1",
          isActive ? "text-purple-600" : "text-gray-500"
        )}
      >
        <Settings size={24} />
        <span className="text-xs font-medium">Settings</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
