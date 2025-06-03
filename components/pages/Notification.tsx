'use client';

import { User } from '@supabase/supabase-js';
import { Check } from 'lucide-react';
import NavbarAll from '../All/Navbar';
import { Footer } from '../landing/Footer';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

type NotificationItem = {
  id: number;
  title: string;
  subtitle: string;
  date: string;
};

const mockNotifications: NotificationItem[] = [
  {
    id: 1,
    title: 'Parabéns, você convidou um amigo',
    subtitle: 'Voçe ganhou 100 NEX por convidar um amigo!',
    date: '03/05/2025'
  },
  {
    id: 2,
    title: 'Parabéns, você cumpriu uma tarefa',
    subtitle: 'Resgate sua recompensa em até 72 horas!',
    date: '03/05/2025'
  },
  {
    id: 3,
    title: 'Parabéns, você cumpriu uma tarefa',
    subtitle: 'Resgate sua recompensa em até 72 horas!',
    date: '03/05/2025'
  }
];

function NotificationCard({ title, subtitle, date }: NotificationItem) {
  return (
    <Card className="p-2 border bg-background">
      <div className="flex w-full items-center gap-2 px-2">
        <div className="w-3 h-3 bg-green-500 rounded-full" />
        <h1 className="font-inter text-base sm:text-lg text-text">{title}</h1>
      </div>
      <div className="px-2 pb-2">
        <h2 className="text-xs text-text/80 font-medium">{subtitle}</h2>
      </div>
      <div className="flex w-full items-center justify-between px-2 pb-2">
        <span className="text-sm text-text/80 font-normal">{date}</span>
        <Button className="rounded-lg font-inter text-sm text-text bg-btn hover:bg-btn/80 transition-all">
          Resgatar
        </Button>
      </div>
    </Card>
  );
}

export default function Notification({ user }: { user: User }) {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <div className="flex w-full justify-between items-center px-4 py-2">
        <h1 className="sm:text-xl text-lg font-inter text-text">
          Minhas Notificações
        </h1>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 text-xs p-2 font-semibold text-text bg-red-600 hover:bg-red-700 transition-all"
        >
          <Check className="w-4 h-4" /> Marcar como lidas
        </Button>
      </div>

      <main className="flex flex-col gap-8 p-4">
        {mockNotifications.map((n) => (
          <NotificationCard key={n.id} {...n} />
        ))}
      </main>

      <section className="flex w-full items-center gap-4 pt-2 pb-10">
        <hr className="border-subbackground w-full" />
        <span className="text-xs font-semibold text-text/70 text-nowrap cursor-pointer">
          Ver todas as notificações
        </span>
        <hr className="border-subbackground w-full" />
      </section>

      <Footer />
    </div>
  );
}
