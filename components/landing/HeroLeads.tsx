'use client';
import { HeroCards } from './HeroCards';
import { CaptureLeads } from './CaptureLeads';

export const HeroLeads = () => {
  return (
    <section className="container w-full justify-center items-center grid lg:grid-cols-2 bg-background py-10">
      <div className="text-center lg:text-start space-y-4">
        <main className="text-3xl md:text-6xl text-nowrap font-extrabold">
          <h1 className="inline">
            <span className="inline text-text">Jogue com seus amigos</span>
          </h1>
          <p></p>
          <h2 className="inline">
            <span className="inline text-btn">e ganhe crypto moedas.</span>
          </h2>
        </main>

        <div className="flex w-full justify-center items-center pt-6">
          <CaptureLeads />
        </div>
      </div>

      <div className="z-10 max-md:pt-7">
        <HeroCards />
      </div>
    </section>
  );
};
