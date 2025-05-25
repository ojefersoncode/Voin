'use client';
import { HeroCards } from './HeroCards';
import { CaptureLeads } from './CaptureLeads';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { TextAnimate } from '../magicui/text-animate';
import { BlurFade } from '../magicui/blur-fade';
import { Button } from '../ui/button';

export const HeroLeads = () => {
  return (
    <section className="container w-full justify-center items-center grid lg:grid-cols-2 mb-4 py-10">
      <main className="flex flex-col w-full justify-center items-center sm:ml-10">
        <BlurFade className="bg-transparent py-0" delay={0.2 * 0.5} inView>
          <div className="flex items-center justify-center text-center gap-3 px-3 rounded-full border border-gray-700 mb-2 bg-subbackground hover:bg-white/10 hover:shadow-lg drop-shadow-md shadow-white transition-colors duration-200">
            <Button className="flex justify-center items-center bg-transparent hover:bg-transparent p-0">
              <div className="flex items-center justify-center border-r h-full border-gray-700">
                <Image
                  src={'/LandingImage/gift.png'}
                  alt=""
                  width={900}
                  height={900}
                  className="size-6 max-sm:size-5 mr-3"
                />
              </div>
            </Button>
            <span className="max-sm:text-xs text-xs font-inter text-text opacity-90">
              Jogue para ganhar
            </span>
            <ChevronRight className="text-text size-5 max-sm:size-4 opacity-95" />
          </div>
        </BlurFade>

        <div className="w-full justify-center text-center items-center text-4xl max-sm:text-2xl font-titan text-btn mt-2">
          <TextAnimate
            className="text-text max-sm:text-xl"
            animation="slideUp"
            by="word"
          >
            Participe da nossa comunidade
          </TextAnimate>

          <TextAnimate
            className="max-sm:text-xl"
            animation="blurInUp"
            by="character"
            duration={1}
          >
            faça amizades e ganhe cryptos.
          </TextAnimate>
        </div>
        <div className="flex w-full justify-center items-center pt-4">
          <CaptureLeads />
        </div>
      </main>

      <div className="z-10 max-md:pt-7 sm:ml-10">
        <HeroCards />
      </div>
    </section>
  );
};
