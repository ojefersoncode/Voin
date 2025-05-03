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

export default function SubMenu() {
  const menuItems = [
    { icon: <Swords className="size-5" />, label: 'Batalhar' },
    { icon: <FileClock className="size-5" />, label: 'Historico' },
    { icon: <ShoppingBag className="size-5" />, label: 'Lojinha' },
    { icon: <Megaphone className="size-5" />, label: 'Novidades' },
    { icon: <Share className="size-5" />, label: 'Convidar' },
    { icon: <Calendar className="size-5" />, label: 'Tarefas' },
    { icon: <Gift className="size-5" />, label: 'Bônus' },
    { icon: <Users className="size-5" />, label: 'Grupos' },
    { icon: <MessageCircle className="size-5" />, label: 'Mensagem' },
    { icon: <Bell className="size-5" />, label: 'Alertas' }
  ];

  return (
    <div className="w-full max-sm:px-4 sm:px-6 bg-[#0e0e0e]">
      <Card className="bg-[#0e0e0e] border-none">
        <div className="flex flex-col gap-3">
          {/* Primeira linha - 5 itens */}
          <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 gap-3">
            {menuItems.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2 h-20 p-2 text-center text-green-600 text-xs bg-[#181818] rounded hover:bg-[#222222] transition-colors cursor-pointer"
              >
                {item.icon}
                <span className="mt-1 text-white">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Segunda linha - 5 itens */}
          <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 gap-3">
            {menuItems.slice(5, 10).map((item, index) => (
              <div
                key={index + 5}
                className="flex flex-col justify-center items-center gap-2 h-20 p-2 text-green-600 text-center text-xs bg-[#181818] rounded hover:bg-[#222222] transition-colors cursor-pointer"
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
