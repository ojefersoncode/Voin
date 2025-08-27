'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function HeroLeads() {
  return (
    <section className="flex w-full justify-center items-center  bg-background to-muted py-20">
      <div className="flex w-full items-center px-6">
        {/* Texto */}
        <div className="flex flex-col w-full justify-center items-center space-y-6">
          <h1 className="md:max-w-3xl text-center text-4xl md:text-6xl font-bold leading-tight">
            Agora voçe pode negociar em ativos globais
          </h1>
          <p className="text-center text-lg max-md:text-base max-md:max-w-sm text-text/90 max-w-lg">
            Invista em moedas digitais, pares de forex e mais de 200 ativos em
            tempo real, de forma simples.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="border bg-btn dark:bg-btn hover:bg-btn dark:hover:bg-btn text-text dark:text-text"
            >
              Começar Agora
            </Button>
            <Button
              size="lg"
              className="border bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent text-text dark:text-text"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
