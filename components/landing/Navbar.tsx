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
    <header className="sticky top-0 z-50 w-full">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container py-2 px-3 md:p-6 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <div className="flex items-center">
              <img className="size-8" src="/Nexbattle.png" alt="logo" />
              <span className="font-inter text-lg text-text">Nex</span>
            </div>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden bg-transparent">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2 text-btn" asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-btn bg-transparent hover:bg-transparent"
                >
                  <Menu className="size-5 text-btn" />
                </Button>
              </SheetTrigger>

              <SheetContent
                className="w-full bg-background border-none text-btn"
                side={'right'}
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center select-none">
                    <img className="size-8" src="/Nexbattle.png" alt="logo" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center text-xl text-text font-titan gap-2 mt-7">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="mt-4 hover:text-btn transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                  <Link
                    className="w-full px-8 absolute bottom-10"
                    href="/Home"
                    passHref
                  >
                    <Button
                      className="w-full px-4 py-0.5 rounded-lg font-inter text-base text-text bg-btn/80 hover:bg-btn/70 transition-colors shadow-btn shadow-md drop-shadow-md"
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
          <nav className="hidden md:flex gap-2 bg-none text-sm font-inter">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[14px] ${
                  route.label === 'Inicio' ? 'text-btn' : 'text-white'
                } ${buttonVariants({ variant: 'ghost' })} hover:text-text/70`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-4">
            <Link href="/Home" passHref>
              <Button
                className="px-4 py-0.5 font-inter rounded-lg text-base shadow-btn shadow-md drop-shadow-md text-text bg-btn hover:bg-btn/80"
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
