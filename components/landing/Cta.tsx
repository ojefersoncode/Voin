'use client';

import { CaptureLeads } from './CaptureLeads';

export const Cta = () => {
  return (
    <section id="cta" className="w-full text-btn mt-2">
      <div>
        <h1 className="text-text text-4xl max-sm:text-2xl font-titan">
          Participe da nossa comunidade faça amizades e ganhe cryptos.
        </h1>

        <h2 className="text-start max-w-lg md:text-base text-xs font-inter my-6">
          Participe da comunidade, jogue, aprenda e prepare-se para a chegada
          dos nossos jogos NFT e da moeda NEX
        </h2>
      </div>

      <div className="w-full">
        <CaptureLeads />
      </div>
    </section>
  );
};
