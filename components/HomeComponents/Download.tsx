'use client';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { HeroCards } from '../landing/HeroCards';

export const Download = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center px-2 py-14 md:pt-28 gap-8">
      <div className="text-center lg:text-start mx-7 max-md:mx-4 space-y-4">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r text-slate-900 dark:text-gray-100  ">
              Cooderfy
            </span>{' '}
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r text-red-600 bg-clip-text">
              Start app.
            </span>{' '}
          </h2>
        </main>

        <p className="text-base text-gray-900 dark:text-gray-100 md:w-10/12 mx-auto lg:mx-0">
          Com a Cooderfy, você cria seu projetos de forma rápida, fácil e
          segura. Configure tudo com facilidade em nossa plataforma, vincule com
          o github e crie seu repositorio automaticamente com apenas alguns
          cliques, configure tambem suas palletas de cores, fontes e icones,
          além de configurar toda parte do back-end com supabas de forma
          automatica com deploy na vercel.
        </p>

        <div className="flex w-full max-sm:justify-center items-center pt-5 pb-4">
          <Link
            href="/create-project"
            passHref
            className="bg-gray-600 dark:bg-red-600 rounded-lg"
          >
            <Button className="border bg-red-600 animate-bounce mb-1">
              <span className="text-lg font-semibold darK:text-gray-700 px-16">
                Criar meu app
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
