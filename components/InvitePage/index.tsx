'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Coins, Copy, UserCheck } from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { Footer } from '../landing/Footer';
import NavbarAll from '../All/Navbar';

export default function InvitePage({ user }: { user: User }) {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col gap-4">
      <NavbarAll />

      <div className="flex max-md:flex-col w-full justify-between gap-4 py-10 max-md:py-4 lg:px-6 px-4">
        <Card className="bg-subbackground w-full text-white mb-4">
          <CardContent className="p-4 space-y-3">
            <p className="text-sm max-w-lg pb-5">
              Ganhe até 10,000 pontos para cada amigo que você convida para a
              Nexbattle. Para efetivar seu ganho, o seu amigo indicado deve
              verficar sua conta, e jogar ao menos 10 partidas.
            </p>

            <div className="flex w-full gap-4 pb-3">
              <Input
                value="https://nexbattle/ref=abc123"
                readOnly
                className=" border-btn bg-subbackground max-w-96 max-md:max-w-60 text-white"
              />

              <Button className="bg-btn hover:bg-btn/80">
                <Copy className="text-background" size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center gap-4 max-md:gap-6">
          <Card className="bg-subbackground w-full">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center font-bold">
                <UserCheck className="text-btn" />
              </div>
              <div>
                <p className="text-base font-inter">Convites qualificados</p>
                <p className="text-md font-medium">0</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-subbackground w-full">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Coins className="text-btn" />
              </div>
              <div>
                <p className="text-base font-inter">Pontos ganhos</p>
                <p className="text-md font-medium">0</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
}
