'use client';
import { HeroCards } from './HeroCards';
import { CaptureLeads } from './CaptureLeads';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export const HeroLeads = () => {
  return (
    <section className="container w-full justify-center items-center grid lg:grid-cols-2 bg-background py-10">
      <div className="text-center lg:text-start space-y-4">
        <main className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center text-center gap-3 py-1 px-3 rounded-full border border-gray-700 mb-2 bg-subbackground hover:bg-white/10 hover:shadow-lg drop-shadow-md shadow-white transition-colors duration-200">
            <div className="border-r h-full border-gray-700">
              <Image
                src={'/LandingImage/gift.png'}
                alt=""
                width={900}
                height={900}
                className="size-6 max-sm:size-5 mr-3"
              />
            </div>
            <span className="max-sm:text-xs text-sm font-medium text-text opacity-90">
              Jogue para ganhar
            </span>
            <ChevronRight className="text-text size-4 max-sm:size-3 opacity-95" />
          </div>

          <div className="text-4xl max-sm:text-2xl font-titan text-btn">
            <h1 className="text-text max-sm:text-xl">
              Participe da nossa comunidade
            </h1>
            <h2 className="max-sm:text-xl">faça amizades e ganhe cryptos.</h2>
          </div>
        </main>

        <div className="flex w-full justify-center items-center pt-4">
          <CaptureLeads />
        </div>
      </div>

      <div className="z-10 max-md:pt-7">
        <HeroCards />
      </div>
    </section>
  );
};
