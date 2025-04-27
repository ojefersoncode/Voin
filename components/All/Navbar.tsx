import Image from 'next/image';
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Pen,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserCircle,
  UserPlus,
  Users
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import ButtonMenu from './ButtonMenu';

export default function NavbarAll() {
  return (
    <>
      <header className=" bg-[#0e0e0e] border-b border-green-500/20 mb-2">
        <nav className="flex items-center justify-between py-2 p-2">
          <div className="flex items-center gap-1 px-2">
            <h1 className="font-mono font-bold text-green-50 text-sm">VOIN</h1>
          </div>

          <div className="flex gap-2 p-4">
            <div className="flex items-center justify-center gap-1 px-4 rounded-md text-green-50  border border-green-50 border-opacity-20 cursor-pointer bg-[#181818]">
              <img src="/Voin.png" alt="Logo" className="size-5" />
              <h1 className="mr-1 text-xs">130.000.00</h1>
            </div>

            <div>
              <ButtonMenu />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
