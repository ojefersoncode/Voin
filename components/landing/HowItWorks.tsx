'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShieldCheck,
  ChartNoAxesCombined,
  MessagesSquare,
  PaintBucket
} from 'lucide-react';
import type { JSX } from 'react';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <PaintBucket className="text-red-600 size-10" />,
    title: 'Acessibilidade',
    description:
      'Templates fáceis de editar e configurar de acordo com o seu SaaS.'
  },
  {
    icon: <MessagesSquare className="text-red-600 size-10" />,
    title: 'Comunidade',
    description:
      'Além dos templates, você ainda poderá acessar nossa comunidade privada para networking e tirar dúvidas.'
  },
  {
    icon: <ChartNoAxesCombined className="text-red-600 size-10" />,
    title: 'Escalabilidade',
    description:
      'Nossos templates são desenvolvidos para que seu produto possa ser facilmente escalado.'
  },
  {
    icon: <ShieldCheck className="text-red-600 size-10" />,
    title: 'Segurança',
    description:
      'Levamos a segurança muito a sério. Nossos templates seguem as melhores práticas para garantir a proteção dos usuários.'
  }
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center pb-10">
      <h2 className="w-full px-4 text-4xl font-bold">
        Por que escolher a{' '}
        <span className="bg-gradient-to-b from-red-500 to-red-700 text-white px-2 rounded-lg">
          Cooderfy?
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-lg text-muted-foreground">
        Veja abaixo algumas das vantagens de escolher a Cooderfy para seus
        projetos!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
