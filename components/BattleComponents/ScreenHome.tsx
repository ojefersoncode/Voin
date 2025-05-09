import React, { useState } from 'react';
import { Card } from '../ui/card';
import NavbarAll from '../All/Navbar';
import NavBattle from './NavBattle';
import { Toggle } from '../ui/toggle';

export default function ScreenHome() {
  const [selectedMatch, setSelectedMatch] = useState('X1');
  const nivelAtual = 'Bronze';
  const proximoNivel = 'silver';

  const imagensLevel = [
    { Image: '/Level/bronze.svg', label: 'Bronze' },
    { Image: '/Level/silver.svg', label: 'Prata' },
    { Image: '/Level/gold.svg', label: 'Ouro' },
    { Image: '/Level/diamond.svg', label: 'Diamante' },
    { Image: '/Level/elit.svg', label: 'Elite' }
  ];

  const Progress = ({
    value,
    className,
    children
  }: {
    value: number;
    className?: string;
    children?: React.ReactNode;
  }) => (
    <div
      className={`relative w-full overflow-hidden rounded-full ${className}`}
    >
      <div className="w-full h-full bg-white/80" />
      <div
        className="absolute top-0 left-0 h-full bg-green-500 transition-all"
        style={{ width: `${value}%` }}
      />
      {children}
    </div>
  );

  const StatusMatch = ['X1', 'X2', 'X3', 'X4'];

  return (
    <div className="flex flex-col min-h-dvh">
      <header>
        <NavbarAll />
      </header>

      <div className="flex flex-col w-full justify-between items-center gap-4 py-4 px-4">
        <Card className="bg-[#0e0e0e] border-none pt-7">
          <div className="flex flex-col font-sans text-white overflow-hidden">
            <div className="flex-grow flex flex-col items-center justify-center">
              <img
                className="animate-pulse drop-shadow-xl size-52 shadow-white select-none"
                src={`/Level/${nivelAtual.toLowerCase()}.svg`}
                alt="patente"
              />
            </div>
          </div>
        </Card>

        <Card className="flex flex-col w-full max-w-sm px-10 bg-[#0e0e0e] border-none">
          <div className="flex items-center w-full font-sans text-white gap-2 overflow-hidden">
            <Progress value={28} className="h-4 w-full bg-green-600/30">
              <div className="absolute -bottom-6 left-[28%] transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-green-500" />
              </div>
            </Progress>
            <img
              className="drop-shadow-xl size-8 shadow-white select-none"
              src={`/Level/${proximoNivel.toLowerCase()}.svg`}
              alt="patente"
            />
          </div>
          <div className="flex w-full justify-center items-center py-1">
            <span className="text-xs font-semibold">
              20 vitorias para prata
            </span>
          </div>
        </Card>

        <Card className="flex w-full justify-center items-center pt-7 bg-[#0e0e0e] border-none">
          <div className="flex justify-center items-center w-full font-sans text-white gap-6 overflow-x-auto ">
            {StatusMatch.map((item) => (
              <Toggle
                variant={'outline'}
                key={item}
                pressed={selectedMatch === item}
                onPressedChange={() => setSelectedMatch(item)}
                className="border-green-600 px-5 py-8 text-xl font-extrabold data-[state=on]:bg-green-900/20 data-[state=on]:border-green-400 data-[state=on]:border-2"
              >
                {item}
              </Toggle>
            ))}
          </div>
        </Card>
      </div>

      <footer>
        <NavBattle />
      </footer>
    </div>
  );
}
