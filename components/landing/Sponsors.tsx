'use client';

import type { JSX } from 'react';

interface SponsorProps {
  icon: JSX.Element;
  description: string; // Mantendo apenas a descrição
}

const sponsors: SponsorProps[] = [
  {
    icon: <img src="/nextjs.svg" alt="Next js logo" className="w-32 h-20" />,
    description:
      'Next.js é um framework de React para a criação de aplicações web de alta performance, com renderização do lado do servidor e otimizações automáticas.'
  },
  {
    icon: <img src="/supabase.svg" alt="Supabase logo" className="w-48 h-20" />,
    description:
      'Supabase é uma plataforma de código aberto que fornece backend como serviço, permitindo criar aplicativos com banco de dados e autenticação prontos para usar.'
  },
  {
    icon: <img src="/vercel.svg" alt="Vercel logo" className="w-32 h-20" />,
    description:
      'Vercel é uma plataforma para deployment de front-end, otimizada para aplicações React e Next.js, oferecendo uma entrega global de alta performance.'
  },
  {
    icon: <img src="/stripe.svg" alt="Stripe logo" className="w-32 h-20" />,
    description:
      'Stripe é uma plataforma de pagamento online que facilita a integração de pagamentos de forma simples e segura em qualquer tipo de aplicação web.'
  }
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container text-center pb-12 max-md:pt-12">
      <hr className="w-full" />
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 pt-4 mt-8 mb-8 md:mb-12">
        Aqui usamos as melhores tecnologias do mercado!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-center">
        {sponsors.map(({ icon, description }, index) => (
          <div
            key={index}
            className="flex py-10 md:pt-10 flex-col items-center justify-between bg-red-600 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex w-full justify-center items-center">
              {icon}
            </div>
            <p className="text-sm text-center text-gray-200 max-md:px-4 md:pb-10 pt-4">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
