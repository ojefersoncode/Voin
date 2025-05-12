'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

import { Button, buttonVariants } from '../../components/ui/button';
import { Menu } from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { createApiClient } from '@/utils/supabase/api';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useToast } from '../../components/ui/use-toast';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '/',
    label: 'Inicio'
  },
  {
    href: '/#about',
    label: 'Sobre'
  },
  {
    href: '/#pricing',
    label: 'Preços'
  },
  {
    href: '/#faq',
    label: 'FAQ'
  }
];

export const Navbar = ({ user }: { user: User | null }) => {
  const router = useRouter();
  const { toast } = useToast();
  const api = createApiClient(createClient());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleAuth = async () => {
    if (user) {
      return router.push('/account');
    }
    return router.push('/auth');
  };
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container py-2 px-3 md:px-6 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <div className="flex gap-2 text-xl font-bold items-center">
              <img className="size-10" src="/Nexbattle.png" alt="logo" />
              <div className="flex">
                <h1 className="text-gray-100 font-titan">Nex Battle</h1>
              </div>
            </div>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2" asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white bg-background hover:bg-btn/80"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className="font-titan text-xl select-none">
                    Nex Battle
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {label}
                    </a>
                  ))}
                  <Link href="/Home" passHref>
                    <Button
                      className="px-4 py-0.5 font-bold text-sm text-white bg-btn hover:bg-btn/80"
                      variant="ghost"
                    >
                      Entrar
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2 bg-none ">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[14px] ${buttonVariants({
                  variant: 'ghost'
                })} hover:text-border text-white`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-4 p-2">
            <Link href="/Home" passHref>
              <Button
                className="px-4 py-0.5 font-inter rounded-xl text-sm text-btn bg-border hover:bg-border/80"
                variant="ghost"
              >
                Entrar
              </Button>
            </Link>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
