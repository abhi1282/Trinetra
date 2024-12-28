import React from 'react';
import { Code2, Github } from 'lucide-react';

const DEVELOPERS = [
  'Abhinandan Bais',
  'Tulsi Bedarkar',
  'Ayush Nandi',
  'Mayuri Rabari'
];

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-cyan-500/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Code2 size={20} />
            <span className="font-cyber">DEVELOPERS</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {DEVELOPERS.map((dev) => (
              <div
                key={dev}
                className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-4"
              >
                <p className="text-white font-medium">{dev}</p>
                <div className="flex items-center justify-center gap-2 mt-2 text-cyan-400">
                  <Github size={16} />
                  <span className="text-sm">@{dev.toLowerCase().replace(' ', '')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};