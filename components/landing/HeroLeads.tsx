'use client';
import { HeroCards } from './HeroCards';
import { Cta } from './Cta';

export const HeroLeads = () => {
  return (
    <section className="px-6 w-full justify-start items-center grid lg:grid-cols-2 mb-4 py-10">
      <main className="flex flex-col w-full justify-start sm:ml-10">
        <Cta />
      </main>

      <div className="z-10 max-md:pt-4">
        <HeroCards />
      </div>
    </section>
  );
};
