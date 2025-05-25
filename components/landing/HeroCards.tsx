'use client';

import Image from 'next/image';

export const HeroCards = () => {
  return (
    <div className="flex w-full justify-center items-center max-sm:mt-10 max-sm:mb-4">
      <Image
        src="/landing/Battlescreen.png" // Alterna as imagens conforme o tema
        alt="Voin"
        height={2048}
        width={2048}
        className="h-[400px] max-sm:h-[600px] animate-in transition-all duration-500 w-fit border-2 border-gray-700 rounded-2xl object-contain"
      />
    </div>
  );
};
