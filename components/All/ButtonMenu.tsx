'use client';

import {
  Copy,
  Grip,
  LogOut,
  Pen,
  PhoneCall,
  Settings,
  User,
  UserCircle,
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
import { useToast } from '../ui/use-toast';
import { createClient } from '../../utils/supabase/client';
import { useState } from 'react';

export default function ButtonMenu() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const supabase = createClient();

  const handleSignOut = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      toast({
        title: 'Desconectado com sucesso!'
      });

      router.push('/');
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: 'Erro ao sair',
          description: error.message,
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Erro desconhecido',
          description: 'Ocorreu um erro ao tentar sair.',
          variant: 'destructive'
        });
      }
    } finally {
      setLoading(false);
    }
  };

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
          <Button className="px-0 border-none rounded-lg outline-none bg-subbackground hover:bg-subbackground transition-transform data-[state=open]:rotate-90">
            <div className="flex w-full justify-center items-center p-2 rounded-xl">
              <Grip className="text-text/90 size-5" />
            </div>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 touch-pan-x touch-pan-y bg-background">
          <DropdownMenuLabel className="p-1 touch-pan-x touch-pan-y">
            <div className="w-full flex flex-col rounded-lg p-2 bg-subbackground">
              <div className="flex flex-col items-center py-2">
                <div className="flex w-full items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-btn flex items-center justify-center">
                    <UserCircle className="w-8 h-8 text-text" />
                  </div>
                  <div className="flex">
                    <h2 className="text-sm font-inter text-text">
                      Jeferson
                    </h2>
                  </div>
                </div>
              </div>

              <form className="flex flex-col px-1 pb-2 text-text">
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
              className="mt-2 text-xs text-text hover:text-btn"
              onClick={navigateToProfile}
            >
              <User className="size-4 mr-2 hover:text-btn" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="mt-2 text-xs text-text hover:text-text"
              onClick={navigateToWallet}
            >
              <Wallet className="size-4 mr-2 " />
              <span>Carteira</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="mt-2 text-xs text-text hover:text-text">
              <PhoneCall className="size-4 mr-2" />
              <span>Suporte</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="mt-2 text-xs text-text hover:text-text"
              onClick={navigateToSettings}
            >
              <Settings className="size-4 mr-2" />
              <span>Configurações</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleSignOut}
              disabled={loading}
              className="my-2 text-xs text-text hover:text-text"
            >
              <LogOut className="size-4 mr-2" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
