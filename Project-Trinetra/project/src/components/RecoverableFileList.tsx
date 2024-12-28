import React from 'react';
import { FileIcon, Download, AlertTriangle } from 'lucide-react';
import type { RecoverableFile } from '../types/recovery';

interface Props {
  files: RecoverableFile[];
  onRecover: (file: RecoverableFile) => void;
}

export const RecoverableFileList: React.FC<Props> = ({ files, onRecover }) => {
  return (
    <div className="space-y-4">
      {files.map((file) => (
        <div
          key={file.id}
          className="bg-gray-800 border border-cyan-500/30 rounded-lg p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <FileIcon className="text-cyan-400" size={24} />
            <div>
              <h4 className="text-white font-medium">{file.name}</h4>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>{file.type}</span>
                <span>·</span>
                <span>{(file.size / 1024).toFixed(2)} KB</span>
                {file.status === 'corrupted' && (
                  <>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      <AlertTriangle size={14} />
                      Corrupted
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {file.status === 'recoverable' && (
            <button
              onClick={() => onRecover(file)}
              className="p-2 text-cyan-400 hover:bg-cyan-500/20 rounded-lg transition-colors"
            >
              <Download size={20} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};