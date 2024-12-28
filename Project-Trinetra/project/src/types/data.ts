export interface DataFile {
  id: string;
  name: string;
  size: number;
  type: string;
  lastModified: string;
  status: 'encrypted' | 'decrypted' | 'corrupted';
}

export interface SearchFilters {
  type: string;
  status: string;
  dateRange: string;
}