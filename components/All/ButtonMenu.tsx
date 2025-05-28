'use client';

import Image from 'next/image';
import {
  Copy,
  Grip,
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
  const navigateToWallet = () => router.push('/nex-wallet');
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
            className="px-0 border-none outline-none bg-none transition-transform data-[state=open]:rotate-90"
          >
            <div className="flex w-full justify-center items-center bg-subbackground p-2 rounded-xl">
              <Grip className="text-text/90 size-6 " />
            </div>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 touch-pan-x touch-pan-y bg-background">
          <DropdownMenuLabel className="p-1 touch-pan-x touch-pan-y">
            <div className="w-full flex flex-col rounded-lg p-2 bg-btn">
              <div className="flex flex-col items-center py-2">
                <div className="flex w-full items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                    <UserCircle className="w-8 h-8 text-btn" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-x px-1 font-titan text-background">
                      Sr Jeferson
                    </h2>
                    <div className="flex items-center mt-1 gap-1">
                      <img src="/Rank/Rank1.svg" alt="" className="size-4" />
                      <p className="text-sm font-titan text-background">
                        Nível 1
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="ghost"
                      onClick={navigateToProfile}
                      size="sm"
                      className="ml-auto bg-transparent hover:bg-transparent hover:text-background border-none focus:border-none text-background px-2 py-0"
                    >
                      <Pen className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <form className="flex flex-col px-1 pb-2 text-background">
                <label className="text-[0.70rem] mr-1 font-inter">
                  Id da conta
                </label>
                <div className="flex w-full items-center text-xs gap-1 py-0 cursor-pointer">
                  <span className="font-bold">ID: 268434192</span>
                  <Copy className="size-3" />
                </div>
              </form>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup className="touch-pan-x touch-pan-y text-text font-inter">
            <DropdownMenuItem
              className="mt-2 text-text hover:text-border"
              onClick={navigateToProfile}
            >
              <User className="size-5 mr-2 " />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="mt-2 text-text hover:text-text"
              onClick={navigateToWallet}
            >
              <Wallet className="size-5 mr-2 " />
              <span>Carteira</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="mt-2 text-text hover:text-text">
              <Users className="size-5 mr-2" />
              <span>Amigos</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="mt-2 text-text hover:text-text">
              <UserPlus className="size-5 mr-2" />
              <span>Indicar amigos</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="mt-2 text-text hover:text-text">
              <PhoneCall className="size-5 mr-2" />
              <span>Suporte</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="mt-2 text-text hover:text-text"
              onClick={navigateToSettings}
            >
              <Settings className="size-5 mr-2" />
              <span>Configurações</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="my-2 text-text hover:text-text">
              <LogOut className="size-5 mr-2" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
