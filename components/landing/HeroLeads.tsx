'use client';
import { HeroCards } from './HeroCards';
import { CaptureLeads } from './CaptureLeads';

export const HeroLeads = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center bg-background py-10 max-md:gap-7">
      <div className="text-center lg:text-start max-md:mx-4 space-y-4">
        <main className="text-2xl md:text-4xl font-titan">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r text-gray-50">
              Jogue com seus amigos
            </span>
          </h1>
          <br />
          <h2 className="inline">
            <span className="inline bg-gradient-to-r text-btn bg-clip-text">
              e ganhe crypto moedas.
            </span>
          </h2>
        </main>

        <div className="max-sm:justify-center items-center pt-6">
          <CaptureLeads />
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>
    </section>
  );
};
