'use client';
import { HeroCards } from './HeroCards';
import { CaptureLeads } from './CaptureLeads';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { TextAnimate } from '../magicui/text-animate';
import { BlurFade } from '../magicui/blur-fade';

export const HeroLeads = () => {
  return (
    <section className="container w-full justify-center items-center grid lg:grid-cols-2 mb-4 py-10">
      <main className="flex flex-col w-full justify-center items-center sm:ml-10">
        <BlurFade className="bg-transparent py-0" delay={0.2 * 0.5} inView>
          <div className="flex items-center justify-center text-center gap-3 px-3 rounded-full border border-gray-700 mb-2 bg-subbackground hover:bg-white/10 hover:shadow-lg drop-shadow-md shadow-white transition-colors duration-200">
            <div className="flex items-center justify-center py-1 border-r h-full border-gray-700">
              <Image
                src={'/LandingImage/gift.png'}
                alt=""
                width={900}
                height={900}
                className="size-5 max-sm:size-4 mr-3"
              />
            </div>
            <span className="max-sm:text-xs text-xs font-inter text-text opacity-90">
              Jogue para ganhar
            </span>
            <ChevronRight className="text-text size-5 max-sm:size-4 opacity-95" />
          </div>
        </BlurFade>

        <div className="w-full justify-center text-center items-center font-titan text-btn mt-2">
          <TextAnimate
            className="text-text text-4xl max-sm:text-xl"
            animation="slideUp"
            by="word"
          >
            Participe da nossa comunidade
          </TextAnimate>

          <TextAnimate
            className="text-4xl max-sm:text-xl"
            animation="blurInUp"
            by="character"
            duration={1}
          >
            faça amizades e ganhe cryptos.
          </TextAnimate>
        </div>
        <div className="flex w-full max-w-lg max-sm:max-w-64 justify-center items-center pt-10">
          <CaptureLeads />
        </div>
      </main>

      <div className="z-10 max-sm:pt-4">
        <HeroCards />
      </div>
    </section>
  );
};
