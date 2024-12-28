export interface DiskImage {
  id: string;
  name: string;
  size: number;
  uploadedAt: Date;
  status: 'uploading' | 'analyzing' | 'ready' | 'error';
  progress: number;
}

export interface RecoverableFile {
  id: string;
  name: string;
  type: FileType;
  size: number;
  preview?: string;
  status: 'recoverable' | 'corrupted';
  path: string;
}

export type FileType = 'image' | 'document' | 'video' | 'audio' | 'other';

export interface AnalysisResult {
  totalFiles: number;
  recoverableFiles: number;
  filesByType: Record<FileType, number>;
}