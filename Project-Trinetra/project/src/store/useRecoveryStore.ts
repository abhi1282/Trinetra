import { create } from 'zustand';
import type { DiskImage, RecoverableFile, AnalysisResult } from '../types/recovery';

interface RecoveryStore {
  diskImages: DiskImage[];
  currentImage: DiskImage | null;
  recoverableFiles: RecoverableFile[];
  analysisResult: AnalysisResult | null;
  addDiskImage: (image: DiskImage) => void;
  updateProgress: (id: string, progress: number) => void;
  setAnalysisResult: (result: AnalysisResult) => void;
  setRecoverableFiles: (files: RecoverableFile[]) => void;
}

export const useRecoveryStore = create<RecoveryStore>((set) => ({
  diskImages: [],
  currentImage: null,
  recoverableFiles: [],
  analysisResult: null,
  
  addDiskImage: (image) => 
    set((state) => ({ 
      diskImages: [...state.diskImages, image],
      currentImage: image 
    })),
    
  updateProgress: (id, progress) =>
    set((state) => ({
      diskImages: state.diskImages.map((img) =>
        img.id === id ? { ...img, progress } : img
      ),
      currentImage: state.currentImage?.id === id 
        ? { ...state.currentImage, progress }
        : state.currentImage
    })),
    
  setAnalysisResult: (result) =>
    set({ analysisResult: result }),
    
  setRecoverableFiles: (files) =>
    set({ recoverableFiles: files })
}));