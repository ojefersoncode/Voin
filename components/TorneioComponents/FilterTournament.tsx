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
      <SelectTrigger className="w-[120px] bg-[#181818]">
        <SelectValue placeholder="Filtrar por" />
      </SelectTrigger>
      <SelectContent className="bg-[#181818]">
        <SelectGroup>
          {alltorneios.map((alltorneios) => (
            <SelectItem key={alltorneios.id} value={alltorneios.id}>
              {alltorneios.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
