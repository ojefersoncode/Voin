'use client';
import {
  Bell,
  Calendar,
  Gift,
  Megaphone,
  Share,
  Swords,
  Trophy,
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
      icon: <Trophy className="size-7" />,
      label: 'Torneios',
      route: '/tournament'
    },
    { icon: <Megaphone className="size-7" />, label: 'Novidades', route: null },
    { icon: <Share className="size-7" />, label: 'Convidar', route: '/Invite' },
    { icon: <Calendar className="size-7" />, label: 'Tarefas', route: null },
    { icon: <Gift className="size-7" />, label: 'Bônus', route: null },
    {
      icon: <Users className="size-7" />,
      label: 'Amigos',
      route: null
    },
    { icon: <Bell className="size-7" />, label: 'Alertas', route: null }
  ];

  return (
    <div className="w-full bg-background mt-4 pb-2 max-md:px-6">
      <div className="bg-background border-none">
        <div className="flex flex-col">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 justify-between gap-7">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center bg-subbackground active:scale-90  rounded-xl transition-all duration-300">
                  <div
                    onClick={() => item.route && router.push(item.route)}
                    className="bg-subbackground duration-300 rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer font-inter text-center active:scale-90 transition-all text-btn"
                  >
                    {item.icon}
                  </div>{' '}
                </div>
                <span className="mt-4 sm:mt-6 font-inter text-xs sm:text-base text-text">
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
