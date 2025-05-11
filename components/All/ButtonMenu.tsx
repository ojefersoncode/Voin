'use client';

import Image from 'next/image';
import {
  Copy,
  LogOut,
  Menu,
  Pen,
  PhoneCall,
  Plus,
  Settings,
  SquareMenu,
  User,
  UserCircle,
  UserPlus,
  Users,
  Wallet
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export default function ButtonMenu() {
  const router = useRouter();

  const navigateToHome = () => router.push('/');
  const navigateToWallet = () => router.push('/voin-wallet');
  const navigateToProfile = () => router.push('/profile');
  const navigateToSettings = () => router.push('/settings');
  const navigateToMarket = () => router.push('/market');
  const navigateToTrade = () => router.push('/trade');

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="touch-pan-x touch-pan-y" asChild>
          <Button
            variant="ghost"
            className="px-0 border-none outline-none bg-none"
          >
            <div className="flex w-full justify-center items-center border border-opacity-80 p-1 rounded-md">
              <Menu className="text-text/90 size-7" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 touch-pan-x touch-pan-y bg-background">
          <DropdownMenuLabel className="p-1 touch-pan-x touch-pan-y">
            <div className="w-full flex flex-col rounded-lg p-2 bg-btn">
              <div className="flex flex-col items-center py-2">
                <div className="flex w-full items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-background/40 flex items-center justify-center">
                    <UserCircle className="w-7 h-7 text-text" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-x gfont-bold px-1 font-titan">
                      Sr Jeferson
                    </h2>
                    <div className="flex items-center">
                      <img src="/Rank/Rank1.svg" alt="" className="size-4" />
                      <span className="text-[0.60rem] font-inter">
                        Rank nível 1
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="ghost"
                      onClick={navigateToProfile}
                      size="sm"
                      className="ml-auto bg-transparent hover:bg-transparent hover:text-text border-none focus:border-none text-text px-2 py-0"
                    >
                      <Pen className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <form className="flex flex-col px-1 pb-2 text-green-50">
                <label className="text-[0.70rem] text-gray-100 mr-1 font-inter">
                  Id da conta
                </label>
                <div className="flex w-full items-center text-xs text-green-50 gap-1 py-0 cursor-pointer">
                  <span className="font-light">ID: 268434192</span>
                  <Copy className="size-3 text-gray-100" />
                </div>
              </form>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup className="touch-pan-x touch-pan-y text-white">
            <DropdownMenuItem
              className="mt-2 text-text hover:text-text"
              onClick={navigateToProfile}
            >
              <User className="size-5 mr-2 " />
              <span className="text-white">Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="mt-2 text-text hover:text-text"
              onClick={navigateToWallet}
            >
              <Wallet className="size-5 mr-2 " />
              <span className="text-white">Carteira</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="mt-2 text-text hover:text-text">
              <Users className="size-5 mr-2" />
              <span className="text-white">Amigos</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="mt-2 text-text hover:text-text">
              <UserPlus className="size-5 mr-2" />
              <span className="text-white">Indicar amigos</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="mt-2 text-text hover:text-text">
              <PhoneCall className="size-5 mr-2" />
              <span className="text-white">Suportet</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="mt-2 text-text hover:text-text"
              onClick={navigateToSettings}
            >
              <Settings className="size-5 mr-2" />
              <span className="text-white">Configurações</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="my-2 text-text hover:text-text">
              <LogOut className="size-5 mr-2" />
              <span className="text-white">Sair</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
