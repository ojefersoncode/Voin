'use client';

import { useTheme } from '../landing/theme-provider'; // Importe o hook 'useTheme' do seu contexto

export const HeroCards = () => {
  const { theme } = useTheme(); // Pega o tema atual

  return (
    <div className="lg:flex flex-row flex-wrap gap-8 w-full h-auto max-md:my-16">
      <div className="flex justify-center items-center md:pb-28">
        <img
          src={theme === 'dark' ? '/Plataforma.png' : '/plataforma2.png'} // Alterna as imagens conforme o tema
          alt="Cooderfy"
          className="absolute w-1/2 pr-14 max-md:w-full max-md:px-6 rounded-lg drop-shadow-lg object-cover"
        />
      </div>
    </div>
  );
};
