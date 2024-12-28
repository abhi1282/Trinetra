import React from 'react';
import { NavLink } from 'react-router-dom';
import { Database, Search, Shield, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-20 bg-gray-900 border-r border-cyan-500/30 flex flex-col items-center py-8 gap-8">
      <div className="text-cyan-500 animate-pulse">
        <Shield size={32} />
      </div>
      
      <div className="flex flex-col gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all duration-200 ${
              isActive
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'text-gray-400 hover:bg-gray-800'
            }`
          }
        >
          <Database size={24} />
        </NavLink>
        
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all duration-200 ${
              isActive
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'text-gray-400 hover:bg-gray-800'
            }`
          }
        >
          <Search size={24} />
        </NavLink>
        
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all duration-200 ${
              isActive
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'text-gray-400 hover:bg-gray-800'
            }`
          }
        >
          <Settings size={24} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;