'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Subscribed!');
  };

  return (
    <section id="newsletter">
      <div className="container py-4 sm:py-4">
        <div className=" bg-subbackground rounded py-12">
          <div className="px-4">
            <h3 className="text-center text-umber-50 text-4xl md:text-5xl font-bold">
              Entre para nossa{' '}
              <span className="bg-gradient-to-b text-umber-400">
                Newsletter
              </span>
            </h3>
            <p className="text-xl text-umber-50/70 text-center mt-4 mb-8">
              Receba as melhores novidades e atualizações direto no seu email.
            </p>

            <form
              className="flex flex-col justify-center items-center w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
              onSubmit={handleSubmit}
            >
              <Input
                placeholder="ojefersoncode@gmail.com"
                className="border bg-umber-400 dark:bg-umber-400 font-inter text-blackground"
                aria-label="email"
              />
              <Button className="w-full border bg-subbackground dark:bg-subbackground">
                Inscrever
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
