'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/client';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getURL } from '@/utils/helpers';
import { useToast } from '@/components/ui/use-toast';

enum PopularPlanType {
  NO = 0,
  YES = 1
}

interface PricingProps {
  id?: string;
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  redirectURL?: string;
}

const pricingList: PricingProps[] = [
  {
    title: 'Grátis',
    popular: 0,
    price: 0,
    description:
      'Conheça agora a nossa plataforma para DEV acelerar a sua produtividade.',
    buttonText: 'Vamos começar',
    benefitList: [
      'Mini cursos',
      'Lives gratuitas',
      'Templates grátis',
      'Componentes grátis'
    ],
    redirectURL: '/account'
  },
  {
    id: 'price_1Pdy8yFttF99a1NCLpDa83xf',
    title: 'Pro',
    popular: 1,
    price: 57,
    description: 'Plano ideal para quem está começando a trabalhar com SaaS.',
    buttonText: 'Quero me inscrever',
    benefitList: [
      'Cursos Pro',
      'Templates Pro',
      'Lives gratuitas',
      'Componentes Pro',
      'Acesso à comunidade'
    ]
  },
  {
    id: 'price_1Pdy8zFttF99a1NCGQJc5ZTZ',
    title: 'Empreendedor',
    popular: 0,
    price: 297,
    description:
      'Plano premium para quem quer acelerar o crescimento do seu negócio digital.',
    buttonText: 'Quero me inscrever',
    benefitList: [
      'Grupo exclusivo',
      'Suporte exclusivo',
      'Mentoria personalizada',
      'Templates exclusivos',
      'Curso completo de produtos digitais'
    ]
  }
];

export const Pricing = ({ user }: { user: User | null }) => {
  const { toast } = useToast();
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState<boolean>(false);
  const handleClick = async (price: PricingProps) => {
    if (price.redirectURL) {
      return router.push(price.redirectURL);
    }
    setLoading(true);

    if (!user) {
      setLoading(false);
      return router.push('/auth/signup');
    }

    const { data, error } = await supabase.functions.invoke('get_stripe_url', {
      body: {
        return_url: getURL('/#Pricing'),
        price: price.id
      }
    });
    if (error) {
      setLoading(false);
      return toast({
        title: 'Error Occured',
        description: error.message,
        variant: 'destructive'
      });
    }
    const redirectUrl = data?.redirect_url;
    if (!redirectUrl) {
      setLoading(false);
      return toast({
        title: 'An unknown error occurred.',
        description:
          'Please try again later or contact a system administrator.',
        variant: 'destructive'
      });
    }
    router.push(redirectUrl);
    setLoading(false);
  };
  return (
    <section id="pricing" className="container py-10 sm:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Planos e
        <span className="bg-gradient-to-b text-red-600 bg-clip-text">
          {' '}
          Preços{' '}
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Garanta agora sua assinatura e tenha acesso a conteúdos exclusivos que
        preparamos para voçe!.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10'
                : ''
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Mais escolhido
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button
                className="w-full"
                onClick={() => handleClick(pricing)}
                disabled={loading}
              >
                {pricing.buttonText}
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-red-600" />{' '}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
