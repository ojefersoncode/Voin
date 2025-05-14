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
          <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-8 justify-between gap-7">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center drop-shadow-md shadow-btn bg-btn/70 active:scale-90 active:bg-btn rounded-xl pb-1 transition-all duration-300">
                  <div
                    onClick={() => item.route && router.push(item.route)}
                    className="button bg-btn border-high duration-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer font-inter text-center active:scale-90 transition-all"
                  >
                    {item.icon}
                  </div>{' '}
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
