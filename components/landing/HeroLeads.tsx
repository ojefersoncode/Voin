'use client';
import { HeroCards } from './HeroCards';
import { CaptureLeads } from './CaptureLeads';

export const HeroLeads = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center px-2 py-10 md:pt-20 gap-10 max-md:gap-7">
      <div className="text-center lg:text-start mx-7 max-md:mx-4 space-y-4">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r text-slate-900 dark:text-gray-100">
              Desenvola seus projetos
            </span>{' '}
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r text-red-600 bg-clip-text">
              ate 10x mais rapido.
            </span>{' '}
          </h2>
        </main>

        <p className="text-base text-gray-900 dark:text-gray-100 md:w-10/12 mx-auto lg:mx-0">
          Com a Cooderfy, você acelera o desenvolvimento do seus projetos de
          forma rápida e fácil. Cadastre-se abaixo para acessar a versão{' '}
          <strong> BETA</strong> em breve!
        </p>

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
