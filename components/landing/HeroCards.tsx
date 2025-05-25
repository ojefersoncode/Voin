'use client';

import Image from 'next/image';

export const HeroCards = () => {
  return (
    <div className="flex w-full justify-center items-center max-lg:mt-10 max-sm:mb-4">
      <Image
        src="/landing/Battlescreen.png" // Alterna as imagens conforme o tema
        alt="Voin"
        height={2048}
        width={1048}
        className="h-[400px] max-sm:h-[750px] max-md:h-[600px] lg:hover:scale-105 lg:hover:rotate-3 transition-all  w-fit border-2 border-gray-700 rounded-2xl cursor-none object-cover"
      />
    </div>
  );
};
