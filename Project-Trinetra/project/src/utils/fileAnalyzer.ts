import type { FileType, RecoverableFile } from '../types/recovery';

export async function analyzeDiskImage(file: File): Promise<RecoverableFile[]> {
  // In a real implementation, this would use more sophisticated analysis
  // Currently implementing a mock version for demonstration
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockFiles: RecoverableFile[] = [];
      const types: FileType[] = ['image', 'document', 'video', 'audio', 'other'];
      
      for (let i = 0; i < 10; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        mockFiles.push({
          id: `file-${i}`,
          name: `recovered-${i}.${getExtensionForType(type)}`,
          type,
          size: Math.random() * 1024 * 1024,
          status: Math.random() > 0.2 ? 'recoverable' : 'corrupted',
          path: `/sector/${Math.floor(Math.random() * 1000)}`,
        });
      }
      
      resolve(mockFiles);
    }, 2000);
  });
}

function getExtensionForType(type: FileType): string {
  switch (type) {
    case 'image': return 'jpg';
    case 'document': return 'pdf';
    case 'video': return 'mp4';
    case 'audio': return 'mp3';
    default: return 'dat';
  }
}