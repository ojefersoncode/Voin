'use client';

import {
  Grip,
  LogOut,
  Pen,
  PhoneCall,
  Settings,
  User,
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
          <Button className="px-0 border border-zinc-700 rounded-lg outline-none bg-subbackground hover:bg-subbackground transition-transform data-[state=open]:rotate-90">
            <div className="flex w-full justify-center items-center p-2 rounded-xl">
              <Grip className="text-text/90 size-5" />
            </div>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 touch-pan-x touch-pan-y bg-background">
          <DropdownMenuLabel className="p-1 touch-pan-x touch-pan-y">
            <div className="w-full flex flex-col rounded-lg p-2 bg-subbackground">
              <div className="flex flex-col items-center py-2">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img className="size-5" src="/Brl.png" alt="BRL" />
                    <h2 className="text-[0.65rem] font-inter text-text">BRL</h2>
                  </div>
                  <Wallet />
                </div>
              </div>
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
