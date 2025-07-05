'use client';
import {
  Calendar,
  Gift,
  Megaphone,
  Share,
  TrendingUp
} from 'lucide-react';
import { Card } from '../ui/card';
import { useRouter } from 'next/navigation';

export default function SubMenu() {
  const router = useRouter();

  const menuItems = [
    {
      icon: <TrendingUp className="size-6 max-md:size-5" />,
      label: 'Trade',
      route: '/trade'
    },
    {
      icon: <Megaphone className="size-6 max-md:size-5" />,
      label: 'Novidades',
      route: '/blog'
    },
    { icon: <Gift className="size-6 max-md:size-5" />, label: 'Bônus', route: '/bonus' },
    { icon: <Calendar className="size-6 max-md:size-5" />, label: 'Tarefas', route: '/task' },
    { icon: <Share className="size-6 max-md:size-5" />, label: 'Convidar', route: '/Invite' }
  ];

  return (
    <div className="w-full bg-background mt-4 pb-2 max-md:px-2">
      <div className="bg-background">
        <div className="flex flex-col">
          <div className="grid grid-cols-5 justify-between gap-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center bg-subbackground border border-zinc-700 active:scale-90  rounded-lg transition-all duration-300">
                  <div
                    onClick={() => item.route && router.push(item.route)}
                    className="bg-subbackground duration-300 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer font-inter text-center active:scale-90 transition-all text-subtext"
                  >
                    {item.icon}
                  </div>
                </div>
                <span className="mt-2 font-inter text-xs sm:text-base text-text">
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
