import React, { useCallback } from 'react';
import { FileUploader } from '../components/FileUploader';
import { AnalysisProgress } from '../components/AnalysisProgress';
import { RecoverableFileList } from '../components/RecoverableFileList';
import { useRecoveryStore } from '../store/useRecoveryStore';
import { analyzeDiskImage } from '../utils/fileAnalyzer';
import type { RecoverableFile } from '../types/recovery';

export const Recovery: React.FC = () => {
  const { currentImage, recoverableFiles, setRecoverableFiles } = useRecoveryStore();

  const handleRecover = useCallback(async (file: RecoverableFile) => {
    // In a real implementation, this would initiate the recovery process
    console.log('Recovering file:', file);
  }, []);

  const handleAnalysis = useCallback(async (file: File) => {
    const files = await analyzeDiskImage(file);
    setRecoverableFiles(files);
  }, [setRecoverableFiles]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Trinetra Data Recovery</h1>
      
      {!currentImage && <FileUploader />}
      
      {currentImage && (
        <div className="space-y-8">
          <AnalysisProgress image={currentImage} />
          
          {recoverableFiles.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                Recoverable Files
              </h2>
              <RecoverableFileList
                files={recoverableFiles}
                onRecover={handleRecover}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};