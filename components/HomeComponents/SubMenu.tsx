'use client';
import {
  Bell,
  Calendar,
  FileClock,
  Gift,
  Megaphone,
  MessageCircle,
  Share,
  ShoppingBag,
  Swords,
  Users
} from 'lucide-react';
import { Card } from '../ui/card';
import { useRouter } from 'next/navigation';

export default function SubMenu() {
  const router = useRouter();

  const menuItems = [
    {
      icon: <Swords className="size-5" />,
      label: 'Batalhar',
      route: '/battle'
    },
    {
      icon: <ShoppingBag className="size-5" />,
      label: 'Lojinha',
      route: '/store'
    },
    { icon: <Megaphone className="size-5" />, label: 'Novidades', route: null },
    { icon: <Share className="size-5" />, label: 'Convidar', route: null },
    { icon: <Calendar className="size-5" />, label: 'Tarefas', route: null },
    { icon: <Gift className="size-5" />, label: 'Bônus', route: null },
    {
      icon: <MessageCircle className="size-5" />,
      label: 'Mensagem',
      route: null
    },
    { icon: <Bell className="size-5" />, label: 'Alertas', route: null }
  ];

  return (
    <div className="w-full max-sm:px-4 sm:px-6 bg-background">
      <Card className="bg-background border-none">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-8 gap-3">
            {menuItems.slice(0).map((item, index) => (
              <div
                key={index}
                onClick={() => item.route && router.push(item.route)}
                className="flex flex-col justify-center items-center gap-2 h-20 p-2 font-inter text-center   text-border text-xs bg-btn rounded hover:bg-background/40 transition-colors cursor-pointer"
              >
                {item.icon}
                <span className="mt-1 text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
