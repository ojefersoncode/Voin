import React, { useState } from 'react';
import { Card } from '../ui/card';
import NavBattle from './NavBattle';
import { Toggle } from '../ui/toggle';
import Battlebar from './BattleBar';

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
        className="absolute top-0 left-0 h-full bg-yellow-900/80 transition-all"
        style={{ width: `${value}%` }}
      />
      {children}
    </div>
  );

  const StatusMatch = [
    { key: 'X1', title: 'Solo' },
    { key: 'X2', title: 'Duo' },
    { key: 'X3', title: 'Trio' },
    { key: 'X4', title: 'Squad' }
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <header>
        <Battlebar />
      </header>

      <div className="flex flex-col w-full justify-center my-auto items-center gap-4 sm:pb-28 max-sm:pb-20 px-4">
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
          <div className="flex w-full justify-center items-center py-2">
            <span className="text-xs font-semibold">
              20 vitórias para prata
            </span>
          </div>
        </Card>

        <Card className="flex w-full justify-center items-center pt-5 bg-[#0e0e0e] border-none">
          <div className="flex justify-center items-center w-full font-sans text-white gap-6 overflow-x-auto ">
            {StatusMatch.map((item) => (
              <Toggle
                key={item.key}
                title={item.title}
                variant="outline"
                pressed={selectedMatch === item.key}
                onPressedChange={() => setSelectedMatch(item.key)}
                className="border-green-600 px-5 py-8 text-xl font-extrabold data-[state=on]:bg-green-900/20 data-[state=on]:border-green-400 data-[state=on]:border-2"
              >
                {item.key}
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
