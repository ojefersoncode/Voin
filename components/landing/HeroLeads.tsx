'use client';
import { HeroCards } from './HeroCards';
import { CaptureLeads } from './CaptureLeads';

export const HeroLeads = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center bg-background px-2 py-10 md:pt-20 gap-10 max-md:gap-7">
      <div className="text-center lg:text-start mx-7 max-md:mx-4 space-y-4">
        <main className="text-3xl md:text-4xl font-titan">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r text-gray-50">
              Divirta-se e ganhe crypto
            </span>
          </h1>{' '}
          <br />
          <h2 className="inline">
            <span className="inline bg-gradient-to-r text-btn bg-clip-text">
              com seus amigos.
            </span>{' '}
          </h2>
        </main>

        <div className=" max-sm:justify-center items-center py-4">
          <CaptureLeads />
        </div>
      </div>

      <div className="z-10 mt-20 max-md:mt-16">
        <HeroCards />
      </div>
    </section>
  );
};
