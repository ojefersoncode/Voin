'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

type FilteredResult = {
  id: number;
  title: string;
  category: string;
};

const Search = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [results, setResults] = useState<FilteredResult[]>([]);

  const data: FilteredResult[] = [
    { id: 1, title: 'Site Responsivo', category: 'web' },
    { id: 2, title: 'Aplicativo Mobile', category: 'mobile' },
    { id: 3, title: 'Modelo 3D', category: '3d' },
    { id: 4, title: 'Dashboard Web', category: 'web' },
    { id: 5, title: 'Jogo 3D', category: '3d' },
    { id: 6, title: 'E-commerce Mobile', category: 'mobile' }
  ];

  const handleSearch = (inputValue: string, selectedFilter = filter) => {
    setQuery(inputValue);

    if (inputValue.length < 3 && selectedFilter === 'all') {
      setResults([]); // Esconde os resultados se menos de 3 caracteres forem digitados e filtro for "Todos"
      return;
    }

    const filteredResults = data.filter(
      (item) =>
        (selectedFilter === 'all' || item.category === selectedFilter) &&
        item.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    setResults(filteredResults);
  };

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
    handleSearch(query, selectedFilter);
  };

  return (
    <div className="flex flex-col w-full mx-auto pt-7 pb-3 px-4 md:px-10 gap-4 bg-none text-black dark:text-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold py-2">Buscar templates</h2>

      <div className="flex flex-wrap w-full gap-4">
        <Input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 min-w-0 bg-gray-100 dark:bg-black border border-gray-300 dark:border-gray-700"
        />

        <div className="flex gap-4 items-center">
          <Select value={filter} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-24 bg-gray-100 dark:bg-black border border-gray-300 dark:border-gray-700">
              {filter === 'all'
                ? 'Filtro'
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="3d">3D</SelectItem>
              <SelectItem value="web">Web</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={() => handleSearch(query)} variant={'outline'}>
            Buscar
          </Button>
        </div>
      </div>

      {/* Exibe os resultados apenas se houverem itens na lista */}
      {results.length > 0 && (
        <div className="space-y-2 mt-4">
          {results.map((result) => (
            <Card
              key={result.id}
              className="rounded-md bg-gray-100 dark:bg-black"
            >
              <CardContent className="px-4 py-2">{result.title}</CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
