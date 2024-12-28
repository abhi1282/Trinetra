import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { useRecoveryStore } from '../store/useRecoveryStore';

export const FileUploader: React.FC = () => {
  const addDiskImage = useRecoveryStore((state) => state.addDiskImage);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const image = {
        id: crypto.randomUUID(),
        name: file.name,
        size: file.size,
        uploadedAt: new Date(),
        status: 'uploading' as const,
        progress: 0,
      };
      addDiskImage(image);
    }
  }, [addDiskImage]);

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="border-2 border-dashed border-cyan-500/30 rounded-lg p-8 text-center hover:border-cyan-500/50 transition-colors"
    >
      <Upload className="mx-auto mb-4 text-cyan-500" size={48} />
      <h3 className="text-xl font-medium text-white mb-2">
        Drop Disk Image Here
      </h3>
      <p className="text-gray-400">
        Supported formats: .img, .dd, .raw
      </p>
    </div>
  );
};