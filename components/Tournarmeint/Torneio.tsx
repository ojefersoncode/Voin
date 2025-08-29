import Image from 'next/image';
import React from 'react';

const prizes = [
  { place: 1, amount: 'R$:500', coin: '/coins/coin1.png' },
  { place: 2, amount: 'R$:300', coin: '/coins/coin2.png' },
  { place: 3, amount: 'R$:200', coin: '/coins/coin3.png' }
];

const leaderboard = Array.from({ length: 3 }).map((_, i) => ({
  place: i + 1,
  player: `5********${1000 + i}`,
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
    <main className="min-h-screen bg-background text-white p-6 sm:p-10 flex justify-center">
      <div className="w-full max-w-3xl">
        {/* Header / Banner */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#1f1f1f] to-[#0b0b0b] shadow-md">
          <div className="relative h-48 sm:h-56 w-full bg-black">
            <Image
              src="/bannert.png"
              alt="banner"
              fill
              style={{ objectFit: 'cover' }}
              className="brightness-90"
            />
            <div className="absolute left-2 top-2 bg-umber-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
              24:00:00
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-[#111111] flex items-center justify-center">
                <img
                  className="h-8 w-8 max-md:h-7 max-md:w-7"
                  src="/Bronk.png"
                  alt="logo"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl font-extrabold">
                  Torneio diario
                </h1>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-800 pt-5 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <div className="text-xs text-gray-400">TAXA DE INSCRIÇÃO</div>
                <div className="text-lg font-bold mt-1">R$:10</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-xs text-gray-400">TOTAL DE PRÊMIOS</div>
                <div className="text-lg font-bold mt-1">1000 R$</div>
              </div>

              <div className="sm:ml-auto sm:flex sm:items-center">
                <button className="mt-3 sm:mt-0 w-full sm:w-auto bg-umber-400 text-black px-6 py-3 rounded-xl font-semibold shadow">
                  Junte-se
                </button>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-400">
              O torneio terminará em setembro 04 em 00:00
            </div>
            <div className="mt-3 flex gap-6 text-sm text-umber-300 font-medium">
              <button className="underline">Como jogar?</button>
              <button className="underline">Detalhes do torneio</button>
            </div>
          </div>
        </div>

        {/* Prizes */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Participe e receba um destes prêmios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {prizes.map((p) => (
              <div
                key={p.place}
                className="rounded-xl bg-[#111111] p-4 flex flex-col items-center text-center"
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
        <section className="mt-8">
          <h3 className="text-lg font-bold mb-4">50 posições vencedoras</h3>
          <div className="rounded-xl overflow-hidden bg-[#0f0f0f]">
            <div className="w-full">
              <div className="grid grid-cols-12 gap-4 px-4 py-3 text-gray-400 text-sm border-b border-gray-800">
                <div className="col-span-2">LUGAR</div>
                <div className="col-span-5">JOGADOR</div>
                <div className="col-span-3">PONTOS</div>
                <div className="col-span-2 text-right">PRÊMIO, BRL</div>
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
    </main>
  );
}
