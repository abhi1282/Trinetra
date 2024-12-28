import React from 'react';
import { Eye } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="relative py-12 mb-8 border-b border-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Eye className="w-12 h-12 text-cyan-400" />
          <h1 className="text-6xl font-bold font-cyber cyber-gradient">
            TRINETRA
          </h1>
        </div>
        
        <p className="text-cyan-400 font-cyber tracking-wider">
          ADVANCED DATA RECOVERY SYSTEM
        </p>
      </div>
    </div>
  );
};