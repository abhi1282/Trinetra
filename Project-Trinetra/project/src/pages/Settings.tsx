import React from 'react';
import { Save, RefreshCw, Shield, Database } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-8">System Settings</h1>

      <div className="space-y-6">
        <div className="bg-gray-800 border border-cyan-500/30 rounded-lg p-6">
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
            <Shield size={20} className="text-cyan-400" />
            Security Settings
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Encryption Algorithm</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white">
                <option value="aes">AES-256</option>
                <option value="rsa">RSA-4096</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2">Auto-Lock Timeout (minutes)</label>
              <input
                type="number"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
                defaultValue={15}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border border-cyan-500/30 rounded-lg p-6">
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
            <Database size={20} className="text-cyan-400" />
            Storage Settings
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Auto-Backup Frequency</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2">Storage Location</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
                defaultValue="/data/backups"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg flex items-center gap-2 hover:bg-cyan-600">
            <Save size={20} />
            Save Settings
          </button>
          
          <button className="px-6 py-2 bg-gray-700 text-white rounded-lg flex items-center gap-2 hover:bg-gray-600">
            <RefreshCw size={20} />
            Reset Defaults
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;