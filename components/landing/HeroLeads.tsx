'use client';

import { Button } from '@/components/ui/button';
import { cn } from '../../utils/cn';
import { DotPattern } from '../magicui/dot-pattern';

export default function HeroLeads() {
  return (
    <section className="flex w-full justify-center items-center  bg-background to-muted py-20">
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
        )}
      />
      <div className="flex w-full items-center px-6">
        {/* Texto */}
        <div className="flex flex-col w-full justify-center items-center space-y-6">
          <div className="w-full md:max-w-3xl text-center text-4xl md:text-6xl font-bold leading-tight text-umber-50">
            Agora voçe pode negociar em{' '}
            <p className="text-umber-400 inline">ativos globais</p>
          </div>

          <p className="text-center text-lg max-md:text-base max-md:max-w-sm text-text/90 max-w-lg">
            Invista em moedas digitais, pares de forex e mais de 200 ativos em
            tempo real, de forma simples.
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
