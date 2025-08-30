import Image from 'next/image';
import React from 'react';
import { Footer } from '../landing/Footer';

const prizes = [
  { place: 1, amount: 'R$:500', coin: '/coins/coin1.png' },
  { place: 2, amount: 'R$:300', coin: '/coins/coin2.png' },
  { place: 3, amount: 'R$:200', coin: '/coins/coin3.png' }
];

const leaderboard = Array.from({ length: 3 }).map((_, i) => ({
  place: i + 1,
  player: `5***${1000 + i}`,
  points: Math.floor(Math.random() * 130000),
  prize:
    i === 0
      ? '500'
      : i === 1
        ? '300'
        : i === 2
          ? '200'
          : i === 3
            ? '1 000'
            : '250'
}));

export default function Tournament() {
  return (
    <main className="min-h-screen bg-background text-white py-4 flex flex-col justify-center">
      <div className="w-full px-2">
        {/* Header / Banner */}
        <div className="rounded-md overflow-hidden bg-gradient-to-b from-[#1f1f1f] to-[#0b0b0b] shadow-sm">
          <div className="relative h-48 sm:h-56 w-full bg-black">
            <Image
              src="/bannert.png"
              alt="banner"
              fill
              className="brightness-90 h-4 object-cover"
            />
            <div className="absolute left-2 top-2 bg-umber-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
              24:00:00
            </div>
          </div>

          <div className="py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-2">
              <div className="flex items-center gap-4">
                <h1 className="text-xl sm:text-2xl font-extrabold">
                  Torneio diario
                </h1>
              </div>

              <span className="max-md:text-xs text-sm text-text/70">
                Termina dia 04/09 as 00:00
              </span>
            </div>

            <div className="mt-6 border-t border-zinc-700 pt-5 px-2 flex justify-around  gap-4 sm:flex sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <div className="text-xs text-text/60">TAXA DE INSCRIÇÃO</div>
                <div className="text-lg font-bold mt-1">R$:10</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-xs text-text/60">TOTAL DE PRÊMIOS</div>
                <div className="text-lg font-bold mt-1">1000 R$</div>
              </div>

              <div className="sm:ml-auto flex max-sm:w-full max-md:hidden sm:flex sm:items-center">
                <button className="mt-3 flex-1 sm:mt-0 max-sm:w-full sm:w-auto bg-btn text-text text-base px-8 py-3 rounded-sm font-bold shadow">
                  Inscreva-se
                </button>
              </div>
            </div>

            <div className="flex w-full py-4 px-2 md:hidden">
              <button className="mt-3 flex-1 sm:mt-0 max-sm:w-full sm:w-auto bg-btn text-text text-sm px-6 py-3 rounded-sm font-bold shadow">
                Inscreva-se
              </button>
            </div>

            <div className="mt-3 flex text-sm text-umber-300 px-2 font-medium">
              <button className="underline">Detalhes do torneio</button>
            </div>
          </div>
        </div>

        {/* Prizes */}
        <section className="mt-8 px-2">
          <h2 className="w-full flex justify-center text-xl font-bold px-2 mb-4">
            Participe e receba um destes prêmios
          </h2>
          <div className="flex w-full bg-subbackground items-center justify-around md:justify-center md:gap-16">
            {prizes.map((p) => (
              <div
                key={p.place}
                className="rounded-xl  p-4  md:px-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 relative mb-3">
                  <Image
                    src={p.coin}
                    alt={`coin-${p.place}`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="text-sm text-gray-300">{p.place} lugar</div>
                <div className="text-lg font-extrabold mt-2">{p.amount}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Leaderboard */}
        <section className="mt-8 px-2">
          <h3 className="text-lg font-bold mb-4 px-2">3 posições vencedoras</h3>
          <div className="rounded-xl overflow-hidden bg-subbackground">
            <div className="w-full">
              <div className="grid grid-cols-12 gap-4 px-2 py-3 text-gray-400 text-sm border-b border-gray-800">
                <div className="col-span-2">LUGAR</div>
                <div className="col-span-5">JOGADOR</div>
                <div className="col-span-3">PONTOS</div>
                <div className="col-span-2 text-right">PRÊMIOS</div>
              </div>

              <div className="divide-y divide-gray-800">
                {leaderboard.map((row) => (
                  <div
                    key={row.place}
                    className="grid grid-cols-12 gap-4 items-center px-4 py-4"
                  >
                    <div className="col-span-2 flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center ${row.place === 1 ? 'bg-yellow-400' : row.place === 2 ? 'bg-gray-300 text-black' : row.place === 3 ? 'bg-orange-400' : 'bg-gray-700'}`}
                      >
                        <span className="font-bold">{row.place}</span>
                      </div>
                    </div>
                    <div className="col-span-5 text-sm text-gray-200">
                      {row.player}
                    </div>
                    <div className="col-span-3 text-sm">
                      {row.points.toLocaleString()}
                    </div>
                    <div className="col-span-2 text-right font-semibold">
                      {row.prize}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="border-t border-zinc-700 mt-6">
        <Footer />
      </div>
    </main>
  );
}
