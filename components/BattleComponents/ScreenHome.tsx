import React, { useState } from 'react';
import { Card } from '../ui/card';
import NavBattle from './NavBattle';
import { Toggle } from '../ui/toggle';
import Battlebar from './BattleBar';
import Image from 'next/image';

export default function ScreenHome() {
  const [selectedMatch, setSelectedMatch] = useState('Rankeada');
  const nivelAtual = 'Rank1';
  const proximoNivel = 'Rank2';

  const StatusMatch = [{ key: 'Rankeada', title: 'Solo' }];

  const imagensLevel = [
    { Image: '/Rank/Rank1.svg', label: 'Rank1' },
    { Image: '/Rank/Rank2.svg', label: 'Rank2' },
    { Image: '/Rank/Rank3.svg', label: 'Rank3' },
    { Image: '/Rank/Rank4.svg', label: 'Rank4' },
    { Image: '/Rank/Elit.svg', label: 'Elite' }
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
        className="absolute top-0 left-0 h-full bg-green-600 transition-all"
        style={{ width: `${value}%` }}
      />
      {children}
    </div>
  );

  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-r from-background via-blue-950 to-background">
      <header>
        <Battlebar />
      </header>

      <div className="flex flex-col w-full justify-center my-auto items-center gap-4 sm:pb-28 max-sm:pb-20 px-4">
        <Card className="bg-transparent border-none pt-4">
          <div className="flex flex-col font-sans">
            <div className="flex-grow flex flex-col items-center justify-center">
              <Image
                width={600}
                height={1200}
                priority={true}
                className="size-48 select-none"
                src={`/Rank/${nivelAtual}.svg`}
                alt="Rank"
              />
            </div>
          </div>
        </Card>

        <Card className="flex flex-col w-full max-w-sm px-10 bg-transparent border-none">
          <div className="flex items-center w-full font-sans text-white gap-2 overflow-hidden">
            <Progress value={28} className="h-4 w-full">
              <div className="absolute -bottom-6 left-[28%] transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-green-500" />
              </div>
            </Progress>
            <Image
              width={500}
              height={900}
              priority={true}
              className="drop-shadow-xl size-7 opacity-90 shadow-white select-none"
              src={`/Rank/${proximoNivel}.svg`}
              alt="Next rank"
            />
          </div>
          <div className="flex w-full justify-center items-center py-1">
            <span className="text-xs font-titan">20 vitórias para nivel 2</span>
          </div>
        </Card>

        <Card className="flex w-full justify-center items-center pt-5 pb-4 bg-transparent border-none">
          <div className="flex justify-center items-center w-full font-sans text-white gap-6 overflow-x-auto ">
            {StatusMatch.map((item) => (
              <Toggle
                key={item.key}
                title={item.title}
                variant="outline"
                pressed={selectedMatch === item.key}
                onPressedChange={() => setSelectedMatch(item.key)}
                className="border-2 border-btn px-5 py-8 text-xl font-titan text-btn data-[state=on]:text-btn/40 data-[state=on]:bg-background/20 data-[state=on]:border-btn/30 data-[state=on]:border-4 hover:border-btn/70 hover:text-btn/70"
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
