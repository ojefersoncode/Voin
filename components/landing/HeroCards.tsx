'use client';

import Image from 'next/image';

export const HeroCards = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <Image
        src="/landing/Callimage.png" // Alterna as imagens conforme o tema
        alt="Voin"
        height={2048}
        width={2048}
        className="h-[500px]  object-contain"
      />
    </div>
  );
};
