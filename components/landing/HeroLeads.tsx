'use client';

import { Button } from '@/components/ui/button';
import { cn } from '../../utils/cn';
import { DotPattern } from '../magicui/dot-pattern';

export default function HeroLeads() {
  return (
    <section className="flex w-full justify-center items-center h-[650px] bg-background to-muted py-20">
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
        )}
      />
      <div className="flex w-full items-center px-6">
        {/* Texto */}
        <div className="flex flex-col w-full justify-center items-center space-y-6">
          <div className="w-full md:max-w-3xl text-center text-4xl md:text-6xl font-bold leading-tight text-umber-50">
            Aprenda trading de forma
            <p className="text-umber-400 inline"> divertida e sem risco</p>
          </div>

          <p className="text-center text-lg max-md:text-base max-md:max-w-sm text-text/90 max-w-lg">
            Treine com gráficos reais, participe de torneios e mostre suas
            habilidades sem riscos. Transforme aprendizado em experiência.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="border-none z-10 bg-umber-700 font-inter dark:bg-umber-700 hover:bg-umber-800 dark:hover:bg-umber-800 text-text dark:text-text rounded-sm"
            >
              <span>Começar Agora</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
