import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export function FilterTournament() {
  // Definindo os dados como uma constante
  const alltorneios = [
    { id: 'batalha 1', label: 'Todos' },
    { id: 'batalha 2', label: 'Torneios' },
    { id: 'batalha 3', label: 'Batalhas' }
  ];

  return (
    <Select>
      <SelectTrigger className="w-[120px] bg-background font-inter border-btn">
        <SelectValue placeholder="Filtrar por" />
      </SelectTrigger>
      <SelectContent className="bg-background border-btn">
        <SelectGroup>
          {alltorneios.map((alltorneios) => (
            <SelectItem
              className="font-inter hover:text-background hover:bg-btn"
              key={alltorneios.id}
              value={alltorneios.id}
            >
              {alltorneios.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
