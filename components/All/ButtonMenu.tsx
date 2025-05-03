'use client';

import Image from 'next/image';
import {
  Copy,
  LogOut,
  Pen,
  PhoneCall,
  Plus,
  Settings,
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
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="px-0 border-none outline-none bg-none"
          >
            <div className="flex w-full justify-center items-center border border-green-600 p-1 rounded-md">
              <Image
                className="size-7"
                src="/Level/bronze.svg"
                alt="Patente"
                width={'100'}
                height={'100'}
              />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="p-1">
            <div className="w-full flex flex-col rounded-lg p-2 bg-[#212121]">
              <div className="flex flex-col items-center gap-4 py-2">
                <div className="flex w-full items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <UserCircle className="w-7 h-7 text-green-500" />
                  </div>
                  <div className="flex flex-col mt-2">
                    <h2 className="text-x gfont-bold px-1">Sr Jeferson</h2>
                    <div className="flex items-center mt-1">
                      <img src="/Level/bronze.svg" alt="" className="size-4" />
                      <span className="text-[0.60rem]">Bronze nível 5</span>
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto bg-transparent hover:bg-transparent hover:text-green-500 border-green-500 border-none focus:border-none text-green-500 px-1 py-0"
                    >
                      <Pen className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <form className="flex flex-col px-1 pb-2 text-green-50">
                <label className="text-[0.70rem] text-gray-300 mr-1">
                  Id da conta
                </label>
                <div className="flex w-full items-center text-xs text-green-50 gap-2 mt-2 cursor-pointer">
                  <span className="font-light">ID: 268434192</span>
                  <Copy className="size-3 text-gray-100" />
                </div>
              </form>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={navigateToProfile}>
              <User className="size-5 mr-2" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={navigateToWallet}>
              <Wallet className="size-5 mr-2" />
              <span>Carteira</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users className="size-5 mr-2" />
              <span>Amigos</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus className="size-5 mr-2" />
              <span>Indicar amigos</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <PhoneCall className="size-5 mr-2" />
            <span>Suportet</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={navigateToSettings}>
            <Settings className="size-5 mr-2" />
            <span>Configurações</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="size-5 mr-2" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
