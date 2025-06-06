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
          <Button className="px-0 border-none rounded-lg outline-none bg-background hover:bg-background transition-transform data-[state=open]:rotate-90">
            <div className="flex w-full justify-center items-center p-2 rounded-xl">
              <Grip className="text-text/90 size-6 " />
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
                  <div className="flex flex-col">
                    <h2 className="text-x px-1 font-titan text-text">
                      Sr Jeferson
                    </h2>
                    <div className="flex items-center mt-0.5 gap-1">
                      <img
                        src="/Rank/Rank1.svg"
                        alt="Rank"
                        className="size-5"
                      />
                      <p className="text-xs font-inter text-text">Nível 1</p>
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
              className="mt-2 text-text hover:text-btn"
              onClick={navigateToProfile}
            >
              <User className="size-5 mr-2 hover:text-btn" />
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
            <DropdownMenuItem
              onClick={handleSignOut}
              disabled={loading}
              className="my-2 text-text hover:text-text"
            >
              <LogOut className="size-5 mr-2" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
