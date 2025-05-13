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
      icon: <Swords className="size-7" />,
      label: 'Batalhar',
      route: '/battle'
    },
    {
      icon: <ShoppingBag className="size-7" />,
      label: 'Lojinha',
      route: '/store'
    },
    { icon: <Megaphone className="size-7" />, label: 'Novidades', route: null },
    { icon: <Share className="size-7" />, label: 'Convidar', route: null },
    { icon: <Calendar className="size-7" />, label: 'Tarefas', route: null },
    { icon: <Gift className="size-7" />, label: 'Bônus', route: null },
    {
      icon: <MessageCircle className="size-7" />,
      label: 'Mensagem',
      route: null
    },
    { icon: <Bell className="size-7" />, label: 'Alertas', route: null }
  ];

  return (
    <div className="w-full bg-background">
      <div className="bg-background border-none">
        <div className="flex flex-col">
          <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-8 justify-between">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div
                  onClick={() => item.route && router.push(item.route)}
                  className="flex flex-col justify-center items-center p-4 sm:p-6 font-inter text-center text-background bg-btn rounded-lg border hover:bg-btn/80 shadow-btn shadow-md drop-shadow-md hover:text-background/80 transition-colors cursor-pointer"
                >
                  {item.icon}
                </div>
                <span className="mt-4 sm:mt-6 font-inter text-xs sm:text-sm text-text">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
