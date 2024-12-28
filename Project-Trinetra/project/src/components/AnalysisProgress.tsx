import React from 'react';
import { CircleProgress } from './CircleProgress';
import type { DiskImage } from '../types/recovery';

interface Props {
  image: DiskImage;
}

export const AnalysisProgress: React.FC<Props> = ({ image }) => {
  return (
    <div className="bg-gray-800 border border-cyan-500/30 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">{image.name}</h3>
        <span className="text-cyan-400">
          {(image.size / (1024 * 1024)).toFixed(2)} MB
        </span>
      </div>
      
      <div className="flex items-center justify-center py-4">
        <CircleProgress progress={image.progress} />
      </div>
      
      <div className="text-center mt-4">
        <p className="text-gray-400">
          {image.status === 'analyzing' ? 'Analyzing disk image...' : 'Upload complete'}
        </p>
      </div>
    </div>
  );
};