'use client';

import { Button } from '../../components/ui/button';

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-7 my-7 sm:my-10">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Aqui suas
            <span className="bg-gradient-to-b text-red-600 bg-clip-text">
              {' '}
              Ideas & Projetos{' '}
            </span>
            Ganham vida.
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Comece hoje mesmo a transformar suas ideias em projetos de sucesso e
            aproveite os melhores templates do mercado para acelerar o seu
            produto com qualidade e eficiência.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">
            Receber Novidades
          </Button>
          <Button variant="outline" className="w-full md:w-auto">
            Quero Meu Template
          </Button>
        </div>
      </div>
    </section>
  );
};
