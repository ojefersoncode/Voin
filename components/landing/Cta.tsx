'use client';

import { TextAnimate } from '../magicui/text-animate';
import { CaptureLeads } from './CaptureLeads';

export const Cta = () => {
  return (
    <section id="cta" className="w-full text-btn mt-2">
      <div>
        <TextAnimate
          className="text-text text-4xl max-sm:text-2xl font-titan"
          animation="slideUp"
          by="word"
        >
          Participe da nossa comunidade faça amizades e ganhe cryptos.
        </TextAnimate>

        <TextAnimate
          className="text-start max-w-lg md:text-base text-xs font-inter my-6"
          animation="blurInUp"
          by="character"
          duration={1}
        >
          Participe da comunidade, jogue, aprenda e prepare-se para a chegada
          dos nossos jogos NFT e da moeda NEX
        </TextAnimate>
      </div>

      <div className="w-full">
        <CaptureLeads />
      </div>
    </section>
  );
};
