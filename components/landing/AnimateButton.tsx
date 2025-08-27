import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { BlurFade } from '../magicui/blur-fade';

export const AnimateButton = () => {
  return (
    <BlurFade className="bg-transparent py-0" delay={0.2 * 0.5} inView>
      <div className="flex items-center justify-center text-center gap-3 px-3 rounded-full border border-gray-700 mb-2 bg-subbackground hover:bg-white/10 hover:shadow-lg drop-shadow-md shadow-white transition-colors duration-200">
        <div className="flex items-center justify-center py-1 border-r h-full border-gray-700">
          <Image
            src={'/LandingImage/gift.png'}
            alt=""
            width={700}
            height={900}
            className="h-5 w-4 max-sm:h-4 max-sm:w-3 mr-3"
          />
        </div>
        <span className="max-sm:text-xs text-xs font-inter text-text opacity-90">
          Jogue para ganhar
        </span>
        <ChevronRight className="text-text size-5 max-sm:size-4 opacity-95" />
      </div>
    </BlurFade>
  );
};
