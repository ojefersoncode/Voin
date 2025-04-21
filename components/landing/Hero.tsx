'use client';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { HeroCards } from './HeroCards';

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center px-2 py-14 md:pt-28 gap-8">
      <div className="text-center lg:text-start mx-7 max-md:mx-4 space-y-4">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r text-gray-100  ">
              Desenvola seus projetos
            </span>{' '}
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r text-green-600 bg-clip-text">
              ate 10x mais rapido.
            </span>{' '}
          </h2>
        </main>

        <p className="text-base text-gray-100 md:w-10/12 mx-auto lg:mx-0">
          Com a Cooderfy, você cria seu SaaS de forma rápida, fácil e segura.
          Gerencie tudo com facilidade através de uma dashboard incrível e tenha
          total controle do seu negócio.
        </p>

        <div className="flex w-full max-sm:justify-center items-center pt-5 pb-4">
          <Link
            href="/Home"
            passHref
            className="bg-gray-600 dark:bg-green-600 rounded-lg"
          >
            <Button className="border bg-green-600 animate-bounce mb-1">
              <span className="text-lg font-semibold darK:text-gray-700 px-16">
                Acessar agora
              </span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="z-10 mt-16">
        <HeroCards />
      </div>
    </section>
  );
};
