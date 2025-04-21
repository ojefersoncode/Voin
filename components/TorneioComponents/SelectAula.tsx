import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export function SelectAula() {
  // Definindo os dados como uma constante
  const alltorneios = [
    { id: 'batalha 1', label: 'Torneio diario' },
    { id: 'batalha 2', label: 'Torneio semanal' },
    { id: 'batalha 3', label: 'Torneio mensal' },
    { id: 'batalha 4', label: 'Batalha x1' },
    { id: 'batalha 5', label: 'Batalha 2x2' },
    { id: 'batalha 6', label: 'Batalha 4x4' }
  ];

  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-[#01070f]">
        <SelectValue placeholder="Filtrar Torneios" />
      </SelectTrigger>
      <SelectContent className="bg-[#01070f]">
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
