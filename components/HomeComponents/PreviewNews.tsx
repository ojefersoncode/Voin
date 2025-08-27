'use client';

import CardBlog from '../BlogComponent/CardBlog';
import { CalendarDays } from 'lucide-react';

export default function PreviewNews() {
  return (
    <div className="relative flex flex-col w-full bg-background touch-pan-x touch-pan-y">
      <main className="flex flex-1 flex-col">
        <div className="sm:px-2 mb-4">
          <div className="flex w-full justify-between items-center px-6 mt-4">
            <h1 className="text-lg sm:text-2xl text-text/90 font-inter">
              Noticias do dia
            </h1>
            <div className="flex gap-1 items-center text-sm sm:text-lg font-inter text-text/70">
              <CalendarDays className="size-4 sm:size-5" />
              <span> 03/05/2025 </span>
            </div>
          </div>

          <CardBlog />
        </div>
      </main>
    </div>
  );
}
