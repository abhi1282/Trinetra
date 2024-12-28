import React, { useState } from 'react';
import { Search as SearchIcon, Filter } from 'lucide-react';
import DataGrid from '../components/DataGrid';
import type { DataFile, SearchFilters } from '../types/data';

const mockFiles: DataFile[] = [
  {
    id: '1',
    name: 'security_logs.dat',
    size: 1024 * 15,
    type: 'DAT',
    lastModified: '2024-03-15',
    status: 'encrypted'
  },
  {
    id: '2',
    name: 'user_data.json',
    size: 1024 * 8,
    type: 'JSON',
    lastModified: '2024-03-14',
    status: 'decrypted'
  }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    type: '',
    status: '',
    dateRange: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching with term:', searchTerm, 'and filters:', filters);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-8">Search Files</h1>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search files..."
              className="w-full bg-gray-800 border border-cyan-500/30 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            />
          </div>
          
          <button
            type="button"
            className="px-4 py-2 bg-gray-800 border border-cyan-500/30 rounded-lg text-white flex items-center gap-2 hover:bg-gray-700"
          >
            <Filter size={20} />
            Filters
          </button>
        </div>
      </form>

      <DataGrid files={mockFiles} onFileSelect={() => {}} />
    </div>
  );
};

export default Search;