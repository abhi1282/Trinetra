import React from 'react';
import { File, Lock, Unlock, AlertTriangle } from 'lucide-react';
import type { DataFile } from '../types/data';

interface DataGridProps {
  files: DataFile[];
  onFileSelect: (file: DataFile) => void;
}

const DataGrid: React.FC<DataGridProps> = ({ files, onFileSelect }) => {
  const getStatusIcon = (status: DataFile['status']) => {
    switch (status) {
      case 'encrypted':
        return <Lock className="text-red-400" size={16} />;
      case 'decrypted':
        return <Unlock className="text-green-400" size={16} />;
      case 'corrupted':
        return <AlertTriangle className="text-yellow-400" size={16} />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {files.map((file) => (
        <div
          key={file.id}
          onClick={() => onFileSelect(file)}
          className="bg-gray-800 border border-cyan-500/30 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-all group"
        >
          <div className="flex items-center gap-3">
            <File className="text-cyan-400" size={24} />
            <div className="flex-1">
              <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                {file.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>{getStatusIcon(file.status)}</span>
                <span>{file.type}</span>
                <span>·</span>
                <span>{(file.size / 1024).toFixed(2)} KB</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataGrid;