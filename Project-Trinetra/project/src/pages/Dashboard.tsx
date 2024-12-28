import React from 'react';
import { Database, Shield, AlertTriangle } from 'lucide-react';
import DataGrid from '../components/DataGrid';
import type { DataFile } from '../types/data';

const mockFiles: DataFile[] = [
  {
    id: '1',
    name: 'security_logs.dat',
    size: 1024 * 15,
    type: 'DAT',
    lastModified: '2024-03-15',
    status: 'encrypted'
  },
  {
    id: '2',
    name: 'user_data.json',
    size: 1024 * 8,
    type: 'JSON',
    lastModified: '2024-03-14',
    status: 'decrypted'
  },
  {
    id: '3',
    name: 'system_backup.bak',
    size: 1024 * 45,
    type: 'BAK',
    lastModified: '2024-03-13',
    status: 'corrupted'
  }
];

const Dashboard = () => {
  const handleFileSelect = (file: DataFile) => {
    console.log('Selected file:', file);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-8">System Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 border border-cyan-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <Database className="text-cyan-400" />
            <h2 className="text-white font-medium">Total Files</h2>
          </div>
          <p className="text-3xl font-bold text-white">{mockFiles.length}</p>
        </div>
        
        <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="text-green-400" />
            <h2 className="text-white font-medium">Secured Files</h2>
          </div>
          <p className="text-3xl font-bold text-white">
            {mockFiles.filter(f => f.status === 'encrypted').length}
          </p>
        </div>
        
        <div className="bg-gray-800 border border-yellow-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="text-yellow-400" />
            <h2 className="text-white font-medium">Corrupted Files</h2>
          </div>
          <p className="text-3xl font-bold text-white">
            {mockFiles.filter(f => f.status === 'corrupted').length}
          </p>
        </div>
      </div>

      <DataGrid files={mockFiles} onFileSelect={handleFileSelect} />
    </div>
  );
};

export default Dashboard;