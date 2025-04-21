'use client';

import { Statistics } from '../../components/landing/Statistics';

export const About = () => {
  return (
    <section id="about" className="w-full py-14 sm:py-20">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse max-md:items-center max-md:justify-center md:flex-row gap-8 md:gap-12">
          <img
            src="/landing/rocket.svg"
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b text-red-600">Sobre </span>
                Os templates
              </h2>
              <p className="max-w-4xl text-base md:text-xl text-muted-foreground mt-4 leading-relaxed">
                Nossos templates são, desenvolvidos com{' '}
                <strong>Next.js</strong> e <strong>Supabase </strong> , oferecem
                uma solução moderna, eficiente e escalável para startups e
                negócios digitais. Com <strong>Next.js</strong>, garantimos
                carregamento rápido, renderização otimizada e uma experiência de
                usuário fluida. Já o <strong>Supabase </strong> fornece
                autenticação segura, banco de dados escalável e APIs poderosas,
                eliminando a complexidade do backend. Além disso, nosso código é
                <strong>limpo </strong> e <strong>modular </strong>, facilitando
                personalizações e manutenção. Ao utilizar nossos templates, você
                reduz drasticamente o tempo de desenvolvimento e pode focar no
                crescimento do seu negócio com tecnologia de ponta.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
